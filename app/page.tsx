import { Suspense } from 'react';
import type { Metadata } from 'next';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import HeroSection from '@/components/animations/HeroSection';
import ServicesSection from '@/components/services/ServicesSection';
import WhyChooseUs from '@/components/services/WhyChooseUs';
import IndustriesSection from '@/components/services/IndustriesSection';
import PortfolioSection from '@/components/services/PortfolioSection';
import TestimonialsSection from '@/components/services/TestimonialsSection';
import FAQSection from '@/components/services/FAQSection';
import LeadForm from '@/components/forms/LeadForm';
import WebVitalsReporter from '@/components/Analytics/WebVitals';

export const metadata: Metadata = {
  title: 'Dijital V3 | Award-Winning Web Design & Digital Agency',
  description: 'Transform your vision into stunning websites that captivate, convert, and elevate your brand. Premium web design, e-commerce, and digital marketing services.',
};

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Analytics */}
      <WebVitalsReporter />
      
      {/* Header */}
      <Header />
      
      {/* Hero Section - Full screen with 3D background */}
      <HeroSection />
      
      {/* Services Section - Z-Pattern: Top Left to Bottom Right */}
      <ServicesSection />
      
      {/* Why Choose Us - Trust signals */}
      <WhyChooseUs />
      
      {/* Industries Section - Z-Pattern continuation */}
      <IndustriesSection />
      
      {/* Portfolio/Work Showcase */}
      <PortfolioSection />
      
      {/* Testimonials - Social proof */}
      <TestimonialsSection />
      
      {/* FAQ Section - AEO optimized */}
      <FAQSection />
      
      {/* Lead Capture Form */}
      <Suspense fallback={<div className="py-24 text-center">Loading...</div>}>
        <LeadForm />
      </Suspense>
      
      {/* Footer */}
      <Footer />
    </main>
  );
}
