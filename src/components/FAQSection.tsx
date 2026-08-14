import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    q: 'What vaccinations should a puppy have before I buy?',
    a: 'Puppies should have their first DHPP (Distemper, Hepatitis, Parainfluenza, Parvovirus) vaccine at 6-8 weeks, with boosters at 10-12 weeks and 14-16 weeks. Rabies vaccination is typically given at 12-16 weeks. Always ask the seller for a veterinary health certificate.',
  },
  {
    q: 'How does the Pre-Owned section work?',
    a: 'The Pre-Owned section lets pet owners sell gently used items like crates, beds, leashes, and toys at discounted prices. It is great for budget-conscious buyers and helps reduce waste. All pre-owned items are reviewed before listing to ensure they meet quality standards.',
  },
  {
    q: 'Which dog breed is best for apartment living?',
    a: 'Breeds like Shih Tzu, Pug, Beagle, and Cocker Spaniel adapt well to apartments due to their moderate size and lower exercise needs. However, every dog needs daily walks and mental stimulation regardless of living space. Consider your lifestyle, work schedule, and family members before choosing.',
  },
  {
    q: 'What food should I feed my new puppy?',
    a: 'Start with the same food the breeder was using to avoid stomach upset. Gradually transition to a high-quality puppy formula (like Royal Canin, Pedigree Pro, or Farmina) over 7-10 days. Puppies under 6 months need 3-4 small meals daily; after 6 months, switch to 2 meals. Always provide fresh water.',
  },
  {
    q: 'How do I list my product on Paws & Pets?',
    a: 'Click the SELL button in the navigation bar. Fill in your product category, upload at least one clear photo, add a title, description, and price, then submit. Our team reviews every listing within 12-24 hours before it goes live on the marketplace.',
  },
  {
    q: 'Is home grooming service safe for my pet?',
    a: 'Yes! Our listed home grooming services use professional-grade, pet-safe products. Mobile groomers bring their own equipment in sanitised vans. Check the groomer ratings and reviews before booking. A good groomer will ask about your pet temperament and any skin sensitivities beforehand.',
  },
];

const FAQSection = () => {
  return (
    <section className="max-w-4xl mx-auto px-4 py-12">
      <h2 className="font-display text-3xl md:text-4xl text-foreground mb-8 text-center">
        FREQUENTLY ASKED QUESTIONS
      </h2>
      <Accordion type="single" collapsible className="space-y-2">
        {faqs.map((faq, i) => (
          <AccordionItem key={i} value={`faq-${i}`} className="border-2 border-foreground bg-card pixel-shadow-sm">
            <AccordionTrigger className="px-4 py-3 font-display text-base text-left hover:no-underline hover:bg-secondary transition-colors">
              {faq.q}
            </AccordionTrigger>
            <AccordionContent className="px-4 pb-4 font-body text-sm text-muted-foreground leading-relaxed border-t border-foreground/20">
              {faq.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default FAQSection;
