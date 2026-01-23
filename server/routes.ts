import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { api } from "@shared/routes";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Service Routes
  app.get(api.services.list.path, async (req, res) => {
    const services = await storage.getServices();
    res.json(services);
  });

  // Seed Data
  await seedDatabase();

  return httpServer;
}

async function seedDatabase() {
  const existingServices = await storage.getServices();
  if (existingServices.length > 0) return;

  const initialServices = [
    // Nails & Spa
    { category: "Nails & Spa", name: "Classic Manicure", price: "$25+" },
    { category: "Nails & Spa", name: "Gel Manicure / Shellac", price: "$40+" },
    { category: "Nails & Spa", name: "Spa Pedicure", price: "$45+" },
    { category: "Nails & Spa", name: "Nail Art & Enhancements", price: "Varies" },
    
    // Facials & Skin Care
    { category: "Facials & Skin Care", name: "Glow Facial Treatments", price: "$85+" },
    { category: "Facials & Skin Care", name: "Deep Cleanse Facial", price: "$95+" },
    { category: "Facials & Skin Care", name: "Anti-Aging & Hydration Facials", price: "$110+" },
    { category: "Facials & Skin Care", name: "Customized Skin Care Plans", price: "Consultation" },

    // Brows, Lashes & Threading
    { category: "Brows, Lashes & Threading", name: "Eyebrow Shaping & Threading", price: "$15+" },
    { category: "Brows, Lashes & Threading", name: "Brow Lamination & Tint", price: "$75+" },
    { category: "Brows, Lashes & Threading", name: "Lash Lift & Tint", price: "$85+" },

    // Waxing & Hair Removal
    { category: "Waxing & Hair Removal", name: "Full Body Waxing", price: "Varies" },
    { category: "Waxing & Hair Removal", name: "Facial Waxing", price: "$15+" },
    { category: "Waxing & Hair Removal", name: "Personal Waxing Services", price: "Varies" },

    // Massage & Body Services
    { category: "Massage & Body Services", name: "Relaxing Massage Sessions", price: "$80/hr" },
    { category: "Massage & Body Services", name: "Specialty Body Treatments", price: "$100+" },

    // Hair Services
    { category: "Hair Services", name: "Styling & Blowouts", price: "$45+" },
    { category: "Hair Services", name: "Hair Extensions", price: "Consultation" },
    { category: "Hair Services", name: "Specialty Treatments", price: "$65+" },
  ];

  for (const service of initialServices) {
    await storage.createService(service);
  }
}
