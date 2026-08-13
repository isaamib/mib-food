import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

/**
 * Envolve qualquer conteúdo com o efeito de entrada suave ao scrollar.
 * @param {number} delay - atraso em ms para criar efeito cascata
 */
export default function Reveal({ children, delay = 0, className = "", as: Tag = "div" }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const tween = gsap.fromTo(
      el,
      {
        autoAlpha: 0,
        y: 28,
        scale: 0.97,
        filter: "blur(2px)",
      },
      {
        autoAlpha: 1,
        y: 0,
        scale: 1,
        filter: "blur(0px)",
        duration: 0.8,
        ease: "power2.out",
        delay: delay / 1000,
        scrollTrigger: {
          trigger: el,
          start: "top 88%",
          once: true,
        },
      }
    );

    return () => {
      tween.kill();
    };
  }, [delay]);

  return <Tag ref={ref} className={`reveal ${className}`}>{children}</Tag>;
}
