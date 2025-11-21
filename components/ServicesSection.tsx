'use client';

import { motion } from 'framer-motion';
import {
  Globe,
  Smartphone,
  Palette,
  Rocket,
  ShoppingCart,
  BarChart,
} from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Développement Web',
    description:
      'Sites web modernes et performants avec les dernières technologies (Next.js, React, TypeScript)',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    icon: Smartphone,
    title: 'Applications Mobiles',
    description:
      'Applications iOS et Android natives ou cross-platform pour une expérience utilisateur optimale',
    color: 'from-purple-500 to-pink-500',
  },
  {
    icon: Palette,
    title: 'Design UI/UX',
    description:
      'Interfaces élégantes et intuitives conçues pour maximiser l\'engagement et la conversion',
    color: 'from-pink-500 to-rose-500',
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce',
    description:
      'Boutiques en ligne complètes avec gestion des paiements, stocks et livraisons',
    color: 'from-orange-500 to-amber-500',
  },
  {
    icon: Rocket,
    title: 'Stratégie Digitale',
    description:
      'Conseil et accompagnement pour définir votre présence en ligne et atteindre vos objectifs',
    color: 'from-green-500 to-emerald-500',
  },
  {
    icon: BarChart,
    title: 'SEO & Marketing',
    description:
      'Optimisation pour les moteurs de recherche et campagnes marketing pour booster votre visibilité',
    color: 'from-indigo-500 to-blue-500',
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-900 mb-4"
          >
            Nos{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Services
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600"
          >
            Des solutions digitales complètes pour faire grandir votre entreprise
          </motion.p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-gradient-to-br from-gray-50 to-white p-8 rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-xl transition-all group"
            >
              {/* Icon */}
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
              >
                <service.icon className="w-7 h-7 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>

              {/* Learn More Link */}
              <button className="mt-6 text-blue-600 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all">
                En savoir plus
                <span className="text-xl">→</span>
              </button>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-16"
        >
          <p className="text-gray-600 mb-6">
            Vous ne trouvez pas ce que vous cherchez ?
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all"
          >
            Contactez-nous pour un projet sur mesure
          </button>
        </motion.div>
      </div>
    </section>
  );
}
