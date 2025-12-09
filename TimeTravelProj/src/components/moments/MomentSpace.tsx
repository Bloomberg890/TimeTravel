import { motion } from "motion/react";
import { ArrowLeft, Rocket } from "lucide-react";

interface MomentSpaceProps {
  onBack: () => void;
}

export function MomentSpace({ onBack }: MomentSpaceProps) {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-purple-950" />

      {/* Hero Banner */}
      <div className="relative h-[60vh] overflow-hidden">
        <motion.img
          src="https://images.unsplash.com/photo-1758656476421-e52b455791a1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc3Ryb25hdXQlMjBzcGFjZSUyMGZ1dHVyZXxlbnwxfHx8fDE3NjUyNTUwMDR8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="First Human in Space"
          className="w-full h-full object-cover opacity-70"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.7 }}
          transition={{ duration: 1.2 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-950/50 to-transparent" />

        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="text-center">
            <Rocket className="w-16 h-16 text-blue-400 mx-auto mb-6" />
            <h1 className="text-blue-300 text-glow mb-4">
              First Human in Space
            </h1>
            <p className="text-blue-300/80">April 12, 1961</p>
          </div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6 py-12">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <div className="glass-strong rounded-3xl p-8 md:p-12 mb-8">
            <h2 className="text-blue-400 mb-6">One Giant Leap Beyond Earth</h2>
            <div className="space-y-4 text-slate-300">
              <p>
                On April 12, 1961, Soviet cosmonaut Yuri Gagarin became the first human to journey into outer space, completing a historic 108-minute orbital flight aboard Vostok 1. This monumental achievement marked the beginning of human space exploration and forever changed our relationship with the cosmos.
              </p>
              <p>
                Gagarin&apos;s historic flight reached an altitude of 327 kilometers above Earth&apos;s surface, allowing him to witness the curvature of our planet and the vastness of space firsthand. His famous words upon seeing Earth from orbit—&quot;The Earth is blue... How wonderful. It is amazing&quot;—captured the awe and wonder of humanity&apos;s first glimpse of our home planet from space.
              </p>
              <p>
                This remarkable feat was the culmination of years of scientific innovation, engineering excellence, and human courage. It demonstrated that humans could survive and function in the harsh environment of space, opening the door to future missions including the Moon landings, space stations, and the ongoing exploration of our solar system.
              </p>
              <p>
                Gagarin&apos;s journey inspired generations of scientists, engineers, and dreamers worldwide, proving that the impossible could become possible through dedication, innovation, and the indomitable human spirit of exploration.
              </p>
            </div>
          </div>

          {/* Image Gallery */}
          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            <div className="relative h-64 rounded-2xl overflow-hidden glass">
              <img
                src="https://images.unsplash.com/photo-1614728423169-3f65fd722b7e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzcGFjZSUyMHJvY2tldHxlbnwxfHx8fDE3NjUyNTMyMjl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Space Rocket"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden glass">
              <img
                src="https://images.unsplash.com/photo-1543722530-d2c3201371e7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlYXJ0aCUyMGZyb20lMjBzcGFjZXxlbnwxfHx8fDE3NjUyNTMyMjl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Earth from Space"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Back Button */}
          <motion.button
            onClick={onBack}
            className="group flex items-center gap-3 px-8 py-4 rounded-full glass-strong border border-blue-400/30 hover:border-blue-400 transition-all mx-auto"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(59, 130, 246, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <ArrowLeft className="w-5 h-5 text-blue-300 group-hover:-translate-x-1 transition-transform" />
            <span className="text-blue-300">Back to Featured Moments</span>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
