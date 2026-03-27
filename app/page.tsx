'use client';
import { useState, useEffect } from 'react';
import { journeyData } from '../data/journey';
import { getProgress } from '../lib/store';
import ProgressRow from '../components/ProgressRow';
import Onboarding from '../components/Onboarding';
import Link from 'next/link';

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

  const currentPhase = journeyData[progress.phaseIndex];
  const currentWeek = currentPhase.weeks[progress.weekIndex];
  const todayStep = currentWeek.days[progress.dayIndex];

  const isInitialJourney = progress.completedDays < 3;
  
  const getCompletionMessage = () => {
    if (progress.completedDays === 0) return "Start with something small. Just a few minutes.";
    if (progress.completedDays === 1) return "You noticed something today. That’s how it starts.";
    if (progress.completedDays === 2) return "Small shifts lead to big changes.";
    if (progress.completedDays === 3) return "You’re building a new way of being together.";
    if (progress.completedDays === 5) return "Growth can feel quiet. That’s okay.";
    if (progress.completedDays === 7) return "One week. Something has already changed.";
    return null;
  };

  const message = getCompletionMessage();

  return (
    <div className="max-w-md mx-auto p-6 pt-16 space-y-10">
      <div className="space-y-6">
        {message && (
          <p className="text-sm text-stone-500 font-light italic px-2">
            {message}
          </p>
        )}
        <div className="space-y-4">
          <p className="text-[11px] text-stone-400 uppercase tracking-[0.2em] font-medium">
            For when something doesn’t feel quite right
          </p>
          <div className="space-y-1">
            <div className="flex items-center gap-3">
              <h2 className="text-xs font-semibold text-emerald-800 uppercase tracking-widest">{currentPhase.title}</h2>
              {isInitialJourney && (
                <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 text-[9px] font-bold uppercase tracking-tight rounded-sm">
                  Start Here
                </span>
              )}
            </div>
            <h1 className="text-2xl font-semibold text-stone-900 tracking-tight">{currentWeek.title}</h1>
          </div>
        </div>
      </div>

      <div className="bg-white p-8 rounded-[32px] shadow-sm border border-stone-100 space-y-6">
        <div className="space-y-1">
          <p className="text-[10px] text-stone-400 uppercase tracking-[0.15em] font-bold">TODAY</p>
          <h3 className="text-xl font-medium text-stone-900 tracking-tight">{todayStep.title}</h3>
        </div>
        
        <div className="space-y-3">
          <Link 
            href="/today"
            className="block w-full py-4 bg-emerald-700 text-white rounded-full font-medium text-center hover:bg-emerald-800 transition-all shadow-sm active:scale-[0.98]"
          >
            Try this today (2 mins)
          </Link>
          <p className="text-center text-xs text-stone-400 font-light italic">
            A small step that can change how today feels
          </p>
        </div>
      </div>

      <div className="space-y-6">
        <ProgressRow progress={progress} />
      </div>
    </div>
  );
}
