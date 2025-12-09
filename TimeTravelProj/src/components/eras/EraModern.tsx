import { motion } from "motion/react";
import { ArrowLeft, Building2 } from "lucide-react";

interface EraModernProps {
  onBack: () => void;
}

export function EraModern({ onBack }: EraModernProps) {
  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-950 via-blue-950 to-slate-950" />
      
      {/* Hero Banner */}
      <div className="relative h-[60vh] overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1764675107575-7a33cbdb7905?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBjaXR5JTIwc2t5bGluZXxlbnwxfHx8fDE3NjUyMTIwMDB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
          alt="Modern Day"
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-950/50 to-transparent" />
        
        <motion.div
          className="absolute inset-0 flex items-center justify-center"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <div className="text-center">
            <Building2 className="w-16 h-16 text-cyan-400 mx-auto mb-6" />
            <h1 className="text-cyan-300 text-glow mb-4">Modern Day</h1>
            <p className="text-blue-300/80">1945 - Present</p>
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
            <h2 className="text-cyan-400 mb-6">The Digital Age</h2>
            <div className="space-y-4 text-slate-300">
              <p>
                Welcome to the contemporary era where technology has revolutionized every aspect of human existence. From the post-war reconstruction to the digital revolution, the modern age has seen humanity reach unprecedented heights—both literally through space exploration and metaphorically through global connectivity.
              </p>
              <p>
                The invention of the computer, the internet, and smartphones has created a globally connected society where information travels at the speed of light. Witness the fall of the Berlin Wall, the rise of globalization, and the emergence of social media that has transformed how we communicate, work, and live.
              </p>
              <p>
                This era brought us to the moon, decoded the human genome, and connected billions of people through the internet. Artificial intelligence, renewable energy, and biotechnology are reshaping our world, offering solutions to age-old problems while presenting new ethical and environmental challenges.
              </p>
              <p>
                From the Cold War to climate change awareness, from civil rights movements to the gig economy, the modern age is characterized by rapid change, increasing diversity, and the ongoing tension between progress and sustainability as humanity navigates its impact on the planet.
              </p>
            </div>
          </div>

          {/* Back Button */}
          <motion.button
            onClick={onBack}
            className="group flex items-center gap-3 px-8 py-4 rounded-full glass-strong border border-cyan-400/30 hover:border-cyan-400 transition-all mx-auto"
            whileHover={{ 
              scale: 1.05,
              boxShadow: "0 0 30px rgba(6, 182, 212, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
          >
            <ArrowLeft className="w-5 h-5 text-cyan-300 group-hover:-translate-x-1 transition-transform" />
            <span className="text-cyan-300">Back to Timeline</span>
          </motion.button>
        </motion.div>
      </div>
    </div>
  );
}
