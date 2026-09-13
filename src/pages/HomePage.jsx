import React from 'react';
import { HeroSection } from '../components/home/HeroSection';
import { FeaturesBar } from '../components/home/FeaturesBar';
import { FeaturedProducts } from '../components/home/FeaturedProducts';
import { TestimonialsSection } from '../components/home/TestimonialsSection';
import { AboutStorySection } from '../components/home/AboutStorySection';

export const HomePage = () => {
  return (
    <main>
      <HeroSection />
      <FeaturesBar />
      <FeaturedProducts />
      <TestimonialsSection />
      <AboutStorySection />
    </main>
  );
};
