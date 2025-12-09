import { motion } from "motion/react";
import { ArrowLeft, Sparkles } from "lucide-react";

interface MomentDimensionsProps {
  onBack: () => void;
}

export function MomentDimensions({ onBack }: MomentDimensionsProps) {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-950 via-pink-950 to-slate-950" />

      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              background: i % 2 === 0 ? "#a855f7" : "#ec4899",
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.2, 1, 0.2],
              scale: [1, 2, 1],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Hero Banner */}
      <div className="relative h-[60vh] overflow-hidden">
        <motion.img
          src="https://images.unsplash.com/photo-1681673819379-a183d9acf860?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFjZSUyMG5lYnVsYSUyMGNvc21pY3xlbnwxfHx8fDE3NjUyMDg4NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Discovery of Parallel Dimensions"
          className="w-full h-full object-cover opacity-70"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.7 }}
          transition={{ duration: 1.2 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-purple-950 via-purple-950/50 to-transparent" />

        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="text-center">
            <Sparkles className="w-16 h-16 text-purple-400 mx-auto mb-6" />
            <h1 className="text-purple-300 neon-glow-magenta mb-4">
              Discovery of Parallel Dimensions
            </h1>
            <p className="text-purple-300/80">2245 AD</p>
          </div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6 py-12">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="glass-strong rounded-3xl p-8 md:p-12 mb-8 border border-purple-500/20">
            <h2 className="text-purple-400 mb-6">Beyond Reality&apos;s Veil</h2>
            <div className="space-y-4 text-slate-300">
              <p>
                In 2245, humanity achieved what was once thought impossible—the discovery and verification of parallel dimensions existing alongside our own reality. This groundbreaking revelation came from the Quantum Multiverse Observatory, which detected coherent patterns of quantum entanglement that could only be explained by the existence of alternate realities.
              </p>
              <p>
                The discovery fundamentally transformed our understanding of existence itself. Scientists developed the Dimensional Resonance Detector, capable of mapping the boundaries between our universe and neighboring dimensional planes. These parallel dimensions exist in the same physical space as our own, separated only by differences in quantum frequency and dimensional vibration.
              </p>
              <p>
                Early observations revealed that some parallel dimensions closely mirror our own reality with subtle variations, while others exhibit completely different physical laws and constants. This discovery sparked a new era of exploration—not outward into space, but sideways into the infinite possibilities of the multiverse.
              </p>
              <p>
                The implications are staggering: unlimited energy from dimensional taps, the potential for faster-than-light communication through dimensional bridges, and perhaps most profound of all, the realization that every choice creates new branches of reality, making our universe far more vast and mysterious than we ever imagined.
              </p>
            </div>
          </div>

          {/* Image Gallery */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="relative h-64 rounded-2xl overflow-hidden glass border border-pink-500/20">
              <img
                src="https://images.unsplash.com/photo-1462331940025-496dfbfc7564?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3NtaWMlMjBuZWJ1bGF8ZW58MXx8fHwxNzY1MjUzMjI5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Cosmic Nebula"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden glass border border-purple-500/20">
              <img
                src="https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnYWxheHklMjBzcGFjZXxlbnwxfHx8fDE3NjUyNTMyMjl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Galaxy Space"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Back Button */}
          <motion.button
            onClick={onBack}
            className="group flex items-center gap-3 px-8 py-4 rounded-full glass-strong border border-purple-400/30 hover:border-purple-400 transition-all mx-auto"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(168, 85, 247, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <ArrowLeft className="w-5 h-5 text-purple-300 group-hover:-translate-x-1 transition-transform" />
            <span className="text-purple-300">Back to Featured Moments</span>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
