import { motion } from 'framer-motion';
import { personalInfo } from '../data/projects';
import { useEffect, useState, useMemo } from 'react';

const Particle = ({ index, width, height }) => {
  const positions = useMemo(() => {
    const startX = Math.random() * width;
    const startY = Math.random() * height;
    const endX = Math.random() * width;
    const endY = Math.random() * height;
    const duration = Math.random() * 10 + 10;
    return { startX, startY, endX, endY, duration };
  }, [width, height]);

  return (
    <motion.div
      className="absolute w-2 h-2 bg-white/20 rounded-full"
      initial={{
        x: positions.startX,
        y: positions.startY,
        opacity: 0.3,
      }}
      animate={{
        x: positions.endX,
        y: positions.endY,
        opacity: [0.3, 0.6, 0.3],
      }}
      transition={{
        duration: positions.duration,
        repeat: Infinity,
        repeatType: 'reverse',
        ease: 'easeInOut',
      }}
    />
  );
};

const Hero = () => {
  const [dimensions, setDimensions] = useState({ width: 1920, height: 1080 });

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };
    updateDimensions();
    window.addEventListener('resize', updateDimensions);
    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  const particles = useMemo(
    () => Array.from({ length: 20 }, (_, i) => i),
    []
  );

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary via-blue-600 to-blue-800"
    >
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {particles.map((i) => (
          <Particle
            key={i}
            index={i}
            width={dimensions.width}
            height={dimensions.height}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            className="text-4xl md:text-6xl font-bold text-white mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            {personalInfo.name}
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl text-blue-100 mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            {personalInfo.title}
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center text-white"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            <a
              href={`mailto:${personalInfo.email}`}
              className="hover:text-blue-200 transition-colors"
            >
              {personalInfo.email}
            </a>
            <span className="hidden sm:inline">—</span>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-200 transition-colors"
            >
              GitHub: {personalInfo.github.replace('https://', '')}
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, y: [0, 10, 0] }}
        transition={{
          opacity: { delay: 1, duration: 0.5 },
          y: { duration: 1.5, repeat: Infinity },
        }}
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
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </motion.div>
    </section>
  );
};

export default Hero;

