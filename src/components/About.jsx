import { motion } from 'framer-motion';
import { skills } from '../data/projects';

const About = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.h2
            className="text-3xl md:text-4xl font-bold text-primary mb-8 border-b-2 border-primary pb-4"
            variants={itemVariants}
          >
            About
          </motion.h2>
          <motion.div className="space-y-4 text-gray-700" variants={itemVariants}>
            <p className="text-lg leading-relaxed">
              I am a second-year engineering student in Networks & Telecommunications
              at École Supérieure des Techniques Avancées (ESTA), Ouagadougou.
              Passionate about Data Science, Machine Learning and Computer Vision, I
              build practical projects in AI applied to security and agriculture, and
              have experience in networking, Linux and data processing.
            </p>
            <p className="text-lg leading-relaxed">
              <strong>Objective:</strong> Pursue a Bachelor in Data Science / AI in
              China (CSC scholarship Type A) and contribute to technology development
              in Burkina Faso.
            </p>
          </motion.div>

          <motion.div className="mt-12" variants={itemVariants}>
            <h3 className="text-2xl font-semibold text-primary mb-6">
              Key Skills & Tools
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  className="px-4 py-2 bg-blue-50 text-primary rounded-full text-sm font-medium border border-blue-200"
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, backgroundColor: '#eef6ff' }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;

