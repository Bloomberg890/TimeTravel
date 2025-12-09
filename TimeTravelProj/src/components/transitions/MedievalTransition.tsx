import { motion } from "motion/react";
import { useEffect } from "react";

interface MedievalTransitionProps {
  onComplete: () => void;
}

export function MedievalTransition({ onComplete }: MedievalTransitionProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-gradient-to-br from-slate-800 via-blue-950 to-slate-950">
      {/* Parchment scroll fold effect */}
      <motion.div
        className="absolute inset-0 origin-top"
        initial={{ scaleY: 1, opacity: 1 }}
        animate={{ 
          scaleY: [1, 0.8, 0.5, 0],
          rotateX: [0, 15, 30, 90],
        }}
        transition={{ 
          duration: 2.5,
          ease: "easeInOut",
        }}
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(120, 113, 108, 0.3), rgba(71, 85, 105, 0.3))`,
          transformStyle: "preserve-3d",
          perspective: 1000,
        }}
      >
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' /%3E%3C/filter%3E%3Crect width='100' height='100' filter='url(%23noise)' opacity='0.15' /%3E%3C/svg%3E")`,
        }} />
      </motion.div>

      {/* Medieval text reveal */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{ duration: 2.5, times: [0, 0.3, 0.7, 1] }}
      >
        <div className="text-center">
          <motion.h2
            className="text-slate-300 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: [0, 1, 1, 0], y: [20, 0, 0, -20] }}
            transition={{ duration: 2.5 }}
          >
            Medieval Age
          </motion.h2>
          <motion.p
            className="text-blue-300/80"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 1, 0] }}
            transition={{ duration: 2.5, delay: 0.2 }}
          >
            500 - 1500 AD
          </motion.p>
        </div>
      </motion.div>

      {/* Scroll lines */}
      {[0, 1, 2].map((i) => (
        <motion.div
          key={i}
          className="absolute left-0 right-0 h-px bg-slate-400/30"
          style={{ top: `${30 + i * 20}%` }}
          initial={{ scaleX: 1, opacity: 0.5 }}
          animate={{ scaleX: 0, opacity: 0 }}
          transition={{ duration: 2.5, delay: i * 0.1 }}
        />
      ))}
    </div>
  );
}
