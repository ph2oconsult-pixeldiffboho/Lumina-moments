'use client';

import { useEffect } from 'react';
import { markAppOpen } from '@/lib/store';

export default function SessionTracker() {
  useEffect(() => {
    markAppOpen();
  }, []);

  return null;
}
