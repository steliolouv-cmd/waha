'use client';

import { motion } from 'framer-motion';
import { Target, Handshake, Rocket, Briefcase, Check, ArrowRight } from 'lucide-react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const expertises = [
  'Sites Vitrine',
  'E-commerce',
  'SEO & Référencement',
  'Applications Mobiles',
  'Maintenance Web',
];

const values = [
  {
    icon: Target,
    title: 'Excellence',
    description: 'Nous nous engageons à livrer des sites web de qualité professionnelle, optimisés et performants.',
  },
  {
    icon: Handshake,
    title: 'Transparence',
    description: 'Prix clairs, délais respectés et communication constante tout au long du projet.',
  },
  {
    icon: Rocket,
    title: 'Innovation',
    description: 'Technologies modernes et meilleures pratiques du web pour des sites à la pointe.',
  },
  {
    icon: Briefcase,
    title: 'Accompagnement',
    description: 'Support continu et conseil personnalisé pour faire évoluer votre présence en ligne.',
  },
];

const methodology = [
  { step: 'Analyse des besoins', desc: 'Compréhension approfondie de votre activité et objectifs' },
  { step: 'Planification', desc: "Définition de l'architecture et des fonctionnalités" },
  { step: 'Design', desc: 'Création d\'une interface professionnelle et sur mesure' },
  { step: 'Développement', desc: 'Programmation selon les standards du web moderne' },
  { step: 'Optimisation SEO', desc: 'Référencement naturel pour une visibilité maximale' },
  { step: 'Tests & Validation', desc: 'Vérification complète sur tous supports' },
  { step: 'Lancement & Suivi', desc: 'Mise en ligne et accompagnement continu' },
];

const advantages = [
  'Sites 100% responsive et mobile-first',
  'Optimisation SEO incluse pour un meilleur référencement',
  'Conformité RGPD et normes françaises',
  "Formation à l'utilisation de votre site",
  'Hébergement sécurisé en France',
  'Support technique réactif',
  'Tarifs transparents sans frais cachés',
  'Paiement échelonné possible',
];

export default function AProposPage() {
  const scrollToContact = () => {
    window.location.href = '/#contact';
  };

  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-gradient-to-br from-[#e55a2b] via-[#ff6b35] to-[#ff8c5a] text-white py-20">
          <div className="container mx-auto px-6 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4"
            >
              À Propos de WahaWeb
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="text-xl md:text-2xl opacity-90"
            >
              Votre partenaire digital pour une présence en ligne professionnelle
            </motion.p>
          </div>
        </section>

        <div className="container mx-auto px-6 py-16">
          {/* Mission Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-lg p-8 mb-8"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6 pb-4 border-b-4 border-[#ff6b35]">
              Notre Mission
            </h2>
            <p className="text-gray-600 text-lg mb-4">
              WahaWeb accompagne les entreprises françaises dans leur transformation digitale en créant des sites web professionnels, optimisés pour le référencement et parfaitement adaptés aux besoins spécifiques de chaque secteur d'activité.
            </p>
            <p className="text-gray-600 text-lg">
              Notre objectif est de rendre le web accessible à toutes les entreprises, des TPE aux PME, en proposant des solutions sur mesure alliant qualité professionnelle et budget maîtrisé.
            </p>
          </motion.section>

          {/* Expertise Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-lg p-8 mb-8"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6 pb-4 border-b-4 border-[#ff6b35]">
              Notre Expertise
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-8">
              {expertises.map((expertise, index) => (
                <motion.div
                  key={expertise}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="bg-gradient-to-br from-[#fff5f2] to-[#ffe8e0] p-4 rounded-xl text-center font-semibold text-[#ff6b35]"
                >
                  {expertise}
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Values Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-lg p-8 mb-8"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6 pb-4 border-b-4 border-[#ff6b35]">
              Nos Valeurs
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="p-6 border-l-4 border-[#ff6b35] bg-gray-50 rounded-r-xl"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#e55a2b] to-[#ff6b35] flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-[#ff6b35] mb-2">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Methodology Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-lg p-8 mb-8"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6 pb-4 border-b-4 border-[#ff6b35]">
              Notre Approche
            </h2>
            <h3 className="text-2xl font-bold text-gray-800 mb-6">Méthodologie en 7 Phases</h3>
            <div className="space-y-4">
              {methodology.map((item, index) => (
                <motion.div
                  key={item.step}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-start gap-4 p-4 rounded-xl hover:bg-gray-50 transition-colors"
                >
                  <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#e55a2b] to-[#ff6b35] flex items-center justify-center text-white font-bold flex-shrink-0">
                    {index + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-800">{item.step}</h4>
                    <p className="text-gray-600">{item.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Why Choose Us Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-2xl shadow-lg p-8 mb-8"
          >
            <h2 className="text-3xl font-bold text-gray-800 mb-6 pb-4 border-b-4 border-[#ff6b35]">
              Pourquoi Choisir WahaWeb ?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {advantages.map((advantage, index) => (
                <motion.div
                  key={advantage}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="flex items-center gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                >
                  <Check className="w-6 h-6 text-[#10b981] flex-shrink-0" />
                  <span className="text-gray-700">{advantage}</span>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* CTA Section */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-gradient-to-r from-[#e55a2b] via-[#ff6b35] to-[#ff8c5a] rounded-2xl p-8 text-center text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Prêt à Lancer Votre Projet Web ?
            </h2>
            <p className="text-xl opacity-90 mb-6">
              Discutons de vos besoins et créons ensemble votre présence en ligne
            </p>
            <button
              onClick={scrollToContact}
              className="bg-white text-[#ff6b35] px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-50 transition-all hover:scale-105 inline-flex items-center gap-3"
            >
              Demander un Devis Gratuit
              <ArrowRight className="w-5 h-5" />
            </button>
          </motion.section>
        </div>
      </main>
      <Footer />
    </>
  );
}
