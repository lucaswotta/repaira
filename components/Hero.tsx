import React from 'react';
import { ArrowRight, MessageCircle, Truck } from 'lucide-react';

/**
 * Componente Hero (Topo da página)
 * Utiliza gatilhos mentais de conveniência e garantia para atrair o usuário imediatamente.
 */
const Hero: React.FC = () => {
  return (
    <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-slate-50">
      {/* Background Blobs */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-violet-300/30 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2 -z-10" aria-hidden="true" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-300/30 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/3 -z-10" aria-hidden="true" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          <div className="space-y-8 relative z-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-50 border border-green-200 shadow-sm text-sm font-bold text-green-700 animate-fade-in-up">
              <span className="flex h-2 w-2 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              Técnicos Online Agora
            </div>

            <h1 className="text-5xl lg:text-7xl font-display font-bold text-slate-900 leading-[0.95] tracking-tight">
              Quebrou? <br />
              A gente conserta <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-blue-500">
                onde você estiver.
              </span>
            </h1>

            <p className="text-xl text-slate-600 max-w-lg leading-relaxed font-light">
              Não perca seu dia no trânsito. <strong>Nós vamos até você</strong> e consertamos tudo na sua frente, seja em casa ou no escritório. A única com peças originais e <strong>1 ano de garantia</strong>.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="https://wa.me/5511999999999"
                className="inline-flex justify-center items-center px-8 py-4 text-lg font-bold text-white bg-green-600 rounded-2xl hover:bg-green-700 transition-all shadow-xl hover:shadow-green-500/30 hover:-translate-y-1"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Chamar no WhatsApp
              </a>
              <a
                href="#quote"
                className="inline-flex justify-center items-center px-8 py-4 text-lg font-bold text-slate-700 bg-white border border-slate-200 rounded-2xl hover:bg-slate-50 transition-all shadow-sm hover:border-slate-300"
              >
                Orçamento no Site
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>

            <div className="pt-8 border-t border-slate-200 grid grid-cols-3 gap-6">
              <div>
                <div className="font-bold text-2xl text-slate-900 flex items-center gap-2">
                  <Truck className="h-6 w-6 text-violet-600" /> Delivery
                </div>
                <div className="text-sm text-slate-500">Vamos até você</div>
              </div>
              <div>
                <div className="font-bold text-2xl text-slate-900">1 Ano</div>
                <div className="text-sm text-slate-500">De Garantia</div>
              </div>
              <div>
                <div className="font-bold text-2xl text-slate-900">30 min</div>
                <div className="text-sm text-slate-500">Reparo médio</div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white bg-slate-900 aspect-[4/5] lg:aspect-square group">
              <img
                src="/hero-technician.png"
                alt="Técnico reparando iPhone"
                className="object-cover w-full h-full opacity-90 group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-transparent to-transparent"></div>

              <div className="absolute bottom-8 left-8 right-8">
                <div className="bg-white/10 backdrop-blur-md border border-white/20 p-6 rounded-2xl">
                  <div className="flex items-center gap-4">
                    <div className="bg-green-500 p-3 rounded-xl animate-pulse">
                      <MessageCircle className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <p className="text-white font-bold text-lg">Precisa de ajuda agora?</p>
                      <p className="text-slate-300 text-sm">Respondemos em 2 minutos</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-12 -right-12 w-24 h-24 bg-green-400 rounded-full blur-xl opacity-60 animate-pulse"></div>
            <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-violet-600 rounded-full blur-2xl opacity-40"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;
