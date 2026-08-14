import { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Shield, Star, Truck, Store, Send } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { mockProducts } from '@/data/mockProducts';
import { useToast } from '@/hooks/use-toast';

const ProductDetail = () => {
  const { id } = useParams();
  const product = mockProducts.find((p) => p.id === id);
  const [offerPrice, setOfferPrice] = useState('');
  const { toast } = useToast();

  if (!product) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 py-20 text-center">
          <h1 className="font-display text-5xl text-foreground mb-4">PRODUCT NOT FOUND</h1>
          <Link to="/" className="pixel-btn bg-accent text-accent-foreground text-lg inline-block">
            GO HOME
          </Link>
        </div>
      </div>
    );
  }

  const handleSendOffer = () => {
    const price = parseInt(offerPrice);
    if (!price || price <= 0) {
      toast({ title: 'Enter a valid price', variant: 'destructive' });
      return;
    }
    toast({
      title: 'Offer sent!',
      description: `Your offer of ₹${price.toLocaleString('en-IN')} has been sent to ${product.seller.name}.`,
    });
    setOfferPrice('');
  };

  return (
    <div className="min-h-screen bg-background pb-24">
      <Navbar />

      <div className="max-w-5xl mx-auto px-4 py-6">
        <Link to="/" className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-foreground transition-colors mb-6">
          <ArrowLeft className="w-4 h-4" />
          Back to listings
        </Link>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Image */}
          <div className="border-2 border-foreground bg-card pixel-shadow">
            <div className="aspect-square overflow-hidden">
              <img
                src={product.images[0]}
                alt={product.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Details */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <span className="border border-foreground px-2 py-0.5 font-body text-xs uppercase">
                  {product.condition}
                </span>
                <span className="border border-foreground px-2 py-0.5 font-body text-xs uppercase">
                  {product.category}
                </span>
              </div>
              <h1 className="font-display text-4xl md:text-5xl text-foreground leading-tight">
                {product.title}
              </h1>
            </div>

            <div>
              <p className="font-display text-5xl text-accent">
                ₹{product.price.toLocaleString('en-IN')}
              </p>
            </div>

            {/* Make an Offer */}
            <div className="border-2 border-foreground bg-card p-4 pixel-shadow-sm">
              <h3 className="font-display text-xl text-foreground mb-3">MAKE YOUR OFFER</h3>
              <div className="flex gap-2">
                <div className="relative flex-1">
                  <span className="absolute left-3 top-1/2 -translate-y-1/2 font-display text-lg text-muted-foreground">₹</span>
                  <input
                    type="number"
                    value={offerPrice}
                    onChange={(e) => setOfferPrice(e.target.value)}
                    placeholder="Enter your price"
                    className="w-full border-2 border-foreground bg-background px-4 py-2 pl-8 font-body text-sm focus:outline-none focus:ring-2 focus:ring-accent"
                  />
                </div>
                <button
                  onClick={handleSendOffer}
                  className="pixel-btn bg-accent text-accent-foreground text-base flex items-center gap-2 py-2"
                >
                  <Send className="w-4 h-4" />
                  SEND
                </button>
              </div>
              <p className="font-body text-xs text-muted-foreground mt-2">
                Your price will be sent directly to the seller
              </p>
            </div>

            {/* Seller Info */}
            <div className="border-2 border-foreground bg-card p-4 pixel-shadow-sm">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 border-2 border-foreground bg-secondary flex items-center justify-center font-display text-xl">
                  {product.seller.name[0]}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <span className="font-display text-xl">{product.seller.name}</span>
                    {product.seller.verified && (
                      <Shield className="w-4 h-4 text-accent" />
                    )}
                  </div>
                  <div className="flex items-center gap-1 text-muted-foreground">
                    <Star className="w-3 h-3 fill-accent text-accent" />
                    <span className="font-body text-xs">{product.seller.rating}/5</span>
                  </div>
                </div>
              </div>

              <div className="border-t border-border pt-3 space-y-2">
                <div className="flex items-center gap-2 font-body text-sm text-muted-foreground">
                  <MapPin className="w-4 h-4" />
                  <span>{product.seller.location}</span>
                </div>
              </div>
            </div>

            {/* Store & Delivery */}
            <div className="space-y-3">
              <div className="flex items-center gap-3 font-body text-sm">
                <Store className="w-5 h-5 text-foreground" />
                <div>
                  <p className="font-display text-lg">{product.store}</p>
                  <p className="text-muted-foreground">{product.distance} away</p>
                </div>
              </div>

              <div className="flex items-center gap-3 font-body text-sm">
                <MapPin className="w-5 h-5 text-foreground" />
                <span>{product.seller.location}</span>
              </div>

              {product.delivery && (
                <div className="flex items-center gap-3 font-body text-sm">
                  <Truck className="w-5 h-5 text-foreground" />
                  <span className="text-accent font-medium">Delivery available</span>
                </div>
              )}
            </div>

            {/* Description */}
            <div>
              <h2 className="font-display text-2xl text-foreground mb-2">ABOUT THIS PRODUCT</h2>
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Sticky Footer CTA */}
      <div className="fixed bottom-0 left-0 right-0 bg-card border-t-2 border-foreground p-4 z-50">
        <div className="max-w-5xl mx-auto flex items-center justify-between gap-4">
          <div>
            <p className="font-display text-2xl text-accent">₹{product.price.toLocaleString('en-IN')}</p>
            <p className="font-body text-xs text-muted-foreground">{product.title}</p>
          </div>
          <button className="pixel-btn bg-accent text-accent-foreground text-xl flex items-center gap-2">
            <Send className="w-5 h-5" />
            CONTACT SELLER
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
