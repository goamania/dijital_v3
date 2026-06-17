import { Suspense } from 'react';
import HeroSection from '@/components/animations/HeroSection';
import AiAnswer from '@/components/services/AiAnswer';
import ServicesSection from '@/components/services/ServicesSection';
import WhyChooseUs from '@/components/services/WhyChooseUs';
import IndustriesSection from '@/components/services/IndustriesSection';
import PricingSection from '@/components/services/PricingSection';
import PortfolioSection from '@/components/services/PortfolioSection';
import TestimonialsSection from '@/components/services/TestimonialsSection';
import FAQSection from '@/components/services/FAQSection';
import AuthorBox from '@/components/services/AuthorBox';
import LeadForm from '@/components/forms/LeadForm';
import WebVitalsReporter from '@/components/Analytics/WebVitals';

export default function HomePage() {
  return (
    <>
      <WebVitalsReporter />
      <HeroSection />
      <AiAnswer />
      <ServicesSection />
      <WhyChooseUs />
      <IndustriesSection />
      <PricingSection />
      <PortfolioSection />
      <TestimonialsSection />
      <FAQSection />
      <AuthorBox />
      <Suspense fallback={<div className="py-24 text-center">Yükleniyor...</div>}>
        <LeadForm />
      </Suspense>
    </>
  );
}
