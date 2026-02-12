
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import GoogleExpertise from './components/GoogleExpertise';
import Methodology from './components/Methodology';
import Comparison from './components/Comparison';
import Cases from './components/Cases';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppButton from './components/WhatsAppButton';
import { Send } from 'lucide-react';

const App: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="overflow-x-hidden">
        <Hero />
        <Stats />
        <GoogleExpertise />
        <Methodology />
        <Comparison />
        <Cases />
        
        {/* FAQ Section Integrated */}
        <section className="py-24">
          <div className="max-w-3xl mx-auto px-6">
             <div className="text-center mb-16">
               <h2 className="text-[10px] font-bold text-yellow-500 uppercase tracking-[0.3em] mb-4">FAQ</h2>
               <h3 className="text-3xl md:text-5xl font-black mb-6">Dúvidas Frequentes</h3>
             </div>
             
             <div className="space-y-4">
                {[
                  { q: "Para quem é o seu serviço?", a: "Empresas que já possuem validação de produto e buscam escala vertical ou profissionalização da aquisição via tráfego pago nas principais redes." },
                  { q: "Qual o investimento mínimo sugerido?", a: "Para que a estratégia de dados seja eficiente, recomendo investimentos a partir de R$ 3.000/mês, distribuídos nos canais que mais fizerem sentido para seu negócio." },
                  { q: "Em quanto tempo vejo resultados?", a: "A fase de aprendizado dura em média 15 a 30 dias. Melhorias de ROI multicanal costumam ser nítidas a partir do segundo mês de gestão estratégica." },
                  { q: "Você atua com quais plataformas?", a: "Sou agnóstico. Domino Google Ads, Meta Ads (Insta/FB), TikTok Ads, YouTube Ads e LinkedIn Ads. Sugiro a plataforma com base em onde seu ROI será maior." }
                ].map((item, idx) => (
                  <details key={idx} className="glass-card rounded-2xl group transition-all">
                    <summary className="p-6 cursor-pointer flex items-center justify-between font-bold text-lg md:text-xl select-none list-none">
                      {item.q}
                      <span className="text-yellow-500 group-open:rotate-180 transition-transform text-sm">▼</span>
                    </summary>
                    <div className="p-6 pt-0 text-gray-400 leading-relaxed border-t border-white/5 mt-4 text-sm md:text-base">
                      {item.a}
                    </div>
                  </details>
                ))}
             </div>
          </div>
        </section>

        <Contact />
      </main>
      <Footer />

      {/* Floating CTA for Mobile - Positioned slightly higher to clear WhatsApp button */}
      <div className="fixed bottom-24 right-6 z-50 md:hidden">
        <a 
          href="#contato" 
          className="gold-bg w-14 h-14 rounded-full flex items-center justify-center text-black shadow-2xl shadow-yellow-500/50 active:scale-90 transition-transform"
          aria-label="Contato"
        >
          <Send size={24} />
        </a>
      </div>

      <WhatsAppButton />
    </div>
  );
};

export default App;
