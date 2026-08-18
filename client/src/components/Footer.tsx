import { Link } from 'react-router-dom';
import BrandLogo from './BrandLogo';

const Footer = () => {
  return (
    <footer className="border-t-2 border-foreground bg-card py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-col md:flex-row items-start justify-between gap-8">
          {/* Left – Brand */}
          <div className="flex flex-col items-start">
            <BrandLogo size="lg" showText />
            <p className="font-body text-xs text-muted-foreground mt-2 max-w-xs">
              India's marketplace for pet lovers. One-stop solution for dogs — find pups, food, accessories, grooming & more.
            </p>
          </div>

          {/* Right – Links */}
          <div className="grid grid-cols-2 gap-x-12 gap-y-2">
            <Link to="/about" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
              Who Are We
            </Link>
            <Link to="/contact" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact Us
            </Link>
            <Link to="/suggestions" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
              Suggestions
            </Link>
            <Link to="/issues" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
              Report an Issue
            </Link>
            <Link to="/terms" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
              Terms & Conditions
            </Link>
            <Link to="/privacy" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link to="/faq" className="font-body text-sm text-muted-foreground hover:text-foreground transition-colors">
              Frequently Asked Questions
            </Link>
          </div>
        </div>

        <div className="border-t border-foreground/20 mt-6 pt-4 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="font-body text-xs text-muted-foreground">
            © 2026 Paws & Pets. All rights reserved.
          </p>
          <p className="font-body text-xs text-muted-foreground">
            📧 hello@pawsandpets.in (dummy — will be updated before launch)
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
