import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import nodemailer from "nodemailer";

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission route
  app.post('/api/contact', async (req, res) => {
    try {
      const { name, email, phone, service, message } = req.body;
      
      // Validate required fields
      if (!name || !email || !phone || !service || !message) {
        return res.status(400).json({ message: "All fields are required" });
      }
      
      // Email logic would go here with nodemailer in a production environment
      // For now, just log the data and return success
      console.log("Contact form submission:", {
        name,
        email,
        phone,
        service,
        message,
        timestamp: new Date()
      });
      
      return res.status(200).json({ message: "Message received successfully" });
    } catch (error) {
      console.error("Error processing contact form:", error);
      return res.status(500).json({ message: "An error occurred while processing your request" });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
