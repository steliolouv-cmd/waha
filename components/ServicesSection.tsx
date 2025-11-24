'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import {
  Globe,
  Smartphone,
  Palette,
  Rocket,
  ShoppingCart,
  BarChart,
  X,
} from 'lucide-react';

const services = [
  {
    icon: Globe,
    title: 'Développement Web',
    description:
      'Sites web modernes et performants avec les dernières technologies (Next.js, React, TypeScript)',
    color: 'from-[#B8941F] to-[#D4AF37]',
    image: 'https://images.unsplash.com/photo-1547658719-da2b51169166?w=400&h=250&q=80',
  },
  {
    icon: Smartphone,
    title: 'Applications Mobiles',
    description:
      'Applications iOS et Android natives ou cross-platform pour une expérience utilisateur optimale',
    color: 'from-[#D4AF37] to-[#FFD700]',
    image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&q=80',
  },
  {
    icon: Palette,
    title: 'Design UI/UX',
    description:
      'Interfaces élégantes et intuitives conçues pour maximiser l\'engagement et la conversion',
    color: 'from-[#FFD700] to-[#F4E4A6]',
    image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=400&h=250&q=80',
  },
  {
    icon: ShoppingCart,
    title: 'E-Commerce',
    description:
      'Boutiques en ligne complètes avec gestion des paiements, stocks et livraisons',
    color: 'from-[#B8941F] to-[#FFD700]',
    image: 'https://images.unsplash.com/photo-1557821552-17105176677c?w=400&h=250&q=80',
  },
  {
    icon: Rocket,
    title: 'Stratégie Digitale',
    description:
      'Conseil et accompagnement pour définir votre présence en ligne et atteindre vos objectifs',
    color: 'from-[#D4AF37] to-[#F4E4A6]',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=400&h=250&q=80',
  },
  {
    icon: BarChart,
    title: 'SEO & Marketing',
    description:
      'Optimisation pour les moteurs de recherche et campagnes marketing pour booster votre visibilité',
    color: 'from-[#FFD700] to-[#D4AF37]',
    image: 'https://images.unsplash.com/photo-1533750516457-a7f992034fec?w=400&h=250&q=80',
  },
];

export default function ServicesSection() {
  const [selectedService, setSelectedService] = useState<number | null>(null);

  return (
    <section id="services" className="py-20 bg-[#0f0f0f]">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-200 mb-4"
          >
            Nos{' '}
            <span className="bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#D4AF37] bg-clip-text text-transparent gold-text-glow">
              Services
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-400"
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
              onClick={() => setSelectedService(index)}
              className="bg-gradient-to-br from-[#1a1a1a] to-[#252525] rounded-2xl border border-[#3a3a3a] hover:border-[#D4AF37] hover:shadow-xl hover:shadow-[#D4AF37]/20 transition-all group overflow-hidden cursor-pointer"
            >
              {/* Image Thumbnail */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] via-[#1a1a1a]/50 to-transparent transition-opacity duration-300 group-hover:opacity-0" />
                {/* Icon */}
                <div className="absolute bottom-4 left-4 w-14 h-14">
                  {/* Background gris argent */}
                  <div className="absolute inset-0 rounded-xl bg-gradient-to-br from-[#b4baca] to-[#848994] opacity-30 group-hover:opacity-0 transition-all duration-300" />
                  {/* Background or au hover */}
                  <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${service.color} opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:gold-glow`} />
                  {/* Icon */}
                  <div className="relative w-full h-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-7 h-7 text-[#0f0f0f]" />
                  </div>
                </div>
              </div>
              
              {/* Content */}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-200 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {service.description}
                </p>

                {/* Learn More Link */}
                <button className="mt-6 text-[#D4AF37] font-semibold flex items-center gap-2 group-hover:gap-3 transition-all hover:text-[#FFD700]">
                  En savoir plus
                  <span className="text-xl">→</span>
                </button>
              </div>
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
          <p className="text-gray-400 mb-6">
            Vous ne trouvez pas ce que vous cherchez ?
          </p>
          <button
            onClick={() => {
              const element = document.getElementById('contact');
              element?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-gradient-to-r from-[#B8941F] via-[#D4AF37] to-[#FFD700] text-[#0f0f0f] px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:shadow-[#D4AF37]/50 transition-all gold-glow hover:scale-105"
          >
            Contactez-nous pour un projet sur mesure
          </button>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {selectedService !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedService(null)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-gradient-to-br from-[#1a1a1a] to-[#252525] rounded-2xl border border-[#D4AF37] max-w-2xl w-full max-h-[90vh] overflow-y-auto"
            >
              {/* Header with close button */}
              <div className="relative">
                <img
                  src={services[selectedService].image}
                  alt={services[selectedService].title}
                  className="w-full h-64 object-cover rounded-t-2xl"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a1a1a] to-transparent" />
                <button
                  onClick={() => setSelectedService(null)}
                  className="absolute top-4 right-4 w-10 h-10 bg-[#1a1a1a]/80 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-[#D4AF37] transition-colors"
                >
                  <X className="w-6 h-6 text-gray-300" />
                </button>
                {/* Icon */}
                <div className={`absolute bottom-4 left-6 w-16 h-16 rounded-xl bg-gradient-to-br ${services[selectedService].color} flex items-center justify-center gold-glow`}>
                  {(() => {
                    const Icon = services[selectedService].icon;
                    return <Icon className="w-8 h-8 text-[#0f0f0f]" />;
                  })()}
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                <h2 className="text-3xl font-bold text-gray-200 mb-4">
                  {services[selectedService].title}
                </h2>
                <p className="text-xl text-gray-400 mb-6">
                  {services[selectedService].description}
                </p>
                
                {/* Additional details */}
                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-[#D4AF37]">Ce que nous offrons :</h3>
                  <ul className="space-y-3 text-gray-300">
                    <li className="flex items-start gap-3">
                      <span className="text-[#D4AF37] mt-1">✓</span>
                      <span>Solutions sur mesure adaptées à vos besoins spécifiques</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#D4AF37] mt-1">✓</span>
                      <span>Technologies modernes et performantes</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#D4AF37] mt-1">✓</span>
                      <span>Support et maintenance continus</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <span className="text-[#D4AF37] mt-1">✓</span>
                      <span>Livraison dans les délais convenus</span>
                    </li>
                  </ul>
                </div>

                {/* CTA Button */}
                <button
                  onClick={() => {
                    setSelectedService(null);
                    const element = document.getElementById('contact');
                    element?.scrollIntoView({ behavior: 'smooth' });
                  }}
                  className="w-full mt-8 bg-gradient-to-r from-[#B8941F] via-[#D4AF37] to-[#FFD700] text-[#0f0f0f] px-8 py-4 rounded-full font-semibold hover:shadow-xl hover:shadow-[#D4AF37]/50 transition-all gold-glow hover:scale-105"
                >
                  Demander un devis
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
