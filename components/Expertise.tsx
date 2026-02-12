
import React from 'react';
import { CheckCircle2, Zap, Search, Layout, Video, Share2 } from 'lucide-react';

const Expertise: React.FC = () => {
  return (
    <section className="py-16 md:py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="glass-card rounded-[2rem] md:rounded-[3rem] overflow-hidden">
          <div className="grid lg:grid-cols-2">
            <div className="p-8 md:p-12 lg:p-20 bg-gradient-to-br from-yellow-500/10 to-transparent">
              <div className="inline-flex items-center gap-2 bg-yellow-500/20 px-3 py-1.5 md:px-4 md:py-2 rounded-full mb-6 md:mb-8 border border-yellow-500/20">
                <Zap size={14} className="text-yellow-500 md:w-4 md:h-4" />
                <span className="text-[10px] md:text-xs font-bold text-yellow-500 uppercase tracking-widest">Inteligência de Mídia</span>
              </div>
              <h3 className="text-3xl md:text-5xl font-bold mb-6 text-balance">Domínio em Todas as Frentes de Aquisição</h3>
              <p className="text-gray-400 text-base md:text-lg mb-8 md:mb-10 leading-relaxed">
                Minha atuação não é limitada por ferramentas. Entrego resultados onde quer que seu público esteja, utilizando as melhores tecnologias de cada plataforma.
              </p>
              
              <div className="space-y-3 md:space-y-4">
                {[
                  "Planejamento Omni-channel (Google + Meta + TikTok)",
                  "Estratégias de Remarketing Transversal",
                  "Otimização de ROAS em escala multicanal",
                  "Consultoria de CRM e LTV pós-clique"
                ].map((item, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="text-yellow-500 shrink-0" size={18} />
                    <span className="text-sm md:text-gray-200 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="p-8 md:p-12 lg:p-20 bg-white/5 flex flex-col justify-center gap-4 md:gap-8">
              {[
                { title: "Search & Intent", desc: "Google Ads e YouTube Ads para capturar demanda consciente.", icon: <Search /> },
                { title: "Social & Discovery", desc: "Meta Ads, Instagram e TikTok para gerar nova demanda.", icon: <Share2 /> },
                { title: "High-Ticket & B2B", desc: "Estratégias avançadas em LinkedIn Ads para negócios premium.", icon: <Layout /> }
              ].map((item, i) => (
                <div key={i} className="flex gap-4 md:gap-6 p-4 md:p-6 glass-card rounded-2xl hover:bg-white/10 transition-all group">
                  <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 gold-bg rounded-xl flex items-center justify-center text-black group-hover:scale-110 transition-transform">
                    {React.cloneElement(item.icon as React.ReactElement, { size: 20 })}
                  </div>
                  <div>
                    <h4 className="text-lg md:text-xl font-bold mb-1">{item.title}</h4>
                    <p className="text-xs md:text-sm text-gray-400">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expertise;
