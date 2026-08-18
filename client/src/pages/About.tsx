import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const storyBlocks = [
  {
    title: 'THE GAP WE SAW',
    text: `Every industry has its go-to platform — OLX and Facebook Marketplace for general goods, Cashify for mobiles, CarDekho for cars, NoBroker for housing. But when it came to pets and pet products, there was nothing dedicated. Pet lovers were scattered across random classifieds, WhatsApp groups, and Instagram pages with no verification, no trust, and no structure. We saw a massive gap — India has over 30 million pet dogs, and that number is growing 11% every year. Yet there wasn't a single platform built specifically for this community. That's when the idea of Paws & Pets was born.`,
    emoji: '🔍',
  },
  {
    title: 'THE SOLUTION WE BUILT',
    text: `Paws & Pets is India's first dedicated C2C marketplace exclusively for dogs and dog products. We built a platform where breeders, pet shops, and individual pet owners can list puppies, food, accessories, grooming services, and pre-owned items — all in one place. Every listing goes through a review process to ensure quality. Sellers get verified badges, buyers can see distance-based results, and the entire experience is designed to feel safe, fun, and trustworthy. Think of us as the "OLX for pets" — but with pixel-perfect charm and a community-first approach.`,
    emoji: '🛠️',
  },
  {
    title: 'WHY THIS MATTERS',
    text: `The pet care industry in India is projected to reach ₹10,000 crore by 2025. Yet most transactions happen informally — through word of mouth, unverified social media posts, or shady dealers. This leads to scams, unhealthy animals, and frustrated buyers. Paws & Pets changes that. We bring transparency to every transaction. Verified sellers, genuine photos, location-based discovery, and a review system that holds everyone accountable. We're not just building a marketplace — we're building trust in an industry that desperately needs it.`,
    emoji: '💡',
  },
  {
    title: 'THE COMMUNITY VISION',
    text: `Beyond buying and selling, Paws & Pets is a community hub. We feature local pet events, vaccination camps, dog shows, and adoption drives. We're building features for pet health tracking, vet consultations, and community forums. Our dream is to become the one-stop digital companion for every dog owner in India — from the moment you bring your puppy home to every milestone along the way. Whether you're a first-time pet parent or a seasoned breeder, Paws & Pets is your home on the internet.`,
    emoji: '🐾',
  },
];

const dogAnimations = ['🐕', '🐶', '🦮', '🐕‍🦺'];

const ScrollBlock = ({ block, index }: { block: typeof storyBlocks[0]; index: number }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => setVisible(entry.isIntersecting),
      { threshold: 0.2 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`flex flex-col md:flex-row items-center gap-8 transition-all duration-700 ${
        visible ? 'opacity-100 translate-x-0' : `opacity-0 ${isEven ? '-translate-x-16' : 'translate-x-16'}`
      } ${isEven ? '' : 'md:flex-row-reverse'}`}
    >
      <div className="flex-1 border-2 border-foreground bg-card p-6 pixel-shadow">
        <h3 className="font-display text-2xl md:text-3xl text-foreground mb-3 flex items-center gap-2">
          {block.emoji} {block.title}
        </h3>
        <p className="font-body text-sm text-muted-foreground leading-relaxed">
          {block.text}
        </p>
      </div>
      <div className="flex-shrink-0 w-32 h-32 md:w-40 md:h-40 border-2 border-foreground bg-secondary flex items-center justify-center pixel-shadow-sm">
        <span
          className={`text-6xl md:text-7xl transition-transform duration-700 ${
            visible ? 'scale-100 rotate-0' : 'scale-50 rotate-12'
          } ${visible ? 'animate-dog-bounce' : ''}`}
        >
          {dogAnimations[index % dogAnimations.length]}
        </span>
      </div>
    </div>
  );
};

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-10">
        <Link to="/" className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-foreground transition-colors mb-6">
          <ArrowLeft className="w-4 h-4" /> Back to home
        </Link>

        <h1 className="font-display text-4xl md:text-5xl text-foreground mb-4 text-center">WHO ARE WE?</h1>
        <p className="font-body text-sm text-muted-foreground text-center mb-12 max-w-xl mx-auto">
          The story behind India's first dedicated marketplace for dog lovers.
        </p>

        <div className="space-y-16">
          {storyBlocks.map((block, i) => (
            <ScrollBlock key={i} block={block} index={i} />
          ))}
        </div>

        <div className="mt-16 border-2 border-foreground bg-accent/10 p-6 pixel-shadow text-center">
          <p className="font-display text-2xl text-foreground mb-2">🐾 JOIN THE PACK</p>
          <p className="font-body text-sm text-muted-foreground max-w-lg mx-auto">
            Have questions, want to partner with us, or just want to say hi? Reach out at hello@pawsandpets.in
            (this email will be updated before official launch).
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default About;
