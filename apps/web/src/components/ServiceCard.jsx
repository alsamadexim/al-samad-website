import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ServiceCard({ icon: Icon, title, description, linkTo = "/contact" }) {
  return (
    <motion.div 
      whileHover={{ y: -5 }}
      className="p-8 bg-white/50 backdrop-blur-md rounded-2xl border border-white/40 shadow-soft hover:shadow-lg transition-all duration-300 group flex flex-col h-full"
    >
      <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white text-primary transition-colors duration-300">
        <Icon className="w-7 h-7" />
      </div>
      
      <h3 className="text-2xl font-bold text-foreground mb-4">
        {title}
      </h3>
      
      <p className="text-muted-foreground leading-relaxed flex-grow mb-8">
        {description}
      </p>
      
      <Link 
        to={linkTo}
        className="inline-flex items-center text-accent font-semibold hover:text-primary transition-colors mt-auto w-fit"
      >
        Learn More
        <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
      </Link>
    </motion.div>
  );
}