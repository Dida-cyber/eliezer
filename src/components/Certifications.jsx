import { useState } from 'react';
import { motion } from 'framer-motion';
import { certifications } from '../data/projects';

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

  // lightbox state pour afficher l'image en grand
  const [lightbox, setLightbox] = useState({ open: false, src: '', alt: '' });
  const openLightbox = (src, alt) => setLightbox({ open: true, src, alt });
  const closeLightbox = () => setLightbox({ open: false, src: '', alt: '' });

  return (
    <section id="certifications" className="relative py-24 bg-gradient-to-b from-white to-gray-50 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 right-0 w-48 h-48 sm:w-96 sm:h-96 bg-purple-100/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-96 sm:h-96 bg-blue-100/30 rounded-full blur-3xl"></div>

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold mb-4">
            <span className="bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Certifications
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-purple-600 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            Certification obtained during my career
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 gap-6"
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
              className="group relative bg-white p-6 rounded-2xl shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-500 overflow-hidden"
              whileHover={{ y: -5, scale: 1.02 }}
            >
              {/* Gradient overlay */}
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${categoryColors[cert.category] || 'from-primary to-purple-600'}`}></div>
              
              {/* Hover effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative z-10">
                <div className="flex items-start gap-4 mb-4">
                  {/* Image de la certification */}
                  <div className="flex-shrink-0 w-16 h-16 bg-white rounded-xl flex items-center justify-center shadow-lg border border-gray-200 overflow-hidden">
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
                  <div className="flex-1">
                    <h3 className="text-gray-900 text-lg font-bold mb-1">
                      {cert.issuer}
                    </h3>
                    <span className={`inline-block px-3 py-1 bg-gradient-to-r ${categoryColors[cert.category] || 'from-primary to-blue-600'} text-white text-xs font-semibold rounded-full`}>
                      {cert.category}
                    </span>
                  </div>
                </div>
                
                {/* Certifications list */}
                <ul className="space-y-2">
                  {cert.certsList.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2 text-gray-700">
                      <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full mt-2" style={{backgroundColor: 'currentColor'}}></span>
                      <span className="text-sm md:text-base">{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Bouton pour voir l'image en grand */}
                {cert.image && (
                  <div className="mt-4 text-right">
                    <button
                      onClick={() => openLightbox(imageSrc, cert.issuer)}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-lg shadow"
                    >
                      View certificate
                    </button>
                  </div>
                )}
              </div>
            </motion.div>
          );
          })}
        </motion.div>
        {lightbox.open && (
          <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-60" onClick={closeLightbox}>
            <div className="max-w-3xl w-full p-4" onClick={(e) => e.stopPropagation()}>
              <div className="bg-white rounded-lg overflow-hidden shadow-lg">
                <div className="flex justify-end p-2">
                  <button onClick={closeLightbox} className="text-gray-600 hover:text-gray-900">✕</button>
                </div>
                <div className="p-4">
                  <img src={lightbox.src} alt={lightbox.alt} className="w-full h-auto object-contain" />
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Certifications;
