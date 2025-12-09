import { motion } from "motion/react";
import { useState } from "react";
import { ArrowLeft, MessageCircle, Book, User } from "lucide-react";

interface EncounterInterfaceProps {
  onBack: () => void;
}

const historicalFigures = [
  {
    id: 1,
    name: "Leonardo da Vinci",
    era: "Renaissance (1452-1519)",
    bio: "A polymath of the Italian Renaissance, Leonardo was a painter, inventor, scientist, and visionary whose notebooks contained ideas centuries ahead of his time. He painted the Mona Lisa and The Last Supper while also designing flying machines and studying human anatomy.",
    image: "https://images.unsplash.com/photo-1583934555852-537536e49071?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaXN0b3JpY2FsJTIwcG9ydHJhaXQlMjBwYWludGluZ3xlbnwxfHx8fDE3NjUyNTk5Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    color: "amber",
  },
  {
    id: 2,
    name: "Cleopatra VII",
    era: "Ancient Egypt (69-30 BC)",
    bio: "The last active pharaoh of Ancient Egypt, Cleopatra was known for her intelligence, political acumen, and relationships with Julius Caesar and Mark Antony. She spoke multiple languages and was educated in mathematics, philosophy, and astronomy.",
    image: "https://images.unsplash.com/photo-1583934555852-537536e49071?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaXN0b3JpY2FsJTIwcG9ydHJhaXQlMjBwYWludGluZ3xlbnwxfHx8fDE3NjUyNTk5Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    color: "blue",
  },
  {
    id: 3,
    name: "Nikola Tesla",
    era: "Modern Era (1856-1943)",
    bio: "A Serbian-American inventor and electrical engineer, Tesla pioneered alternating current (AC) electricity, wireless communication, and numerous other innovations. His visionary ideas about energy transmission and technology continue to inspire scientists today.",
    image: "https://images.unsplash.com/photo-1583934555852-537536e49071?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoaXN0b3JpY2FsJTIwcG9ydHJhaXQlMjBwYWludGluZ3xlbnwxfHx8fDE3NjUyNTk5Mzl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    color: "cyan",
  },
];

export function EncounterInterface({ onBack }: EncounterInterfaceProps) {
  const [selectedFigure, setSelectedFigure] = useState(historicalFigures[0]);
  const [messages, setMessages] = useState<Array<{ type: "user" | "figure"; text: string }>>([
    { type: "figure", text: `Greetings, traveler from the future. I am ${historicalFigures[0].name}. What brings you to my time?` }
  ]);
  const [inputValue, setInputValue] = useState("");

  const handleSendMessage = (predefinedMessage?: string) => {
    const messageText = predefinedMessage || inputValue;
    if (!messageText.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { type: "user", text: messageText }]);
    setInputValue("");

    // Simulate response
    setTimeout(() => {
      const responses = [
        `Fascinating question. In my time, we approached such matters quite differently...`,
        `Ah, that reminds me of an interesting experience I once had...`,
        `I appreciate your curiosity. Let me share my perspective on this...`,
        `The future must be quite different from my era. Here's what I can tell you...`,
      ];
      const response = responses[Math.floor(Math.random() * responses.length)];
      setMessages(prev => [...prev, { type: "figure", text: response }]);
    }, 1000);
  };

  const getColorClasses = (color: string) => {
    const colors: { [key: string]: { text: string; border: string; bg: string } } = {
      amber: { text: "text-amber-400", border: "border-amber-400/30", bg: "bg-amber-400/10" },
      blue: { text: "text-blue-400", border: "border-blue-400/30", bg: "bg-blue-400/10" },
      cyan: { text: "text-cyan-400", border: "border-cyan-400/30", bg: "bg-cyan-400/10" },
    };
    return colors[color] || colors.cyan;
  };

  const colorClasses = getColorClasses(selectedFigure.color);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-purple-950 to-slate-950" />

      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden">
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-purple-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 0.8, 0.3],
            }}
            transition={{
              duration: Math.random() * 3 + 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      <div className="relative container mx-auto px-6 py-12 min-h-screen flex flex-col">
        {/* Header */}
        <motion.div
          className="mb-8"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-purple-300 hover:text-purple-200 transition-colors mb-6"
          >
            <ArrowLeft className="w-5 h-5" />
            Return to Timeline
          </button>
          <h2 className="text-purple-400 text-center">Historical Encounter</h2>
          <p className="text-center text-slate-400 mt-2">
            Engage with remarkable figures from across time
          </p>
        </motion.div>

        {/* Main Interface */}
        <div className="flex-1 grid grid-cols-1 lg:grid-cols-3 gap-6 max-w-7xl mx-auto w-full">
          {/* Character Card */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className={`glass-strong rounded-3xl p-6 border-2 ${colorClasses.border} h-full`}>
              {/* Holographic Frame */}
              <div className="relative aspect-[3/4] mb-6 rounded-2xl overflow-hidden glass">
                <img
                  src={selectedFigure.image}
                  alt={selectedFigure.name}
                  className="w-full h-full object-cover opacity-70"
                />
                
                {/* Scan lines */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-400/5 to-transparent bg-[length:100%_4px] animate-scan" />
                
                {/* Corner markers */}
                {[0, 1, 2, 3].map((i) => (
                  <motion.div
                    key={i}
                    className={`absolute ${i === 0 ? 'top-4 left-4' : i === 1 ? 'top-4 right-4' : i === 2 ? 'bottom-4 left-4' : 'bottom-4 right-4'} w-4 h-4`}
                    animate={{ opacity: [0.5, 1, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                  >
                    <div className={`absolute top-0 left-0 w-full h-0.5 ${colorClasses.bg}`} />
                    <div className={`absolute top-0 left-0 w-0.5 h-full ${colorClasses.bg}`} />
                  </motion.div>
                ))}
              </div>

              {/* Info */}
              <div className="space-y-4">
                <div>
                  <h3 className={colorClasses.text}>{selectedFigure.name}</h3>
                  <p className="text-slate-400">{selectedFigure.era}</p>
                </div>
                <p className="text-slate-300">{selectedFigure.bio}</p>
              </div>

              {/* Character selector */}
              <div className="mt-6 grid grid-cols-3 gap-2">
                {historicalFigures.map((figure) => (
                  <button
                    key={figure.id}
                    onClick={() => {
                      setSelectedFigure(figure);
                      setMessages([
                        { type: "figure", text: `Greetings, traveler from the future. I am ${figure.name}. What brings you to my time?` }
                      ]);
                    }}
                    className={`p-2 rounded-lg glass border transition-all ${
                      selectedFigure.id === figure.id 
                        ? `border-${figure.color}-400` 
                        : 'border-slate-700 hover:border-slate-600'
                    }`}
                  >
                    <User className="w-5 h-5 mx-auto text-slate-400" />
                  </button>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Chat Interface */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="glass-strong rounded-3xl p-6 border border-purple-400/30 h-full flex flex-col">
              <h3 className="text-purple-300 mb-4 flex items-center gap-2">
                <MessageCircle className="w-6 h-6" />
                Temporal Communication Matrix
              </h3>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto mb-4 space-y-4 pr-2">
                {messages.map((message, index) => (
                  <motion.div
                    key={index}
                    className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                  >
                    <div className={`max-w-[80%] px-4 py-3 rounded-2xl ${
                      message.type === "user" 
                        ? "glass bg-cyan-400/10 border border-cyan-400/30" 
                        : `glass ${colorClasses.bg} border ${colorClasses.border}`
                    }`}>
                      <p className="text-slate-200">{message.text}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="grid grid-cols-2 gap-3 mb-4">
                <button
                  onClick={() => handleSendMessage("Tell me about your greatest achievement")}
                  className="px-4 py-3 rounded-xl glass border border-purple-400/30 hover:border-purple-400 transition-all text-purple-300 flex items-center justify-center gap-2"
                >
                  <MessageCircle className="w-4 h-4" />
                  Ask a Question
                </button>
                <button
                  onClick={() => handleSendMessage("What was life like in your era?")}
                  className="px-4 py-3 rounded-xl glass border border-cyan-400/30 hover:border-cyan-400 transition-all text-cyan-300 flex items-center justify-center gap-2"
                >
                  <Book className="w-4 h-4" />
                  Learn About Their Era
                </button>
              </div>

              {/* Input */}
              <div className="flex gap-3">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
                  placeholder="Type your message..."
                  className="flex-1 px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-slate-200 placeholder-slate-500 focus:border-purple-400 focus:outline-none transition-colors"
                />
                <button
                  onClick={() => handleSendMessage()}
                  className="px-6 py-3 rounded-xl glass-strong border border-purple-400/30 hover:border-purple-400 transition-all text-purple-300"
                >
                  Send
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
