# Eliezer TIONON Portfolio

A modern, professional, and animated portfolio web application built with React, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Clean, elegant, and minimalist design using Tailwind CSS
- **Smooth Animations**: Framer Motion powered fade-in and scroll animations
- **Responsive**: Fully responsive for mobile and desktop devices
- **Interactive Elements**: Hover effects, floating CV button, and smooth scroll navigation
- **Gradient Hero Section**: Beautiful gradient background with animated particles
- **SEO Optimized**: Meta tags and semantic HTML for better search engine visibility

## 🛠️ Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for React
- **React DOM** - React rendering

## 📦 Installation

1. **Clone the repository** (if applicable) or navigate to the project directory:
   ```bash
   cd eliezer_portfolio
   ```

2. **Install dependencies**:
   ```bash
   npm install
   ```

3. **Start the development server**:
   ```bash
   npm run dev
   ```

4. **Open your browser** and navigate to `http://localhost:5173` (or the port shown in the terminal)

## 🏗️ Build for Production

To create a production build:

```bash
npm run build
```

The built files will be in the `dist` directory.

To preview the production build:

```bash
npm run preview
```

## 📁 Project Structure

```
eliezer_portfolio/
├── src/
│   ├── components/
│   │   ├── Navigation.jsx      # Navigation bar with smooth scroll
│   │   ├── Hero.jsx            # Hero section with gradient and particles
│   │   ├── About.jsx           # About section with skills
│   │   ├── Projects.jsx        # Projects grid display
│   │   ├── Certifications.jsx  # Certifications list
│   │   ├── Experience.jsx      # Experience and leadership
│   │   ├── Contact.jsx         # Contact section
│   │   ├── Footer.jsx          # Footer component
│   │   └── FloatingCVButton.jsx # Floating download CV button
│   ├── data/
│   │   └── projects.js         # Data file for projects, certifications, etc.
│   ├── App.jsx                 # Main app component
│   ├── main.jsx                # React entry point
│   └── index.css               # Global styles and Tailwind imports
├── index.html                  # HTML template
├── package.json                # Dependencies and scripts
├── vite.config.js              # Vite configuration
├── tailwind.config.js          # Tailwind CSS configuration
└── postcss.config.js           # PostCSS configuration
```

## 📋 Quick Start

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start development server**:
   ```bash
   npm run dev
   ```

3. **Open browser**:
   Navigate to `http://localhost:5173`

That's it! The portfolio is now running locally.

## 🚀 Deployment

1. **Install Vercel CLI** (optional):
   ```bash
   npm i -g vercel
   ```

2. **Deploy**:
   ```bash
   vercel
   ```

   Or connect your GitHub repository to Vercel for automatic deployments.

### Deploy to GitHub Pages

1. **Install gh-pages**:
   ```bash
   npm install --save-dev gh-pages
   ```

2. **Add to package.json scripts**:
   ```json
   "predeploy": "npm run build",
   "deploy": "gh-pages -d dist"
   ```

3. **Update vite.config.js**:
   ```js
   export default defineConfig({
     plugins: [react()],
     base: '/your-repo-name/'
   })
   ```

4. **Deploy**:
   ```bash
   npm run deploy
   ```

### Deploy to Netlify

1. **Build the project**:
   ```bash
   npm run build
   ```

2. **Drag and drop** the `dist` folder to [Netlify Drop](https://app.netlify.com/drop)

   Or connect your GitHub repository to Netlify for automatic deployments.

## 🎨 Customization

### Update Personal Information

Edit `src/data/projects.js` to update:
- Personal information (name, email, GitHub)
- Projects
- Certifications
- Experience
- Skills

### Change Colors

Edit `tailwind.config.js` to customize the primary color:
```js
theme: {
  extend: {
    colors: {
      primary: '#1c6dd0', // Change this to your preferred color
    },
  },
}
```

### Modify Animations

Edit individual components in `src/components/` to customize Framer Motion animations.

## 📝 Notes

- Make sure to update the CV and Attestations file paths in `src/data/projects.js`
- Update GitHub links with your actual repository URLs
- Add your actual email and GitHub username
- The portfolio is optimized for international applications (content in English)
- Place your CV PDF and Attestations Word file in the `public` folder for downloads to work
- The old `index.html` and `styles.css` files have been replaced with the React version. If you need the old version, check git history.

## 📂 File Structure Notes

- **Old files**: The original `index.html` and `styles.css` have been converted to React components
- **Public folder**: Place static assets (CV, images, etc.) in the `public` folder
- **Components**: All React components are in `src/components/`
- **Data**: All portfolio data (projects, certifications, etc.) is in `src/data/projects.js` for easy updates

## 📄 License

This project is open source and available under the MIT License.

## 👤 Author

**Wend-Panga Jedidja Eliezer TIONON**
- Email: eliezertionon88@gmail.com
- GitHub: [yourgithub](https://github.com/yourgithub)

---

Made with ❤️ by Wend-Panga Jedidja Eliezer TIONON | © 2025 All Rights Reserved
