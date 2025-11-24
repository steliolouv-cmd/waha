'use client';

import { motion, AnimatePresence } from 'framer-motion';
import { Mail, MapPin, Send, Phone, Clock, X, MessageSquare } from 'lucide-react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useState } from 'react';

const contactSchema = z.object({
  name: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  email: z.string().email('Email invalide'),
  phone: z.string().optional(),
  subject: z.string().min(3, 'Le sujet doit contenir au moins 3 caractères'),
  message: z.string().min(10, 'Le message doit contenir au moins 10 caractères'),
});

type ContactFormData = z.infer<typeof contactSchema>;

const contactInfo = [
  {
    icon: Mail,
    title: 'Email',
    value: 'contact@wahaweb.yt',
    link: 'mailto:contact@wahaweb.yt',
  },
  {
    icon: Phone,
    title: 'Téléphone',
    value: '+262 639 01 31 00',
    link: 'tel:+262639013100',
  },
  {
    icon: MapPin,
    title: 'Adresse',
    value: 'Mayotte - Paris',
    link: null,
  },
  {
    icon: Clock,
    title: 'Horaires',
    value: 'Lun - Ven : 9h - 18h',
    link: null,
  },
];

export default function ContactSection() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'success' | 'error' | null>(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Simulate API call
    try {
      await new Promise((resolve) => setTimeout(resolve, 2000));
      console.log('Form data:', data);
      setSubmitStatus('success');
      reset();
      setTimeout(() => {
        setIsModalOpen(false);
        setSubmitStatus(null);
      }, 2000);
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-[#f8f9fa] via-white to-[#e9ecef]">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-5xl font-bold text-gray-800 mb-4"
          >
            Contactez{' '}
            <span className="bg-gradient-to-r from-[#e55a2b] via-[#ff6b35] to-[#ff8c5a] bg-clip-text text-transparent orange-text-glow">
              nous
            </span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-xl text-gray-600"
          >
            Discutons de votre projet et donnons vie à vos idées
          </motion.p>
        </div>

        {/* Contact Info Grid */}
        <div className="max-w-4xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 border border-gray-200 shadow-xl"
          >
            <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
              Nos coordonnées
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={info.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="flex items-center gap-4 group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#e55a2b] to-[#ff6b35] flex items-center justify-center group-hover:scale-110 transition-transform orange-glow">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-500">{info.title}</p>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="text-gray-800 font-semibold hover:text-[#ff6b35] transition-colors"
                      >
                        {info.value}
                      </a>
                    ) : (
                      <p className="text-gray-800 font-semibold">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* CTA Section - Nous Contacter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative max-w-5xl mx-auto"
        >
          <div className="relative bg-gradient-to-r from-white via-[#fff5f2] to-white p-12 border-2 border-[#ff6b35] shadow-2xl shadow-[#ff6b35]/20 overflow-hidden">
            {/* Decorative elements */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#ff6b35]/10 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#ff8c5a]/10 rounded-full blur-3xl" />
            
            <div className="relative text-center space-y-6">
              <h3 className="text-3xl md:text-4xl font-bold text-gray-800">
                Prêt à démarrer votre projet ?
              </h3>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Contactez-nous dès maintenant pour discuter de vos besoins et obtenir un devis personnalisé
              </p>
              
              <button
                onClick={() => setIsModalOpen(true)}
                className="bg-gradient-to-r from-[#e55a2b] via-[#ff6b35] to-[#ff8c5a] text-white px-16 py-6 font-bold text-2xl hover:shadow-2xl hover:shadow-[#ff6b35]/60 transition-all flex items-center gap-4 mx-auto orange-glow hover:scale-110 group"
              >
                <MessageSquare className="w-10 h-10 group-hover:rotate-12 transition-transform" />
                Nous contacter
              </button>
              
              <p className="text-sm text-gray-500 pt-4">
                Réponse sous 24h • Devis gratuit • Sans engagement
              </p>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Modal */}
      <AnimatePresence>
        {isModalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsModalOpen(false)}
            className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: 'spring', duration: 0.5 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white border-2 border-[#ff6b35] max-w-2xl w-full max-h-[90vh] overflow-y-auto shadow-2xl"
            >
              {/* Header */}
              <div className="sticky top-0 bg-gradient-to-r from-[#fff5f2] to-white border-b border-gray-200 p-6 flex items-center justify-between">
                <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-3">
                  <MessageSquare className="w-7 h-7 text-[#ff6b35]" />
                  Contactez-nous
                </h3>
                <button
                  onClick={() => setIsModalOpen(false)}
                  className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center hover:bg-[#ff6b35] hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              {/* Form */}
              <div className="p-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Nom complet *
                </label>
                <input
                  {...register('name')}
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 text-gray-800 focus:ring-2 focus:ring-[#ff6b35] focus:border-[#ff6b35] outline-none transition-all placeholder:text-gray-400"
                  placeholder="Jean Dupont"
                />
                {errors.name && (
                  <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
                )}
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email *
                </label>
                <input
                  {...register('email')}
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 text-gray-800 focus:ring-2 focus:ring-[#ff6b35] focus:border-[#ff6b35] outline-none transition-all placeholder:text-gray-400"
                  placeholder="jean@exemple.com"
                />
                {errors.email && (
                  <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                )}
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  Téléphone
                </label>
                <input
                  {...register('phone')}
                  type="tel"
                  id="phone"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 text-gray-800 focus:ring-2 focus:ring-[#ff6b35] focus:border-[#ff6b35] outline-none transition-all placeholder:text-gray-400"
                  placeholder="+33 1 23 45 67 89"
                />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                  Sujet *
                </label>
                <input
                  {...register('subject')}
                  type="text"
                  id="subject"
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 text-gray-800 focus:ring-2 focus:ring-[#ff6b35] focus:border-[#ff6b35] outline-none transition-all placeholder:text-gray-400"
                  placeholder="Développement d'un site web"
                />
                {errors.subject && (
                  <p className="mt-1 text-sm text-red-600">{errors.subject.message}</p>
                )}
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  {...register('message')}
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-gray-50 border border-gray-300 text-gray-800 rounded-lg focus:ring-2 focus:ring-[#ff6b35] focus:border-[#ff6b35] outline-none transition-all resize-none placeholder:text-gray-400"
                  placeholder="Décrivez votre projet..."
                />
                {errors.message && (
                  <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-[#e55a2b] via-[#ff6b35] to-[#ff8c5a] text-white px-8 py-4 font-semibold hover:shadow-xl hover:shadow-[#ff6b35]/50 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed orange-glow"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                    Envoi en cours...
                  </>
                ) : (
                  <>
                    Envoyer le message
                    <Send className="w-5 h-5" />
                  </>
                )}
              </button>

              {/* Status Messages */}
              {submitStatus === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-green-50 border border-green-200 text-green-700"
                >
                  Merci ! Votre message a été envoyé avec succès.
                </motion.div>
              )}
              {submitStatus === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-4 bg-red-50 border border-red-200 text-red-700"
                >
                  Une erreur s&apos;est produite. Veuillez réessayer.
                </motion.div>
              )}
            </form>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
