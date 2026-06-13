import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ProductCard from '@/components/ProductCard.jsx';

const PRODUCT_CATEGORIES = [
  {
    id: "fruits",
    name: "Fresh Fruits",
    products: [
      {
        name: "Premium Alphonso Mango",
        image: "https://images.unsplash.com/photo-1580884199526-6292843d7105",
        description: "World-renowned sweet, rich, and flavorful mangoes sourced from elite orchards.",
        features: ["Global GAP Certified", "Air-shipped fresh", "Custom packaging"]
      },
      {
        name: "Export Quality Grapes",
        image: "https://images.unsplash.com/photo-1596363505729-4190a9506133",
        description: "Crisp, sweet, and seedless varieties perfectly suited for international retail.",
        features: ["Thompson Seedless", "Pesticide-free residue", "Cold chain maintained"]
      },
      {
        name: "Cavendish Bananas",
        image: "https://images.unsplash.com/photo-1603833665858-e61d17a86224",
        description: "Premium green Cavendish bananas harvested at optimal maturity.",
        features: ["Standardized finger length", "Vacuum packed", "Extended shelf life"]
      },
      {
        name: "Bhagwa Pomegranate",
        image: "https://images.unsplash.com/photo-1615486171448-6d2c4769018e",
        description: "Deep red arils with high juice content and robust outer skin for transit.",
        features: ["Rich in antioxidants", "Size graded", "Corrugated boxes"]
      }
    ]
  },
  {
    id: "vegetables",
    name: "Fresh Vegetables",
    products: [
      {
        name: "Red & White Onions",
        image: "https://images.unsplash.com/photo-1588613000160-990883456f7c",
        description: "Pungent and flavorful onions with excellent curing for long shelf life.",
        features: ["Mesh bag packing", "Multiple size grades", "Low moisture content"]
      },
      {
        name: "Fresh Potatoes",
        image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655",
        description: "Clean, disease-free potatoes suitable for both table consumption and processing.",
        features: ["Cold storage preserved", "Jute/mesh packaging", "High starch content"]
      },
      {
        name: "Green Chilli",
        image: "https://images.unsplash.com/photo-1588600878108-578307a3cc9d",
        description: "Spicy and crisp green chillies essential for global cuisines.",
        features: ["Hand-picked", "Air-freight shipping", "Vibrant color"]
      },
      {
        name: "Fresh Drumstick",
        image: "https://images.unsplash.com/photo-1601648764658-cf37e8c89b70",
        description: "Tender and highly nutritious moringa pods (drumsticks).",
        features: ["Uniform length", "Rich in iron", "Carefully packed"]
      }
    ]
  },
  {
    id: "spices",
    name: "Spices & Agro Products",
    products: [
      {
        name: "Salem Turmeric Fingers",
        image: "https://images.unsplash.com/photo-1698556735172-1b5b3cd9d2ce",
        description: "High-curcumin content turmeric available in whole finger or grounded form.",
        features: ["Curcumin 3-5%", "ASTA certified", "Bulk PP bags"]
      },
      {
        name: "Guntur Red Chilli",
        image: "https://images.unsplash.com/photo-1596662951482-0c4ba74a6df6",
        description: "Famous Indian red chillies known for intense heat and rich color.",
        features: ["Stemless available", "High capsaicin", "Aflatoxin free"]
      },
      {
        name: "Basmati Rice",
        image: "https://images.unsplash.com/photo-1586201375761-83865001e31c",
        description: "Extra long grain aromatic rice, aged to perfection.",
        features: ["1121 & 1509 Varieties", "Sortex clean", "Custom branding bags"]
      }
    ]
  },
  {
    id: "ready",
    name: "Ready-to-Cook & Eat",
    products: [
      {
        name: "Frozen Vegetables & Snacks",
        image: "https://images.unsplash.com/photo-1606787366850-de6330128bfc",
        description: "IQF (Individually Quick Frozen) veggies and ethnic Indian snacks.",
        features: ["Nutrients locked", "Long expiry", "Reefer container shipping"]
      },
      {
        name: "Retort Pouched Meals",
        image: "https://images.unsplash.com/photo-1621939514649-280e2ee25f60",
        description: "Ready-to-eat authentic Indian curries requiring no refrigeration.",
        features: ["Ambient storage", "Zero preservatives", "Private label available"]
      }
    ]
  }
];

export default function ProductsPage() {
  const [activeCategory, setActiveCategory] = useState(PRODUCT_CATEGORIES[0].id);

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Helmet>
        <title>Export Products Catalog | AL-SAMAD GLOBAL TRADER</title>
        <meta name="description" content="Browse our complete catalog of export products including fresh fruits, vegetables, spices, rice, and packaged foods ready for international shipping." />
      </Helmet>

      <Header />

      <main className="flex-grow pt-20">
        {/* PAGE HEADER */}
        <div className="bg-secondary py-16 text-center border-b-4 border-accent">
          <div className="max-w-4xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Product Catalog</h1>
            <p className="text-white/80 text-lg">
              Explore our diverse range of premium export-quality products. We ensure strict quality control from farm to container.
            </p>
          </div>
        </div>

        {/* CATEGORY TABS */}
        <div className="sticky top-[72px] z-30 bg-white/80 backdrop-blur-md border-b border-border shadow-sm">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex overflow-x-auto hide-scrollbar py-4 gap-2">
              {PRODUCT_CATEGORIES.map(category => (
                <button
                  key={category.id}
                  onClick={() => {
                    setActiveCategory(category.id);
                    document.getElementById(category.id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }}
                  className={`whitespace-nowrap px-6 py-2.5 rounded-full font-medium transition-all ${
                    activeCategory === category.id 
                      ? 'bg-primary text-white shadow-md' 
                      : 'bg-muted text-foreground hover:bg-border'
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* PRODUCT LISTINGS */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
          {PRODUCT_CATEGORIES.map((category) => (
            <section key={category.id} id={category.id} className="scroll-mt-40">
              <div className="mb-10">
                <h2 className="text-3xl font-bold text-foreground mb-2 flex items-center">
                  <span className="w-8 h-1 bg-accent mr-4 rounded-full"></span>
                  {category.name}
                </h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
                {category.products.map((product, idx) => (
                  <ProductCard 
                    key={idx}
                    productName={product.name}
                    description={product.description}
                    features={product.features}
                    image={product.image}
                  />
                ))}
              </div>
            </section>
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}