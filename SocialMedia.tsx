import { motion } from "framer-motion";

const SocialMedia = () => {
  const socialLinks = [
    {
      platform: "YouTube",
      username: "@ManishCountryBall",
      url: "https://youtube.com/@ManishCountryBall",
      icon: "fab fa-youtube",
      description: "Tech tutorials, hacking insights, and fun content"
    },
    {
      platform: "Instagram",
      username: "@manish_regar369",
      url: "https://instagram.com/manish_regar369",
      icon: "fab fa-instagram",
      description: "Daily updates and behind-the-scenes content"
    },
    {
      platform: "Twitter",
      username: "@Mr_manish_regar",
      url: "https://twitter.com/Mr_manish_regar",
      icon: "fab fa-twitter",
      description: "Tech news, tips, and professional insights"
    }
  ];

  return (
    <motion.section 
      id="social" 
      className="mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="relative z-10 p-8 rounded-md border border-primary/10 soft-glow">
        <div className="absolute -top-3 left-4 bg-background px-4 text-sm text-primary font-medium">
          Social Media
        </div>
        
        <h2 className="font-display text-3xl font-bold mb-6 text-primary mt-4">Connect With Me</h2>
        
        <p className="mb-8 text-primary/80 leading-relaxed">Follow me on social media to stay updated with my latest projects, content, and services. I regularly share helpful tips, tutorials, and insights from my work.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {socialLinks.map((social, index) => (
            <motion.div
              key={index}
              className="border border-primary/10 rounded-md p-6 soft-glow"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="flex flex-col items-center text-center mb-4">
                <div className="w-16 h-16 rounded-full border border-primary/20 flex items-center justify-center mb-3">
                  <i className={`${social.icon} text-primary text-3xl`}></i>
                </div>
                <h3 className="font-display text-xl font-bold text-primary">{social.platform}</h3>
                <p className="text-primary/70 text-sm">{social.username}</p>
              </div>
              
              <p className="text-primary/80 text-sm text-center mb-5">{social.description}</p>
              
              <motion.a 
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center border border-primary/20 py-2 px-4 rounded-md button-hover soft-glow text-primary text-sm"
                whileTap={{ scale: 0.98 }}
              >
                <i className={`${social.icon} mr-2`}></i>
                Follow Me
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default SocialMedia;
