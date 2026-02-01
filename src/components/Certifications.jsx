import { useState } from 'react';
import { motion } from 'framer-motion';
import { certifications } from '../data/projects';
import { ciscoImages, ciscoCertNames } from '../data/certificationImages';

const Certifications = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.9 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  // Mapper les catégories à des couleurs
  const categoryColors = {
    "Networking & Security": "from-blue-500 to-cyan-500",
    "Remote Sensing": "from-green-500 to-emerald-500",
    "Networking": "from-indigo-500 to-blue-500",
    "Web Development": "from-orange-500 to-red-500",
    "AI & Computer Vision": "from-purple-500 to-pink-500"
  };

  // lightbox state pour afficher l'image en grand avec navigation
  const [lightbox, setLightbox] = useState({ open: false, images: [], currentIndex: 0, alt: '', isGallery: false, titles: [] });
  
  // Image statique pour les autres certifications
  const openStaticImage = (imageSrc, alt) => {
    const base = import.meta.env.BASE_URL || '/';
    const fullImageSrc = base + imageSrc.replace(/^\//, '');
    setLightbox({ open: true, images: [fullImageSrc], currentIndex: 0, alt, isGallery: false, titles: [] });
  };
  
  // Galerie spéciale pour Cisco avec ses 5 certifications
  const openCiscoGallery = () => {
    const base = import.meta.env.BASE_URL || '/';
    const images = ciscoImages.map(img => base + img.replace(/^\//, ''));
    setLightbox({ open: true, images, currentIndex: 0, alt: ciscoCertNames[0], isGallery: true, titles: ciscoCertNames });
  };
  
  const closeLightbox = () => setLightbox({ open: false, images: [], currentIndex: 0, alt: '', isGallery: false, titles: [] });
  const nextImage = () => {
    if (lightbox.currentIndex < lightbox.images.length - 1) {
      setLightbox(prev => ({ 
        ...prev, 
        currentIndex: prev.currentIndex + 1,
        alt: prev.titles[prev.currentIndex + 1] || prev.alt
      }));
    }
  };
  const prevImage = () => {
    if (lightbox.currentIndex > 0) {
      setLightbox(prev => ({ 
        ...prev, 
        currentIndex: prev.currentIndex - 1,
        alt: prev.titles[prev.currentIndex - 1] || prev.alt
      }));
    }
  };

  return (
    <section id="certifications" className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-48 h-48 sm:w-96 sm:h-96 bg-purple-100/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-96 sm:h-96 bg-blue-100/30 rounded-full blur-3xl"></div>

      <div className="relative max-w-5xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 safe-area-padding min-w-0">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 sm:mb-20"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-purple-500/20 mb-6 ring-2 ring-primary/20">
            <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
            </svg>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            <span className="bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/60"></div>
            <div className="w-2 h-2 rounded-full bg-primary/80"></div>
            <div className="h-px flex-1 max-w-[120px] bg-gradient-to-r from-primary/60 to-purple-500/60"></div>
            <div className="w-2 h-2 rounded-full bg-purple-500/80"></div>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-purple-500/60"></div>
          </div>
          <p className="text-slate-600 text-base sm:text-lg max-w-xl mx-auto font-light">
            Certifications obtained during my career
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {certifications.map((cert, index) => {
            const base = import.meta.env.BASE_URL || '/';
            const imageSrc = base + cert.image.replace(/^\//, '');
            return (
            <motion.div
              key={cert.id}
              variants={itemVariants}
              className="group relative bg-white p-5 sm:p-6 rounded-2xl sm:rounded-3xl shadow-card border border-slate-200/60 hover:shadow-card-hover hover:shadow-primary/5 hover:border-primary/20 transition-all duration-500 overflow-hidden"
              whileHover={{ y: -6, scale: 1.02 }}
            >
              {/* Gradient accent bar - thicker */}
              <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${categoryColors[cert.category] || 'from-primary to-purple-600'} rounded-t-2xl`}></div>
              {/* Corner glow on hover */}
              <div className="absolute -top-16 -right-16 w-32 h-32 bg-primary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              {/* Subtle gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-transparent via-transparent to-primary/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4 flex-wrap">
                  {/* Image de la certification */}
                  <div className="flex-shrink-0 w-16 h-16 sm:w-[4.5rem] sm:h-[4.5rem] bg-slate-50 rounded-2xl flex items-center justify-center shadow-inner border border-slate-100 overflow-hidden ring-1 ring-slate-200/50 group-hover:ring-primary/20 transition-all duration-300">
                    <img 
                      src={imageSrc} 
                      alt={cert.issuer}
                      className="w-full h-full object-contain p-2"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML = `
                          <svg class="w-8 h-8 text-gray-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
                            <path d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
                          </svg>
                        `;
                      }}
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="text-slate-800 text-lg font-bold mb-2 group-hover:text-primary transition-colors duration-300">
                      {cert.issuer}
                    </h3>
                    <span className={`inline-flex px-3 py-1.5 bg-gradient-to-r ${categoryColors[cert.category] || 'from-primary to-blue-600'} text-white text-xs font-semibold rounded-full shadow-sm`}>
                      {cert.category}
                    </span>
                  </div>
                </div>
                
                {/* Certifications list */}
                <ul className="space-y-2.5">
                  {cert.certsList.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-slate-600">
                      <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2 bg-primary/70"></span>
                      <span className="text-xs sm:text-sm md:text-base leading-relaxed break-words">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Bouton pour voir l'image en grand */}
                {cert.image && (
                  <div className="mt-5 pt-4 border-t border-slate-100">
                    <button
                      onClick={() => cert.issuer === 'Cisco Networking Academy' ? openCiscoGallery() : openStaticImage(cert.image, cert.issuer)}
                      className="inline-flex items-center justify-center gap-2 px-5 py-2.5 min-h-[44px] bg-gradient-to-r from-primary to-accent hover:from-primaryDark hover:to-accent text-white rounded-xl font-medium shadow-lg shadow-primary/20 hover:shadow-primary/30 transition-all duration-300 hover:scale-[1.02]"
                    >
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>
                      View certificates
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          );
          })}
        </motion.div>
        {lightbox.open && (
          <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm" 
          onClick={closeLightbox}
        >
            <div className="max-w-3xl w-full p-3 sm:p-4 mx-4 sm:mx-0 max-h-[90vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
              <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="flex justify-between items-center p-4 border-b border-slate-200">
                  <h3 className="text-lg font-semibold text-gray-800">{lightbox.alt}</h3>
                  <button onClick={closeLightbox} className="p-3 -m-2 min-w-[44px] min-h-[44px] flex items-center justify-center text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-100 text-xl">✕</button>
                </div>
                <div className="p-4 relative">
                  <img src={lightbox.images[lightbox.currentIndex]} alt={lightbox.alt} className="w-full h-auto object-contain" />
                  
                  {/* Compteur */}
                  {lightbox.isGallery && (
                    <div className="mt-4 text-center text-sm font-medium text-gray-600">
                      {lightbox.currentIndex + 1} / {lightbox.images.length}
                    </div>
                  )}

                  {/* Boutons de navigation */}
                  {lightbox.isGallery && lightbox.images.length > 1 && (
                    <div className="mt-6 flex gap-3 justify-center">
                      <button
                        onClick={prevImage}
                        disabled={lightbox.currentIndex === 0}
                        className="flex items-center gap-2 px-4 py-2 bg-slate-200 hover:bg-slate-300 disabled:bg-slate-100 disabled:text-gray-400 disabled:cursor-not-allowed text-gray-700 rounded-lg font-medium transition-all duration-300"
                      >
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                        </svg>
                        Previous
                      </button>
                      <button
                        onClick={nextImage}
                        disabled={lightbox.currentIndex === lightbox.images.length - 1}
                        className="flex items-center gap-2 px-4 py-2 bg-primary hover:bg-primaryDark disabled:bg-slate-100 disabled:text-gray-400 disabled:cursor-not-allowed text-white rounded-lg font-medium transition-all duration-300"
                      >
                        Next
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </button>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </section>
  );
};

export default Certifications;
