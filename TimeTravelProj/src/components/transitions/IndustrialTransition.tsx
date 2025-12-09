import { motion } from "motion/react";
import { useEffect } from "react";
import { Cog } from "lucide-react";

interface IndustrialTransitionProps {
  onComplete: () => void;
}

export function IndustrialTransition({ onComplete }: IndustrialTransitionProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-gradient-to-br from-gray-800 via-zinc-900 to-slate-950">
      {/* Gear wipe effect */}
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          initial={{ rotate: 0, scale: 0 }}
          animate={{ 
            rotate: 360,
            scale: [0, 15, 15],
          }}
          transition={{ 
            duration: 2.5,
            ease: "easeInOut",
          }}
          className="text-zinc-600/40"
        >
          <Cog className="w-24 h-24" />
        </motion.div>
      </div>

      {/* Multiple gears */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute"
          style={{
            left: `${20 + i * 15}%`,
            top: `${30 + (i % 2) * 40}%`,
          }}
          initial={{ rotate: 0, opacity: 0 }}
          animate={{ 
            rotate: i % 2 === 0 ? 360 : -360,
            opacity: [0, 0.6, 0],
          }}
          transition={{ 
            duration: 2.5,
            delay: i * 0.1,
            ease: "linear",
          }}
        >
          <Cog className="w-16 h-16 text-gray-500/50" />
        </motion.div>
      ))}

      {/* Industrial text */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{ duration: 2.5, times: [0, 0.3, 0.7, 1] }}
      >
        <div className="text-center">
          <motion.h2
            className="text-zinc-300 mb-4"
            initial={{ opacity: 0, letterSpacing: "0.5em" }}
            animate={{ 
              opacity: [0, 1, 1, 0],
              letterSpacing: ["0.5em", "0.04em", "0.04em", "0.1em"],
            }}
            transition={{ duration: 2.5 }}
          >
            Industrial Revolution
          </motion.h2>
          <motion.p
            className="text-gray-400/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 1, 0] }}
            transition={{ duration: 2.5, delay: 0.2 }}
          >
            1760 - 1945
          </motion.p>
        </div>
      </motion.div>

      {/* Mechanical grid overlay */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.3, 0] }}
        transition={{ duration: 2.5 }}
        style={{
          backgroundImage: `linear-gradient(rgba(113, 113, 122, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(113, 113, 122, 0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
        }}
      />
    </div>
  );
}
