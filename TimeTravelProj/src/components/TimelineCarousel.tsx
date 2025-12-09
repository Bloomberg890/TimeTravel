import { motion } from "motion/react";
import { Clock, Sparkles } from "lucide-react";

interface Era {
  id: string;
  title: string;
  period: string;
  image: string;
  color: string;
}

const eras: Era[] = [
  {
    id: "ancient",
    title: "Ancient Civilizations",
    period: "3000 BC - 500 AD",
    image: "https://images.unsplash.com/photo-1758546705512-2071bf8dc17e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmNpZW50JTIwcHlyYW1pZHMlMjBjaXZpbGl6YXRpb258ZW58MXx8fHwxNzY1MjU1MDAxfDA&ixlib=rb-4.1.0&q=80&w=1080",
    color: "from-amber-500/30 to-orange-500/30",
  },
  {
    id: "medieval",
    title: "Medieval Age",
    period: "500 - 1500 AD",
    image: "https://images.unsplash.com/photo-1485465053475-dd55ed3894b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpZXZhbCUyMGNhc3RsZXxlbnwxfHx8fDE3NjUyMzc5NTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    color: "from-slate-500/30 to-blue-500/30",
  },
  {
    id: "industrial",
    title: "Industrial Revolution",
    period: "1760 - 1840",
    image: "https://images.unsplash.com/photo-1764114441005-df7e660bc2c8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwcmV2b2x1dGlvbiUyMGZhY3Rvcnl8ZW58MXx8fHwxNzY1MjQ3MzQ2fDA&ixlib=rb-4.1.0&q=80&w=1080",
    color: "from-gray-500/30 to-zinc-500/30",
  },
  {
    id: "modern",
    title: "Modern Day",
    period: "1945 - Present",
    image: "https://images.unsplash.com/photo-1764675107575-7a33cbdb7905?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjaXR5JTIwc2t5bGluZXxlbnwxfHx8fDE3NjUyMTIwMDB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    color: "from-cyan-500/30 to-blue-500/30",
  },
  {
    id: "future",
    title: "Far Future",
    period: "2100 - 3000",
    image: "https://images.unsplash.com/photo-1689443111384-1cf214df988a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwdGVjaG5vbG9neSUyMGFic3RyYWN0fGVufDF8fHx8MTc2NTIxMDM5M3ww&ixlib=rb-4.1.0&q=80&w=1080",
    color: "from-purple-500/30 to-pink-500/30",
  },
];

interface TimelineCarouselProps {
  onEraClick?: (eraId: string) => void;
}

export function TimelineCarousel({ onEraClick }: TimelineCarouselProps) {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Section Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-950/20 to-transparent" />
      
      <div className="container mx-auto relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Clock className="w-8 h-8 text-cyan-400" />
            <h2 className="text-glow bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
              Select Your Era
            </h2>
          </div>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Choose a destination in time and witness the moments that shaped humanity
          </p>
        </motion.div>

        {/* Scrollable Timeline Cards */}
        <div className="relative">
          <div className="flex gap-6 overflow-x-auto pb-8 snap-x snap-mandatory scrollbar-hide">
            {eras.map((era, index) => (
              <motion.div
                key={era.id}
                className="flex-shrink-0 w-80 snap-center"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <motion.div
                  className="group relative h-96 rounded-2xl overflow-hidden glass cursor-pointer"
                  onClick={() => onEraClick?.(era.id)}
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 5,
                    rotateX: -5,
                  }}
                  transition={{ duration: 0.3 }}
                  style={{ transformStyle: "preserve-3d" }}
                >
                  {/* Image */}
                  <img
                    src={era.image}
                    alt={era.title}
                    className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500"
                  />
                  
                  {/* Gradient Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${era.color} to-transparent`} />
                  
                  {/* Holographic Border Effect */}
                  <motion.div
                    className="absolute inset-0 border-2 border-cyan-400/0 group-hover:border-cyan-400/50 rounded-2xl transition-colors duration-300"
                    whileHover={{
                      boxShadow: "0 0 30px rgba(0, 229, 255, 0.3)",
                    }}
                  />

                  {/* Light Trail Effect */}
                  <motion.div
                    className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-cyan-400 to-transparent opacity-0 group-hover:opacity-100"
                    animate={{
                      x: ["-100%", "100%"],
                    }}
                    transition={{
                      duration: 1.5,
                      repeat: 1000000,
                      ease: "linear",
                    }}
                  />

                  {/* Content */}
                  <div className="relative z-10 h-full flex flex-col justify-end p-6">
                    <motion.div
                      initial={{ y: 20, opacity: 0 }}
                      whileHover={{ y: 0, opacity: 1 }}
                      className="mb-3"
                    >
                      <Sparkles className="w-6 h-6 text-cyan-400" />
                    </motion.div>
                    
                    <h3 className="mb-2 text-white">{era.title}</h3>
                    <p className="text-cyan-300/80">{era.period}</p>
                    
                    <motion.div
                      className="mt-4 px-4 py-2 rounded-full glass-strong text-cyan-400 text-center opacity-0 group-hover:opacity-100 transition-opacity"
                      whileHover={{ scale: 1.05 }}
                    >
                      Travel Here
                    </motion.div>
                  </div>
                </motion.div>
              </motion.div>
            ))}
          </div>

          {/* Scroll Gradient Edges */}
          <div className="absolute left-0 top-0 bottom-8 w-32 bg-gradient-to-r from-slate-950 to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-8 w-32 bg-gradient-to-l from-slate-950 to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}