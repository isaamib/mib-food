import Reveal from "./Reveal";
import { CupcakeIcon, InstagramIcon, WhatsappIcon, PinIcon } from "./Decor";

const LINKS_RAPIDOS = [
  { href: "#vitrine", label: "Nossos Doces" },
  { href: "#essencia", label: "Bia Menezes" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#pedido", label: "Encomendar" },
];

const WHATSAPP = "5511999999999";

export default function Footer() {
  return (
    <footer id="pedido" className="relative overflow-hidden bg-mib-cream pt-24">
      <div className="mx-auto max-w-6xl px-5">
        <div className="grid gap-12 rounded-[2.5rem] border border-mib-choco/10 bg-mib-light/40 p-7 shadow-sweet sm:p-9 lg:grid-cols-[1.3fr_0.8fr_0.9fr]">
          <Reveal>
            <div>
              <div className="flex items-center gap-3">
                <CupcakeIcon className="h-10 w-10" />
                <span className="text-3xl font-bold tracking-tight text-mib-brand">mib food</span>
              </div>
              <p className="mt-5 max-w-md text-lg leading-relaxed text-mib-choco/80">
                Doces artesanais com identidade própria, sabor acolhedor e um toque de carinho em cada detalhe.
              </p>
              <a
                href={`https://wa.me/${WHATSAPP}`}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-mib-pink px-5 py-3 font-semibold text-white shadow-glow hover:bg-mib-brand"
              >
                <WhatsappIcon className="h-5 w-5" />
                Falar com a Bia no WhatsApp
              </a>
            </div>
          </Reveal>

          <Reveal delay={120}>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-[0.24em] text-mib-brand">Mapa do site</h3>
              <ul className="mt-5 space-y-3 text-mib-choco/80">
                {LINKS_RAPIDOS.map((link) => (
                  <li key={link.href}>
                    <a href={link.href} className="hover:text-mib-brand">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>

          <Reveal delay={180}>
            <div>
              <h3 className="text-sm font-bold uppercase tracking-[0.24em] text-mib-brand">Contato</h3>
              <ul className="mt-5 space-y-3 text-mib-choco/80">
                <li className="flex items-start gap-2">
                  <PinIcon className="mt-0.5 h-5 w-5 shrink-0 text-mib-brand" />
                  Retirada e entrega sob agendamento.
                </li>
                <li>Instagram: @mibfood</li>
                <li>WhatsApp: (11) 99999-9999</li>
                <li>CNPJ: 00.000.000/0001-00</li>
              </ul>

              <div className="mt-6 flex gap-3">
                <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram" className="grid h-11 w-11 place-items-center rounded-2xl bg-mib-brand text-mib-cream hover:bg-mib-pink">
                  <InstagramIcon className="h-5 w-5" />
                </a>
                <a href={`https://wa.me/${WHATSAPP}`} target="_blank" rel="noreferrer" aria-label="WhatsApp" className="grid h-11 w-11 place-items-center rounded-2xl bg-mib-brand text-mib-cream hover:bg-mib-pink">
                  <WhatsappIcon className="h-5 w-5" />
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-3 border-t border-mib-choco/15 py-6 text-sm text-mib-choco/70 sm:flex-row">
          <p>© {new Date().getFullYear()} mib food — todos os direitos reservados.</p>
          <p>Feito com muito amor e ingredientes selecionados.</p>
        </div>
      </div>
    </footer>
  );
}
