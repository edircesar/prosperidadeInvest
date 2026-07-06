import { useEffect } from 'react';
import { FileText } from 'lucide-react';

export function TermsOfUse() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8 bg-white min-h-[70vh]">
      <div className="flex items-center gap-3 mb-8">
        <FileText className="text-[#43A047] w-8 h-8" />
        <h1 className="text-3xl font-bold text-gray-900">Termos de Uso</h1>
      </div>
      
      <div className="space-y-6 text-gray-700 leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Aceitação dos Termos</h2>
          <p>
            Ao acessar e utilizar o site e o simulador da <strong>Prosperidade Investimentos</strong>, você concorda com estes Termos de Uso. Se você não concordar com qualquer parte destes termos, não deverá utilizar nossa ferramenta.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Natureza Educacional (Não é Recomendação de Investimento)</h2>
          <p>
            A Prosperidade Investimentos é uma plataforma de cunho estritamente <strong>educacional</strong>. Os cálculos, gráficos, resultados de simulações e as taxas de juros (CDI, CDB, etc.) exibidas são apenas estimativas referenciais criadas para ilustrar o poder dos juros compostos ao longo do tempo.
          </p>
          <p className="mt-2">
            <strong>Em hipótese alguma as informações aqui prestadas devem ser interpretadas como recomendação, indicação, análise ou aconselhamento financeiro.</strong> Rentabilidade passada não é garantia de rentabilidade futura. Consulte sempre profissionais certificados e instituições financeiras autorizadas antes de realizar qualquer investimento real.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">3. Limitação de Responsabilidade</h2>
          <p>
            O uso da nossa ferramenta é feito por sua própria conta e risco. Não garantimos a exatidão absoluta dos cálculos matemáticos perante as variações reais do mercado, incidência de impostos (como IR e IOF) ou taxas de administração que possam ocorrer em investimentos reais. O site não se responsabiliza por lucros cessantes, perdas financeiras ou decisões de investimento tomadas com base em nossas simulações.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Propriedade Intelectual</h2>
          <p>
            Todo o conteúdo, design, logotipos, textos, gráficos e a estrutura da aplicação são de propriedade da Prosperidade Investimentos, sendo proibida a sua reprodução, cópia, ou modificação não autorizada.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Modificações dos Termos</h2>
          <p>
            Reservamo-nos o direito de modificar ou atualizar estes Termos de Uso a qualquer momento, sem aviso prévio. Recomendamos que você revise esta página periodicamente para se manter informado.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Contato</h2>
          <p>
            Para esclarecimento de dúvidas sobre estes Termos de Uso ou sobre o funcionamento do simulador, entre em contato através do e-mail:
          </p>
          <p className="mt-2 font-medium text-[#43A047]">
            <a href="mailto:cesar@projeto7.com">cesar@projeto7.com</a>
          </p>
        </section>

        <p className="text-sm text-gray-500 mt-8 pt-8 border-t border-gray-100">
          Última atualização: {new Date().toLocaleDateString('pt-BR')}
        </p>
      </div>
    </div>
  );
}
