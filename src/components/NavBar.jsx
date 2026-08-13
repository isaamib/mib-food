import { useEffect, useState } from "react";

const LINKS = [
  { href: "#vitrine", label: "Nossos Doces" },
  { href: "#essencia", label: "Bia Menezes" },
  { href: "#pedido", label: "Encomendar" },
  { href: "#depoimentos", label: "Depoimentos" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled ? "bg-mib-cream/85 py-2 shadow-sweet backdrop-blur-md" : "bg-transparent py-5"
      }`}
    >
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5">
        <a href="#hero" className="group flex items-center justify-center">
          <span className="inline-block text-2xl font-bold tracking-tight text-mib-brand md:text-3xl">
            mib food
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="relative text-sm font-medium text-mib-choco hover:text-mib-brand after:absolute after:-bottom-1.5 after:left-0 after:h-[3px] after:w-0 after:rounded-full after:bg-mib-pink after:transition-all after:duration-300 hover:after:w-full"
            >
              {l.label}
            </a>
          ))}
          <a
            href="#pedido"
            className="rounded-full bg-mib-pink px-5 py-2.5 text-sm font-semibold text-white shadow-glow transition-all duration-300 hover:-translate-y-0.5 hover:bg-mib-brand"
          >
            Pedir Agora
          </a>
        </nav>

        <button
          onClick={() => setOpen((v) => !v)}
          aria-label="Abrir menu"
          aria-expanded={open}
          className="rounded-full bg-mib-light p-2.5 text-mib-brand md:hidden"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2.2">
            {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </div>

      <nav
        className={`overflow-hidden px-5 transition-all duration-500 md:hidden ${
          open ? "mt-3 max-h-72 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="flex flex-col gap-1 rounded-blob bg-mib-cream/95 p-4 shadow-sweet backdrop-blur">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="rounded-2xl px-4 py-3 font-medium text-mib-choco transition-colors hover:bg-mib-light hover:text-mib-brand"
            >
              {l.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
