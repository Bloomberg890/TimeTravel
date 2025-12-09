import { motion } from "motion/react";
import { Zap } from "lucide-react";

interface Moment {
  id: string;
  title: string;
  year: string;
  image: string;
  gradient: string;
  eraId: string; // Added eraId mapping
}

const moments: Moment[] = [
  {
    id: "pyramids",
    title: "Construction of the Great Pyramids",
    year: "2560 BC",
    image:
      "https://images.unsplash.com/photo-1601313593484-11d32ff193c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaXN0b3JpY2FsJTIwbW9udW1lbnQlMjBhbmNpZW50fGVufDF8fHx8MTc2NTI1NTAwM3ww&ixlib=rb-4.1.0&q=80&w=1080",
    gradient:
      "from-amber-900/80 via-orange-900/60 to-transparent",
    eraId: "ancient",
  },
  {
    id: "space",
    title: "First Human in Space",
    year: "1961 AD",
    image:
      "https://images.unsplash.com/photo-1758656476421-e52b455791a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc3Ryb25hdXQlMjBzcGFjZSUyMGZ1dHVyZXxlbnwxfHx8fDE3NjUyNTUwMDR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    gradient:
      "from-purple-900/80 via-blue-900/60 to-transparent",
    eraId: "modern",
  },
  {
    id: "nebula",
    title: "Discovery of Parallel Dimensions",
    year: "2245 AD",
    image:
      "https://images.unsplash.com/photo-1681673819379-a183d9acf860?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFjZSUyMG5lYnVsYSUyMGNvc21pY3xlbnwxfHx8fDE3NjUyMDg4NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080",
    gradient:
      "from-pink-900/80 via-purple-900/60 to-transparent",
    eraId: "future",
  },
  {
    id: "castle",
    title: "Age of Medieval Kingdoms",
    year: "1066 AD",
    image:
      "https://images.unsplash.com/photo-1485465053475-dd55ed3894b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpZXZhbCUyMGNhc3RsZXxlbnwxfHx8fDE3NjUyMzc5NTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    gradient:
      "from-slate-900/80 via-blue-900/60 to-transparent",
    eraId: "medieval",
  },
];

interface FeaturedMomentsProps {
  onMomentClick?: (momentId: string) => void;
}

export function FeaturedMoments({ onMomentClick }: FeaturedMomentsProps) {
  return (
    <section className="py-24 px-6 relative">
      <div className="container mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-3 mb-4">
            <Zap className="w-8 h-8 text-purple-400" />
            <h2 className="text-glow-gold bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
              Featured Moments
            </h2>
          </div>
          <p className="text-slate-400 max-w-2xl mx-auto">
            Witness the pivotal events that defined existence
            across all timelines
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {moments.map((moment, index) => (
            <motion.div
              key={moment.id}
              className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              onClick={() => onMomentClick?.(moment.id)}
            >
              {/* Background Image */}
              <motion.img
                src={moment.image}
                alt={moment.title}
                className="absolute inset-0 w-full h-full object-cover"
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.6 }}
              />

              {/* Gradient Overlay */}
              <div
                className={`absolute inset-0 bg-gradient-to-t ${moment.gradient}`}
              />

              {/* Holographic Border */}
              <motion.div
                className="absolute inset-0 border-2 border-transparent rounded-2xl"
                whileHover={{
                  borderColor: "rgba(255, 0, 255, 0.5)",
                  boxShadow: "0 0 40px rgba(255, 0, 255, 0.3)",
                }}
                transition={{ duration: 0.3 }}
              />

              {/* Glass Panel */}
              <div className="absolute inset-0 glass opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              {/* Content */}
              <div className="relative z-10 h-full flex flex-col justify-end p-8">
                {/* Year Badge */}
                <motion.div
                  className="absolute top-6 right-6 px-4 py-2 rounded-full glass-strong"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + index * 0.1 }}
                >
                  <span className="text-cyan-300">
                    {moment.year}
                  </span>
                </motion.div>

                {/* Title */}
                <motion.h3
                  className="text-white mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  {moment.title}
                </motion.h3>

                {/* View Button */}
                <motion.button
                  className="self-start px-6 py-3 rounded-full glass-strong border border-cyan-400/30 hover:border-cyan-400 text-cyan-400 opacity-0 group-hover:opacity-100 transition-all duration-300"
                  whileHover={{
                    scale: 1.05,
                    boxShadow:
                      "0 0 20px rgba(0, 229, 255, 0.3)",
                  }}
                  whileTap={{ scale: 0.95 }}
                  onClick={(e) => {
                    e.stopPropagation();
                    onMomentClick?.(moment.id);
                  }}
                >
                  Experience
                </motion.button>
              </div>

              {/* Corner Accent */}
              <motion.div
                className="absolute top-0 left-0 w-32 h-32 opacity-0 group-hover:opacity-100"
                initial={{ scale: 0, rotate: -45 }}
                whileHover={{ scale: 1, rotate: 0 }}
                transition={{ duration: 0.4 }}
              >
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-cyan-400 to-transparent" />
                <div className="absolute top-0 left-0 h-full w-1 bg-gradient-to-b from-cyan-400 to-transparent" />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}