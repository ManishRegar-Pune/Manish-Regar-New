import { motion } from "framer-motion";

const Footer = () => {
  const socialLinks = [
    { icon: "fab fa-youtube", url: "https://youtube.com/@ManishCountryBall", label: "YouTube" },
    { icon: "fab fa-instagram", url: "https://instagram.com/manish_regar369", label: "Instagram" },
    { icon: "fab fa-twitter", url: "https://twitter.com/Mr_manish_regar", label: "Twitter" },
    { icon: "fab fa-whatsapp", url: "https://wa.me/919371010561", label: "WhatsApp" },
  ];

  return (
    <footer className="border-t border-primary/10 py-8 mt-12">
      <div className="container mx-auto px-4">
        <div className="text-center mb-6">
          <h2 className="font-display text-xl font-bold text-primary">
            Manish Regar
          </h2>
          <p className="text-sm text-primary/70">Ethical Hacker & Tech Enthusiast</p>
        </div>
        
        <div className="flex justify-center space-x-6 mb-8">
          {socialLinks.map((link, index) => (
            <motion.a
              key={index}
              href={link.url}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center soft-glow"
              whileTap={{ scale: 0.95 }}
              aria-label={link.label}
            >
              <i className={`${link.icon} text-primary`}></i>
            </motion.a>
          ))}
        </div>
        
        <div className="text-center">
          <p className="mb-3 text-primary font-display text-lg font-bold">MADE BY MANISH REGAR</p>
          <p className="text-sm text-primary/50">© 2025 Manish Regar. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
