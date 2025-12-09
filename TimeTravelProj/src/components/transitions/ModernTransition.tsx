import { motion } from "motion/react";
import { useEffect } from "react";

interface ModernTransitionProps {
  onComplete: () => void;
}

export function ModernTransition({ onComplete }: ModernTransitionProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-gradient-to-br from-cyan-950 via-blue-950 to-slate-950">
      {/* Glass slide effect */}
      <motion.div
        className="absolute inset-0 glass-strong"
        initial={{ x: "-100%", opacity: 1 }}
        animate={{ 
          x: ["100%", "100%"],
          opacity: [1, 0],
        }}
        transition={{ 
          duration: 2.5,
          times: [0, 1],
          ease: "easeInOut",
        }}
        style={{
          background: "linear-gradient(to right, transparent, rgba(6, 182, 212, 0.2), transparent)",
        }}
      />

      {/* Blur panels */}
      {[0, 1, 2, 3].map((i) => (
        <motion.div
          key={i}
          className="absolute inset-y-0 w-1/4"
          style={{ left: `${i * 25}%` }}
          initial={{ opacity: 0, filter: "blur(0px)" }}
          animate={{ 
            opacity: [0, 0.5, 0],
            filter: [`blur(0px)`, `blur(20px)`, `blur(40px)`],
          }}
          transition={{ 
            duration: 2.5,
            delay: i * 0.1,
          }}
        >
          <div className="w-full h-full bg-gradient-to-b from-cyan-500/20 to-blue-500/20" />
        </motion.div>
      ))}

      {/* Modern text */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{ duration: 2.5, times: [0, 0.3, 0.7, 1] }}
      >
        <div className="text-center">
          <motion.h2
            className="text-cyan-300 text-glow mb-4"
            initial={{ opacity: 0, filter: "blur(10px)" }}
            animate={{ 
              opacity: [0, 1, 1, 0],
              filter: ["blur(10px)", "blur(0px)", "blur(0px)", "blur(10px)"],
            }}
            transition={{ duration: 2.5 }}
          >
            Modern Day
          </motion.h2>
          <motion.p
            className="text-blue-300/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 1, 0] }}
            transition={{ duration: 2.5, delay: 0.2 }}
          >
            1945 - Present
          </motion.p>
        </div>
      </motion.div>

      {/* Sleek lines */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.4, 0] }}
        transition={{ duration: 2.5 }}
      >
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px bg-gradient-to-r from-transparent via-cyan-400 to-transparent"
            style={{ top: `${i * 12.5}%`, left: 0, right: 0 }}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: [0, 1, 0], opacity: [0, 0.6, 0] }}
            transition={{ duration: 2.5, delay: i * 0.05 }}
          />
        ))}
      </motion.div>
    </div>
  );
}
