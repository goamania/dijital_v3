export type Language = 'tr' | 'en';

export const defaultLanguage: Language = 'tr';

export const languages: Language[] = ['tr', 'en'];

export const languageNames: Record<Language, string> = {
  tr: 'Türkçe',
  en: 'English',
};

// ── Tüm metin çevirileri ──
// Kullanım: t('tr', 'hero.badge') → "✨ Ödüllü Web Tasarım Ajansı"
export const translations = {
  // ── Header ──
  header: {
    services: { tr: 'Hizmetler', en: 'Services' },
    portfolio: { tr: 'Portföy', en: 'Portfolio' },
    industries: { tr: 'Sektörler', en: 'Industries' },
    about: { tr: 'Hakkımızda', en: 'About' },
    blog: { tr: 'Blog', en: 'Blog' },
    contact: { tr: 'İletişim', en: 'Contact' },
    getStarted: { tr: 'Teklif Al', en: 'Get Started' },
  },

  // ── Hero ──
  hero: {
    badge: { tr: '✨ Akdeniz\'in Dijital Ortağı', en: '✨ Mediterranean\'s Digital Partner' },
    title1: { tr: 'Akdeniz Turizminde', en: 'Digital Excellence for' },
    title2: { tr: 'Dijital Mükemmellik', en: 'Mediterranean Tourism' },
    description: {
      tr: 'Antalya, Kemer, Kalkan ve Fethiye\'deki turizm işletmelerine özel web tasarım, SEO ve dijital dönüşüm. Define Tours ve Kemer Car Rental gibi referanslarla sektörü biliyoruz.',
      en: 'Web design, SEO, and digital transformation specialized for tourism businesses in Antalya, Kemer, Kalkan, and Fethiye. We know the industry with references like Define Tours and Kemer Car Rental.',
    },
    cta: { tr: 'Projeni Başlat', en: 'Start Your Project' },
    watchVideo: { tr: 'Başarı Hikayemizi İzle', en: 'Watch Success Stories' },
  },

  // ── Services ──
  services: {
    badge: { tr: 'Hizmetlerimiz', en: 'Our Services' },
    title1: { tr: 'Online Başarı İçin', en: 'Everything You Need to' },
    title2: { tr: 'İhtiyacınız Olan Her Şey', en: 'Succeed Online' },
    description: {
      tr: 'Fikirden lansmana ve sonrasına, sonuç odaklı kapsamlı dijital çözümler sunuyoruz.',
      en: 'From concept to launch and beyond, we provide comprehensive digital solutions that drive results.',
    },
    learnMore: { tr: 'Detaylı Bilgi', en: 'Learn More' },
    items: {
      webDesign: {
        title: { tr: 'Özel Web Tasarımı', en: 'Custom Website Design' },
        desc: { tr: 'Markanıza ve iş hedeflerinize özel, yüksek dönüşüm oranlı web siteleri.', en: 'Bespoke, high-converting websites tailored to your brand and business goals.' },
        features: { tr: ['Next.js & React', 'Tailwind CSS', 'Responsive Tasarım', 'Performans Odaklı', 'SEO Hazır'], en: ['Next.js & React', 'Tailwind CSS', 'Responsive Design', 'Performance Optimized', 'SEO Ready'] },
      },
      ecommerce: {
        title: { tr: 'E-ticaret Geliştirme', en: 'E-commerce Development' },
        desc: { tr: 'Optimize ödeme akışları ve entegrasyonlarıyla tam özellikli online mağazalar.', en: 'Full-featured online stores with optimized checkout flows and payment integration.' },
        features: { tr: ['Ödeme Entegrasyonu', 'Stok Yönetimi', 'Analiz Paneli'], en: ['Payment Gateway', 'Inventory Management', 'Analytics Dashboard'] },
      },
      seo: {
        title: { tr: 'SEO Optimizasyonu', en: 'SEO Optimization' },
        desc: { tr: 'Maksimum görünürlük ve trafik için kapsamlı arama motoru optimizasyonu.', en: 'Comprehensive search engine optimization for maximum visibility and traffic.' },
        features: { tr: ['Teknik SEO', 'İçerik Stratejisi', 'Schema Markup'], en: ['Technical SEO', 'Content Strategy', 'Schema Markup'] },
      },
      branding: {
        title: { tr: 'Marka Kimliği Tasarımı', en: 'Brand Identity Design' },
        desc: { tr: 'Logo, kılavuz ve görsel kimlik sistemlerini içeren eksiksiz marka paketleri.', en: 'Complete branding packages including logo, guidelines, and visual identity systems.' },
        features: { tr: ['Logo Tasarımı', 'Marka Kılavuzu', 'Görsel Kimlik'], en: ['Logo Design', 'Brand Guidelines', 'Visual Identity'] },
      },
      marketing: {
        title: { tr: 'Dijital Pazarlama', en: 'Digital Marketing' },
        desc: { tr: 'PPC, sosyal medya ve içerik pazarlaması dahil stratejik kampanyalar.', en: 'Strategic campaigns including PPC, social media, and content marketing.' },
        features: { tr: ['PPC Kampanyaları', 'Sosyal Medya', 'İçerik Pazarlama'], en: ['PPC Campaigns', 'Social Media', 'Content Marketing'] },
      },
      maintenance: {
        title: { tr: 'Site Bakımı', en: 'Website Maintenance' },
        desc: { tr: 'Güvenlik güncellemeleri, yedekleme ve performans izleme dahil sürekli destek.', en: 'Ongoing support including security updates, backups, and performance monitoring.' },
        features: { tr: ['Güvenlik Güncellemeleri', 'Günlük Yedekleme', '7/24 İzleme'], en: ['Security Updates', 'Daily Backups', '24/7 Monitoring'] },
      },
      techStack: {
        title: { tr: 'Modern Teknoloji Altyapısı', en: 'Modern Tech Stack' },
        desc: { tr: 'Işık hızında, ölçeklenebilir ve sürdürülebilir web uygulamaları için en son teknolojilerle geliştiriyoruz.', en: 'Built with cutting-edge technologies for blazing-fast, scalable, and maintainable web applications.' },
        features: { tr: ['Next.js 16+', 'React 19', 'TypeScript', 'Tailwind CSS', 'Node.js'], en: ['Next.js 16+', 'React 19', 'TypeScript', 'Tailwind CSS', 'Node.js'] },
      },
    },
  },

  // ── Why Choose Us ──
  whyUs: {
    badge: { tr: 'Neden Biz', en: 'Why Choose Us' },
    title1: { tr: 'Bizi', en: 'What Makes Us' },
    title2: { tr: 'Farklı Kılan', en: 'Different' },
    description: {
      tr: 'Teknik mükemmelliği stratejik düşünceyle birleştirerek sadece harika görünen değil, performans gösteren web siteleri sunuyoruz.',
      en: 'We combine technical excellence with strategic thinking to deliver websites that don\'t just look great—they perform.',
    },
    stats: {
      projects: { value: { tr: '150+', en: '150+' }, label: { tr: 'Tamamlanan Proje', en: 'Projects Delivered' } },
      satisfaction: { value: { tr: '98%', en: '98%' }, label: { tr: 'Müşteri Memnuniyeti', en: 'Client Satisfaction' } },
      awards: { value: { tr: '12+', en: '12+' }, label: { tr: 'Sektör Ödülü', en: 'Industry Awards' } },
      experience: { value: { tr: '6+', en: '6+' }, label: { tr: 'Yıllık Deneyim', en: 'Years Experience' } },
    },
    features: {
      performance: {
        title: { tr: 'Önce Performans', en: 'Performance First' },
        desc: { tr: 'Her web sitemiz Google PageSpeed Insights\'ta 95+ puan alır. Hızlı siteler daha iyi dönüşüm ve sıralama sağlar.', en: 'Every website we build scores 95+ on Google PageSpeed Insights. Fast sites convert better and rank higher.' },
        metric: { tr: '95+', en: '95+' },
        metricLabel: { tr: 'PageSpeed Skoru', en: 'PageSpeed Score' },
      },
      conversion: {
        title: { tr: 'Dönüşüm Odaklı', en: 'Conversion Optimized' },
        desc: { tr: 'Maksimum yatırım getirisi için kullanıcı davranış analitiği ve A/B testlerine dayalı veri odaklı tasarım.', en: 'Data-driven design decisions based on user behavior analytics and A/B testing for maximum ROI.' },
        metric: { tr: '3x', en: '3x' },
        metricLabel: { tr: 'Ortalama YG Artışı', en: 'Average ROI Increase' },
      },
      ai: {
        title: { tr: 'Yapay Zeka Hazır', en: 'AI-Ready Architecture' },
        desc: { tr: 'Maksimum AI görünürlüğü ve AEO optimizasyonu için yapılandırılmış veri, schema markup ve semantik HTML.', en: 'Structured data, schema markup, and semantic HTML for maximum AI visibility and AEO optimization.' },
        metric: { tr: '100%', en: '100%' },
        metricLabel: { tr: 'Schema Uyumluluğu', en: 'Schema Compliance' },
      },
      support: {
        title: { tr: 'Sürekli Destek', en: 'Ongoing Support' },
        desc: { tr: 'Size özel hesap yöneticisi, 7/24 izleme ve öncelikli destek ile siteniz her zaman sorunsuz çalışır.', en: 'Dedicated account manager, 24/7 monitoring, and priority support to keep your site running smoothly.' },
        metric: { tr: '7/24', en: '24/7' },
        metricLabel: { tr: 'Destek', en: 'Support Available' },
      },
    },
  },

  // ── Industries ──
  industries: {
    badge: { tr: 'Hizmet Verdiğimiz Sektörler', en: 'Industries We Serve' },
    title1: { tr: 'Sektörünüze Özel', en: 'Specialized Solutions for' },
    title2: { tr: 'Çözümler', en: 'Your Industry' },
    description: {
      tr: 'Farklı sektörlerin kendine özgü zorluklarını ve fırsatlarını anlıyor, yaklaşımımızı buna göre şekillendiriyoruz.',
      en: 'We understand the unique challenges and opportunities of different industries and tailor our approach accordingly.',
    },
    learnMore: { tr: 'Detaylı Bilgi', en: 'Learn More' },
    items: {
      ecommerce: {
        name: { tr: 'E-ticaret', en: 'E-commerce' },
        desc: { tr: 'Optimize ödeme akışları ve stok yönetimiyle yüksek dönüşümlü online mağazalar.', en: 'High-converting online stores with optimized checkout flows and inventory management.' },
      },
      healthcare: {
        name: { tr: 'Sağlık', en: 'Healthcare' },
        desc: { tr: 'Randevu ve hasta portalı entegrasyonlu profesyonel medikal web siteleri.', en: 'Professional medical websites with appointment booking and patient portals.' },
      },
      realestate: {
        name: { tr: 'Emlak', en: 'Real Estate' },
        desc: { tr: 'Gelişmiş arama ve sanal tur özellikli emlak listeleme platformları.', en: 'Property listing platforms with advanced search and virtual tours.' },
      },
      restaurants: {
        name: { tr: 'Restoran', en: 'Restaurants' },
        desc: { tr: 'Online sipariş ve rezervasyon sistemli, iştah açıcı restoran web siteleri.', en: 'Appetizing restaurant websites with online ordering and reservation systems.' },
      },
    },
  },

  // ── Portfolio ──
  portfolio: {
    badge: { tr: 'Çalışmalarımız', en: 'Our Work' },
    title1: { tr: 'Öne Çıkan', en: 'Featured' },
    title2: { tr: 'Projeler', en: 'Projects' },
    description: {
      tr: 'Sizin gibi işletmelerin stratejik web tasarımıyla nasıl olağanüstü sonuçlar elde ettiğini görün.',
      en: 'See how we\'ve helped businesses like yours achieve remarkable results through strategic web design.',
    },
    viewAll: { tr: 'Tüm Projeleri Gör', en: 'View All Projects' },
    projects: {
      ecommerce: {
        title: { tr: 'Lüks E-ticaret Yenileme', en: 'Luxury E-commerce Redesign' },
        desc: { tr: 'Dönüşümlerde %45 artış sağlayan kapsamlı yeniden tasarım', en: 'Complete redesign resulting in 45% increase in conversions' },
        conversion: { tr: 'dönüşüm', en: 'conversion' },
        revenue: { tr: 'gelir', en: 'revenue' },
        speed: { tr: 'hız', en: 'speed' },
      },
      healthcare: {
        title: { tr: 'Sağlık Platformu', en: 'Healthcare Platform' },
        desc: { tr: 'Online randevu ve teletıp entegrasyonlu hasta portalı', en: 'Patient portal with online booking and telemedicine integration' },
        patients: { tr: 'hasta', en: 'patients' },
        booking: { tr: 'randevu', en: 'booking' },
        satisfaction: { tr: 'memnuniyet', en: 'satisfaction' },
      },
      realestate: {
        title: { tr: 'Emlak Pazaryeri', en: 'Real Estate Marketplace' },
        desc: { tr: 'Sanal tur ve gelişmiş arama özellikli emlak platformu', en: 'Property listing platform with virtual tours and advanced search' },
        listings: { tr: 'ilan', en: 'listings' },
        leads: { tr: 'potansiyel', en: 'leads' },
        engagement: { tr: 'etkileşim', en: 'engagement' },
      },
      restaurants: {
        title: { tr: 'Restoran Zinciri Sitesi', en: 'Restaurant Chain Website' },
        desc: { tr: 'Online sipariş ve rezervasyon sistemli çok lokasyonlu site', en: 'Multi-location website with online ordering and reservation system' },
        orders: { tr: 'sipariş', en: 'orders' },
        reservations: { tr: 'rezervasyon', en: 'reservations' },
        traffic: { tr: 'trafik', en: 'traffic' },
      },
    },
  },

  // ── Testimonials ──
  testimonials: {
    badge: { tr: 'Müşteri Yorumları', en: 'Client Testimonials' },
    title1: { tr: 'Müşterilerimiz', en: 'What Our' },
    title2: { tr: 'Ne Diyor', en: 'Clients Say' },
    description: {
      tr: 'Sadece bizim sözümüze güvenmeyin. İşte müşterilerimizin bizimle çalışma deneyimleri.',
      en: 'Don\'t just take our word for it. Here\'s what our clients have to say about working with us.',
    },
    items: {
      ahmet: {
        name: { tr: 'Ahmet Yılmaz', en: 'Ahmet Yılmaz' },
        role: { tr: 'CEO, TechStart A.Ş.', en: 'CEO, TechStart Inc.' },
        content: {
          tr: 'Dijital V3 online varlığımızı tamamen dönüştürdü. Yeni web sitemiz sadece harika görünmekle kalmadı, potansiyel müşteri kazanımımızı %150 artırdı. Ekibin detaylara gösterdiği özen ve teknik uzmanlığı rakipsiz.',
          en: 'Dijital V3 transformed our online presence completely. Our new website not only looks stunning but has increased our lead generation by 150%. The team\'s attention to detail and technical expertise is unmatched.',
        },
      },
      sarah: {
        name: { tr: 'Sarah Johnson', en: 'Sarah Johnson' },
        role: { tr: 'Pazarlama Direktörü, Luxe Retail', en: 'Marketing Director, Luxe Retail' },
        content: {
          tr: 'Dijital V3 ile çalışmak mutlak bir zevkti. Vizyonumuzu mükemmel şekilde anladılar ve beklentilerimizi aşan bir e-ticaret platformu sundular. İlk çeyrekte satışlar %67 arttı.',
          en: 'Working with Dijital V3 was an absolute pleasure. They understood our vision perfectly and delivered an e-commerce platform that exceeded our expectations. Sales increased by 67% in the first quarter.',
        },
      },
      mehmet: {
        name: { tr: 'Dr. Mehmet Demir', en: 'Dr. Mehmet Demir' },
        role: { tr: 'Kurucu, HealthPlus Kliniği', en: 'Founder, HealthPlus Clinic' },
        content: {
          tr: 'Bizim için geliştirdikleri hasta portalı, hastalarımızla etkileşim şeklimizi tamamen değiştirdi. Online randevular %85 arttı ve hasta memnuniyeti tüm zamanların en yüksek seviyesinde. Şiddetle tavsiye ederim!',
          en: 'The patient portal they built for us has revolutionized how we interact with our patients. Online bookings increased by 85% and patient satisfaction is at an all-time high. Highly recommended!',
        },
      },
      ayse: {
        name: { tr: 'Ayşe Kaya', en: 'Ayşe Kaya' },
        role: { tr: 'Sahip, Lezzet Durağı Restoran Zinciri', en: 'Owner, Lezzet Durağı Restaurant Chain' },
        content: {
          tr: 'Online sipariş sistemimiz kurulduğundan beri paket servis gelirimiz %200 arttı. Dijital V3 ekibi restoran sektörünün ihtiyaçlarını çok iyi anlıyor. Mobil uyumlu menü ve hızlı sipariş akışı müşterilerimizden tam not aldı.',
          en: 'Since our online ordering system was set up, our delivery revenue increased by 200%. Dijital V3 team truly understands the restaurant industry. The mobile-friendly menu and fast ordering flow got full marks from our customers.',
        },
      },
      can: {
        name: { tr: 'Can Özdemir', en: 'Can Özdemir' },
        role: { tr: 'Genel Müdür, Özdemir Gayrimenkul', en: 'General Manager, Özdemir Real Estate' },
        content: {
          tr: 'Emlak portalımız 3 ayda 200\'den fazla ilanı yönetir hale geldi. Sanal tur özelliği ve gelişmiş filtreleme sistemi sayesinde müşteri memnuniyetimiz zirveye çıktı. Dijital V3 ile çalışmak sektörde fark yarattı.',
          en: 'Our real estate portal now manages over 200 listings in just 3 months. Thanks to the virtual tour feature and advanced filtering, customer satisfaction is at an all-time high. Working with Dijital V3 made a real difference.',
        },
      },
      zeynep: {
        name: { tr: 'Zeynep Arslan', en: 'Zeynep Arslan' },
        role: { tr: 'E-ticaret Direktörü, ModaButik', en: 'E-commerce Director, ModaButik' },
        content: {
          tr: 'E-ticaret sitemizin dönüşüm oranı yeniden tasarım sonrası %67 arttı. Ödeme sayfasındaki iyileştirmeler terk oranını yarıya indirdi. Mobil deneyimdeki akıcılık ise mobil satışları %89 yükseltti.',
          en: 'Our e-commerce conversion rate increased by 67% after the redesign. Checkout improvements cut abandonment rate in half. The smooth mobile experience boosted mobile sales by 89%.',
        },
      },
      burak: {
        name: { tr: 'Burak Şahin', en: 'Burak Şahin' },
        role: { tr: 'CTO, TechNova Yazılım A.Ş.', en: 'CTO, TechNova Software Inc.' },
        content: {
          tr: 'Bir teknoloji şirketi olarak beklentimiz çok yüksekti. Dijital V3, Next.js ve TypeScript ile geliştirdikleri kurumsal sitemizle beklentilerimizi aştı. Lighthouse skorumuz 98, SEO sıralamamız ilk sayfada.',
          en: 'As a tech company, our expectations were very high. Dijital V3 exceeded them with our corporate site built on Next.js and TypeScript. Lighthouse score is 98, and we rank on the first page of Google.',
        },
      },
      elif: {
        name: { tr: 'Elif Demirtaş', en: 'Elif Demirtaş' },
        role: { tr: 'Pazarlama Müdürü, GreenLife Organik', en: 'Marketing Manager, GreenLife Organic' },
        content: {
          tr: 'SEO danışmanlığı ve yeni web sitemiz sayesinde organik trafiğimiz 6 ayda %310 arttı. İçerik stratejileri ve teknik SEO çalışmaları markamızı sektörde görünür kıldı. Dijital V3 gerçekten işini biliyor.',
          en: 'Thanks to SEO consulting and our new website, organic traffic grew by 310% in 6 months. Content strategy and technical SEO work made our brand visible in the industry. Dijital V3 truly knows their craft.',
        },
      },
    },
  },

  // ── FAQ ──
  faq: {
    badge: { tr: 'SSS', en: 'FAQ' },
    title1: { tr: 'Sıkça Sorulan', en: 'Frequently Asked' },
    title2: { tr: 'Sorular', en: 'Questions' },
    description: {
      tr: 'Bizimle çalışma hakkında bilmeniz gereken her şey.',
      en: 'Everything you need to know about working with us.',
    },
    items: [
      {
        q: { tr: 'Profesyonel bir web sitesi ne kadar tutar?', en: 'How much does a professional website cost?' },
        a: { tr: 'Özel web tasarım paketlerimiz 15.000 TL\'den başlar ve karmaşıklığa, özelliklere ve gereksinimlere göre değişir. E-ticaret çözümleri 25.000 TL\'den başlar. İhtiyaçlarınızı ve hedeflerinizi anladığımız ilk görüşme sonrası detaylı fiyat teklifi sunuyoruz.', en: 'Our custom website design packages start from 15,000 TRY and vary based on complexity, features, and requirements. E-commerce solutions start from 25,000 TRY. We provide detailed quotes after an initial consultation where we understand your specific needs and goals.' },
      },
      {
        q: { tr: 'Web sitesi yapımı ne kadar sürer?', en: 'How long does it take to build a website?' },
        a: { tr: 'Standart kurumsal web siteleri için 4-8 hafta, karmaşık e-ticaret platformları için 8-12 hafta arası proje süreleri. Her aşamada kalite ve kapsamlı teste öncelik veriyoruz. Acil projeler ek ücretle hızlandırılabilir.', en: 'Typical project timelines range from 4-8 weeks for standard business websites and 8-12 weeks for complex e-commerce platforms. We prioritize quality and thorough testing at each stage. Rush projects can be accommodated with a premium fee.' },
      },
      {
        q: { tr: 'SEO optimizasyonu yapıyor musunuz?', en: 'Do you provide SEO optimization?' },
        a: { tr: 'Evet, tüm web sitelerimiz teknik SEO, sayfa içi optimizasyon, schema markup ve performans optimizasyonu dahil temel SEO ile gelir. Ayrıca sürekli optimizasyon, içerik stratejisi ve link inşası için gelişmiş SEO paketleri sunuyoruz.', en: 'Yes, all our websites come with foundational SEO optimization including technical SEO, on-page optimization, schema markup, and performance optimization. We also offer advanced SEO packages for ongoing optimization, content strategy, and link building.' },
      },
      {
        q: { tr: 'Sürekli bakım ve destek sunuyor musunuz?', en: 'Do you offer ongoing maintenance and support?' },
        a: { tr: 'Kesinlikle! Güvenlik güncellemeleri, yedekleme, performans izleme, içerik güncellemeleri ve öncelikli destek içeren aylık bakım paketleri sunuyoruz. Paketler aylık 2.000 TL\'den başlar.', en: 'Absolutely! We offer monthly maintenance packages that include security updates, backups, performance monitoring, content updates, and priority support to keep your website running smoothly. Plans start from 2,000 TRY/month.' },
      },
      {
        q: { tr: 'Site yayına alındıktan sonra kendim güncelleyebilir miyim?', en: 'Can I update the website myself after it\'s launched?' },
        a: { tr: 'Evet! Tüm web sitelerimizi kullanıcı dostu içerik yönetim sistemleri (CMS) ile geliştiriyoruz. Ekibinizin içerik güncelleyebilmesi, blog yazısı ekleyebilmesi ve ürün yönetebilmesi için kapsamlı eğitim ve dokümantasyon sağlıyoruz. Daha karmaşık değişiklikler için her zaman buradayız.', en: 'Yes! We build all our websites with user-friendly content management systems (CMS). We provide comprehensive training and documentation so your team can easily update content, add blog posts, and manage products. Of course, we\'re always here for more complex changes.' },
      },
      {
        q: { tr: 'Hangi teknolojileri kullanıyorsunuz?', en: 'What technologies do you use?' },
        a: { tr: 'Next.js, React, Tailwind CSS gibi modern ve performanslı teknolojiler ile Sanity ve Contentful gibi headless CMS platformları kullanıyoruz. E-ticaret için ihtiyacınıza göre Shopify, WooCommerce ve özel çözümlerle çalışıyoruz.', en: 'We use modern, performant technologies including Next.js, React, Tailwind CSS, and headless CMS platforms like Sanity and Contentful. For e-commerce, we work with Shopify, WooCommerce, and custom solutions depending on your needs.' },
      },
      {
        q: { tr: 'Türkiye dışındaki müşterilerle çalışıyor musunuz?', en: 'Do you work with clients outside of Turkey?' },
        a: { tr: 'Evet! Antalya/Kemer merkezli olmamıza rağmen global müşterilerle çalışıyoruz. Konumunuz nerede olursa olsun, modern uzaktan çalışma sürecimiz sorunsuz iletişim ve proje teslimatı sağlar. Avrupa, Orta Doğu ve Kuzey Amerika\'daki müşterilere başarıyla projeler teslim ettik.', en: 'Yes! While we\'re based in Antalya/Kemer, we work with clients globally. Our streamlined remote process ensures smooth communication and project delivery regardless of your location. We\'ve successfully delivered projects for clients in Europe, Middle East, and North America.' },
      },
      {
        q: { tr: 'Tasarım süreciniz nasıl işliyor?', en: 'What is your design process?' },
        a: { tr: 'Sürecimiz: 1) Keşif & Strateji - hedeflerinizi ve kitlenizi anlama, 2) Wireframe - kullanıcı yolculuğunu planlama, 3) Tasarım - görsel maket ve prototipler, 4) Geliştirme - temiz, performanslı kod, 5) Test - cihazlar arası kapsamlı QA, 6) Lansman & Optimizasyon - yayına alma ve sürekli iyileştirme.', en: 'Our process includes: 1) Discovery & Strategy - understanding your goals and audience, 2) Wireframing - planning the user journey, 3) Design - creating visual mockups and prototypes, 4) Development - building with clean, performant code, 5) Testing - rigorous QA across devices, 6) Launch & Optimization - going live and continuous improvement.' },
      },
    ],
  },

  // ── Contact Form ──
  contact: {
    badge: { tr: 'İletişim', en: 'Contact' },
    title1: { tr: 'Birlikte Harika Bir', en: 'Let\'s Build Something' },
    title2: { tr: 'Şey İnşa Edelim', en: 'Amazing' },
    description: {
      tr: 'Projenizden bahsedin, 24 saat içinde size dönüş yapalım.',
      en: 'Tell us about your project and we\'ll get back to you within 24 hours.',
    },
    fields: {
      name: { tr: 'Adınız Soyadınız', en: 'Your Name' },
      email: { tr: 'E-posta Adresiniz', en: 'Your Email' },
      phone: { tr: 'Telefon Numaranız', en: 'Your Phone' },
      company: { tr: 'Şirket Adı', en: 'Company Name' },
      service: { tr: 'Hizmet Seçin', en: 'Select a Service' },
      message: { tr: 'Projenizden bahsedin...', en: 'Tell us about your project...' },
    },
    serviceOptions: {
      select: { tr: 'Hizmet Seçin', en: 'Select a Service' },
      webDesign: { tr: 'Özel Web Tasarımı', en: 'Custom Website Design' },
      ecommerce: { tr: 'E-ticaret Geliştirme', en: 'E-commerce Development' },
      seo: { tr: 'SEO Optimizasyonu', en: 'SEO Optimization' },
      branding: { tr: 'Marka Kimliği Tasarımı', en: 'Brand Identity Design' },
      marketing: { tr: 'Dijital Pazarlama', en: 'Digital Marketing' },
      maintenance: { tr: 'Site Bakımı', en: 'Website Maintenance' },
    },
    submit: { tr: 'Teklif Al', en: 'Get Free Quote' },
    submitting: { tr: 'Gönderiliyor...', en: 'Submitting...' },
    // KVKK (Kişisel Verilerin Korunması Kanunu) — Türkiye için yasal zorunluluk
    kvkk: {
      label: { tr: 'Kişisel verilerimin işlenmesini kabul ediyorum', en: 'I consent to the processing of my personal data' },
      required: { tr: 'Devam etmek için KVKK metnini onaylamanız gerekmektedir.', en: 'You must accept the privacy policy to continue.' },
    },
    kvkkFullText: {
      tr: 'Kişisel verilerimin Gizlilik Politikası kapsamında işlenmesine izin veriyorum.',
      en: 'I consent to the processing of my personal data under the Privacy Policy.',
    },
    privacyText: { tr: 'Gizlilik Politikası', en: 'Privacy Policy' },
    security: { tr: 'Bilgileriniz güvende ve asla üçüncü kişilerle paylaşılmaz.', en: 'Your information is secure and will never be shared.' },
    success: {
      title: { tr: 'Teşekkürler!', en: 'Thank You!' },
      message: { tr: 'Mesajınız alındı. Ekibimiz en kısa sürede sizinle iletişime geçecek.', en: 'Your message has been received. Our team will contact you shortly.' },
      resubmit: { tr: 'Yeni Talep Gönder', en: 'Submit Another Request' },
    },
    error: {
      message: { tr: 'Bir şeyler yanlış gitti. Lütfen tekrar deneyin.', en: 'Something went wrong. Please try again.' },
    },
  },

  // ── Footer ──
  footer: {
    description: {
      tr: 'Dijital mükemmellik yaratan ödüllü web tasarım ajansı. Vizyonunuzu çarpıcı, yüksek dönüşümlü web sitelerine dönüştürüyoruz.',
      en: 'Award-winning web design agency creating digital excellence. We transform your vision into stunning, high-converting websites.',
    },
    services: { tr: 'Hizmetler', en: 'Services' },
    industries: { tr: 'Sektörler', en: 'Industries' },
    company: { tr: 'Kurumsal', en: 'Company' },
    support: { tr: 'Destek', en: 'Support' },
    serviceItems: {
      webDesign: { tr: 'Özel Web Tasarımı', en: 'Custom Website Design' },
      ecommerce: { tr: 'E-ticaret Geliştirme', en: 'E-commerce Development' },
      seo: { tr: 'SEO Optimizasyonu', en: 'SEO Optimization' },
      branding: { tr: 'Marka Kimliği', en: 'Brand Identity' },
      marketing: { tr: 'Dijital Pazarlama', en: 'Digital Marketing' },
    },
    industryItems: {
      ecommerce: { tr: 'E-ticaret', en: 'E-commerce' },
      healthcare: { tr: 'Sağlık', en: 'Healthcare' },
      realestate: { tr: 'Emlak', en: 'Real Estate' },
      restaurants: { tr: 'Restoranlar', en: 'Restaurants' },
    },
    companyItems: {
      about: { tr: 'Hakkımızda', en: 'About Us' },
      portfolio: { tr: 'Portföy', en: 'Portfolio' },
      caseStudies: { tr: 'Vaka Çalışmaları', en: 'Case Studies' },
      blog: { tr: 'Blog', en: 'Blog' },
      careers: { tr: 'Kariyer', en: 'Careers' },
    },
    supportItems: {
      contact: { tr: 'İletişim', en: 'Contact' },
      faq: { tr: 'SSS', en: 'FAQ' },
      privacy: { tr: 'Gizlilik Politikası', en: 'Privacy Policy' },
      terms: { tr: 'Kullanım Şartları', en: 'Terms of Service' },
    },
    rights: {
      tr: '© 2026 Dijital V3 Ajans. Tüm hakları saklıdır.',
      en: '© 2026 Dijital V3 Agency. All rights reserved.',
    },
    privacy: { tr: 'Gizlilik', en: 'Privacy' },
    terms: { tr: 'Şartlar', en: 'Terms' },
    cookies: { tr: 'Çerezler', en: 'Cookies' },
  },

  // ── AI-Answer (AEO/GEO) — LLM'lerin alıntılayabileceği yapılandırılmış özet ──
  aiAnswer: {
    home: {
      tr: 'Dijital V3, Antalya/Kemer merkezli, Akdeniz turizm işletmelerine özel web tasarım ve dijital dönüşüm ajansıdır. Define Tours, Kemer Car Rental gibi referanslarla; otel, villa, araç kiralama ve tur acentelerine Next.js, TypeScript ve Tailwind CSS ile yüksek dönüşümlü web siteleri sunuyoruz. 150\'den fazla projede %98 müşteri memnuniyetiyle Akdeniz\'in dijital geleceğini inşa ediyoruz.',
      en: 'Dijital V3 is a web design and digital transformation agency based in Antalya/Kemer, specialized in Mediterranean tourism businesses. With references like Define Tours and Kemer Car Rental, we deliver high-converting websites for hotels, villas, car rentals, and tour agencies using Next.js, TypeScript, and Tailwind CSS. 150+ projects with 98% client satisfaction.',
    },
  },

  // ── Pricing (Fiyatlandırma) ──
  pricing: {
    badge: { tr: 'Fiyatlandırma', en: 'Pricing' },
    title1: { tr: 'İhtiyacınıza Uygun', en: 'Transparent Pricing' },
    title2: { tr: 'Şeffaf Fiyatlandırma', en: 'for Every Need' },
    description: {
      tr: 'Gizli ücret yok. İhtiyacınıza en uygun paketi seçin, hemen başlayalım.',
      en: 'No hidden fees. Choose the package that fits your needs and let\'s get started.',
    },
    currency: { tr: 'TL', en: 'TRY' },
    startingAt: { tr: 'Başlangıç', en: 'Starting at' },
    popular: { tr: 'En Çok Tercih Edilen', en: 'Most Popular' },
    getStarted: { tr: 'Hemen Başla', en: 'Get Started' },
    contactUs: { tr: 'İletişime Geç', en: 'Contact Us' },
    features: {
      pages: { tr: 'Sayfa', en: 'Pages' },
      responsive: { tr: 'Mobil Uyumlu Tasarım', en: 'Responsive Design' },
      seo: { tr: 'Temel SEO', en: 'Basic SEO' },
      cms: { tr: 'İçerik Yönetim Sistemi', en: 'Content Management' },
      ecommerce: { tr: 'E-ticaret Altyapısı', en: 'E-commerce Ready' },
      paymentGateway: { tr: 'Ödeme Entegrasyonu', en: 'Payment Gateway' },
      customDesign: { tr: 'Özel Tasarım', en: 'Custom Design' },
      adminPanel: { tr: 'Yönetici Paneli', en: 'Admin Panel' },
      analytics: { tr: 'Analitik Entegrasyonu', en: 'Analytics Integration' },
      speedOptimization: { tr: 'Hız Optimizasyonu', en: 'Speed Optimization' },
      support247: { tr: '7/24 Destek', en: '24/7 Support' },
      apiIntegration: { tr: 'API Entegrasyonu', en: 'API Integration' },
      multiLanguage: { tr: 'Çok Dilli Destek', en: 'Multi-language' },
      advancedSeo: { tr: 'Gelişmiş SEO Paketi', en: 'Advanced SEO' },
      maintenance3mo: { tr: '3 Ay Ücretsiz Bakım', en: '3 Months Free Maintenance' },
      maintenance6mo: { tr: '6 Ay Ücretsiz Bakım', en: '6 Months Free Maintenance' },
      maintenance12mo: { tr: '12 Ay Ücretsiz Bakım', en: '12 Months Free Maintenance' },
    },
    plans: {
      starter: {
        name: { tr: 'Başlangıç', en: 'Starter' },
        desc: { tr: 'Dijital varlığınızı modern altyapıyla başlatmak için.', en: 'Launch your digital presence with modern infrastructure.' },
        price: { tr: '25.000', en: '750' },
        features: {
          tr: ['5 Sayfaya Kadar', 'Mobil ve Performans Odaklı Altyapı', 'Next.js + Tailwind CSS', 'Temel SEO', 'İletişim Formu', 'Sosyal Medya Entegrasyonu'],
          en: ['Up to 5 Pages', 'Mobile & Performance Optimized', 'Next.js + Tailwind CSS', 'Basic SEO', 'Contact Form', 'Social Media Integration'],
        },
      },
      professional: {
        name: { tr: 'Profesyonel', en: 'Professional' },
        desc: { tr: 'Büyüyen işletmeler için GEO ve AEO entegrasyonlu çözüm.', en: 'GEO and AEO integrated solution for growing businesses.' },
        price: { tr: '55.000', en: '1,650' },
        features: {
          tr: ['10 Sayfaya Kadar', 'Özel Tasarım', 'Gelişmiş SEO + GEO + AEO Paketi', 'İçerik Yönetim Sistemi', 'Blog Altyapısı', 'Analitik Entegrasyonu', 'Core Web Vitals Optimizasyonu', 'Yapay Zeka Görünürlük (AI Overview)'],
          en: ['Up to 10 Pages', 'Custom Design', 'Advanced SEO + GEO + AEO', 'Content Management', 'Blog Setup', 'Analytics Integration', 'Core Web Vitals Optimization', 'AI Overview Visibility'],
        },
      },
      enterprise: {
        name: { tr: 'Kurumsal', en: 'Enterprise' },
        desc: { tr: 'Tam kapsamlı dijital dönüşüm, e-ticaret ve AI optimizasyonu.', en: 'Full digital transformation, e-commerce, and AI optimization.' },
        price: { tr: '120.000', en: '3,600' },
        features: {
          tr: ['50 Sayfaya Kadar', 'E-ticaret Altyapısı', 'Ödeme Entegrasyonu (İyzico/PayTR)', 'Çok Dilli Destek (i18n)', 'Özel Yönetici Paneli', 'API Entegrasyonu', '7/24 Öncelikli Destek', 'AI Search Optimizasyonu (GEO + AEO + AIO)'],
          en: ['Up to 50 Pages', 'E-commerce Ready', 'Payment Gateway', 'Multi-language (i18n)', 'Custom Admin Panel', 'API Integration', '24/7 Priority Support', 'AI Search Optimization (GEO + AEO + AIO)'],
        },
      },
    },
    comparison: {
      title: { tr: 'Paket Karşılaştırma', en: 'Plan Comparison' },
      feature: { tr: 'Özellik', en: 'Feature' },
    },
  },

  // ── Breadcrumb (Ekmek Kırıntısı) ──
  breadcrumb: {
    home: { tr: 'Ana Sayfa', en: 'Home' },
  },

  // ── Lead Magnet (Ücretsiz Analiz Teklifi) ──
  leadMagnet: {
    title: { tr: 'Web Sitenizi Ücretsiz Analiz Edelim', en: 'Get a Free Website Analysis' },
    description: {
      tr: 'Uzman ekibimiz sitenizi incelesin, size özel iyileştirme raporu hazırlayalım. Tamamen ücretsiz.',
      en: 'Let our experts analyze your site and prepare a custom improvement report. Completely free.',
    },
    cta: { tr: 'Ücretsiz Analiz Al', en: 'Get Free Analysis' },
    placeholder: { tr: 'Web site adresiniz (örn: www.siteniz.com)', en: 'Your website URL (e.g. www.yoursite.com)' },
    success: { tr: 'Teşekkürler! Analiz raporunuz 24 saat içinde e-posta adresinize gönderilecek.', en: 'Thanks! Your analysis report will be sent to your email within 24 hours.' },
  },

  // ── Author Box (E-E-A-T Yazar Kutusu) ──
  author: {
    name: { tr: 'Koray Aksoy', en: 'Koray Aksoy' },
    role: { tr: 'Kurucu & Full Stack Geliştirici', en: 'Founder & Full Stack Developer' },
    bio: {
      tr: 'Yazılım geliştirme ve SEO alanlarındaki deneyimini Akdeniz turizm sektöründe aktif görev alarak birleştiriyor. Define Tours\'ta satış ve dijital operasyonlarda yer alıyor. Next.js, React, TypeScript ve Tailwind CSS ile performans odaklı projeler geliştiriyor.',
      en: 'Combines software development and SEO expertise with active involvement in Mediterranean tourism. Works in sales and digital operations at Define Tours. Builds performance-focused projects with Next.js, React, TypeScript, and Tailwind CSS.',
    },
    credentials: {
      tr: ['Full Stack Geliştirici', 'SEO Uzmanı', 'Turizm Sektörü Deneyimi', 'Next.js & React'],
      en: ['Full Stack Developer', 'SEO Expert', 'Tourism Industry Exp.', 'Next.js & React'],
    },
    updatedLabel: { tr: 'Son güncelleme', en: 'Last updated' },
  },

  // ── Meta / SEO ──
  meta: {
    homeTitle: { tr: 'Dijital V3 | Ödüllü Web Tasarım & Dijital Ajans', en: 'Dijital V3 | Award-Winning Web Design & Digital Agency' },
    homeDescription: {
      tr: 'Vizyonunuzu etkileyen, dönüştüren ve markanızı yükselten çarpıcı web siteleri. Premium web tasarım, e-ticaret ve dijital pazarlama hizmetleri.',
      en: 'Transform your vision into stunning websites that captivate, convert, and elevate your brand. Premium web design, e-commerce, and digital marketing services.',
    },
    // Schema.org organization
    orgName: { tr: 'Dijital V3 Ajans', en: 'Dijital V3 Agency' },
    orgDescription: {
      tr: 'Yüksek dönüşümlü web siteleri, e-ticaret çözümleri ve dijital dönüşüm konusunda uzmanlaşmış ödüllü web tasarım ajansı.',
      en: 'Award-winning web design agency specializing in high-converting websites, e-commerce solutions, and digital transformation.',
    },
  },
} as const;

// ── Yardımcı fonksiyon ──
type TranslationPath = string;

/**
 * Çeviri sözlüğünden iç içe değer okur.
 * Örnek: getTranslation('tr', 'hero.badge') → "✨ Ödüllü Web Tasarım Ajansı"
 */
export function t(lang: Language, path: string): string {
  const keys = path.split('.');
  let result: any = translations;

  for (const key of keys) {
    if (result[key] === undefined) return path; // fallback: path'i göster
    result = result[key];
  }

  if (typeof result === 'object' && 'tr' in result && 'en' in result) {
    return result[lang] as string;
  }

  // Eğer string array ise (features gibi)
  if (Array.isArray(result)) {
    // Array içindeki her eleman {tr, en} objesi mi?
    if (result.length > 0 && typeof result[0] === 'object' && 'tr' in result[0]) {
      return result.map((item: any) => item[lang]).join('|||'); // geçici ayraç
    }
  }

  return String(result);
}

/**
 * Çeviri dizisi döndürür (features gibi)
 */
export function ta(lang: Language, path: string): string[] {
  const keys = path.split('.');
  let result: any = translations;

  for (const key of keys) {
    if (result[key] === undefined) return [path];
    result = result[key];
  }

  if (Array.isArray(result)) {
    if (result.length > 0 && typeof result[0] === 'object' && 'tr' in result[0]) {
      return result.map((item: any) => item[lang]);
    }
    return result;
  }

  if (typeof result === 'object' && 'tr' in result && 'en' in result) {
    return [result[lang] as string];
  }

  return [String(result)];
}
