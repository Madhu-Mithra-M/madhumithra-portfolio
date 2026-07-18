import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const STATES = [
  { name: "SAFE", color: "#3ed9c4", risk: "0.08" },
  { name: "SUSPICIOUS", color: "#f5b95e", risk: "0.34" },
  { name: "UNDER_ATTACK", color: "#ef8f4f", risk: "0.61" },
  { name: "LOCKDOWN", color: "#ef6f6f", risk: "0.87" },
  { name: "SUSPICIOUS", color: "#f5b95e", risk: "0.29" },
  { name: "SAFE", color: "#3ed9c4", risk: "0.05" },
];

export function StateMachineWidget() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => setIndex((i) => (i + 1) % STATES.length), 2200);
    return () => clearInterval(id);
  }, []);

  const current = STATES[index];

  return (
    <div className="glass w-full max-w-xs rounded-2xl p-5 font-mono text-xs">
      <div className="flex items-center justify-between text-mist">
        <span className="uppercase tracking-widest">Security State</span>
        <span className="h-1.5 w-1.5 animate-pulse rounded-full" style={{ backgroundColor: current.color }} />
      </div>

      <div className="mt-3 h-8 overflow-hidden">
        <AnimatePresence mode="wait">
          <motion.div
            key={index}
            initial={{ y: 16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -16, opacity: 0 }}
            transition={{ duration: 0.35 }}
            className="text-lg font-semibold tracking-tight"
            style={{ color: current.color }}
          >
            {current.name}
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-4 flex items-center justify-between text-mist">
        <span>risk_score</span>
        <span className="text-mist-bright">{current.risk}</span>
      </div>

      <div className="mt-2 h-1.5 w-full overflow-hidden rounded-full bg-panel-border/60">
        <motion.div
          className="h-full rounded-full"
          style={{ backgroundColor: current.color }}
          animate={{ width: `${Number(current.risk) * 100}%` }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        />
      </div>

      <p className="mt-4 leading-relaxed text-mist/80">
        Live model of the state machine from my patented AI-agent defense system.
      </p>
    </div>
  );
}
