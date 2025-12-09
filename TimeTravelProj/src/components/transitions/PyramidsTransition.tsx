import { motion } from "motion/react";
import { useEffect } from "react";

interface PyramidsTransitionProps {
  onComplete: () => void;
}

export function PyramidsTransition({ onComplete }: PyramidsTransitionProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-gradient-to-br from-amber-900 via-yellow-950 to-orange-950">
      {/* Desert wind effect - horizontal sand drift */}
      <motion.div
        className="absolute inset-0"
        initial={{ x: "-100%" }}
        animate={{ x: "100%" }}
        transition={{ duration: 2.5, ease: "easeInOut" }}
        style={{
          background: "linear-gradient(to right, transparent, rgba(217, 119, 6, 0.4), rgba(245, 158, 11, 0.4), transparent)",
        }}
      />

      {/* Sand particles drifting */}
      <div className="absolute inset-0">
        {Array.from({ length: 80 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${Math.random() * 4 + 2}px`,
              height: `${Math.random() * 4 + 2}px`,
              background: `rgba(${245 + Math.random() * 10}, ${158 + Math.random() * 20}, ${11 + Math.random() * 20}, ${0.3 + Math.random() * 0.4})`,
              top: `${Math.random() * 100}%`,
              left: `${-10 + Math.random() * 20}%`,
            }}
            initial={{ x: 0, opacity: 1 }}
            animate={{
              x: window.innerWidth + 100,
              opacity: [1, 0.8, 0.6, 0],
            }}
            transition={{
              duration: Math.random() * 2 + 1.5,
              delay: Math.random() * 0.8,
              ease: "linear",
            }}
          />
        ))}
      </div>

      {/* Dust cloud overlay */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: [0, 0.6, 0], scale: [0.8, 1.2, 1.5] }}
        transition={{ duration: 2.5 }}
        style={{
          background: "radial-gradient(circle at center, rgba(245, 158, 11, 0.3), transparent 70%)",
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
            className="text-amber-300 text-glow-gold"
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{
              opacity: [0, 1, 1, 0],
              y: [30, 0, 0, -30],
              filter: ["blur(10px)", "blur(0px)", "blur(0px)", "blur(10px)"],
            }}
            transition={{ duration: 2.5 }}
          >
            Construction of the Great Pyramids
          </motion.h2>
          <motion.p
            className="text-amber-400/80 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 1, 0] }}
            transition={{ duration: 2.5, delay: 0.2 }}
          >
            2560 BC
          </motion.p>
        </div>
      </motion.div>

      {/* Desert texture pattern */}
      <motion.div
        className="absolute inset-0 opacity-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.2, 0] }}
        transition={{ duration: 2.5 }}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 50 Q 25 40, 50 50 T 100 50' stroke='%23f59e0b' stroke-width='0.5' fill='none' opacity='0.3'/%3E%3Cpath d='M0 60 Q 25 50, 50 60 T 100 60' stroke='%23d97706' stroke-width='0.5' fill='none' opacity='0.3'/%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
