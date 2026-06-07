import { useState } from 'react';
import { calculateInvestment, SimulationResult } from '../lib/calculator';
import { taxasData } from '../assets/data/taxas';
import { formatCurrency } from '../lib/utils';
import { calcularTaxaEfetiva } from './SimulatorHelper';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

export function ComparativeSimulator() {
  const [initialValue, setInitialValue] = useState<number>(5000);
  const [monthlyContribution, setMonthlyContribution] = useState<number>(200);
  const [months, setMonths] = useState<number>(60);
  const [hasSimulated, setHasSimulated] = useState(false);
  const [results, setResults] = useState<{name: string, result: SimulationResult}[]>([]);

  const handleSimulate = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simulate Poupança
    const resPoupanca = calculateInvestment({
      initialValue, monthlyContribution, annualRate: taxasData.poupanca, months
    });
    
    // Simulate CDI
    const resCDI = calculateInvestment({
      initialValue, monthlyContribution, annualRate: calcularTaxaEfetiva('cdi_100'), months
    });

    // Simulate CDB Médio (105%)
    const resCDB = calculateInvestment({
      initialValue, monthlyContribution, annualRate: calcularTaxaEfetiva('cdb_105'), months
    });

    setResults([
      { name: 'Poupança', result: resPoupanca },
      { name: 'CDI', result: resCDI },
      { name: 'CDB (105%)', result: resCDB }
    ]);
    setHasSimulated(true);
  };

  const chartData = results.map(item => ({
    name: item.name,
    'Investido': item.result.totalInvested,
    'Lucro': item.result.interestEarned,
    'Acumulado': item.result.futureValue
  }));

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-100 shadow-lg rounded-xl">
          <p className="text-sm font-bold text-gray-900 mb-2">{label}</p>
          {payload.map((entry: any, index: number) => (
            <p key={index} className="text-sm" style={{ color: entry.color }}>
              {entry.name}: {formatCurrency(entry.value)}
            </p>
          ))}
        </div>
      );
    }
    return null;
  };

  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Como seu dinheiro rende melhor?</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Compare simultaneamente o rendimento da Poupança, do CDI e de um CDB conservador.
          </p>
        </div>

        <div className="bg-[#F8FAFC] rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100 mb-10">
          <form onSubmit={handleSimulate} className="flex flex-col md:flex-row gap-6 items-end">
            <div className="flex-1 w-full">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Valor Inicial (R$)</label>
              <input 
                type="number" 
                min="0"
                value={initialValue}
                onChange={(e) => setInitialValue(Number(e.target.value))}
                className="w-full bg-white border border-gray-200 rounded-xl py-3 px-4 focus:ring-2 focus:ring-[#43A047] outline-none font-medium text-gray-900"
              />
            </div>
            <div className="flex-1 w-full">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Aporte Mensal (R$)</label>
              <input 
                type="number" 
                min="0"
                value={monthlyContribution}
                onChange={(e) => setMonthlyContribution(Number(e.target.value))}
                className="w-full bg-white border border-gray-200 rounded-xl py-3 px-4 focus:ring-2 focus:ring-[#43A047] outline-none font-medium text-gray-900"
              />
            </div>
            <div className="flex-1 w-full">
              <label className="block text-sm font-semibold text-gray-700 mb-2">Prazo (Meses)</label>
              <input 
                type="number" 
                min="1"
                value={months}
                onChange={(e) => setMonths(Number(e.target.value))}
                className="w-full bg-white border border-gray-200 rounded-xl py-3 px-4 focus:ring-2 focus:ring-[#43A047] outline-none font-medium text-gray-900"
              />
            </div>
            <div className="w-full md:w-auto mt-4 md:mt-0">
              <button 
                type="submit"
                className="w-full md:w-auto bg-[#43A047] hover:bg-[#388E3C] text-white font-bold py-3 px-8 rounded-xl transition-colors shadow-sm"
              >
                Comparar Rentabilidade
              </button>
            </div>
          </form>
        </div>

        {hasSimulated && (
          <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {results.map((item, idx) => (
                <div key={idx} className="bg-white rounded-2xl p-6 border border-gray-100 shadow-sm relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-[#43A047]" style={{backgroundColor: idx === 0 ? '#ef4444' : idx === 1 ? '#10B981' : '#22c55e'}}></div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{item.name}</h3>
                  <div className="space-y-3">
                    <div className="flex justify-between items-center border-b border-gray-50 pb-2">
                      <span className="text-sm text-gray-500">Investido</span>
                      <span className="font-medium text-gray-900">{formatCurrency(item.result.totalInvested)}</span>
                    </div>
                    <div className="flex justify-between items-center border-b border-gray-50 pb-2">
                      <span className="text-sm text-gray-500">Lucro</span>
                      <span className="font-medium text-[#43A047]">+{formatCurrency(item.result.interestEarned)}</span>
                    </div>
                    <div className="flex justify-between items-center pt-1">
                      <span className="text-sm font-semibold text-gray-700">Acumulado</span>
                      <span className="font-bold text-lg text-[#43A047]">{formatCurrency(item.result.futureValue)}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="h-[400px] w-full bg-[#F8FAFC] rounded-3xl p-6 border border-gray-100">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={chartData} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#4B5563', fontSize: 13, fontWeight: 500}} />
                  <YAxis tickFormatter={(val) => `R$${(val/1000).toFixed(0)}k`} axisLine={false} tickLine={false} tick={{fill: '#6B7280', fontSize: 12}} />
                  <Tooltip content={<CustomTooltip />} cursor={{fill: '#F3F4F6'}} />
                  <Legend wrapperStyle={{paddingTop: '20px'}} />
                  <Bar dataKey="Investido" stackId="a" fill="#9CA3AF" radius={[0, 0, 4, 4]} maxBarSize={60} />
                  <Bar dataKey="Lucro" stackId="a" fill="#43A047" radius={[4, 4, 0, 0]} maxBarSize={60} />
                </BarChart>
              </ResponsiveContainer>
            </div>
            
            <div className="text-center mt-6">
               <p className="text-sm text-gray-500">
                O gráfico de barras empilhadas mostra a proporção do seu capital investido contra o lucro real gerado pelos juros da aplicação.
               </p>
            </div>

          </div>
        )}
      </div>
    </section>
  );
}
