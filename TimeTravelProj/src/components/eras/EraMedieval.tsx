import { motion } from "motion/react";
import { ArrowLeft, Castle } from "lucide-react";

interface EraMedievalProps {
  onBack: () => void;
}

export function EraMedieval({ onBack }: EraMedievalProps) {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-blue-950 to-slate-950" />
      
      {/* Hero Banner */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1605376286538-057633a2f7d0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpZXZhbCUyMGNhc3RsZSUyMGZvcnRyZXNzfGVufDF8fHx8MTc2NTI1OTgwMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Medieval Age"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent" />
        
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="text-center">
            <Castle className="w-16 h-16 text-blue-400 mx-auto mb-6" />
            <h1 className="text-slate-300 mb-4">Medieval Age</h1>
            <p className="text-blue-300/80">500 - 1500 AD</p>
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
            <h2 className="text-blue-400 mb-6">The Age of Knights and Castles</h2>
            <div className="space-y-4 text-slate-300">
              <p>
                Enter the realm of castles, knights, and kingdoms where feudalism shaped the social order and grand cathedrals reached toward the heavens. The Medieval Age was an era of stark contrasts—faith and conquest, darkness and enlightenment, isolation and exploration.
              </p>
              <p>
                From the fall of Rome to the Renaissance, this millennium saw the rise of powerful monarchies, the spread of Christianity across Europe, and the devastating impact of the Black Death. Witness the Crusades that connected East and West, the Magna Carta that limited royal power, and the beginning of universities that preserved and advanced human knowledge.
              </p>
              <p>
                Experience the code of chivalry, the artistry of illuminated manuscripts, and the architectural genius of Gothic cathedrals. This was an age of legendary figures like King Arthur, Joan of Arc, and William the Conqueror, whose stories continue to captivate us centuries later.
              </p>
              <p>
                The Medieval period laid the groundwork for the modern nation-state and saw innovations in agriculture, trade, and culture that would eventually spark the rebirth of learning in the Renaissance.
              </p>
            </div>
          </div>

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
            transition={{ delay: 0.5 }}
          >
            <ArrowLeft className="w-5 h-5 text-blue-300 group-hover:-translate-x-1 transition-transform" />
            <span className="text-blue-300">Back to Timeline</span>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
