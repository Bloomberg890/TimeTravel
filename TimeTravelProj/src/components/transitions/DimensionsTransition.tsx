import { motion } from "motion/react";
import { useEffect } from "react";

interface DimensionsTransitionProps {
  onComplete: () => void;
}

export function DimensionsTransition({ onComplete }: DimensionsTransitionProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-gradient-to-br from-purple-950 via-pink-950 to-slate-950">
      {/* Dimensional ripple waves */}
      <div className="absolute inset-0 flex items-center justify-center">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute border-2 rounded-full"
            style={{
              borderColor: i % 2 === 0 ? "rgba(168, 85, 247, 0.4)" : "rgba(236, 72, 153, 0.4)",
            }}
            initial={{ width: 0, height: 0, opacity: 1 }}
            animate={{
              width: "200vmax",
              height: "200vmax",
              opacity: 0,
            }}
            transition={{
              duration: 2.5,
              delay: i * 0.15,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      {/* Glitch tear effect */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{
          opacity: [0, 1, 0, 1, 0, 1, 0],
        }}
        transition={{
          duration: 2.5,
          times: [0, 0.1, 0.15, 0.2, 0.25, 0.3, 1],
        }}
      >
        {[...Array(12)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute left-0 right-0 h-px"
            style={{
              top: `${i * 8.33}%`,
              background: "linear-gradient(to right, transparent, rgba(236, 72, 153, 0.8), transparent)",
            }}
            initial={{ x: 0 }}
            animate={{
              x: [0, Math.random() * 40 - 20, -Math.random() * 40, 0],
              opacity: [0, 1, 1, 0],
            }}
            transition={{
              duration: 0.5,
              delay: i * 0.03,
              repeat: 2,
            }}
          />
        ))}
      </motion.div>

      {/* Mirror fracture lines */}
      <div className="absolute inset-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={`fracture-${i}`}
            className="absolute bg-gradient-to-r from-transparent via-purple-400/60 to-transparent"
            style={{
              width: "2px",
              height: "100%",
              left: `${50 + (Math.random() - 0.5) * 80}%`,
              transformOrigin: "center",
            }}
            initial={{ scaleY: 0, opacity: 0, rotate: 0 }}
            animate={{
              scaleY: [0, 1, 1],
              opacity: [0, 0.8, 0],
              rotate: (Math.random() - 0.5) * 30,
            }}
            transition={{
              duration: 2.5,
              delay: Math.random() * 0.5,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      {/* Dimensional particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 40 }).map((_, i) => (
          <motion.div
            key={`particle-${i}`}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 6 + 2}px`,
              height: `${Math.random() * 6 + 2}px`,
              background: i % 2 === 0 ? "#a855f7" : "#ec4899",
              boxShadow: `0 0 ${Math.random() * 10 + 5}px ${i % 2 === 0 ? "#a855f7" : "#ec4899"}`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 1, 0],
              scale: [0, Math.random() * 2 + 1, 0],
              x: [(Math.random() - 0.5) * 200, (Math.random() - 0.5) * 400],
              y: [(Math.random() - 0.5) * 200, (Math.random() - 0.5) * 400],
            }}
            transition={{
              duration: Math.random() * 2 + 1,
              delay: Math.random() * 0.8,
            }}
          />
        ))}
      </div>

      {/* Text reveal with glitch */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{ duration: 2.5, times: [0, 0.3, 0.7, 1] }}
      >
        <div className="text-center relative">
          <motion.h2
            className="text-purple-300 neon-glow-magenta"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 1, 1, 0],
              x: [0, -3, 3, -2, 0],
            }}
            transition={{
              duration: 2.5,
              x: { duration: 0.3, times: [0, 0.25, 0.5, 0.75, 1] },
            }}
          >
            Discovery of Parallel Dimensions
          </motion.h2>
          {/* Glitch clone */}
          <motion.h2
            className="text-pink-400 absolute inset-0 neon-glow-magenta"
            initial={{ opacity: 0 }}
            animate={{
              opacity: [0, 0.5, 0, 0.5, 0],
              x: [2, -2, 3, -3, 0],
            }}
            transition={{
              duration: 0.5,
              times: [0, 0.2, 0.4, 0.6, 1],
              repeat: 2,
            }}
          >
            Discovery of Parallel Dimensions
          </motion.h2>
          <motion.p
            className="text-purple-300/80 mt-4 relative z-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 1, 0] }}
            transition={{ duration: 2.5, delay: 0.2 }}
          >
            2245 AD
          </motion.p>
        </div>
      </motion.div>

      {/* Dimensional warp overlay */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0, scale: 1 }}
        animate={{
          opacity: [0, 0.4, 0],
          scale: [1, 1.3, 1.5],
        }}
        transition={{ duration: 2.5 }}
        style={{
          background: "radial-gradient(ellipse at center, rgba(168, 85, 247, 0.3), transparent 60%)",
        }}
      />
    </div>
  );
}
