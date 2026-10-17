import { useRef } from "react";

interface TiltedCardProps {
  imageSrc: React.ComponentProps<"img">["src"];
  altText?: string;
  captionText?: string;
  containerHeight?: React.CSSProperties["height"];
  containerWidth?: React.CSSProperties["width"];
  imageHeight?: React.CSSProperties["height"];
  imageWidth?: React.CSSProperties["width"];
  scaleOnHover?: number;
  rotateAmplitude?: number;
  showMobileWarning?: boolean;
  showTooltip?: boolean;
  overlayContent?: React.ReactNode;
  displayOverlayContent?: boolean;
}

// Sem biblioteca de animação: o mouse atualiza o transform direto no elemento
// (sem re-render do React) e as transições CSS suavizam o movimento.
export default function TiltedCard({
  imageSrc,
  altText = "Tilted card image",
  captionText = "",
  containerHeight = "300px",
  containerWidth = "100%",
  imageHeight = "300px",
  imageWidth = "300px",
  scaleOnHover = 1.1,
  rotateAmplitude = 14,
  showMobileWarning = true,
  showTooltip = true,
  overlayContent = null,
  displayOverlayContent = false,
}: TiltedCardProps) {
  const ref = useRef<HTMLElement>(null);
  const cardRef = useRef<HTMLDivElement>(null);
  const captionRef = useRef<HTMLElement>(null);
  const lastY = useRef(0);

  function setCard(rotateX: number, rotateY: number, scale: number) {
    if (cardRef.current) {
      cardRef.current.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale(${scale})`;
    }
  }

  function handleMouse(e: React.MouseEvent<HTMLElement>) {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
    const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;
    setCard(rotationX, rotationY, scaleOnHover);

    if (captionRef.current) {
      const velocityY = offsetY - lastY.current;
      captionRef.current.style.transform = `translate(${e.clientX - rect.left}px, ${e.clientY - rect.top}px) rotate(${-velocityY * 0.6}deg)`;
    }
    lastY.current = offsetY;
  }

  function handleMouseEnter() {
    if (captionRef.current) captionRef.current.style.opacity = "1";
  }

  function handleMouseLeave() {
    setCard(0, 0, 1);
    if (captionRef.current) captionRef.current.style.opacity = "0";
  }

  return (
    <figure
      ref={ref}
      className="relative w-full h-full [perspective:800px] flex flex-col items-center justify-center"
      style={{
        height: containerHeight,
        width: containerWidth,
      }}
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {showMobileWarning && (
        <div className="absolute top-4 text-center text-sm block sm:hidden">
          This effect is not optimized for mobile. Check on desktop.
        </div>
      )}

      <div
        ref={cardRef}
        className="relative [transform-style:preserve-3d] transition-transform duration-500 ease-out motion-reduce:transition-none"
        style={{
          width: imageWidth,
          height: imageHeight,
        }}
      >
        <img
          src={imageSrc}
          alt={altText}
          fetchPriority="high"
          className="absolute top-0 left-0 object-cover rounded-[15px] will-change-transform [transform:translateZ(0)]"
          style={{
            width: imageWidth,
            height: imageHeight,
          }}
        />

        {displayOverlayContent && overlayContent && (
          <div className="absolute top-0 left-0 z-[2] will-change-transform [transform:translateZ(30px)]">
            {overlayContent}
          </div>
        )}
      </div>

      {showTooltip && (
        <figcaption
          ref={captionRef}
          className="pointer-events-none absolute left-0 top-0 rounded-[4px] bg-white px-[10px] py-[4px] text-[10px] text-[#2d2d2d] opacity-0 z-[3] hidden sm:block transition-[opacity,transform] duration-200 ease-out"
        >
          {captionText}
        </figcaption>
      )}
    </figure>
  );
}
