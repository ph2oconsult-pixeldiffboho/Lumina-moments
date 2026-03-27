'use client';
import { journeyData } from '../../data/journey';
import { getProgress } from '../../lib/store';

export default function Journey() {
  const progress = getProgress();

  return (
    <div className="max-w-md mx-auto p-6 pt-12 space-y-12">
      <h1 className="text-3xl font-semibold text-stone-900">Your Journey</h1>
      {journeyData.map((phase, pIndex) => (
        <div key={phase.title} className="space-y-4">
          <h2 className="text-lg font-semibold text-stone-900">{phase.title}</h2>
          <div className="space-y-2">
            {phase.weeks.map((week, wIndex) => {
              const isActive = pIndex === progress.phaseIndex && wIndex === progress.weekIndex;
              const isPast = pIndex < progress.phaseIndex || (pIndex === progress.phaseIndex && wIndex < progress.weekIndex);
              
              return (
                <div 
                  key={week.title} 
                  className={`p-4 rounded-xl border ${isActive ? 'border-emerald-600 bg-emerald-50' : isPast ? 'border-stone-200 bg-white' : 'border-stone-100 bg-stone-100 opacity-60'}`}
                >
                  <p className={`text-sm ${isActive ? 'text-emerald-900' : 'text-stone-600'}`}>{week.title}</p>
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
}
