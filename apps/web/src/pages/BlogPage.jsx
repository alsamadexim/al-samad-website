import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

import spicesImg from '@/assets/blog/spices.png';
import qualityImg from '@/assets/blog/quality.png';
import logisticsImg from '@/assets/blog/logistics.png';
import fruitsImg from '@/assets/blog/fruits.png';
import moringaImg from '@/assets/blog/moringa.png';
import partnershipsImg from '@/assets/blog/partnerships.png';

export const POSTS = [
  {
    slug: 'indian-spices-middle-east',
    category: 'Spices',
    readTime: '5 min read',
    title: 'Why Indian Spices Are in High Demand Across the Middle East',
    excerpt: 'Exploring the growing export trends of Indian spices and what makes them a preferred choice for Gulf importers.',
    date: 'June 1, 2026',
    image: spicesImg,
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
    image: qualityImg,
    content: `For any exporter dealing in bulk agricultural products, quality assurance is not optional — it is the foundation of every successful trade relationship. International buyers expect documentation, certifications, and consistency that match their local regulatory requirements.

Some of the key certifications buyers commonly look for include FSSAI registration, phytosanitary certificates for plant-based products, and in many cases, ISO or HACCP certification depending on the destination country. These documents are not just paperwork — they represent a verified process of handling, storage, and packaging that protects product integrity from farm to port.

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
    image: logisticsImg,
    content: `Shipping agricultural products internationally involves far more than just loading containers onto a vessel. Every step — from packaging to documentation to port handling — affects whether a shipment arrives in the same condition it left in.

Packaging is the first line of defense. Depending on the product, we use moisture-resistant liners, vacuum-sealed packaging, or jute and PP bags suited to the specific commodity and shipping duration. For temperature-sensitive goods, reefer containers maintain consistent conditions throughout transit, preventing spoilage even on long-haul routes.

Documentation is equally critical. A complete export package typically includes a commercial invoice, packing list, certificate of origin, phytosanitary certificate, and bill of lading. Missing or incorrect documents are one of the most common reasons shipments get delayed at customs, so we double-check every document before dispatch.

Finally, working with reliable freight forwarders and shipping lines ensures predictable transit times. We coordinate closely with our logistics partners to track shipments in real time and proactively communicate any delays to our buyers — because in international trade, transparency is just as important as the product itself.`,
  },
  {
    slug: 'fresh-fruits-export-india',
    category: 'Fruits',
    readTime: '5 min read',
    title: "India's Fresh Fruit Export Boom: Opportunities for Global Buyers",
    excerpt: "How Indian fruit exporters are meeting rising global demand with better packaging and cold chain solutions.",
    date: 'April 18, 2026',
    image: fruitsImg,
    content: `India is one of the largest producers of tropical fruits in the world, and its export sector has been growing steadily as infrastructure and packaging technology improve. Mangoes, pomegranates, bananas, and grapes are among the most exported varieties, with buyers in the Middle East, Europe, and Southeast Asia leading demand.

What has changed significantly in recent years is the investment in post-harvest handling. Cold storage facilities near major farming regions, better packaging materials, and more reliable reefer container services have dramatically reduced spoilage during transit. Buyers now receive fresher product with longer shelf life than was possible even five years ago.

For bulk buyers, India offers a unique advantage: the diversity of growing regions means there is almost always a season in progress somewhere in the country. This allows for a more consistent year-round supply compared to single-region exporters.

At AL-SAMAD GLOBAL TRADER, we source directly from verified farms across Andhra Pradesh, Maharashtra, and Karnataka, ensuring full traceability from orchard to shipment. Our pre-shipment quality reports are shared with buyers before every dispatch, giving full visibility into what is being shipped.`,
  },
  {
    slug: 'moringa-global-superfood',
    category: 'Health & Wellness',
    readTime: '4 min read',
    title: "Moringa: India's Superfood Taking Global Markets by Storm",
    excerpt: "Why moringa powder and pods from India are becoming one of the most sought-after health exports worldwide.",
    date: 'April 2, 2026',
    image: moringaImg,
    content: `Moringa oleifera — commonly known as the drumstick tree — has been a staple of Indian cooking and traditional medicine for centuries. But over the last decade, it has found a massive global audience as consumers across Europe, North America, and the Middle East seek out natural superfoods with proven health benefits.

The leaves, when dried and powdered, are packed with iron, calcium, vitamin C, and protein — making moringa powder a popular addition to smoothies, health supplements, and functional foods. Fresh drumstick pods remain a key ingredient in South Asian cooking and are exported to diaspora communities around the world.

India accounts for a significant share of global moringa production, with Andhra Pradesh being a particularly strong growing region. Exporters here benefit from year-round availability, low production costs, and growing infrastructure for organic certification — a key requirement for buyers in premium health food markets.

We export both fresh moringa pods and dried moringa powder in certified organic grades, with full documentation for EU and US market entry. As consumer awareness of moringa continues to grow, we see long-term demand expansion across all our active markets.`,
  },
  {
    slug: 'building-long-term-trade-partnerships',
    category: 'Trade Insights',
    readTime: '5 min read',
    title: 'How to Build Long-Term Trade Partnerships as an Importer',
    excerpt: 'Key factors that distinguish reliable exporters from one-time suppliers — and how to evaluate them before signing a contract.',
    date: 'March 15, 2026',
    image: partnershipsImg,
    content: `For importers sourcing agricultural products internationally, the difference between a good supplier and a great one often comes down to consistency, communication, and reliability — not just price. Yet many buyers focus primarily on cost when evaluating new exporters, only to face problems down the line.

The first indicator of a trustworthy exporter is transparency. Can they provide farm-level information about where products are sourced? Do they share quality reports proactively, or only when asked? Exporters who are open about their processes are typically more reliable across the board.

Second, look at their documentation track record. Exporters who regularly ship to multiple countries and manage complex customs documentation for different markets are far less likely to make errors that cause delays. Ask for references from existing buyers in your region.

Third, assess their communication during the inquiry stage. Response time, clarity of answers, and willingness to customize packaging or documentation to your requirements are all early signals of how a partnership will function once orders are placed.

At AL-SAMAD GLOBAL TRADER, we believe every buyer relationship should be built on these principles. We offer sample shipments, full pre-shipment documentation review, and dedicated account support to ensure our partners feel confident from the first order onwards.`,
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
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider bg-primary/10 px-2 py-1 rounded-full">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-xs text-foreground/50">
                      <Calendar className="w-3 h-3" />
                      {post.date}
                    </span>
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