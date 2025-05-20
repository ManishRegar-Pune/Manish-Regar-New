import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MenuPanel from "@/components/MenuPanel";
import ChatSupport from "@/components/ChatSupport";

// Sections
import About from "@/sections/About";
import Mission from "@/sections/Mission";
import Abilities from "@/sections/Abilities";
import Services from "@/sections/Services";
import Shop from "@/sections/Shop";
import SocialMedia from "@/sections/SocialMedia";
import Contact from "@/sections/Contact";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [chatOpen, setChatOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const toggleChat = () => {
    setChatOpen(!chatOpen);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <MenuPanel isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      <ChatSupport isOpen={chatOpen} onClose={() => setChatOpen(!chatOpen)} />
      
      <Header onMenuToggle={toggleMenu} />
      
      <main className="relative container mx-auto px-4 py-8 flex-grow">
        <About />
        <Mission />
        <Abilities />
        <Services />
        <Shop />
        <SocialMedia />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
};

export default Home;
