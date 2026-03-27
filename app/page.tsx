'use client';
import { useState, useEffect } from 'react';
import { journeyData } from '../data/journey';
import { getProgress } from '../lib/store';
import Onboarding from '../components/Onboarding';
import Link from 'next/link';
import { motion } from 'motion/react';
import { ArrowRight, Flame } from 'lucide-react';

export default function Home() {
  const [progress, setProgress] = useState(getProgress());
  const [showOnboarding, setShowOnboarding] = useState(false);

  useEffect(() => {
    const currentProgress = getProgress();
    setProgress(currentProgress);
    if (!currentProgress.onboardingComplete) {
      setShowOnboarding(true);
    }
  }, []);

  const handleOnboardingComplete = () => {
    setShowOnboarding(false);
    setProgress(getProgress());
  };

  if (showOnboarding) {
    return <Onboarding onComplete={handleOnboardingComplete} />;
  }

  const currentPhase = journeyData[progress.phaseIndex] || journeyData[0];
  const currentWeek = currentPhase.weeks[progress.weekIndex] || currentPhase.weeks[0];
  const currentMoment = currentWeek.moments[progress.momentIndex] || currentWeek.moments[0];

  const DAILY_LIMIT = 3;
  const hasCompletedToday = progress.dailyCompletedCount > 0;
  const limitReached = progress.dailyCompletedCount >= DAILY_LIMIT;

  return (
    <div className="max-w-md mx-auto min-h-[100dvh] bg-stone-50 flex flex-col font-sans selection:bg-emerald-100 select-none">
      <header className="p-8 pt-[calc(4rem+env(safe-area-inset-top,0px))]">
        <div className="space-y-1">
          <p className="text-[10px] font-bold text-stone-400 uppercase tracking-[0.25em]">
            Lumina Moments
          </p>
          <h1 className="text-2xl font-medium text-stone-900 tracking-tight">
            Building Confidence
          </h1>
        </div>
      </header>

      <main className="flex-1 p-8 flex flex-col justify-center space-y-12">
        {/* Main Card */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-white p-10 rounded-[40px] shadow-2xl shadow-stone-200 border border-stone-100 space-y-10"
        >
          {hasCompletedToday ? (
            <div className="space-y-8">
              <div className="space-y-3">
                <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-[0.2em]">
                  Moment Complete
                </span>
                <h2 className="text-3xl font-medium text-stone-900 tracking-tight leading-tight select-text">
                  You showed up well.
                </h2>
              </div>

              {!limitReached && (
                <div className="p-6 bg-stone-50 rounded-[32px] border border-stone-100 space-y-2">
                  <p className="text-[9px] font-bold text-stone-400 uppercase tracking-[0.2em]">Next Recommended</p>
                  <p className="text-stone-900 font-medium leading-tight select-text">{currentMoment.title}</p>
                </div>
              )}
            </div>
          ) : (
            <div className="space-y-3">
              <span className="text-[10px] font-bold text-emerald-700 uppercase tracking-[0.2em]">
                Today&apos;s Focus
              </span>
              <h2 className="text-3xl font-medium text-stone-900 tracking-tight leading-tight select-text">
                {currentMoment.title}
              </h2>
              <p className="text-stone-500 font-light leading-relaxed select-text">
                A small step that builds real confidence.
              </p>
            </div>
          )}

          {limitReached ? (
            <div className="w-full p-6 bg-stone-100 text-stone-500 rounded-[24px] font-medium text-center text-sm">
              That&apos;s enough for today. Let it settle.
            </div>
          ) : (
            <Link 
              href="/today"
              className="group flex items-center justify-between w-full p-6 bg-stone-900 text-white rounded-[24px] font-medium transition-all active:scale-[0.96] hover:bg-stone-800"
            >
              <span>{hasCompletedToday ? "Next Moment" : "Start Moment"}</span>
              <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center group-hover:bg-white/20 transition-colors">
                <ArrowRight className="w-5 h-5" />
              </div>
            </Link>
          )}
        </motion.div>

        {/* Subtle Message */}
        <p className="text-center text-stone-400 text-[10px] font-bold uppercase tracking-[0.2em] px-8 leading-relaxed">
          Confidence is built in small moments.
        </p>
      </main>

      <footer className="p-8 pb-[calc(3rem+env(safe-area-inset-bottom,0px))]">
        <div className="h-px w-full bg-stone-200 mb-8" />
        <div className="flex justify-between items-center text-[10px] font-bold text-stone-400 uppercase tracking-[0.2em]">
          <span>{currentPhase.title}</span>
          <Link href="/progress" className="text-emerald-700 hover:text-emerald-800">
            View Journey
          </Link>
        </div>
      </footer>
    </div>
  );
}
