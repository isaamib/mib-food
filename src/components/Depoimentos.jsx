import { useEffect, useState } from "react";
import Reveal from "./Reveal";

const DEPOIMENTOS = [
  {
    nome: "Marina C.",
    texto:
      "O bolo da Bia foi o destaque da festa da minha filha. O acabamento, o sabor e a delicadeza da embalagem fizeram todo mundo comentar.",
  },
  {
    nome: "Leandro P.",
    texto:
      "Recebi o pedido em tempo recorde e ficou igual ao que a gente sonhou. Cada detalhe parecia feito com carinho de família.",
  },
  {
    nome: "Fernanda S.",
    texto:
      "O red velvet da mib food é de outro mundo. A gente provou, riu, e ficou pedindo mais. A acolhida da Bia também vale muito.",
  },
];

export default function Depoimentos() {
  const [atual, setAtual] = useState(0);

  useEffect(() => {
    const id = window.setInterval(() => {
      setAtual((prev) => (prev + 1) % DEPOIMENTOS.length);
    }, 4200);

    return () => window.clearInterval(id);
  }, []);

  const item = DEPOIMENTOS[atual];

  return (
    <section id="depoimentos" className="relative overflow-hidden bg-mib-choco py-24 text-mib-cream">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(255,136,158,0.18),transparent_40%),radial-gradient(circle_at_bottom_right,_rgba(255,245,236,0.12),transparent_35%)]" aria-hidden="true" />
      <div className="relative mx-auto max-w-6xl px-5">
        <Reveal>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-mib-cream/80">Quem já provou, ama</p>
            <h2 className="mt-4 font-display text-4xl text-mib-cream sm:text-5xl">A alegria fica até depois do último pedaço.</h2>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-12 rounded-[2.5rem] border border-mib-cream/15 bg-mib-cream/5 p-8 shadow-[0_30px_80px_-40px_rgba(0,0,0,0.5)] backdrop-blur-sm sm:p-12">
            <div className="flex items-center justify-center text-mib-pink">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-mib-cream/10 ring-1 ring-mib-cream/20">
                <span className="text-3xl">✦</span>
              </div>
            </div>

            <blockquote className="mx-auto mt-8 max-w-3xl text-center text-xl font-medium leading-relaxed text-mib-cream sm:text-2xl">
              “{item.texto}”
            </blockquote>

            <div className="mt-7 text-center">
              <p className="text-lg font-bold text-mib-pink">{item.nome}</p>
            </div>

            <div className="mt-8 flex items-center justify-center gap-2">
              {DEPOIMENTOS.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  aria-label={`Ir para depoimento ${index + 1}`}
                  onClick={() => setAtual(index)}
                  className={`h-3 w-10 rounded-full transition-all duration-300 ${
                    index === atual ? "bg-mib-pink" : "bg-mib-cream/25"
                  }`}
                />
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
