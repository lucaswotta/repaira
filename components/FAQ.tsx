import React from 'react';

const faqs = [
  {
    q: "O orçamento é realmente gratuito?",
    a: "Sim! Não cobramos nada para analisar seu aparelho. Você só paga se aprovar o serviço."
  },
  {
    q: "Quanto tempo demora o reparo?",
    a: "Serviços simples como troca de tela e bateria levam de 1 a 4 horas. Reparos em placa levam de 1 a 3 dias úteis."
  },
  {
    q: "Vocês buscam o aparelho em casa?",
    a: "Sim, temos serviço de leva-e-traz via motoboy parceiro para toda a capital. Consulte a taxa para seu bairro."
  },
  {
    q: "Qual a garantia do serviço?",
    a: "Oferecemos 1 ano de garantia (3 meses legal + 9 meses estendida Repaira) para a maioria dos serviços."
  }
];

const FAQ: React.FC = () => {
  return (
    <section id="faq" className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h3 className="text-3xl font-display font-bold text-slate-900">Perguntas Frequentes</h3>
        </div>

        <div className="space-y-4">
          {faqs.map((item, i) => (
            <div key={i} className="bg-slate-50 rounded-2xl p-6 hover:bg-white border border-transparent hover:border-slate-200 hover:shadow-md transition-all">
              <h4 className="font-bold text-lg text-slate-900 mb-2">{item.q}</h4>
              <p className="text-slate-600">{item.a}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
