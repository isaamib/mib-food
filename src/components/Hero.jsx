import Reveal from "./Reveal";
import { Sprinkles, CupcakeIcon, StrawberryIcon } from "./Decor";

const HERO_IMG =
  "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1000&q=80";

export default function Hero() {
  return (
    <section id="hero" className="relative overflow-hidden bg-mib-cream pb-20 pt-32 md:pb-28 md:pt-40">
      <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-mib-light blur-3xl" aria-hidden="true" />
      <div className="pointer-events-none absolute -right-20 bottom-0 h-80 w-80 rounded-full bg-mib-pink/10 blur-3xl" aria-hidden="true" />
      <Sprinkles />

      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 md:grid-cols-2">
        <div className="text-center md:text-left">
          <Reveal>
            <div className="flex justify-center md:justify-start">
              <span className="text-4xl font-bold tracking-tight text-mib-brand sm:text-5xl">
                mib food
              </span>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <span className="mt-6 inline-flex items-center gap-2 rounded-full bg-mib-light px-4 py-2 text-sm font-semibold text-mib-brand">
              <StrawberryIcon className="h-5 w-5" />
              Confeitaria &amp; Doceria
            </span>
          </Reveal>

          <Reveal delay={180}>
            <h1 className="mt-6 text-4xl leading-[1.05] text-mib-brand sm:text-5xl lg:text-6xl">
              Doce como a vida,
              <span className="block text-mib-choco">artesanal como deve ser.</span>
            </h1>
          </Reveal>

          <Reveal delay={260}>
            <p className="mx-auto mt-6 max-w-lg text-lg leading-relaxed text-mib-choco/85 md:mx-0">
              A mib food, marca da confeiteira Bia Menezes, traz a nova fase do tradicional. Ingredientes selecionados,
              muito amor e sabores que abraçam.
            </p>
          </Reveal>

          <Reveal delay={340}>
            <div className="mt-9 flex flex-col items-center gap-4 sm:flex-row md:justify-start">
              <a
                href="#pedido"
                className="group inline-flex items-center gap-2 rounded-full bg-mib-brand px-8 py-4 text-lg font-semibold text-mib-cream shadow-glow transition-all duration-300 hover:-translate-y-1 hover:bg-mib-pink"
              >
                Quero Encomendar Minha Felicidade!
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </a>
            </div>
          </Reveal>

          <Reveal delay={420}>
            <dl className="mt-12 flex justify-center gap-8 md:justify-start">
              {[
                ["+8 anos", "de tradição"],
                ["100%", "artesanal"],
                ["+2 mil", "clientes felizes"],
              ].map(([n, t]) => (
                <div key={t}>
                  <dt className="text-2xl font-bold text-mib-brand">{n}</dt>
                  <dd className="text-sm text-mib-choco/70">{t}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal delay={220} className="relative">
          <div className="relative mx-auto max-w-md">
            <div className="absolute -inset-4 rotate-3 rounded-[3rem] bg-mib-light" aria-hidden="true" />
            <img
              src={HERO_IMG}
              alt="Bolo artesanal com vela e estilo acolhedor da mib food"
              loading="eager"
              className="relative aspect-[4/5] w-full rounded-[3rem] object-cover shadow-sweet"
            />
            <div className="absolute -bottom-6 -left-6 flex items-center gap-3 rounded-blob bg-mib-cream px-5 py-4 shadow-sweet">
              <CupcakeIcon className="h-10 w-10 animate-floaty" />
              <div className="leading-tight">
                <p className="font-bold text-mib-brand">Fresquinho</p>
                <p className="text-xs text-mib-choco/70">feito no dia da entrega</p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
