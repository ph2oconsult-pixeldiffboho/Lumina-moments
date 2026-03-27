'use client';

import React, { useState } from 'react';
import { Moment } from '../data/journey';
import { Zap, BookOpen, Home as HomeIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import Link from 'next/link';

interface MomentScreenProps {
  phaseTitle: string;
  moment: Moment;
  onComplete: () => void;
}

export default function MomentScreen({ phaseTitle, moment, onComplete }: MomentScreenProps) {
  const [mode, setMode] = useState<'quick' | 'learn'>('quick');

  return (
    <div className="max-w-md mx-auto min-h-[100dvh] bg-stone-50 flex flex-col font-sans selection:bg-emerald-100 select-none">
      {/* Top Navigation */}
      <div className="fixed top-0 left-0 w-full p-6 z-30 flex justify-between items-center pt-[calc(1.5rem+env(safe-area-inset-top,0px))]">
        <Link 
          href="/"
          className="w-10 h-10 bg-white/80 backdrop-blur-md rounded-full border border-stone-200 shadow-sm flex items-center justify-center text-stone-400 hover:text-stone-600 transition-all active:scale-90"
        >
          <HomeIcon className="w-4 h-4" />
        </Link>

        <div className="bg-white/80 backdrop-blur-md p-1.5 rounded-full border border-stone-200 shadow-sm flex gap-1">
          <button
            onClick={() => setMode('quick')}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all active:scale-95 ${
              mode === 'quick' ? 'bg-stone-900 text-white shadow-md' : 'text-stone-400 hover:text-stone-600'
            }`}
          >
            <Zap className="w-3.5 h-3.5" />
            Quick
          </button>
          <button
            onClick={() => setMode('learn')}
            className={`flex items-center gap-2 px-6 py-2.5 rounded-full text-[10px] font-bold uppercase tracking-widest transition-all active:scale-95 ${
              mode === 'learn' ? 'bg-stone-900 text-white shadow-md' : 'text-stone-400 hover:text-stone-600'
            }`}
          >
            <BookOpen className="w-3.5 h-3.5" />
            Learn
          </button>
        </div>

        <div className="w-10" /> {/* Spacer for balance */}
      </div>

      <main className="flex-1 p-6 pt-[calc(6rem+env(safe-area-inset-top,0px))] pb-[calc(8rem+env(safe-area-inset-bottom,0px))] space-y-10 overflow-y-auto">
        <AnimatePresence mode="wait">
          {mode === 'quick' ? (
            <motion.div
              key="quick"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-10"
            >
              {/* Header */}
              <div className="space-y-1 px-2">
                <h1 className="text-3xl font-bold text-stone-900 tracking-tight leading-tight select-text">
                  {moment.title}
                </h1>
              </div>

              {/* Quick Action Card */}
              <div className="bg-stone-900 text-white p-10 rounded-[40px] shadow-2xl shadow-stone-300 space-y-6">
                <div className="space-y-2">
                  <p className="text-[10px] font-bold text-emerald-400 uppercase tracking-[0.25em]">
                    TRY THIS NOW
                  </p>
                  <h2 className="text-3xl font-medium leading-tight tracking-tight select-text">
                    {moment.tryThis}
                  </h2>
                </div>
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="learn"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              className="space-y-12"
            >
              {/* Header */}
              <div className="space-y-1 px-2">
                <h1 className="text-3xl font-bold text-stone-900 tracking-tight leading-tight select-text">
                  {moment.title}
                </h1>
              </div>

              {/* Full Content Sections */}
              <div className="space-y-12 px-2">
                <section className="space-y-3">
                  <h3 className="text-[10px] font-bold text-emerald-700 uppercase tracking-[0.15em]">
                    Moment
                  </h3>
                  <p className="text-xl text-stone-700 leading-relaxed font-light select-text">
                    {moment.theMoment}
                  </p>
                </section>

                <section className="space-y-3">
                  <h3 className="text-[10px] font-bold text-emerald-700 uppercase tracking-[0.15em]">
                    Notice
                  </h3>
                  <p className="text-xl text-stone-700 leading-relaxed font-light whitespace-pre-line select-text">
                    {moment.whatYouNotice}
                  </p>
                </section>

                <section className="space-y-3">
                  <h3 className="text-[10px] font-bold text-emerald-700 uppercase tracking-[0.15em]">
                    Try This
                  </h3>
                  <p className="text-xl text-stone-900 leading-relaxed font-medium select-text">
                    {moment.tryThis}
                  </p>
                </section>

                <section className="space-y-3">
                  <h3 className="text-[10px] font-bold text-stone-400 uppercase tracking-[0.15em]">
                    Why This Matters
                  </h3>
                  <p className="text-stone-500 font-light leading-relaxed select-text">
                    {moment.whyThisMatters}
                  </p>
                </section>

                <section className="bg-white p-8 rounded-[40px] border border-stone-100 shadow-sm space-y-8">
                  <h3 className="text-[10px] font-bold text-stone-400 uppercase tracking-[0.15em]">
                    Later Say
                  </h3>
                  
                  <div className="space-y-8">
                    <div className="space-y-2">
                      <p className="text-[9px] font-bold text-stone-400 uppercase tracking-widest">
                        Reflective
                      </p>
                      <p className="text-xl text-stone-800 italic font-light leading-relaxed select-text">
                        “{moment.laterReflective}”
                      </p>
                    </div>

                    <div className="space-y-2">
                      <p className="text-[9px] font-bold text-stone-400 uppercase tracking-widest">
                        Casual
                      </p>
                      <p className="text-xl text-stone-800 italic font-light leading-relaxed select-text">
                        “{moment.laterCasual}”
                      </p>
                    </div>
                  </div>
                </section>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>

      {/* Action */}
      <div className="fixed bottom-0 left-0 w-full p-8 pb-[calc(2rem+env(safe-area-inset-bottom,0px))] bg-gradient-to-t from-stone-50 via-stone-50 to-transparent z-20">
        <div className="max-w-md mx-auto">
          <button
            onClick={onComplete}
            className="w-full py-5 bg-stone-900 text-white rounded-full font-medium transition-all active:scale-[0.96] shadow-xl shadow-stone-200"
          >
            We did this
          </button>
        </div>
      </div>
    </div>
  );
}
