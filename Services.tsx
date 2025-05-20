import { motion } from "framer-motion";

const Services = () => {
  const services = [
    {
      title: "Website Development",
      icon: "fas fa-laptop-code",
      description: "Custom-built websites for personal, business, or e-commerce needs with responsive design, secure coding, SEO optimization, and easy-to-use interfaces.",
      pricing: "Customized quotes based on project complexity.",
      whatsappText: "I'm interested in website development services"
    },
    {
      title: "Bug Finding & Ethical Hacking",
      icon: "fas fa-shield-alt",
      description: "Identifying vulnerabilities like price glitches or security flaws in e-commerce and other systems, with actionable fixes to protect your business.",
      pricing: "Varies by project complexity.",
      whatsappText: "I'm interested in bug finding services"
    },
    {
      title: "OTP Services",
      icon: "fas fa-key",
      description: "Fast, secure OTPs for account verification on any app or platform.",
      pricing: [
        { label: "Any App, Any OTP:", value: "₹10/- (INR)" },
        { label: "Telegram/WhatsApp OTP:", value: "₹76/- (INR)" },
        { label: "Bulk OTPs:", value: "Contact for pricing" }
      ],
      whatsappText: "I'm interested in OTP services"
    },
    {
      title: "Social Media Boosts",
      icon: "fas fa-chart-line",
      description: "Grow your social media presence with likes, followers, comments, or ready accounts.",
      pricing: [
        { label: "Likes/Followers:", value: "Starting at ₹0.50/- per unit" },
        { label: "Instagram Accounts:", value: "₹10/- (INR) per account" },
        { label: "Custom Packages:", value: "Contact for pricing" }
      ],
      whatsappText: "I'm interested in social media boost services"
    }
  ];

  return (
    <motion.section 
      id="services" 
      className="mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="relative z-10 p-8 rounded-md border border-primary/10 soft-glow">
        <div className="absolute -top-3 left-4 bg-background px-4 text-sm text-primary font-medium">
          My Services
        </div>
        
        <h2 className="font-display text-3xl font-bold mb-6 text-primary mt-4">Professional Services</h2>
        
        <p className="mb-8 text-primary/80 leading-relaxed">I offer a variety of affordable, high-quality services to help individuals and businesses succeed online. All services are delivered with transparency, speed, and a commitment to excellence.</p>
        
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index} 
              className="border border-primary/10 rounded-md overflow-hidden soft-glow service-card"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="p-6 border-b border-primary/10">
                <div className="flex items-center mb-3">
                  <div className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center mr-3">
                    <i className={`${service.icon} text-primary`}></i>
                  </div>
                  <h3 className="font-display text-xl font-bold text-primary">{service.title}</h3>
                </div>
                <p className="text-primary/80 text-sm leading-relaxed">{service.description}</p>
              </div>
              
              <div className="p-6">
                <h4 className="text-sm font-medium text-primary mb-3">Pricing</h4>
                
                {Array.isArray(service.pricing) ? (
                  <div className="space-y-2 mb-6">
                    {service.pricing.map((price, i) => (
                      <div key={i} className="flex justify-between text-sm">
                        <span className="text-primary/70">{price.label}</span>
                        <span className="font-medium text-primary">{price.value}</span>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-sm text-primary/70 mb-6">{service.pricing}</p>
                )}
                
                <motion.a 
                  href={`https://wa.me/919371010561?text=${encodeURIComponent(service.whatsappText)}`}
                  className="inline-block w-full text-center border border-primary/20 py-2 px-4 rounded-md button-hover soft-glow text-primary"
                  whileTap={{ scale: 0.98 }}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <i className="fab fa-whatsapp mr-2"></i> 
                  {service.pricing === "Customized quotes based on project complexity." ? "Get a Quote" : "Order Now"}
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Services;
