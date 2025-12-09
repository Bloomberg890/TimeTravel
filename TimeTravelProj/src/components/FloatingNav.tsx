import { motion } from "motion/react";
import { Home, Clock, Zap, Users, Menu } from "lucide-react";
import { useState } from "react";

export function FloatingNav() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { icon: Home, label: "Home", href: "#hero" },
    { icon: Clock, label: "Timeline", href: "#timeline" },
    { icon: Zap, label: "Moments", href: "#moments" },
    { icon: Users, label: "Encounters", href: "#encounters" },
  ];

  return (
    <>
      {/* Desktop Navigation */}
      <motion.nav
        className="hidden md:block fixed top-8 left-1/2 -translate-x-1/2 z-50"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.5 }}
      >
        <div className="flex items-center gap-2 px-6 py-3 rounded-full glass-strong backdrop-blur-xl">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={item.label}
                href={item.href}
                className="group relative px-4 py-2 rounded-full text-slate-300 hover:text-cyan-400 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 + index * 0.1 }}
              >
                <div className="flex items-center gap-2">
                  <Icon className="w-4 h-4" />
                  <span className="text-sm">{item.label}</span>
                </div>
                
                {/* Hover Background */}
                <motion.div
                  className="absolute inset-0 rounded-full bg-cyan-400/10 opacity-0 group-hover:opacity-100 -z-10"
                  layoutId="navHover"
                  transition={{ duration: 0.2 }}
                />
              </motion.a>
            );
          })}

          {/* Glowing Dot Indicator */}
          <div className="ml-2 w-2 h-2 rounded-full bg-cyan-400 neon-glow" />
        </div>

        {/* Nav Shadow */}
        <div className="absolute inset-0 rounded-full bg-cyan-400/10 blur-xl -z-10" />
      </motion.nav>

      {/* Mobile Menu Button */}
      <motion.button
        className="md:hidden fixed top-6 right-6 z-50 p-3 rounded-full glass-strong backdrop-blur-xl"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.4, delay: 0.5 }}
        onClick={() => setIsOpen(!isOpen)}
        whileTap={{ scale: 0.9 }}
      >
        <Menu className="w-6 h-6 text-cyan-400" />
      </motion.button>

      {/* Mobile Menu */}
      <motion.div
        className="md:hidden fixed inset-0 z-40 bg-slate-950/95 backdrop-blur-xl"
        initial={{ opacity: 0, x: "100%" }}
        animate={{ 
          opacity: isOpen ? 1 : 0,
          x: isOpen ? 0 : "100%",
        }}
        transition={{ duration: 0.3 }}
        style={{ pointerEvents: isOpen ? "auto" : "none" }}
      >
        <div className="flex flex-col items-center justify-center h-full gap-8">
          {navItems.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.a
                key={item.label}
                href={item.href}
                className="flex items-center gap-4 text-2xl text-slate-300 hover:text-cyan-400 transition-colors"
                initial={{ opacity: 0, x: 50 }}
                animate={{ 
                  opacity: isOpen ? 1 : 0,
                  x: isOpen ? 0 : 50,
                }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setIsOpen(false)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Icon className="w-8 h-8" />
                <span>{item.label}</span>
              </motion.a>
            );
          })}
        </div>
      </motion.div>
    </>
  );
}
