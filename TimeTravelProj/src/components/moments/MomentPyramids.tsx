import { motion } from "motion/react";
import { ArrowLeft, Pyramid } from "lucide-react";

interface MomentPyramidsProps {
  onBack: () => void;
}

export function MomentPyramids({ onBack }: MomentPyramidsProps) {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-950 via-orange-950 to-slate-950" />

      {/* Hero Banner */}
      <div className="relative h-[60vh] overflow-hidden">
        <motion.img
          src="https://images.unsplash.com/photo-1601313593484-11d32ff193c1?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaXN0b3JpY2FsJTIwbW9udW1lbnQlMjBhbmNpZW50fGVufDF8fHx8MTc2NTI1NTAwM3ww&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Construction of the Great Pyramids"
          className="w-full h-full object-cover opacity-70"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.7 }}
          transition={{ duration: 1.2 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-amber-950 via-amber-950/50 to-transparent" />

        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="text-center">
            <Pyramid className="w-16 h-16 text-amber-400 mx-auto mb-6" />
            <h1 className="text-amber-400 text-glow-gold mb-4">
              Construction of the Great Pyramids
            </h1>
            <p className="text-amber-300/80">2560 BC</p>
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
            <h2 className="text-amber-400 mb-6">Monument to Eternity</h2>
            <div className="space-y-4 text-slate-300">
              <p>
                The Great Pyramid of Giza stands as one of humanity&apos;s most remarkable achievements—a testament to ancient engineering brilliance and human determination. Built over 4,500 years ago during the reign of Pharaoh Khufu, this colossal structure was the tallest man-made monument in the world for nearly 4,000 years.
              </p>
              <p>
                Constructed from approximately 2.3 million limestone blocks, each weighing between 2.5 to 15 tons, the pyramid required the coordinated effort of tens of thousands of skilled workers. The precision of its construction continues to astound modern engineers—the base is level to within just 2.1 centimeters, and the sides are aligned to the cardinal directions with remarkable accuracy.
              </p>
              <p>
                This magnificent tomb was more than just a burial place; it represented the pharaoh&apos;s journey to the afterlife and embodied the ancient Egyptian belief in eternal life. The pyramid complex included temples, smaller pyramids for queens, and elaborate causeway systems that reflected the sophistication of Old Kingdom civilization.
              </p>
              <p>
                Today, the Great Pyramid remains the last surviving wonder of the ancient world, inspiring awe and curiosity in millions of visitors who come to witness this enduring symbol of human ingenuity and ambition.
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
                src="https://images.unsplash.com/photo-1697453809142-35c7c1463682?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmNpZW50JTIwZWd5cHQlMjBweXJhbWlkc3xlbnwxfHx8fDE3NjUyNTMyMjl8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Ancient Egyptian Pyramids"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden glass">
              <img
                src="https://images.unsplash.com/photo-1572252009286-268acec5ca0a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZ3lwdCUyMHB5cmFtaWQlMjBkZXNlcnR8ZW58MXx8fHwxNzY1MjUzMjI5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Egyptian Desert"
                className="w-full h-full object-cover"
              />
            </div>
          </motion.div>

          {/* Back Button */}
          <motion.button
            onClick={onBack}
            className="group flex items-center gap-3 px-8 py-4 rounded-full glass-strong border border-amber-400/30 hover:border-amber-400 transition-all mx-auto"
            whileHover={{
              scale: 1.05,
              boxShadow: "0 0 30px rgba(251, 191, 36, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <ArrowLeft className="w-5 h-5 text-amber-300 group-hover:-translate-x-1 transition-transform" />
            <span className="text-amber-300">Back to Featured Moments</span>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
