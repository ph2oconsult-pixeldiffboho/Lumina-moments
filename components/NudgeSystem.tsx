'use client';

import React, { useEffect, useState } from 'react';
import { getProgress, markNudgeSent } from '../lib/store';
import { motion, AnimatePresence } from 'motion/react';
import { Bell, X } from 'lucide-react';

const NUDGE_MESSAGES = [
  "One small moment today",
  "You don’t need many. Just one",
  "There’s a moment waiting",
  "A quiet moment for you both",
  "Just one small shift today"
];

export default function NudgeSystem() {
  const [showNudge, setShowNudge] = useState(false);
  const [message, setMessage] = useState("");

  useEffect(() => {
    const checkNudge = () => {
      const progress = getProgress();
      const today = new Date().toDateString();

      // Rules:
      // 1. Max 1 per day
      // 2. Only if no moment completed today
      if (progress.lastNudgeDate !== today && progress.lastCompletedDate !== today) {
        const randomMessage = NUDGE_MESSAGES[Math.floor(Math.random() * NUDGE_MESSAGES.length)];
        setMessage(randomMessage);
        setShowNudge(true);
        markNudgeSent();

        // Try browser notification if permitted
        if ("Notification" in window && Notification.permission === "granted") {
          new Notification("Lumina", {
            body: randomMessage,
            icon: "/favicon.ico" // Assuming favicon exists
          });
        }
      }
    };

    // Check on mount and every hour (if the tab stays open)
    checkNudge();
    const interval = setInterval(checkNudge, 1000 * 60 * 60);
    return () => clearInterval(interval);
  }, []);

  const requestPermission = async () => {
    if ("Notification" in window) {
      const permission = await Notification.requestPermission();
      if (permission === "granted") {
        setShowNudge(false);
      }
    }
  };

  return (
    <AnimatePresence>
      {showNudge && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          className="fixed bottom-24 left-6 right-6 z-50"
        >
          <div className="bg-white/90 backdrop-blur-xl border border-stone-200 p-6 rounded-[32px] shadow-2xl shadow-stone-200 flex items-center gap-4">
            <div className="w-12 h-12 bg-stone-900 rounded-full flex items-center justify-center text-white shrink-0">
              <Bell className="w-5 h-5" />
            </div>
            <div className="flex-1 space-y-1">
              <p className="text-sm text-stone-900 font-medium leading-tight">
                {message}
              </p>
              <button
                onClick={requestPermission}
                className="text-[10px] font-bold text-stone-400 uppercase tracking-widest hover:text-stone-600 transition-colors"
              >
                Enable system nudges
              </button>
            </div>
            <button
              onClick={() => setShowNudge(false)}
              className="p-2 text-stone-300 hover:text-stone-500 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
