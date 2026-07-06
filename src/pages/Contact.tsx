import { useEffect } from 'react';
import { Mail, Sparkles } from 'lucide-react';

export function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-16 sm:px-6 lg:px-8 bg-white min-h-[70vh]">
      <div className="text-center mb-12">
        <div className="flex justify-center mb-4">
          <div className="w-16 h-16 bg-[#E8F5E9] rounded-full flex items-center justify-center">
            <Sparkles className="text-[#43A047] w-8 h-8" />
          </div>
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Vamos Construir sua Prosperidade Juntos!</h1>
        <p className="text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
          Acreditamos que a educação financeira é a chave mestra para abrir as portas de um futuro mais tranquilo e abundante. Cada pequeno passo que você dá hoje, cada conceito que você aprende, é uma semente plantada para uma colheita farta amanhã.
        </p>
      </div>

      <div className="bg-[#F8FAFC] rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm text-center max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Estamos aqui para ajudar</h2>
        <p className="text-gray-600 mb-8 leading-relaxed">
          Se você tem dúvidas sobre o simulador, quer compartilhar sua jornada de investimentos conosco ou tem alguma sugestão para tornarmos essa ferramenta ainda melhor, adoraríamos ouvir você! A sua prosperidade é a nossa maior inspiração.
        </p>

        <div className="inline-flex items-center gap-3 bg-white px-6 py-4 rounded-2xl border border-gray-200 shadow-sm">
          <Mail className="text-[#43A047] w-6 h-6" />
          <a href="mailto:cesar@projeto7.com" className="text-lg font-medium text-gray-900 hover:text-[#43A047] transition-colors">
            cesar@projeto7.com
          </a>
        </div>
        
        <p className="text-sm text-gray-500 mt-6">
          Nossa equipe responderá o mais breve possível com muita alegria.
        </p>
      </div>
      <div className="mt-16 bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-sm max-w-3xl mx-auto text-center md:text-left">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Sobre o Desenvolvedor</h2>
        <div className="space-y-4 text-gray-700 leading-relaxed">
          <p>
            O Prosperidade Invest foi idealizado e desenvolvido por <strong>Prof. César Carvalho</strong>, profissional apaixonado por tecnologia, inovação e educação.
          </p>
          <p>
            Bacharel em Tecnologia da Informação e Marketing Digital, possui especialização em Tecnologias Aplicadas à Pedagogia, unindo conhecimento técnico e didático para criar soluções digitais intuitivas, acessíveis e úteis para o dia a dia das pessoas.
          </p>
          <p>
            Seu propósito é desenvolver ferramentas que simplifiquem o aprendizado, auxiliem na tomada de decisões e promovam a educação financeira por meio da tecnologia. O Prosperidade Invest nasceu com essa missão: oferecer uma plataforma prática para simulação de investimentos, contribuindo para que mais pessoas possam planejar seu futuro financeiro com mais clareza e consciência.
          </p>
          <p>
            Caso tenha dúvidas, sugestões ou queira entrar em contato, utilize o e-mail desta página. Seu feedback é sempre bem-vindo e contribui para a evolução contínua da plataforma.
          </p>
        </div>
      </div>
    </div>
  );
}
