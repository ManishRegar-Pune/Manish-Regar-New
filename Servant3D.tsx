import { motion } from "framer-motion";
import { useState, useEffect } from "react";

interface ServantProps {
  position: "left" | "right";
}

const Servant3D = ({ position }: ServantProps) => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });
  
  // Set initial window size and update on resize
  useEffect(() => {
    const handleResize = () => {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight
      });
    };
    
    // Initial size
    handleResize();
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  // Track mouse movement for 3D effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);
  
  // Calculate rotation based on mouse position
  const calculateRotation = () => {
    if (windowSize.width === 0) return { x: 0, y: 0 };
    
    const centerX = windowSize.width / 2;
    const centerY = windowSize.height / 2;
    
    // Calculate rotation angle based on distance from center
    // Limit rotation to a maximum of 10 degrees
    const rotateY = ((mousePosition.x - centerX) / centerX) * 5;
    const rotateX = ((mousePosition.y - centerY) / centerY) * -5;
    
    return { x: rotateX, y: rotateY };
  };
  
  const rotation = calculateRotation();
  
  const servantStyles = {
    left: position === "left" ? "5%" : "auto",
    right: position === "right" ? "5%" : "auto",
    top: position === "left" ? "30%" : "60%",
    transform: `perspective(1000px) rotateX(${rotation.x}deg) rotateY(${rotation.y}deg)`,
    transformStyle: "preserve-3d" as "preserve-3d",
  };
  
  return (
    <motion.div 
      className="fixed pointer-events-none z-10"
      style={servantStyles}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 0.7, scale: 1 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <div className="w-32 h-40 relative" style={{ transformStyle: "preserve-3d" }}>
        {/* 3D Servant Figure */}
        <div className="absolute inset-0 flex items-center justify-center">
          <svg
            width="130"
            height="160"
            viewBox="0 0 130 160"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            style={{
              filter: "drop-shadow(0 0 10px rgba(255, 255, 255, 0.2))",
              transform: `translateZ(20px)`,
            }}
          >
            {/* Head */}
            <ellipse 
              cx="65" 
              cy="45" 
              rx="25" 
              ry="30" 
              fill="rgba(255, 255, 255, 0.03)" 
              stroke="rgba(255, 255, 255, 0.3)" 
              strokeWidth="1"
            />
            
            {/* Face Features */}
            <circle cx="55" cy="40" r="3" fill="rgba(255, 255, 255, 0.5)" />
            <circle cx="75" cy="40" r="3" fill="rgba(255, 255, 255, 0.5)" />
            <path 
              d="M60 55 Q65 58 70 55" 
              stroke="rgba(255, 255, 255, 0.4)" 
              strokeWidth="1" 
              fill="none"
            />
            
            {/* Body */}
            <path 
              d="M50 75 L40 120 Q65 130 90 120 L80 75 Q65 80 50 75Z" 
              fill="rgba(255, 255, 255, 0.03)" 
              stroke="rgba(255, 255, 255, 0.2)" 
              strokeWidth="1"
            />
            
            {/* Shoulders */}
            <path 
              d="M50 75 Q65 85 80 75" 
              stroke="rgba(255, 255, 255, 0.3)" 
              strokeWidth="1" 
              fill="none"
            />
            
            {/* Arms */}
            <path 
              d="M50 75 L30 105" 
              stroke="rgba(255, 255, 255, 0.3)" 
              strokeWidth="1"
            />
            <path 
              d="M80 75 L100 105" 
              stroke="rgba(255, 255, 255, 0.3)" 
              strokeWidth="1"
            />
            
            {/* Decorative Elements */}
            <circle 
              cx="65" 
              cy="95" 
              r="5" 
              fill="none" 
              stroke="rgba(255, 255, 255, 0.6)" 
              strokeWidth="1"
            />
            <circle 
              cx="65" 
              cy="95" 
              r="2" 
              fill="rgba(255, 255, 255, 0.8)"
            />
            
            {/* Connecting Lines */}
            {[1, 2, 3, 4, 5].map((i) => (
              <path 
                key={i}
                d={`M${40 + (i * 10)} 120 L${40 + (i * 10)} 125`} 
                stroke="rgba(255, 255, 255, 0.15)" 
                strokeWidth="1"
              />
            ))}
          </svg>
        </div>
        
        {/* Glowing Orb */}
        <motion.div 
          className="absolute"
          style={{ 
            left: position === "left" ? "85px" : "20px", 
            top: "105px",
            width: "15px",
            height: "15px",
            borderRadius: "50%",
            background: "rgba(255, 255, 255, 0.1)",
            boxShadow: "0 0 10px rgba(255, 255, 255, 0.5), 0 0 20px rgba(255, 255, 255, 0.3)",
            transform: `translateZ(30px)`,
          }}
          animate={{
            opacity: [0.3, 0.8, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        
        {/* Base shadow */}
        <div
          style={{
            position: "absolute",
            bottom: "-15px",
            left: "20px",
            width: "90px",
            height: "20px",
            borderRadius: "50%",
            background: "radial-gradient(rgba(255, 255, 255, 0.2), transparent 70%)",
            transform: "rotateX(90deg) translateZ(-10px)",
          }}
        />
      </div>
    </motion.div>
  );
};

export default Servant3D;