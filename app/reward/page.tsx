'use client';

import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { getProgress, markMomentComplete } from '@/lib/store';
import { journeyData } from '@/data/journey';
import RewardScreen from '@/components/RewardScreen';

export default function RewardPage() {
  const router = useRouter();
  const [headline, setHeadline] = useState('');

  const [momentTitle, setMomentTitle] = useState('');

  useEffect(() => {
    const progress = getProgress();
    const phase = journeyData[progress.phaseIndex];
    const week = phase.weeks[progress.weekIndex];
    const moment = week.moments[progress.momentIndex];
    
    if (moment) {
      setHeadline(moment.finalReward);
      setMomentTitle(moment.title);
    }
  }, []);

  const handleContinue = () => {
    markMomentComplete();
    router.push(`/reflection?moment=${encodeURIComponent(momentTitle)}`);
  };

  return (
    <RewardScreen
      headline={headline}
      onContinue={handleContinue}
    />
  );
}
