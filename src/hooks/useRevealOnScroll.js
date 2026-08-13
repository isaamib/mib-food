import { useEffect, useRef, useState } from "react";

/**
 * Observa um elemento e retorna `visible = true` quando ele entra na viewport.
 * @param {number} threshold - fração do elemento visível para disparar (0 a 1)
 */
export default function useRevealOnScroll(threshold = 0.18) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    // Fallback para navegadores sem suporte
    if (typeof IntersectionObserver === "undefined") {
      setVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.unobserve(entry.target); // anima só uma vez
        }
      },
      { threshold, rootMargin: "0px 0px -60px 0px" }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold]);

  return { ref, visible };
}
