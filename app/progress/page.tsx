'use client';
import { getProgress } from '../../lib/store';

export default function Progress() {
  const progress = getProgress();

  return (
    <div className="max-w-md mx-auto p-6 pt-12 space-y-12">
      <h1 className="text-3xl font-semibold text-stone-900">Your Progress</h1>
      
      <div className="bg-white p-8 rounded-3xl shadow-sm border border-stone-100 text-center space-y-2">
        <p className="text-sm text-stone-500 uppercase tracking-wider">Current Streak</p>
        <p className="text-6xl font-bold text-emerald-600">{progress.streak} days</p>
      </div>

      <div className="space-y-4">
        <h2 className="text-lg font-semibold text-stone-900">Recent Activity</h2>
        <div className="bg-white p-6 rounded-3xl shadow-sm border border-stone-100">
          <p className="text-stone-600">You've completed {progress.completedDays} days so far. Keep it up!</p>
        </div>
      </div>
    </div>
  );
}
