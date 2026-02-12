
import React from 'react';
import { Briefcase, TrendingUp, Users, Trophy } from 'lucide-react';

const Stats: React.FC = () => {
  const stats = [
    { label: "+4 Anos", sub: "Experiência", icon: <Briefcase /> },
    { label: "+7M", sub: "Investidos", icon: <TrendingUp /> },
    { label: "+800K", sub: "Leads", icon: <Users /> },
    { label: "+170", sub: "Projetos", icon: <Trophy /> },
  ];

  return (
    <section id="experiencia" className="py-20 md:py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-[10px] md:text-sm font-bold text-yellow-500 uppercase tracking-[0.2em] mb-3 md:mb-4">Provas Reais</h2>
          <h3 className="text-3xl md:text-5xl font-bold mb-4 md:mb-6">Resultados que Falam por Si</h3>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg">
            Números que refletem minha dedicação em transformar investimento em mídia paga em ativos financeiros reais.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {stats.map((stat, idx) => (
            <div key={idx} className="glass-card p-5 md:p-8 rounded-2xl md:rounded-3xl group hover:border-yellow-500/50 transition-all duration-300">
              <div className="w-10 h-10 md:w-12 md:h-12 gold-bg rounded-xl md:rounded-2xl flex items-center justify-center text-black mb-4 md:mb-6 group-hover:scale-110 transition-transform">
                {React.cloneElement(stat.icon as React.ReactElement, { size: 20 })}
              </div>
              <h4 className="text-2xl md:text-4xl font-extrabold mb-1 tracking-tight">{stat.label}</h4>
              <p className="text-xs md:text-gray-400 font-medium">{stat.sub}</p>
              <div className="mt-3 w-0 group-hover:w-full h-0.5 gold-bg transition-all duration-500 hidden md:block"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
