# Refonte du Thème - Clair et Aéré

## 🎨 Nouveau Thème

### Couleurs Principales
- **Background**: `#f8f9fa` (gris très pâle)
- **Background Secondary**: `#ffffff` (blanc pur)
- **Foreground**: `#2c3e50` (gris foncé pour le texte)
- **Accent Principal**: `#5a67d8` (bleu indigo subtil)
- **Accent Secondaire**: `#ff6b35` (orange pétant) 🔥

### Palette Gris Pâle
```
gray-50:  #f8f9fa
gray-100: #e9ecef
gray-200: #dee2e6
gray-300: #ced4da
gray-400: #adb5bd
gray-500: #6c757d
gray-600: #495057
gray-700: #343a40
gray-800: #212529
```

### Palette Orange Secondaire 🔥
```
orange-primary: #ff6b35
orange-light:   #ff8c5a
orange-dark:    #e55a2b
orange-subtle:  #fff5f2
```

**Utilisation recommandée:**
- Boutons CTA principaux
- Éléments d'attention et d'urgence
- Badges et notifications
- Accents visuels pour se démarquer

## 📋 Changements à Apporter

### Remplacement des Classes
| Ancien (Thème Sombre) | Nouveau (Thème Clair) | Alternative Orange 🔥 |
|-----------------------|-----------------------|----------------------|
| `gold-glow` | `accent-glow` | `orange-glow` |
| `gold-text-glow` | `accent-text-glow` | `orange-text-glow` |
| `gold-shine` | `accent-shine` | `orange-shine` |
| `from-[#B8941F]` | `from-[#4c51bf]` | `from-[#e55a2b]` |
| `via-[#D4AF37]` | `via-[#5a67d8]` | `via-[#ff6b35]` |
| `to-[#FFD700]` | `to-[#7c8aed]` | `to-[#ff8c5a]` |
| `bg-[#0f0f0f]` | `bg-[#f8f9fa]` |
| `bg-[#1a1a1a]` | `bg-white` |
| `bg-[#252525]` | `bg-[#e9ecef]` |
| `text-gray-200` | `text-gray-700` |
| `text-gray-400` | `text-gray-600` |
| `border-[#3a3a3a]` | `border-gray-200` |

### Composants à Mettre à Jour

#### 1. **Header.tsx**
- Background: passer au blanc ou gris pâle
- Texte: utiliser gris foncé au lieu de gris clair
- Accents dorés → accents bleus
- Ombres: plus subtiles

#### 2. **HeroSection.tsx**
- Background section: `bg-[#e5e5e5]` → `bg-[#f8f9fa]`
- Overlay des images: ajuster pour thème clair
- Textes: inverser les contrastes
- Boutons: couleurs accent au lieu d'or

#### 3. **ServicesSection.tsx**
- Cards: fond blanc avec bordures grises
- Icônes: accent bleu au lieu d'or
- Hover effects: ombres plus douces
- Modales: adapté au thème clair

#### 4. **ContactSection.tsx**
- Background: gradient gris pâle
- Bouton CTA: accent bleu
- Formulaire: fond blanc, bordures grises
- Inputs: fond gris très pâle

#### 5. **Footer.tsx**
- Background: gris pâle ou blanc
- Texte: gris foncé
- Liens: accent bleu au hover
- Bordures: gris clairs

## 🎯 Principes du Nouveau Design

1. **Aération**: Plus d'espaces blancs, padding généreux
2. **Contraste Doux**: Éviter les contrastes trop forts
3. **Ombres Subtiles**: Box-shadows légères et douces
4. **Typographie**: Texte foncé sur fond clair, facile à lire
5. **Accent Bleu**: Utilisé avec parcimonie pour les CTA et highlights

## 🔧 Actions Immédiates

1. ✅ Mise à jour `globals.css` avec nouvelles variables
2. ⏳ Adapter `Header.tsx`
3. ⏳ Adapter `HeroSection.tsx`
4. ⏳ Adapter `ServicesSection.tsx`
5. ⏳ Adapter `ContactSection.tsx`
6. ⏳ Adapter `Footer.tsx`

## 📝 Notes
- Conserver la même structure de components
- Garder les animations et transitions
- Focus sur clarté et lisibilité
- Tester la navigation et les contrastes d'accessibilité
