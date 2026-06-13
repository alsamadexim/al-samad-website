import React from 'react';
import { Helmet } from 'react-helmet';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import TeamMemberCard from '@/components/TeamMemberCard.jsx';

export default function TeamPage() {
  const teamMembers = [
    {
      name: "Pathan Fareed Khan",
      position: "Founder & CEO",
      photo: "https://images.unsplash.com/photo-1560250097-0b93528c311a",
      bio: "Visionary leader with 15+ years of comprehensive experience in the global export business. Pathan has established a vast network of international buyers and local farmers.",
      expertise: "Global Trade, Supplier Relations, Business Development"
    },
    {
      name: "Rajesh Kumar",
      position: "Export Operations Manager",
      photo: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7",
      bio: "Highly experienced in managing complex export operations, customs clearance, and global shipping logistics. Ensures seamless movement of cargo.",
      expertise: "Export Documentation, Customs, Shipping Logistics"
    },
    {
      name: "Priya Sharma",
      position: "Quality Assurance Head",
      photo: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2",
      bio: "Detail-oriented professional who ensures that every product leaving our facilities meets strict international health and safety standards.",
      expertise: "Quality Control, Lab Testing, Compliance"
    },
    {
      name: "Anwar Ali",
      position: "Customer Relations Manager",
      photo: "https://images.unsplash.com/photo-1556157382-97eda2d62296",
      bio: "Dedicated to complete customer satisfaction, Anwar serves as the primary liaison between our international clients and internal operations.",
      expertise: "Client Management, Communication, Support"
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-background">
      <Helmet>
        <title>Our Team | AL-SAMAD GLOBAL TRADER</title>
        <meta name="description" content="Meet the expert team behind AL-SAMAD GLOBAL TRADER, dedicated to excellence in international trade and export." />
      </Helmet>

      <Header />

      <main className="flex-grow pt-20">
        {/* HERO */}
        <div className="relative bg-secondary py-24 text-center">
          <div className="absolute inset-0 opacity-20">
            <img 
              src="https://images.unsplash.com/flagged/photo-1551135049-83f3419ef05c" 
              alt="Team collaboration" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-secondary/80 mix-blend-multiply" />
          </div>
          <div className="relative z-10 max-w-3xl mx-auto px-4">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Meet The Experts</h1>
            <p className="text-white/80 text-lg">
              Behind every successful shipment is a team of dedicated professionals passionate about global trade.
            </p>
          </div>
        </div>

        {/* TEAM GRID */}
        <section className="py-24">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, idx) => (
                <TeamMemberCard 
                  key={idx}
                  name={member.name}
                  position={member.position}
                  photo={member.photo}
                  bio={member.bio}
                  expertise={member.expertise}
                />
              ))}
            </div>
          </div>
        </section>

        {/* CULTURE SECTION */}
        <section className="py-20 bg-muted border-t border-border">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-6">Our Work Culture</h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              At AL-SAMAD GLOBAL TRADER, our culture is defined by integrity, accountability, and continuous improvement. We believe in empowering our employees to make agile decisions, fostering an environment where innovation thrives. By prioritizing mutual respect and collaborative problem-solving, our team remains highly motivated to deliver exceptional value to our global clients.
            </p>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}