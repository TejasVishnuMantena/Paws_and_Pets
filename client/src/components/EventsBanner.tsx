import { useState } from 'react';
import { CalendarDays, MapPin, X, IndianRupee } from 'lucide-react';

const events = [
  { id: 1, title: 'Bangalore Dog Show 2026', date: '2026-04-20', location: 'Palace Grounds, Bangalore', type: 'show', paid: true, price: '₹500', description: 'Annual dog show featuring 50+ breeds. Competitions include Best in Show, Agility, and Obedience. Open to all registered breeds with KCI certification.' },
  { id: 2, title: 'Free Vaccination Camp', date: '2026-04-12', location: 'Cubbon Park, Bangalore', type: 'health', paid: false, price: 'Free', description: 'Free anti-rabies and DHPP vaccination drive organized by the Bangalore Veterinary Association. Bring your pet\'s health card. First come, first served — 200 slots available.' },
  { id: 3, title: 'Adopt-a-Pup Drive', date: '2026-04-15', location: 'Indiranagar, Bangalore', type: 'adoption', paid: false, price: 'Free', description: 'Meet rescue pups looking for forever homes. All dogs are vaccinated, dewormed, and spayed/neutered. Adoption counselors available to help you find the right match.' },
  { id: 4, title: 'Pet Photography Contest', date: '2026-05-01', location: 'Lalbagh, Bangalore', type: 'contest', paid: true, price: '₹200', description: 'Capture your best pet moments! Submit up to 3 photos. Winners get pet supply hampers worth ₹5,000. Professional judges from National Geographic India.' },
  { id: 5, title: 'Puppy Training Workshop', date: '2026-05-08', location: 'JP Nagar, Bangalore', type: 'workshop', paid: true, price: '₹800', description: '3-hour hands-on workshop covering basic obedience, leash training, and socialization. Led by certified canine behaviorist Dr. Anand Kumar. Limited to 15 dogs per batch.' },
  { id: 6, title: 'Dog Nutrition Seminar', date: '2026-05-15', location: 'MG Road, Bangalore', type: 'health', paid: false, price: 'Free', description: 'Learn about balanced diets, raw feeding, and supplements from veterinary nutritionists. Free diet plan consultation for attendees. Sponsored by Royal Canin India.' },
];

const sortedEvents = [...events].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

const formatDate = (dateStr: string) => {
  const d = new Date(dateStr);
  return d.toLocaleDateString('en-IN', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' });
};

const EventsBanner = () => {
  const doubled = [...sortedEvents, ...sortedEvents];
  const [selectedEvent, setSelectedEvent] = useState<typeof events[0] | null>(null);

  return (
    <section className="bg-secondary border-y-2 border-foreground overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 pt-6 pb-2">
        <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4 text-center">
          EVENTS & NEWS
        </h2>
      </div>
      {/* Scrolling cards — title + location only */}
      <div className="relative pb-6">
        <div className="flex gap-3 px-4 animate-events-scroll">
          {doubled.map((event, i) => (
            <div
              key={`${event.id}-${i}`}
              onClick={() => setSelectedEvent(event)}
              className="flex-shrink-0 w-56 border-2 border-foreground bg-card p-3 pixel-shadow-sm hover:translate-x-[1px] hover:translate-y-[1px] hover:shadow-none transition-all cursor-pointer"
            >
              <h3 className="font-display text-base text-foreground leading-tight">{event.title}</h3>
              <div className="flex items-center gap-1 mt-2 font-body text-xs text-muted-foreground">
                <MapPin className="w-3 h-3 flex-shrink-0" /> {event.location}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Event Detail Modal */}
      {selectedEvent && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-foreground/40" onClick={() => setSelectedEvent(null)}>
          <div
            className="bg-card border-2 border-foreground pixel-shadow p-6 max-w-lg w-full mx-4 relative animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedEvent(null)}
              className="absolute top-3 right-3 p-1 border-2 border-foreground bg-card hover:bg-secondary transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <span className="inline-block border border-foreground px-2 py-0.5 font-body text-[10px] uppercase mb-2">
              {selectedEvent.type}
            </span>
            <h3 className="font-display text-2xl md:text-3xl text-foreground mb-2">{selectedEvent.title}</h3>

            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 font-body text-sm text-muted-foreground">
                <CalendarDays className="w-4 h-4 text-accent" />
                {formatDate(selectedEvent.date)}
              </div>
              <div className="flex items-center gap-2 font-body text-sm text-muted-foreground">
                <MapPin className="w-4 h-4 text-accent" />
                {selectedEvent.location}
              </div>
              <div className="flex items-center gap-2 font-body text-sm">
                <IndianRupee className="w-4 h-4 text-accent" />
                <span className={selectedEvent.paid ? 'text-foreground font-bold' : 'text-green-700 font-bold'}>
                  {selectedEvent.price}
                </span>
                <span className={`ml-1 px-2 py-0.5 text-[10px] uppercase border font-body ${selectedEvent.paid ? 'border-accent bg-accent/20' : 'border-green-600 bg-green-100 text-green-800'}`}>
                  {selectedEvent.paid ? 'PAID EVENT' : 'FREE EVENT'}
                </span>
              </div>
            </div>

            <div className="border-t border-foreground/20 pt-4">
              <p className="font-body text-sm text-muted-foreground leading-relaxed">
                {selectedEvent.description}
              </p>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default EventsBanner;
