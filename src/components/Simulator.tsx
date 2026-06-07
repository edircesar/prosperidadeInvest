import { useState } from 'react';
import { calcularTaxaEfetiva } from './SimulatorHelper';
import { calculateInvestment, SimulationResult } from '../lib/calculator';
import { ResultDashboard } from './ResultDashboard';
import { cn } from '../lib/utils';
import { taxasData } from '../assets/data/taxas';

type SimType = 'curto' | 'longo' | 'comparativo';

export function Simulator() {
  const [activeTab, setActiveTab] = useState<SimType>('curto');
  const [months, setMonths] = useState<number>(12);
  const [initialValue, setInitialValue] = useState<number>(1000);
  const [monthlyContribution, setMonthlyContribution] = useState<number>(100);
  const [investmentType, setInvestmentType] = useState<string>('cdb_105');
  const [isSimulating, setIsSimulating] = useState(false);
  const [result, setResult] = useState<SimulationResult | null>(null);

  const handleSimulate = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSimulating(true);
    
    // Simulate network delay for UX
    setTimeout(() => {
      const annualRate = activeTab === 'comparativo' 
        ? taxasData.poupanca // Not fully used here, handled in real comparative component
        : calcularTaxaEfetiva(investmentType);

      const simResult = calculateInvestment({
        initialValue,
        monthlyContribution,
        annualRate,
        months
      });
      
      setResult(simResult);
      setIsSimulating(false);
    }, 600);
  };

  const timeOptionsCurto = [
    { value: 6, label: '6 Meses' },
    { value: 12, label: '1 Ano' },
    { value: 18, label: '18 Meses' },
    { value: 24, label: '2 Anos' },
  ];

  const timeOptionsLongo = [
    { value: 60, label: '5 Anos' },
    { value: 120, label: '10 Anos' },
    { value: 180, label: '15 Anos' },
    { value: 360, label: '30 Anos' },
  ];

  const timeOptions = activeTab === 'curto' ? timeOptionsCurto : activeTab === 'longo' ? timeOptionsLongo : timeOptionsLongo;

  return (
    <section id="simulador" className="py-12 bg-[#F8FAFC]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-10">
          <h1 className="text-4xl font-extrabold text-gray-900 tracking-tight mb-4">
            Simulador de Investimentos
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Descubra como seu dinheiro pode crescer mais rápido. 
            Calcule o efeito dos juros compostos no seu futuro.
          </p>
        </div>

        <div className="bg-white rounded-3xl p-2 flex flex-col sm:flex-row gap-2 shadow-sm border border-gray-100 mb-8 max-w-2xl mx-auto">
          <button 
            onClick={() => { setActiveTab('curto'); setResult(null); setMonths(12); }}
            className={cn(
              "flex-1 py-3 px-6 rounded-2xl font-medium transition-all",
              activeTab === 'curto' ? "bg-[#1E88E5] text-white shadow-md" : "text-gray-600 hover:bg-gray-50"
            )}
          >
            Curto Prazo
          </button>
          <button 
            onClick={() => { setActiveTab('longo'); setResult(null); setMonths(120); }}
            className={cn(
              "flex-1 py-3 px-6 rounded-2xl font-medium transition-all",
              activeTab === 'longo' ? "bg-[#1E88E5] text-white shadow-md" : "text-gray-600 hover:bg-gray-50"
            )}
          >
            Longo Prazo
          </button>
        </div>

        <div className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-gray-100">
          <form onSubmit={handleSimulate}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Valor Inicial (R$)</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium">R$</span>
                    <input 
                      type="number" 
                      min="0"
                      step="1"
                      required
                      value={initialValue}
                      onChange={(e) => setInitialValue(Number(e.target.value))}
                      className="w-full bg-[#F8FAFC] border border-gray-200 rounded-xl py-3 pl-12 pr-4 focus:ring-2 focus:ring-[#1E88E5] focus:border-[#1E88E5] transition-colors outline-none font-medium text-gray-900"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Aporte Mensal Opcional (R$)</label>
                  <div className="relative">
                    <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium">R$</span>
                    <input 
                      type="number" 
                      min="0"
                      step="1"
                      value={monthlyContribution}
                      onChange={(e) => setMonthlyContribution(Number(e.target.value))}
                      className="w-full bg-[#F8FAFC] border border-gray-200 rounded-xl py-3 pl-12 pr-4 focus:ring-2 focus:ring-[#1E88E5] focus:border-[#1E88E5] transition-colors outline-none font-medium text-gray-900"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Tipo de Investimento</label>
                  <select 
                    value={investmentType}
                    onChange={(e) => setInvestmentType(e.target.value)}
                    className="w-full bg-[#F8FAFC] border border-gray-200 rounded-xl py-3 px-4 focus:ring-2 focus:ring-[#1E88E5] focus:border-[#1E88E5] transition-colors outline-none font-medium text-gray-900 appearance-none"
                  >
                    <option value="cdi_100">CDI (Atual: {taxasData.cdiAtualEstimado}% a.a.)</option>
                    <option value="cdb_95">CDB Conservador (95% do CDI)</option>
                    <option value="cdb_105">CDB Médio (105% do CDI)</option>
                    <option value="cdb_120">CDB Agressivo (120% do CDI)</option>
                  </select>
                  <p className="text-xs text-gray-500 mt-2 italic">
                    *Taxas sujeitas a alterações de mercado. Estimativas educacionais.
                  </p>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">Prazo do Investimento</label>
                  <div className="grid grid-cols-2 lg:grid-cols-4 gap-2">
                    {timeOptions.map((opt) => (
                      <button
                        key={opt.value}
                        type="button"
                        onClick={() => setMonths(opt.value)}
                        className={cn(
                          "py-2 px-3 text-sm rounded-lg font-medium transition-all border",
                          months === opt.value 
                            ? "bg-[#E3F2FD] border-[#1E88E5] text-[#1E88E5]" 
                            : "bg-white border-gray-200 text-gray-600 hover:border-[#1E88E5] hover:bg-gray-50"
                        )}
                      >
                        {opt.label}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

            </div>

            <div className="mt-10">
              <button 
                type="submit"
                disabled={isSimulating}
                className="w-full bg-[#1E88E5] hover:bg-[#1565C0] text-white font-bold text-lg py-4 px-8 rounded-xl transition-colors shadow-md flex justify-center items-center gap-2 disabled:opacity-70"
              >
                {isSimulating ? (
                  <span className="animate-pulse">Calculando o futuro...</span>
                ) : (
                  <span>
                    {activeTab === 'curto' ? 'Simular Investimento' : 'Projetar Futuro Financeiro'}
                  </span>
                )}
              </button>
            </div>
          </form>
        </div>

        {result && (
          <ResultDashboard result={result} months={months} />
        )}

      </div>
    </section>
  );
}
