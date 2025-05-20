import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Message {
  id: string;
  sender: "user" | "ai";
  text: string;
  timestamp: number;
  isTyping?: boolean;
}

interface ChatSupportProps {
  isOpen: boolean;
  onClose: () => void;
}

const ChatSupport = ({ isOpen, onClose }: ChatSupportProps) => {
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "welcome",
      sender: "ai",
      text: "Hello! I'm Manish Regar's AI assistant. How can I help you today?",
      timestamp: Date.now(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);
  const [mounted, setMounted] = useState(false);

  // Sample AI responses for a more realistic experience
  const aiResponses = [
    "Thanks for your message! I'd be happy to help with any questions about Manish's services.",
    "Manish specializes in ethical hacking, website development, and social media growth. Would you like to know more about any of these services?",
    "Feel free to ask about pricing, availability, or specific services. I'm here to assist you 24/7.",
    "Manish can identify and fix security vulnerabilities in websites and applications. Would you like more information about this service?",
    "Our OTP services start at just ₹10/- per OTP. Would you like me to set up a direct connection with Manish to discuss this further?",
    "Manish is currently available for new projects and consultations. How can we help you specifically?",
  ];

  useEffect(() => {
    setMounted(true);
    return () => setMounted(false);
  }, []);

  useEffect(() => {
    scrollToBottom();
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen, messages]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const generateResponse = (userQuery: string): string => {
    // Simple pattern matching for basic responses
    const query = userQuery.toLowerCase();
    
    if (query.includes("price") || query.includes("cost") || query.includes("charge")) {
      return "Our services have different pricing tiers. Website development starts from a custom quote based on requirements, OTP services from ₹10/-, and social media boosts from ₹0.50/- per unit. Would you like a detailed quote for a specific service?";
    }
    
    if (query.includes("contact") || query.includes("phone") || query.includes("email")) {
      return "You can contact Manish directly at +91 9371010561 (WhatsApp/Call) or via email at Ask.manish.regar@gmail.com. Would you like me to connect you?";
    }
    
    if (query.includes("website") || query.includes("development")) {
      return "Manish creates custom websites with responsive design, secure coding, and SEO optimization. Each project is tailored to the client's specific needs. Would you like to discuss a project?";
    }
    
    if (query.includes("hack") || query.includes("security") || query.includes("bug")) {
      return "Manish specializes in ethical hacking and identifying security vulnerabilities like price glitches. He provides detailed reports and actionable fixes to protect businesses from potential exploits.";
    }
    
    // Return a random response if no patterns match
    return aiResponses[Math.floor(Math.random() * aiResponses.length)];
  };

  const simulateTyping = (text: string, callback: (text: string) => void) => {
    setIsTyping(true);
    
    // Add a typing indicator message
    const typingId = `ai-typing-${Date.now()}`;
    const typingMessage: Message = {
      id: typingId,
      sender: "ai",
      text: "",
      timestamp: Date.now(),
      isTyping: true
    };
    setMessages(prev => [...prev, typingMessage]);
    
    // Calculate typing delay based on message length (making it realistic)
    const typingDelay = Math.min(1000, Math.max(500, text.length * 20));
    
    setTimeout(() => {
      // Remove the typing indicator and add the actual message
      setMessages(prev => prev.filter(m => m.id !== typingId));
      callback(text);
      setIsTyping(false);
    }, typingDelay);
  };

  const handleSendMessage = () => {
    if (!inputValue.trim() || isTyping) return;

    // Add user message
    const userMessage: Message = {
      id: `user-${Date.now()}`,
      sender: "user",
      text: inputValue,
      timestamp: Date.now(),
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInputValue("");

    // Generate and add AI response
    const responseText = generateResponse(userMessage.text);
    simulateTyping(responseText, (text) => {
      setMessages(prev => [...prev, {
        id: `ai-${Date.now()}`,
        sender: "ai",
        text,
        timestamp: Date.now(),
      }]);
    });
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  if (!mounted) return null;

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="fixed bottom-0 right-0 w-full md:w-96 h-[80vh] bg-background/95 backdrop-blur-md z-50 border-t border-l border-primary/10 flex flex-col rounded-t-lg soft-glow"
          >
            <div className="p-4 border-b border-primary/10 flex justify-between items-center">
              <h3 className="font-display font-bold text-primary flex items-center">
                <span className="w-8 h-8 rounded-full border border-primary/20 flex items-center justify-center mr-2">
                  <i className="fas fa-robot text-primary"></i>
                </span>
                Manish AI Assistant
              </h3>
              <motion.button 
                whileTap={{ scale: 0.95 }}
                onClick={onClose} 
                className="w-8 h-8 rounded-full border border-primary/20 flex items-center justify-center soft-glow"
                aria-label="Close chat"
              >
                <i className="fas fa-times text-primary"></i>
              </motion.button>
            </div>
            
            <div className="flex-1 p-4 overflow-y-auto">
              {messages.map((message) => (
                <motion.div 
                  key={message.id} 
                  className={`mb-4 flex ${message.sender === "user" ? "justify-end" : ""}`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  {message.sender === "ai" && (
                    <div className="w-8 h-8 rounded-full border border-primary/20 flex items-center justify-center mr-2 flex-shrink-0">
                      <i className="fas fa-robot text-primary"></i>
                    </div>
                  )}
                  
                  <div 
                    className={`${
                      message.sender === "ai" 
                        ? "border border-primary/10 rounded-lg rounded-tl-none" 
                        : "bg-primary/5 border border-primary/10 rounded-lg rounded-tr-none"
                    } p-3 max-w-[80%] ${message.isTyping ? 'animate-pulse-subtle' : ''}`}
                  >
                    {message.isTyping ? (
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 rounded-full bg-primary/50 animate-bounce" style={{ animationDelay: '0ms' }}></div>
                        <div className="w-2 h-2 rounded-full bg-primary/50 animate-bounce" style={{ animationDelay: '150ms' }}></div>
                        <div className="w-2 h-2 rounded-full bg-primary/50 animate-bounce" style={{ animationDelay: '300ms' }}></div>
                      </div>
                    ) : (
                      <p className="text-sm">{message.text}</p>
                    )}
                  </div>
                  
                  {message.sender === "user" && (
                    <div className="w-8 h-8 rounded-full border border-primary/20 flex items-center justify-center ml-2 flex-shrink-0">
                      <i className="fas fa-user text-primary"></i>
                    </div>
                  )}
                </motion.div>
              ))}
              <div ref={messagesEndRef} />
            </div>
            
            <div className="p-4 border-t border-primary/10">
              <div className="flex gap-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleKeyPress}
                  className="flex-1 bg-background border border-primary/20 rounded-md px-4 py-2 text-sm focus:outline-none focus:border-primary/50 transition-colors"
                  placeholder="Ask me anything..."
                  disabled={isTyping}
                />
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={handleSendMessage}
                  className="w-10 h-10 rounded-full border border-primary/20 flex items-center justify-center soft-glow"
                  disabled={isTyping || !inputValue.trim()}
                >
                  <i className={`fas fa-paper-plane text-primary ${(!inputValue.trim() || isTyping) ? 'opacity-50' : ''}`}></i>
                </motion.button>
              </div>
              <div className="mt-2 text-xs text-center text-primary/40">
                Powered by advanced AI technology
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.button
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ 
          scale: isOpen ? 0 : 1, 
          opacity: isOpen ? 0 : 1 
        }}
        whileTap={{ scale: 0.95 }}
        transition={{ duration: 0.2 }}
        onClick={() => !isOpen && onClose()}
        className="fixed bottom-6 right-6 w-14 h-14 rounded-full border border-primary/30 bg-background flex items-center justify-center shadow-lg z-40 soft-glow"
        aria-label="Open AI chat support"
      >
        <i className="fas fa-robot text-primary"></i>
      </motion.button>
    </>
  );
};

export default ChatSupport;
