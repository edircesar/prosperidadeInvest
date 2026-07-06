import { TrendingUp } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

export function Header() {
  const location = useLocation();
  const isHome = location.pathname === '/';

  return (
    <header className="bg-white shadow-sm border-b border-gray-100 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link to="/" className="flex items-center gap-2 text-[#43A047]">
            <TrendingUp size={28} className="text-[#43A047]" />
            <span className="text-xl font-bold tracking-tight text-gray-900">
              Prosperidade <span className="text-[#43A047]">Investimentos</span>
            </span>
          </Link>
          <nav className="hidden md:flex space-x-8">
            {isHome ? (
              <>
                <a href="#simulador" className="text-gray-600 hover:text-[#43A047] transition-colors font-medium">Simulador</a>
                <a href="#educacional" className="text-gray-600 hover:text-[#43A047] transition-colors font-medium">Aprenda a Prosperar</a>
              </>
            ) : (
              <>
                <Link to="/#simulador" className="text-gray-600 hover:text-[#43A047] transition-colors font-medium">Simulador</Link>
                <Link to="/#educacional" className="text-gray-600 hover:text-[#43A047] transition-colors font-medium">Aprenda a Prosperar</Link>
              </>
            )}
            <Link to="/contato" className="text-gray-600 hover:text-[#43A047] transition-colors font-medium">Contato</Link>
          </nav>
        </div>
      </div>
    </header>
  );
}
