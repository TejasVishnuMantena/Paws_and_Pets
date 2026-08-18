import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';
import { ArrowLeft, Upload, Camera, CheckCircle, Lock } from 'lucide-react';
import Navbar from '@/components/Navbar';
import { categories } from '@/data/mockProducts';
import { useAuth } from '@/hooks/useAuth';

const conditionOptions = ['Brand New', 'Like New', 'Gently Used', 'Well Used'];
const sellerTypes = ['Individual Pet Owner', 'Breeder', 'Pet Shop / Store'];
const breedOptions = [
  'Golden Retriever', 'Labrador', 'German Shepherd', 'Beagle', 'Pug',
  'Pomeranian', 'Shih Tzu', 'Rottweiler', 'Husky', 'Dalmatian',
  'Doberman', 'Bulldog', 'Cocker Spaniel', 'Great Dane', 'Other',
];

const Sell = () => {
  const { user, loading } = useAuth();
  if (!loading && !user) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="max-w-md mx-auto px-4 py-20 text-center">
          <div className="border-2 border-foreground bg-card p-8 pixel-shadow">
            <Lock className="w-12 h-12 text-accent mx-auto mb-4" />
            <h1 className="font-display text-3xl mb-2">SIGN IN TO SELL</h1>
            <p className="font-body text-sm text-muted-foreground mb-6">
              You need an account to post a listing. Browsing stays free for everyone.
            </p>
            <Link to="/auth" className="pixel-btn bg-accent text-accent-foreground inline-block">SIGN IN / REGISTER</Link>
            <div className="mt-3">
              <Link to="/" className="font-body text-xs text-muted-foreground hover:text-foreground">← Keep browsing</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const [submitted, setSubmitted] = useState(false);
  const [images, setImages] = useState<string[]>([]);
  const [form, setForm] = useState({
    category: '',
    title: '',
    description: '',
    price: '',
    condition: '',
    sellerType: '',
    breed: '',
    age: '',
    vaccinated: false,
    negotiable: false,
    delivery: false,
    name: '',
    phone: '',
    location: '',
  });

  const isPup = form.category === 'pups';

  const handleImageUpload = () => {
    if (images.length < 5) {
      setImages([...images, `https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=200&h=200&fit=crop&q=80&r=${Math.random()}`]);
    }
  };

  const update = (key: string, value: string | boolean) => setForm({ ...form, [key]: value });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (images.length === 0) {
      alert('At least one photo is required to list your product.');
      return;
    }
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="max-w-2xl mx-auto px-4 py-20 text-center">
          <div className="border-2 border-foreground bg-card p-10 pixel-shadow">
            <CheckCircle className="w-16 h-16 text-accent mx-auto mb-4" />
            <h1 className="font-display text-4xl text-foreground mb-3">LISTING SUBMITTED!</h1>
            <p className="font-body text-sm text-muted-foreground mb-6 max-w-md mx-auto">
              Your ad has been sent to the Paws & Pets team for review. Once we verify your product details and photos,
              it will go live on the marketplace. You'll receive a confirmation shortly.
            </p>
            <p className="font-body text-xs text-muted-foreground mb-6">
              Typical review time: 12 – 24 hours
            </p>
            <Link to="/" className="pixel-btn bg-accent text-accent-foreground text-lg inline-block">
              BACK TO HOME
            </Link>
          </div>
        </div>
      </div>
    );
  }

  // Deduplicate categories — preowned is already in categories list
  const uniqueCategories = categories.filter((cat, index, self) =>
    index === self.findIndex((c) => c.id === cat.id)
  );

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="max-w-3xl mx-auto px-4 py-8">
        <Link to="/" className="inline-flex items-center gap-2 font-body text-sm text-muted-foreground hover:text-foreground transition-colors mb-6">
          <ArrowLeft className="w-4 h-4" /> Back to home
        </Link>

        <h1 className="font-display text-4xl md:text-5xl text-foreground mb-2">START SELLING</h1>
        <p className="font-body text-sm text-muted-foreground mb-8">
          List your pet, accessories, food, or services on Paws & Pets marketplace.
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Category */}
          <fieldset className="border-2 border-foreground bg-card p-5 pixel-shadow-sm">
            <legend className="font-display text-xl px-2">CATEGORY *</legend>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mt-2">
              {uniqueCategories.map((cat) => (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => update('category', cat.id)}
                  className={`border-2 border-foreground px-3 py-2 font-display text-sm transition-colors ${form.category === cat.id ? 'bg-accent text-accent-foreground' : 'bg-card hover:bg-secondary'}`}
                >
                  {cat.name}
                </button>
              ))}
            </div>
          </fieldset>

          {/* Seller Type */}
          <fieldset className="border-2 border-foreground bg-card p-5 pixel-shadow-sm">
            <legend className="font-display text-xl px-2">WHO ARE YOU? *</legend>
            <div className="flex flex-wrap gap-2 mt-2">
              {sellerTypes.map((t) => (
                <button
                  key={t}
                  type="button"
                  onClick={() => update('sellerType', t)}
                  className={`border-2 border-foreground px-4 py-2 font-body text-sm transition-colors ${form.sellerType === t ? 'bg-accent text-accent-foreground' : 'bg-card hover:bg-secondary'}`}
                >
                  {t}
                </button>
              ))}
            </div>
          </fieldset>

          {/* Photos */}
          <fieldset className="border-2 border-foreground bg-card p-5 pixel-shadow-sm">
            <legend className="font-display text-xl px-2">PHOTOS * (min 1, max 5)</legend>
            <div className="flex flex-wrap gap-3 mt-2">
              {images.map((img, i) => (
                <div key={i} className="w-20 h-20 border-2 border-foreground overflow-hidden">
                  <img src={img} alt={`Upload ${i + 1}`} className="w-full h-full object-cover" />
                </div>
              ))}
              {images.length < 5 && (
                <button
                  type="button"
                  onClick={handleImageUpload}
                  className="w-20 h-20 border-2 border-dashed border-foreground flex flex-col items-center justify-center gap-1 hover:bg-secondary transition-colors"
                >
                  <Camera className="w-5 h-5 text-muted-foreground" />
                  <span className="font-body text-[10px] text-muted-foreground">ADD</span>
                </button>
              )}
            </div>
          </fieldset>

          {/* Product Details */}
          <fieldset className="border-2 border-foreground bg-card p-5 pixel-shadow-sm space-y-4">
            <legend className="font-display text-xl px-2">PRODUCT DETAILS</legend>

            <div>
              <label className="font-display text-sm block mb-1">TITLE *</label>
              <input type="text" required value={form.title} onChange={(e) => update('title', e.target.value)}
                placeholder="e.g. Golden Retriever Puppy, Royal Canin 15kg"
                className="w-full border-2 border-foreground bg-background px-3 py-2 font-body text-sm focus:outline-none focus:ring-2 focus:ring-accent" />
            </div>

            <div>
              <label className="font-display text-sm block mb-1">DESCRIPTION *</label>
              <textarea required value={form.description} onChange={(e) => update('description', e.target.value)}
                rows={4} placeholder="Describe your product in detail..."
                className="w-full border-2 border-foreground bg-background px-3 py-2 font-body text-sm focus:outline-none focus:ring-2 focus:ring-accent resize-none" />
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="font-display text-sm block mb-1">PRICE (₹) *</label>
                <input type="number" required value={form.price} onChange={(e) => update('price', e.target.value)}
                  placeholder="0"
                  className="w-full border-2 border-foreground bg-background px-3 py-2 font-body text-sm focus:outline-none focus:ring-2 focus:ring-accent" />
              </div>
              <div>
                <label className="font-display text-sm block mb-1">CONDITION *</label>
                <select required value={form.condition} onChange={(e) => update('condition', e.target.value)}
                  className="w-full border-2 border-foreground bg-background px-3 py-2 font-body text-sm focus:outline-none focus:ring-2 focus:ring-accent">
                  <option value="">Select</option>
                  {conditionOptions.map((c) => <option key={c} value={c}>{c}</option>)}
                </select>
              </div>
            </div>

            {/* Pup-specific */}
            {isPup && (
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="font-display text-sm block mb-1">BREED *</label>
                  <select required value={form.breed} onChange={(e) => update('breed', e.target.value)}
                    className="w-full border-2 border-foreground bg-background px-3 py-2 font-body text-sm focus:outline-none focus:ring-2 focus:ring-accent">
                    <option value="">Select breed</option>
                    {breedOptions.map((b) => <option key={b} value={b}>{b}</option>)}
                  </select>
                </div>
                <div>
                  <label className="font-display text-sm block mb-1">AGE</label>
                  <input type="text" value={form.age} onChange={(e) => update('age', e.target.value)}
                    placeholder="e.g. 3 months"
                    className="w-full border-2 border-foreground bg-background px-3 py-2 font-body text-sm focus:outline-none focus:ring-2 focus:ring-accent" />
                </div>
              </div>
            )}

            {/* Toggles */}
            <div className="flex flex-wrap gap-4 pt-2">
              {isPup && (
                <label className="flex items-center gap-2 font-body text-sm cursor-pointer">
                  <input type="checkbox" checked={form.vaccinated} onChange={(e) => update('vaccinated', e.target.checked)}
                    className="w-4 h-4 accent-accent" />
                  Vaccinated
                </label>
              )}
              <label className="flex items-center gap-2 font-body text-sm cursor-pointer">
                <input type="checkbox" checked={form.negotiable} onChange={(e) => update('negotiable', e.target.checked)}
                  className="w-4 h-4 accent-accent" />
                Price Negotiable
              </label>
              <label className="flex items-center gap-2 font-body text-sm cursor-pointer">
                <input type="checkbox" checked={form.delivery} onChange={(e) => update('delivery', e.target.checked)}
                  className="w-4 h-4 accent-accent" />
                Delivery Available
              </label>
            </div>
          </fieldset>

          {/* Contact Info */}
          <fieldset className="border-2 border-foreground bg-card p-5 pixel-shadow-sm space-y-4">
            <legend className="font-display text-xl px-2">YOUR DETAILS</legend>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="font-display text-sm block mb-1">NAME *</label>
                <input type="text" required value={form.name} onChange={(e) => update('name', e.target.value)}
                  className="w-full border-2 border-foreground bg-background px-3 py-2 font-body text-sm focus:outline-none focus:ring-2 focus:ring-accent" />
              </div>
              <div>
                <label className="font-display text-sm block mb-1">PHONE *</label>
                <input type="tel" required value={form.phone} onChange={(e) => update('phone', e.target.value)}
                  placeholder="+91 XXXXX XXXXX"
                  className="w-full border-2 border-foreground bg-background px-3 py-2 font-body text-sm focus:outline-none focus:ring-2 focus:ring-accent" />
              </div>
            </div>
            <div>
              <label className="font-display text-sm block mb-1">LOCATION *</label>
              <input type="text" required value={form.location} onChange={(e) => update('location', e.target.value)}
                placeholder="e.g. Koramangala, Bangalore"
                className="w-full border-2 border-foreground bg-background px-3 py-2 font-body text-sm focus:outline-none focus:ring-2 focus:ring-accent" />
            </div>
          </fieldset>

          <button type="submit" className="pixel-btn bg-accent text-accent-foreground text-xl w-full flex items-center justify-center gap-2 py-4">
            <Upload className="w-5 h-5" />
            SUBMIT FOR REVIEW
          </button>
        </form>
      </div>
    </div>
  );
};

export default Sell;
