import React from 'react';
import { Truck, Award, ShieldCheck, MapPin } from 'lucide-react';

// Diferenciais competitivos focados em segurança e comodidade
const features = [
  {
    icon: Truck,
    title: "Técnico Delivery",
    desc: "Não pode sair? Nós vamos até sua casa ou trabalho retirar e entregar o aparelho. (Consulte região)"
  },
  {
    icon: ShieldCheck,
    title: "Garantia de 1 Ano",
    desc: "Confiamos tanto no nosso serviço que oferecemos até 1 ano de garantia na maioria dos reparos."
  },
  {
    icon: Award,
    title: "Peças Homologadas",
    desc: "Utilizamos peças originais ou de qualidade premium (AAA) para garantir durabilidade."
  },
  {
    icon: MapPin,
    title: "Visita Corporativa",
    desc: "Atendimento especializado para empresas. Manutenção de frota de notebooks e celulares."
  }
];

const WhyUs: React.FC = () => {
  return (
    <section id="why-us" className="py-24 bg-slate-900 text-white relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-600/20 rounded-full blur-[120px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-violet-400 font-bold tracking-wider uppercase text-sm mb-3">Por que a Repaira?</h2>
            <h3 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              A maior rede de assistência,<br />
              agora na <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-blue-400">sua cidade.</span>
            </h3>
            <p className="text-slate-400 text-lg mb-8 leading-relaxed">
              Chega de surpresas desagradáveis. Oferecemos transparência total, nota fiscal e a segurança que você precisa para deixar seu equipamento.
            </p>

            <div className="grid sm:grid-cols-2 gap-8">
              {features.map((f, i) => (
                <div key={i} className="flex gap-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-800 flex items-center justify-center shrink-0 border border-slate-700">
                    <f.icon className="text-violet-400 h-6 w-6" aria-hidden="true" />
                  </div>
                  <div>
                    <h4 className="font-bold text-lg mb-1">{f.title}</h4>
                    <p className="text-slate-400 text-sm">{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            {/* Image Grid */}
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4 mt-8">
                <div className="bg-slate-800 p-6 rounded-2xl border border-slate-700/50 flex flex-col items-center justify-center text-center">
                  <div className="text-3xl font-bold text-green-400 mb-1">98%</div>
                  <div className="text-sm text-slate-400">Aprovações</div>
                </div>
                <div className="bg-slate-800 rounded-2xl border border-slate-700/50 h-64 overflow-hidden relative group">
                  <img src="https://images.unsplash.com/photo-1591799264318-7e6ef8ddb7ea?q=80&w=1000&auto=format&fit=crop" alt="Laboratório" className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500 opacity-60 group-hover:opacity-100" />
                </div>
              </div>
              <div className="space-y-4">
                <div className="bg-slate-800 rounded-2xl border border-slate-700/50 h-64 overflow-hidden relative group">
                  <img src="https://images.unsplash.com/photo-1588508065123-287b28e013da?q=80&w=1000&auto=format&fit=crop" alt="Atendimento" className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500 opacity-60 group-hover:opacity-100" />
                </div>
                <div className="bg-violet-600 p-6 rounded-2xl border border-violet-500 shadow-2xl shadow-violet-900/50">
                  <div className="text-3xl font-bold text-white mb-1">1 Ano</div>
                  <div className="text-sm text-violet-200">Garantia em Serviços</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
