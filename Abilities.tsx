import { motion } from "framer-motion";

const Abilities = () => {
  const abilities = [
    {
      icon: "fas fa-bug",
      title: "Ethical Hacking",
      description: "I identify price glitches and system vulnerabilities before they can be exploited, helping companies protect their revenue and reputation."
    },
    {
      icon: "fas fa-laptop-code",
      title: "Website Development",
      description: "I create custom websites that are user-friendly, visually appealing, and optimized for performance across all devices."
    },
    {
      icon: "fas fa-key",
      title: "OTP Services",
      description: "I provide fast and secure OTPs for account verifications across various apps and platforms at affordable rates."
    },
    {
      icon: "fas fa-hashtag",
      title: "Social Media Growth",
      description: "I boost your presence on platforms like Instagram, Facebook, and Telegram with safe, effective growth strategies."
    },
    {
      icon: "fas fa-crown",
      title: "Premium Access",
      description: "I offer affordable access to premium services like YouTube Premium, Discord Nitro, and more."
    },
    {
      icon: "fas fa-video",
      title: "Content Creation",
      description: "Through my YouTube channel, I create engaging videos that tell stories, share tech tips, and connect with a global audience."
    }
  ];

  return (
    <motion.section 
      id="abilities" 
      className="mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="relative z-10 p-8 rounded-md border border-primary/10 soft-glow">
        <div className="absolute -top-3 left-4 bg-background px-4 text-sm text-primary font-medium">
          My Abilities
        </div>
        
        <h2 className="font-display text-3xl font-bold mb-6 text-primary mt-4">Professional Skills</h2>
        
        <div className="grid md:grid-cols-3 gap-6">
          {abilities.map((ability, index) => (
            <motion.div 
              key={index} 
              className="border border-primary/10 p-6 rounded-md soft-glow service-card"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="w-12 h-12 rounded-full border border-primary/20 flex items-center justify-center mb-4">
                <i className={`${ability.icon} text-primary text-xl`}></i>
              </div>
              <h3 className="font-display text-xl font-bold mb-3 text-primary">{ability.title}</h3>
              <p className="text-primary/80 text-sm leading-relaxed">{ability.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Abilities;
