'use client';

import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';

export default function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="accueil"
      className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 pt-20"
    >
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col items-center text-center space-y-8">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full border border-purple-200 shadow-sm"
          >
            <Sparkles className="w-4 h-4 text-purple-600" />
            <span className="text-sm text-gray-700">
              Agence digitale de nouvelle génération
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-7xl font-bold text-gray-900 max-w-4xl"
          >
            Transformons vos{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
              idées
            </span>{' '}
            en réalité digitale
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-xl md:text-2xl text-gray-600 max-w-2xl"
          >
            Création de sites web, applications mobiles et solutions digitales
            sur mesure pour propulser votre business
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="flex flex-col sm:flex-row gap-4 pt-4"
          >
            <button
              onClick={() => scrollToSection('contact')}
              className="group bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all flex items-center gap-2 justify-center"
            >
              Démarrer votre projet
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="bg-white text-gray-700 px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all border border-gray-200"
            >
              Découvrir nos services
            </button>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="grid grid-cols-3 gap-8 pt-12 max-w-2xl w-full"
          >
            <div className="space-y-1">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                100+
              </div>
              <div className="text-sm text-gray-600">Projets réalisés</div>
            </div>
            <div className="space-y-1">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                50+
              </div>
              <div className="text-sm text-gray-600">Clients satisfaits</div>
            </div>
            <div className="space-y-1">
              <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                5★
              </div>
              <div className="text-sm text-gray-600">Note moyenne</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
