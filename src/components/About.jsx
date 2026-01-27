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
    <section className="relative py-24 bg-gradient-to-b from-gray-50 to-white overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-48 h-48 sm:w-96 sm:h-96 bg-blue-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 sm:w-96 sm:h-96 bg-purple-200/20 rounded-full blur-3xl"></div>
      
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={containerVariants}
        >
          <motion.div
            className="text-center mb-16"
            variants={itemVariants}
          >
            <motion.h2
              className="text-4xl md:text-5xl font-extrabold mb-4"
              variants={itemVariants}
            >
              <span className="bg-gradient-to-r from-primary via-blue-600 to-purple-600 bg-clip-text text-transparent">
                About Me
              </span>
            </motion.h2>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-purple-600 mx-auto rounded-full"></div>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
            <motion.div 
              className="space-y-6"
              variants={itemVariants}
            >
              <p className="text-lg md:text-xl leading-relaxed text-gray-700 font-light">
                I am an <span className="font-semibold text-primary">engineering student</span> in Networks and Telecommunications 
                at the Higher School of Advanced Technology (ESTA), Ouagadougou, Burkina Faso.
              </p>

              <p className="text-lg md:text-xl leading-relaxed text-gray-700 font-light">
                I am a technology enthusiast and self-taught, passionate about <span className="font-semibold text-blue-600">Data Science, Networking, Machine Learning, and applied AI</span>. 
                I have academic training in computer networks and telecommunications, as well as experience on data-related and AI projects.
              </p>

              <p className="text-lg md:text-xl leading-relaxed text-gray-700 font-light">
                I enjoy transforming raw data into meaningful insights and developing intelligent systems that address real-world challenges
                . I also have hands-on experience in networking, Linux and Windows environments, and data processing.
              </p>

            </motion.div>

            <motion.div
              className="relative"
              variants={itemVariants}
            >
              <div className="absolute inset-0 bg-gradient-to-r from-primary to-purple-600 rounded-3xl blur-2xl opacity-20"></div>
              <div className="relative bg-white p-8 rounded-3xl shadow-xl border border-gray-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">
                  What I Do
                </h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-primary to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">🤖</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">AI & Machine Learning</h4>
                      <p className="text-gray-600 text-sm">Building intelligent systems and models</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">📊</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Data Science</h4>
                      <p className="text-gray-600 text-sm">Analyzing and visualizing complex data</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-lg flex items-center justify-center flex-shrink-0">
                      <span className="text-2xl">🌐</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800 mb-1">Networking</h4>
                      <p className="text-gray-600 text-sm">Designing and managing network infrastructure</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>

          <motion.div 
            className="mt-16"
            variants={itemVariants}
          >
            <h3 className="text-3xl font-bold text-center mb-10">
              <span className="bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
                Key Skills & Tools
              </span>
            </h3>
            <div className="flex flex-wrap justify-center gap-4">
              {skills.map((skill, index) => (
                <motion.span
                  key={skill}
                  className="px-6 py-3 bg-gradient-to-r from-white to-gray-50 text-gray-800 rounded-full text-sm font-semibold border-2 border-gray-200 hover:border-primary shadow-md hover:shadow-lg transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.1, 
                    backgroundColor: '#eef6ff',
                    borderColor: '#1c6dd0',
                    y: -3
                  }}
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

