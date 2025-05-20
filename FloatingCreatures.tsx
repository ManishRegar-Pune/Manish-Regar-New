import { motion } from "framer-motion";

const FloatingCreatures = () => {
  return (
    <>
      <motion.div
        className="fixed top-20 left-10 w-16 h-16 pointer-events-none z-10 opacity-70 floating-creature"
        animate={{ y: [0, -10, 0] }}
        transition={{ 
          repeat: Infinity, 
          duration: 3,
          ease: "easeInOut"
        }}
      >
        <svg 
          viewBox="0 0 100 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <path 
            d="M50 10C40 10 30 20 30 40C30 60 40 70 50 70C60 70 70 60 70 40C70 20 60 10 50 10Z" 
            fill="rgba(126, 34, 206, 0.6)" 
            stroke="rgba(126, 34, 206, 0.8)" 
            strokeWidth="2"
          />
          <path 
            d="M30 40C20 45 20 55 30 60" 
            stroke="rgba(126, 34, 206, 0.8)" 
            strokeWidth="2" 
            strokeLinecap="round"
          />
          <path 
            d="M70 40C80 45 80 55 70 60" 
            stroke="rgba(126, 34, 206, 0.8)" 
            strokeWidth="2" 
            strokeLinecap="round"
          />
          <circle cx="40" cy="35" r="5" fill="rgba(255, 255, 255, 0.8)" />
          <circle cx="60" cy="35" r="5" fill="rgba(255, 255, 255, 0.8)" />
          <circle cx="40" cy="35" r="2" fill="rgba(0, 0, 0, 0.8)" />
          <circle cx="60" cy="35" r="2" fill="rgba(0, 0, 0, 0.8)" />
        </svg>
      </motion.div>
      
      <motion.div
        className="fixed top-40 right-20 w-12 h-12 pointer-events-none z-10 opacity-60 floating-creature"
        animate={{ y: [0, -10, 0] }}
        transition={{ 
          repeat: Infinity, 
          duration: 3,
          ease: "easeInOut",
          delay: 1
        }}
      >
        <svg 
          viewBox="0 0 100 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <path 
            d="M50 20C40 20 20 30 20 50C20 70 40 80 50 80C60 80 80 70 80 50C80 30 60 20 50 20Z" 
            fill="rgba(37, 99, 235, 0.6)" 
            stroke="rgba(37, 99, 235, 0.8)" 
            strokeWidth="2"
          />
          <path 
            d="M20 50C10 40 10 60 20 70" 
            stroke="rgba(37, 99, 235, 0.8)" 
            strokeWidth="2" 
            strokeLinecap="round"
          />
          <path 
            d="M80 50C90 40 90 60 80 70" 
            stroke="rgba(37, 99, 235, 0.8)" 
            strokeWidth="2" 
            strokeLinecap="round"
          />
          <path 
            d="M45 45C42 48 42 52 45 55" 
            stroke="rgba(255, 255, 255, 0.8)" 
            strokeWidth="2" 
            strokeLinecap="round"
          />
          <path 
            d="M55 45C58 48 58 52 55 55" 
            stroke="rgba(255, 255, 255, 0.8)" 
            strokeWidth="2" 
            strokeLinecap="round"
          />
        </svg>
      </motion.div>
      
      <motion.div
        className="fixed bottom-60 left-1/4 w-10 h-10 pointer-events-none z-10 opacity-50 floating-creature"
        animate={{ y: [0, -10, 0] }}
        transition={{ 
          repeat: Infinity, 
          duration: 3,
          ease: "easeInOut",
          delay: 2
        }}
      >
        <svg 
          viewBox="0 0 100 100" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          <circle 
            cx="50" 
            cy="50" 
            r="30" 
            fill="rgba(16, 185, 129, 0.6)" 
            stroke="rgba(16, 185, 129, 0.8)" 
            strokeWidth="2"
          />
          <circle 
            cx="50" 
            cy="50" 
            r="20" 
            stroke="rgba(255, 255, 255, 0.5)" 
            strokeWidth="2" 
            strokeDasharray="4 4"
          />
          <circle 
            cx="50" 
            cy="50" 
            r="10" 
            fill="rgba(255, 255, 255, 0.8)" 
          />
        </svg>
      </motion.div>
    </>
  );
};

export default FloatingCreatures;
