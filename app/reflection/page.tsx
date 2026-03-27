'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { saveReflection } from '@/lib/store';

type ReflectionValue = 'helped' | 'little' | 'not really';

const RESPONSES: Record<ReflectionValue, string> = {
  'helped': 'That’s a great moment.',
  'little': 'That still counts.',
  'not really': 'That’s okay. You showed up.'
};

function ReflectionContent() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const [selected, setSelected] = useState<ReflectionValue | null>(null);
  const [momentTitle, setMomentTitle] = useState<string>('');

  useEffect(() => {
    const moment = searchParams.get('moment');
    if (moment) {
      setMomentTitle(moment);
    }
  }, [searchParams]);

  const handleSelect = (value: ReflectionValue) => {
    setSelected(value);
    saveReflection(momentTitle, value);
  };

  const handleHome = () => {
    router.push('/');
  };

  return (
    <div className="max-w-md mx-auto min-h-screen bg-stone-50 flex flex-col items-center justify-center p-8 font-sans selection:bg-emerald-100">
      <AnimatePresence mode="wait">
        {!selected ? (
          <motion.div
            key="question"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="w-full space-y-12 text-center"
          >
            <h1 className="text-2xl font-medium text-stone-900 tracking-tight">
              How did that feel?
            </h1>

            <div className="space-y-3">
              {(['helped', 'little', 'not really'] as ReflectionValue[]).map((value) => (
                <button
                  key={value}
                  onClick={() => handleSelect(value)}
                  className="w-full py-5 px-8 bg-white border border-stone-100 rounded-[24px] text-stone-600 text-sm font-medium shadow-sm active:scale-[0.98] transition-all hover:border-stone-200"
                >
                  {value === 'helped' ? 'That helped' : value === 'little' ? 'A little' : 'Not really'}
                </button>
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="response"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="w-full space-y-12 text-center"
          >
            <p className="text-xl text-stone-900 font-medium tracking-tight">
              {RESPONSES[selected]}
            </p>

            <button
              onClick={handleHome}
              className="w-full py-5 px-8 bg-stone-900 text-white rounded-[24px] text-sm font-medium shadow-lg active:scale-[0.98] transition-all"
            >
              Back to Home
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function ReflectionPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-stone-50" />}>
      <ReflectionContent />
    </Suspense>
  );
}
