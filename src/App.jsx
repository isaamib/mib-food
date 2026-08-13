import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Manifesto from "./components/Manifesto";
import Essencia from "./components/Essencia";
import Vitrine from "./components/Vitrine";
import Depoimentos from "./components/Depoimentos";
import FeitoComAmor from "./components/FeitoComAmor";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-mib-cream font-sans text-mib-choco">
      <NavBar />
      <main>
        <Hero />
        <Manifesto />
        <Essencia />
        <Vitrine />
        <Depoimentos />
        <FeitoComAmor />
      </main>
      <Footer />

      <div className="fixed inset-x-4 bottom-4 z-50 md:hidden">
        <a
          href="https://wa.me/5511999999999"
          target="_blank"
          rel="noreferrer"
          className="flex items-center justify-center gap-2 rounded-full bg-mib-brand px-5 py-3.5 text-base font-semibold text-mib-cream shadow-glow"
        >
          Pedir no WhatsApp
        </a>
      </div>
    </div>
  );
}
