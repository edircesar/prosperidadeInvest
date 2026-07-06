import { useEffect } from 'react';
import { Shield } from 'lucide-react';

export function PrivacyPolicy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8 bg-white min-h-[70vh]">
      <div className="flex items-center gap-3 mb-8">
        <Shield className="text-[#43A047] w-8 h-8" />
        <h1 className="text-3xl font-bold text-gray-900">Política de Privacidade</h1>
      </div>
      
      <div className="space-y-6 text-gray-700 leading-relaxed">
        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">1. Informações Gerais</h2>
          <p>
            A presente Política de Privacidade tem por finalidade demonstrar o compromisso da <strong>Prosperidade Investimentos</strong> com a privacidade e a proteção dos dados pessoais coletados de seus usuários, estabelecendo as regras sobre a coleta, registro, armazenamento, uso, compartilhamento e eliminação dos dados.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">2. Coleta e Uso de Dados</h2>
          <p>
            O nosso simulador de investimentos é uma ferramenta puramente educacional que realiza todos os cálculos localmente no seu navegador. <strong>Não coletamos, armazenamos ou processamos</strong> nenhum dado financeiro inserido nas simulações. Os valores, prazos e taxas simulados permanecem exclusivamente no seu dispositivo.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">3. Cookies e Tecnologias de Rastreamento</h2>
          <p>
            Podemos utilizar tecnologias de rastreamento (como cookies ou analytics básicos) estritamente para entender métricas de acesso gerais e melhorar o funcionamento do nosso site, sem identificar pessoalmente os usuários ou vincular dados de simulação à sua identidade.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">4. Compartilhamento de Informações</h2>
          <p>
            Não vendemos, alugamos ou compartilhamos qualquer tipo de informação inserida por você no simulador com terceiros, instituições financeiras, ou plataformas de publicidade. 
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">5. Segurança dos Dados</h2>
          <p>
            Adotamos medidas de segurança técnicas e organizacionais adequadas para proteger a integridade de nossa plataforma. Como os cálculos são realizados <i>client-side</i> (no seu próprio navegador), a segurança da informação simulada depende primariamente da segurança do seu dispositivo.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold text-gray-900 mb-3">6. Contato</h2>
          <p>
            Se você tiver dúvidas, solicitações ou quiser exercer seus direitos relacionados à privacidade e proteção de dados, entre em contato conosco através do e-mail:
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
