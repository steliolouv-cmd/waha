'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronLeft, ChevronRight, Search, Globe, TrendingUp, Target, Zap } from 'lucide-react';
import { useState, useEffect } from 'react';

const slides = [
  {
    id: 1,
    icon: Search,
    accroche: 'Invisible sur les moteurs de recherche ?',
    highlight: 'Changeons Cela Ensemble',
    sousTexte: 'Un bon référencement, c\'est un flux constant de clients qualifiés qui vous trouvent naturellement. Nous mettons en place une stratégie SEO complète pour booster votre visibilité et générer des contacts.',
    gradient: 'from-[#B8941F] via-[#D4AF37] to-[#FFD700]',
    bgGradient: 'from-[#0a0a0a] via-[#1a1a1a] to-[#252525]',
    bgImage: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920&q=80', // Analytics/SEO dashboard
  },
  {
    id: 2,
    icon: Globe,
    accroche: 'Des Sites Web',
    highlight: 'qui Font la Différence',
    sousTexte: 'De la conception à la maintenance, nous créons des sites web professionnels qui reflètent l\'excellence de votre entreprise et transforment vos visiteurs en clients fidèles.',
    gradient: 'from-[#D4AF37] via-[#FFD700] to-[#F4E4A6]',
    bgGradient: 'from-[#0f0f0f] via-[#1a1a1a] to-[#2a2a2a]',
    bgImage: 'https://images.unsplash.com/photo-1559827260-dc66d52bef19?w=1920&q=80', // Tropical beach workspace
  },
  {
    id: 3,
    icon: TrendingUp,
    accroche: 'Votre Site Ne Génère',
    highlight: 'Pas de Clients ?',
    sousTexte: 'Un site internet qui ne convertit pas est un investissement perdu. Nous analysons, optimisons et transformons votre présence web en machine à générer des opportunités commerciales.',
    gradient: 'from-[#B8941F] via-[#D4AF37] to-[#FFD700]',
    bgGradient: 'from-[#1a1a1a] via-[#252525] to-[#1a1a1a]',
    bgImage: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=1920&q=80', // Business growth charts
  },
  {
    id: 4,
    icon: Target,
    accroche: 'Vos Concurrents Investissent',
    highlight: 'dans le Digital. Et Vous ?',
    sousTexte: 'Dans un marché de plus en plus digital, votre site web est votre meilleur commercial. Nous créons des expériences en ligne qui vous démarquent de la concurrence et captivent vos clients.',
    gradient: 'from-[#FFD700] via-[#D4AF37] to-[#B8941F]',
    bgGradient: 'from-[#252525] via-[#1a1a1a] to-[#0f0f0f]',
    bgImage: 'https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=1920&q=80', // Laptop coding tropical setting
  },
  {
    id: 5,
    icon: Zap,
    accroche: 'Votre Succès Digital',
    highlight: 'Commence Ici',
    sousTexte: 'Sites web professionnels | SEO optimisé | Résultats mesurables',
    gradient: 'from-[#D4AF37] to-[#FFD700]',
    bgGradient: 'from-[#0a0a0a] via-[#252525] to-[#1a1a1a]',
    bgImage: 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=1920&q=80', // Web development coding
  },
];

export default function HeroSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000);
    return () => clearInterval(timer);
  }, [currentSlide]);

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 400 : -400,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -400 : 400,
      opacity: 0,
    }),
  };

  const currentSlideData = slides[currentSlide];
  const Icon = currentSlideData.icon;

  return (
    <section
      id="accueil"
      className="min-h-screen flex items-center justify-center pt-20 relative overflow-hidden bg-[#e5e5e5]"
    >
      {/* Background Image with Fade Transition */}
      <AnimatePresence>
        <motion.div
          key={`bg-${currentSlide}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2, ease: 'easeInOut' }}
          className="absolute inset-0 z-0"
          style={{
            backgroundImage: `linear-gradient(to bottom right, rgba(10, 10, 10, 0.5), rgba(26, 26, 26, 0.5), rgba(37, 37, 37, 0.5)), url('${currentSlideData.bgImage}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
      </AnimatePresence>
      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 md:left-8 top-1/2 -translate-y-1/2 z-20 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:shadow-[#ff6b35]/30 hover:bg-gray-50 transition-all group border border-gray-200"
        aria-label="Slide précédent"
      >
        <ChevronLeft className="w-6 h-6 text-gray-700 group-hover:text-[#ff6b35] transition-colors" />
      </button>
      
      <button
        onClick={nextSlide}
        className="absolute right-4 md:right-8 top-1/2 -translate-y-1/2 z-20 bg-white/80 backdrop-blur-sm p-3 rounded-full shadow-lg hover:shadow-[#ff6b35]/30 hover:bg-gray-50 transition-all group border border-gray-200"
        aria-label="Slide suivant"
      >
        <ChevronRight className="w-6 h-6 text-gray-700 group-hover:text-[#ff6b35] transition-colors" />
      </button>

      <div className="container mx-auto px-6 py-20 relative z-10">
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentSlide}
            custom={direction}
            variants={slideVariants}
            initial="enter"
            animate="center"
            exit="exit"
            transition={{
              x: { type: 'spring', stiffness: 80, damping: 30 },
              opacity: { duration: 2, ease: 'easeInOut' },
            }}
            className="flex flex-col items-center text-center space-y-8"
          >
            {/* Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-800 max-w-5xl"
            >
              {currentSlideData.accroche}{' '}
              <span className="bg-gradient-to-r from-[#e55a2b] via-[#ff6b35] to-[#ff8c5a] bg-clip-text text-transparent orange-text-glow">
                {currentSlideData.highlight}
              </span>
            </motion.h1>

            {/* Subtitle */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="text-lg md:text-xl lg:text-2xl text-gray-600 max-w-3xl leading-relaxed"
            >
              {currentSlideData.sousTexte}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.7 }}
              className="flex flex-col sm:flex-row gap-4 pt-4"
            >
              <button
                onClick={() => scrollToSection('contact')}
                className="group bg-gradient-to-r from-[#e55a2b] via-[#ff6b35] to-[#ff8c5a] text-white px-8 py-4 font-semibold hover:shadow-2xl hover:shadow-[#ff6b35]/50 transition-all flex items-center gap-2 justify-center orange-glow hover:scale-105"
              >
                Démarrer votre projet
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button
                onClick={() => scrollToSection('services')}
                className="bg-white text-gray-700 px-8 py-4 font-semibold hover:shadow-lg hover:shadow-[#ff6b35]/30 transition-all border border-gray-300 hover:border-[#ff6b35] hover:text-[#ff6b35]"
              >
                Découvrir nos services
              </button>
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Slide Indicators */}
        <motion.div
          key={`indicators-${currentSlide}`}
          initial={{ opacity: 1 }}
          animate={{ opacity: [1, 0, 0, 1] }}
          transition={{ 
            duration: 1.2, 
            times: [0, 0.3, 0.6, 1],
            ease: 'easeInOut'
          }}
          className="flex justify-center gap-3 mt-12"
        >
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`transition-all ${
                index === currentSlide
                  ? `w-12 h-3 bg-gradient-to-r ${currentSlideData.gradient} rounded-full gold-glow`
                  : 'w-3 h-3 bg-[#3a3a3a] rounded-full hover:bg-[#D4AF37]/50'
              }`}
              aria-label={`Aller au slide ${index + 1}`}
            />
          ))}
        </motion.div>
      </div>
    </section>
  );
}
