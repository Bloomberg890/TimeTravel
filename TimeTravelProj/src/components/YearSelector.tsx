import { motion } from "motion/react";
import { useState } from "react";
import { X, Calendar, Sparkles } from "lucide-react";

interface YearSelectorProps {
  onClose: () => void;
  onConfirm: (era: string) => void;
}

export function YearSelector({ onClose, onConfirm }: YearSelectorProps) {
  const [selectedYear, setSelectedYear] = useState<number>(2024);
  const [eraInfo, setEraInfo] = useState({
    name: "Modern Day",
    color: "cyan",
  });

  const classifyEra = (year: number) => {
    if (year >= -3000 && year <= 500) {
      return { 
        id: "ancient",
        name: "Ancient Civilizations", 
        color: "amber",
        range: "3000 BC - 500 AD" 
      };
    } else if (year > 500 && year <= 1500) {
      return { 
        id: "medieval",
        name: "Medieval Age", 
        color: "blue",
        range: "500 - 1500 AD" 
      };
    } else if (year > 1500 && year <= 1945) {
      return { 
        id: "industrial",
        name: "Industrial Revolution", 
        color: "zinc",
        range: "1760 - 1945" 
      };
    } else if (year > 1945 && year <= 2100) {
      return { 
        id: "modern",
        name: "Modern Day", 
        color: "cyan",
        range: "1945 - Present" 
      };
    } else {
      return { 
        id: "future",
        name: "Far Future", 
        color: "purple",
        range: "2100 - 3000" 
      };
    }
  };

  const handleYearChange = (value: number) => {
    setSelectedYear(value);
    const era = classifyEra(value);
    setEraInfo({
      name: era.name,
      color: era.color,
    });
  };

  const handleConfirm = () => {
    const era = classifyEra(selectedYear);
    onConfirm(era.id);
  };

  const getColorClasses = (color: string) => {
    const colors: { [key: string]: { text: string; border: string; glow: string } } = {
      amber: { text: "text-amber-400", border: "border-amber-400", glow: "shadow-amber-400/30" },
      blue: { text: "text-blue-400", border: "border-blue-400", glow: "shadow-blue-400/30" },
      zinc: { text: "text-zinc-400", border: "border-zinc-400", glow: "shadow-zinc-400/30" },
      cyan: { text: "text-cyan-400", border: "border-cyan-400", glow: "shadow-cyan-400/30" },
      purple: { text: "text-purple-400", border: "border-purple-400", glow: "shadow-purple-400/30" },
    };
    return colors[color] || colors.cyan;
  };

  const colorClasses = getColorClasses(eraInfo.color);

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-6"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      {/* Backdrop */}
      <motion.div
        className="absolute inset-0 bg-slate-950/80 backdrop-blur-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        onClick={onClose}
      />

      {/* Modal */}
      <motion.div
        className="relative w-full max-w-2xl glass-strong rounded-3xl p-8 border border-cyan-400/30"
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        transition={{ type: "spring", duration: 0.6 }}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full glass hover:bg-white/10 transition-colors"
        >
          <X className="w-5 h-5 text-slate-400" />
        </button>

        {/* Header */}
        <div className="text-center mb-8">
          <motion.div
            className="inline-flex items-center gap-2 mb-4"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <Calendar className="w-8 h-8 text-cyan-400" />
            <Sparkles className="w-6 h-6 text-purple-400" />
          </motion.div>
          <h2 className="text-cyan-400 text-glow mb-3">Enter Portal</h2>
          <p className="text-slate-300">Select any year to jump through time</p>
        </div>

        {/* Year Input */}
        <div className="mb-8">
          <div className="flex items-center justify-center gap-4 mb-6">
            <input
              type="number"
              value={selectedYear}
              onChange={(e) => handleYearChange(parseInt(e.target.value) || 0)}
              className="w-48 px-6 py-4 text-center bg-slate-900/50 border-2 border-cyan-400/30 rounded-xl text-cyan-300 focus:border-cyan-400 focus:outline-none transition-colors"
              min={-3000}
              max={3000}
            />
            <span className="text-slate-400">AD/BC</span>
          </div>

          {/* Slider */}
          <input
            type="range"
            value={selectedYear}
            onChange={(e) => handleYearChange(parseInt(e.target.value))}
            min={-3000}
            max={3000}
            step={10}
            className="w-full h-2 bg-slate-800 rounded-lg appearance-none cursor-pointer slider"
            style={{
              background: `linear-gradient(to right, 
                rgb(251, 191, 36) 0%, 
                rgb(59, 130, 246) 25%, 
                rgb(161, 161, 170) 50%, 
                rgb(6, 182, 212) 75%, 
                rgb(168, 85, 247) 100%)`,
            }}
          />
        </div>

        {/* Era Classification */}
        <motion.div
          className={`glass rounded-2xl p-6 border-2 ${colorClasses.border} mb-8`}
          key={eraInfo.name}
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex items-center justify-between">
            <div>
              <p className="text-slate-400 mb-1">Destination Era</p>
              <h3 className={colorClasses.text}>{eraInfo.name}</h3>
            </div>
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <Sparkles className={`w-8 h-8 ${colorClasses.text}`} />
            </motion.div>
          </div>
        </motion.div>

        {/* Confirm Button */}
        <motion.button
          onClick={handleConfirm}
          className={`w-full py-4 rounded-full glass-strong border-2 ${colorClasses.border} hover:shadow-lg hover:shadow-${eraInfo.color}-400/30 transition-all`}
          whileHover={{ scale: 1.02 }}
          whileTap={{ scale: 0.98 }}
        >
          <span className={colorClasses.text}>Confirm Jump</span>
        </motion.button>

        {/* Ambient particles */}
        <div className="absolute inset-0 overflow-hidden rounded-3xl pointer-events-none">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className={`absolute w-1 h-1 rounded-full ${colorClasses.text}`}
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0, 0.6, 0],
                scale: [0, 1.5, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}
