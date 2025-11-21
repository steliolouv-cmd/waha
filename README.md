# 🚀 WebAgency - Site Web d'Agence Digitale

Un site web moderne et élégant pour une agence web, développé avec les dernières technologies.

![Next.js](https://img.shields.io/badge/Next.js-14-black)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8)
![Framer Motion](https://img.shields.io/badge/Framer%20Motion-11-ff0055)

## ✨ Fonctionnalités

- 🎨 **Design moderne** : Interface élégante avec animations fluides
- 📱 **Responsive** : Parfaitement adapté à tous les écrans (mobile, tablette, desktop)
- ⚡ **Performance optimale** : Chargement rapide avec Next.js 14
- 🎭 **Animations** : Transitions et effets visuels avec Framer Motion
- 📧 **Formulaire de contact** : Validation complète avec React Hook Form et Zod
- ♿ **Accessibilité** : Conforme aux standards WCAG

## 🛠️ Stack Technique

### Frontend
- **Framework** : [Next.js 14](https://nextjs.org/) (App Router)
- **Language** : [TypeScript](https://www.typescriptlang.org/)
- **Styling** : [Tailwind CSS](https://tailwindcss.com/)
- **Animations** : [Framer Motion](https://www.framer.com/motion/)
- **Icons** : [Lucide React](https://lucide.dev/)
- **Formulaires** : [React Hook Form](https://react-hook-form.com/)
- **Validation** : [Zod](https://zod.dev/)

### Développement
- **Package Manager** : npm
- **Linting** : ESLint
- **Type Checking** : TypeScript

## 📂 Structure du Projet

```
waha/
├── app/                      # Next.js App Router
│   ├── layout.tsx           # Layout principal
│   ├── page.tsx             # Page d'accueil (one-page)
│   └── globals.css          # Styles globaux
├── components/              # Composants React
│   ├── Header.tsx           # En-tête avec navigation
│   ├── HeroSection.tsx      # Section d'accueil
│   ├── ServicesSection.tsx  # Section des services
│   ├── ContactSection.tsx   # Section contact avec formulaire
│   └── Footer.tsx           # Pied de page
├── public/                  # Assets statiques
├── package.json            # Dépendances
├── tsconfig.json          # Configuration TypeScript
└── README.md              # Documentation
```

## 🚀 Installation et Lancement

### Prérequis
- Node.js 18.x ou supérieur
- npm ou yarn

### Installation

1. Cloner le repository
```bash
git clone <url-du-repo>
cd waha
```

2. Installer les dépendances
```bash
npm install
```

3. Lancer le serveur de développement
```bash
npm run dev
```

4. Ouvrir le navigateur à [http://localhost:3000](http://localhost:3000)

## 📜 Scripts Disponibles

```bash
npm run dev          # Lance le serveur de développement
npm run build        # Construit l'application pour la production
npm run start        # Lance l'application en mode production
npm run lint         # Vérifie le code avec ESLint
```

## 🎨 Sections du Site

### 1. Header
- Logo de l'agence
- Navigation responsive avec menu burger sur mobile
- Bouton CTA "Démarrer un projet"
- Effet de scroll avec changement de background

### 2. Section Accueil (Hero)
- Titre accrocheur avec gradient
- Description des services
- Statistiques de l'agence (projets, clients, note)
- Boutons d'appel à l'action

### 3. Section Services
- Grille de 6 services avec icônes
  - Développement Web
  - Applications Mobiles
  - Design UI/UX
  - E-Commerce
  - Stratégie Digitale
  - SEO & Marketing
- Cards avec animations au hover
- CTA pour projets sur mesure

### 4. Section Contact
- Informations de contact (email, téléphone, adresse)
- Formulaire de contact avec validation
  - Nom complet (requis)
  - Email (requis, validé)
  - Téléphone (optionnel)
  - Sujet (requis)
  - Message (requis)
- Messages de succès/erreur
- Animation de soumission

### 5. Footer
- Branding de l'agence
- Liens vers les services
- Liens de navigation
- Mentions légales
- Réseaux sociaux
- Copyright

## 🎯 Personnalisation

### Couleurs
Les couleurs principales utilisent un dégradé bleu-violet-rose. Pour modifier :
- Éditer les classes Tailwind dans les composants
- Exemple : `from-blue-600 to-purple-600`

### Contenu
Pour personnaliser le contenu :
1. **Services** : Modifier le tableau `services` dans `components/ServicesSection.tsx`
2. **Contact** : Modifier `contactInfo` dans `components/ContactSection.tsx`
3. **Footer** : Modifier `footerLinks` dans `components/Footer.tsx`

### Images
Ajouter vos images dans le dossier `public/` et les référencer dans les composants.

## 🔧 Configuration

### Environnement
Créer un fichier `.env.local` pour les variables d'environnement :
```env
NEXT_PUBLIC_SITE_URL=https://votre-domaine.com
NEXT_PUBLIC_CONTACT_EMAIL=contact@votre-domaine.com
```

### Formulaire de Contact
Le formulaire est actuellement configuré en mode simulation. Pour l'activer :
1. Créer une API route dans `app/api/contact/route.ts`
2. Configurer un service d'envoi d'emails (Resend, SendGrid, etc.)
3. Mettre à jour la fonction `onSubmit` dans `ContactSection.tsx`

## 📱 Responsive Design

Le site est entièrement responsive avec les breakpoints Tailwind :
- **Mobile** : < 768px
- **Tablet** : 768px - 1024px
- **Desktop** : > 1024px

## ⚡ Performance

- **SSR** : Rendu côté serveur avec Next.js
- **Optimisation des images** : Utilisation du composant `Image` de Next.js
- **Code splitting** : Chargement automatique par Next.js
- **Animations optimisées** : GPU-accelerated avec Framer Motion

## 🚢 Déploiement

### Vercel (Recommandé)
```bash
npm run build
vercel --prod
```

### Autres plateformes
Le projet peut être déployé sur :
- Netlify
- Railway
- AWS Amplify
- Docker

## 📝 TODO / Améliorations Futures

- [ ] Ajouter une section Portfolio/Réalisations
- [ ] Implémenter un blog
- [ ] Ajouter des témoignages clients
- [ ] Intégrer Google Analytics
- [ ] Ajouter un mode sombre
- [ ] Multilingue (FR/EN)
- [ ] Optimisation SEO avancée
- [ ] Tests E2E avec Playwright

## 🤝 Contribution

Les contributions sont les bienvenues ! N'hésitez pas à :
1. Fork le projet
2. Créer une branche (`git checkout -b feature/AmazingFeature`)
3. Commit vos changements (`git commit -m 'Add some AmazingFeature'`)
4. Push sur la branche (`git push origin feature/AmazingFeature`)
5. Ouvrir une Pull Request

## 📄 Licence

Ce projet est sous licence MIT. Voir le fichier `LICENSE` pour plus de détails.

## 👥 Contact

Pour toute question ou suggestion :
- Email : contact@webagency.com
- Website : https://webagency.com

---

Développé avec ❤️ par WebAgency
