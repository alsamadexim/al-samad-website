import express from 'express';
import nodemailer from 'nodemailer';
import logger from '../utils/logger.js';

const router = express.Router();

// Email validation regex
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Validate email format
const isValidEmail = (email) => emailRegex.test(email);

// POST /contact - Handle contact form submissions
router.post('/', async (req, res) => {
  const { name, company, country, email, phone, product, quantity, message } = req.body;

  // Validate all required fields are present and non-empty
  if (!name || typeof name !== 'string' || name.trim() === '') {
    return res.status(400).json({ error: 'Name is required' });
  }

  if (!company || typeof company !== 'string' || company.trim() === '') {
    return res.status(400).json({ error: 'Company is required' });
  }

  if (!country || typeof country !== 'string' || country.trim() === '') {
    return res.status(400).json({ error: 'Country is required' });
  }

  if (!email || typeof email !== 'string' || email.trim() === '') {
    return res.status(400).json({ error: 'Email is required' });
  }

  // Validate email format
  if (!isValidEmail(email.trim())) {
    return res.status(400).json({ error: 'Invalid email format' });
  }

  if (!phone || typeof phone !== 'string' || phone.trim() === '') {
    return res.status(400).json({ error: 'Phone is required' });
  }

  if (!product || typeof product !== 'string' || product.trim() === '') {
    return res.status(400).json({ error: 'Product is required' });
  }

  if (!quantity || typeof quantity !== 'string' || quantity.trim() === '') {
    return res.status(400).json({ error: 'Quantity is required' });
  }

  if (!message || typeof message !== 'string' || message.trim() === '') {
    return res.status(400).json({ error: 'Message is required' });
  }

  // Validate message length >= 10 characters
  if (message.trim().length < 10) {
    return res.status(400).json({ error: 'Message must be at least 10 characters long' });
  }

  // Prepare inquiry data
  const inquiryData = {
    name: name.trim(),
    company: company.trim(),
    country: country.trim(),
    email: email.trim(),
    phone: phone.trim(),
    product: product.trim(),
    quantity: quantity.trim(),
    message: message.trim(),
    timestamp: new Date().toISOString(),
  };

  logger.info('New contact form inquiry received:', JSON.stringify(inquiryData, null, 2));

  // Send email
  await sendInquiryEmail(inquiryData);

  // Return success response to frontend
  res.json({
    success: true,
    message: 'Inquiry submitted successfully',
  });
});

// Send inquiry email using nodemailer
const sendInquiryEmail = async (inquiryData) => {
  // Validate SMTP configuration
  if (!process.env.SMTP_HOST || !process.env.SMTP_PORT || !process.env.SMTP_USER || !process.env.SMTP_PASS) {
    logger.warn('Email service not configured - skipping email send');
    return;
  }

  // Create transporter
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT, 10),
    secure: process.env.SMTP_SECURE === 'true',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  const htmlBody = generateEmailHTML(inquiryData);

  // Send email - let errors throw to errorMiddleware
  await transporter.sendMail({
    from: process.env.SMTP_USER,
    to: 'alsamadexim1209@gmail.com',
    subject: `New Inquiry from ${inquiryData.name} - AL-SAMAD GLOBAL TRADER`,
    html: htmlBody,
  });

  logger.info(`Email sent successfully for inquiry from ${inquiryData.email}`);
};

// Generate professional HTML email body
const generateEmailHTML = (data) => {
  return `
    <!DOCTYPE html>
    <html>
      <head>
        <meta charset="UTF-8">
        <style>
          body { font-family: Arial, sans-serif; line-height: 1.6; color: #333; }
          .container { max-width: 600px; margin: 0 auto; padding: 20px; background-color: #f9f9f9; }
          .header { background-color: #2c3e50; color: white; padding: 20px; text-align: center; border-radius: 5px 5px 0 0; }
          .content { background-color: white; padding: 20px; border-radius: 0 0 5px 5px; }
          .field { margin-bottom: 15px; }
          .label { font-weight: bold; color: #2c3e50; margin-bottom: 5px; }
          .value { padding: 10px; background-color: #f0f0f0; border-left: 3px solid #2c3e50; padding-left: 10px; }
          .footer { margin-top: 20px; padding-top: 20px; border-top: 1px solid #ddd; font-size: 12px; color: #666; text-align: center; }
        </style>
      </head>
      <body>
        <div class="container">
          <div class="header">
            <h1>New Inquiry - AL-SAMAD GLOBAL TRADER</h1>
          </div>
          <div class="content">
            <div class="field">
              <div class="label">Name:</div>
              <div class="value">${escapeHtml(data.name)}</div>
            </div>
            <div class="field">
              <div class="label">Company:</div>
              <div class="value">${escapeHtml(data.company)}</div>
            </div>
            <div class="field">
              <div class="label">Country:</div>
              <div class="value">${escapeHtml(data.country)}</div>
            </div>
            <div class="field">
              <div class="label">Email:</div>
              <div class="value"><a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></div>
            </div>
            <div class="field">
              <div class="label">Phone:</div>
              <div class="value">${escapeHtml(data.phone)}</div>
            </div>
            <div class="field">
              <div class="label">Product Interested:</div>
              <div class="value">${escapeHtml(data.product)}</div>
            </div>
            <div class="field">
              <div class="label">Quantity Required:</div>
              <div class="value">${escapeHtml(data.quantity)}</div>
            </div>
            <div class="field">
              <div class="label">Message:</div>
              <div class="value">${escapeHtml(data.message).replace(/\n/g, '<br>')}</div>
            </div>
            <div class="footer">
              <p>Inquiry received on: ${data.timestamp}</p>
              <p>This is an automated message. Please do not reply to this email.</p>
            </div>
          </div>
        </div>
      </body>
    </html>
  `;
};

// Escape HTML special characters to prevent injection
const escapeHtml = (text) => {
  const map = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (char) => map[char]);
};

export default router;