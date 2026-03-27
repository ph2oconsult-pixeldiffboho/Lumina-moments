'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { completeOnboarding } from '@/lib/store';

interface OnboardingProps {
  onComplete: () => void;
}

const screens = [
  {
    title: "When something’s wrong… but they don’t say it",
    body: ["They go quiet", "They say “I’m fine”", "But you can feel something isn’t right"],
  },
  {
    title: "Most moments like this get missed",
    body: ["Not because we don’t care", "But because we don’t know what to say"],
  },
  {
    title: "This gives you something to do in that moment",
    body: ["Something your child can try", "Something you can say"],
  },
  {
    title: "Start with something real",
    body: ["This isn’t something to learn", "It’s something to try"],
    button: "Start Day 1",
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
    <div className="fixed inset-0 bg-stone-50 z-50 flex flex-col p-8 pt-32">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.5, ease: [0.23, 1, 0.32, 1] }}
          className="flex-1 space-y-10"
        >
          <h1 className="text-3xl font-medium tracking-tight text-stone-900 leading-snug max-w-[280px]">
            {screens[currentStep].title}
          </h1>
          
          <div className="space-y-3">
            {screens[currentStep].body.map((line, i) => (
              <p key={i} className="text-lg text-stone-500 font-light leading-relaxed">
                {line}
              </p>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="pb-16">
        <button
          onClick={handleNext}
          className="w-full py-4 bg-emerald-700 text-white rounded-full text-base font-medium transition-all active:scale-[0.98] shadow-sm hover:bg-emerald-800"
        >
          {screens[currentStep].button || "Next"}
        </button>
      </div>
    </div>
  );
}
