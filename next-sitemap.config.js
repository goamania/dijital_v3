/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || 'https://www.dijitalv3.com',
  generateRobotsTxt: true,
  exclude: ['/api/*', '/admin/*', '/en/_not-found'],
  alternateRefs: [
    {
      href: 'https://www.dijitalv3.com',
      hreflang: 'tr',
    },
    {
      href: 'https://www.dijitalv3.com/en',
      hreflang: 'en',
    },
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
      },
      {
        userAgent: 'GPTBot',
        allow: '/',
      },
      {
        userAgent: 'Google-Extended',
        allow: '/',
      },
    ],
    additionalSitemaps: [
      'https://www.dijitalv3.com/sitemap.xml',
    ],
  },
  changefreq: 'daily',
  priority: 0.7,
  sitemapSize: 5000,
  transform: async (config, path) => {
    // İngilizce sayfalar için alternatif dil bağlantıları
    const isEn = path.startsWith('/en');
    const canonicalPath = isEn ? path.replace(/^\/en/, '') || '/' : path;

    const alternates = [
      {
        href: `https://www.dijitalv3.com${canonicalPath === '/' ? '' : canonicalPath}`,
        hreflang: 'tr',
      },
      {
        href: `https://www.dijitalv3.com/en${canonicalPath === '/' ? '' : canonicalPath}`,
        hreflang: 'en',
      },
    ];

    // Custom priority for important pages
    if (canonicalPath === '/') {
      return {
        loc: path,
        changefreq: 'daily',
        priority: 1.0,
        lastmod: new Date().toISOString(),
        alternateRefs: alternates,
      };
    }
    
    if (canonicalPath.startsWith('/services')) {
      return {
        loc: path,
        changefreq: 'weekly',
        priority: 0.9,
        lastmod: new Date().toISOString(),
        alternateRefs: alternates,
      };
    }

    return {
      loc: path,
      changefreq: config.changefreq,
      priority: config.priority,
      lastmod: new Date().toISOString(),
      alternateRefs: alternates,
    };
  },
};
