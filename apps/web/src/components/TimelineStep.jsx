import React from 'react';
import { motion } from 'framer-motion';

function TimelineStep({ step, title, description, index, isLast }) {
  return (
    <motion.div
      initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative flex items-center gap-8"
    >
      <div className={`flex-1 ${index % 2 === 0 ? 'text-right' : 'order-2'}`}>
        <div className="inline-block p-6 rounded-2xl bg-card border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg">
          <h3 className="text-xl font-semibold text-foreground mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">{description}</p>
        </div>
      </div>
      <div className="relative flex flex-col items-center">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold shadow-lg z-10">
          {step}
        </div>
        {!isLast && (
          <div className="absolute top-12 w-0.5 h-24 bg-gradient-to-b from-primary to-accent/30"></div>
        )}
      </div>
      <div className={`flex-1 ${index % 2 === 0 ? 'order-2' : ''}`}></div>
    </motion.div>
  );
}

export default TimelineStep;