import Reveal from "./Reveal";

export default function Manifesto() {
  return (
    <section className="relative bg-gradient-to-b from-mib-cream via-white to-mib-cream/50 px-5 py-20 md:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <Reveal>
          <p className="font-display text-3xl leading-tight text-mib-brand sm:text-4xl md:text-5xl">
            Um doce pode ser <span className="relative inline-block">
              <span className="relative z-10">pequeno</span>
              <span className="absolute -inset-2 -skew-y-1 rounded-lg bg-mib-pink/10" aria-hidden="true" />
            </span>.
          </p>
        </Reveal>

        <Reveal delay={100}>
          <p className="mt-2 font-display text-3xl leading-tight text-mib-brand sm:text-4xl md:text-5xl">
            O momento que ele cria, não.
          </p>
        </Reveal>

        <Reveal delay={200}>
          <div className="mt-8 h-1 w-20 rounded-full bg-gradient-to-r from-mib-brand via-mib-pink to-mib-brand/30 mx-auto" aria-hidden="true" />
        </Reveal>
      </div>
    </section>
  );
}
