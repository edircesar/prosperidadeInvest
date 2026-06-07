import { BookOpen, TrendingUp, ShieldCheck, Clock } from 'lucide-react';

const cards = [
  {
    title: 'O que é CDI?',
    description: 'Certificado de Depósito Interbancário (CDI) é a taxa que os bancos cobram para emprestar dinheiro uns aos outros. É o principal termômetro para os investimentos de Renda Fixa no Brasil.',
    icon: <BookOpen className="text-[#1E88E5]" size={24} />,
  },
  {
    title: 'O que é CDB?',
    description: 'Certificado de Depósito Bancário. Na prática, você empresta dinheiro para um banco e, em troca, ele te devolve o valor no futuro com juros. É um investimento muito seguro.',
    icon: <ShieldCheck className="text-[#43A047]" size={24} />,
  },
  {
    title: 'O que são Juros Compostos?',
    description: 'São juros rendendo sobre juros! Em vez de render apenas sobre o valor inicial, no mês seguinte o rendimento acontece sobre o valor inicial mais os juros do mês passado.',
    icon: <TrendingUp className="text-[#2E7D32]" size={24} />,
  },
  {
    title: 'Por que investir cedo?',
    description: 'O tempo é o maior aliado dos juros compostos. Começar com pouco agora pode gerar muito mais retorno do que começar com muito daqui a 10 anos. A consistência é o segredo.',
    icon: <Clock className="text-[#1E88E5]" size={24} />,
  }
];

export function AprendaAProsperar() {
  return (
    <section id="educacional" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Aprenda a Prosperar</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A educação financeira é o primeiro passo para construir um patrimônio sólido. 
            Entenda os conceitos básicos antes de tomar suas decisões.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {cards.map((card, idx) => (
            <div key={idx} className="bg-[#F8FAFC] rounded-2xl p-6 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-sm mb-4">
                {card.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{card.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed">
                {card.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
