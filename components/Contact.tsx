
import React from 'react';
import { Mail, Phone, Send } from 'lucide-react';

const Contact: React.FC = () => {
  return (
    <section id="contato" className="py-20 md:py-24 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-yellow-500/5 blur-[150px] pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <div className="text-center lg:text-left">
            <h2 className="text-[10px] md:text-sm font-bold text-yellow-500 uppercase tracking-[0.2em] mb-4">Vamos Escalar?</h2>
            <h3 className="text-3xl md:text-6xl font-bold mb-6 md:mb-8 leading-tight text-balance">Sua Marca Pode Ser a Próxima</h3>
            <p className="text-gray-400 text-base md:text-xl mb-10 md:mb-12 leading-relaxed">
              Cada transformação começa com uma conversa estratégica. Vamos desenhar o mapa de crescimento juntos.
            </p>

            <div className="space-y-4 md:space-y-6 max-w-sm mx-auto lg:mx-0">
              {[
                { label: 'E-mail', val: 'samucafe01@gmail.com', icon: <Mail />, href: 'mailto:samucafe01@gmail.com' },
                { label: 'WhatsApp', val: '31 99297-6990', icon: <Phone />, href: 'https://wa.me/5531992976990' }
              ].map((item, i) => (
                <a key={i} href={item.href} target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 text-left group hover:translate-x-2 transition-transform">
                  <div className="w-10 h-10 md:w-12 md:h-12 shrink-0 glass-card rounded-xl flex items-center justify-center text-yellow-500 group-hover:gold-bg group-hover:text-black transition-all">
                    {React.cloneElement(item.icon as React.ReactElement, { size: 20 })}
                  </div>
                  <div className="overflow-hidden">
                    <p className="text-[9px] md:text-xs text-gray-500 font-bold uppercase">{item.label}</p>
                    <p className="text-sm md:text-lg font-medium truncate group-hover:text-yellow-500 transition-colors">{item.val}</p>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div className="glass-card p-6 md:p-14 rounded-[2rem] md:rounded-[3rem] shadow-2xl border-white/10 w-full">
            <h4 className="text-xl md:text-2xl font-bold mb-8 flex items-center gap-3">
              <div className="w-8 h-8 gold-bg rounded flex items-center justify-center text-black">
                <Send size={16} />
              </div>
              Solicitar Diagnóstico
            </h4>

            <form className="space-y-4 md:space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="space-y-1.5 md:space-y-2">
                <label className="text-[10px] md:text-xs font-bold uppercase text-gray-500 ml-1">Nome Completo</label>
                <input 
                  type="text" 
                  placeholder="Ex: João Silva"
                  className="w-full bg-white/5 border border-white/10 rounded-xl md:rounded-2xl p-4 text-sm focus:outline-none focus:border-yellow-500 transition-colors text-white"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-4 md:gap-6">
                <div className="space-y-1.5 md:space-y-2">
                  <label className="text-[10px] md:text-xs font-bold uppercase text-gray-500 ml-1">E-mail Corporativo</label>
                  <input 
                    type="email" 
                    placeholder="email@empresa.com"
                    className="w-full bg-white/5 border border-white/10 rounded-xl md:rounded-2xl p-4 text-sm focus:outline-none focus:border-yellow-500 transition-colors text-white"
                  />
                </div>
                <div className="space-y-1.5 md:space-y-2">
                  <label className="text-[10px] md:text-xs font-bold uppercase text-gray-500 ml-1">WhatsApp</label>
                  <input 
                    type="tel" 
                    placeholder="(31) 99297-6990"
                    className="w-full bg-white/5 border border-white/10 rounded-xl md:rounded-2xl p-4 text-sm focus:outline-none focus:border-yellow-500 transition-colors text-white"
                  />
                </div>
              </div>

              <div className="space-y-1.5 md:space-y-2">
                <label className="text-[10px] md:text-xs font-bold uppercase text-gray-500 ml-1">Investimento Mensal</label>
                <select className="w-full bg-white/5 border border-white/10 rounded-xl md:rounded-2xl p-4 text-sm focus:outline-none focus:border-yellow-500 transition-colors appearance-none text-white">
                  <option className="bg-zinc-900">Selecione uma faixa</option>
                  <option className="bg-zinc-900">Até R$ 5.000 /mês</option>
                  <option className="bg-zinc-900">R$ 5.000 a R$ 15.000 /mês</option>
                  <option className="bg-zinc-900">Acima de R$ 15.000 /mês</option>
                </select>
              </div>

              <button className="w-full py-4 md:py-5 gold-bg text-black rounded-xl md:rounded-2xl font-bold text-base md:text-lg hover:scale-[1.01] transition-all shadow-xl shadow-yellow-500/10 active:scale-95">
                Enviar Agora
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
