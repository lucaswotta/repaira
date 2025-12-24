import React, { useState, useEffect } from 'react';
import { Menu, X, Zap } from 'lucide-react';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  /**
   * Efeito para detectar o scroll da página.
   * Altera o estado 'scrolled' quando o usuário rola mais de 20px.
   */
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Serviços', href: '#services' },
    { name: 'Diferenciais', href: '#why-us' },
    { name: 'Processo', href: '#process' },
    { name: 'Depoimentos', href: '#testimonials' },
    { name: 'FAQ', href: '#faq' },
  ];

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${scrolled
        ? 'bg-white/80 backdrop-blur-lg shadow-lg py-3'
        : 'bg-transparent py-5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo Descolada */}
          <a href="#" className="flex items-center gap-2 group">
            <div className="relative flex items-center justify-center w-10 h-10 bg-slate-900 rounded-xl transform group-hover:rotate-6 transition-transform duration-300">
              <div className="absolute inset-0 bg-gradient-to-tr from-violet-600 to-blue-500 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Zap className="h-6 w-6 text-white relative z-10 fill-current" />
            </div>
            <span className="font-display font-bold text-2xl text-slate-900 tracking-tight">
              repaira<span className="text-violet-600">.</span>
            </span>
          </a>

          {/* Desktop Nav */}
          <div className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-semibold text-slate-600 hover:text-violet-600 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a
              href="#quote"
              className="px-6 py-2.5 bg-slate-900 text-white rounded-full font-bold hover:bg-violet-600 transition-all shadow-lg hover:shadow-violet-500/30 transform hover:-translate-y-0.5"
            >
              Orçamento Grátis
            </a>
          </div>

          {/* Mobile Button */}
          <div className="lg:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-600 hover:text-slate-900 p-2"
              aria-label={isMenuOpen ? "Fechar menu de navegação" : "Abrir menu de navegação"}
              aria-expanded={isMenuOpen}
            >
              {isMenuOpen ? <X size={28} aria-hidden="true" /> : <Menu size={28} aria-hidden="true" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 absolute w-full shadow-2xl animate-in slide-in-from-top-5">
          <div className="px-6 py-8 space-y-4 flex flex-col">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-lg font-medium text-slate-700 hover:text-violet-600"
                onClick={() => setIsMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <hr className="border-slate-100 my-2" />
            <a
              href="#quote"
              className="text-center w-full py-3 bg-violet-600 text-white rounded-xl font-bold text-lg"
              onClick={() => setIsMenuOpen(false)}
            >
              Solicitar Orçamento
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
