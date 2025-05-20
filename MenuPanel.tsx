import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface MenuPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const MenuPanel = ({ isOpen, onClose }: MenuPanelProps) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  const menuItems = [
    { id: "about", icon: "fas fa-user", label: "About Me" },
    { id: "mission", icon: "fas fa-bullseye", label: "My Mission" },
    { id: "abilities", icon: "fas fa-bolt", label: "My Abilities" },
    { id: "services", icon: "fas fa-briefcase", label: "Services" },
    { id: "selling", icon: "fas fa-shopping-cart", label: "Shop" },
    { id: "social", icon: "fas fa-share-alt", label: "Social Media" },
    { id: "contact", icon: "fas fa-phone", label: "Contact" },
    { id: "journey", icon: "fas fa-road", label: "My Journey" },
    { id: "charges", icon: "fas fa-tag", label: "My Charges" },
  ];

  if (!mounted) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            exit={{ x: "-100%" }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed top-0 left-0 h-full w-64 md:w-72 bg-background/95 backdrop-blur-md z-50 border-r border-primary/10 flex flex-col p-5"
          >
            <div className="flex justify-between items-center mb-8">
              <h2 className="font-display text-lg font-bold text-primary">Menu</h2>
              <motion.button 
                whileTap={{ scale: 0.95 }}
                onClick={onClose} 
                className="w-8 h-8 rounded-full border border-primary/20 flex items-center justify-center soft-glow"
                aria-label="Close menu"
              >
                <i className="fas fa-times text-primary"></i>
              </motion.button>
            </div>
            
            <nav>
              <ul className="space-y-1">
                {menuItems.map((item) => (
                  <li key={item.id}>
                    <motion.a 
                      href={`#${item.id}`} 
                      className="flex items-center p-3 rounded-md border border-transparent hover:border-primary/10 soft-glow"
                      whileTap={{ scale: 0.98 }}
                      onClick={(e) => {
                        e.preventDefault();
                        const element = document.getElementById(item.id);
                        if (element) {
                          element.scrollIntoView({ behavior: "smooth" });
                          onClose();
                        }
                      }}
                    >
                      <span className="w-8 h-8 rounded-full border border-primary/20 flex items-center justify-center mr-3">
                        <i className={`${item.icon} text-primary`}></i>
                      </span>
                      <span className="text-primary">{item.label}</span>
                    </motion.a>
                  </li>
                ))}
              </ul>
            </nav>
            
            <div className="mt-auto border-t border-primary/10 pt-4">
              <p className="text-xs text-center text-primary/50">© 2025 Manish Regar. All rights reserved.</p>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MenuPanel;
