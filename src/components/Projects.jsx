import { motion } from 'framer-motion';
import { projects } from '../data/projects';

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

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Projects
          </h2>
          <p className="text-gray-600 text-lg">
            Explore my work in AI, Data Science, and Networking
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {projects.map((project) => (
            <motion.div
              key={project.id}
              variants={cardVariants}
              className="bg-white border border-gray-200 rounded-lg p-6 shadow-md hover:shadow-xl transition-shadow duration-300"
              whileHover={{ y: -5 }}
            >
              <div className="mb-4">
                <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded-full mb-2">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold text-gray-800 mb-2">
                  {project.title}
                </h3>
              </div>
              <p className="text-gray-600 text-sm mb-3">
                <em>Objective:</em> {project.objective}
              </p>
              <p className="text-gray-700 text-sm mb-3">
                <strong>Tech:</strong> {project.tech}
              </p>
              {project.status && (
                <p className="text-gray-600 text-sm mb-3">
                  <strong>Status:</strong> {project.status}
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
                  className="text-primary hover:text-blue-600 text-sm font-medium inline-flex items-center gap-1"
                  whileHover={{ x: 5 }}
                >
                  View code on GitHub
                  <svg
                    className="w-4 h-4"
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
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;

