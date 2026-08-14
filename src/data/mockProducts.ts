export interface Product {
  id: string;
  title: string;
  price: number;
  category: string;
  condition: 'new' | 'used';
  description: string;
  images: string[];
  seller: {
    name: string;
    rating: number;
    verified: boolean;
    phone: string;
    location: string;
    city: string;
  };
  negotiable: boolean;
  distance: number; // in km, calculated from area
  store: string;
  delivery: boolean;
  createdAt: string;
}

export const categories = [
  { id: 'pups', name: 'PUPS', icon: 'pups' },
  { id: 'food', name: 'FOOD', icon: 'food' },
  { id: 'accessories', name: 'ACCESSORIES', icon: 'accessories' },
  { id: 'homeservice', name: 'HOME SERVICE', icon: 'homeservice' },
  { id: 'beds', name: 'BEDS', icon: 'bed' },
  { id: 'toys', name: 'TOYS', icon: 'toys' },
  { id: 'grooming', name: 'GROOMING', icon: 'grooming' },
  { id: 'preowned', name: 'PRE-OWNED', icon: 'preowned' },
];

export const mockProducts: Product[] = [
  // ===== BANGALORE =====
  {
    id: '1', title: 'Golden Retriever Puppy', price: 15000, category: 'pups', condition: 'new',
    description: 'Adorable 3-month-old Golden Retriever puppy. Fully vaccinated with health certificate. Very playful and friendly temperament. Parents are champion bloodline.',
    images: ['https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600'],
    seller: { name: 'Rahul Sharma', rating: 4.8, verified: true, phone: '+91 98765 43210', location: 'Koramangala, Bangalore', city: 'Bangalore' },
    negotiable: true, distance: 2.3, store: 'Happy Paws Pet Shop', delivery: true, createdAt: '2026-04-20',
  },
  {
    id: '2', title: 'Premium Dog Food - Royal Canin 15kg', price: 4500, category: 'food', condition: 'new',
    description: 'Royal Canin Medium Adult dry dog food. 15kg pack, sealed and brand new. Specially formulated for medium breed dogs aged 1-7 years.',
    images: ['https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=600'],
    seller: { name: 'Pet Paradise Store', rating: 4.9, verified: true, phone: '+91 98765 11111', location: 'Indiranagar, Bangalore', city: 'Bangalore' },
    negotiable: false, distance: 1.1, store: 'Pet Paradise Store', delivery: true, createdAt: '2026-04-19',
  },
  {
    id: '3', title: 'Leather Dog Collar - Large', price: 850, category: 'accessories', condition: 'new',
    description: 'Handmade genuine leather dog collar for large breeds. Adjustable 18-24 inches. Brass buckle and D-ring.',
    images: ['https://images.unsplash.com/photo-1599839575338-31b11ae2cd0d?w=600'],
    seller: { name: 'Anita Desai', rating: 4.5, verified: false, phone: '+91 98765 22222', location: 'HSR Layout, Bangalore', city: 'Bangalore' },
    negotiable: true, distance: 3.7, store: 'Furry Friends', delivery: false, createdAt: '2026-04-18',
  },
  {
    id: '4', title: 'Orthopedic Dog Bed - XL', price: 3200, category: 'beds', condition: 'new',
    description: 'Memory foam orthopedic dog bed for large breeds. Waterproof liner with removable washable cover. 42x30 inches.',
    images: ['https://images.unsplash.com/photo-1541599540903-216a46ab1b87?w=600'],
    seller: { name: 'Suresh Kumar', rating: 4.2, verified: true, phone: '+91 98765 33333', location: 'Whitefield, Bangalore', city: 'Bangalore' },
    negotiable: true, distance: 5.2, store: 'Paw Palace', delivery: true, createdAt: '2026-04-15',
  },
  {
    id: '5', title: 'Kong Classic Dog Toy - Large', price: 750, category: 'toys', condition: 'new',
    description: 'Original Kong Classic rubber dog toy in large size. Perfect for aggressive chewers. Can be stuffed with treats.',
    images: ['https://images.unsplash.com/photo-1535930749574-1399327ce78f?w=600'],
    seller: { name: 'Priya Menon', rating: 4.7, verified: true, phone: '+91 98765 44444', location: 'JP Nagar, Bangalore', city: 'Bangalore' },
    negotiable: false, distance: 4.0, store: 'Waggy Tails', delivery: true, createdAt: '2026-04-14',
  },
  {
    id: '6', title: 'Professional Grooming Kit', price: 2800, category: 'grooming', condition: 'new',
    description: 'Complete 12-piece professional dog grooming kit. Includes clippers, scissors, combs, nail trimmer, and carrying case.',
    images: ['https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=600'],
    seller: { name: 'Grooming Studio', rating: 4.6, verified: true, phone: '+91 98765 55555', location: 'MG Road, Bangalore', city: 'Bangalore' },
    negotiable: true, distance: 1.8, store: 'Grooming Studio', delivery: true, createdAt: '2026-04-12',
  },
  {
    id: '7', title: 'Labrador Puppy - Black', price: 12000, category: 'pups', condition: 'new',
    description: 'Beautiful black Labrador puppy, 2 months old. First vaccination done. Very active and healthy. Both parents are KCI registered.',
    images: ['https://images.unsplash.com/photo-1591160690555-5debfba0c36a?w=600'],
    seller: { name: 'Vikram Singh', rating: 4.4, verified: true, phone: '+91 98765 66666', location: 'Marathahalli, Bangalore', city: 'Bangalore' },
    negotiable: true, distance: 6.1, store: 'Canine Corner', delivery: false, createdAt: '2026-04-10',
  },
  {
    id: '8', title: 'Retractable Dog Leash - 5m', price: 1200, category: 'accessories', condition: 'used',
    description: 'Flexi retractable dog leash, 5 meters long. Used for 2 months, in excellent condition. Suitable for dogs up to 50kg.',
    images: ['https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600'],
    seller: { name: 'Deepak Nair', rating: 3.9, verified: false, phone: '+91 98765 77777', location: 'BTM Layout, Bangalore', city: 'Bangalore' },
    negotiable: true, distance: 2.9, store: 'Direct Seller', delivery: true, createdAt: '2026-04-08',
  },
  {
    id: '9', title: 'Home Grooming - Full Service', price: 1500, category: 'homeservice', condition: 'new',
    description: 'Complete home grooming service for your dog. Includes bath, haircut, nail trimming, ear cleaning, and blow dry.',
    images: ['https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=600'],
    seller: { name: 'PawSpa Mobile', rating: 4.9, verified: true, phone: '+91 98765 88888', location: 'All Bangalore', city: 'Bangalore' },
    negotiable: false, distance: 0, store: 'PawSpa Mobile Grooming', delivery: true, createdAt: '2026-04-05',
  },
  {
    id: '10', title: 'German Shepherd Puppy', price: 18000, category: 'pups', condition: 'new',
    description: 'Strong and alert 3-month-old German Shepherd. Both parents are working line dogs. Fully dewormed and first vaccination completed.',
    images: ['https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?w=600'],
    seller: { name: 'K9 Breeders', rating: 4.7, verified: true, phone: '+91 98765 99999', location: 'Yelahanka, Bangalore', city: 'Bangalore' },
    negotiable: true, distance: 8.5, store: 'K9 Breeders', delivery: false, createdAt: '2026-04-02',
  },
  {
    id: '11', title: 'Pedigree Adult Chicken & Veg 20kg', price: 3200, category: 'food', condition: 'new',
    description: 'Pedigree Adult Complete Nutrition with real chicken and vegetables. 20kg value pack.',
    images: ['https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?w=600'],
    seller: { name: 'PetMart India', rating: 4.5, verified: true, phone: '+91 98765 10101', location: 'Jayanagar, Bangalore', city: 'Bangalore' },
    negotiable: false, distance: 3.2, store: 'PetMart India', delivery: true, createdAt: '2026-03-28',
  },
  {
    id: '12', title: 'Pre-Owned Dog Crate - Large', price: 1800, category: 'preowned', condition: 'used',
    description: 'Sturdy metal dog crate, used for 6 months. Foldable design, 42 inches long. Minor scratches but fully functional.',
    images: ['https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?w=600'],
    seller: { name: 'Meena Rao', rating: 4.1, verified: false, phone: '+91 98765 20202', location: 'Electronic City, Bangalore', city: 'Bangalore' },
    negotiable: true, distance: 7.0, store: 'Direct Seller', delivery: false, createdAt: '2026-03-25',
  },
  {
    id: '15', title: 'Beagle Puppy - Tricolor', price: 20000, category: 'pups', condition: 'new',
    description: 'Adorable tricolor Beagle puppy, 10 weeks old. Playful, curious, and great with kids. KCI registered parents.',
    images: ['https://images.unsplash.com/photo-1505628346881-b72b27e84530?w=600'],
    seller: { name: 'Beagle World', rating: 4.9, verified: true, phone: '+91 98765 50505', location: 'Hebbal, Bangalore', city: 'Bangalore' },
    negotiable: false, distance: 9.1, store: 'Beagle World', delivery: true, createdAt: '2026-03-20',
  },

  // ===== HYDERABAD =====
  {
    id: '20', title: 'Shih Tzu Puppy - White', price: 22000, category: 'pups', condition: 'new',
    description: 'Fluffy white Shih Tzu puppy, 3 months old. Very affectionate and hypoallergenic. Perfect lap dog for families.',
    images: ['https://images.unsplash.com/photo-1583337130417-13104dec14a8?w=600'],
    seller: { name: 'Paws Palace Hyderabad', rating: 4.8, verified: true, phone: '+91 99887 11111', location: 'Banjara Hills, Hyderabad', city: 'Hyderabad' },
    negotiable: true, distance: 1.5, store: 'Paws Palace', delivery: true, createdAt: '2026-04-21',
  },
  {
    id: '21', title: 'Drools Focus Adult Dog Food 12kg', price: 2800, category: 'food', condition: 'new',
    description: 'Drools Focus Super Premium with real chicken. High protein formula for active adult dogs.',
    images: ['https://images.unsplash.com/photo-1589924691995-400dc9ecc119?w=600'],
    seller: { name: 'Pet World Hyd', rating: 4.6, verified: true, phone: '+91 99887 22222', location: 'Madhapur, Hyderabad', city: 'Hyderabad' },
    negotiable: false, distance: 3.2, store: 'Pet World', delivery: true, createdAt: '2026-04-19',
  },
  {
    id: '22', title: 'Dog Harness - Anti-Pull', price: 1100, category: 'accessories', condition: 'new',
    description: 'No-pull dog harness with front clip. Padded and reflective. Fits medium to large dogs.',
    images: ['https://images.unsplash.com/photo-1599839575338-31b11ae2cd0d?w=600'],
    seller: { name: 'Ravi Reddy', rating: 4.3, verified: false, phone: '+91 99887 33333', location: 'Jubilee Hills, Hyderabad', city: 'Hyderabad' },
    negotiable: true, distance: 2.1, store: 'Direct Seller', delivery: false, createdAt: '2026-04-17',
  },
  {
    id: '23', title: 'Interactive Puzzle Toy Set', price: 1100, category: 'toys', condition: 'new',
    description: 'Set of 3 interactive puzzle toys for dogs. Includes treat-dispensing ball, snuffle mat, and sliding puzzle board.',
    images: ['https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=600'],
    seller: { name: 'Waggy World Hyd', rating: 4.7, verified: true, phone: '+91 99887 44444', location: 'Gachibowli, Hyderabad', city: 'Hyderabad' },
    negotiable: false, distance: 4.5, store: 'Waggy World', delivery: true, createdAt: '2026-04-14',
  },
  {
    id: '24', title: 'Home Dog Training - Basic', price: 3000, category: 'homeservice', condition: 'new',
    description: 'Professional dog trainer visits your home. 10 sessions covering sit, stay, heel, recall, and leash manners.',
    images: ['https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600'],
    seller: { name: 'K9 Trainers Hyd', rating: 4.9, verified: true, phone: '+91 99887 55555', location: 'Kondapur, Hyderabad', city: 'Hyderabad' },
    negotiable: false, distance: 5.0, store: 'K9 Trainers', delivery: true, createdAt: '2026-04-10',
  },
  {
    id: '25', title: 'Pre-Owned Dog Stroller', price: 2500, category: 'preowned', condition: 'used',
    description: 'Pet stroller used for 4 months, in great condition. Suitable for small to medium dogs up to 15kg.',
    images: ['https://images.unsplash.com/photo-1583337130417-13104dec14a8?w=600'],
    seller: { name: 'Arun Patel', rating: 4.3, verified: true, phone: '+91 99887 66666', location: 'Hitech City, Hyderabad', city: 'Hyderabad' },
    negotiable: true, distance: 3.8, store: 'Direct Seller', delivery: true, createdAt: '2026-04-06',
  },
  {
    id: '26', title: 'Pomeranian Puppy - Orange', price: 16000, category: 'pups', condition: 'new',
    description: 'Cute orange Pomeranian puppy, 2.5 months old. Compact and lively. Great for apartment living.',
    images: ['https://images.unsplash.com/photo-1576201836106-db1758fd1c97?w=600'],
    seller: { name: 'Tiny Paws Hyd', rating: 4.5, verified: true, phone: '+91 99887 77777', location: 'Kukatpally, Hyderabad', city: 'Hyderabad' },
    negotiable: true, distance: 6.2, store: 'Tiny Paws', delivery: false, createdAt: '2026-03-30',
  },

  // ===== CHENNAI =====
  {
    id: '30', title: 'Rottweiler Puppy', price: 25000, category: 'pups', condition: 'new',
    description: 'Strong and loyal Rottweiler puppy, 3 months old. Both parents are imported bloodline. Great guard dog potential.',
    images: ['https://images.unsplash.com/photo-1589941013453-ec89f33b5e95?w=600'],
    seller: { name: 'Elite Kennels Chennai', rating: 4.8, verified: true, phone: '+91 98001 11111', location: 'Anna Nagar, Chennai', city: 'Chennai' },
    negotiable: true, distance: 2.0, store: 'Elite Kennels', delivery: false, createdAt: '2026-04-21',
  },
  {
    id: '31', title: 'Farmina N&D Dog Food 10kg', price: 5500, category: 'food', condition: 'new',
    description: 'Farmina N&D Ancestral Grain Chicken & Pomegranate. Premium Italian dog food for adult dogs.',
    images: ['https://images.unsplash.com/photo-1568640347023-a616a30bc3bd?w=600'],
    seller: { name: 'Pet Hub Chennai', rating: 4.7, verified: true, phone: '+91 98001 22222', location: 'T. Nagar, Chennai', city: 'Chennai' },
    negotiable: false, distance: 1.5, store: 'Pet Hub', delivery: true, createdAt: '2026-04-18',
  },
  {
    id: '32', title: 'Cooling Dog Mat - Large', price: 950, category: 'beds', condition: 'new',
    description: 'Self-cooling gel mat for dogs. No electricity needed. Ideal for Chennai heat. 90x60cm size.',
    images: ['https://images.unsplash.com/photo-1541599540903-216a46ab1b87?w=600'],
    seller: { name: 'CoolPets', rating: 4.4, verified: true, phone: '+91 98001 33333', location: 'Adyar, Chennai', city: 'Chennai' },
    negotiable: false, distance: 3.0, store: 'CoolPets', delivery: true, createdAt: '2026-04-16',
  },
  {
    id: '33', title: 'Dog Raincoat - Waterproof', price: 650, category: 'accessories', condition: 'new',
    description: 'Waterproof dog raincoat with hood. Reflective strips for night visibility. Sizes S to XXL.',
    images: ['https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600'],
    seller: { name: 'Monsoon Pets', rating: 4.2, verified: false, phone: '+91 98001 44444', location: 'Velachery, Chennai', city: 'Chennai' },
    negotiable: true, distance: 4.5, store: 'Monsoon Pets', delivery: true, createdAt: '2026-04-12',
  },
  {
    id: '34', title: 'Professional Grooming Session', price: 1800, category: 'grooming', condition: 'new',
    description: 'Full grooming session at our salon. Bath, haircut, nail trim, ear cleaning, teeth brushing, and perfume.',
    images: ['https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?w=600'],
    seller: { name: 'Fluffy Studio Chennai', rating: 4.9, verified: true, phone: '+91 98001 55555', location: 'Nungambakkam, Chennai', city: 'Chennai' },
    negotiable: false, distance: 2.5, store: 'Fluffy Studio', delivery: false, createdAt: '2026-04-09',
  },
  {
    id: '35', title: 'Pre-Owned Automatic Feeder', price: 1500, category: 'preowned', condition: 'used',
    description: 'Automatic pet food dispenser with timer. Used for 3 months. Can schedule up to 4 meals per day. 5L capacity.',
    images: ['https://images.unsplash.com/photo-1601758003122-53c40e686a19?w=600'],
    seller: { name: 'Kavitha S', rating: 4.0, verified: false, phone: '+91 98001 66666', location: 'Mylapore, Chennai', city: 'Chennai' },
    negotiable: true, distance: 3.8, store: 'Direct Seller', delivery: true, createdAt: '2026-04-05',
  },
  {
    id: '36', title: 'Cocker Spaniel Puppy', price: 18000, category: 'pups', condition: 'new',
    description: 'Beautiful Cocker Spaniel puppy, 2.5 months. Long silky ears and gentle temperament. Great family dog.',
    images: ['https://images.unsplash.com/photo-1587300003388-59208cc962cb?w=600'],
    seller: { name: 'Chennai Paws', rating: 4.6, verified: true, phone: '+91 98001 77777', location: 'Besant Nagar, Chennai', city: 'Chennai' },
    negotiable: true, distance: 5.2, store: 'Chennai Paws', delivery: true, createdAt: '2026-03-28',
  },
];
