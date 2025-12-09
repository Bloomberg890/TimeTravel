import { motion } from "motion/react";
import { ArrowLeft, Zap } from "lucide-react";

interface EraFutureProps {
  onBack: () => void;
}

export function EraFuture({ onBack }: EraFutureProps) {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-950 via-pink-950 to-slate-950" />
      
      {/* Hero Banner */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1700593953156-13b945d76e9c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmdXR1cmlzdGljJTIwY2l0eSUyMHRlY2hub2xvZ3l8ZW58MXx8fHwxNzY1MjA2MjY0fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Far Future"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-purple-950 via-purple-950/50 to-transparent" />
        
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="text-center">
            <Zap className="w-16 h-16 text-purple-400 mx-auto mb-6" />
            <h1 className="text-purple-400 neon-glow-magenta mb-4">Far Future</h1>
            <p className="text-purple-300/80">2100 - 3000</p>
          </div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6 py-12">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="glass-strong rounded-3xl p-8 md:p-12 mb-8">
            <h2 className="text-purple-400 mb-6">The Transcendent Era</h2>
            <div className="space-y-4 text-slate-300">
              <p>
                Venture into the speculative realm of tomorrow where humanity has transcended current limitations through advanced technology, space colonization, and the merger of biological and artificial intelligence. The Far Future represents our aspirations and potential destinies.
              </p>
              <p>
                Imagine cities that float in the clouds or exist beneath the ocean, powered by fusion energy and managed by benevolent AI systems. Humanity has established colonies on Mars, the moons of Jupiter, and beyond, creating a true interplanetary civilization connected by faster-than-light communication.
              </p>
              <p>
                Nanotechnology has revolutionized medicine, extending lifespans and enhancing human capabilities. Climate restoration projects have healed the Earth, while advanced recycling and clean energy have created sustainable abundance. Virtual reality and neural interfaces blur the lines between physical and digital existence.
              </p>
              <p>
                The challenges of this era include maintaining our humanity in an age of enhancement, governing a civilization spanning multiple worlds, and ensuring that advanced technology serves the wellbeing of all. The Far Future is not predetermined—it is shaped by the choices we make today.
              </p>
            </div>
          </div>

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
            transition={{ delay: 0.5 }}
          >
            <ArrowLeft className="w-5 h-5 text-purple-300 group-hover:-translate-x-1 transition-transform" />
            <span className="text-purple-300">Back to Timeline</span>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
