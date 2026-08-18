import { useState } from 'react';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import CategoryGrid from '@/components/CategoryGrid';
import BreedCarousel from '@/components/BreedCarousel';
import EventsBanner from '@/components/EventsBanner';
import ProductGrid from '@/components/ProductGrid';
import Footer from '@/components/Footer';
import { mockProducts } from '@/data/mockProducts';

const Index = () => {
  const [selectedCity, setSelectedCity] = useState('Bangalore');

  // Filter by city, sort by date desc then distance asc
  const cityProducts = mockProducts
    .filter(p => p.seller.city === selectedCity)
    .sort((a, b) => {
      const dateDiff = new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime();
      if (dateDiff !== 0) return dateDiff;
      return a.distance - b.distance;
    });

  return (
    <div className="min-h-screen bg-background">
      <Navbar onCityChange={setSelectedCity} />
      <HeroSection />
      <CategoryGrid />
      <BreedCarousel />
      <EventsBanner />
      <ProductGrid products={cityProducts} title="FRESH LISTINGS" />
      <Footer />
    </div>
  );
};

export default Index;
