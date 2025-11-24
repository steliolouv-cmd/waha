'use client';

import { Github, Twitter, Linkedin, Instagram, Heart } from 'lucide-react';

const socialLinks = [
  { icon: Github, href: 'https://github.com', label: 'GitHub' },
  { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' },
  { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
];

const footerLinks = {
  services: [
    { name: 'Développement Web', href: '#services' },
    { name: 'Applications Mobiles', href: '#services' },
    { name: 'Design UI/UX', href: '#services' },
    { name: 'E-Commerce', href: '#services' },
  ],
  company: [
    { name: 'À propos', href: '#accueil' },
    { name: 'Services', href: '#services' },
    { name: 'Contact', href: '#contact' },
    { name: 'Portfolio', href: '#' },
  ],
  legal: [
    { name: 'Mentions légales', href: '#' },
    { name: 'Politique de confidentialité', href: '#' },
    { name: 'CGV', href: '#' },
    { name: 'Cookies', href: '#' },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-gray-600 border-t border-gray-200">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-8">
          {/* Brand */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold bg-gradient-to-r from-[#e55a2b] via-[#ff6b35] to-[#ff8c5a] bg-clip-text text-transparent mb-4 orange-text-glow">
              Wahaweb
            </h3>
            <p className="text-gray-600 mb-6 max-w-md">
              Votre partenaire digital pour transformer vos idées en solutions
              innovantes. Créativité, expertise technique et passion au service
              de votre réussite.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 rounded-lg bg-gray-100 border border-gray-200 flex items-center justify-center hover:bg-gradient-to-r hover:from-[#e55a2b] hover:to-[#ff6b35] hover:border-transparent transition-all group orange-glow"
                >
                  <social.icon className="w-5 h-5 text-gray-600 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-[#ff6b35] font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-[#ff6b35] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-[#ff6b35] font-semibold mb-4">Entreprise</h4>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-[#ff6b35] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-[#ff6b35] font-semibold mb-4">Légal</h4>
            <ul className="space-y-2">
              {footerLinks.legal.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-600 hover:text-[#ff6b35] transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-500 text-sm">
            © {currentYear} Wahaweb. Tous droits réservés.
          </p>
          <p className="text-gray-500 text-sm flex items-center gap-2">
            Fait avec <Heart className="w-4 h-4 text-red-500 fill-red-500" /> par
            Wahaweb
          </p>
        </div>
      </div>
    </footer>
  );
}
