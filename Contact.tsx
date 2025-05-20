import { motion } from "framer-motion";

const Contact = () => {
  const contactMethods = [
    {
      title: "Primary Contact (24×7)",
      icon: "fab fa-whatsapp",
      description: "Available anytime for urgent inquiries and service requests",
      details: [
        { label: "+91 9371010561" },
        { label: "Message on WhatsApp", url: "https://wa.me/919371010561", isLink: true }
      ]
    },
    {
      title: "Help Support (6 AM to 3 AM IST)",
      icon: "fas fa-headset",
      description: "Technical assistance and general customer support",
      details: [
        { label: "+91 8421210561" },
        { label: "Message on WhatsApp", url: "https://wa.me/918421210561", isLink: true }
      ]
    },
    {
      title: "WhatsApp Support",
      icon: "fab fa-whatsapp",
      description: "Quick questions and information requests",
      details: [
        { label: "Send a Message", url: "https://wa.me/919371010561", isLink: true }
      ]
    }
  ];

  const emailAddresses = [
    {
      title: "General Inquiries",
      icon: "fas fa-envelope",
      email: "Ask.manish.regar@gmail.com",
      description: "For general questions and information requests"
    },
    {
      title: "Business Collaborations",
      icon: "fas fa-briefcase",
      email: "Manishregar@flash.co",
      description: "For partnerships and professional opportunities"
    },
    {
      title: "Orders & Payments",
      icon: "fas fa-shopping-cart",
      email: "manishregar365@gmail.com",
      description: "For service orders and payment-related matters"
    },
    {
      title: "Urgent Requests",
      icon: "fas fa-exclamation-circle",
      email: "Manishregar1010@gmail.com",
      description: "For time-sensitive matters requiring immediate attention"
    }
  ];

  return (
    <motion.section 
      id="contact" 
      className="mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="relative z-10 p-8 rounded-md border border-primary/10 soft-glow">
        <div className="absolute -top-3 left-4 bg-background px-4 text-sm text-primary font-medium">
          Contact
        </div>
        
        <h2 className="font-display text-3xl font-bold mb-6 text-primary mt-4">Get In Touch</h2>
        
        <p className="mb-8 text-primary/80 leading-relaxed">Reach out for inquiries, orders, or collaboration opportunities. I'm available through multiple channels to ensure you can always connect when needed.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="font-display text-xl font-bold mb-5 text-primary inline-flex items-center">
              <span className="w-8 h-8 rounded-full border border-primary/20 flex items-center justify-center mr-2">
                <i className="fas fa-phone text-primary"></i>
              </span>
              Direct Contact
            </h3>
            
            <div className="space-y-5">
              {contactMethods.map((contact, index) => (
                <motion.div 
                  key={index} 
                  className="border border-primary/10 p-5 rounded-md soft-glow"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center mb-3">
                    <div className="w-9 h-9 rounded-full border border-primary/20 flex items-center justify-center mr-3">
                      <i className={`${contact.icon} text-primary`}></i>
                    </div>
                    <h4 className="font-bold text-primary">{contact.title}</h4>
                  </div>
                  
                  <p className="text-sm text-primary/70 mb-3">{contact.description}</p>
                  
                  <div className="space-y-2">
                    {contact.details.map((detail, i) => (
                      detail.isLink ? (
                        <motion.a 
                          key={i}
                          href={detail.url} 
                          className="inline-block w-full text-center border border-primary/20 py-2 px-4 rounded-md button-hover soft-glow text-primary text-sm"
                          whileTap={{ scale: 0.98 }}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <i className={contact.icon === "fab fa-whatsapp" ? "fab fa-whatsapp mr-2" : "fas fa-phone mr-2"}></i>
                          {detail.label}
                        </motion.a>
                      ) : (
                        <p key={i} className="text-sm text-primary mb-1 font-medium">{detail.label}</p>
                      )
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="font-display text-xl font-bold mb-5 text-primary inline-flex items-center">
              <span className="w-8 h-8 rounded-full border border-primary/20 flex items-center justify-center mr-2">
                <i className="fas fa-envelope text-primary"></i>
              </span>
              Email Addresses
            </h3>
            
            <div className="space-y-5">
              {emailAddresses.map((email, index) => (
                <motion.div 
                  key={index} 
                  className="border border-primary/10 p-5 rounded-md soft-glow"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex items-center mb-3">
                    <div className="w-9 h-9 rounded-full border border-primary/20 flex items-center justify-center mr-3">
                      <i className={`${email.icon} text-primary`}></i>
                    </div>
                    <h4 className="font-bold text-primary">{email.title}</h4>
                  </div>
                  
                  <p className="text-sm text-primary/70 mb-3">{email.description}</p>
                  
                  <motion.a 
                    href={`mailto:${email.email}`} 
                    className="inline-block w-full text-center border border-primary/20 py-2 px-4 rounded-md button-hover soft-glow text-primary text-sm"
                    whileTap={{ scale: 0.98 }}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fas fa-envelope mr-2"></i>
                    {email.email}
                  </motion.a>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Contact;
