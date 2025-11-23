# MySubs Landing Page

Landing page officielle pour MySubs - l'application de gestion d'abonnements disponible sur iOS et Android.

## 🚀 Démarrage rapide

```bash
# Installer les dépendances
npm install

# Lancer le serveur de développement
npm run dev

# Build pour la production
npm run build

# Prévisualiser le build de production
npm run preview
```

## 🛠️ Technologies

- **[Astro](https://astro.build)** - Framework web moderne pour sites statiques rapides
- **[Tailwind CSS](https://tailwindcss.com)** - Framework CSS utility-first
- **TypeScript** - Typage statique pour JavaScript

## 📁 Structure du projet

```
/
├── public/             # Assets statiques (favicon, images)
├── src/
│   ├── components/     # Composants Astro réutilisables
│   │   ├── Hero.astro
│   │   ├── Features.astro
│   │   ├── HowItWorks.astro
│   │   ├── Testimonials.astro
│   │   ├── CTA.astro
│   │   └── Footer.astro
│   ├── layouts/        # Layouts de page
│   │   └── Layout.astro
│   └── pages/          # Pages du site (routing basé sur les fichiers)
│       └── index.astro
├── astro.config.mjs    # Configuration Astro
├── tailwind.config.mjs # Configuration Tailwind
└── package.json
```

## 🎨 Sections de la landing page

1. **Hero** - Section principale avec titre accrocheur et boutons de téléchargement
2. **Features** - Présentation des 6 fonctionnalités principales
3. **How It Works** - Guide en 3 étapes pour commencer
4. **Testimonials** - Témoignages d'utilisateurs
5. **CTA** - Appel à l'action final
6. **Footer** - Liens et informations

## 📝 Commandes disponibles

| Commande              | Action                                         |
| :-------------------- | :--------------------------------------------- |
| `npm install`         | Installe les dépendances                       |
| `npm run dev`         | Lance le serveur de dev sur `localhost:4321`   |
| `npm run build`       | Build le site dans `./dist/`                   |
| `npm run preview`     | Prévisualise le build localement               |
| `npm run astro ...`   | Exécute les commandes Astro CLI               |

## 🌐 Déploiement

Le site est optimisé pour être déployé sur n'importe quelle plateforme supportant les sites statiques :
- Vercel
- Netlify
- GitHub Pages
- Cloudflare Pages

Le dossier `dist/` contient le site buildé prêt à être déployé.

## 📄 License

Tous droits réservés © 2025 MySubs