import Reveal from "./Reveal";
import { CakeIcon, WhatsappIcon, CalendarIcon, GiftIcon } from "./Decor";

const PASSOS = [
  {
    titulo: "1. Fale com a Bia",
    texto: "Conte o tema, a ocasião e o gosto que você quer sentir no seu doce.",
    icon: WhatsappIcon,
  },
  {
    titulo: "2. Escolha a data",
    texto: "Defina a entrega ou retirada e recebemos sua encomenda com atenção e cronograma certeiro.",
    icon: CalendarIcon,
  },
  {
    titulo: "3. Receba com alegria",
    texto: "Seu pedido chega com embalagem especial, sabor impecável e aquele toque que faz a festa ganhar vida.",
    icon: GiftIcon,
  },
];

export default function FeitoComAmor() {
  return (
    <section id="pedido" className="relative overflow-hidden bg-mib-brand py-24 text-mib-cream">
      <div className="pointer-events-none absolute bottom-10 right-8 h-20 w-20 opacity-15 animate-floaty" aria-hidden="true">
        <CakeIcon className="h-full w-full text-mib-cream" />
      </div>

      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-sm font-bold uppercase tracking-[0.28em] text-mib-light/80">Como Encomendar</p>
            <h2 className="mt-4 font-display text-4xl text-mib-cream sm:text-5xl">
              Peça agora e receba o sabor da alegria na sua casa.
            </h2>
          </div>
        </Reveal>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {PASSOS.map((passo, index) => {
            const Icon = passo.icon;
            return (
              <Reveal key={passo.titulo} delay={index * 120}>
                <div className="h-full rounded-[2rem] border border-mib-cream/10 bg-white/5 p-6 backdrop-blur-sm">
                  <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-mib-pink/20 text-mib-cream">
                    <Icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-mib-cream">{passo.titulo}</h3>
                  <p className="mt-3 text-base leading-relaxed text-mib-light/85">{passo.texto}</p>
                </div>
              </Reveal>
            );
          })}
        </div>

        <Reveal delay={200}>
          <div className="mt-12 text-center">
            <a
              href="https://wa.me/5511999999999"
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-3 rounded-full bg-mib-pink px-8 py-4 text-lg font-semibold text-white shadow-glow transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-mib-brand"
            >
              <WhatsappIcon className="h-6 w-6" />
              Falar com a Bia no WhatsApp
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
