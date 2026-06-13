import React from 'react';
import { Helmet } from 'react-helmet';
import { MapPin, Phone, Mail, Clock, MessageSquare } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ContactForm from '@/components/ContactForm.jsx';

export default function ContactPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Helmet>
        <title>Contact Us | AL-SAMAD GLOBAL TRADER</title>
        <meta name="description" content="Get in touch with AL-SAMAD GLOBAL TRADER for bulk export inquiries, private labeling, and custom trade solutions." />
      </Helmet>

      <Header />

      <main className="flex-grow pt-20">
        <div className="bg-secondary py-16 border-b-4 border-accent">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Contact Our Export Team</h1>
            <p className="text-white/80 text-lg max-w-2xl mx-auto">
              Ready to place a bulk order or need a custom export quote? Our specialists are available 24/7 to assist you.
            </p>
          </div>
        </div>

        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-12 gap-12">
              
              {/* Contact Information Sidebar */}
              <div className="lg:col-span-4 space-y-8">
                <div>
                  <h2 className="text-2xl font-bold text-foreground mb-6">Get In Touch</h2>
                  <p className="text-muted-foreground mb-8">Reach out via form, email, or phone. We aim to respond to all inquiries within 12 hours.</p>
                </div>

                <div className="space-y-6">
                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mr-4">
                      <MapPin className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">Corporate Office</h4>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        AL-SAMAD GLOBAL TRADER<br/>
                        Vijayawada, Andhra Pradesh<br/>
                        India
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mr-4">
                      <Phone className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">Phone / WhatsApp</h4>
                      <a href="tel:+918688607407" className="text-muted-foreground text-sm hover:text-primary transition-colors">
                        +91 86886 07407
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mr-4">
                      <Mail className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">Email Address</h4>
                      <a href="mailto:alsamadexim1209@gmail.com" className="text-muted-foreground text-sm hover:text-primary transition-colors break-all">
                        alsamadexim1209@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary flex-shrink-0 mr-4">
                      <Clock className="w-6 h-6" />
                    </div>
                    <div>
                      <h4 className="font-bold text-foreground mb-1">Business Hours</h4>
                      <p className="text-muted-foreground text-sm">
                        Monday - Saturday: 9:00 AM - 7:00 PM (IST)<br/>
                        Sunday: Closed
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 bg-accent/10 rounded-2xl border border-accent/20 mt-8">
                  <h4 className="font-bold text-foreground mb-2 flex items-center">
                    <MessageSquare className="w-5 h-5 text-accent mr-2" />
                    Quick WhatsApp Chat
                  </h4>
                  <p className="text-sm text-muted-foreground mb-4">Need instant answers? Message our sales team directly on WhatsApp.</p>
                  <a 
                    href="https://wa.me/918688607407" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-block w-full text-center px-4 py-2.5 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors"
                  >
                    Chat on WhatsApp
                  </a>
                </div>
              </div>

              {/* Contact Form Container */}
              <div className="lg:col-span-8">
                <ContactForm />
              </div>

            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}