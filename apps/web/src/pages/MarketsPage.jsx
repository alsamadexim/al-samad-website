import React from 'react';
import { Globe } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const REGIONS = [
  {
    name: 'Middle East',
    description: 'Our strongest export hub. We supply wholesalers, retail chains, and food distributors across Gulf countries with premium Indian agricultural products ensuring timely delivery.',
    markets: ['UAE', 'Saudi Arabia', 'Qatar', 'Kuwait', 'Oman', 'Bahrain'],
  },
  {
    name: 'Africa',
    description: 'Growing demand for quality Indian commodities across East and West Africa. We provide reliable supply chains for rice, pulses, and spices to key African markets.',
    markets: ['Nigeria', 'Kenya', 'South Africa', 'Tanzania'],
  },
  {
    name: 'Asia Pacific',
    description: 'Rapid transit access to high-demand Asian markets. We supply wholesalers and retail chains with fresh produce and commodities that retain peak quality.',
    markets: ['Malaysia', 'Singapore', 'Australia'],
  },
  {
    name: 'Europe',
    description: 'Strict adherence to EU quality standards. Our certified packaging and phytosanitary compliance make us a preferred partner for European importers.',
    markets: ['United Kingdom'],
  },
  {
    name: 'Americas',
    description: 'FDA-compliant food exports and USDA-aligned agricultural products. We manage complex long-haul logistics to deliver shelf-stable and fresh products.',
    markets: ['United States', 'Canada'],
  },
];

const STATS = [
  { value: '16+', label: 'Countries Served' },
  { value: '5', label: 'Continents' },
  { value: '500+', label: 'Metric Tons Exported' },
  { value: '50+', label: 'Global Partners' },
];

export default function MarketsPage() {
  return (
    <>
    <Header />
    <main className="min-h-screen bg-background pt-20">

      {/* Hero */}
      <section
        className="relative text-white py-32 px-4 text-center"
        style={{
          backgroundImage: 'linear-gradient(rgba(4,31,99,0.85), rgba(4,31,99,0.85)), url(https://images.unsplash.com/photo-1524661135-423995f22d0b?w=1600&q=80)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <h1 className="text-4xl md:text-5xl font-bold font-playfair mb-4">
          Global Reach
        </h1>
        <p className="text-white/70 max-w-2xl mx-auto text-lg">
          Connecting Indian agriculture to key international hubs with precision and reliability.
        </p>
      </section>

      {/* Stats */}
      <section className="bg-primary py-12 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {STATS.map((stat) => (
            <div key={stat.label}>
              <p className="text-3xl font-bold text-white font-playfair">{stat.value}</p>
              <p className="text-white/70 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Region Cards */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {REGIONS.map((region) => (
            <div
              key={region.name}
              className="bg-white rounded-xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col"
            >
              {/* Top accent line */}
              <div className="w-12 h-1 bg-primary rounded-full mb-6" />

              {/* Icon + Title */}
              <div className="flex items-center gap-3 mb-4">
                <Globe className="w-7 h-7 text-primary" />
                <h2 className="text-2xl font-bold text-secondary">{region.name}</h2>
              </div>

              {/* Description */}
              <p className="text-foreground/60 text-sm leading-relaxed mb-6 flex-1">
                {region.description}
              </p>

              {/* Key Markets */}
              <div>
                <div className="flex items-center gap-2 mb-3">
                  <Globe className="w-4 h-4 text-foreground/30" />
                  <p className="text-xs font-semibold text-foreground/40 uppercase tracking-wider">
                    Key Markets
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {region.markets.map((market) => (
                    <span
                      key={market}
                      className="px-3 py-1 border border-gray-200 rounded-full text-xs text-foreground/70 font-medium"
                    >
                      {market}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary py-16 px-4 text-center">
        <h2 className="text-3xl font-bold text-white font-playfair mb-4">
          Expand Into New Markets?
        </h2>
        <p className="text-white/60 mb-8 max-w-xl mx-auto">
          We are always looking for new partnerships. Contact us to discuss how we can serve your region.
        </p>
        <a
          href="/contact"
          className="inline-block px-8 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-all"
        >
          Get in Touch
        </a>
      </section>

    </main>
    <Footer />
    </>
  );
}