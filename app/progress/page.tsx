'use client';
import { getProgress, resetProgress } from '../../lib/store';
import { journeyData } from '../../data/journey';
import Link from 'next/link';
import { ArrowLeft, Check, Circle, Bell, Home as HomeIcon, RotateCcw } from 'lucide-react';
import { motion } from 'motion/react';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Progress() {
  const router = useRouter();
  const progress = getProgress();
  const [notificationPermission, setNotificationPermission] = useState<NotificationPermission | 'unsupported'>('default');

  useEffect(() => {
    if (!("Notification" in window)) {
      setNotificationPermission('unsupported');
    } else {
      setNotificationPermission(Notification.permission);
    }
  }, []);

  const requestPermission = async () => {
    if ("Notification" in window) {
      const permission = await Notification.requestPermission();
      setNotificationPermission(permission);
    }
  };

  const handleReset = () => {
    if (window.confirm('Are you sure you want to reset all your progress? This cannot be undone.')) {
      resetProgress();
      router.push('/');
    }
  };

  return (
    <div className="max-w-md mx-auto min-h-[100dvh] bg-stone-50 flex flex-col font-sans selection:bg-emerald-100 select-none">
      <header className="p-8 pt-[calc(4rem+env(safe-area-inset-top,0px))] flex items-center justify-between sticky top-0 bg-stone-50/80 backdrop-blur-md z-30">
        <div className="flex items-center gap-4">
          <Link href="/" className="p-2 -ml-2 text-stone-400 hover:text-stone-900 transition-colors">
            <ArrowLeft className="w-5 h-5" />
          </Link>
          <h1 className="text-2xl font-medium text-stone-900 tracking-tight">Your Journey</h1>
        </div>
        <Link 
          href="/"
          className="w-10 h-10 bg-white rounded-full border border-stone-200 shadow-sm flex items-center justify-center text-stone-400 hover:text-stone-600 transition-all active:scale-90"
        >
          <HomeIcon className="w-4 h-4" />
        </Link>
      </header>

      <main className="flex-1 p-8 pt-4 space-y-16 pb-[calc(8rem+env(safe-area-inset-bottom,0px))] overflow-y-auto">
        {journeyData.map((phase, pIndex) => {
          // Calculate progress for this phase
          let totalMoments = 0;
          let completedMoments = 0;

          phase.weeks.forEach((week, wIndex) => {
            week.moments.forEach((_, mIndex) => {
              totalMoments++;
              const isCompleted = 
                pIndex < progress.phaseIndex || 
                (pIndex === progress.phaseIndex && wIndex < progress.weekIndex) || 
                (pIndex === progress.phaseIndex && wIndex === progress.weekIndex && mIndex < progress.momentIndex);
              if (isCompleted) completedMoments++;
            });
          });

          return (
            <section key={pIndex} className="space-y-8">
              {/* Phase Progress Indicator */}
              <div className="space-y-1 px-2">
                <p className="text-[10px] font-bold text-emerald-700 uppercase tracking-[0.2em]">
                  Phase {pIndex + 1}: {completedMoments} of {totalMoments} moments completed
                </p>
                <h2 className="text-xl font-medium text-stone-900">{phase.title}</h2>
              </div>

              <div className="space-y-10">
                {phase.weeks.map((week, wIndex) => (
                  <div key={wIndex} className="space-y-4">
                    <h3 className="text-[10px] font-bold text-stone-400 uppercase tracking-[0.15em] px-2">
                      {week.title}
                    </h3>
                    <div className="bg-white rounded-[32px] border border-stone-100 shadow-sm overflow-hidden">
                      {week.moments.map((moment, mIndex) => {
                        const isCompleted = 
                          pIndex < progress.phaseIndex || 
                          (pIndex === progress.phaseIndex && wIndex < progress.weekIndex) || 
                          (pIndex === progress.phaseIndex && wIndex === progress.weekIndex && mIndex < progress.momentIndex);
                        
                        const isCurrent = 
                          pIndex === progress.phaseIndex && 
                          wIndex === progress.weekIndex && 
                          mIndex === progress.momentIndex;

                        return (
                          <div 
                            key={mIndex} 
                            className={`flex items-center gap-4 p-5 border-b border-stone-50 last:border-0 ${isCurrent ? 'bg-emerald-50/30' : ''}`}
                          >
                            <div className="flex-shrink-0">
                              {isCompleted ? (
                                <div className="w-5 h-5 rounded-full bg-emerald-100 flex items-center justify-center">
                                  <Check className="w-3 h-3 text-emerald-600" />
                                </div>
                              ) : (
                                <Circle className={`w-5 h-5 ${isCurrent ? 'text-emerald-400' : 'text-stone-200'}`} />
                              )}
                            </div>
                            <span className={`text-sm font-medium leading-tight select-text ${
                              isCompleted ? 'text-stone-400' : 
                              isCurrent ? 'text-stone-900' : 
                              'text-stone-300'
                            }`}>
                              {moment.title}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </section>
          );
        })}

        {/* Settings / Nudges */}
        <section className="pt-8 border-t border-stone-100 space-y-6">
          <div className="space-y-1 px-2">
            <p className="text-[10px] font-bold text-stone-400 uppercase tracking-[0.2em]">
              Settings
            </p>
            <h2 className="text-xl font-medium text-stone-900 tracking-tight">Daily Nudges</h2>
          </div>

          <div className="bg-white p-8 rounded-[40px] border border-stone-100 shadow-sm space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-stone-50 rounded-full flex items-center justify-center text-stone-400 shrink-0">
                <Bell className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium text-stone-900">Gentle Reminders</p>
                <p className="text-xs text-stone-500 leading-relaxed font-light">
                  A quiet nudge once a day if you haven&apos;t found a moment yet. No pressure, just a reminder.
                </p>
              </div>
            </div>

            {notificationPermission === 'granted' ? (
              <div className="flex items-center gap-2 px-4 py-2 bg-emerald-50 text-emerald-700 rounded-full text-[10px] font-bold uppercase tracking-widest w-fit">
                <Check className="w-3 h-3" />
                Active
              </div>
            ) : notificationPermission === 'unsupported' ? (
              <p className="text-[10px] font-bold text-stone-300 uppercase tracking-widest">
                Notifications not supported on this device
              </p>
            ) : (
              <button
                onClick={requestPermission}
                className="w-full py-4 bg-stone-900 text-white rounded-full text-sm font-medium transition-all active:scale-[0.98]"
              >
                Enable Nudges
              </button>
            )}
          </div>
        </section>

        {/* Danger Zone */}
        <section className="pt-8 border-t border-stone-100 space-y-6">
          <div className="space-y-1 px-2">
            <p className="text-[10px] font-bold text-rose-400 uppercase tracking-[0.2em]">
              Danger Zone
            </p>
            <h2 className="text-xl font-medium text-stone-900 tracking-tight">Restart Journey</h2>
          </div>

          <div className="bg-white p-8 rounded-[40px] border border-rose-100 shadow-sm space-y-6">
            <div className="flex items-start gap-4">
              <div className="w-10 h-10 bg-rose-50 rounded-full flex items-center justify-center text-rose-400 shrink-0">
                <RotateCcw className="w-5 h-5" />
              </div>
              <div className="space-y-1">
                <p className="text-sm font-medium text-stone-900">Reset All Progress</p>
                <p className="text-xs text-stone-500 leading-relaxed font-light">
                  This will clear all your completed moments and reflections. You will start back at the very first moment.
                </p>
              </div>
            </div>

            <button
              onClick={handleReset}
              className="w-full py-4 bg-rose-50 text-rose-600 rounded-full text-sm font-medium transition-all active:scale-[0.98] hover:bg-rose-100"
            >
              Reset Progress
            </button>
          </div>
        </section>
      </main>
    </div>
  );
}
