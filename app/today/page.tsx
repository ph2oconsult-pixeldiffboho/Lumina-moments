'use client';
import { useState, useEffect } from 'react';
import { journeyData } from '../../data/journey';
import { getProgress, markDayComplete } from '../../lib/store';
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
    <div className="max-w-md mx-auto p-6 pt-16 min-h-screen flex flex-col">
      {!completed ? (
        <div className="space-y-10 flex-1">
          <div className="space-y-2">
            <h2 className="text-[10px] font-bold text-emerald-800 uppercase tracking-[0.2em]">{currentPhase.title} — {currentWeek.title}</h2>
            <h1 className="text-3xl font-semibold text-stone-900 tracking-tight">{todayStep.title}</h1>
          </div>

          <div className="space-y-3">
            <h3 className="text-[10px] font-bold text-stone-400 uppercase tracking-[0.15em]">The moment</h3>
            <p className="text-stone-700 text-lg leading-relaxed font-light">{todayStep.youKnowWhen}</p>
          </div>

          <div className="space-y-3">
            <h3 className="text-[10px] font-bold text-stone-400 uppercase tracking-[0.15em]">What you might notice</h3>
            <p className="text-stone-700 text-lg leading-relaxed font-light">{todayStep.whatHappens}</p>
          </div>

          <div className="space-y-3">
            <h3 className="text-[10px] font-bold text-stone-400 uppercase tracking-[0.15em]">Try this</h3>
            <p className="text-stone-700 text-lg leading-relaxed font-light">{todayStep.tryThis}</p>
          </div>

          <div className="bg-stone-50 p-6 rounded-[32px] border border-stone-100">
            <h3 className="text-[10px] font-bold text-stone-400 uppercase tracking-[0.15em] mb-3">Later, you could say</h3>
            <p className="text-stone-800 italic font-light leading-relaxed">{todayStep.parentMoment}</p>
          </div>

          <div className="pt-4 pb-12">
            <button 
              onClick={handleComplete}
              className="w-full py-4 bg-emerald-700 text-white rounded-full font-medium transition-all active:scale-[0.98] shadow-sm hover:bg-emerald-800"
            >
              I tried this
            </button>
          </div>
        </div>
      ) : (
        <div className="flex-1 flex flex-col items-center justify-center text-center space-y-8 px-4">
          <div className="space-y-4">
            <h2 className="text-2xl font-medium text-stone-900 leading-snug">
              {todayStep.completionMessage || "That’s how confidence builds."}
            </h2>
          </div>
          <button 
            onClick={() => router.push('/')}
            className="px-10 py-4 bg-stone-100 text-stone-600 rounded-full font-medium hover:bg-stone-200 transition-all active:scale-[0.98]"
          >
            Back to Home
          </button>
        </div>
      )}
    </div>
  );
}
