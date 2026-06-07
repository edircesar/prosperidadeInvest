import { Header } from './components/Header';
import { Simulator } from './components/Simulator';
import { ComparativeSimulator } from './components/ComparativeSimulator';
import { AprendaAProsperar } from './components/AprendaAProsperar';

export default function App() {
  return (
    <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-[#1E88E5] selection:text-white">
      <Header />
      
      <main>
        <Simulator />
        <ComparativeSimulator />
        <AprendaAProsperar />
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <h2 className="text-xl font-bold tracking-tight mb-2">
              Prosperidade <span className="text-[#1E88E5]">Investimentos</span>
            </h2>
            <p className="text-gray-400 text-sm max-w-sm">
              Ferramenta educacional para simulação de juros compostos. Os resultados são estimativas limitadas e não configuram recomendação de investimento.
            </p>
          </div>
          <div className="text-sm text-gray-500">
            &copy; {new Date().getFullYear()} Prosperidade Investimentos.
          </div>
        </div>
      </footer>
    </div>
  );
}
