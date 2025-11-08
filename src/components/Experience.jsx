import { motion } from 'framer-motion';
import { experience } from '../data/projects';

const Experience = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <section className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
            Experience & Leadership
          </h2>
          <p className="text-gray-600 text-lg">
            My journey in technology and leadership
          </p>
        </motion.div>

        <motion.ul
          className="space-y-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {experience.map((exp, index) => (
            <motion.li
              key={index}
              variants={itemVariants}
              className="bg-gray-50 p-6 rounded-lg shadow-md border-l-4 border-primary"
              whileHover={{ x: 5, shadow: 'lg' }}
            >
              <div className="flex items-start">
                <svg
                  className="w-6 h-6 text-primary mt-1 mr-4 flex-shrink-0"
                  fill="none"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-1">
                    {exp.title}
                  </h3>
                  <p className="text-gray-600">
                    {exp.organization}
                    {exp.note && <span className="text-gray-500"> — {exp.note}</span>}
                  </p>
                </div>
              </div>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
};

export default Experience;

