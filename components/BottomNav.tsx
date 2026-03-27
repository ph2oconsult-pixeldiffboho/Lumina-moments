'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Home, Compass, BarChart2 } from 'lucide-react';

export default function BottomNav() {
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', path: '/', icon: Home },
    { name: 'Journey', path: '/journey', icon: Compass },
    { name: 'Progress', path: '/progress', icon: BarChart2 },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 bg-white border-t border-stone-100 p-4 flex justify-around">
      {navItems.map((item) => {
        const Icon = item.icon;
        const isActive = pathname === item.path;
        return (
          <Link 
            key={item.name} 
            href={item.path}
            className={`flex flex-col items-center gap-1 ${isActive ? 'text-emerald-600' : 'text-stone-400'}`}
          >
            <Icon size={24} />
            <span className="text-[10px] font-medium">{item.name}</span>
          </Link>
        );
      })}
    </nav>
  );
}
