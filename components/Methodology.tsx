
import React from 'react';
import { Target, Search, BarChart3, Rocket } from 'lucide-react';

const Methodology: React.FC = () => {
  const steps = [
    { title: "Diagnóstico Profundo", desc: "Analisamos seus números atuais, concorrentes e o teto do seu mercado antes de apertar qualquer botão.", icon: <Search /> },
    { title: "Funil de Elite", desc: "Estruturamos a jornada do seu cliente para que o tráfego não apenas chegue, mas converta.", icon: <Target /> },
    { title: "Escala Vertical", desc: "Otimizamos criativos e audiências com IA para escalar seu faturamento sem explodir seu CPL.", icon: <Rocket /> },
    { title: "Data Intelligence", desc: "Relatórios de BI semanais para você saber exatamente de onde vem cada centavo de lucro.", icon: <BarChart3 /> },
  ];

  return (
    <section id="metodologia" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-20 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-sm font-bold text-yellow-500 uppercase tracking-[0.3em] mb-6">O Processo</h2>
            <h3 className="text-4xl md:text-6xl font-black mb-8 leading-tight">Método 360º de <br />Escala Preditiva</h3>
            <p className="text-gray-400 text-xl mb-10 font-light leading-relaxed">
              Não existe "sorte" no Google Ads. Existe processo, dados e consistência. Minha metodologia foi testada em mais de 170 projetos e 7 milhões em investimento.
            </p>
            <a href="#contato" className="inline-flex items-center gap-3 text-white font-bold border-b-2 border-yellow-500 pb-2 hover:gap-5 transition-all">
              Ver Como Aplicar ao Seu Negócio <Target size={20} />
            </a>
          </div>

          <div className="lg:w-1/2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {steps.map((step, i) => (
              <div key={i} className="glass-card p-8 rounded-[2.5rem] hover:border-yellow-500/40 transition-all duration-300 group">
                <div className="w-14 h-14 gold-bg rounded-2xl flex items-center justify-center text-black mb-6 group-hover:scale-110 transition-transform">
                  {React.cloneElement(step.icon as React.ReactElement, { size: 28 })}
                </div>
                <h4 className="text-xl font-bold mb-3">{step.title}</h4>
                <p className="text-sm text-gray-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;
