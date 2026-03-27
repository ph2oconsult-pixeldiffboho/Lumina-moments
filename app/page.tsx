'use client';
import { useState, useEffect } from 'react';
import { journeyData } from '@/data/journey';
import { getProgress } from '@/lib/store';
import ProgressRow from '@/components/ProgressRow';
import Onboarding from '@/components/Onboarding';
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
    if (progress.completedDays === 0) return "Start here — just a few minutes a day";
    if (progress.completedDays === 1) return "Good start. Come back tomorrow.";
    if (progress.completedDays === 2) return "You’re starting to notice things.";
    if (progress.completedDays === 3) return "You’ve already changed something. Keep going.";
    if (progress.completedDays === 5) return "This part can feel uncomfortable. That’s okay.";
    if (progress.completedDays === 7) return "You’ve completed your first week.";
    return null;
  };

  const message = getCompletionMessage();

  return (
    <div className="max-w-md mx-auto p-6 pt-12 space-y-8">
      <div className="space-y-2">
        {message && (
          <p className="text-sm text-stone-500 font-light italic mb-4">
            {message}
          </p>
        )}
        <div className="flex items-center gap-3">
          <h2 className="text-sm font-medium text-emerald-800 uppercase tracking-widest">{currentPhase.title}</h2>
          {isInitialJourney && (
            <span className="px-2 py-0.5 bg-emerald-100 text-emerald-700 text-[10px] font-bold uppercase tracking-tighter rounded">
              Start Here
            </span>
          )}
        </div>
        <h1 className="text-2xl font-semibold text-stone-900">{currentWeek.title}</h1>
      </div>

      <div className="bg-white p-6 rounded-3xl shadow-sm border border-stone-100 space-y-4">
        <p className="text-sm text-stone-500 uppercase tracking-wider">Today's Step</p>
        <h3 className="text-xl font-medium text-stone-900">{todayStep.title}</h3>
        <Link 
          href="/today"
          className="block w-full py-4 bg-emerald-600 text-white rounded-full font-medium text-center hover:bg-emerald-700 transition-colors"
        >
          Start Today
        </Link>
      </div>

      <ProgressRow progress={progress} />
    </div>
  );
}
