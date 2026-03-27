'use client';

import React, { useEffect, useState } from 'react';
import { getMomentRankings } from '@/lib/store';
import { ArrowUp, ArrowDown, BarChart3, Home as HomeIcon } from 'lucide-react';
import Link from 'next/link';

export default function StatsPage() {
  const [rankings, setRankings] = useState<any[]>([]);

  useEffect(() => {
    setRankings(getMomentRankings());
  }, []);

  return (
    <div className="max-w-md mx-auto min-h-[100dvh] bg-stone-50 flex flex-col font-sans selection:bg-emerald-100 select-none">
      <header className="p-8 pt-[calc(4rem+env(safe-area-inset-top,0px))] flex justify-between items-start">
        <div className="space-y-2">
          <div className="flex items-center gap-3 text-emerald-600">
            <BarChart3 className="w-6 h-6" />
            <h1 className="text-2xl font-bold tracking-tight text-stone-900">Content Quality</h1>
          </div>
          <p className="text-stone-500 font-light text-sm">
            Ranking moments based on user reflection data.
          </p>
        </div>
        <Link 
          href="/"
          className="w-10 h-10 bg-white rounded-full border border-stone-200 shadow-sm flex items-center justify-center text-stone-400 hover:text-stone-600 transition-all active:scale-90"
        >
          <HomeIcon className="w-4 h-4" />
        </Link>
      </header>

      <main className="flex-1 p-8 space-y-10 overflow-y-auto pb-[calc(3rem+env(safe-area-inset-bottom,0px))]">
        {rankings.length === 0 ? (
          <div className="bg-white p-12 rounded-[32px] border border-stone-100 text-center space-y-4">
            <p className="text-stone-400 font-light italic">No reflection data yet.</p>
            <p className="text-xs text-stone-300">Complete moments and reflect to see rankings.</p>
          </div>
        ) : (
          <div className="space-y-8">
            {/* Top Performers */}
            <section className="space-y-4">
              <div className="flex items-center gap-2 px-2">
                <ArrowUp className="w-4 h-4 text-emerald-500" />
                <h2 className="text-sm font-bold uppercase tracking-widest text-stone-400">Top Performers</h2>
              </div>
              <div className="space-y-3">
                {rankings.slice(0, 3).map((moment) => (
                  <MomentCard key={moment.title} moment={moment} />
                ))}
              </div>
            </section>

            {/* Weak Performers */}
            {rankings.length > 3 && (
              <section className="space-y-4 pt-8">
                <div className="flex items-center gap-2 px-2">
                  <ArrowDown className="w-4 h-4 text-rose-500" />
                  <h2 className="text-sm font-bold uppercase tracking-widest text-stone-400">Weak Performers</h2>
                </div>
                <div className="space-y-3">
                  {rankings.slice(-3).reverse().map((moment) => (
                    <MomentCard key={moment.title} moment={moment} />
                  ))}
                </div>
              </section>
            )}
          </div>
        )}
      </main>
    </div>
  );
}

function MomentCard({ moment }: { moment: any }) {
  return (
    <div className="bg-white p-6 rounded-[24px] border border-stone-100 shadow-sm space-y-4">
      <div className="flex justify-between items-start">
        <h3 className="text-lg font-medium text-stone-900 leading-tight">{moment.title}</h3>
        <span className="text-xs font-bold text-stone-400 bg-stone-50 px-2 py-1 rounded-full">
          {moment.total} {moment.total === 1 ? 'Reflection' : 'Reflections'}
        </span>
      </div>

      <div className="space-y-2">
        <div className="flex h-2 w-full rounded-full overflow-hidden bg-stone-100">
          <div 
            className="bg-emerald-400 h-full transition-all duration-500" 
            style={{ width: `${moment.helpedPct}%` }} 
          />
          <div 
            className="bg-amber-300 h-full transition-all duration-500" 
            style={{ width: `${moment.littlePct}%` }} 
          />
          <div 
            className="bg-rose-300 h-full transition-all duration-500" 
            style={{ width: `${moment.notReallyPct}%` }} 
          />
        </div>
        
        <div className="flex justify-between text-[10px] font-bold uppercase tracking-tighter text-stone-400">
          <span className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            Helped {Math.round(moment.helpedPct)}%
          </span>
          <span className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-amber-300" />
            A Little {Math.round(moment.littlePct)}%
          </span>
          <span className="flex items-center gap-1">
            <div className="w-1.5 h-1.5 rounded-full bg-rose-300" />
            Not Really {Math.round(moment.notReallyPct)}%
          </span>
        </div>
      </div>
    </div>
  );
}
