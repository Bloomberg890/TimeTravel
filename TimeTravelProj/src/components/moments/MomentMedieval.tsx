import { motion } from "motion/react";
import { ArrowLeft, Castle } from "lucide-react";

interface MomentMedievalProps {
  onBack: () => void;
}

export function MomentMedieval({ onBack }: MomentMedievalProps) {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-800 via-stone-900 to-slate-950" />

      {/* Hero Banner */}
      <div className="relative h-[60vh] overflow-hidden">
        <motion.img
          src="https://images.unsplash.com/photo-1485465053475-dd55ed3894b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpZXZhbCUyMGNhc3RsZXxlbnwxfHx8fDE3NjUyMzc5NTR8MA&ixlib=rb-4.1.0&q=80&w=1080"
          alt="Age of Medieval Kingdoms"
          className="w-full h-full object-cover opacity-70"
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.7 }}
          transition={{ duration: 1.2 }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent" />

        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <div className="text-center">
            <Castle className="w-16 h-16 text-stone-400 mx-auto mb-6" />
            <h1 className="text-stone-300 mb-4" style={{ textShadow: "0 0 20px rgba(120, 113, 108, 0.5)" }}>
              Age of Medieval Kingdoms
            </h1>
            <p className="text-amber-300/80">1066 AD</p>
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
            <h2 className="text-amber-400 mb-6">Knights, Castles, and Kingdoms</h2>
            <div className="space-y-4 text-slate-300">
              <p>
                The year 1066 marked a pivotal turning point in medieval history with the Norman Conquest of England. When William the Conqueror defeated King Harold II at the Battle of Hastings, it set in motion events that would reshape European politics, culture, and society for centuries to come.
              </p>
              <p>
                This era witnessed the rise of magnificent stone castles that dominated the landscape—fortresses of power and symbols of feudal authority. Medieval kingdoms were bound together by complex systems of loyalty and obligation, where knights swore fealty to lords, and peasants worked the land in exchange for protection. The castle was not just a military stronghold but the heart of medieval life, housing courts, chapels, and bustling communities.
              </p>
              <p>
                Medieval society flourished with remarkable achievements in architecture, art, and scholarship. Gothic cathedrals reached toward the heavens with their soaring spires and intricate stained glass. Monasteries preserved ancient knowledge and created illuminated manuscripts of breathtaking beauty. Chivalric codes governed knightly conduct, blending martial prowess with ideals of honor and courtly love.
              </p>
              <p>
                The medieval period laid the foundations for modern Europe—establishing legal systems, universities, and trade networks that connected distant lands. From the Crusades to the Magna Carta, from feudal lords to merchant guilds, this age of kingdoms shaped the trajectory of Western civilization.
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
                src="https://images.unsplash.com/photo-1585208798174-6cedd86e019a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpZXZhbCUyMGFybW9yfGVufDF8fHx8MTc2NTI1MzIyOXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Medieval Armor"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="relative h-64 rounded-2xl overflow-hidden glass">
              <img
                src="https://images.unsplash.com/photo-1501594907352-04cda38ebc29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpZXZhbCUyMHRvd258ZW58MXx8fHwxNzY1MjUzMjI5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Medieval Town"
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
              boxShadow: "0 0 30px rgba(245, 158, 11, 0.3)",
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
