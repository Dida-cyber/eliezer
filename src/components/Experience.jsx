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
    <section id="experience" className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-48 h-48 sm:w-96 sm:h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-96 sm:h-96 bg-purple-200/20 rounded-full blur-3xl"></div>

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
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            <span className="bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent">
              Experience & Leadership
            </span>
          </h2>
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-12 bg-gradient-to-r from-transparent to-primary/60"></div>
            <div className="w-2 h-2 rounded-full bg-primary/80"></div>
            <div className="h-px flex-1 max-w-[120px] bg-gradient-to-r from-primary/60 to-purple-500/60"></div>
            <div className="w-2 h-2 rounded-full bg-purple-500/80"></div>
            <div className="h-px w-12 bg-gradient-to-l from-transparent to-purple-500/60"></div>
          </div>
          <p className="text-slate-600 text-base sm:text-lg max-w-xl mx-auto px-2 font-light">
            My journey in technology, leadership, and innovation
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-5 sm:left-7 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-blue-600 to-purple-600 transform md:-translate-x-1/2"></div>

          <motion.div
            className="space-y-8 sm:space-y-12"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {experience.map((exp, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                className="relative pl-14 sm:pl-20 md:pl-0 md:flex md:items-center md:gap-8"
              >
                {/* Timeline dot */}
                <div className="absolute left-5 sm:left-7 md:left-1/2 w-3.5 h-3.5 sm:w-5 sm:h-5 bg-gradient-to-br from-primary to-blue-600 rounded-full border-2 sm:border-4 border-white shadow-lg shadow-blue-500/20 transform md:-translate-x-1/2 z-10 ring-2 ring-primary/20"></div>

                <motion.div
                  className={`md:w-1/2 ${index % 2 === 0 ? 'md:pr-8 md:text-right' : 'md:ml-auto md:pl-8'}`}
                  whileHover={{ scale: 1.02, x: index % 2 === 0 ? -5 : 5 }}
                >
                  <div className="relative bg-white p-4 xs:p-5 sm:p-6 rounded-xl sm:rounded-2xl md:rounded-3xl shadow-card border border-slate-200/60 hover:shadow-card-hover hover:shadow-primary/5 hover:border-primary/20 transition-all duration-500 group overflow-hidden min-w-0">
                    {/* Gradient accent bar */}
                    <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-primary via-blue-500 to-purple-500 rounded-t-2xl sm:rounded-t-3xl"></div>
                    {/* Subtle corner glow */}
                    <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    {/* Hover gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] via-transparent to-purple-500/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>

                    <div className="relative z-10">
                      <div className="flex items-start gap-4 md:flex-col md:items-start md:gap-3">
                        <motion.div
                          className="flex-shrink-0 w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-primary to-blue-600 rounded-xl sm:rounded-2xl flex items-center justify-center shadow-lg shadow-primary/25"
                          whileHover={{ rotate: [0, -10, 10, 0], scale: 1.05 }}
                          transition={{ duration: 0.4 }}
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
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-1.5 group-hover:text-primary transition-colors duration-300 md:text-center">
                            {exp.title}
                          </h3>
                          <p className="text-primary/90 font-semibold text-sm sm:text-base mb-3 md:text-center">
                            {exp.organization}
                          </p>
                          {exp.details && exp.details.length > 0 && (
                              <ul className="mt-3 space-y-2 sm:space-y-2.5 max-w-xl md:mx-auto">
                                {exp.details.map((detail, idx) => (
                                  <li key={idx} className="flex items-start gap-2 sm:gap-2.5 text-slate-600 text-xs sm:text-sm md:justify-center break-words">
                                    <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-primary mt-1.5"></span>
                                    <span className="leading-relaxed">{detail}</span>
                                  </li>
                                ))}
                              </ul>
                          )}
                          {exp.note && (
                              <p className="mt-3 text-slate-500 text-sm italic max-w-xl md:mx-auto md:text-center">— {exp.note}</p>
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
