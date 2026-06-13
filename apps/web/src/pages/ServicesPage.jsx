import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Globe, PackageOpen, Tag, Ship, FileCheck, Layers } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ServiceCard from '@/components/ServiceCard.jsx';

export default function ServicesPage() {
  const services = [
    {
      icon: Globe,
      title: "End-to-End Export Services",
      description: "We handle the entire export lifecycle including documentation, customs clearance, port handling, and compliance with international trade laws.",
    },
    {
      icon: Layers,
      title: "Bulk Supply & Sourcing",
      description: "Direct sourcing from verified farms and factories allows us to fulfill large quantity orders with flexible sizing and highly competitive pricing.",
    },
    {
      icon: Tag,
      title: "Private Labeling / OEM",
      description: "Launch your own brand globally. We offer custom branding, labeling, and packaging solutions tailored to your retail market requirements.",
    },
    {
      icon: Ship,
      title: "Global Shipping & Logistics",
      description: "Partnered with top freight forwarders, we provide LCL, FCL, and air freight options with real-time tracking and cargo insurance.",
    },
    {
      icon: FileCheck,
      title: "Quality Inspection & Certification",
      description: "Every shipment undergoes rigorous quality control, lab testing (if required), and comes with necessary phytosanitary and health certificates.",
    },
    {
      icon: PackageOpen,
      title: "Custom Packaging Solutions",
      description: "From food-grade bulk bags to consumer-ready retail packs, we use premium materials to ensure freshness and safety during long transits.",
    }
  ];

  const processSteps = [
    { num: "01", title: "Inquiry & Requirement", desc: "Share your exact product needs, quantities, and target destination." },
    { num: "02", title: "Quotation & Sampling", desc: "We provide competitive CIF/FOB pricing and arrange samples if needed." },
    { num: "03", title: "Production & Quality Check", desc: "Goods are sourced, processed, and inspected against international standards." },
    { num: "04", title: "Documentation & Shipping", desc: "We handle all customs paperwork and load the cargo for secure transit." },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Helmet>
        <title>Export Services & Solutions | AL-SAMAD GLOBAL TRADER</title>
        <meta name="description" content="Comprehensive export services including bulk supply, private labeling, customs documentation, and global shipping logistics." />
      </Helmet>

      <Header />

      <main className="flex-grow pt-20">
        <div className="bg-secondary py-16 text-center border-b-4 border-accent">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Services</h1>
            <p className="text-white/80 text-lg">
              Tailored solutions designed to make international trade seamless, secure, and highly profitable for your business.
            </p>
          </div>
        </div>

        <section className="py-24 bg-muted relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, idx) => (
                <ServiceCard 
                  key={idx}
                  icon={service.icon}
                  title={service.title}
                  description={service.description}
                />
              ))}
            </div>
          </div>
        </section>

        <section className="py-24 bg-white border-t border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">How We Work</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">A streamlined, transparent process from your first inquiry to final delivery at your port.</p>
            </div>

            <div className="relative">
              {/* Line connector for desktop */}
              <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2 z-0" />
              
              <div className="grid lg:grid-cols-4 gap-8 relative z-10">
                {processSteps.map((step, idx) => (
                  <motion.div 
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                    className="bg-card p-8 rounded-2xl shadow-soft border border-border text-center relative"
                  >
                    <div className="w-16 h-16 bg-primary text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-6 shadow-md shadow-primary/30 font-playfair">
                      {step.num}
                    </div>
                    <h4 className="text-xl font-bold text-foreground mb-3">{step.title}</h4>
                    <p className="text-muted-foreground text-sm leading-relaxed">{step.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}