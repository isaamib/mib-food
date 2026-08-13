import { useEffect, useState } from "react";
import Reveal from "./Reveal";

const slides = [
  {
    id: 1,
    image: "/images/hero-1.jpeg",
    alt: "Bolos e doces artesanais em mesa elegante",
  },
  {
    id: 2,
    image: "/images/hero-2.jpeg",
    alt: "Tortas artesanais e sobremesas deliciosas",
  },
  {
    id: 3,
    image: "/images/hero-3.jpeg",
    alt: "Doces variados com acabamento delicado",
  },
  {
    id: 4,
    image: "/images/hero-4.jpeg",
    alt: "Mesa de doces com iluminação sofisticada",
  },
];

const whatsAppLink = "https://wa.me/5511999999999?text=Ol%C3%A1%2C%20quero%20fazer%20um%20pedido%20da%20mib%20food.";

export default function Hero() {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % slides.length);
    }, 5000);

    return () => window.clearInterval(intervalId);
  }, []);

  const goToSlide = (index) => setActiveIndex(index);
  const previousSlide = () => setActiveIndex((activeIndex - 1 + slides.length) % slides.length);
  const nextSlide = () => setActiveIndex((activeIndex + 1) % slides.length);

  return (
    <section id="hero" className="relative isolate h-[620px] overflow-hidden md:h-[760px]">
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === activeIndex ? "opacity-100" : "opacity-0"
            }`}
            aria-hidden={index !== activeIndex}
          >
            <img
              src={slide.image}
              alt={slide.alt}
              className="h-full w-full object-cover"
              loading={index === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}
        <div className="absolute inset-0 bg-gradient-to-r from-[#2c120f]/75 via-[#2c120f]/30 to-[#2c120f]/35" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#2c120f]/65 via-[#2c120f]/15 to-transparent" />
      </div>

      <div className="relative z-10 mx-auto flex h-full max-w-6xl items-center justify-center px-5 py-20 md:px-8">
        <div className="max-w-4xl text-center text-mib-cream">
          <Reveal>
            <span className="inline-flex items-center rounded-full border border-white/30 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-mib-cream/90 backdrop-blur-sm md:text-sm">
              mib food
            </span>
          </Reveal>

          <Reveal delay={120}>
            <h1 className="mt-5 text-4xl leading-none text-white drop-shadow-[0_6px_28px_rgba(0,0,0,0.35)] sm:text-5xl md:text-6xl lg:text-7xl">
              O sabor da sua felicidade começa aqui.
            </h1>
          </Reveal>

          <Reveal delay={180}>
            <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-mib-cream/90 sm:text-lg md:text-xl">
              Artesanal, tradicional e feita com o carinho da Bia Menezes.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-8 flex justify-center">
              <a
                href={whatsAppLink}
                target="_blank"
                rel="noreferrer"
                className="group inline-flex items-center gap-3 rounded-full bg-[#ff889e] px-6 py-3.5 text-base font-semibold text-white shadow-[0_20px_40px_-18px_rgba(255,136,158,0.9)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#ff738a] hover:shadow-[0_24px_45px_-18px_rgba(255,136,158,1)] md:px-8 md:py-4 md:text-lg"
              >
                <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 md:h-6 md:w-6 fill-current">
                  <path d="M19.05 4.95A9.92 9.92 0 0 0 12.02 2C6.52 2 2.06 6.46 2.06 11.96c0 1.77.47 3.47 1.35 4.96L2 22l5.2-1.36a9.95 9.95 0 0 0 4.8 1.3h.01c5.5 0 9.96-4.46 9.96-9.96 0-2.66-1.04-5.17-2.92-7.03ZM12.02 19.3h-.01a8.24 8.24 0 0 1-4.19-1.15l-.3-.18-3.09.81.83-3.01-.2-.31a8.25 8.25 0 0 1-1.27-4.39c0-4.57 3.72-8.29 8.3-8.29 2.21 0 4.29.86 5.86 2.43a8.22 8.22 0 0 1 2.42 5.86c0 4.58-3.72 8.29-8.3 8.29Zm4.54-6.2c-.25-.12-1.47-.72-1.7-.8-.23-.08-.39-.12-.56.12-.17.25-.66.8-.81.97-.15.17-.29.19-.54.06-.25-.12-1.05-.39-2-1.25-.74-.66-1.24-1.47-1.38-1.72-.15-.25-.02-.38.11-.51.11-.11.25-.29.37-.44.12-.15.16-.25.25-.42.08-.17.04-.31-.02-.44-.06-.12-.55-1.33-.76-1.82-.2-.48-.4-.42-.55-.42h-.47c-.16 0-.42.06-.64.31-.22.25-.84.82-.84 2 0 1.18.86 2.32.98 2.48.12.16 1.7 2.63 4.12 3.68.58.25 1.03.4 1.38.51.58.18 1.11.16 1.52.1.46-.07 1.47-.6 1.68-1.18.2-.58.2-1.08.14-1.18-.06-.1-.22-.16-.47-.28Z" />
                </svg>
                Quero Encomendar Agora
              </a>
            </div>
          </Reveal>
        </div>
      </div>

      <div className="absolute inset-x-0 bottom-4 z-20 flex justify-center px-5">
        <div className="flex items-center gap-4 rounded-full border border-white/20 bg-[#fff5ec]/10 px-3 py-2 backdrop-blur-sm shadow-[0_15px_40px_-24px_rgba(0,0,0,0.7)]">
          <button
            type="button"
            aria-label="Slide anterior"
            onClick={previousSlide}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-xl text-mib-cream transition hover:bg-white/20"
          >
            ‹
          </button>

          <div className="flex items-center gap-2">
            {slides.map((slide, index) => (
              <button
                key={slide.id}
                type="button"
                aria-label={`Ir para o slide ${index + 1}`}
                onClick={() => goToSlide(index)}
                className={`h-2.5 rounded-full transition-all duration-300 ${
                  index === activeIndex ? "w-8 bg-[#ff889e]" : "w-2.5 bg-white/65 hover:bg-white"
                }`}
              />
            ))}
          </div>

          <button
            type="button"
            aria-label="Próximo slide"
            onClick={nextSlide}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/20 bg-white/10 text-xl text-mib-cream transition hover:bg-white/20"
          >
            ›
          </button>
        </div>
      </div>
    </section>
  );
}
