import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

import fruitImg from '@/assets/products/fruit.png';
import vegetablesImg from '@/assets/products/vegetables.png';
import nutsImg from '@/assets/products/nuts.png';
import riceImg from '@/assets/products/rice.png';
import spiceImg from '@/assets/products/spice.png';
import seedsImg from '@/assets/products/seeds.png';
import oilImg from '@/assets/products/oil.png';
import frozenImg from '@/assets/products/frozen.png';
import mealsImg from '@/assets/products/meals.png';

const CATEGORIES = [
  {
    title: "Fresh Fruits",
    emoji: "🍎",
    subtitle: "Premium Tropical Fruits from Indian Farms",
    description: "We export a wide range of premium tropical fruits directly from trusted Indian farms. Every batch is carefully inspected to ensure unmatched freshness, taste, and safety before it reaches our global clients.",
    image: fruitImg,
    items: ["Mango", "Banana", "Pomegranate", "Grapes", "Guava", "Papaya", "Pineapple", "Coconut", "Watermelon", "Dragon Fruit"],
  },
  {
    title: "Fresh Vegetables",
    emoji: "🥕",
    subtitle: "Farm-Fresh Vegetables for Global Markets",
    description: "We specialize in exporting fresh, daily-use vegetables that meet strict hygiene, size, and quality standards. Sourced from certified farms and delivered in controlled conditions to maintain natural texture and freshness.",
    image: vegetablesImg,
    items: ["Onion", "Potato", "Tomato", "Okra (Lady Finger)", "Green Chilli", "Drumstick (Moringa Pods)", "Brinjal (Eggplant)", "Cabbage", "Cauliflower", "Bitter Gourd"],
  },
  {
    title: "Nuts & Dry Fruits",
    emoji: "🌰",
    subtitle: "Premium Nuts & Sundried Fruits",
    description: "We supply export-grade nuts and dry fruits sourced from the finest growing regions in India. Cleaned, graded, and packed under hygienic conditions to ensure maximum shelf life and nutritional quality.",
    image: nutsImg,
    items: ["Cashew Nuts", "Almonds", "Pistachios", "Walnuts", "Raisins", "Dates", "Figs", "Apricots", "Dried Coconut"],
  },
  {
  title: "Rice & Grains",
  emoji: "🌾",
  subtitle: "Premium Indian Rice & Grain Exports",
  description: "Export-quality Indian rice and grains sourced from trusted farming regions. Known for superior aroma, long grain length, purity, and consistency, catering to global importers, wholesalers, and retail markets.",
  image: riceImg,
  items: ["1121 Basmati Rice", "1509 Basmati Rice", "Traditional Basmati Rice", "Pusa Basmati Rice", "1401 Basmati Rice", "Sona Masoori Rice", "Non-Basmati Rice", "Millets", "Wheat", "Maize (Corn)"],
  },
  {
    title: "Whole Spices",
    emoji: "🌶️",
    subtitle: "Aromatic Indian Spices for Global Kitchens",
    description: "Indian spices are globally celebrated for their aroma, potency, and authenticity. We export machine-cleaned, lab-tested whole spices with proper certifications to meet international food safety requirements.",
    image: spiceImg,
    items: ["Turmeric", "Red Chilli", "Black Pepper", "Cardamom", "Cloves", "Cinnamon", "Cumin Seeds", "Coriander Seeds", "Fenugreek Seeds", "Mustard Seeds", "Nutmeg", "Star Anise"],
  },
  {
    title: "Seeds",
    emoji: "🌱",
    subtitle: "High-Quality Edible & Agricultural Seeds",
    description: "We export a range of edible seeds sourced from certified growers across India. All seeds are cleaned, graded, and packed under hygienic conditions to ensure food-grade standards for international buyers.",
    image: seedsImg,
    items: ["Sesame Seeds", "Chia Seeds", "Flax Seeds", "Pumpkin Seeds", "Sunflower Seeds", "Watermelon Seeds", "Basil Seeds (Sabja)", "Mustard Seeds"],
  },
  {
    title: "Edible Oils",
    emoji: "🫒",
    subtitle: "Pure & Cold-Pressed Indian Oils",
    description: "Our edible oils are extracted using cold-press and expeller methods to retain maximum nutrition and flavor. We supply refined and unrefined varieties in bulk packaging suitable for retail and food manufacturing.",
    image: oilsImg,
    items: ["Coconut Oil", "Sesame Oil", "Groundnut Oil", "Mustard Oil", "Sunflower Oil", "Rice Bran Oil", "Virgin Coconut Oil"],
  },
  {
    title: "Frozen Foods & Snack Items",
    emoji: "❄️",
    subtitle: "IQF Frozen Foods & Ethnic Indian Snacks",
    description: "Our frozen range uses IQF (Individually Quick Frozen) technology to lock in nutrition, color, and freshness. Our snack range features traditional Indian snacks loved by diaspora communities worldwide.",
    image: frozenImg,
    items: ["Frozen Green Peas", "Frozen Sweet Corn", "Frozen Mixed Vegetables", "Frozen Okra", "Frozen Mango Cubes", "Banana Chips", "Murukku", "Namkeen", "Millet Snacks", "Roasted Chickpeas"],
  },
  {
    title: "Retort Pouched Meals",
    emoji: "🍛",
    subtitle: "Ready-to-Eat Indian Meals — No Refrigeration Needed",
    description: "Retort-processed authentic Indian curries and meals with ambient storage — no refrigeration required. Zero artificial preservatives. Available in private label packaging for international retail and hospitality clients.",
    image: mealsImg,
    items: ["Dal Tadka", "Rajma Masala", "Chole Masala", "Sambar", "Vegetable Curry", "Paneer Butter Masala", "Khichdi", "Biryani", "Ready-to-Eat Rice Meals", "Indian Curry Meals"],
  },
];

export default function ProductsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Helmet>
        <title>Export Products Catalog | AL-SAMAD GLOBAL TRADER</title>
        <meta name="description" content="Browse our complete catalog of export products including fresh fruits, vegetables, spices, nuts, frozen foods and packaged meals ready for international shipping." />
      </Helmet>

      <Header />

      <main className="flex-grow pt-20">

        {/* PAGE HEADER */}
        <div className="bg-secondary py-20 text-center border-b-4 border-accent">
          <div className="max-w-4xl mx-auto px-4">
            <p className="text-accent font-semibold tracking-widest uppercase text-sm mb-3">What We Export</p>
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Our Product Catalog</h1>
            <p className="text-white/75 text-lg max-w-2xl mx-auto">
              From farm-fresh produce to processed and packaged goods — explore our full range of export-ready products with strict quality assurance at every step.
            </p>
          </div>
        </div>

        {/* QUICK JUMP TABS */}
        <div className="sticky top-[72px] z-30 bg-white/90 backdrop-blur-md border-b border-border shadow-sm">
          <div className="max-w-7xl mx-auto px-4">
            <div className="flex overflow-x-auto hide-scrollbar py-3 gap-2">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat.title}
                  onClick={() => document.getElementById(cat.title.replace(/\s+/g, '-').toLowerCase())?.scrollIntoView({ behavior: 'smooth', block: 'start' })}
                  className="whitespace-nowrap px-4 py-2 rounded-full text-sm font-medium bg-muted text-foreground hover:bg-primary hover:text-white transition-all"
                >
                  {cat.emoji} {cat.title}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* PRODUCT SECTIONS */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 divide-y divide-border">
          {CATEGORIES.map((cat, idx) => (
            <motion.section
              key={cat.title}
              id={cat.title.replace(/\s+/g, '-').toLowerCase()}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="scroll-mt-36 py-16"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                {/* Image — alternates sides */}
                <div className={idx % 2 !== 0 ? 'lg:order-2' : ''}>
                  <div className="relative">
                    <div className="absolute -inset-3 bg-primary/5 rounded-2xl" />
                    <img
                      src={cat.image}
                      alt={cat.title}
                      className="relative rounded-2xl shadow-lg w-full h-[320px] object-cover"
                    />
                    <div className="absolute top-4 left-4 bg-accent text-secondary text-xs font-bold px-3 py-1 rounded-full shadow">
                      Export Ready
                    </div>
                  </div>
                </div>

                {/* Text */}
                <div className={idx % 2 !== 0 ? 'lg:order-1' : ''}>
                  <p className="text-accent font-semibold tracking-widest uppercase text-xs mb-2">
                    Premium Export Quality
                  </p>
                  <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-1">
                    {cat.emoji} {cat.title}
                  </h2>
                  <p className="text-sm font-semibold text-primary mb-4">{cat.subtitle}</p>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {cat.description}
                  </p>

                  <div className="grid grid-cols-2 gap-2 mb-8">
                    {cat.items.map((item) => (
                      <div key={item} className="flex items-center gap-2 text-sm text-foreground">
                        <CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" />
                        {item}
                      </div>
                    ))}
                  </div>

                  <Link
                    to="/contact"
                    className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-all"
                  >
                    Request a Quote <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

              </div>
            </motion.section>
          ))}
        </div>

        {/* BOTTOM CTA */}
        <div className="bg-secondary py-16 text-center">
          <div className="max-w-3xl mx-auto px-4">
            <h2 className="text-3xl font-bold text-white mb-4">Need a Custom Order?</h2>
            <p className="text-white/70 mb-8">
              Tell us your product requirements, quantity, and destination — we'll handle everything from sourcing to delivery.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 bg-accent text-secondary font-bold rounded-lg hover:bg-yellow-400 transition-all"
            >
              Get in Touch <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>

      </main>

      <Footer />
    </div>
  );
}