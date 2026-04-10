'use client';

import { motion } from 'framer-motion';

const stats = [
  { value: '150+', label: 'Projects Delivered', icon: '🚀' },
  { value: '98%', label: 'Client Satisfaction', icon: '⭐' },
  { value: '12+', label: 'Industry Awards', icon: '🏆' },
  { value: '6+', label: 'Years Experience', icon: '💼' },
];

const features = [
  {
    title: 'Performance First',
    description: 'Every website we build scores 95+ on Google PageSpeed Insights. Fast sites convert better and rank higher.',
    metric: '95+',
    metricLabel: 'PageSpeed Score',
  },
  {
    title: 'Conversion Optimized',
    description: 'Data-driven design decisions based on user behavior analytics and A/B testing for maximum ROI.',
    metric: '3x',
    metricLabel: 'Average ROI Increase',
  },
  {
    title: 'AI-Ready Architecture',
    description: 'Structured data, schema markup, and semantic HTML for maximum AI visibility and AEO optimization.',
    metric: '100%',
    metricLabel: 'Schema Compliance',
  },
  {
    title: 'Ongoing Support',
    description: 'Dedicated account manager, 24/7 monitoring, and priority support to keep your site running smoothly.',
    metric: '24/7',
    metricLabel: 'Support Available',
  },
];

export default function WhyChooseUs() {
  return (
    <section className="py-24 bg-gradient-to-br from-slate-900 via-primary-900 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, type: 'spring' }}
              className="text-center"
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className="text-4xl md:text-5xl font-bold mb-2">{stat.value}</div>
              <div className="text-gray-400 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-white/10 border border-white/20 text-sm font-semibold mb-4">
            Why Choose Us
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold mb-4">
            What Makes Us
            <span className="bg-gradient-to-r from-primary-400 to-accent-400 bg-clip-text text-transparent"> Different</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We combine technical excellence with strategic thinking to deliver websites that don't just look great—they perform.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors"
            >
              <div className="flex items-start justify-between mb-6">
                <h3 className="text-2xl font-bold">{feature.title}</h3>
                <div className="text-right">
                  <div className="text-3xl font-bold text-primary-400">{feature.metric}</div>
                  <div className="text-sm text-gray-400">{feature.metricLabel}</div>
                </div>
              </div>
              <p className="text-gray-300 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
