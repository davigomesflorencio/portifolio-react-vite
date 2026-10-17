import type { CSSProperties } from "react";

interface GradientTextProps {
  children: string;
  className?: string;
  colors?: string[];
  animationSpeed?: number;
  showBorder?: boolean;
  direction?: "horizontal" | "vertical" | "diagonal";
  pauseOnHover?: boolean;
  yoyo?: boolean;
}

// Animação só com CSS (keyframes em index.css): não precisa de biblioteca nem de
// requestAnimationFrame, e o navegador pode rodá-la fora da thread principal.
export default function GradientText({
  children,
  className = "",
  colors = ["#5227FF", "#FF9FFC", "#B19EEF"],
  animationSpeed = 8,
  showBorder = false,
  direction = "horizontal",
  pauseOnHover = false,
  yoyo = true,
}: GradientTextProps) {
  const gradientAngle =
    direction === "horizontal"
      ? "to right"
      : direction === "vertical"
        ? "to bottom"
        : "to bottom right";
  // Repete a primeira cor no fim para o loop não ter emenda
  const gradientColors = [...colors, colors[0]].join(", ");

  const gradientStyle: CSSProperties = {
    backgroundImage: `linear-gradient(${gradientAngle}, ${gradientColors})`,
    backgroundSize:
      direction === "horizontal"
        ? "300% 100%"
        : direction === "vertical"
          ? "100% 300%"
          : "300% 300%",
    backgroundRepeat: "repeat",
    // Diagonal anima só na horizontal, como antes, para evitar padrões de interferência
    animation: `${direction === "vertical" ? "gradient-text-y" : "gradient-text-x"} ${animationSpeed}s linear infinite ${yoyo ? "alternate" : "normal"}`,
  };

  const pauseClass = pauseOnHover
    ? "group-hover/gradient:[animation-play-state:paused]"
    : "";

  return (
    <div
      className={`group/gradient relative mx-auto flex max-w-fit flex-row items-center justify-center rounded-[1.25rem] font-medium backdrop-blur transition-shadow duration-500 overflow-hidden cursor-pointer ${showBorder ? "py-1 px-2" : ""} ${className}`}
    >
      {showBorder && (
        <div
          className={`gradient-text-animated absolute inset-0 z-0 pointer-events-none rounded-[1.25rem] ${pauseClass}`}
          style={gradientStyle}
        >
          <div
            className="absolute bg-black rounded-[1.25rem] z-[-1]"
            style={{
              width: "calc(100% - 2px)",
              height: "calc(100% - 2px)",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
            }}
          />
        </div>
      )}
      <div
        className={`gradient-text-animated inline-block relative z-2 text-transparent bg-clip-text ${pauseClass}`}
        style={{ ...gradientStyle, WebkitBackgroundClip: "text" }}
      >
        {children}
      </div>
    </div>
  );
}
