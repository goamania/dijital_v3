'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const faqs = [
  {
    question: 'How much does a professional website cost?',
    answer: 'Our custom website design packages start from 15,000 TRY and vary based on complexity, features, and requirements. E-commerce solutions start from 25,000 TRY. We provide detailed quotes after an initial consultation where we understand your specific needs and goals.',
  },
  {
    question: 'How long does it take to build a website?',
    answer: 'Typical project timelines range from 4-8 weeks for standard business websites and 8-12 weeks for complex e-commerce platforms. We prioritize quality and thorough testing at each stage. Rush projects can be accommodated with a premium fee.',
  },
  {
    question: 'Do you provide SEO optimization?',
    answer: 'Yes, all our websites come with foundational SEO optimization including technical SEO, on-page optimization, schema markup, and performance optimization. We also offer advanced SEO packages for ongoing optimization, content strategy, and link building.',
  },
  {
    question: 'Do you offer ongoing maintenance and support?',
    answer: 'Absolutely! We offer monthly maintenance packages that include security updates, backups, performance monitoring, content updates, and priority support to keep your website running smoothly. Plans start from 2,000 TRY/month.',
  },
  {
    question: 'Can I update the website myself after it\'s launched?',
    answer: 'Yes! We build all our websites with user-friendly content management systems (CMS). We provide comprehensive training and documentation so your team can easily update content, add blog posts, and manage products. Of course, we\'re always here for more complex changes.',
  },
  {
    question: 'What technologies do you use?',
    answer: 'We use modern, performant technologies including Next.js, React, Tailwind CSS, and headless CMS platforms like Sanity and Contentful. For e-commerce, we work with Shopify, WooCommerce, and custom solutions depending on your needs.',
  },
  {
    question: 'Do you work with clients outside of Turkey?',
    answer: 'Yes! While we\'re based in Istanbul, we work with clients globally. Our streamlined remote process ensures smooth communication and project delivery regardless of your location. We\'ve successfully delivered projects for clients in Europe, Middle East, and North America.',
  },
  {
    question: 'What is your design process?',
    answer: 'Our process includes: 1) Discovery & Strategy - understanding your goals and audience, 2) Wireframing - planning the user journey, 3) Design - creating visual mockups and prototypes, 4) Development - building with clean, performant code, 5) Testing - rigorous QA across devices, 6) Launch & Optimization - going live and continuous improvement.',
  },
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-primary-100 text-primary-700 text-sm font-semibold mb-4">
            FAQ
          </span>
          <h2 className="text-4xl md:text-5xl font-display font-bold text-slate-900 mb-4">
            Frequently Asked
            <span className="bg-gradient-to-r from-primary-500 to-accent-500 bg-clip-text text-transparent"> Questions</span>
          </h2>
          <p className="text-xl text-slate-600">
            Everything you need to know about working with us.
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="border border-slate-200 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
                aria-expanded={openIndex === index}
              >
                <span className="text-lg font-semibold text-slate-900 pr-4">
                  {faq.question}
                </span>
                <svg
                  className={`w-6 h-6 text-primary-500 flex-shrink-0 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div className="px-6 pb-6 text-slate-600 leading-relaxed">
                      {faq.answer}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
