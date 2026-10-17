import * as React from "react";
import { useRef, useEffect } from "react";

interface FadeContentProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  container?: Element | string | null;
  blur?: boolean;
  duration?: number;
  ease?: string;
  delay?: number;
  threshold?: number;
  initialOpacity?: number;
  disappearAfter?: number;
  disappearDuration?: number;
  disappearEase?: string;
  onComplete?: () => void;
  onDisappearanceComplete?: () => void;
}

// Nomes de easing do GSAP usados antes -> equivalentes em CSS
const EASES: Record<string, string> = {
  "power2.out": "cubic-bezier(0.215, 0.61, 0.355, 1)",
  "power2.in": "cubic-bezier(0.55, 0.055, 0.675, 0.19)",
  "power2.inOut": "cubic-bezier(0.645, 0.045, 0.355, 1)",
};
const toCssEase = (ease: string) => EASES[ease] ?? ease;

// Aceita milissegundos (> 10) ou segundos, como a versão com GSAP
const toMs = (val: number) => (val > 10 ? val : val * 1000);

// Fade-in com transição CSS quando o elemento entra na tela (IntersectionObserver).
// Antes usava GSAP + ScrollTrigger (~110 KB), que ainda atrasava a foto do topo da home.
const FadeContent: React.FC<FadeContentProps> = ({
  children,
  container,
  blur = false,
  duration = 1000,
  ease = "power2.out",
  delay = 0,
  threshold = 0.1,
  initialOpacity = 0,
  disappearAfter = 0,
  disappearDuration = 0.5,
  disappearEase = "power2.in",
  onComplete,
  onDisappearanceComplete,
  className = "",
  style,
  ...props
}) => {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const hiddenFilter = blur ? "blur(10px)" : "blur(0px)";
    const timers: number[] = [];

    const show = () => {
      el.style.transition = `opacity ${toMs(duration)}ms ${toCssEase(ease)} ${toMs(delay)}ms, filter ${toMs(duration)}ms ${toCssEase(ease)} ${toMs(delay)}ms`;
      el.style.opacity = "1";
      el.style.filter = "blur(0px)";

      timers.push(
        window.setTimeout(() => {
          onComplete?.();
          if (disappearAfter > 0) {
            timers.push(
              window.setTimeout(() => {
                el.style.transition = `opacity ${toMs(disappearDuration)}ms ${toCssEase(disappearEase)}, filter ${toMs(disappearDuration)}ms ${toCssEase(disappearEase)}`;
                el.style.opacity = String(initialOpacity);
                el.style.filter = hiddenFilter;
                timers.push(
                  window.setTimeout(() => onDisappearanceComplete?.(), toMs(disappearDuration)),
                );
              }, toMs(disappearAfter)),
            );
          }
        }, toMs(delay) + toMs(duration)),
      );
    };

    // Respeita quem pediu para reduzir animações
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      el.style.opacity = "1";
      el.style.filter = "none";
      onComplete?.();
      return;
    }

    const root: Element | null =
      typeof container === "string"
        ? document.querySelector(container)
        : container || document.getElementById("snap-main-container");

    const observer = new IntersectionObserver(
      (entries) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          observer.disconnect();
          show();
        }
      },
      { root, threshold },
    );
    observer.observe(el);

    return () => {
      observer.disconnect();
      timers.forEach((t) => window.clearTimeout(t));
    };
    // A animação roda uma única vez, com as props do primeiro render (como a versão com GSAP)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: initialOpacity,
        filter: blur ? "blur(10px)" : "blur(0px)",
        willChange: "opacity, filter",
        ...style,
      }}
      {...props}
    >
      {children}
    </div>
  );
};

export default FadeContent;
