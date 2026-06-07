import { formatCurrency } from '../lib/utils';
import { SimulationResult } from '../lib/calculator';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

interface ResultDashboardProps {
  result: SimulationResult | null;
  months: number;
}

export function ResultDashboard({ result, months }: ResultDashboardProps) {
  if (!result) return null;

  const years = months / 12;

  let motivationalMessage = "A consistência na poupança de recursos leva à segurança financeira no longo prazo.";
  if (years >= 10 && result.monthlyContribution > 0) {
    motivationalMessage = `Investindo ${formatCurrency(result.monthlyContribution)} por mês durante ${years} anos, você construirá um patrimônio incrível. A consistência vale mais do que a velocidade.`;
  } else if (months <= 24) {
    motivationalMessage = "Objetivos de curto e médio prazo se tornam realidade com planejamento e visão!";
  }

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-3 border border-gray-100 shadow-lg rounded-xl">
          <p className="text-sm font-medium text-gray-900 mb-1">Mês {label}</p>
          <p className="text-sm text-[#43A047]">
            Acumulado: {formatCurrency(payload[0].value)}
          </p>
          {payload[1] && (
            <p className="text-sm text-gray-500">
              Investido: {formatCurrency(payload[1].value)}
            </p>
          )}
        </div>
      );
    }
    return null;
  };

  return (
    <div className="mt-12 bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-gray-100 animate-in fade-in slide-in-from-bottom-4 duration-500">
      <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">Projeção do Seu Futuro Financeiro</h3>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-gray-100">
          <p className="text-sm text-gray-500 font-medium mb-1">Valor Futuro (Total)</p>
          <p className="text-2xl font-bold text-[#43A047]">{formatCurrency(result.futureValue)}</p>
        </div>
        <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-gray-100">
          <p className="text-sm text-gray-500 font-medium mb-1">Valor Investido</p>
          <p className="text-2xl font-bold text-gray-900">{formatCurrency(result.totalInvested)}</p>
        </div>
        <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-gray-100">
          <p className="text-sm text-gray-500 font-medium mb-1">Lucro (Juros)</p>
          <p className="text-2xl font-bold text-[#43A047]">+ {formatCurrency(result.interestEarned)}</p>
        </div>
        <div className="bg-[#F8FAFC] rounded-2xl p-5 border border-gray-100">
          <p className="text-sm text-gray-500 font-medium mb-1">Rentabilidade</p>
          <p className="text-2xl font-bold text-[#2E7D32]">+{result.yieldPercentage.toFixed(2)}%</p>
        </div>
      </div>

      <div className="h-[350px] w-full mb-8">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={result.evolution} margin={{ top: 10, right: 10, left: 0, bottom: 0 }}>
            <defs>
              <linearGradient id="colorAcumulado" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#43A047" stopOpacity={0.2}/>
                <stop offset="95%" stopColor="#43A047" stopOpacity={0}/>
              </linearGradient>
            </defs>
            <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#E5E7EB" />
            <XAxis dataKey="month" axisLine={false} tickLine={false} tick={{fill: '#6B7280', fontSize: 12}} />
            <YAxis tickFormatter={(val) => `R$${(val/1000).toFixed(0)}k`} axisLine={false} tickLine={false} tick={{fill: '#6B7280', fontSize: 12}} width={70} />
            <Tooltip content={<CustomTooltip />} />
            <Area type="monotone" dataKey="accumulated" name="Capital Acumulado" stroke="#43A047" strokeWidth={3} fillOpacity={1} fill="url(#colorAcumulado)" />
            <Area type="monotone" dataKey="capital" name="Capital Investido" stroke="#9CA3AF" strokeWidth={2} strokeDasharray="5 5" fill="none" />
          </AreaChart>
        </ResponsiveContainer>
      </div>

      <div className="bg-[#E8F5E9] rounded-2xl p-6 text-center border border-[#C8E6C9]">
        <p className="text-[#2E7D32] font-medium text-lg italic">
          "{motivationalMessage}"
        </p>
      </div>
    </div>
  );
}
