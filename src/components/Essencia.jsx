import Reveal from "./Reveal";
import { StrawberryIcon, BrigadeiroIcon } from "./Decor";

const VALORES = [
  { titulo: "Paixão", emoji: "❤️", texto: "Tudo começa com uma receita, mas termina em memória. Cada doce nasce do cuidado e da paixão por transformar momentos simples em experiências especiais." },
  { titulo: "Chocolate", emoji: "🍫", texto: "Intenso, cremoso e irresistível. Chocolate de verdade, textura que conquista e aquele sabor que faz você querer só mais um." },
  { titulo: "Acolhimento", emoji: "🤗", texto: "Aqui, sua ideia ganha espaço. A gente escuta, entende, orienta e cuida de cada detalhe para que o resultado tenha a sua cara." },
];

const IMG = "/images/essencia.jpeg";

export default function Essencia() {
  return (
    <section id="essencia" className="relative bg-mib-light/50 py-24">
      <div className="pointer-events-none absolute right-12 top-10 h-16 w-16 opacity-20 animate-floaty" aria-hidden="true">
        <BrigadeiroIcon className="h-full w-full text-mib-brand" />
      </div>

      <div className="mx-auto grid max-w-6xl items-center gap-16 px-5 lg:grid-cols-2">
        <Reveal className="relative order-2 lg:order-1">
          <div className="absolute -inset-3 -rotate-2 rounded-[3rem] bg-mib-pink/10" aria-hidden="true" />
          <img
            src={IMG}
            alt="Bia Menezes trabalhando em uma mesa recheada de doces artesanais"
            loading="lazy"
            onError={(event) => {
              event.currentTarget.src = "/images/essencia.png";
            }}
            className="relative w-full rounded-[3rem] object-contain shadow-sweet"
          />
        </Reveal>

        <div className="order-1 lg:order-2">
          <Reveal>
            <span className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-[0.2em] text-mib-brand">
              <StrawberryIcon className="h-5 w-5" />
              A confeiteira por trás da mib food
            </span>
          </Reveal>

          <Reveal delay={100}>
            <h2 className="mt-4 font-display text-4xl leading-tight text-mib-brand sm:text-5xl">
              Bia Menezes: o coração por trás da MIB Food
            </h2>
          </Reveal>

          <Reveal delay={200}>
            <p className="mt-5 text-lg leading-relaxed text-mib-choco/85">
              Divertida, acolhedora e apaixonada por doces. É assim que transformamos ingredientes em pequenos momentos de felicidade.
            </p>
          </Reveal>

          <div className="mt-9 space-y-4">
            {VALORES.map((v, i) => (
              <Reveal key={v.titulo} delay={280 + i * 120}>
                <div className="group flex items-start gap-4 rounded-blob bg-mib-cream p-5 shadow-sweet transition-all duration-300 hover:-translate-y-1">
                  <span className="grid h-12 w-12 shrink-0 place-items-center rounded-2xl bg-mib-light text-2xl transition-transform duration-300 group-hover:scale-110">
                    {v.emoji}
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-mib-brand">{v.titulo}</h3>
                    <p className="text-sm leading-relaxed text-mib-choco/80">{v.texto}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
