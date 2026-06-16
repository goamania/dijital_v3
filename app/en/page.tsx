import type { Metadata } from 'next';
import HomePage from '@/components/HomePage';

export const metadata: Metadata = {
  title: 'Dijital V3 | Award-Winning Web Design & Digital Agency',
  description: 'Transform your vision into stunning websites that captivate, convert, and elevate your brand. Premium web design, e-commerce, and digital marketing services.',
  alternates: {
    canonical: 'https://www.dijitalv3.com/en',
    languages: {
      'tr': 'https://www.dijitalv3.com',
      'en': 'https://www.dijitalv3.com/en',
    },
  },
  openGraph: {
    title: 'Dijital V3 | Award-Winning Web Design & Digital Agency',
    description: 'Transform your vision into stunning websites that captivate, convert, and elevate your brand.',
    url: 'https://www.dijitalv3.com/en',
    locale: 'en_US',
  },
};

export default function EnPage() {
  return <HomePage />;
}
