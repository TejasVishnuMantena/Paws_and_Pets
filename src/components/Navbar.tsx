import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, MessageSquare, Plus, CalendarDays, MapPin, ChevronDown, Shield, Star, LogOut } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';
import SearchBar from './SearchBar';
import { Tooltip, TooltipContent, TooltipTrigger, TooltipProvider } from '@/components/ui/tooltip';
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '@/components/ui/sheet';
import BrandLogo from './BrandLogo';

const cityAreas: Record<string, string[]> = {
  Bangalore: [
    'Koramangala', 'Indiranagar', 'HSR Layout', 'Whitefield', 'JP Nagar',
    'Marathahalli', 'MG Road', 'BTM Layout', 'Electronic City', 'Jayanagar',
    'Malleshwaram', 'Rajajinagar', 'Yelahanka', 'Hebbal', 'Sarjapur Road', 'Banashankari',
  ],
  Hyderabad: [
    'Banjara Hills', 'Jubilee Hills', 'Madhapur', 'Gachibowli', 'Hitech City',
    'Kondapur', 'Kukatpally', 'Ameerpet', 'Secunderabad', 'Begumpet',
    'Miyapur', 'Manikonda', 'Dilsukhnagar', 'LB Nagar', 'Uppal',
  ],
  Chennai: [
    'T. Nagar', 'Anna Nagar', 'Adyar', 'Velachery', 'Nungambakkam',
    'Mylapore', 'Besant Nagar', 'Porur', 'Tambaram', 'OMR',
    'Guindy', 'Kodambakkam', 'Thiruvanmiyur', 'Chromepet', 'Sholinganallur',
  ],
};

const cities = Object.keys(cityAreas);

interface NavbarProps {
  onCityChange?: (city: string) => void;
}

const Navbar = ({ onCityChange }: NavbarProps) => {
  const [selectedCity, setSelectedCity] = useState('Bangalore');
  const [selectedArea, setSelectedArea] = useState('Koramangala');
  const [showLocations, setShowLocations] = useState(false);
  const { user, profile, signOut } = useAuth();
  const navigate = useNavigate();

  const handleCityChange = (city: string) => {
    setSelectedCity(city);
    setSelectedArea(cityAreas[city][0]);
    onCityChange?.(city);
  };

  return (
    <TooltipProvider delayDuration={200}>
      <nav className="sticky top-0 z-50 bg-card border-b-2 border-foreground">
        <div className="max-w-7xl mx-auto px-4 py-2 flex items-center gap-3">
          {/* Logo + Name */}
          <Link to="/" className="hover:opacity-80 transition-opacity flex-shrink-0">
            <BrandLogo size="sm" />
          </Link>

          {/* Search */}
          <SearchBar />

          {/* Location Picker */}
          <div className="relative flex-shrink-0">
            <button
              onClick={() => setShowLocations(!showLocations)}
              className="flex items-center gap-1 px-2 py-1.5 border-2 border-foreground bg-card hover:bg-secondary transition-colors text-sm font-body pixel-shadow-sm"
            >
              <MapPin className="w-4 h-4 text-accent" />
              <span className="hidden md:inline max-w-[120px] truncate">{selectedArea}</span>
              <ChevronDown className="w-3 h-3" />
            </button>
            {showLocations && (
              <>
                <div className="fixed inset-0 z-40" onClick={() => setShowLocations(false)} />
                <div className="absolute right-0 top-full mt-1 z-50 bg-card border-2 border-foreground pixel-shadow w-56 max-h-72 overflow-y-auto">
                  {/* City tabs */}
                  <div className="flex border-b-2 border-foreground">
                    {cities.map((city) => (
                      <button
                        key={city}
                        onClick={() => handleCityChange(city)}
                        className={`flex-1 px-2 py-2 font-display text-sm text-center transition-colors ${selectedCity === city ? 'bg-accent text-accent-foreground' : 'bg-secondary hover:bg-muted'}`}
                      >
                        {city.toUpperCase()}
                      </button>
                    ))}
                  </div>
                  {/* Areas */}
                  {cityAreas[selectedCity].map((area) => (
                    <button
                      key={area}
                      onClick={() => { setSelectedArea(area); setShowLocations(false); }}
                      className={`w-full text-left px-3 py-2 font-body text-sm hover:bg-secondary transition-colors border-b border-foreground/20 last:border-b-0 ${selectedArea === area ? 'bg-secondary font-bold' : ''}`}
                    >
                      <MapPin className="w-3 h-3 inline mr-1 text-accent" />
                      {area}
                    </button>
                  ))}
                </div>
              </>
            )}
          </div>

          {/* Action icons */}
          <div className="flex items-center gap-2">
            <Tooltip>
              <TooltipTrigger asChild>
                <Sheet>
                  <SheetTrigger asChild>
                    <button className="p-2 border-2 border-foreground bg-card hover:bg-secondary transition-colors pixel-shadow-sm">
                      <CalendarDays className="w-5 h-5" />
                    </button>
                  </SheetTrigger>
                  <SheetContent>
                    <SheetHeader>
                      <SheetTitle className="font-display text-2xl">EVENTS & NEWS</SheetTitle>
                    </SheetHeader>
                    <div className="mt-4 space-y-3">
                      {[
                        { title: 'Bangalore Dog Show 2026', date: 'Apr 20', loc: 'Palace Grounds', type: 'show' },
                        { title: 'Free Vaccination Camp', date: 'Apr 12', loc: 'Cubbon Park', type: 'health' },
                        { title: 'Adopt-a-Pup Drive', date: 'Apr 15', loc: 'Indiranagar', type: 'adoption' },
                        { title: 'Pet Photography Contest', date: 'May 1', loc: 'Lalbagh', type: 'contest' },
                      ].map((e, i) => (
                        <div key={i} className="border-2 border-foreground bg-card p-3 pixel-shadow-sm">
                          <span className="inline-block border border-foreground px-2 py-0.5 font-body text-[10px] uppercase mb-1">{e.type}</span>
                          <h4 className="font-display text-base">{e.title}</h4>
                          <p className="font-body text-xs text-muted-foreground mt-1">
                            <CalendarDays className="w-3 h-3 inline mr-1" />{e.date} · <MapPin className="w-3 h-3 inline mr-1" />{e.loc}
                          </p>
                        </div>
                      ))}
                    </div>
                  </SheetContent>
                </Sheet>
              </TooltipTrigger>
              <TooltipContent>Events & News</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Sheet>
                  <SheetTrigger asChild>
                    <button className="p-2 border-2 border-foreground bg-card hover:bg-secondary transition-colors pixel-shadow-sm">
                      <MessageSquare className="w-5 h-5" />
                    </button>
                  </SheetTrigger>
                  <SheetContent>
                    <SheetHeader>
                      <SheetTitle className="font-display text-2xl">MESSAGES</SheetTitle>
                    </SheetHeader>
                    <div className="mt-4 space-y-3">
                      <div className="border-2 border-foreground bg-card p-3">
                        <p className="font-body text-sm text-muted-foreground text-center py-8">
                          No messages yet. Start a conversation by contacting a seller!
                        </p>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </TooltipTrigger>
              <TooltipContent>Messages</TooltipContent>
            </Tooltip>

            <Tooltip>
              <TooltipTrigger asChild>
                <Sheet>
                  <SheetTrigger asChild>
                    <button className="p-2 border-2 border-foreground bg-card hover:bg-secondary transition-colors pixel-shadow-sm">
                      <User className="w-5 h-5" />
                    </button>
                  </SheetTrigger>
                  <SheetContent>
                    <SheetHeader>
                      <SheetTitle className="font-display text-2xl">PROFILE</SheetTitle>
                    </SheetHeader>
                    <div className="mt-4 space-y-4">
                      <div className="border-2 border-foreground bg-card p-4 flex items-center gap-3">
                        <div className="w-14 h-14 bg-secondary border-2 border-foreground flex items-center justify-center overflow-hidden">
                          {profile?.avatar_url ? (
                            <img src={profile.avatar_url} alt="" className="w-full h-full object-cover" />
                          ) : (
                            <User className="w-8 h-8 text-muted-foreground" />
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-1.5">
                            <p className="font-display text-lg truncate">{profile?.display_name || (user ? 'Pet Lover' : 'Guest User')}</p>
                            {profile?.verified_seller && (
                              <span title="Verified seller" className="inline-flex items-center gap-0.5 bg-accent text-accent-foreground px-1.5 py-0.5 text-[9px] font-display border border-foreground">
                                <Shield className="w-2.5 h-2.5" /> VERIFIED
                              </span>
                            )}
                          </div>
                          {user ? (
                            <p className="font-body text-xs text-muted-foreground flex items-center gap-1">
                              <Star className="w-3 h-3 fill-accent text-accent" />
                              {profile?.average_rating ?? 0} ({profile?.total_ratings ?? 0} ratings)
                            </p>
                          ) : (
                            <p className="font-body text-xs text-muted-foreground">Sign in to access all features</p>
                          )}
                        </div>
                      </div>
                      {user ? (
                        <button onClick={() => signOut()} className="pixel-btn bg-card border-2 border-foreground text-foreground w-full text-center text-sm flex items-center justify-center gap-2">
                          <LogOut className="w-4 h-4" /> SIGN OUT
                        </button>
                      ) : (
                        <button onClick={() => navigate('/auth')} className="pixel-btn bg-accent text-accent-foreground w-full text-center text-sm">
                          SIGN IN / REGISTER
                        </button>
                      )}
                      <div className="space-y-2">
                        <button className="w-full text-left px-3 py-2 border-2 border-foreground bg-card hover:bg-secondary font-body text-sm transition-colors">❤️ My Favorites</button>
                        <button className="w-full text-left px-3 py-2 border-2 border-foreground bg-card hover:bg-secondary font-body text-sm transition-colors">📦 My Listings</button>
                        <button className="w-full text-left px-3 py-2 border-2 border-foreground bg-card hover:bg-secondary font-body text-sm transition-colors">⚙️ Settings</button>
                      </div>
                    </div>
                  </SheetContent>
                </Sheet>
              </TooltipTrigger>
              <TooltipContent>Profile</TooltipContent>
            </Tooltip>
          </div>

          {/* SELL */}
          <Link
            to="/sell"
            className="pixel-btn bg-accent text-accent-foreground text-base flex items-center gap-1.5 px-4 py-1.5 flex-shrink-0"
          >
            <Plus className="w-4 h-4" />
            <span className="hidden sm:inline">SELL</span>
          </Link>
        </div>
      </nav>
    </TooltipProvider>
  );
};

export default Navbar;
