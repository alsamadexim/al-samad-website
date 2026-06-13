import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Target, Eye, Star, HeartHandshake, ShieldCheck, Globe2 } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

export default function AboutPage() {
  const coreValues = [
    { title: "Quality Excellence", desc: "Never compromising on the standards of our exports.", icon: Star },
    { title: "Customer Trust", desc: "Building transparent, honest relationships with buyers.", icon: HeartHandshake },
    { title: "Reliable Delivery", desc: "Ensuring your cargo reaches its destination on time.", icon: ShieldCheck },
    { title: "Global Perspective", desc: "Understanding diverse market needs and compliance.", icon: Globe2 },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Helmet>
        <title>About Us | AL-SAMAD GLOBAL TRADER</title>
        <meta name="description" content="Learn about AL-SAMAD GLOBAL TRADER, a premier Indian export company committed to quality, reliability, and long-term global partnerships." />
      </Helmet>

      <Header />

      <main className="flex-grow pt-20">
        {/* PAGE HEADER */}
        <div className="bg-secondary py-20 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 -right-40 w-96 h-96 bg-accent rounded-full blur-3xl" />
            <div className="absolute bottom-0 -left-40 w-96 h-96 bg-primary rounded-full blur-3xl" />
          </div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Story</h1>
            <p className="text-lg text-white/80 max-w-2xl mx-auto">
              Built on a foundation of trust and a passion for bringing India's finest to the world.
            </p>
          </div>
        </div>

        {/* STORY SECTION */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <img 
                  src="https://images.unsplash.com/photo-1578575437130-527eed3abbec" 
                  alt="Warehouse operations" 
                  className="rounded-2xl shadow-xl w-full h-[600px] object-cover"
                />
              </motion.div>
              
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h2 className="text-3xl font-bold text-foreground mb-2">Heritage of Trading Excellence</h2>
                <div className="w-20 h-1 bg-accent mb-8" />
                
                <p className="text-muted-foreground leading-relaxed">
                  AL-SAMAD GLOBAL TRADER emerged from a deep-rooted understanding of India's vast agricultural wealth and the growing global demand for premium, authentic products. Based in the strategic hub of Vijayawada, we have positioned ourselves as a vital link in the international supply chain.
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  Our journey began with a simple yet powerful premise: to provide international buyers with a hassle-free, transparent, and highly reliable sourcing experience. We realized that navigating export compliance, quality control, and shipping logistics can be daunting. We take that burden off your shoulders.
                </p>
                <p className="text-muted-foreground leading-relaxed font-medium">
                  Today, we are proud to export an expansive portfolio—ranging from fresh farm produce to processed and ready-to-eat foods—to clients across the Middle East, Europe, Africa, and beyond.
                </p>

                <div className="grid grid-cols-2 gap-6 pt-6 border-t border-border mt-8">
                  <div>
                    <h4 className="text-4xl font-bold text-primary mb-2">99%</h4>
                    <p className="text-sm font-medium text-foreground">Client Retention Rate</p>
                  </div>
                  <div>
                    <h4 className="text-4xl font-bold text-primary mb-2">150+</h4>
                    <p className="text-sm font-medium text-foreground">Products Exported</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* MISSION & VISION */}
        <section className="py-20 bg-muted border-y border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8">
              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-card p-10 rounded-2xl shadow-soft border border-border/50"
              >
                <div className="w-16 h-16 bg-primary/10 text-primary rounded-2xl flex items-center justify-center mb-6">
                  <Target className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-foreground mb-4">Our Mission</h3>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  "Connecting India to global buyers with premium quality products and reliable service. We strive to simplify global trade by maintaining uncompromising standards in sourcing, packaging, and logistics."
                </p>
              </motion.div>

              <motion.div 
                whileHover={{ y: -5 }}
                className="bg-secondary p-10 rounded-2xl shadow-soft border border-secondary"
              >
                <div className="w-16 h-16 bg-accent/20 text-accent rounded-2xl flex items-center justify-center mb-6">
                  <Eye className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Our Vision</h3>
                <p className="text-white/80 leading-relaxed text-lg">
                  "To become the most trusted and preferred global supplier of Indian agricultural and food products, recognized worldwide for our integrity, speed, and quality excellence."
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CORE VALUES */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">Our Core Values</h2>
            <p className="text-muted-foreground mb-16 max-w-2xl mx-auto">The principles that guide our daily operations and long-term strategy.</p>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {coreValues.map((value, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex flex-col items-center p-6"
                >
                  <div className="w-20 h-20 rounded-full bg-accent/10 flex items-center justify-center text-accent mb-6 border border-accent/20">
                    <value.icon className="w-8 h-8" />
                  </div>
                  <h4 className="text-xl font-bold text-foreground mb-3">{value.title}</h4>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}