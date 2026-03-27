import React from 'react';

interface ProgressRowProps {
  progress: {
    dayIndex: number;
    completedDays: number;
  };
}

export default function ProgressRow({ progress }: ProgressRowProps) {
  const days = [0, 1, 2, 3, 4];

  return (
    <div className="flex justify-between items-center px-2">
      {days.map((day) => {
        const isDone = day < progress.dayIndex;
        const isToday = day === progress.dayIndex;
        return (
          <div key={day} className="flex flex-col items-center gap-2">
            <div className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold ${isDone ? 'bg-emerald-600 text-white' : isToday ? 'bg-emerald-100 text-emerald-800 border-2 border-emerald-600' : 'bg-stone-200'}`}>
              {isDone ? '✓' : day + 1}
            </div>
            <span className={`text-[10px] uppercase font-bold ${isToday ? 'text-emerald-800' : 'text-stone-400'}`}>
              {isToday ? 'today' : `Day ${day + 1}`}
            </span>
          </div>
        );
      })}
    </div>
  );
}
