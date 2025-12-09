import { motion } from "motion/react";
import { useEffect } from "react";

interface FutureTransitionProps {
  onComplete: () => void;
}

export function FutureTransition({ onComplete }: FutureTransitionProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-gradient-to-br from-purple-950 via-pink-950 to-slate-950">
      {/* Neon warp effect */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute left-1/2 top-1/2 w-full h-px origin-left"
            style={{ 
              transform: `rotate(${i * 18}deg)`,
              background: `linear-gradient(to right, transparent, ${i % 2 === 0 ? 'rgba(168, 85, 247, 0.6)' : 'rgba(236, 72, 153, 0.6)'}, transparent)`,
            }}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ 
              scaleX: [0, 1, 1.5],
              opacity: [0, 1, 0],
            }}
            transition={{ 
              duration: 2.5,
              delay: i * 0.05,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      {/* Glitch ripple */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0, 1, 0, 1, 0, 1, 0],
        }}
        transition={{ 
          duration: 2.5,
          times: [0, 0.1, 0.2, 0.3, 0.4, 0.5, 1],
        }}
      >
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute inset-0 border-2 border-purple-500/30"
            initial={{ scale: 0, opacity: 1 }}
            animate={{ 
              scale: [0, 2 + i * 0.5],
              opacity: [1, 0],
            }}
            transition={{ 
              duration: 2.5,
              delay: i * 0.2,
              ease: "easeOut",
            }}
            style={{
              borderRadius: "50%",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        ))}
      </motion.div>

      {/* Digital particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              background: i % 2 === 0 ? '#a855f7' : '#ec4899',
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ 
              opacity: [0, 1, 0],
              scale: [0, Math.random() * 3 + 1, 0],
              x: (Math.random() - 0.5) * 200,
              y: (Math.random() - 0.5) * 200,
            }}
            transition={{ 
              duration: Math.random() * 2 + 1,
              delay: Math.random() * 0.5,
            }}
          />
        ))}
      </div>

      {/* Future text with glitch */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{ duration: 2.5, times: [0, 0.3, 0.7, 1] }}
      >
        <div className="text-center relative">
          <motion.h2
            className="text-purple-400 neon-glow-magenta mb-4"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0, 1, 1, 0],
              x: [0, -5, 5, -5, 0, 0],
            }}
            transition={{ 
              duration: 2.5,
              x: {
                duration: 0.5,
                times: [0, 0.2, 0.4, 0.6, 0.8, 1],
              }
            }}
          >
            Far Future
          </motion.h2>
          {/* Glitch clone */}
          <motion.h2
            className="text-pink-400 absolute inset-0 neon-glow-magenta"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [0, 0.3, 0, 0.3, 0],
              x: [-3, 3, -3],
            }}
            transition={{ 
              duration: 0.5,
              times: [0, 0.2, 0.4, 0.6, 1],
              repeat: 3,
            }}
          >
            Far Future
          </motion.h2>
          <motion.p
            className="text-purple-300/80 relative z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 1, 0] }}
            transition={{ duration: 2.5, delay: 0.2 }}
          >
            2100 - 3000
          </motion.p>
        </div>
      </motion.div>

      {/* Scan line effect */}
      <motion.div
        className="absolute left-0 right-0 h-1 bg-gradient-to-r from-transparent via-purple-400 to-transparent"
        initial={{ top: "0%" }}
        animate={{ top: "100%" }}
        transition={{ duration: 2.5, ease: "linear" }}
      />
    </div>
  );
}
