import { useState } from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Shield, Heart } from 'lucide-react';
import type { Product } from '@/data/mockProducts';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const [liked, setLiked] = useState(false);
  const locationName = product.seller.location.split(',')[0];

  return (
    <Link
      to={`/product/${product.id}`}
      className="group border-2 border-foreground bg-card pixel-shadow-sm hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all duration-100 block relative"
    >
      <div className="aspect-[4/3] overflow-hidden border-b-2 border-foreground relative">
        <img
          src={product.images[0]}
          alt={product.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />
        <button
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            setLiked(!liked);
          }}
          className="absolute top-2 right-2 p-1.5 bg-card border-2 border-foreground hover:bg-secondary transition-colors"
        >
          <Heart className={`w-4 h-4 ${liked ? 'fill-destructive text-destructive' : 'text-foreground'}`} />
        </button>
      </div>

      <div className="p-2.5">
        <div className="flex items-start justify-between gap-1 mb-0.5">
          <h3 className="font-display text-base text-foreground leading-tight line-clamp-1">
            {product.title}
          </h3>
          {product.seller.verified && (
            <Shield className="w-3.5 h-3.5 text-accent flex-shrink-0 mt-0.5" />
          )}
        </div>

        <p className="font-display text-xl text-accent">
          ₹{product.price.toLocaleString('en-IN')}
        </p>

        <div className="flex items-center gap-2 text-muted-foreground mt-1">
          <span className="flex items-center gap-0.5">
            <MapPin className="w-3 h-3" />
            <span className="font-body text-[11px]">{locationName}</span>
          </span>
          <span className="font-body text-[11px]">· {product.distance} km</span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
