
import React from 'react';
import { ChevronRight, Star, ShieldCheck, TrendingUp, Globe } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="inicio" className="relative pt-28 md:pt-40 pb-20 md:pb-28 overflow-hidden">
      <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-yellow-500/10 blur-[150px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <div className="w-full lg:flex-1 text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 bg-white/5 border border-white/10 px-4 py-2 rounded-full mb-8 mx-auto lg:mx-0">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-yellow-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-yellow-500"></span>
              </span>
              <span className="text-[10px] md:text-xs text-yellow-500 font-bold uppercase tracking-[0.2em]">Estrategista Multi-plataforma • Escala Global</span>
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black leading-[1] mb-8 tracking-tighter">
              Estratégia Sólida, <br />
              <span className="gold-gradient">Escala Previsível.</span>
            </h1>
            
            <p className="text-lg md:text-2xl text-gray-400 mb-10 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-light">
              Não sou apenas um gestor de ferramentas. Sou um parceiro que identifica <span className="text-white font-medium">onde seu cliente está</span> e implementa a estratégia de mídia certa — seja no Google, Meta, TikTok ou LinkedIn — para maximizar seu lucro real.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-14">
              <a href="#contato" className="w-full sm:w-auto px-10 py-5 gold-bg text-black rounded-2xl font-extrabold text-lg flex items-center justify-center gap-3 hover:scale-[1.05] transition-all shadow-2xl shadow-yellow-500/30 active:scale-95">
                Solicitar Diagnóstico <ChevronRight size={22} />
              </a>
              <div className="flex items-center gap-4 px-6 py-5">
                <div className="flex -space-x-3">
                  {[1, 2, 3].map(i => (
                    <img key={i} src={`https://i.pravatar.cc/100?img=${i+10}`} className="w-10 h-10 rounded-full border-2 border-zinc-900" alt="Client" />
                  ))}
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-white">+7 Milhões em Mídia</p>
                  <p className="text-[10px] text-gray-500 uppercase font-bold tracking-widest">Domínio de Canais Omni</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap justify-center lg:justify-start items-center gap-8 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
              <div className="flex items-center gap-2" title="Google Partner Certified"><ShieldCheck size={20} /><span className="text-xs font-bold uppercase">Google Ads</span></div>
              <div className="flex items-center gap-2" title="Meta Certified Professional"><TrendingUp size={20} /><span className="text-xs font-bold uppercase">Meta Ads</span></div>
            </div>
          </div>

          <div className="w-full lg:flex-1 order-1 lg:order-2 flex justify-center lg:justify-end">
            <div className="relative w-72 h-72 sm:w-96 sm:h-96 md:w-[500px] md:h-[500px]">
              <div className="absolute inset-0 gold-bg rounded-full opacity-10 blur-[100px] animate-pulse"></div>
              
              <div className="relative z-10 w-full h-full rounded-[3rem] border border-white/10 overflow-hidden group">
                <img 
                  src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=687&auto=format&fit=crop" 
                  className="w-full h-full object-cover grayscale brightness-90 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000"
                  alt="Samuel Felipe"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>
                
                <div className="absolute bottom-8 left-8 right-8 p-6 glass-card rounded-2xl">
                  <p className="text-yellow-500 text-[10px] font-bold uppercase tracking-[0.2em] mb-2">Visão Estratégica</p>
                  <p className="text-white text-lg font-bold">"O canal é secundário. A estratégia e o lucro são primários."</p>
                </div>
              </div>

              <div className="absolute -top-6 -right-6 glass-card p-6 rounded-3xl shadow-2xl z-20 animate-float">
                <div className="flex gap-1 mb-2">
                  {[...Array(5)].map((_, i) => <Star key={i} size={12} className="fill-yellow-500 text-yellow-500" />)}
                </div>
                <p className="text-2xl font-black text-white">4.9/5</p>
                <p className="text-[10px] text-gray-500 font-bold uppercase tracking-widest">Média de Satisfação</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
