import { motion } from "motion/react";
import { ArrowLeft, Pyramid } from "lucide-react";

interface EraAncientProps {
  onBack: () => void;
}

export function EraAncient({ onBack }: EraAncientProps) {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-amber-950 via-orange-950 to-slate-950" />
      
      {/* Hero Banner */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1697453809142-35c7c1463682?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhbmNpZW50JTIwZWd5cHQlMjBweXJhbWlkc3xlbnwxfHx8fDE3NjUyNTMyMjl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Ancient Civilizations"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-amber-950 via-amber-950/50 to-transparent" />
        
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="text-center">
            <Pyramid className="w-16 h-16 text-amber-400 mx-auto mb-6" />
            <h1 className="text-amber-400 text-glow-gold mb-4">Ancient Civilizations</h1>
            <p className="text-amber-300/80">3000 BC - 500 AD</p>
          </div>
        </motion.div>
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6 py-12">
        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
        >
          <div className="glass-strong rounded-3xl p-8 md:p-12 mb-8">
            <h2 className="text-amber-400 mb-6">The Dawn of Civilization</h2>
            <div className="space-y-4 text-slate-300">
              <p>
                Journey to the cradle of human civilization, where the great pyramids touched the sky and empires rose from the sands of time. Ancient Egypt, Mesopotamia, Greece, and Rome laid the foundations for modern society through groundbreaking innovations in writing, mathematics, and governance.
              </p>
              <p>
                Witness the construction of architectural marvels that have stood for millennia, from the Great Pyramid of Giza to the Colosseum. Experience the birth of democracy in Athens, the philosophical wisdom of great thinkers, and the engineering prowess that created roads, aqueducts, and cities that shaped the ancient world.
              </p>
              <p>
                From the Silk Road connecting East and West to the development of agriculture that transformed nomadic tribes into settled civilizations, this era marks humanity&apos;s first great leap forward. The legacy of ancient civilizations continues to influence our laws, languages, and cultures today.
              </p>
              <p>
                Explore the mysteries of hieroglyphics, the power of emperors and pharaohs, and the daily lives of people who lived thousands of years ago yet shared the same hopes and dreams as we do today.
              </p>
            </div>
          </div>

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
            transition={{ delay: 0.5 }}
          >
            <ArrowLeft className="w-5 h-5 text-amber-300 group-hover:-translate-x-1 transition-transform" />
            <span className="text-amber-300">Back to Timeline</span>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
