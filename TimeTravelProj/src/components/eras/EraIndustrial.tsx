import { motion } from "motion/react";
import { ArrowLeft, Factory } from "lucide-react";

interface EraIndustrialProps {
  onBack: () => void;
}

export function EraIndustrial({ onBack }: EraIndustrialProps) {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-950 via-zinc-900 to-slate-950" />
      
      {/* Hero Banner */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1633619425163-149e7793542a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbmR1c3RyaWFsJTIwZmFjdG9yeSUyMHN0ZWFtfGVufDF8fHx8MTc2NTI1NDMyMnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Industrial Revolution"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/50 to-transparent" />
        
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="text-center">
            <Factory className="w-16 h-16 text-zinc-400 mx-auto mb-6" />
            <h1 className="text-zinc-300 mb-4">Industrial Revolution</h1>
            <p className="text-gray-300/80">1760 - 1945</p>
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
            <h2 className="text-zinc-300 mb-6">The Machine Age</h2>
            <div className="space-y-4 text-slate-300">
              <p>
                Step into the era that transformed humanity from agrarian societies to industrial powerhouses. The Industrial Revolution brought steam engines, factories, railways, and mass production that reshaped economies, societies, and daily life in ways never before imagined.
              </p>
              <p>
                From James Watt&apos;s steam engine to Henry Ford&apos;s assembly line, innovation accelerated at an unprecedented pace. Cities grew exponentially as people migrated from rural areas to work in factories. The telegraph and telephone connected the world, while electricity illuminated the night and powered new inventions.
              </p>
              <p>
                This era witnessed both remarkable progress and significant challenges—child labor, pollution, and harsh working conditions sparked social movements and labor reforms. Yet it also democratized production, made goods more affordable, and set the stage for the modern consumer economy.
              </p>
              <p>
                The Industrial Revolution concluded with two world wars that demonstrated both the destructive potential and the industrial might of mechanized nations, forever changing the global order and paving the way for the modern age.
              </p>
            </div>
          </div>

          {/* Back Button */}
          <motion.button
            onClick={onBack}
            className="group flex items-center gap-3 px-8 py-4 rounded-full glass-strong border border-zinc-400/30 hover:border-zinc-400 transition-all mx-auto"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 30px rgba(161, 161, 170, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <ArrowLeft className="w-5 h-5 text-zinc-300 group-hover:-translate-x-1 transition-transform" />
            <span className="text-zinc-300">Back to Timeline</span>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
