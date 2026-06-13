import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { Calendar, Clock, ArrowLeft, Phone, Mail } from 'lucide-react';
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

  return (
    <>
    <Header />
    <main className="min-h-screen bg-background pt-20">

      {/* Hero Image */}
      <div className="w-full h-[350px] md:h-[450px] relative">
        <img
          src={post.image}
          alt={post.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-4 pb-10">
          <div className="max-w-5xl mx-auto">
            <span className="inline-block px-3 py-1 bg-primary text-white text-xs font-semibold rounded-full mb-3">
              {post.category}
            </span>
            <h1 className="text-2xl md:text-4xl font-bold text-white font-playfair leading-tight max-w-3xl">
              {post.title}
            </h1>
          </div>
        </div>
      </div>

      {/* Meta bar */}
      <div className="border-b border-gray-100 bg-white">
        <div className="max-w-5xl mx-auto px-4 py-4 flex flex-wrap items-center gap-6 text-sm text-foreground/60">
          <Link to="/blog" className="inline-flex items-center gap-2 font-semibold text-primary hover:underline">
            <ArrowLeft className="w-4 h-4" /> Back to Blog
          </Link>
          <span className="inline-flex items-center gap-2">
            <Calendar className="w-4 h-4" /> {post.date}
          </span>
          <span className="inline-flex items-center gap-2">
            <Clock className="w-4 h-4" /> {post.readTime}
          </span>
        </div>
      </div>

      {/* Content + Sidebar */}
      <section className="py-16 px-4">
        <div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">

          {/* Article */}
          <article className="lg:col-span-2 prose prose-lg max-w-none text-foreground/70 leading-relaxed space-y-6">
            {paragraphs.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </article>

          {/* Sidebar */}
          <aside className="space-y-6">
            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
              <h3 className="font-bold text-secondary mb-4">Why Choose Us</h3>
              <ul className="space-y-3 text-sm text-foreground/70">
                <li>✔ Quality-checked, export-ready products</li>
                <li>✔ Proper certification & documentation</li>
                <li>✔ Reliable logistics & on-time delivery</li>
                <li>✔ Competitive bulk pricing</li>
              </ul>
            </div>

            <div className="bg-primary rounded-xl p-6 text-white">
              <h3 className="font-bold mb-2">Need a Quote?</h3>
              <p className="text-sm text-white/80 mb-4">
                Tell us your requirements and we'll get back to you with pricing and availability.
              </p>
              <Link
                to="/contact"
                className="inline-block w-full text-center px-5 py-2.5 bg-white text-primary font-semibold rounded-lg hover:bg-gray-100 transition-all"
              >
                Get a Quote
              </Link>
            </div>

            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100 space-y-3 text-sm">
              <h3 className="font-bold text-secondary mb-2">Contact Us</h3>
              <a href="tel:+918688607407" className="flex items-center gap-2 text-foreground/70 hover:text-primary">
                <Phone className="w-4 h-4" /> +91 86886 07407
              </a>
              <a href="mailto:alsamadexim1209@gmail.com" className="flex items-center gap-2 text-foreground/70 hover:text-primary break-all">
                <Mail className="w-4 h-4" /> alsamadexim1209@gmail.com
              </a>
            </div>
          </aside>

        </div>
      </section>

      {/* More Posts */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl font-bold text-secondary font-playfair mb-8">More Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {POSTS.filter((p) => p.slug !== post.slug).map((p) => (
              <Link
                key={p.slug}
                to={`/blog/${p.slug}`}
                className="group bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
              >
                <img src={p.image} alt={p.title} className="w-full h-36 object-cover" />
                <div className="p-4">
                  <h3 className="font-bold text-secondary text-sm leading-snug group-hover:text-primary transition-colors">
                    {p.title}
                  </h3>
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