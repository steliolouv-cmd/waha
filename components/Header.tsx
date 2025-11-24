'use client';

import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    element?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-[#1a1a1a]/95 backdrop-blur-sm shadow-lg shadow-[#D4AF37]/10' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4 relative">
        <div className="flex items-center justify-center">
          {/* Logo - Left */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="absolute left-6 text-2xl font-bold bg-gradient-to-r from-[#D4AF37] via-[#FFD700] to-[#D4AF37] bg-clip-text text-transparent gold-text-glow"
          >
            Wahaweb
          </motion.div>

          {/* Desktop Navigation - Center */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection('accueil')}
              className="text-gray-300 hover:text-[#D4AF37] transition-all hover:gold-text-glow font-bold"
            >
              Accueil
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="text-gray-300 hover:text-[#D4AF37] transition-all hover:gold-text-glow font-bold"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="text-gray-300 hover:text-[#D4AF37] transition-all hover:gold-text-glow font-bold"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden absolute right-6 text-gray-300 hover:text-[#D4AF37] transition-colors"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 pb-4 space-y-4 bg-[#1a1a1a]/90 backdrop-blur-sm rounded-lg p-4"
          >
            <button
              onClick={() => scrollToSection('accueil')}
              className="block w-full text-left text-gray-300 hover:text-[#D4AF37] transition-colors py-2"
            >
              Accueil
            </button>
            <button
              onClick={() => scrollToSection('services')}
              className="block w-full text-left text-gray-300 hover:text-[#D4AF37] transition-colors py-2"
            >
              Services
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="block w-full text-left text-gray-300 hover:text-[#D4AF37] transition-colors py-2"
            >
              Contact
            </button>
            <button
              onClick={() => scrollToSection('contact')}
              className="w-full bg-gradient-to-r from-[#B8941F] via-[#D4AF37] to-[#FFD700] text-[#0f0f0f] px-6 py-3 rounded-full font-semibold hover:shadow-lg hover:shadow-[#D4AF37]/50 transition-all"
            >
              Démarrer un projet
            </button>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
}
