'use client';
import { useState, useEffect } from 'react';
import { journeyData } from '@/data/journey';
import { getProgress, markDayComplete } from '@/lib/store';
import { useRouter } from 'next/navigation';

export default function Today() {
  const [progress, setProgress] = useState(getProgress());
  const [completed, setCompleted] = useState(false);
  const router = useRouter();

  const currentPhase = journeyData[progress.phaseIndex];
  const currentWeek = currentPhase.weeks[progress.weekIndex];
  const todayStep = currentWeek.days[progress.dayIndex];

  const handleComplete = () => {
    markDayComplete();
    setCompleted(true);
  };

  return (
    <div className="max-w-md mx-auto p-6 pt-12 min-h-screen flex flex-col">
      {!completed ? (
        <div className="space-y-8 flex-1">
          <div className="space-y-2">
            <h2 className="text-sm font-medium text-emerald-800 uppercase tracking-widest">{currentPhase.title} — {currentWeek.title}</h2>
            <h1 className="text-3xl font-semibold text-stone-900">{todayStep.title}</h1>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-medium text-emerald-800 uppercase tracking-widest">You know when…</h3>
            <p className="text-stone-700 text-lg leading-relaxed">{todayStep.youKnowWhen}</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-medium text-emerald-800 uppercase tracking-widest">What happens</h3>
            <p className="text-stone-700 text-lg leading-relaxed">{todayStep.whatHappens}</p>
          </div>

          <div className="space-y-4">
            <h3 className="text-sm font-medium text-emerald-800 uppercase tracking-widest">Try this today</h3>
            <p className="text-stone-700 text-lg leading-relaxed">{todayStep.tryThis}</p>
          </div>

          <div className="bg-stone-100 p-6 rounded-3xl">
            <h3 className="text-sm font-medium text-stone-600 uppercase tracking-widest mb-2">Parent moment</h3>
            <p className="text-stone-800 italic">{todayStep.parentMoment}</p>
          </div>

          <button 
            onClick={handleComplete}
            className="w-full py-4 bg-emerald-600 text-white rounded-full font-medium hover:bg-emerald-700 transition-colors"
          >
            I tried this
          </button>
        </div>
      ) : (
        <div className="flex-1 flex flex-col items-center justify-center text-center space-y-6">
          <h2 className="text-3xl font-semibold text-stone-900">You showed up today. That matters.</h2>
          <button 
            onClick={() => router.push('/')}
            className="px-8 py-3 bg-stone-200 text-stone-800 rounded-full font-medium hover:bg-stone-300 transition-colors"
          >
            Back to Home
          </button>
        </div>
      )}
    </div>
  );
}
