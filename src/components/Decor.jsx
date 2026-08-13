/* --- Confetes / granulados espalhados pelo fundo --- */
export function Sprinkles({ className = "" }) {
  const dots = [
    { x: 8, y: 18, r: -20, c: "#f00530" },
    { x: 22, y: 62, r: 35, c: "#7c4117" },
    { x: 41, y: 12, r: 12, c: "#a50321" },
    { x: 63, y: 74, r: -45, c: "#f00530" },
    { x: 78, y: 28, r: 25, c: "#7c4117" },
    { x: 91, y: 58, r: -12, c: "#a50321" },
  ];

  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      {dots.map((d, i) => (
        <span
          key={i}
          className="absolute block h-2 w-6 rounded-full opacity-50 animate-floaty"
          style={{
            left: `${d.x}%`,
            top: `${d.y}%`,
            backgroundColor: d.c,
            transform: `rotate(${d.r}deg)`,
            animationDelay: `${i * 0.6}s`,
          }}
        />
      ))}
    </div>
  );
}

/* --- Cupcake decorativo --- */
export function CupcakeIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" aria-hidden="true">
      <path d="M14 28h36l-5 26a4 4 0 0 1-4 3H23a4 4 0 0 1-4-3L14 28Z" fill="#f1e3d3" stroke="#7c4117" strokeWidth="2.5" />
      <path d="M12 28c0-6 5-8 8-8 1-6 6-9 12-9s11 3 12 9c3 0 8 2 8 8H12Z" fill="#f00530" stroke="#a50321" strokeWidth="2.5" />
      <circle cx="32" cy="8" r="3.5" fill="#a50321" />
    </svg>
  );
}

/* --- Morango decorativo --- */
export function StrawberryIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" aria-hidden="true">
      <path d="M32 18c12 0 19 8 19 17s-9 21-19 21S13 44 13 35s7-17 19-17Z" fill="#f00530" stroke="#a50321" strokeWidth="2.5" />
      <path d="M22 12c5 1 8 3 10 6 2-3 5-5 10-6-2 5-5 7-10 8-5-1-8-3-10-8Z" fill="#7c4117" />
      <g fill="#fff5ec">
        <circle cx="26" cy="32" r="1.6" /><circle cx="36" cy="30" r="1.6" />
        <circle cx="31" cy="40" r="1.6" /><circle cx="41" cy="39" r="1.6" />
        <circle cx="22" cy="42" r="1.6" />
      </g>
    </svg>
  );
}

/* --- Ícones de redes sociais --- */
export function InstagramIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12 2.2c3.2 0 3.6 0 4.9.07 1.2.06 1.8.25 2.2.42.6.23 1 .5 1.5.95.45.45.72.9.95 1.5.17.4.36 1 .42 2.2.07 1.3.07 1.7.07 4.9s0 3.6-.07 4.9c-.06 1.2-.25 1.8-.42 2.2-.23.6-.5 1-.95 1.5-.45.45-.9.72-1.5.95-.4.17-1 .36-2.2.42-1.3.07-1.7.07-4.9.07s-3.6 0-4.9-.07c-1.2-.06-1.8-.25-2.2-.42-.6-.23-1-.5-1.5-.95a4 4 0 0 1-.95-1.5c-.17-.4-.36-1-.42-2.2C2.2 15.6 2.2 15.2 2.2 12s0-3.6.07-4.9c.06-1.2.25-1.8.42-2.2.23-.6.5-1 .95-1.5.45-.45.9-.72 1.5-.95.4-.17 1-.36 2.2-.42C8.4 2.2 8.8 2.2 12 2.2Zm0 5.1a4.7 4.7 0 1 0 0 9.4 4.7 4.7 0 0 0 0-9.4Zm0 7.75a3.05 3.05 0 1 1 0-6.1 3.05 3.05 0 0 1 0 6.1Zm6-7.94a1.1 1.1 0 1 1-2.2 0 1.1 1.1 0 0 1 2.2 0Z" />
    </svg>
  );
}

export function WhatsappIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm5.3 14c-.2.6-1.2 1.2-1.7 1.2-.5.05-1 .1-1.7-.1-1-.3-2.4-1-3.7-2.3-1.5-1.6-2.2-3.2-2.3-3.6-.1-.4-.4-1.2-.2-1.9.2-.6.7-1.1 1-1.3.2-.2.5-.2.7-.2h.5c.2 0 .4 0 .6.4l.7 1.7c.1.2.1.4 0 .5l-.4.6c-.1.2-.3.3-.1.6.2.4.7 1.1 1.3 1.6.8.7 1.4 1 1.7 1.1.3.1.5 0 .6-.1l.7-.8c.2-.2.4-.1.6 0l1.6.8c.3.2.4.3.4.5 0 .2 0 .7-.1 1.1Z" />
    </svg>
  );
}

export function PinIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
      <path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7Zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5Z" />
    </svg>
  );
}

export function CalendarIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <rect x="3" y="5" width="18" height="16" rx="2.5" />
      <path d="M8 3v4M16 3v4M3 10h18" />
      <path d="M8 14h.01M12 14h.01M16 14h.01M8 18h.01M12 18h.01" />
    </svg>
  );
}

export function GiftIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 8v13M3 9.5h18v4.5H3V9.5ZM12 8H6.5A2.5 2.5 0 0 1 4 5.5V5a2 2 0 0 1 2-2c2.4 0 3.4 4 6 5Zm0 0h5.5A2.5 2.5 0 0 0 20 5.5V5a2 2 0 0 0-2-2c-2.4 0-3.4 4-6 5Z" />
    </svg>
  );
}

/* --- Brigadeiro decorativo --- */
export function BrigadeiroIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" aria-hidden="true">
      <circle cx="32" cy="32" r="20" fill="#7c4117" stroke="#a50321" strokeWidth="2.5" />
      <circle cx="26" cy="26" r="5" fill="#f1e3d3" opacity="0.4" />
      <path d="M32 12v-5M52 32h5M32 52v5M12 32h-5" stroke="#a50321" strokeWidth="2.5" strokeLinecap="round" />
      <circle cx="32" cy="32" r="14" fill="none" stroke="#a50321" strokeWidth="1.5" opacity="0.3" />
    </svg>
  );
}

/* --- Bolo flutuante --- */
export function CakeIcon({ className = "" }) {
  return (
    <svg viewBox="0 0 64 64" className={className} fill="none" aria-hidden="true">
      <rect x="16" y="28" width="32" height="24" rx="4" fill="#f1e3d3" stroke="#7c4117" strokeWidth="2.5" />
      <rect x="18" y="22" width="28" height="8" rx="2" fill="#f00530" stroke="#a50321" strokeWidth="2.5" />
      <circle cx="28" cy="18" r="2.5" fill="#a50321" />
      <circle cx="36" cy="16" r="2.5" fill="#a50321" />
      <circle cx="32" cy="14" r="3" fill="#fff5ec" stroke="#a50321" strokeWidth="1.5" />
      <path d="M20 28v-2M32 28v-2M44 28v-2" stroke="#7c4117" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

/* --- Logo Mib Food com Tipografia --- */
export function MibFoodLogo({ className = "", withText = true }) {
  return (
    <svg viewBox="0 0 280 120" className={className} fill="none" aria-hidden="false">
      {/* Fundo circular sutil */}
      <circle cx="60" cy="60" r="58" fill="#a50321" opacity="0.08" />
      
      {/* Letra "M" estilizada com brigadeiro e bolo */}
      {/* Esquerda - Brigadeiro */}
      <circle cx="35" cy="70" r="15" fill="#7c4117" stroke="#a50321" strokeWidth="2" />
      <circle cx="28" cy="62" r="4" fill="#f1e3d3" opacity="0.5" />
      
      {/* Centro - Bolo */}
      <rect x="50" y="55" width="20" height="20" rx="2" fill="#f00530" stroke="#a50321" strokeWidth="2" />
      <circle cx="60" cy="50" r="4" fill="#fff5ec" stroke="#a50321" strokeWidth="1.5" />
      
      {/* Direita - Brigadeiro */}
      <circle cx="85" cy="70" r="15" fill="#7c4117" stroke="#a50321" strokeWidth="2" />
      <circle cx="92" cy="62" r="4" fill="#f1e3d3" opacity="0.5" />
      
      {/* Letra "B" com morango */}
      <path d="M30 95 Q30 85 40 85 Q45 85 45 90 Q45 95 40 95 L30 95 M45 95 Q45 100 40 100 Q30 100 30 110 L45 110 Q50 110 50 105 Q50 95 45 95" 
            fill="none" stroke="#a50321" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      
      {/* Morango ao lado */}
      <path d="M70 95c5 0 8 3 8 8s-4 12-8 12-8-7-8-12c0-5 3-8 8-8Z" fill="#f00530" stroke="#a50321" strokeWidth="1.5" />
      <path d="M68 88c2 1 3 1 4 2 1-1 2-1 4-2-1 3-2 4-4 4-2 0-3-1-4-4Z" fill="#7c4117" />
      
      {/* Texto "Mib Food" em tipografia elegante */}
      {withText && (
        <>
          <text x="130" y="75" fontFamily="'Fredoka', sans-serif" fontSize="42" fontWeight="700" fill="#a50321" letterSpacing="-1">
            Mib
          </text>
          <text x="215" y="75" fontFamily="'Fredoka', sans-serif" fontSize="42" fontWeight="700" fill="#7c4117" letterSpacing="-1">
            Food
          </text>
        </>
      )}
    </svg>
  );
}
