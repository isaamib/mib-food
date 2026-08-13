import Reveal from "./Reveal";
import { Sprinkles } from "./Decor";

const DOCES = [
  {
    nome: "Chocolatudo Tradicional",
    desc: "O clássico que nunca sai de moda. Muito chocolate, cremosidade na medida e aquele sabor que faz qualquer ocasião ficar melhor.",
    img: "/images/vitrine-1.png",
    bg: "from-[#7c4117] via-[#7c4117]/90 to-[#4d2b19]",
  },
  {
    nome: "Mais que só docinho",
    desc: "São pequenos detalhes capazes de transformar uma comemoração em lembrança. Cada um é feito para ser saboreado, compartilhado e lembrado.",
    img: "/images/vitrine-2.png",
    bg: "from-[#a50321] via-[#c52d3c] to-[#ff889e]",
  },
  {
    nome: "Mimos Gourmet",
    desc: "Brigadeiros, barras e doces feitos para presentear, celebrar e surpreender. Porque alguns momentos merecem um mimo à altura.",
    img: "/images/vitrine-3.png",
    bg: "from-[#ff889e] via-[#f7b0bf] to-[#fff5ec]",
  },
];

function CardDoce({ doce }) {
  return (
    <article className="group relative h-[420px] overflow-hidden rounded-[2rem] bg-mib-cream shadow-sweet transition-all duration-500 hover:-translate-y-2 hover:shadow-glow">
      <img src={doce.img} alt={doce.nome} loading="lazy" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110" />

      <div className={`absolute inset-0 bg-gradient-to-t ${doce.bg} opacity-75`} />

      <div className="absolute inset-0 flex flex-col justify-end p-6 text-mib-cream">
        <div className="translate-y-8 opacity-0 transition-all duration-500 group-hover:translate-y-0 group-hover:opacity-100">
          <span className="inline-flex rounded-full bg-mib-cream/15 px-3 py-1 text-xs font-semibold uppercase tracking-[0.18em] text-mib-cream">
            Destaque
          </span>
          <h3 className="mt-4 text-3xl font-bold">{doce.nome}</h3>
          <p className="mt-2 max-w-xs text-sm leading-relaxed text-mib-cream/90">{doce.desc}</p>
        </div>

        <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between transition-all duration-500 group-hover:opacity-0">
          <span className="text-xl font-bold">{doce.nome}</span>
        </div>
      </div>
    </article>
  );
}

export default function Vitrine() {
  return (
    <section id="vitrine" className="relative overflow-hidden bg-mib-cream py-24">
      <Sprinkles className="opacity-60" />

      <div className="relative mx-auto max-w-6xl px-5">
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <span className="text-sm font-bold uppercase tracking-[0.25em] text-mib-brand">Nossos Doces</span>
          </Reveal>
          <Reveal delay={100}>
            <h2 className="mt-3 font-display text-4xl text-mib-brand sm:text-5xl">
              O sabor que faz a festa falar mais alto.
            </h2>
          </Reveal>
          <Reveal delay={200}>
            <p className="mt-4 text-lg text-mib-choco/80">
              Delicadeza de confeitaria artesanal com aquele toque de amor e criatividade que só a mib food tem.
            </p>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {DOCES.map((doce, index) => (
            <Reveal key={doce.nome} delay={index * 120}>
              <CardDoce doce={doce} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={200}>
          <div className="mt-12 text-center">
            <a href="#pedido" className="inline-flex items-center gap-3 rounded-full border-2 border-mib-brand px-7 py-3.5 font-semibold text-mib-brand transition-all duration-300 hover:-translate-y-1 hover:bg-mib-brand hover:text-mib-cream">
              Ver Cardápio Completo
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
