import { motion } from "framer-motion";

const Mission = () => {
  const values = [
    { label: "Honesty", icon: "fas fa-heart" },
    { label: "Integrity", icon: "fas fa-shield-alt" },
    { label: "Innovation", icon: "fas fa-lightbulb" },
    { label: "Accessibility", icon: "fas fa-universal-access" },
  ];

  return (
    <motion.section 
      id="mission" 
      className="mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="relative z-10 p-8 rounded-md border border-primary/10 soft-glow">
        <div className="absolute -top-3 left-4 bg-background px-4 text-sm text-primary font-medium">
          My Mission
        </div>
        
        <h2 className="font-display text-3xl font-bold mb-6 text-primary mt-4">My Vision & Purpose</h2>
        
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-2/3">
            <p className="mb-4 text-primary/90 leading-relaxed">My mission is to create a safer, stronger, and more inclusive internet. I aim to protect businesses from vulnerabilities like price glitches and other bugs that could harm their operations or customers.</p>
            
            <p className="mb-4 text-primary/90 leading-relaxed">By identifying and fixing these issues, I help companies save money and maintain trust. I also want to empower individuals and businesses by offering affordable tech solutions, from websites to social media growth.</p>
            
            <p className="text-primary/90 leading-relaxed">Through my YouTube channel and social media, I share knowledge, inspire young people, and show that anyone can achieve their dreams with hard work and honesty.</p>
          </div>
          
          <div className="md:w-1/3">
            <div className="border border-primary/10 p-6 rounded-md soft-glow">
              <h3 className="font-display text-xl font-bold mb-4 text-primary">Core Values</h3>
              
              <div className="grid grid-cols-2 gap-4">
                {values.map((value, index) => (
                  <motion.div
                    key={index}
                    className="border border-primary/10 p-4 rounded-md text-center soft-glow"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-10 h-10 mx-auto rounded-full border border-primary/20 flex items-center justify-center mb-2">
                      <i className={`${value.icon} text-primary`}></i>
                    </div>
                    <p className="text-primary">{value.label}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Mission;
