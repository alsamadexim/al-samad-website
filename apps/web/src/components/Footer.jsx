import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, Mail, MapPin, Instagram, Facebook, Linkedin, ArrowRight } from 'lucide-react';
import logo from '@/assets/logo.png';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground pt-20 pb-8 border-t-4 border-accent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          <div className="space-y-6 lg:col-span-1">
            <Link to="/" className="inline-block bg-white p-2 rounded-lg">
              <img 
                src={logo}
                alt="AL-SAMAD GLOBAL TRADER" 
                className="h-14 w-auto"
              />
            </Link>
            <p className="text-secondary-foreground/80 text-sm leading-relaxed max-w-sm">
              Connecting Indian products with global markets through reliable sourcing, rigorous quality assurance, and timely delivery. Your trusted partner in global trade.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/alsamad.exim" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-secondary transition-colors" aria-label="Instagram">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-secondary transition-colors" aria-label="Facebook">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent hover:text-secondary transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-6 font-playfair">Quick Links</h4>
            <ul className="space-y-4">
              {['Home', 'About', 'Products', 'Services', 'Markets', 'Contact'].map((item) => (
                <li key={item}>
                  <Link 
                    to={item === 'Home' ? '/' : `/${item.toLowerCase()}`}
                    className="text-secondary-foreground/80 hover:text-accent transition-colors flex items-center text-sm"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-50" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-6 font-playfair">Our Categories</h4>
            <ul className="space-y-4">
              {['Fresh Fruits', 'Fresh Vegetables', 'Spices & Agro', 'Rice & Grains', 'Ready-to-Cook', 'Ready-to-Eat'].map((item) => (
                <li key={item}>
                  <Link 
                    to="/products"
                    className="text-secondary-foreground/80 hover:text-accent transition-colors flex items-center text-sm"
                  >
                    <ArrowRight className="w-4 h-4 mr-2 opacity-50" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold text-white mb-6 font-playfair">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-accent mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-secondary-foreground/80 text-sm leading-relaxed">
                  Vijayawada, Andhra Pradesh,<br />
                  India
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                <a href="tel:+918688607407" className="text-secondary-foreground/80 hover:text-white transition-colors text-sm">
                  +91 86886 07407
                </a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-accent mr-3 flex-shrink-0" />
                <a href="mailto:alsamadexim1209@gmail.com" className="text-secondary-foreground/80 hover:text-white transition-colors text-sm break-all">
                  alsamadexim1209@gmail.com
                </a>
              </li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-secondary-foreground/60 text-sm text-center md:text-left">
            &copy; {currentYear} AL-SAMAD GLOBAL TRADER. All rights reserved.
          </p>
          <div className="flex gap-6 text-sm text-secondary-foreground/60">
            <Link to="#" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="#" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}