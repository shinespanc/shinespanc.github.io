import { useServices } from "@/hooks/use-services";
import { motion } from "framer-motion";
import { Loader2, ArrowRight } from "lucide-react";
import { BookingButton } from "@/components/BookingButton";

export default function Services() {
  const { data: services, isLoading, error } = useServices();

  if (isLoading) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center">
        <Loader2 className="w-8 h-8 animate-spin text-primary" />
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center text-destructive">
        Failed to load services. Please try again later.
      </div>
    );
  }

  // Group services by category
  const categories = services?.reduce((acc, service) => {
    if (!acc[service.category]) {
      acc[service.category] = [];
    }
    acc[service.category].push(service);
    return acc;
  }, {} as Record<string, typeof services>) || {};

  return (
    <div className="w-full bg-background pb-24">
      {/* Header */}
      <div className="bg-secondary/30 pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 text-foreground">Our Service Menu</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our range of premium beauty treatments designed to help you look and feel your best.
          </p>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 space-y-24">
        {Object.entries(categories).map(([category, items], idx) => (
          <motion.div
            key={category}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
          >
            <div className="flex items-center gap-4 mb-8">
              <h2 className="font-display text-3xl font-bold text-primary">{category}</h2>
              <div className="h-px bg-border flex-grow"></div>
            </div>

            <div className="grid grid-cols-1 gap-6">
              {items.map((service) => (
                <div 
                  key={service.id} 
                  className="group flex flex-col sm:flex-row sm:items-center justify-between p-6 rounded-xl bg-white border border-border shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex-grow pr-4">
                    <div className="flex items-baseline justify-between mb-2">
                      <h3 className="text-xl font-bold font-display text-foreground">{service.name}</h3>
                      <span className="text-lg font-semibold text-primary sm:hidden">{service.price}</span>
                    </div>
                    {service.description && (
                      <p className="text-muted-foreground text-sm leading-relaxed max-w-xl">{service.description}</p>
                    )}
                  </div>
                  <div className="hidden sm:block text-right min-w-[100px]">
                    <span className="block text-xl font-bold text-primary">{service.price}</span>
                  </div>
                </div>
              ))}
            </div>
            
            <div className="mt-8 text-center sm:text-left">
              <BookingButton variant="outline" className="text-sm px-4 py-2" />
            </div>
          </motion.div>
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 mt-24 text-center">
        <div className="bg-primary/5 rounded-3xl p-12">
          <h3 className="font-display text-2xl font-bold mb-4">Don't see what you're looking for?</h3>
          <p className="text-muted-foreground mb-8">
            Check our booking platform for the most up-to-date list of services, specials, and packages.
          </p>
          <BookingButton />
        </div>
      </div>
    </div>
  );
}
