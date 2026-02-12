
import React from 'react';
import { Check, X } from 'lucide-react';

const Comparison: React.FC = () => {
  return (
    <section className="py-24 bg-zinc-950/50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-black mb-6">Por que um Estrategista <br />e não apenas um "Gestor"?</h2>
          <p className="text-gray-400">Um gestor aperta botões. Um estrategista desenha o caminho do lucro.</p>
        </div>

        <div className="glass-card rounded-[3rem] overflow-hidden border-white/5 shadow-2xl overflow-x-auto">
          <table className="w-full text-left min-w-[600px]">
            <thead>
              <tr className="border-b border-white/5">
                <th className="p-8 text-sm font-bold text-gray-500 uppercase">Diferencial</th>
                <th className="p-8 text-sm font-bold text-gray-500 uppercase text-center">Gestor Comum</th>
                <th className="p-8 text-sm font-bold text-yellow-500 uppercase text-center bg-yellow-500/5">Samuel Felipe</th>
              </tr>
            </thead>
            <tbody className="text-sm">
              {[
                ["Escolha de Canais", "Foca em apenas um canal", "Agnóstico (onde o lucro estiver)"],
                ["Foco Principal", "Cliques e Vaidade", "ROI e Escala de Negócio"],
                ["Estratégia de Criativos", "Passivo (espera o cliente)", "Ativo (direciona a produção)"],
                ["Acompanhamento", "Relatórios Mensais", "Suporte e BI Semanal"],
                ["Visão de Funil", "Apenas tráfego direto", "Estratégia 360º (Omni-channel)"]
              ].map((row, i) => (
                <tr key={i} className="border-b border-white/5 last:border-0">
                  <td className="p-8 font-medium text-gray-300">{row[0]}</td>
                  <td className="p-8 text-center text-red-500/50 italic">{row[1]}</td>
                  <td className="p-8 text-center font-bold text-white bg-yellow-500/5">{row[2]}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default Comparison;
