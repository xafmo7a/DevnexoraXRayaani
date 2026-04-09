import { useState, useEffect, useRef } from "react";

const HEADER_H = 188;

const IntroSplash = () => {
  const [phase, setPhase] = useState<"main" | "second">("main");
  const [scale, setScale] = useState(1);
  const [origin, setOrigin] = useState({ x: 50, y: 50 });
  const [snapping, setSnapping] = useState(false);

  const secondImgRef = useRef<HTMLImageElement>(null);
  const initialDistRef = useRef<number | null>(null);
  const baseScaleRef = useRef(1);

  /* Intro timer */
  useEffect(() => {
    const t = setTimeout(() => setPhase("second"), 5000);
    return () => clearTimeout(t);
  }, []);

  /* Pinch-to-zoom — needs non-passive touchmove to call preventDefault */
  useEffect(() => {
    const el = secondImgRef.current;
    if (!el) return;

    const dist = (touches: TouchList) =>
      Math.hypot(
        touches[1].clientX - touches[0].clientX,
        touches[1].clientY - touches[0].clientY
      );

    const onTouchStart = (e: TouchEvent) => {
      if (e.touches.length === 2) {
        initialDistRef.current = dist(e.touches);
        baseScaleRef.current = scale;
        setSnapping(false);
      }
    };

    const onTouchMove = (e: TouchEvent) => {
      if (e.touches.length !== 2 || initialDistRef.current === null) return;
      e.preventDefault();

      const newScale = Math.min(
        4,
        Math.max(1, baseScaleRef.current * (dist(e.touches) / initialDistRef.current))
      );
      setScale(newScale);

      /* Transform origin = midpoint of the two fingers */
      const rect = el.getBoundingClientRect();
      const mx = (e.touches[0].clientX + e.touches[1].clientX) / 2;
      const my = (e.touches[0].clientY + e.touches[1].clientY) / 2;
      setOrigin({
        x: ((mx - rect.left) / rect.width) * 100,
        y: ((my - rect.top) / rect.height) * 100,
      });
    };

    const onTouchEnd = (e: TouchEvent) => {
      if (e.touches.length < 2 && initialDistRef.current !== null) {
        initialDistRef.current = null;
        setSnapping(true);
        setScale(1);
      }
    };

    el.addEventListener("touchstart", onTouchStart, { passive: true });
    el.addEventListener("touchmove", onTouchMove, { passive: false });
    el.addEventListener("touchend", onTouchEnd, { passive: true });

    return () => {
      el.removeEventListener("touchstart", onTouchStart);
      el.removeEventListener("touchmove", onTouchMove);
      el.removeEventListener("touchend", onTouchEnd);
    };
  }, [scale]);

  const baseStyle: React.CSSProperties = {
    position: "absolute",
    inset: 0,
    width: "100%",
    height: "100%",
    objectFit: "contain",
    objectPosition: "top center",
  };

  return (
    <div className="fixed inset-0 z-[900]" style={{ background: "#000" }}>
      <div className="absolute left-0 right-0 bottom-0" style={{ top: HEADER_H }}>

        {/* Main image */}
        <img
          src="/images/service/main-image.png"
          alt=""
          style={{
            ...baseStyle,
            opacity: phase === "main" ? 1 : 0,
            transition: "opacity 1.5s ease-in-out",
          }}
        />

        {/* Second image — pinch-to-zoom */}
        <img
          ref={secondImgRef}
          src="/images/service/second-image.png"
          alt=""
          style={{
            ...baseStyle,
            opacity: phase === "second" ? 1 : 0,
            transition: snapping
              ? "opacity 1.5s ease-in-out, transform 0.45s cubic-bezier(0.22,1,0.36,1)"
              : "opacity 1.5s ease-in-out",
            transform: `scale(${scale})`,
            transformOrigin: `${origin.x}% ${origin.y}%`,
            touchAction: "none",
            userSelect: "none",
            cursor: "grab",
          }}
          onTransitionEnd={() => {
            if (snapping && scale === 1) setSnapping(false);
          }}
        />
      </div>
    </div>
  );
};

export default IntroSplash;
