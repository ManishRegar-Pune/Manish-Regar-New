import { motion } from "framer-motion";

const Games = () => {
  const games = [
    {
      title: "Math Challenge",
      description: "Test your math skills with this fast-paced game featuring multiple difficulty levels and competitive leaderboards."
    },
    {
      title: "Math Puzzle",
      description: "Solve challenging puzzles that combine logical thinking and mathematical concepts in a visually stunning environment."
    }
  ];

  return (
    <motion.section 
      id="games" 
      className="mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="relative z-10 bg-dark/50 backdrop-blur-sm p-6 rounded-2xl border border-accent/30 shadow-xl">
        <div className="absolute -top-3 -right-3 bg-accent text-xs text-light px-3 py-1 rounded-full">
          Math Games
        </div>
        <h2 className="font-display text-3xl font-bold mb-4 text-accent">Math Games</h2>
        <p className="mb-6">Check out these modern and fun math games I've developed to make learning enjoyable!</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {games.map((game, index) => (
            <motion.div 
              key={index} 
              className="bg-dark/70 rounded-xl border border-accent/30 overflow-hidden service-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="h-48 bg-accent/20 flex items-center justify-center">
                <svg 
                  viewBox="0 0 200 100" 
                  fill="none" 
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-full h-full"
                >
                  <rect width="200" height="100" fill="url(#gameGradient)" />
                  <path d="M100 20L120 50L100 80L80 50L100 20Z" fill="rgba(255,255,255,0.2)" stroke="rgba(255,255,255,0.5)" strokeWidth="2" />
                  <text x="100" y="53" textAnchor="middle" fill="white" fontFamily="monospace" fontSize="10">{game.title}</text>
                  {index === 0 ? (
                    <>
                      <text x="70" y="40" textAnchor="middle" fill="white" fontFamily="monospace" fontSize="14">1+2=?</text>
                      <text x="130" y="70" textAnchor="middle" fill="white" fontFamily="monospace" fontSize="14">5×6=?</text>
                    </>
                  ) : (
                    <>
                      <rect x="60" y="30" width="20" height="20" stroke="white" fill="none" />
                      <text x="70" y="45" textAnchor="middle" fill="white" fontFamily="monospace" fontSize="14">9</text>
                      <rect x="120" y="60" width="20" height="20" stroke="white" fill="none" />
                      <text x="130" y="75" textAnchor="middle" fill="white" fontFamily="monospace" fontSize="14">?</text>
                    </>
                  )}
                  <defs>
                    <linearGradient id="gameGradient" x1="0" y1="0" x2="200" y2="100" gradientUnits="userSpaceOnUse">
                      <stop stopColor="#10B981" stopOpacity="0.3" />
                      <stop offset="1" stopColor="#10B981" stopOpacity="0.05" />
                    </linearGradient>
                  </defs>
                </svg>
              </div>
              <div className="p-4">
                <h3 className="font-display text-xl font-bold text-accent mb-2">{game.title}</h3>
                <p className="mb-4">{game.description}</p>
                <motion.button 
                  className="inline-block w-full text-center bg-accent text-light py-2 px-4 rounded-lg hover:bg-accent/80 transition-colors teal-glow animate-pulse-slow"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <i className="fas fa-gamepad mr-2"></i> Play Now
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Games;
