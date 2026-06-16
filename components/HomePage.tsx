import { Suspense } from 'react';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import Breadcrumb from '@/components/layout/Breadcrumb';
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
import LeadMagnet from '@/components/forms/LeadMagnet';
import ExitIntentPopup from '@/components/forms/ExitIntentPopup';
import WebVitalsReporter from '@/components/Analytics/WebVitals';

export default function HomePage() {
  return (
    <main id="main-content" className="min-h-screen" role="main" aria-label="Ana içerik">
      <WebVitalsReporter />
      <Header />
      <Breadcrumb />
      <HeroSection />
      {/* AEO/GEO: LLM'ler ve AI arama motorları için yapılandırılmış özet */}
      <AiAnswer />
      <ServicesSection />
      <WhyChooseUs />
      <IndustriesSection />
      <PricingSection />
      <PortfolioSection />
      <TestimonialsSection />
      <FAQSection />
      {/* E-E-A-T: Yazar kutusu — Google'a uzmanlık ve güven sinyali */}
      <AuthorBox />
      <Suspense fallback={<div className="py-24 text-center">Yükleniyor...</div>}>
        <LeadForm />
      </Suspense>
      <Footer />
      {/* Dönüşüm: Sticky lead magnet banner */}
      <LeadMagnet />
      {/* Dönüşüm: Exit-intent popup (sadece masaüstü) */}
      <ExitIntentPopup />
    </main>
  );
}
