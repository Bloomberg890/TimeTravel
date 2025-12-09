import { motion } from "motion/react";
import { Users, ArrowRight } from "lucide-react";

interface CharacterEncounterProps {
  onStartEncounter?: () => void;
}

export function CharacterEncounter({ onStartEncounter }: CharacterEncounterProps) {
  return (
    <section className="py-24 px-6 relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-purple-500/10 blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: 1000000,
            repeatType: "reverse",
          }}
        />
      </div>

      <div className="container mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left: Hologram Card */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-[3/4] max-w-md mx-auto">
              {/* Hologram Container */}
              <motion.div
                className="relative h-full rounded-3xl glass-strong overflow-hidden"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Scan Lines Effect */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/5 to-transparent bg-[length:100%_4px] animate-scan" />

                {/* Hologram Silhouette */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    className="w-48 h-48 rounded-full bg-gradient-to-br from-cyan-400/30 to-purple-400/30 blur-2xl"
                    animate={{
                      scale: [1, 1.1, 1],
                      opacity: [0.5, 0.7, 0.5],
                    }}
                    transition={{
                      duration: 3,
                      repeat: 1000000,
                      repeatType: "reverse",
                    }}
                  />
                </div>

                {/* Silhouette Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    animate={{
                      opacity: [0.6, 1, 0.6],
                    }}
                    transition={{
                      duration: 2,
                      repeat: 1000000,
                      repeatType: "reverse",
                    }}
                  >
                    <Users className="w-32 h-32 text-cyan-400/60" strokeWidth={1} />
                  </motion.div>
                </div>

                {/* Grid Overlay */}
                <div className="absolute inset-0 bg-[linear-gradient(rgba(0,229,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,229,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px]" />

                {/* Border Glow */}
                <motion.div
                  className="absolute inset-0 border-2 border-cyan-400/30 rounded-3xl"
                  animate={{
                    borderColor: ["rgba(0,229,255,0.3)", "rgba(0,229,255,0.6)", "rgba(0,229,255,0.3)"],
                  }}
                  transition={{
                    duration: 3,
                    repeat: 1000000,
                    repeatType: "reverse",
                  }}
                />

                {/* Corner Markers */}
                {["top-4 left-4", "top-4 right-4", "bottom-4 left-4", "bottom-4 right-4"].map((position, i) => (
                  <motion.div
                    key={i}
                    className={`absolute ${position} w-4 h-4`}
                    animate={{
                      opacity: [0.5, 1, 0.5],
                    }}
                    transition={{
                      duration: 2,
                      repeat: 1000000,
                      repeatType: "reverse",
                      delay: i * 0.2,
                    }}
                  >
                    <div className="absolute top-0 left-0 w-full h-0.5 bg-cyan-400" />
                    <div className="absolute top-0 left-0 w-0.5 h-full bg-cyan-400" />
                  </motion.div>
                ))}

                {/* Status Text */}
                <motion.div
                  className="absolute bottom-6 left-1/2 -translate-x-1/2 px-6 py-2 rounded-full glass-strong border border-cyan-400/30"
                  animate={{
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 2,
                    repeat: 1000000,
                    repeatType: "reverse",
                  }}
                >
                  <span className="text-cyan-400">READY TO CONNECT</span>
                </motion.div>
              </motion.div>

              {/* Outer Glow Ring */}
              <motion.div
                className="absolute inset-0 rounded-3xl blur-xl bg-cyan-400/20 -z-10"
                animate={{
                  scale: [1, 1.05, 1],
                  opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                  duration: 3,
                  repeat: 1000000,
                  repeatType: "reverse",
                }}
              />
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            className="space-y-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div>
              <motion.div
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-6"
                whileHover={{ scale: 1.05 }}
              >
                <Users className="w-5 h-5 text-purple-400" />
                <span className="text-purple-300">Character Encounters</span>
              </motion.div>

              <h2 className="mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
                Meet Remarkable People Across Time
              </h2>

              <p className="text-slate-300 mb-8">
                Engage in conversations with historical figures, future pioneers, and legendary personalities. 
                Experience their stories, wisdom, and perspectives through our advanced temporal communication matrix.
              </p>

              <ul className="space-y-4 mb-10">
                {[
                  "Interactive holographic projections",
                  "Real-time translation across eras",
                  "Authentic historical contexts",
                  "Guided narrative experiences",
                ].map((feature, i) => (
                  <motion.li
                    key={i}
                    className="flex items-center gap-3 text-slate-300"
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 + i * 0.1 }}
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 neon-glow" />
                    {feature}
                  </motion.li>
                ))}
              </ul>

              <motion.button
                onClick={onStartEncounter}
                className="group flex items-center gap-3 px-8 py-4 rounded-full glass-strong border border-purple-400/30 hover:border-purple-400 transition-all"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 0 30px rgba(168, 85, 247, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
              >
                <span className="text-purple-300">Start Encounter</span>
                <ArrowRight className="w-5 h-5 text-purple-300 group-hover:translate-x-1 transition-transform" />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}