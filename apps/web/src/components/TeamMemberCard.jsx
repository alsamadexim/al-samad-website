import React from 'react';
import { motion } from 'framer-motion';

export default function TeamMemberCard({ photo, name, position, bio, expertise }) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-card rounded-2xl overflow-hidden shadow-soft border border-border group"
    >
      <div className="aspect-[4/3] overflow-hidden relative">
        <img 
          src={photo} 
          alt={name} 
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-secondary/90 via-secondary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
          <p className="text-white text-sm font-medium">Expert in {expertise}</p>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold text-foreground mb-1">{name}</h3>
        <p className="text-accent font-medium text-sm mb-4 uppercase tracking-wider">{position}</p>
        <p className="text-muted-foreground text-sm leading-relaxed">
          {bio}
        </p>
      </div>
    </motion.div>
  );
}