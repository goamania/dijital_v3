import type { Metadata } from 'next';
import HomePage from '@/components/HomePage';

export const metadata: Metadata = {
  title: 'Dijital V3 | Ödüllü Web Tasarım & Dijital Ajans',
  description: 'Vizyonunuzu etkileyen, dönüştüren ve markanızı yükselten çarpıcı web siteleri. Premium web tasarım, e-ticaret ve dijital pazarlama hizmetleri.',
  alternates: {
    canonical: 'https://www.dijitalv3.com',
    languages: {
      'tr': 'https://www.dijitalv3.com',
      'en': 'https://www.dijitalv3.com/en',
    },
  },
  openGraph: {
    title: 'Dijital V3 | Ödüllü Web Tasarım & Dijital Ajans',
    description: 'Vizyonunuzu etkileyen, dönüştüren ve markanızı yükselten çarpıcı web siteleri.',
    url: 'https://www.dijitalv3.com',
    locale: 'tr_TR',
  },
};

export default function Home() {
  return <HomePage />;
}
