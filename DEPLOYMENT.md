# Guide de Déploiement sur GitHub Pages

## 📝 Étape 1 : Enregistrer les changements dans Git

### 1.1 Ajouter tous les fichiers
```bash
git add .
```

### 1.2 Faire un commit avec un message descriptif
```bash
git commit -m "Transform portfolio to React with Tailwind CSS and Framer Motion"
```

### 1.3 Pousser vers GitHub
```bash
git push origin main
```

## 🚀 Étape 2 : Déployer sur GitHub Pages

### 2.1 S'assurer que les dépendances sont installées
```bash
npm install
```

### 2.2 Construire le projet
```bash
npm run build
```

### 2.3 Déployer sur GitHub Pages
```bash
npm run deploy
```

Cette commande va :
- Construire le projet (créer le dossier `dist`)
- Déployer le contenu du dossier `dist` sur la branche `gh-pages` de votre repository
- Votre site sera accessible à : `https://dida-cyber.github.io/-Eliezer-TIONON-/`

## ⚙️ Configuration GitHub Pages (Première fois)

Si c'est la première fois que vous déployez :

1. **Aller sur GitHub** : https://github.com/Dida-cyber/-Eliezer-TIONON-
2. **Settings** → **Pages**
3. **Source** : Sélectionner `gh-pages` branch
4. **Folder** : `/ (root)`
5. Cliquer sur **Save**

## 🔄 Mises à jour futures

Pour chaque mise à jour :
```bash
# 1. Faire vos modifications
# 2. Ajouter les changements
git add .

# 3. Commit
git commit -m "Votre message de description"

# 4. Pousser vers GitHub
git push origin main

# 5. Déployer sur GitHub Pages
npm run deploy
```

## 📋 Commandes rapides

```bash
# Tout en une fois (après avoir fait vos modifications)
git add . && git commit -m "Update portfolio" && git push origin main && npm run deploy
```

## ⚠️ Notes importantes

- Le dossier `dist` est généré lors du build et ne doit **PAS** être commité dans la branche `main`
- Le script `deploy` crée automatiquement la branche `gh-pages` si elle n'existe pas
- Les changements peuvent prendre quelques minutes pour être visibles sur GitHub Pages
- Assurez-vous que le chemin `base: '/-Eliezer-TIONON-/'` dans `vite.config.js` correspond au nom de votre repository

