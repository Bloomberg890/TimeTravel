import { motion } from "motion/react";
import { useEffect } from "react";

interface SpaceTransitionProps {
  onComplete: () => void;
}

export function SpaceTransition({ onComplete }: SpaceTransitionProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-gradient-to-b from-slate-950 via-blue-950 to-purple-950">
      {/* Rocket ignition - upward scroll effect */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-32 h-64"
        initial={{ y: 100, opacity: 1 }}
        animate={{ y: -window.innerHeight - 200, opacity: [1, 1, 0] }}
        transition={{ duration: 2.5, ease: "easeIn" }}
      >
        {/* Rocket flame trail */}
        <motion.div
          className="absolute bottom-0 left-1/2 -translate-x-1/2 w-16 h-48"
          style={{
            background: "linear-gradient(to top, rgba(249, 115, 22, 0.8), rgba(251, 191, 36, 0.6), transparent)",
            filter: "blur(8px)",
          }}
          animate={{
            scaleY: [1, 1.2, 0.8, 1],
            opacity: [0.8, 1, 0.8],
          }}
          transition={{
            duration: 0.3,
            repeat: Infinity,
          }}
        />
      </motion.div>

      {/* Star trails - vertical streaks */}
      <div className="absolute inset-0">
        {Array.from({ length: 50 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-0.5 bg-gradient-to-b from-white via-blue-200 to-transparent"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 50}%`,
              height: `${Math.random() * 100 + 50}px`,
            }}
            initial={{ opacity: 0, y: 0 }}
            animate={{
              opacity: [0, 0.8, 0],
              y: window.innerHeight,
            }}
            transition={{
              duration: Math.random() * 1.5 + 1,
              delay: Math.random() * 0.8,
              ease: "easeIn",
            }}
          />
        ))}
      </div>

      {/* Star particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 60 }).map((_, i) => (
          <motion.div
            key={`star-${i}`}
            className="absolute w-1 h-1 bg-white rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              boxShadow: "0 0 4px rgba(255, 255, 255, 0.8)",
            }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{
              opacity: [0, 1, 1, 0],
              scale: [0, 1, 0.5, 0],
            }}
            transition={{
              duration: Math.random() * 2 + 1,
              delay: Math.random() * 0.5,
            }}
          />
        ))}
      </div>

      {/* Space warp zoom effect */}
      <motion.div
        className="absolute inset-0"
        initial={{ scale: 1, opacity: 0 }}
        animate={{ scale: [1, 1.5, 2], opacity: [0, 0.3, 0] }}
        transition={{ duration: 2.5 }}
        style={{
          background: "radial-gradient(circle at center, transparent 0%, rgba(59, 130, 246, 0.3) 50%, rgba(147, 51, 234, 0.3) 100%)",
        }}
      />

      {/* Text reveal */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{ duration: 2.5, times: [0, 0.3, 0.7, 1] }}
      >
        <div className="text-center">
          <motion.h2
            className="text-blue-300 text-glow"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{
              opacity: [0, 1, 1, 0],
              scale: [0.8, 1, 1, 1.2],
            }}
            transition={{ duration: 2.5 }}
          >
            First Human in Space
          </motion.h2>
          <motion.p
            className="text-purple-300/80 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 1, 0] }}
            transition={{ duration: 2.5, delay: 0.2 }}
          >
            1961 AD
          </motion.p>
        </div>
      </motion.div>

      {/* Cosmic glow overlay */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.5, 0] }}
        transition={{ duration: 2.5 }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-blue-500/20 blur-[100px]" />
      </motion.div>
    </div>
  );
}
