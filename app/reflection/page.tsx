'use client';

import React, { useState, useEffect, Suspense } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { motion, AnimatePresence } from 'motion/react';
import { saveReflection } from '@/lib/store';
import { Home as HomeIcon } from 'lucide-react';
import Link from 'next/link';

type ReflectionValue = 'helped' | 'little' | 'not really';

const RESPONSES: Record<ReflectionValue, string> = {
  'helped': 'That’s real growth in action.',
  'little': 'Every small step counts.',
  'not really': 'Showing up is the first step.'
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
    <div className="max-w-md mx-auto min-h-[100dvh] bg-stone-50 flex flex-col items-center justify-center p-8 pt-[env(safe-area-inset-top,24px)] pb-[calc(2rem+env(safe-area-inset-bottom,0px))] font-sans selection:bg-emerald-100 select-none">
      {/* Top Navigation */}
      <div className="fixed top-0 left-0 w-full p-6 z-30 flex justify-start items-center pt-[calc(1.5rem+env(safe-area-inset-top,0px))]">
        <Link 
          href="/"
          className="w-10 h-10 bg-white/80 backdrop-blur-md rounded-full border border-stone-200 shadow-sm flex items-center justify-center text-stone-400 hover:text-stone-600 transition-all active:scale-90"
        >
          <HomeIcon className="w-4 h-4" />
        </Link>
      </div>

      <AnimatePresence mode="wait">
        {!selected ? (
          <motion.div
            key="question"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            className="w-full space-y-12 text-center"
          >
            <h1 className="text-2xl font-medium text-stone-900 tracking-tight select-text">
              What happened in the real world?
            </h1>

            <div className="space-y-3">
              {(['helped', 'little', 'not really'] as ReflectionValue[]).map((value) => (
                <button
                  key={value}
                  onClick={() => handleSelect(value)}
                  className="w-full py-5 px-8 bg-white border border-stone-100 rounded-[24px] text-stone-600 text-sm font-medium shadow-sm active:scale-[0.96] transition-all hover:border-stone-200"
                >
                  {value === 'helped' ? 'They did it on their own' : value === 'little' ? 'They needed help' : 'They avoided it'}
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
            <p className="text-xl text-stone-900 font-medium tracking-tight select-text">
              {RESPONSES[selected]}
            </p>

            <button
              onClick={handleHome}
              className="w-full py-5 px-8 bg-stone-900 text-white rounded-[24px] text-sm font-medium shadow-lg active:scale-[0.96] transition-all"
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
    <Suspense fallback={<div className="min-h-[100dvh] bg-stone-50" />}>
      <ReflectionContent />
    </Suspense>
  );
}
