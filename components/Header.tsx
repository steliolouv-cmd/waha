'use client';

import { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();
  const isHomePage = pathname === '/';

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigateToSection = (id: string) => {
    if (isHomePage) {
      // On est sur la page d'accueil, scroll vers la section
      const element = document.getElementById(id);
      element?.scrollIntoView({ behavior: 'smooth' });
    } else {
      // On est sur une autre page, navigation vers la home avec ancre
      window.location.href = `/#${id}`;
    }
    setIsMenuOpen(false);
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-lg shadow-gray-200' : 'bg-transparent'
      }`}
    >
      <nav className="container mx-auto px-6 py-4 relative">
        <div className="flex items-center justify-center">
          {/* Logo - Left */}
          <motion.button
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            onClick={() => navigateToSection('accueil')}
            className="absolute left-6 flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <Image
              src="/logo.svg"
              alt="Wahaweb Logo"
              width={40}
              height={40}
              className="w-10 h-10"
            />
            <span className="text-2xl font-bold bg-gradient-to-r from-[#e55a2b] via-[#ff6b35] to-[#ff8c5a] bg-clip-text text-transparent orange-text-glow">
              Wahaweb
            </span>
          </motion.button>

          {/* Desktop Navigation - Center */}
          <div className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => navigateToSection('accueil')}
              className="text-gray-700 hover:text-[#ff6b35] transition-all hover:orange-text-glow font-bold"
            >
              Accueil
            </button>
            <button
              onClick={() => navigateToSection('services')}
              className="text-gray-700 hover:text-[#ff6b35] transition-all hover:orange-text-glow font-bold"
            >
              Services
            </button>
            <button
              onClick={() => navigateToSection('contact')}
              className="text-gray-700 hover:text-[#ff6b35] transition-all hover:orange-text-glow font-bold"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden absolute right-6 text-gray-700 hover:text-[#ff6b35] transition-colors"
          >
            {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden mt-4 pb-4 space-y-4 bg-white/95 backdrop-blur-sm p-4 shadow-lg border border-gray-200"
          >
            <button
              onClick={() => navigateToSection('accueil')}
              className="block w-full text-left text-gray-700 hover:text-[#ff6b35] transition-colors py-2"
            >
              Accueil
            </button>
            <button
              onClick={() => navigateToSection('services')}
              className="block w-full text-left text-gray-700 hover:text-[#ff6b35] transition-colors py-2"
            >
              Services
            </button>
            <button
              onClick={() => navigateToSection('contact')}
              className="block w-full text-left text-gray-700 hover:text-[#ff6b35] transition-colors py-2"
            >
              Contact
            </button>
            <button
              onClick={() => navigateToSection('contact')}
              className="w-full bg-gradient-to-r from-[#e55a2b] via-[#ff6b35] to-[#ff8c5a] text-white px-6 py-3 font-semibold hover:shadow-lg hover:shadow-[#ff6b35]/50 transition-all orange-glow"
            >
              Démarrer un projet
            </button>
          </motion.div>
        )}
      </nav>
    </motion.header>
  );
}
