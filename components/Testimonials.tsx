import React from 'react';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    name: "Ricardo Mendes",
    role: "Designer Gráfico",
    text: "Meu MacBook parou de ligar no meio de um projeto. A Repaira diagnosticou problema na placa e resolveu em 2 dias. Salvaram minha semana!",
    rating: 5
  },
  {
    name: "Ana Clara Souza",
    role: "Estudante",
    text: "Troquei a tela do meu iPhone 13. Ficou perfeita, nem parece que foi mexido. O atendimento pelo WhatsApp foi super ágil.",
    rating: 5
  },
  {
    name: "Marcos Viana",
    role: "Empresário",
    text: "Mandei montar 5 PCs para o escritório. O cable management ficou impecável e as máquinas estão voando. Recomendo muito.",
    rating: 5
  }
];

const Testimonials: React.FC = () => {
  return (
    <section id="testimonials" className="py-24 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-violet-600 font-bold tracking-wider uppercase text-sm mb-3">Depoimentos</h2>
          <h3 className="text-4xl font-display font-bold text-slate-900">O que dizem sobre nós</h3>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 hover:shadow-xl transition-all hover:-translate-y-1 relative group">
              <Quote className="absolute top-6 right-6 text-slate-100 h-10 w-10 group-hover:text-violet-100 transition-colors" />
              
              <div className="flex gap-1 mb-6">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              
              <p className="text-slate-600 mb-6 leading-relaxed">"{review.text}"</p>
              
              <div className="flex items-center gap-4">
                <div className="h-10 w-10 rounded-full bg-gradient-to-br from-violet-500 to-blue-500 flex items-center justify-center text-white font-bold">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <div className="font-bold text-slate-900">{review.name}</div>
                  <div className="text-xs text-slate-500 font-medium uppercase">{review.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
