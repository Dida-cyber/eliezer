import { motion } from 'framer-motion';
import { personalProjects, projects } from '../data/projects';

const Projects = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const ProjectCard = ({ project }) => (
    <motion.div
      variants={cardVariants}
      className="group relative bg-white border border-slate-200/60 rounded-2xl sm:rounded-3xl p-5 sm:p-6 shadow-card hover:shadow-card-hover hover:shadow-primary/5 hover:border-primary/20 transition-all duration-500 overflow-hidden"
      whileHover={{ y: -8, scale: 1.02 }}
    >
      {/* Top gradient accent - subtle by default, full on hover */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-primary/40 to-purple-500/40 group-hover:h-1.5 group-hover:from-primary/80 group-hover:to-purple-500/80 rounded-t-2xl sm:rounded-t-3xl transition-all duration-500"></div>
      {/* Corner glow */}
      <div className="absolute -top-20 -right-20 w-40 h-40 bg-primary/5 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      {/* Gradient overlay on hover */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/[0.02] via-transparent to-purple-500/[0.03] opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-2xl"></div>
      
      <div className="relative z-10">
        <div className="mb-4">
          <span className="inline-flex items-center px-3.5 py-1.5 bg-gradient-to-r from-primary/10 to-purple-500/10 text-primary text-xs font-semibold rounded-full mb-3 border border-primary/20 group-hover:border-primary/30 transition-colors">
            {project.category}
          </span>
          <h3 className="text-lg sm:text-xl font-bold text-slate-800 mb-2 sm:mb-3 group-hover:text-primary transition-colors duration-300 break-words">
            {project.title}
          </h3>
        </div>
        <p className="text-slate-600 text-sm mb-3 leading-relaxed">
          <em className="text-primary font-medium not-italic">Objective:</em> {project.objective}
        </p>
        <div className="mb-4 p-3.5 bg-slate-50/80 rounded-xl border border-slate-100 overflow-x-auto">
          <p className="text-slate-700 text-sm">
            <strong className="text-slate-800">Tech Stack:</strong> 
            <span className="ml-2 text-slate-600">{project.tech}</span>
          </p>
        </div>
        {project.status && (
          <p className="text-gray-600 text-sm mb-3">
            <strong>Status:</strong> 
            <span className="ml-2 px-2.5 py-1 bg-emerald-50 text-emerald-700 rounded-full text-xs font-medium border border-emerald-200/60">
              {project.status}
            </span>
          </p>
        )}
        {project.deliverables && (
          <p className="text-gray-600 text-sm mb-3">
            <strong>Deliverables:</strong> {project.deliverables}
          </p>
        )}
        {project.github && (
          <motion.a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 min-h-[44px] bg-gradient-to-r from-primary to-accent text-white rounded-xl text-sm font-medium hover:from-primaryDark hover:to-accent transition-all duration-300 mt-4 group/link shadow-lg shadow-primary/20 hover:shadow-primary/30 hover:scale-[1.02]"
            whileHover={{ x: 5, scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>View on GitHub</span>
            <svg
              className="w-4 h-4 group-hover/link:translate-x-1 transition-transform"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </motion.a>
        )}
      </div>
    </motion.div>
  );

  return (
    <section id="projects" className="relative py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-slate-50 via-white to-slate-50 overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-0 left-0 w-48 h-48 sm:w-96 sm:h-96 bg-blue-100/30 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-48 h-48 sm:w-96 sm:h-96 bg-purple-100/30 rounded-full blur-3xl"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 safe-area-padding">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14 sm:mb-20"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-purple-500/20 mb-6 ring-2 ring-primary/20">
            <svg className="w-8 h-8 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
            </svg>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold mb-4 tracking-tight">
            <span className="bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent">
              My Projects
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
            Explore my work in AI, Data Science, and Networking
          </p>
        </motion.div>

        {/* Personal Projects Section */}
        <div className="mb-20">
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-slate-800"
          >
            <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary/10 text-primary">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" /></svg>
            </span>
            <span className="bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
              Personal Projects
            </span>
          </motion.h3>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0 }}
          >
            {personalProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        </div>

        {/* Academic & Professional Projects Section */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3 text-2xl sm:text-3xl md:text-4xl font-bold mb-6 sm:mb-8 text-slate-800"
          >
            <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-purple-500/10 text-purple-600">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" /></svg>
            </span>
            <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
              Academic & Professional Projects
            </span>
          </motion.h3>
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0 }}
          >
            {projects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Projects;

