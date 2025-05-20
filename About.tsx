import { motion } from "framer-motion";

const About = () => {
  const details = [
    { label: "Age", value: "14 years" },
    { label: "Location", value: "Pune, MH" },
    { label: "Education", value: "Class 9" },
    { label: "Expertise", value: "Ethical Hacking" },
    { label: "Birthday", value: "Feb 12, 2011" },
    { label: "YouTube", value: "ManishCountryBall" }
  ];

  return (
    <motion.section 
      id="about" 
      className="mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="relative z-10 p-8 rounded-md border border-primary/10 soft-glow">
        <div className="absolute -top-3 left-4 bg-background px-4 text-sm text-primary font-medium">
          About Me
        </div>
        
        <h2 className="font-display text-3xl font-bold mb-6 text-primary mt-4">Manish Regar</h2>
        
        <div className="space-y-6">
          <p className="text-primary/90 leading-relaxed">Hello, I'm Manish Regar, a 14-year-old tech enthusiast and ethical hacker born on February 12, 2011, hailing from Pune, Maharashtra, with roots in a small village in Rajasthan. Currently in Class 9, I'm passionate about using technology to make the internet safer and more accessible for everyone.</p>
          
          <p className="text-primary/90 leading-relaxed">My motto, "Honesty is the Best Policy", guides everything I do—from helping companies secure their systems to creating engaging content on my YouTube channel, ManishCountryBall.</p>
          
          <p className="text-primary/90 leading-relaxed">As a self-taught hacker with a big heart, I specialize in identifying vulnerabilities like price glitches on e-commerce platforms, where users could exploit systems to purchase items at unfairly low prices.</p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
            {details.map((item, index) => (
              <motion.div 
                key={index} 
                className="border border-primary/10 p-3 rounded-md text-center soft-glow"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
              >
                <p className="font-medium text-primary/70 text-sm mb-1">{item.label}</p>
                <p className="text-primary">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default About;
