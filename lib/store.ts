const STORAGE_KEY = 'lumina_progress';

export interface Progress {
  phaseIndex: number;
  weekIndex: number;
  momentIndex: number;
  dailyCompletedCount: number;
  totalCompletedCount: number;
  streak: number;
  lastCompletedDate: string | null;
  lastNudgeDate: string | null;
  onboardingComplete: boolean;
  reflections: { date: string; value: 'helped' | 'little' | 'not really' }[];
  firstMomentOpened: boolean;
  firstMomentCompleted: boolean;
  firstOpenTime: number | null;
  firstCompletionTime: number | null;
  activeDates: string[];
  momentReflections: { [momentTitle: string]: { helped: number; little: number; notReally: number } };
}

const DEFAULT_PROGRESS: Progress = {
  phaseIndex: 0,
  weekIndex: 0,
  momentIndex: 0,
  dailyCompletedCount: 0,
  totalCompletedCount: 0,
  streak: 0,
  lastCompletedDate: null,
  lastNudgeDate: null,
  onboardingComplete: false,
  reflections: [],
  firstMomentOpened: false,
  firstMomentCompleted: false,
  firstOpenTime: null,
  firstCompletionTime: null,
  activeDates: [],
  momentReflections: {}
};

export function getProgress(): Progress {
  if (typeof window === 'undefined') return DEFAULT_PROGRESS;
  const saved = localStorage.getItem(STORAGE_KEY);
  if (!saved) return DEFAULT_PROGRESS;

  const progress: Progress = JSON.parse(saved);
  const today = new Date().toDateString();

  // Daily reset logic
  if (progress.lastCompletedDate !== today) {
    progress.dailyCompletedCount = 0;
    
    // Streak reset logic: if more than 1 day has passed, reset streak
    if (progress.lastCompletedDate) {
      const lastDate = new Date(progress.lastCompletedDate);
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      
      if (lastDate.toDateString() !== yesterday.toDateString()) {
        progress.streak = 0;
      }
    }
  }

  return progress;
}

export function completeOnboarding() {
  const progress = getProgress();
  progress.onboardingComplete = true;
  saveProgress(progress);
}

export function markFirstMomentOpened() {
  const progress = getProgress();
  if (!progress.firstMomentOpened) {
    progress.firstMomentOpened = true;
    saveProgress(progress);
    console.log('Metric: First Moment Opened');
  }
}

export function markAppOpen() {
  const progress = getProgress();
  const today = new Date().toDateString();

  // Initialize activeDates if it doesn't exist (for existing users)
  if (!progress.activeDates) {
    progress.activeDates = [];
  }

  // Track unique active days
  if (!progress.activeDates.includes(today)) {
    progress.activeDates.push(today);
    
    // Habit Signal: Return within 7 days of first open
    if (progress.activeDates.length >= 2) {
      const firstDate = new Date(progress.activeDates[0]);
      const currentDate = new Date(today);
      const diffTime = Math.abs(currentDate.getTime() - firstDate.getTime());
      const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
      
      if (diffDays <= 7) {
        console.log('Metric: Weekly Active User (WAU) - Habit Signal Detected');
      }
    }
  }

  if (!progress.firstOpenTime) {
    progress.firstOpenTime = Date.now();
    saveProgress(progress);
    console.log('Metric: App Open Time Recorded');
  } else {
    // Still save progress if activeDates was updated
    saveProgress(progress);
  }
}

export function markFirstMomentCompleted() {
  const progress = getProgress();
  if (!progress.firstMomentCompleted) {
    progress.firstMomentCompleted = true;
    progress.firstCompletionTime = Date.now();
    
    if (progress.firstOpenTime) {
      const durationSeconds = (progress.firstCompletionTime - progress.firstOpenTime) / 1000;
      console.log(`Metric: First Moment Completed in ${durationSeconds.toFixed(2)}s`);
      
      if (durationSeconds < 15) {
        console.log('Goal Met: Under 15 seconds');
      } else {
        console.log('Goal Not Met: Over 15 seconds. Possible UX friction.');
      }
    }
    
    saveProgress(progress);
    console.log('Metric: First Moment Completed');
  }
}

export function markMomentComplete() {
  const progress = getProgress();
  const today = new Date().toDateString();

  // Update daily count and streak
  if (progress.lastCompletedDate !== today) {
    progress.streak += 1;
    progress.dailyCompletedCount = 1;
  } else {
    progress.dailyCompletedCount += 1;
  }

  progress.totalCompletedCount += 1;
  progress.lastCompletedDate = today;

  // Update journey position
  progress.momentIndex += 1;
  if (progress.momentIndex >= 5) {
    progress.momentIndex = 0;
    progress.weekIndex += 1;
  }
  
  if (progress.weekIndex >= 3) {
    progress.weekIndex = 0;
    progress.phaseIndex += 1;
  }

  saveProgress(progress);
}

export function markNudgeSent() {
  const progress = getProgress();
  progress.lastNudgeDate = new Date().toDateString();
  saveProgress(progress);
}

export function saveReflection(momentTitle: string, value: 'helped' | 'little' | 'not really') {
  const progress = getProgress();
  const today = new Date().toISOString();
  
  // Legacy global reflections
  progress.reflections.push({ date: today, value });
  
  // Per-moment reflections
  if (!progress.momentReflections) {
    progress.momentReflections = {};
  }
  
  if (!progress.momentReflections[momentTitle]) {
    progress.momentReflections[momentTitle] = { helped: 0, little: 0, notReally: 0 };
  }
  
  if (value === 'helped') progress.momentReflections[momentTitle].helped += 1;
  else if (value === 'little') progress.momentReflections[momentTitle].little += 1;
  else if (value === 'not really') progress.momentReflections[momentTitle].notReally += 1;
  
  saveProgress(progress);
}

export function getMomentRankings() {
  const progress = getProgress();
  const reflections = progress.momentReflections || {};
  
  const rankings = Object.entries(reflections).map(([title, stats]) => {
    const total = stats.helped + stats.little + stats.notReally;
    const helpedPct = total > 0 ? (stats.helped / total) * 100 : 0;
    const littlePct = total > 0 ? (stats.little / total) * 100 : 0;
    const notReallyPct = total > 0 ? (stats.notReally / total) * 100 : 0;
    
    // Score: helped = 1, little = 0.5, notReally = 0
    const score = total > 0 ? (stats.helped + stats.little * 0.5) / total : 0;
    
    return {
      title,
      stats,
      total,
      helpedPct,
      littlePct,
      notReallyPct,
      score
    };
  });
  
  // Sort by score descending
  return rankings.sort((a, b) => b.score - a.score);
}

function saveProgress(progress: Progress) {
  if (typeof window !== 'undefined') {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(progress));
  }
}
