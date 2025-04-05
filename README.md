# Golf Scorecard Web App

Une application web simple pour encoder les coups joués trou par trou lors d'une partie de golf, avec possibilité d'export vers Excel.

![Screenshot](https://images.unsplash.com/photo-1616362155556-3f90063dff91?auto=format&fit=crop&w=1350&q=80)

## 🚀 Fonctionnalités

- Encodage pour 18 trous : par, coups joués, putts, clubs utilisés
- Interface claire et mobile-friendly
- Export au format Excel (fichier `.xlsx`)
- Visuel agréable avec une photo de golf

## 📦 Installation locale

1. Clone le dépôt :
```bash
git clone https://github.com/example-user/golf-scorecard-webapp.git
cd golf-scorecard-webapp
```
2. Installe les dépendances :
```bash
npm install
```
3. Lance le serveur de développement :
```bash
npm run dev
```
4. Accède à `http://localhost:3000`

## ☁️ Déploiement sur Vercel

1. Crée un compte sur [https://vercel.com](https://vercel.com)
2. Clique sur "Import Project" et sélectionne ce repo GitHub
3. Laisse les paramètres par défaut (React + Vite ou Next.js)
4. Clique sur "Deploy"

Tu obtiendras une URL publique du type : `https://golf-scorecard.vercel.app`

## 📤 Export Excel
Clique sur le bouton "Exporter vers Excel" en bas de page pour générer un fichier `.xlsx` à analyser ou partager après la partie.

## 🛠️ Technologies utilisées
- React + Tailwind CSS
- XLSX (SheetJS) pour l'export Excel
- Lucide React pour les icônes

---

© 2025 — Projet personnel pour amateurs de golf. N'hésitez pas à forker ou contribuer !
