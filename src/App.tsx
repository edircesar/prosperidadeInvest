import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { Header } from './components/Header';
import { Home } from './pages/Home';
import { PrivacyPolicy } from './pages/PrivacyPolicy';
import { TermsOfUse } from './pages/TermsOfUse';

export default function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-white font-sans text-gray-900 selection:bg-[#43A047] selection:text-white flex flex-col">
        <Header />
        
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/privacidade" element={<PrivacyPolicy />} />
            <Route path="/termos" element={<TermsOfUse />} />
          </Routes>
        </div>

        <footer className="bg-gray-900 text-white py-12 mt-auto">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
            <div>
              <h2 className="text-xl font-bold tracking-tight mb-2">
                Prosperidade <span className="text-[#43A047]">Investimentos</span>
              </h2>
              <p className="text-gray-400 text-sm max-w-sm">
                Ferramenta educacional para simulação de juros compostos. Os resultados são estimativas limitadas e não configuram recomendação de investimento.
              </p>
            </div>
            <div className="flex flex-col items-center md:items-end gap-2">
              <div className="flex gap-4 text-sm text-gray-400">
                <Link to="/privacidade" className="hover:text-white transition-colors">Política de Privacidade</Link>
                <span>&bull;</span>
                <Link to="/termos" className="hover:text-white transition-colors">Termos de Uso</Link>
              </div>
              <div className="text-sm text-gray-500">
                &copy; {new Date().getFullYear()} Prosperidade Investimentos. Contato: <a href="mailto:cesar@projeto7.com" className="hover:text-white transition-colors">cesar@projeto7.com</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}
