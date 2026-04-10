'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const industries = [
  {
    name: 'E-commerce',
    description: 'High-converting online stores with optimized checkout flows and inventory management.',
    icon: '🛒',
    href: '/industries/ecommerce',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    name: 'Healthcare',
    description: 'Professional medical websites with appointment booking and patient portals.',
    icon: '🏥',
    href: '/industries/healthcare',
    color: 'from-green-500 to-emerald-500',
  },
  {
    name: 'Real Estate',
    description: 'Property listing platforms with advanced search and virtual tours.',
    icon: '🏠',
    href: '/industries/realestate',
    color: 'from-purple-500 to-pink-500',
  },
  {
    name: 'Restaurants',
    description: 'Appetizing restaurant websites with online ordering and reservation systems.',
    icon: '🍽️',
    href: '/industries/restaurants',
    color: 'from-orange-500 to-red-500',
  },
];

export default function IndustriesSection() {
  return (
    <section className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold mb-4">
            Industries We Serve
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4">
            Specialized Solutions for
            <span className="bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent"> Your Industry</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            We understand the unique challenges and opportunities of different industries and tailor our approach accordingly.
          </p>
        </motion.div>

        {/* Industries Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {industries.map((industry, index) => (
            <motion.div
              key={industry.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -8 }}
            >
              <Link
                href={industry.href}
                className="group block h-full bg-white rounded-2xl shadow-sm hover:shadow-xl border border-slate-200 hover:border-primary-300 transition-all overflow-hidden"
              >
                {/* Icon Header */}
                <div className={`h-32 bg-gradient-to-br ${industry.color} flex items-center justify-center`}>
                  <span className="text-6xl">{industry.icon}</span>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-primary-600 transition-colors">
                    {industry.name}
                  </h3>
                  <p className="text-slate-600 leading-relaxed mb-4">
                    {industry.description}
                  </p>
                  <div className="flex items-center text-primary-600 font-semibold gap-2 group-hover:gap-3 transition-all">
                    Learn More
                    <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
