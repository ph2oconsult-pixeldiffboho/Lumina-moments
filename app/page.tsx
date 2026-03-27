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
    if (progress.completedDays === 0) return "Confidence is built in small moments.";
    if (progress.completedDays === 1) return "That’s how confidence builds.";
    if (progress.completedDays === 2) return "You handled something today.";
    if (progress.completedDays === 3) return "That’s a strong step forward.";
    if (progress.completedDays === 5) return "Every small step builds real skill.";
    if (progress.completedDays === 7) return "One week. You're building real confidence.";
    if (progress.completedDays === 14) return "Two weeks of steady progress. You're doing great.";
    if (progress.completedDays === 21) return "You’ve completed three weeks of steady growth.";
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
            Build confidence through real moments
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
            A small step that builds real confidence
          </p>
        </div>
      </div>

      <div className="space-y-6">
        <ProgressRow progress={progress} />
      </div>
    </div>
  );
}
