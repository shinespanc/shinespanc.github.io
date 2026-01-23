import { motion } from "framer-motion";

const images = [
  // Manicure / Nails
  "https://images.unsplash.com/photo-1604654894610-df63bc536371?q=80&w=2070&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1519014816548-bf5fe059e98b?q=80&w=2070&auto=format&fit=crop",
  // Facial / Spa
  "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=2070&auto=format&fit=crop",
  // Interior / Vibe
  "https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?q=80&w=2070&auto=format&fit=crop",
  // Makeup / Brows
  "https://images.unsplash.com/photo-1522337660859-02fbefca4702?q=80&w=2069&auto=format&fit=crop",
  // Pedicure
  "https://images.unsplash.com/photo-1519415387722-a1c3bbef716c?q=80&w=2070&auto=format&fit=crop"
];

export default function Gallery() {
  return (
    <div className="w-full bg-background pb-24">
       {/* Header */}
       <div className="bg-secondary/30 pt-32 pb-16 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="font-display text-5xl md:text-6xl font-bold mb-6 text-foreground">Our Gallery</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A glimpse into our world of beauty, relaxation, and style.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((src, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.1 }}
              className="group relative aspect-square overflow-hidden rounded-xl bg-muted"
            >
              <img
                src={src}
                alt={`Gallery image ${idx + 1}`}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.div>
          ))}
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-muted-foreground">Follow us on social media for more daily updates!</p>
          <div className="mt-4 flex justify-center gap-4">
            <a href="https://www.instagram.com/shinebeauty459/" target="_blank" className="font-semibold text-primary hover:underline">Instagram</a>
            <span className="text-muted-foreground">•</span>
            <a href="https://www.facebook.com/groups/906064359948904/posts/1957466918141971/" target="_blank" className="font-semibold text-primary hover:underline">Facebook</a>
          </div>
        </div>
      </div>
    </div>
  );
}
