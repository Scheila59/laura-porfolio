# 🎨 Portfolio Laura Beaugrand

Portfolio interactif avec système de thèmes saisonniers développé avec Next.js 14, TypeScript et Tailwind CSS.

![Portfolio Preview](./public/og-image.jpg)

## ✨ Fonctionnalités

- 🌸☀️🍂❄️ **Système de thèmes saisonniers** : 4 palettes de couleurs complètes avec dégradés et textures uniques
- 🎭 **Particules animées** : Pétales, bulles, feuilles et flocons générés dynamiquement en SVG
- ⚡ **Animations fluides** : Transitions avec Framer Motion et IntersectionObserver
- 📱 **Design responsive** : Optimisé pour mobile, tablette et desktop
- 🎯 **Navigation intelligente** : Scroll automatique vers les sections
- 💾 **Persistance du thème** : Le thème choisi est sauvegardé dans le localStorage
- 📊 **SEO optimisé** : Metadata complètes, Open Graph, Twitter Cards
- 📈 **Analytics intégré** : Google Tag Manager pour le suivi des visiteurs

## 🛠️ Stack Technique

### Frontend

- **Framework** : Next.js 14 (App Router)
- **Language** : TypeScript
- **Styling** : Tailwind CSS
- **Animations** : Framer Motion
- **Icons** : React Icons

### Architecture

- **State Management** : React Context API
- **Storage** : localStorage
- **Hooks personnalisés** : useTheme
- **Composants** : Séparation Client/Server Components

### SEO & Analytics

- **Metadata** : Next.js Metadata API
- **Analytics** : Google Tag Manager
- **Images OG** : Optimisées pour réseaux sociaux

## 🚀 Installation

```bash
# Clone le repository
git clone https://github.com/Scheila59/laura-porfolio.git

# Installe les dépendances
npm install

# Lance le serveur de développement
npm run dev
```

Ouvre [http://localhost:3000](http://localhost:3000) dans ton navigateur.

## 📂 Structure du Projet

```
laura-portfolio/
├── app/
│   ├── layout.tsx           # Layout global avec metadata
│   ├── page.tsx             # Page d'accueil
│   └── projects/            # Pages détaillées des projets
│       ├── amg/
│       ├── app-mobile-secret/
│       └── portfolio/
├── components/
│   ├── sections/            # Sections de la page d'accueil
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Projects.tsx
│   │   └── Contact.tsx
│   ├── theme/               # Composants de thème
│   │   ├── SeasonalParticles.tsx
│   │   └── ThemeSelector.tsx
│   └── layout/              # Composants de layout
│       ├── Header.tsx
│       └── Footer.tsx
├── hooks/
│   └── useTheme.tsx         # Hook pour gestion des thèmes
├── utils/
│   └── themes.ts            # Configuration des thèmes saisonniers
└── public/
    ├── og-image.jpg         # Image Open Graph
    ├── favicon.ico          # Favicon
    └── textures/            # Textures des saisons
    └── videos/              # Vidéos des projets
```

## 🎨 Système de Thèmes Saisonniers

### Sélection initiale

À la première visite, une page **SeasonWelcome** permet au visiteur de choisir sa saison préférée parmi :

### Printemps 🌸

- Couleurs : Rose, Corail, Pêche
- Particules : Pétales de fleurs
- Ambiance : Douce et fleurie

### Été ☀️

- Couleurs : Turquoise, Jaune, Orange
- Particules : Bulles
- Ambiance : Lumineuse et estivale

### Automne 🍂

- Couleurs : Orange, Marron, Terre
- Particules : Feuilles tombantes
- Ambiance : Chaleureuse et automnale

### Hiver ❄️

- Couleurs : Bleu glacier, Blanc, Violet
- Particules : Flocons de neige
- Ambiance : Froide et enneigée

Le thème choisi est sauvegardé et peut être changé à tout moment via le sélecteur de saison.

## 📱 Projets Présentés

### AMG Location

Plateforme de location d'engins développée avec Symfony, Docker et MariaDB. Premier projet fullstack complet.

### Application Mobile

Application React Native avec API Symfony centralisée. Architecture multi-applications avec JWT.

### Portfolio Personnel

Ce portfolio ! Projet méta auto-référentiel avec Next.js 14 et animations avancées.

## 🚢 Déploiement

Le site est déployé sur Vercel :

👉 **[Voir le site en ligne](#)** _(À ajouter après déploiement)_

## 📄 Licence

Ce projet est sous licence MIT.

## 📧 Contact

**Laura Beaugrand** - Développeuse Web Full-Stack

- LinkedIn : [laura-beaugrand](https://www.linkedin.com/in/laura-beaugrand/)
- Email : l.beaugrand@hotmail.com
- GitHub : [@Scheila59](https://github.com/Scheila59)

---

⭐ N'hésitez pas à explorer le code et à me contacter pour des échanges techniques !
