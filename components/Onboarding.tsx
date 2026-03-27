'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { completeOnboarding } from '../lib/store';
import { ArrowRight, Sprout, Heart, Sparkles, Users } from 'lucide-react';

interface OnboardingProps {
  onComplete: () => void;
}

const screens = [
  {
    title: "The child is the center of the journey",
    icon: <Sprout className="w-16 h-16 text-emerald-600" />,
    color: "bg-emerald-50",
  },
  {
    title: "You are the guide, not the controller",
    icon: <Heart className="w-16 h-16 text-rose-500" />,
    color: "bg-rose-50",
  },
  {
    title: "Confidence is built in the real world",
    icon: <Users className="w-16 h-16 text-blue-600" />,
    color: "bg-blue-50",
    button: "Start Journey",
  },
];

export default function Onboarding({ onComplete }: OnboardingProps) {
  const [currentStep, setCurrentStep] = useState(0);

  const handleNext = () => {
    if (currentStep === screens.length - 1) {
      completeOnboarding();
      onComplete();
    } else {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <div className="fixed inset-0 bg-stone-50 z-50 flex flex-col selection:bg-emerald-100 overflow-hidden select-none">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
          className="flex-1 flex flex-col p-10 pt-[calc(6rem+env(safe-area-inset-top,0px))]"
        >
          <div className="flex-1 flex flex-col items-center justify-center space-y-16 text-center">
            {/* Visual Metaphor */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
              className={`w-32 h-32 ${screens[currentStep].color} rounded-full flex items-center justify-center shadow-inner`}
            >
              {screens[currentStep].icon}
            </motion.div>

            <motion.h1 
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="text-4xl font-medium tracking-tight text-stone-900 leading-tight max-w-[280px] select-text"
            >
              {screens[currentStep].title}
            </motion.h1>
          </div>

          <div className="pb-[calc(4rem+env(safe-area-inset-bottom,0px))] space-y-8">
            {/* Progress Dots */}
            <div className="flex justify-center gap-2">
              {screens.map((_, i) => (
                <div 
                  key={i} 
                  className={`h-1 rounded-full transition-all duration-500 ${i === currentStep ? 'w-8 bg-stone-900' : 'w-2 bg-stone-200'}`}
                />
              ))}
            </div>

            <button
              onClick={handleNext}
              className="w-full py-5 bg-stone-900 text-white rounded-[24px] font-medium flex items-center justify-center gap-2 transition-all active:scale-[0.96] shadow-xl shadow-stone-200"
            >
              {screens[currentStep].button || "Continue"}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}
