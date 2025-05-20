import { motion } from "framer-motion";

const Shop = () => {
  const products = [
    {
      title: "Premium YouTube",
      price: "₹30/-",
      icon: "fab fa-youtube",
      description: "Get 1 month of YouTube Premium at a fraction of the normal cost.",
      whatsappText: "I'd like to purchase YouTube Premium for ₹30"
    },
    {
      title: "Discord Nitro",
      price: "₹50/-",
      icon: "fab fa-discord",
      description: "Enjoy Discord Nitro benefits at an affordable price point.",
      whatsappText: "I'd like to purchase Discord Nitro for ₹50"
    },
    {
      title: "Instagram Account",
      price: "₹10/-",
      icon: "fab fa-instagram",
      description: "Get a ready-to-use Instagram account for your projects.",
      whatsappText: "I'd like to purchase an Instagram account for ₹10"
    },
    {
      title: "Single OTP",
      price: "₹10/-",
      icon: "fas fa-key",
      description: "Get an OTP for any app quickly and securely.",
      whatsappText: "I'd like to purchase a single OTP for ₹10"
    },
    {
      title: "WhatsApp OTP",
      price: "₹76/-",
      icon: "fab fa-whatsapp",
      description: "Special OTP for WhatsApp verification delivered instantly.",
      whatsappText: "I'd like to purchase a WhatsApp OTP for ₹76"
    },
    {
      title: "Custom Order",
      price: "Varies",
      icon: "fas fa-shopping-basket",
      description: "Need something specific? Contact me for custom orders.",
      whatsappText: "I'd like to inquire about a custom order"
    }
  ];

  return (
    <motion.section 
      id="selling" 
      className="mb-16"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <div className="relative z-10 p-8 rounded-md border border-primary/10 soft-glow">
        <div className="absolute -top-3 left-4 bg-background px-4 text-sm text-primary font-medium">
          Shop
        </div>
        
        <h2 className="font-display text-3xl font-bold mb-6 text-primary mt-4">Products & Services</h2>
        
        <p className="mb-8 text-primary/80 leading-relaxed">Get the services you need at unbeatable prices. All purchases are processed securely and delivered quickly to meet your specific requirements.</p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {products.map((product, index) => (
            <motion.div 
              key={index} 
              className="border border-primary/10 rounded-md p-5 soft-glow service-card"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ y: -5 }}
            >
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center">
                  <div className="w-9 h-9 rounded-full border border-primary/20 flex items-center justify-center mr-3">
                    <i className={`${product.icon} text-primary`}></i>
                  </div>
                  <h3 className="font-display font-bold text-primary">{product.title}</h3>
                </div>
                <span className="border border-primary/20 text-primary px-2 py-1 rounded-md text-xs font-medium">{product.price}</span>
              </div>
              
              <p className="text-primary/80 text-sm mb-4 leading-relaxed">{product.description}</p>
              
              <motion.a 
                href={`https://wa.me/919371010561?text=${encodeURIComponent(product.whatsappText)}`}
                className="inline-block w-full text-center border border-primary/20 py-2 px-4 rounded-md button-hover soft-glow text-primary text-sm"
                whileTap={{ scale: 0.98 }}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="fab fa-whatsapp mr-2"></i>
                {product.title === "Custom Order" ? "Inquire Now" : "Buy Now"}
              </motion.a>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default Shop;
