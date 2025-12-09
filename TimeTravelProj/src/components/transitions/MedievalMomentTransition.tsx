import { motion } from "motion/react";
import { useEffect } from "react";

interface MedievalMomentTransitionProps {
  onComplete: () => void;
}

export function MedievalMomentTransition({ onComplete }: MedievalMomentTransitionProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-gradient-to-br from-slate-800 via-stone-900 to-slate-950">
      {/* Scroll unroll effect - vertical reveal */}
      <motion.div
        className="absolute inset-0 origin-top"
        initial={{ scaleY: 0 }}
        animate={{ scaleY: 1 }}
        transition={{ duration: 1.2, ease: "easeOut" }}
        style={{
          background: "linear-gradient(to bottom, rgba(120, 113, 108, 0.4), rgba(87, 83, 78, 0.3))",
        }}
      />

      {/* Parchment texture overlay */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.6, 0.6, 0] }}
        transition={{ duration: 2.5, times: [0, 0.3, 0.7, 1] }}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' /%3E%3CfeColorMatrix type='saturate' values='0'/%3E%3C/filter%3E%3Crect width='200' height='200' filter='url(%23noise)' opacity='0.4' fill='%2378716c'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Old parchment fold - 3D flip effect */}
      <motion.div
        className="absolute inset-0"
        initial={{ rotateX: 90, opacity: 1 }}
        animate={{ rotateX: [90, 0, 0], opacity: [1, 1, 0] }}
        transition={{ duration: 2.5, times: [0, 0.6, 1] }}
        style={{
          transformStyle: "preserve-3d",
          perspective: 1000,
          transformOrigin: "top center",
          background: "linear-gradient(to bottom, rgba(168, 162, 158, 0.3), rgba(120, 113, 108, 0.2))",
        }}
      >
        {/* Fold crease lines */}
        {[0, 1, 2, 3].map((i) => (
          <motion.div
            key={i}
            className="absolute left-0 right-0 h-px bg-stone-700/40"
            style={{ top: `${25 * i}%` }}
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 0.6, 0] }}
            transition={{ duration: 2.5, delay: i * 0.1 }}
          />
        ))}
      </motion.div>

      {/* Castle gate opening - split reveal */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-y-0 left-0 w-1/2 bg-gradient-to-r from-stone-800 to-stone-900"
          initial={{ x: 0 }}
          animate={{ x: "-100%" }}
          transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
        >
          <div className="absolute right-0 top-0 bottom-0 w-2 bg-stone-600" />
        </motion.div>
        <motion.div
          className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-stone-800 to-stone-900"
          initial={{ x: 0 }}
          animate={{ x: "100%" }}
          transition={{ duration: 1.5, delay: 0.3, ease: "easeInOut" }}
        >
          <div className="absolute left-0 top-0 bottom-0 w-2 bg-stone-600" />
        </motion.div>
      </div>

      {/* Medieval decorative borders */}
      <motion.div
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.8, 0.8, 0] }}
        transition={{ duration: 2.5, times: [0, 0.3, 0.7, 1] }}
      >
        {/* Top border */}
        <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-amber-900/40 to-transparent" />
        {/* Bottom border */}
        <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-amber-900/40 to-transparent" />
        {/* Side decorations */}
        <div className="absolute left-0 top-0 bottom-0 w-8 bg-gradient-to-r from-amber-900/30 to-transparent" />
        <div className="absolute right-0 top-0 bottom-0 w-8 bg-gradient-to-l from-amber-900/30 to-transparent" />
      </motion.div>

      {/* Text reveal */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 1, 0] }}
        transition={{ duration: 2.5, times: [0, 0.3, 0.7, 1] }}
      >
        <div className="text-center">
          <motion.h2
            className="text-stone-300"
            initial={{ opacity: 0, y: 20 }}
            animate={{
              opacity: [0, 1, 1, 0],
              y: [20, 0, 0, -20],
            }}
            transition={{ duration: 2.5 }}
            style={{
              textShadow: "0 0 20px rgba(120, 113, 108, 0.5)",
            }}
          >
            Age of Medieval Kingdoms
          </motion.h2>
          <motion.p
            className="text-amber-300/80 mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 1, 0] }}
            transition={{ duration: 2.5, delay: 0.2 }}
          >
            1066 AD
          </motion.p>
        </div>
      </motion.div>

      {/* Scroll edge shadows */}
      <motion.div
        className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-black/60 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2.5 }}
      />
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-black/60 to-transparent"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2.5 }}
      />
    </div>
  );
}
