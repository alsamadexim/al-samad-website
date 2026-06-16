import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, Phone, Mail, Tag } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { POSTS } from './BlogPage';

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = POSTS.find((p) => p.slug === slug);

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  const paragraphs = post.content.split('\n\n');
  const relatedPosts = POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background pt-20">

        {/* Hero Image */}
        <div className="w-full h-[350px] md:h-[500px] relative">
          <img
            src={post.image}
            alt={post.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          <div className="absolute bottom-0 left-0 right-0 px-4 pb-12">
            <div className="max-w-5xl mx-auto">
              <div className="flex items-center gap-3 mb-4">
                <span className="inline-block px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full">
                  {post.category}
                </span>
                <span className="text-white/70 text-sm flex items-center gap-1">
                  <Clock className="w-3 h-3" /> {post.readTime}
                </span>
              </div>
              <h1 className="text-2xl md:text-4xl lg:text-5xl font-bold text-white font-playfair leading-tight max-w-3xl">
                {post.title}
              </h1>
            </div>
          </div>
        </div>

        {/* Meta bar */}
        <div className="border-b border-gray-100 bg-white sticky top-[77px] z-20 shadow-sm">
          <div className="max-w-5xl mx-auto px-4 py-3 flex flex-wrap items-center gap-6 text-sm text-foreground/60">
            <Link to="/blog" className="inline-flex items-center gap-2 font-semibold text-primary hover:underline">
              <ArrowLeft className="w-4 h-4" /> Back to Blog
            </Link>
            <span className="inline-flex items-center gap-2">
              <Calendar className="w-4 h-4" /> {post.date}
            </span>
            <span className="inline-flex items-center gap-2">
              <Tag className="w-4 h-4" /> {post.category}
            </span>
          </div>
        </div>

        {/* Content + Sidebar */}
        <section className="py-16 px-4">
          <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">

            {/* Article */}
            <article className="lg:col-span-2">
              {/* Excerpt highlight */}
              <p className="text-lg text-foreground/80 font-medium leading-relaxed border-l-4 border-primary pl-5 mb-8 italic">
                {post.excerpt}
              </p>

              {/* Body paragraphs */}
              <div className="space-y-6">
                {paragraphs.map((para, i) => (
                  <p key={i} className="text-foreground/70 leading-relaxed text-base">
                    {para}
                  </p>
                ))}
              </div>

              {/* Tags */}
              <div className="mt-12 pt-6 border-t border-gray-100 flex items-center gap-3 flex-wrap">
                <span className="text-sm font-semibold text-foreground/50">Category:</span>
                <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-semibold rounded-full">
                  {post.category}
                </span>
              </div>
            </article>

            {/* Sidebar */}
            <aside className="space-y-6">

              {/* About us */}
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                <h3 className="font-bold text-secondary mb-4 text-lg">About AL-SAMAD</h3>
                <p className="text-sm text-foreground/60 leading-relaxed mb-4">
                  We are a Vijayawada-based export company connecting premium Indian agricultural products with buyers across the Middle East, Africa, Europe, and Asia.
                </p>
                <ul className="space-y-2 text-sm text-foreground/70">
                  <li className="flex items-center gap-2">
                    <span className="text-primary font-bold">✔</span> Quality-checked, export-ready products
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary font-bold">✔</span> Proper certification & documentation
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary font-bold">✔</span> Reliable logistics & on-time delivery
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-primary font-bold">✔</span> Competitive bulk pricing
                  </li>
                </ul>
              </div>

              {/* CTA */}
              <div className="bg-secondary rounded-xl p-6 text-white">
                <h3 className="font-bold mb-2 text-lg">Need a Quote?</h3>
                <p className="text-sm text-white/70 mb-5">
                  Tell us your requirements and we'll get back to you with pricing and availability.
                </p>
                <Link
                  to="/contact"
                  className="block w-full text-center px-5 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary/90 transition-all"
                >
                  Get a Quote
                </Link>
              </div>

              {/* Contact */}
              <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 space-y-4">
                <h3 className="font-bold text-secondary text-lg">Contact Us</h3>
                <a
                  href="tel:+918688607407"
                  className="flex items-center gap-3 text-foreground/70 hover:text-primary transition-colors text-sm"
                >
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-4 h-4 text-primary" />
                  </div>
                  +91 86886 07407
                </a>
                <a
                  href="mailto:alsamadexim1209@gmail.com"
                  className="flex items-center gap-3 text-foreground/70 hover:text-primary transition-colors text-sm"
                >
                  <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-4 h-4 text-primary" />
                  </div>
                  alsamadexim1209@gmail.com
                </a>
              </div>

              {/* Products link */}
              <div className="bg-accent/10 rounded-xl p-6 border border-accent/20">
                <h3 className="font-bold text-secondary mb-2">Browse Our Products</h3>
                <p className="text-sm text-foreground/60 mb-4">
                  Explore our full catalog of export-ready agricultural products.
                </p>
                <Link
                  to="/products"
                  className="block w-full text-center px-5 py-2.5 bg-accent text-secondary font-semibold rounded-lg hover:bg-yellow-400 transition-all text-sm"
                >
                  View Catalog
                </Link>
              </div>

            </aside>
          </div>
        </section>

        {/* More Posts */}
        <section className="bg-gray-50 py-16 px-4 border-t border-gray-100">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl font-bold text-secondary font-playfair mb-8">More Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedPosts.map((p) => (
                <Link
                  key={p.slug}
                  to={`/blog/${p.slug}`}
                  className="group bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
                >
                  <img src={p.image} alt={p.title} className="w-full h-40 object-cover" />
                  <div className="p-4">
                    <span className="text-xs font-semibold text-primary uppercase tracking-wider">
                      {p.category}
                    </span>
                    <h3 className="font-bold text-secondary text-sm leading-snug mt-1 group-hover:text-primary transition-colors">
                      {p.title}
                    </h3>
                    <p className="text-xs text-foreground/50 mt-2 flex items-center gap-1">
                      <Calendar className="w-3 h-3" /> {p.date}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}