import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export const POSTS = [
  {
    slug: 'indian-spices-middle-east',
    category: 'Spices',
    readTime: '5 min read',
    title: 'Why Indian Spices Are in High Demand Across the Middle East',
    excerpt: 'Exploring the growing export trends of Indian spices and what makes them a preferred choice for Gulf importers.',
    date: 'June 1, 2026',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?w=1200&q=80',
    content: `Indian spices have long been prized for their quality, aroma, and authenticity, and demand across Gulf countries continues to climb year after year. From turmeric and cumin to cardamom and chili powder, importers in the UAE, Saudi Arabia, and Qatar consistently turn to Indian suppliers for consistency in flavor and supply.

One major driver is the growing food service and retail sector across the Middle East, where authentic Indian and South Asian cuisine has become mainstream. Restaurants, hotels, and packaged food manufacturers all require a steady, high-quality supply chain — something Indian exporters are well positioned to provide thanks to established farming networks and processing infrastructure.

Quality control plays a major role too. Buyers look for suppliers who can guarantee moisture content, purity, and absence of contaminants, all verified through lab testing and proper certification. At AL-SAMAD GLOBAL TRADER, every batch is checked for these parameters before it leaves our facility, ensuring our partners receive consistent, market-ready products every time.

Looking ahead, we expect demand to keep growing as more Gulf-based businesses seek long-term, reliable trade partnerships with Indian exporters who can scale with their needs.`,
  },
  {
    slug: 'quality-standards-bulk-exporters',
    category: 'Quality & Compliance',
    readTime: '4 min read',
    title: 'Quality Standards Every Bulk Exporter Must Follow',
    excerpt: 'A look at the certifications and quality checks that ensure our products meet international standards.',
    date: 'May 20, 2026',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=1200&q=80',
    content: `For any exporter dealing in bulk agricultural products, quality assurance isn't optional — it's the foundation of every successful trade relationship. International buyers expect documentation, certifications, and consistency that match their local regulatory requirements.

Some of the key certifications buyers commonly look for include FSSAI registration, phytosanitary certificates for plant-based products, and in many cases, ISO or HACCP certification depending on the destination country. These documents aren't just paperwork — they represent a verified process of handling, storage, and packaging that protects product integrity from farm to port.

At AL-SAMAD GLOBAL TRADER, every shipment goes through a multi-step quality check: moisture testing, visual inspection for foreign matter, packaging integrity checks, and proper labeling in line with the destination country's import regulations. This reduces the risk of shipments being held at customs and builds long-term trust with our overseas partners.

As global food safety standards continue to tighten, exporters who invest early in robust quality systems will be the ones who retain and grow their international client base.`,
  },
  {
    slug: 'shipping-logistics-overseas',
    category: 'Logistics',
    readTime: '6 min read',
    title: 'Navigating Logistics: Shipping Agricultural Products Overseas',
    excerpt: 'How we manage cold chains, packaging, and documentation for smooth international delivery.',
    date: 'May 5, 2026',
    image: 'https://images.unsplash.com/photo-1494412651409-8963ce7935a7?w=1200&q=80',
    content: `Shipping agricultural products internationally involves far more than just loading containers onto a vessel. Every step — from packaging to documentation to port handling — affects whether a shipment arrives in the same condition it left in.

Packaging is the first line of defense. Depending on the product, we use moisture-resistant liners, vacuum-sealed packaging, or jute and PP bags suited to the specific commodity and shipping duration. For temperature-sensitive goods, reefer containers maintain consistent conditions throughout transit, preventing spoilage even on long-haul routes.

Documentation is equally critical. A complete export package typically includes a commercial invoice, packing list, certificate of origin, phytosanitary certificate, and bill of lading. Missing or incorrect documents are one of the most common reasons shipments get delayed at customs, so we double-check every document before dispatch.

Finally, working with reliable freight forwarders and shipping lines ensures predictable transit times. We coordinate closely with our logistics partners to track shipments in real time and proactively communicate any delays to our buyers — because in international trade, transparency is just as important as the product itself.`,
  },
];

export default function BlogPage() {
  return (
    <>
    <Header />
    <main className="min-h-screen bg-background pt-20">

      {/* Hero */}
      <section className="bg-secondary text-white py-24 px-4 text-center">
        <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-3">
          Insights & Updates
        </p>
        <h1 className="text-4xl md:text-5xl font-bold font-playfair mb-4">
          Our Blog
        </h1>
        <p className="text-white/70 max-w-2xl mx-auto text-lg">
          News, trends, and insights from the world of global agricultural trade.
        </p>
      </section>

      {/* Posts Grid */}
      <section className="py-20 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {POSTS.map((post) => (
            <Link
              to={`/blog/${post.slug}`}
              key={post.slug}
              className="group bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow flex flex-col"
            >
              <img
                src={post.image}
                alt={post.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6 flex flex-col flex-1">
                <div className="flex items-center gap-2 text-xs text-foreground/50 mb-3">
                  <Calendar className="w-4 h-4" />
                  {post.date}
                </div>
                <h2 className="text-lg font-bold text-secondary mb-3 leading-snug">
                  {post.title}
                </h2>
                <p className="text-sm text-foreground/60 leading-relaxed mb-6 flex-1">
                  {post.excerpt}
                </p>
                <span className="inline-flex items-center justify-center gap-2 text-primary font-semibold text-sm border border-primary/20 rounded-lg px-4 py-2 group-hover:bg-primary group-hover:text-white group-hover:border-primary transition-colors">
                  Read More <ArrowRight className="w-4 h-4" />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="bg-primary py-16 px-4 text-center">
        <h2 className="text-3xl font-bold text-white font-playfair mb-4">
          Have a Question?
        </h2>
        <p className="text-white/70 mb-8 max-w-xl mx-auto">
          Reach out to our team for product details, pricing, or partnership inquiries.
        </p>
        <Link
          to="/contact"
          className="inline-block px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-all"
        >
          Contact Us
        </Link>
      </section>

    </main>
    <Footer />
    </>
  );
}