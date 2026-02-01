import { motion } from 'framer-motion';
import { personalInfo } from '../data/projects';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-400 py-8 sm:py-10 lg:py-12 border-t border-slate-800/50 safe-area-padding">
      <div className="max-w-7xl mx-auto px-3 xs:px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <p className="text-base sm:text-lg mb-2 break-words px-2">
            Made with <span className="text-rose-400">❤</span> by{' '}
            <span className="text-white font-semibold">
              {personalInfo.name}
            </span>
          </p>
          <p className="text-sm text-slate-500">
            © 2025 All Rights Reserved
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;

