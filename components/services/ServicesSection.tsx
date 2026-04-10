'use client';

import { motion } from 'framer-motion';
import {
  ComputerDesktopIcon,
  ShoppingBagIcon,
  MagnifyingGlassIcon,
  PaintBrushIcon,
  MegaphoneIcon,
  WrenchScrewdriverIcon,
} from '@heroicons/react/24/outline';

const services = [
  {
    icon: ComputerDesktopIcon,
    title: 'Custom Website Design',
    description: 'Bespoke, high-converting websites tailored to your brand and business goals.',
    features: ['Responsive Design', 'Performance Optimized', 'SEO Ready'],
    href: '/services/web-design',
  },
  {
    icon: ShoppingBagIcon,
    title: 'E-commerce Development',
    description: 'Full-featured online stores with optimized checkout flows and payment integration.',
    features: ['Payment Gateway', 'Inventory Management', 'Analytics Dashboard'],
    href: '/services/ecommerce',
  },
  {
    icon: MagnifyingGlassIcon,
    title: 'SEO Optimization',
    description: 'Comprehensive search engine optimization for maximum visibility and traffic.',
    features: ['Technical SEO', 'Content Strategy', 'Schema Markup'],
    href: '/services/seo',
  },
  {
    icon: PaintBrushIcon,
    title: 'Brand Identity Design',
    description: 'Complete branding packages including logo, guidelines, and visual identity systems.',
    features: ['Logo Design', 'Brand Guidelines', 'Visual Identity'],
    href: '/services/branding',
  },
  {
    icon: MegaphoneIcon,
    title: 'Digital Marketing',
    description: 'Strategic campaigns including PPC, social media, and content marketing.',
    features: ['PPC Campaigns', 'Social Media', 'Content Marketing'],
    href: '/services/digital-marketing',
  },
  {
    icon: WrenchScrewdriverIcon,
    title: 'Website Maintenance',
    description: 'Ongoing support including security updates, backups, and performance monitoring.',
    features: ['Security Updates', 'Daily Backups', '24/7 Monitoring'],
    href: '/services/maintenance',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

export default function ServicesSection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold mb-4">
            Our Services
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4">
            Everything You Need to
            <span className="bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent"> Succeed Online</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            From concept to launch and beyond, we provide comprehensive digital solutions that drive results.
          </p>
        </motion.div>

        {/* Services Grid - Z-Pattern Layout */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-50px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.a
              key={service.title}
              href={service.href}
              variants={itemVariants}
              className={`group relative p-8 bg-white rounded-2xl border border-slate-200 hover:border-primary-300 shadow-sm hover:shadow-xl transition-all duration-300 ${
                index % 2 === 0 ? 'md:translate-y-0' : 'md:translate-y-8'
              }`}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-gradient-to-br from-primary-500 to-accent-500 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <service.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary-600 transition-colors">
                {service.title}
              </h3>
              <p className="text-slate-600 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2 mb-6">
                {service.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2 text-sm text-slate-500">
                    <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <div className="flex items-center text-primary-600 font-semibold group-hover:gap-3 gap-2 transition-all">
                Learn More
                <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </motion.a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
