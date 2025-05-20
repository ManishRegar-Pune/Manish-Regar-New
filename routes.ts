import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";

interface MessageData {
  name: string;
  email: string;
  message: string;
  timestamp: number;
}

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission route
  app.post('/api/contact', async (req, res) => {
    try {
      const { name, email, message } = req.body;
      
      if (!name || !email || !message) {
        return res.status(400).json({ message: 'Name, email, and message are required' });
      }
      
      const messageData: MessageData = {
        name,
        email,
        message,
        timestamp: Date.now()
      };
      
      // Store the message in memory
      // This is a simple implementation; in a real app, you might want to
      // extend the storage class to handle messages specifically
      console.log('Contact message received:', messageData);
      
      return res.status(200).json({ 
        success: true,
        message: 'Message received successfully'
      });
    } catch (error) {
      console.error('Error processing contact form submission:', error);
      return res.status(500).json({ 
        success: false,
        message: 'Failed to process your message' 
      });
    }
  });

  // AI chat message route
  app.post('/api/chat', async (req, res) => {
    try {
      const { message } = req.body;
      
      if (!message) {
        return res.status(400).json({ message: 'Message is required' });
      }
      
      // Simple response for demonstration
      return res.status(200).json({
        response: "Thanks for your message! Manish will get back to you soon. Is there anything specific you'd like to know about his services?"
      });
    } catch (error) {
      console.error('Error processing chat message:', error);
      return res.status(500).json({ message: 'Failed to process your message' });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
