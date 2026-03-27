'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getProgress, markFirstMomentOpened, markFirstMomentCompleted } from '@/lib/store';
import { journeyData } from '@/data/journey';
import MomentScreen from '@/components/MomentScreen';

export default function Today() {
  const router = useRouter();
  const [progress, setProgress] = useState(getProgress());

  useEffect(() => {
    const p = getProgress();
    setProgress(p);
    
    // Track first moment opened
    if (p.totalCompletedCount === 0) {
      markFirstMomentOpened();
    }
  }, []);

  const phase = journeyData[progress.phaseIndex];
  const week = phase.weeks[progress.weekIndex];
  const moment = week.moments[progress.momentIndex];

  if (!moment) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-stone-50 p-8 text-center">
        <p className="text-stone-500 font-light">No moment found for today.</p>
      </div>
    );
  }

  const handleComplete = () => {
    // Track first moment completed
    if (progress.totalCompletedCount === 0) {
      markFirstMomentCompleted();
    }
    router.push('/reward');
  };

  return (
    <MomentScreen
      phaseTitle={phase.title}
      moment={moment}
      onComplete={handleComplete}
    />
  );
}

