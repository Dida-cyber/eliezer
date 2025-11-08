import { motion } from 'framer-motion';
import { personalInfo } from '../data/projects';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-lg mb-2">
            Made with <span className="text-red-500">❤️</span> by{' '}
            <span className="text-white font-semibold">
              {personalInfo.name}
            </span>
          </p>
          <p className="text-sm">
            © 2025 All Rights Reserved
          </p>
          <p className="text-sm mt-2 text-gray-500">
            Prepared for CSC scholarship applications and university admissions
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

