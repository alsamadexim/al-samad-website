import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProductCard({ productName, description, features, image }) {
  return (
    <motion.div 
      whileHover={{ y: -8 }}
      className="flex flex-col h-full bg-card rounded-2xl overflow-hidden shadow-soft border border-border/50 transition-all duration-300 group"
    >
      <div className="relative h-56 overflow-hidden">
        <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-300 z-10" />
        <img 
          src={image} 
          alt={productName} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-black/80 to-transparent z-20">
          <h3 className="text-2xl font-bold text-white mb-1 drop-shadow-md">{productName}</h3>
        </div>
      </div>
      
      <div className="p-6 flex flex-col flex-grow">
        <p className="text-muted-foreground mb-6 leading-relaxed flex-grow">
          {description}
        </p>
        
        <ul className="space-y-2 mb-8">
          {features.map((feature, idx) => (
            <li key={idx} className="flex items-start text-sm text-foreground/80">
              <Check className="w-4 h-4 text-accent mt-0.5 mr-2 flex-shrink-0" />
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        
        <Link 
          to={`/contact?product=${encodeURIComponent(productName)}`}
          className="mt-auto flex items-center justify-center w-full py-3 px-4 bg-primary/5 text-primary hover:bg-primary hover:text-white font-semibold rounded-lg transition-colors duration-300 group/btn"
        >
          Request Quote
          <ArrowRight className="w-4 h-4 ml-2 transform group-hover/btn:translate-x-1 transition-transform" />
        </Link>
      </div>
    </motion.div>
  );
}