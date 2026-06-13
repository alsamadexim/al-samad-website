import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

function TestimonialCard({ name, company, country, review, rating, index }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="p-6 rounded-2xl bg-card border border-border shadow-md hover:shadow-luxury transition-all duration-300 h-full flex flex-col"
    >
      <div className="flex items-center gap-1 mb-4">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-4 h-4 fill-accent text-accent" />
        ))}
      </div>
      <p className="text-muted-foreground leading-relaxed mb-6 flex-grow italic">
        "{review}"
      </p>
      <div className="border-t border-border pt-4">
        <p className="font-semibold text-foreground">{name}</p>
        <p className="text-sm text-muted-foreground">{company}</p>
        <p className="text-xs text-accent font-medium mt-1">{country}</p>
      </div>
    </motion.div>
  );
}

export default TestimonialCard;