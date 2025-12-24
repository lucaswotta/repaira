import React from 'react';

const steps = [
  {
    number: '01',
    title: 'Solicitação',
    text: 'Você preenche o formulário aqui no site ou chama no WhatsApp.'
  },
  {
    number: '02',
    title: 'Logística',
    text: 'Traz o aparelho até nós ou buscamos em sua casa/escritório.'
  },
  {
    number: '03',
    title: 'Diagnóstico',
    text: 'Analisamos o defeito e passamos o valor exato para aprovação.'
  },
  {
    number: '04',
    title: 'Pronto!',
    text: 'Reparo feito, testes executados e aparelho devolvido.'
  }
];

const Process: React.FC = () => {
  return (
    <section id="process" className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-violet-600 font-bold tracking-wider uppercase text-sm mb-3">Passo a Passo</h2>
          <h3 className="text-4xl font-display font-bold text-slate-900">Como funciona?</h3>
        </div>

        <div className="grid md:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative group">
              {/* Connector Line (Desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-1/2 w-full h-1 bg-slate-100 group-hover:bg-violet-100 transition-colors"></div>
              )}
              
              <div className="relative flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-white rounded-2xl border-2 border-slate-100 flex items-center justify-center text-2xl font-bold text-slate-300 mb-6 shadow-sm group-hover:scale-110 group-hover:border-violet-500 group-hover:text-violet-600 group-hover:shadow-violet-200 transition-all duration-300 z-10">
                  {step.number}
                </div>
                <h4 className="text-xl font-bold mb-3 text-slate-900">{step.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed max-w-[200px]">
                  {step.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
