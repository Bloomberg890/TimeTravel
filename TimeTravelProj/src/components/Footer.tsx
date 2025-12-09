import { motion } from "motion/react";
import { Infinity, Mail, Shield, FileText, Info } from "lucide-react";

export function Footer() {
  const links = [
    { icon: Info, label: "About", href: "#" },
    { icon: FileText, label: "Terms", href: "#" },
    { icon: Shield, label: "Privacy", href: "#" },
    { icon: Mail, label: "Contact", href: "#" },
  ];

  return (
    <footer className="relative py-16 px-6 mt-24 overflow-hidden">
      {/* Glass Bar Background */}
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent" />
      
      <div className="container mx-auto relative z-10">
        <motion.div
          className="flex flex-col items-center gap-8"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Logo/Symbol */}
          <motion.div
            className="relative"
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 20,
              repeat: 1000000,
              ease: "linear",
            }}
          >
            <div className="relative">
              <Infinity className="w-12 h-12 text-cyan-400/60" strokeWidth={1.5} />
              <motion.div
                className="absolute inset-0 blur-lg"
                animate={{
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 2,
                  repeat: 1000000,
                  repeatType: "reverse",
                }}
              >
                <Infinity className="w-12 h-12 text-cyan-400" strokeWidth={1.5} />
              </motion.div>
            </div>
          </motion.div>

          {/* Navigation Links */}
          <div className="flex flex-wrap justify-center gap-8">
            {links.map((link, index) => {
              const Icon = link.icon;
              return (
                <motion.a
                  key={link.label}
                  href={link.href}
                  className="group flex items-center gap-2 text-slate-400 hover:text-cyan-400 transition-colors"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                >
                  <Icon className="w-4 h-4" />
                  <span>{link.label}</span>
                  <motion.div
                    className="absolute -bottom-1 left-0 right-0 h-px bg-cyan-400 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"
                  />
                </motion.a>
              );
            })}
          </div>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-gradient-to-r from-transparent via-slate-700 to-transparent" />

          {/* Copyright & Tagline */}
          <div className="text-center space-y-2">
            <motion.p
              className="text-slate-500 text-sm tracking-wider"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
            >
              TRAVERSING THE CONTINUUM SINCE 2025
            </motion.p>
            <motion.p
              className="text-slate-600 text-xs"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
            >
              &copy; {new Date().getFullYear()} Time Travel WebPortal. All temporal rights reserved.
            </motion.p>
          </div>

          {/* Decorative Elements */}
          <div className="flex gap-4">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-2 h-2 rounded-full bg-cyan-400/30"
                animate={{
                  opacity: [0.3, 1, 0.3],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: 1000000,
                  repeatType: "reverse",
                  delay: i * 0.3,
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>

      {/* Background Glow */}
      <motion.div
        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-cyan-400/5 blur-3xl -z-10"
        animate={{
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: 1000000,
          repeatType: "reverse",
        }}
      />
    </footer>
  );
}