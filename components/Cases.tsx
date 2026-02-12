
import React from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';

const Cases: React.FC = () => {
  const cases = [
    {
      title: "Gladys Artigos Religiosos",
      subtitle: "Líder nacional do segmento",
      results: [
        { label: "ROI", val: "10x+" },
        { label: "Share", val: "Líder" },
        { label: "Status", val: "Escalado" }
      ],
      tags: ["Omni-channel", "E-commerce"]
    },
    {
      title: "Planos de Saúde SP",
      subtitle: "Escala em captação de leads",
      results: [
        { label: "Lead", val: "-45% CPL" },
        { label: "Volume", val: "+230%" },
        { label: "Qualidade", val: "Top" }
      ],
      tags: ["Meta Ads", "Leads"]
    }
  ];

  const brands = [
    "Paula C. Romão", "Bordô Marketing", "Paula Reis", "São José", 
    "Gladys Artigos", "Planos SP", "Imob Express", "Health Care"
  ];

  return (
    <section id="projetos" className="py-20 md:py-32 bg-zinc-950 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-[10px] md:text-sm font-bold text-yellow-500 uppercase tracking-[0.2em] mb-4">Sucesso em Escala</h2>
            <h3 className="text-3xl md:text-5xl font-black mb-4 md:mb-6">Canais Diferentes, <br />O Mesmo Resultado.</h3>
            <p className="text-gray-400 text-base md:text-lg leading-relaxed">Portfólio de projetos onde a estratégia superou os algoritmos e gerou lucro real para o cliente.</p>
          </div>
          <button className="flex items-center gap-2 text-white font-bold hover:text-yellow-500 transition-colors group text-sm md:text-base">
            Ver Todos os Cases <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-10 mb-24 md:mb-32">
          {cases.map((item, idx) => (
            <div key={idx} className="glass-card rounded-[2.5rem] p-8 md:p-14 hover:border-yellow-500/30 transition-all duration-500 group relative">
              <div className="flex justify-between items-start mb-8 md:mb-12">
                <div className="pr-4">
                  <div className="flex gap-2 mb-4">
                    {item.tags.map(tag => (
                      <span key={tag} className="text-[8px] md:text-[9px] font-bold uppercase tracking-widest text-yellow-500/80 bg-yellow-500/5 border border-yellow-500/10 px-2 py-1 rounded">{tag}</span>
                    ))}
                  </div>
                  <h4 className="text-2xl md:text-4xl font-bold mb-2 tracking-tight">{item.title}</h4>
                  <p className="text-sm md:text-base text-gray-400">{item.subtitle}</p>
                </div>
                <div className="w-12 h-12 md:w-16 md:h-16 shrink-0 bg-white/5 rounded-2xl flex items-center justify-center text-white/20 group-hover:text-yellow-500 group-hover:bg-yellow-500/10 transition-all">
                  <ExternalLink size={20} className="md:w-6 md:h-6" />
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mb-10">
                {item.results.map((res, rIdx) => (
                  <div key={rIdx} className={`bg-white/5 p-4 md:p-6 rounded-2xl border border-white/5 ${rIdx === 2 ? 'col-span-2 md:col-span-1' : ''}`}>
                    <p className="text-[9px] md:text-[10px] text-gray-500 font-bold uppercase mb-2 tracking-widest">{res.label}</p>
                    <p className="text-lg md:text-xl font-bold text-white">{res.val}</p>
                  </div>
                ))}
              </div>

              <button className="w-full bg-white text-black py-4 md:py-5 rounded-2xl font-bold text-sm hover:bg-gray-200 transition-colors flex items-center justify-center gap-2 active:scale-95">
                Explorar Estratégia do Case <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>

        {/* Improved Brands Carousel */}
        <div className="relative pt-12">
          <div className="text-center mb-12">
            <h4 className="text-[10px] md:text-xs font-bold text-gray-500 uppercase tracking-[0.4em]">Marcas que Confiam na Estratégia</h4>
          </div>
          
          <div className="relative w-full">
            <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-zinc-950 to-transparent z-10"></div>
            <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-zinc-950 to-transparent z-10"></div>
            
            <div className="flex animate-marquee gap-12 md:gap-24 items-center py-4">
              {[...brands, ...brands].map((brand, i) => (
                <div key={i} className="flex items-center justify-center min-w-[150px] md:min-w-[200px]">
                   <span className="text-lg md:text-2xl font-black text-gray-600 hover:text-white transition-colors cursor-default whitespace-nowrap">
                     {brand.toUpperCase()}
                   </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: flex;
          width: fit-content;
          animation: marquee 30s linear infinite;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
      `}</style>
    </section>
  );
};

export default Cases;
