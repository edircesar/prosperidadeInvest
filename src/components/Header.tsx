import { TrendingUp } from 'lucide-react';

export function Header() {
  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <div className="flex items-center gap-2 text-[#43A047]">
            <TrendingUp size={28} className="text-[#43A047]" />
            <span className="text-xl font-bold tracking-tight text-gray-900">
              Prosperidade <span className="text-[#43A047]">Investimentos</span>
            </span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#simulador" className="text-gray-600 hover:text-[#43A047] transition-colors font-medium">Simulador</a>
            <a href="#educacional" className="text-gray-600 hover:text-[#43A047] transition-colors font-medium">Aprenda a Prosperar</a>
          </nav>
        </div>
      </div>
    </header>
  );
}
