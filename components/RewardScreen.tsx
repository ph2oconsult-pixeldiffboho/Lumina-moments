'use client';

import React from 'react';
import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

interface RewardScreenProps {
  headline: string;
  onContinue: () => void;
}

export default function RewardScreen({ headline, onContinue }: RewardScreenProps) {
  return (
    <div className="max-w-md mx-auto min-h-[100dvh] bg-stone-50 flex flex-col items-center justify-center p-10 pt-[env(safe-area-inset-top,24px)] pb-[calc(2.5rem+env(safe-area-inset-bottom,0px))] font-sans selection:bg-emerald-100 select-none">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: [0.23, 1, 0.32, 1] }}
        className="text-center space-y-16 w-full"
      >
        {/* Visual Win */}
        <div className="flex justify-center">
          <motion.div
            initial={{ scale: 0, rotate: -20 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ 
              delay: 0.2, 
              type: "spring", 
              stiffness: 260, 
              damping: 20 
            }}
            className="w-24 h-24 bg-emerald-600 rounded-[32px] flex items-center justify-center shadow-2xl shadow-emerald-200"
          >
            <CheckCircle2 className="w-12 h-12 text-white" />
          </motion.div>
        </div>

        {/* The Win Message */}
        <div className="space-y-6">
          <h1 className="text-4xl font-bold text-stone-900 tracking-tight leading-[1.15] px-4 select-text">
            {headline}
          </h1>
        </div>

        {/* Action */}
        <div className="pt-8 w-full">
          <button
            onClick={onContinue}
            className="w-full py-5 bg-stone-900 text-white rounded-[24px] font-medium transition-all active:scale-[0.96] shadow-xl shadow-stone-200"
          >
            Continue
          </button>
        </div>
      </motion.div>
    </div>
  );
}
