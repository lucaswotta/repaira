import React from 'react';
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail, Zap } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-300 pt-20 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-12 mb-16">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-6">
              <div className="flex items-center justify-center w-8 h-8 bg-violet-600 rounded-lg">
                <Zap className="h-5 w-5 text-white fill-current" />
              </div>
              <span className="font-display font-bold text-xl text-white">repaira.</span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Assistência técnica premium focada em qualidade, velocidade e transparência. Seu dispositivo em boas mãos.
            </p>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Contato</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-violet-400">
                  <Phone size={16} />
                </div>
                (11) 98765-4321
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-violet-400">
                  <Mail size={16} />
                </div>
                oi@repaira.com.br
              </li>
              <li className="flex items-center gap-3">
                <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center text-violet-400">
                  <MapPin size={16} />
                </div>
                Av. Paulista, 1000 - SP
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Empresa</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-violet-400 transition-colors">Sobre Nós</a></li>
              <li><a href="#services" className="hover:text-violet-400 transition-colors">Serviços</a></li>
              <li><a href="#process" className="hover:text-violet-400 transition-colors">Como Funciona</a></li>
              <li><a href="#" className="hover:text-violet-400 transition-colors">Termos de Uso</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-bold mb-6">Siga-nos</h4>
            <div className="flex gap-3">
              <a href="#" aria-label="Siga-nos no Facebook" className="bg-slate-800 p-3 rounded-xl hover:bg-violet-600 hover:text-white transition-all hover:-translate-y-1">
                <Facebook size={20} aria-hidden="true" />
              </a>
              <a href="#" aria-label="Siga-nos no Instagram" className="bg-slate-800 p-3 rounded-xl hover:bg-pink-600 hover:text-white transition-all hover:-translate-y-1">
                <Instagram size={20} aria-hidden="true" />
              </a>
              <a href="#" aria-label="Siga-nos no Twitter" className="bg-slate-800 p-3 rounded-xl hover:bg-blue-400 hover:text-white transition-all hover:-translate-y-1">
                <Twitter size={20} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
          <p>© {new Date().getFullYear()} Repaira Tecnologia Ltda. CNPJ 00.000.000/0001-00</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Privacidade</a>
            <a href="#" className="hover:text-white">Cookies</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
