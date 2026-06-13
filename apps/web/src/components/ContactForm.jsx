import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import apiServerClient from '@/lib/apiServerClient.js';
import { useFormValidation } from '@/hooks/useFormValidation.js';

const PRODUCT_OPTIONS = [
  "Fresh Fruits",
  "Fresh Vegetables",
  "Spices & Agro Products",
  "Rice & Grains",
  "Ready-to-Cook Foods",
  "Ready-to-Eat Foods",
  "General Inquiry / Multiple Products",
  "Other"
];

export default function ContactForm() {
  const [searchParams] = useSearchParams();
  const prefillProduct = searchParams.get('product') || '';
  
  const { validateRequired, validateEmail, validatePhone, validateMinLength } = useFormValidation();

  const [formData, setFormData] = useState({
    name: '',
    company: '',
    country: '',
    email: '',
    phone: '',
    product: '',
    quantity: '',
    message: ''
  });

  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [serverMessage, setServerMessage] = useState('');

  // Update initial product if URL param matches options or set as custom if not found
  useEffect(() => {
    if (prefillProduct) {
      const match = PRODUCT_OPTIONS.find(opt => opt.toLowerCase().includes(prefillProduct.toLowerCase()));
      if (match) {
        setFormData(prev => ({ ...prev, product: match }));
      } else {
        setFormData(prev => ({ ...prev, product: prefillProduct }));
      }
    }
  }, [prefillProduct]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    // Clear error on type
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const newErrors = {};
    
    newErrors.name = validateRequired(formData.name, 'Full Name');
    newErrors.company = validateRequired(formData.company, 'Company Name');
    newErrors.country = validateRequired(formData.country, 'Country');
    newErrors.email = validateEmail(formData.email);
    newErrors.phone = validatePhone(formData.phone);
    newErrors.product = validateRequired(formData.product, 'Product Interest');
    newErrors.quantity = validateRequired(formData.quantity, 'Quantity');
    newErrors.message = validateMinLength(formData.message, 'Message', 10);

    // Filter out nulls
    Object.keys(newErrors).forEach(key => {
      if (!newErrors[key]) delete newErrors[key];
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      return;
    }

    setStatus('loading');
    setServerMessage('');

    try {
      const response = await apiServerClient.fetch('/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit inquiry. Please try again.');
      }

      setStatus('success');
      setServerMessage(data.message || 'Thank you! Your inquiry has been received. We will contact you shortly.');
      
      // Store in localStorage as fallback
      const inquiries = JSON.parse(localStorage.getItem('al_samad_inquiries') || '[]');
      inquiries.push({ ...formData, date: new Date().toISOString() });
      localStorage.setItem('al_samad_inquiries', JSON.stringify(inquiries));

      // Reset form
      setFormData({
        name: '',
        company: '',
        country: '',
        email: '',
        phone: '',
        product: '',
        quantity: '',
        message: ''
      });

      // Auto dismiss success
      setTimeout(() => {
        setStatus('idle');
        setServerMessage('');
      }, 5000);

    } catch (err) {
      setStatus('error');
      setServerMessage(err.message);
    }
  };

  return (
    <div className="bg-white p-8 rounded-2xl shadow-xl border border-border/50 relative">
      {status === 'success' && (
        <div className="absolute inset-0 bg-white/90 backdrop-blur-sm rounded-2xl flex flex-col items-center justify-center z-10 animate-in fade-in zoom-in duration-300 p-8 text-center">
          <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4">
            <CheckCircle2 className="w-8 h-8 text-green-600" />
          </div>
          <h3 className="text-2xl font-bold text-foreground mb-2">Success!</h3>
          <p className="text-muted-foreground">{serverMessage}</p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        {status === 'error' && (
          <div className="p-4 bg-red-50 text-red-800 rounded-lg flex items-start text-sm border border-red-200">
            <AlertCircle className="w-5 h-5 mr-2 flex-shrink-0 mt-0.5" />
            <p>{serverMessage}</p>
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium text-foreground">Full Name *</label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg border bg-background text-foreground focus:ring-2 focus:ring-primary/50 outline-none transition-all ${errors.name ? 'border-destructive' : 'border-border'}`}
              placeholder="John Doe"
            />
            {errors.name && <p className="text-xs text-destructive mt-1">{errors.name}</p>}
          </div>

          <div className="space-y-2">
            <label htmlFor="company" className="text-sm font-medium text-foreground">Company Name *</label>
            <input
              id="company"
              name="company"
              type="text"
              value={formData.company}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg border bg-background text-foreground focus:ring-2 focus:ring-primary/50 outline-none transition-all ${errors.company ? 'border-destructive' : 'border-border'}`}
              placeholder="Acme Trading Co."
            />
            {errors.company && <p className="text-xs text-destructive mt-1">{errors.company}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium text-foreground">Email Address *</label>
            <input
              id="email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg border bg-background text-foreground focus:ring-2 focus:ring-primary/50 outline-none transition-all ${errors.email ? 'border-destructive' : 'border-border'}`}
              placeholder="john@example.com"
            />
            {errors.email && <p className="text-xs text-destructive mt-1">{errors.email}</p>}
          </div>

          <div className="space-y-2">
            <label htmlFor="phone" className="text-sm font-medium text-foreground">Phone / WhatsApp *</label>
            <input
              id="phone"
              name="phone"
              type="tel"
              value={formData.phone}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg border bg-background text-foreground focus:ring-2 focus:ring-primary/50 outline-none transition-all ${errors.phone ? 'border-destructive' : 'border-border'}`}
              placeholder="+1 234 567 890"
            />
            {errors.phone && <p className="text-xs text-destructive mt-1">{errors.phone}</p>}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label htmlFor="country" className="text-sm font-medium text-foreground">Country *</label>
            <input
              id="country"
              name="country"
              type="text"
              value={formData.country}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg border bg-background text-foreground focus:ring-2 focus:ring-primary/50 outline-none transition-all ${errors.country ? 'border-destructive' : 'border-border'}`}
              placeholder="United Arab Emirates"
            />
            {errors.country && <p className="text-xs text-destructive mt-1">{errors.country}</p>}
          </div>

          <div className="space-y-2">
            <label htmlFor="quantity" className="text-sm font-medium text-foreground">Quantity Required *</label>
            <input
              id="quantity"
              name="quantity"
              type="text"
              value={formData.quantity}
              onChange={handleChange}
              className={`w-full px-4 py-3 rounded-lg border bg-background text-foreground focus:ring-2 focus:ring-primary/50 outline-none transition-all ${errors.quantity ? 'border-destructive' : 'border-border'}`}
              placeholder="e.g., 20 MT, 1x40ft Container"
            />
            {errors.quantity && <p className="text-xs text-destructive mt-1">{errors.quantity}</p>}
          </div>
        </div>

        <div className="space-y-2">
          <label htmlFor="product" className="text-sm font-medium text-foreground">Product Interested In *</label>
          <select
            id="product"
            name="product"
            value={formData.product}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg border bg-background text-foreground focus:ring-2 focus:ring-primary/50 outline-none transition-all ${errors.product ? 'border-destructive' : 'border-border'}`}
          >
            <option value="" disabled>Select a product category...</option>
            {PRODUCT_OPTIONS.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
            {/* If the pre-filled product isn't in our main categories list, show it anyway */}
            {formData.product && !PRODUCT_OPTIONS.includes(formData.product) && (
              <option value={formData.product}>{formData.product}</option>
            )}
          </select>
          {errors.product && <p className="text-xs text-destructive mt-1">{errors.product}</p>}
        </div>

        <div className="space-y-2">
          <label htmlFor="message" className="text-sm font-medium text-foreground">Message / Additional Requirements *</label>
          <textarea
            id="message"
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className={`w-full px-4 py-3 rounded-lg border bg-background text-foreground focus:ring-2 focus:ring-primary/50 outline-none transition-all resize-none ${errors.message ? 'border-destructive' : 'border-border'}`}
            placeholder="Please specify packaging needs, destination port, or any other requirements..."
          />
          {errors.message && <p className="text-xs text-destructive mt-1">{errors.message}</p>}
        </div>

        <button
          type="submit"
          disabled={status === 'loading'}
          className="w-full py-4 px-6 bg-accent text-secondary hover:bg-accent/90 font-bold rounded-lg transition-all duration-200 active:scale-[0.98] disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center shadow-md"
        >
          {status === 'loading' ? (
            <>
              <Loader2 className="w-5 h-5 animate-spin mr-2" />
              Sending...
            </>
          ) : (
            'Send Inquiry'
          )}
        </button>
      </form>
    </div>
  );
}