import { Link } from 'react-router-dom';
import dogHero from '@/assets/dog-hero.png';

const HeroSection = () => {
  return (
    <section className="border-b-2 border-foreground bg-card overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 py-8 md:py-12 flex flex-col md:flex-row items-center gap-4">
        {/* Text - left side */}
        <div className="flex-1 text-center md:text-left order-1 md:pl-12 lg:pl-20">
          <h1 className="font-display text-4xl md:text-6xl lg:text-7xl leading-none tracking-wide text-foreground mb-3">
            FIND YOUR<br />
            BEST FRIEND.<br />
            <span className="text-accent">LOCALLY.</span>
          </h1>
          <p className="font-body text-sm text-muted-foreground max-w-sm mb-6">
            India's pixel-perfect marketplace for pet lovers. Buy & sell pups, food, toys, and everything your furry friend needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center md:justify-start">
            <Link to="/browse" className="pixel-btn bg-accent text-accent-foreground text-lg text-center">
              BROWSE LISTINGS
            </Link>
            <Link to="/sell" className="pixel-btn bg-card text-foreground text-lg text-center">
              START SELLING
            </Link>
          </div>
        </div>

        {/* Dog - right side, clean presentation */}
        <div className="flex-shrink-0 order-2">
          <div
            className="relative w-72 h-72 md:w-[400px] md:h-[400px] lg:w-[480px] lg:h-[480px] border-foreground bg-background p-4 overflow-hidden"
            style={{ borderWidth: '3px' }}
          >
            <img
              src={dogHero}
              alt="Pixel art dog"
              className="w-full h-full object-contain drop-shadow-lg animate-dog-bounce"
              width={1024}
              height={1024}
              style={{ imageRendering: 'auto', filter: 'contrast(1.15) saturate(1.2) brightness(1.05)' }}
            />
            <div className="absolute -bottom-2 -left-2 bg-accent border-2 border-foreground px-3 py-1 font-display text-lg text-accent-foreground">
              WOOF!
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
