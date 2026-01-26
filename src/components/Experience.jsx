import { motion } from 'framer-motion';
import { experience } from '../data/projects';

const Experience = () => {
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
    hidden: { opacity: 0, x: -30 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section className="relative py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-48 h-48 sm:w-96 sm:h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-96 sm:h-96 bg-purple-200/20 rounded-full blur-3xl"></div>

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
              Experience & Leadership
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-purple-600 mx-auto rounded-full mb-4"></div>
          <p className="text-gray-600 text-lg md:text-xl max-w-2xl mx-auto">
            My journey in technology, leadership, and innovation
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-blue-600 to-purple-600 transform md:-translate-x-1/2"></div>

          <motion.div
            className="space-y-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative pl-20 md:pl-0 md:flex md:items-center md:gap-8"
              >
                {/* Timeline dot */}
                <div className="absolute left-6 md:left-1/2 w-4 h-4 bg-primary rounded-full border-4 border-white shadow-lg transform md:-translate-x-1/2 z-10"></div>

                <motion.div
                  className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:ml-auto md:pl-8'}`}
                  whileHover={{ scale: 1.02, x: index % 2 === 0 ? -5 : 5 }}
                >
                  <div className="bg-white p-6 rounded-2xl shadow-lg border border-gray-200 hover:shadow-2xl transition-all duration-500 group">
                    {/* Gradient accent */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-primary to-purple-600 rounded-t-2xl"></div>
                    
                    {/* Hover effect */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-purple-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

                    <div className="relative z-10">
                      <div className="flex items-start gap-4 md:flex-col md:items-start md:gap-2">
                        <motion.div
                          className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-primary to-blue-600 rounded-xl flex items-center justify-center"
                          whileHover={{ rotate: 360 }}
                          transition={{ duration: 0.5 }}
                        >
                          <svg
                            className="w-6 h-6 text-white"
                            fill="none"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </motion.div>
                        <div className="flex-1">
                          <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-primary transition-colors text-center">
                            {exp.title}
                          </h3>
                          <p className="text-gray-600 font-medium mb-2 text-center">
                            {exp.organization}
                          </p>
                          {exp.details && exp.details.length > 0 && (
                              <ul className="mt-3 text-gray-700 text-sm space-y-3 max-w-xl mx-auto">
                                {exp.details.map((detail, idx) => (
                                  <li key={idx} className="flex items-center justify-center gap-3">
                                    <span className="text-primary font-bold">•</span>
                                    <span className="text-center">{detail}</span>
                                  </li>
                                ))}
                              </ul>
                          )}
                          {exp.note && (
                              <p className="mt-3 text-gray-700 text-sm max-w-xl mx-auto text-center">— {exp.note}</p>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
