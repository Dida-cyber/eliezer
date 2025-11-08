# 📸 Comment Ajouter Votre Photo

## Instructions pour ajouter votre photo de profil

### Option 1: Ajouter votre photo dans le dossier `public`

1. **Préparez votre photo** :
   - Format recommandé : JPG ou PNG
   - Taille recommandée : 800x800 pixels (format carré)
   - Nommez le fichier : `profile-photo.jpg` (ou `.png`)

2. **Placez le fichier** :
   - Copiez votre photo dans le dossier `public/`
   - Le chemin sera : `public/profile-photo.jpg`

3. **Le portfolio utilisera automatiquement votre photo** !
   - Si la photo n'est pas trouvée, un placeholder avec vos initiales s'affichera

### Option 2: Utiliser une URL externe

Si vous préférez héberger votre photo ailleurs (Cloudinary, Imgur, etc.) :

1. Ouvrez `src/components/Hero.jsx`
2. Trouvez la ligne avec `src="/profile-photo.jpg"`
3. Remplacez par votre URL :
   ```jsx
   <img
     src="https://votre-url.com/photo.jpg"
     alt={personalInfo.name}
     className="w-full h-full object-cover"
   />
   ```

### Format de photo recommandé

- **Ratio** : 1:1 (carré)
- **Taille** : 800x800 pixels minimum
- **Format** : JPG (pour un meilleur chargement) ou PNG (pour la transparence)
- **Poids** : Moins de 500 KB pour un chargement rapide
- **Style** : Photo professionnelle avec fond neutre ou flou

### Personnalisation de la taille

Si vous voulez ajuster la taille de la photo dans le Hero :

1. Ouvrez `src/components/Hero.jsx`
2. Trouvez la ligne avec `className="relative w-48 h-48 md:w-64 md:h-64"`
3. Modifiez les valeurs :
   - `w-48 h-48` = taille sur mobile (192px)
   - `md:w-64 md:h-64` = taille sur desktop (256px)

### Test

Après avoir ajouté votre photo :

1. Lancez le serveur de développement : `npm run dev`
2. Vérifiez que votre photo s'affiche correctement
3. Si elle ne s'affiche pas, vérifiez :
   - Le nom du fichier (doit être exactement `profile-photo.jpg`)
   - L'emplacement (dans le dossier `public/`)
   - Le format du fichier (JPG ou PNG)

---

**Note** : Si vous ne mettez pas de photo, un placeholder élégant avec vos initiales sera affiché automatiquement.

