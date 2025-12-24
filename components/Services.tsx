import React from 'react';
import { Smartphone, Battery, Droplets, Laptop, ShieldAlert, Cpu } from 'lucide-react';

// Foco na "Dor" do cliente
// Lista de problemas comuns para criar identificação imediata
const problems = [
  {
    icon: Smartphone,
    title: 'Tela Quebrada',
    description: 'Seu celular caiu? Trocamos a tela (vidro ou display completo) em até 40 minutos. Peças originais.',
    color: 'bg-blue-500',
    cta: 'Trocar Tela'
  },
  {
    icon: Battery,
    title: 'Bateria Viciada',
    description: 'Bateria descarregando rápido ou estufada? Trocamos por uma nova com ciclo zero e garantia.',
    color: 'bg-green-500',
    cta: 'Nova Bateria'
  },
  {
    icon: Droplets,
    title: 'Caiu na Água?',
    description: 'Desligue imediatamente e traga para nós! Realizamos o banho químico para desoxidação da placa.',
    color: 'bg-cyan-500',
    cta: 'Salvar Aparelho'
  },
  {
    icon: Laptop,
    title: 'Notebook Lento',
    description: 'Upgrade de SSD e Memória RAM. Seu notebook até 10x mais rápido sem precisar comprar um novo.',
    color: 'bg-violet-500',
    cta: 'Fazer Upgrade'
  },
  {
    icon: ShieldAlert,
    title: 'Vírus e Formatação',
    description: 'Remoção de malwares, backup de dados e reinstalação limpa do Windows ou macOS.',
    color: 'bg-red-500',
    cta: 'Limpar Vírus'
  },
  {
    icon: Cpu,
    title: 'Não Liga / Placa',
    description: 'Seu aparelho morreu? Fazemos reparo avançado de microsoldagem em placas de iPhone e Android.',
    color: 'bg-orange-500',
    cta: 'Diagnóstico'
  },
];

const Services: React.FC = () => {
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-violet-600 font-bold tracking-wider uppercase text-sm mb-3">Nós podemos te ajudar</h2>
          <h3 className="text-4xl font-display font-bold text-slate-900 mb-4">Qual é o problema do seu aparelho?</h3>
          <p className="text-slate-500 max-w-2xl mx-auto">
            Identifique o defeito abaixo e solicite um orçamento imediato. Especialistas em Apple, Samsung, Dell e mais.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {problems.map((item, index) => (
            <div key={index} className="group p-8 bg-slate-50 rounded-3xl hover:bg-white hover:shadow-2xl transition-all duration-300 border border-slate-100 hover:border-transparent hover:-translate-y-2 flex flex-col">
              <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 text-white shadow-lg ${item.color} transform group-hover:scale-110 transition-transform duration-300`}>
                <item.icon size={28} strokeWidth={1.5} aria-hidden="true" />
              </div>
              <h4 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h4>
              <p className="text-slate-600 leading-relaxed text-sm font-medium mb-6 flex-grow">{item.description}</p>

              <a href="#quote" className="text-violet-600 font-bold text-sm uppercase tracking-wide group-hover:text-violet-700 flex items-center gap-2">
                {item.cta} <span className="text-lg">→</span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
