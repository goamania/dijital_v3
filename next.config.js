/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
        port: '',
        pathname: '/**',
      },
    ],
  },

  // Eski İngilizce URL'lerden yeni Türkçe URL'lere yönlendirme
  async redirects() {
    return [
      // Ana sayfalar
      { source: '/services', destination: '/hizmetler', permanent: true },
      { source: '/industries', destination: '/sektorler', permanent: true },
      { source: '/portfolio', destination: '/portfoy', permanent: true },
      { source: '/about', destination: '/hakkimizda', permanent: true },
      { source: '/contact', destination: '/iletisim', permanent: true },
      { source: '/faq', destination: '/sss', permanent: true },
      { source: '/privacy', destination: '/gizlilik', permanent: true },
      { source: '/terms', destination: '/sartlar', permanent: true },
      { source: '/cookies', destination: '/cerezler', permanent: true },
      { source: '/case-studies', destination: '/vaka-calismalari', permanent: true },
      { source: '/careers', destination: '/kariyer', permanent: true },
      // Hizmet alt sayfaları
      { source: '/services/web-design', destination: '/hizmetler/web-tasarim', permanent: true },
      { source: '/services/webdesign', destination: '/hizmetler/web-tasarim', permanent: true },
      { source: '/services/ecommerce', destination: '/hizmetler/e-ticaret', permanent: true },
      { source: '/services/seo', destination: '/hizmetler/seo', permanent: true },
      { source: '/services/branding', destination: '/hizmetler/marka-kimligi', permanent: true },
      { source: '/services/digital-marketing', destination: '/hizmetler/dijital-pazarlama', permanent: true },
      { source: '/services/maintenance', destination: '/hizmetler/bakim', permanent: true },
      { source: '/services/tech-stack', destination: '/hizmetler/teknoloji', permanent: true },
      // Sektör alt sayfaları
      { source: '/industries/ecommerce', destination: '/sektorler/e-ticaret', permanent: true },
      { source: '/industries/healthcare', destination: '/sektorler/saglik', permanent: true },
      { source: '/industries/realestate', destination: '/sektorler/emlak', permanent: true },
      { source: '/industries/restaurants', destination: '/sektorler/restoran', permanent: true },
    ];
  },
};

module.exports = nextConfig;
