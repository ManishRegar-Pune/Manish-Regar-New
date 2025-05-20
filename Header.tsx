import { motion } from "framer-motion";
import ThemeToggle from "./ThemeToggle";

interface HeaderProps {
  onMenuToggle: () => void;
}

const Header = ({ onMenuToggle }: HeaderProps) => {
  return (
    <header className="relative px-4 py-4 border-b border-primary/10">
      <div className="container mx-auto flex justify-between items-center">
        <motion.button
          whileTap={{ scale: 0.95 }}
          onClick={onMenuToggle}
          className="p-2 rounded-md button-hover soft-glow"
          aria-label="Open menu"
        >
          <i className="fas fa-bars text-primary"></i>
        </motion.button>
        
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          <h1 className="font-display text-2xl font-bold">
            <span className="text-primary">Manish</span>
            <span className="text-primary opacity-70">Regar</span>
          </h1>
        </motion.div>
        
        <div className="flex gap-3">
          <ThemeToggle />
          
          <motion.a
            whileTap={{ scale: 0.95 }}
            href="https://wa.me/919371010561"
            className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center soft-glow"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Contact on WhatsApp"
          >
            <i className="fab fa-whatsapp text-primary"></i>
          </motion.a>
          
          <motion.a
            whileTap={{ scale: 0.95 }}
            href="tel:+919371010561"
            className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center soft-glow"
            aria-label="Call phone number"
          >
            <i className="fas fa-phone text-primary"></i>
          </motion.a>
        </div>
      </div>
    </header>
  );
};

export default Header;
