'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { completeOnboarding } from '@/lib/store';

interface OnboardingProps {
  onComplete: () => void;
}

const screens = [
  {
    title: "Some moments are harder than they look",
    body: ["Not being picked", "Saying nothing when you want to", "Feeling left out"],
  },
  {
    title: "This helps you handle those moments",
    body: ["One small step each day", "Something your child can try", "Something you can say"],
  },
  {
    title: "Just a few minutes a day",
    body: ["Open the app", "Do today’s step", "Talk about it later"],
  },
  {
    title: "Start with Day 1",
    body: ["Week 1 — Noticing Feelings"],
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
    <div className="fixed inset-0 bg-stone-50 z-50 flex flex-col p-8 pt-24">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentStep}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          className="flex-1 space-y-12"
        >
          <h1 className="text-4xl font-light tracking-tight text-stone-900 leading-tight">
            {screens[currentStep].title}
          </h1>
          
          <div className="space-y-4">
            {screens[currentStep].body.map((line, i) => (
              <p key={i} className="text-xl text-stone-500 font-light">
                {line}
              </p>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      <div className="pb-12">
        <button
          onClick={handleNext}
          className="w-full py-4 bg-stone-900 text-stone-50 rounded-full text-lg font-medium transition-transform active:scale-95"
        >
          {screens[currentStep].button || "Next"}
        </button>
      </div>
    </div>
  );
}
