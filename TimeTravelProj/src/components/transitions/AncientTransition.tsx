import { motion } from "motion/react";
import { useEffect } from "react";

interface AncientTransitionProps {
  onComplete: () => void;
}

export function AncientTransition({ onComplete }: AncientTransitionProps) {
  useEffect(() => {
    const timer = setTimeout(() => {
      onComplete();
    }, 2500);
    return () => clearTimeout(timer);
  }, [onComplete]);

  return (
    <div className="fixed inset-0 z-50 overflow-hidden bg-gradient-to-br from-amber-900 via-orange-950 to-slate-950">
      {/* Sand particles dissolving effect */}
      <div className="absolute inset-0">
        {Array.from({ length: 100 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-amber-400/60 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
              opacity: 1,
              scale: Math.random() * 2 + 0.5,
            }}
            animate={{
              y: window.innerHeight + 100,
              x: Math.random() * window.innerWidth,
              opacity: 0,
              scale: 0,
            }}
            transition={{
              duration: Math.random() * 2 + 1,
              delay: Math.random() * 0.5,
              ease: "easeIn",
            }}
          />
        ))}
      </div>

      {/* Central dissolve effect */}
      <motion.div
        className="absolute inset-0 flex items-center justify-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 1, 0] }}
        transition={{ duration: 2, times: [0, 0.5, 1] }}
      >
        <motion.div
          className="text-center"
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: [0.8, 1.2, 0.5], opacity: [0, 1, 0] }}
          transition={{ duration: 2.5 }}
        >
          <h2 className="text-amber-400 text-glow-gold">Ancient Civilizations</h2>
          <p className="text-amber-300/80 mt-4">3000 BC - 500 AD</p>
        </motion.div>
      </motion.div>

      {/* Sand dissolve overlay */}
      <motion.div
        className="absolute inset-0 bg-amber-900"
        initial={{ opacity: 0 }}
        animate={{ opacity: [0, 0.5, 0] }}
        transition={{ duration: 2.5 }}
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23d97706' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }}
      />
    </div>
  );
}
