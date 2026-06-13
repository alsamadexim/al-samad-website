import React from 'react';
import { motion } from 'framer-motion';

export default function BenefitCard({ icon: Icon, title, description, index = 0 }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1 }}
      className="flex gap-4 p-6 bg-card rounded-2xl shadow-sm hover:shadow-md border border-border/50 transition-shadow"
    >
      <div className="flex-shrink-0 mt-1">
        <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center text-accent">
          <Icon className="w-6 h-6" />
        </div>
      </div>
      <div>
        <h4 className="text-lg font-bold text-foreground mb-2">{title}</h4>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
      </div>
    </motion.div>
  );
}