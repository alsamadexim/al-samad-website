import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Truck, Globe, BadgeDollarSign, Users, Award, PackageCheck, Headphones } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import BenefitCard from '@/components/BenefitCard.jsx';

const HERO_SLIDES = [
  {
    image: 'https://images.pexels.com/photos/1427107/pexels-photo-1427107.jpeg?auto=compress&cs=tinysrgb&w=1600',
    word: 'SHIPMENT',
  },
  {
    image: 'https://images.pexels.com/photos/906494/pexels-photo-906494.jpeg?auto=compress&cs=tinysrgb&w=1600',
    word: 'REQUIREMENT',
  },
  {
    image: 'https://images.pexels.com/photos/2226458/pexels-photo-2226458.jpeg?auto=compress&cs=tinysrgb&w=1600',
    word: 'MARKET',
  },
  {
    image: 'https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg?auto=compress&cs=tinysrgb&w=1600',
    word: 'DELIVERY',
  },
];

export default function HomePage() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const featuredProducts = [
    { name: "Fresh Mangoes", image: "https://images.unsplash.com/photo-1580884199526-6292843d7105?auto=format&fit=crop&w=800&q=80", category: "Fruits" },
    { name: "Premium Grapes", image: "https://images.unsplash.com/photo-1596363505729-4190a9506133?auto=format&fit=crop&w=800&q=80", category: "Fruits" },
    { name: "Red Onions", image: "https://images.unsplash.com/photo-1588613000160-990883456f7c?auto=format&fit=crop&w=800&q=80", category: "Vegetables" },
    { name: "Raw Turmeric", image: "https://images.unsplash.com/photo-1698556735172-1b5b3cd9d2ce?auto=format&fit=crop&w=800&q=80", category: "Spices" },
    { name: "Frozen Foods", image: "https://images.unsplash.com/photo-1606787366850-de6330128bfc?auto=format&fit=crop&w=800&q=80", category: "Ready-to-Cook" },
    { name: "Packaged Snacks", image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60?auto=format&fit=crop&w=800&q=80", category: "Ready-to-Eat" },
  ];

  const benefits = [
    { title: "Quality Excellence", description: "Rigorous quality checks and certifications for every shipment.", icon: Award },
    { title: "Reliable Delivery", description: "Timely logistics and optimized supply chain worldwide.", icon: Truck },
    { title: "Global Reach", description: "Exporting across multiple continents with strong partnerships.", icon: Globe },
    { title: "Fair Pricing", description: "Competitive rates ensuring value without compromising quality.", icon: BadgeDollarSign },
    { title: "Expert Team", description: "Decades of combined experience in international trade.", icon: Users },
    { title: "Fast Shipping", description: "Priority cargo handling and secure transit solutions.", icon: PackageCheck },
    { title: "Compliance Certified", description: "Strict adherence to international food safety standards.", icon: ShieldCheck },
    { title: "Customer Support", description: "Dedicated 24/7 support for all your trade inquiries.", icon: Headphones },
  ];

  return (
    <div className="flex flex-col min-h-screen">
      <Helmet>
        <title>AL-SAMAD GLOBAL TRADER | Premium Exporter & Bulk Supplier from India</title>
        <meta name="description" content="Leading Indian exporter of fresh fruits, vegetables, spices, and packaged foods. Quality products, reliable delivery, and competitive bulk pricing globally." />
        <meta name="keywords" content="Indian exporter, fruits exporter India, spice exporter, bulk supplier India, import export company, global trader" />
      </Helmet>

      <Header />

      <main className="flex-grow pt-20">

        {/* HERO SECTION */}
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">

          {/* Background image slideshow */}
          {HERO_SLIDES.map((slide, idx) => (
            current === idx && (
              <motion.div
                key={idx}
                className="absolute inset-0"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1.2 }}
              >
                <img
                  src={slide.image}
                  alt=""
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-secondary/75" />
              </motion.div>
            )
          ))}

          {/* Hero content */}
          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-20 text-center">

            {/* Welcome line */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-accent font-semibold tracking-widest uppercase text-sm mb-4"
            >
              Welcome to AL-SAMAD GLOBAL TRADER
            </motion.p>

            {/* Main heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-3 leading-tight"
            >
              LEADING EXPORT PARTNER
            </motion.h1>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-3 leading-tight"
            >
              ACROSS THE GLOBE FOR EVERY -
            </motion.h1>

            {/* Rotating word */}
            <div className="h-24 flex items-center justify-center mb-6">
              <AnimatePresence mode="wait">
                <motion.h1
                  key={current}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -40 }}
                  transition={{ duration: 0.5 }}
                  className="text-4xl md:text-6xl lg:text-7xl font-bold text-accent"
                >
                  {HERO_SLIDES[current].word}
                </motion.h1>
              </AnimatePresence>
            </div>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg text-white/80 max-w-2xl mx-auto mb-10"
            >
              Connecting Indian products with global markets through reliable sourcing,
              rigorous quality assurance, and timely international delivery.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex flex-wrap gap-4 justify-center"
            >
              <Link
                to="/contact"
                className="px-8 py-4 bg-accent text-secondary font-bold rounded-lg hover:bg-yellow-400 transition-colors shadow-lg active:scale-95 flex items-center"
              >
                Request Quote
                <ArrowRight className="ml-2 w-5 h-5" />
              </Link>
              <Link
                to="/products"
                className="px-8 py-4 bg-white/10 text-white font-semibold rounded-lg hover:bg-white/20 backdrop-blur-sm border border-white/30 transition-colors active:scale-95"
              >
                Browse Products
              </Link>
            </motion.div>

            {/* Slide dots */}
            <div className="flex justify-center gap-2 mt-12">
              {HERO_SLIDES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setCurrent(idx)}
                  className={`h-2 rounded-full transition-all ${
                    current === idx ? 'bg-accent w-8' : 'bg-white/40 w-2'
                  }`}
                />
              ))}
            </div>
          </div>
        </section>

        {/* COMPANY INTRO */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="text-4xl font-bold text-foreground mb-6">Bridging India to the World</h2>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  Based in Vijayawada, Andhra Pradesh, AL-SAMAD GLOBAL TRADER stands as a beacon of trust in international trade. We specialize in sourcing the finest agricultural produce and packaged foods directly from Indian farmers and manufacturers.
                </p>
                <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                  Our commitment to quality excellence, transparent practices, and seamless logistics ensures that your bulk orders arrive fresh and on schedule, no matter where your business is located.
                </p>

                <div className="grid grid-cols-2 gap-6 mb-8">
                  <div className="border-l-4 border-accent pl-4">
                    <p className="text-3xl font-bold text-primary mb-1">20+</p>
                    <p className="text-sm font-medium text-foreground">Countries Served</p>
                  </div>
                  <div className="border-l-4 border-accent pl-4">
                    <p className="text-3xl font-bold text-primary mb-1">100%</p>
                    <p className="text-sm font-medium text-foreground">Quality Assured</p>
                  </div>
                </div>

                <Link to="/about" className="text-primary font-semibold hover:text-accent transition-colors inline-flex items-center">
                  Discover Our Story <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute inset-0 bg-primary/5 rounded-3xl transform translate-x-4 translate-y-4" />
                <img
                  src="https://images.unsplash.com/photo-1542838132-92c53300491e?auto=format&fit=crop&w=800&q=80"
                  alt="Quality Fresh Produce"
                  className="rounded-3xl shadow-xl relative z-10 w-full h-[500px] object-cover"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* FEATURED PRODUCTS */}
        <section className="py-24 bg-muted border-y border-border/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">Premium Export Categories</h2>
              <p className="text-lg text-muted-foreground">Explore our most demanded product ranges, sourced sustainably and processed under strict hygienic conditions.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {featuredProducts.map((product, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="group rounded-2xl overflow-hidden shadow-soft bg-card"
                >
                  <div className="relative h-64 overflow-hidden">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-primary text-xs font-bold rounded-full shadow-sm">
                        {product.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6 flex items-center justify-between border-t border-border/50">
                    <h3 className="text-xl font-bold text-foreground">{product.name}</h3>
                    <Link
                      to={`/contact?product=${encodeURIComponent(product.name)}`}
                      className="text-accent hover:text-primary transition-colors p-2 rounded-full hover:bg-accent/10"
                      aria-label={`Inquire about ${product.name}`}
                    >
                      <ArrowRight className="w-5 h-5" />
                    </Link>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="text-center mt-12">
              <Link
                to="/products"
                className="inline-flex items-center justify-center px-8 py-4 border-2 border-primary text-primary font-bold rounded-lg hover:bg-primary hover:text-white transition-all active:scale-95"
              >
                View Full Catalog
              </Link>
            </div>
          </div>
        </section>

        {/* WHY CHOOSE US */}
        <section className="py-24 bg-background">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-16">
              <h2 className="text-4xl font-bold text-foreground mb-4">Why Partner With Us?</h2>
              <p className="text-lg text-muted-foreground">We deliver more than just products; we deliver peace of mind and business growth for our international clients.</p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {benefits.map((benefit, idx) => (
                <BenefitCard
                  key={idx}
                  icon={benefit.icon}
                  title={benefit.title}
                  description={benefit.description}
                  index={idx}
                />
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}