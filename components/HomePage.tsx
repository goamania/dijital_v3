import { Suspense } from 'react';
import HeroSection from '@/components/animations/HeroSection';
import LiveStats from '@/components/services/LiveStats';
import AiAnswer from '@/components/services/AiAnswer';
import ServicesSection from '@/components/services/ServicesSection';
import WhyChooseUs from '@/components/services/WhyChooseUs';
import IndustriesSection from '@/components/services/IndustriesSection';
import ProcessTimeline from '@/components/services/ProcessTimeline';
import PricingSection from '@/components/services/PricingSection';
import PriceCalculator from '@/components/services/PriceCalculator';
import PortfolioSection from '@/components/services/PortfolioSection';
import TestimonialsSection from '@/components/services/TestimonialsSection';
import FAQSection from '@/components/services/FAQSection';
import TrustBadges from '@/components/services/TrustBadges';
import AuthorBox from '@/components/services/AuthorBox';
import LeadForm from '@/components/forms/LeadForm';
import WebVitalsReporter from '@/components/Analytics/WebVitals';

export default function HomePage() {
  return (
    <>
      <WebVitalsReporter />
      <HeroSection />
      <LiveStats />
      <AiAnswer />
      <ServicesSection />
      <WhyChooseUs />
      <IndustriesSection />
      <ProcessTimeline />
      <PricingSection />
      <PriceCalculator />
      <PortfolioSection />
      <TestimonialsSection />
      <FAQSection />
      <TrustBadges />
      <AuthorBox />
      <Suspense fallback={<div className="py-24 text-center">Yükleniyor...</div>}>
        <LeadForm />
      </Suspense>
    </>
  );
}
