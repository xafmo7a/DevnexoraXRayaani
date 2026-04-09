import { useState, useEffect, useRef } from "react";

const HEADER_H = 188;

const IntroSplash = () => {
  const [phase, setPhase] = useState<"main" | "second">("main");
  const imgRef = useRef<HTMLImageElement>(null);

  /* Live transform — kept in refs so we never need React re-renders during gesture */
  const tfRef   = useRef({ s: 1, tx: 0, ty: 0 });
  const prevRef = useRef<{ mx: number; my: number; dist: number } | null>(null);

  /* Intro timer */
  useEffect(() => {
    const t = setTimeout(() => setPhase("second"), 5000);
    return () => clearTimeout(t);
  }, []);

  /* Write transform directly to DOM — avoids React re-render lag */
  const setTf = (s: number, tx: number, ty: number, animate = false) => {
    const el = imgRef.current;
    if (!el) return;
    tfRef.current = { s, tx, ty };
    el.style.transition = animate ? "transform 0.5s cubic-bezier(0.22,1,0.36,1)" : "none";
    el.style.transform  = `translate(${tx}px,${ty}px) scale(${s})`;
  };

  /* Touch gesture handlers */
  useEffect(() => {
    const el = imgRef.current;
    if (!el) return;

    const mid  = (t: TouchList) => ({
      mx: t.length >= 2 ? (t[0].clientX + t[1].clientX) / 2 : t[0].clientX,
      my: t.length >= 2 ? (t[0].clientY + t[1].clientY) / 2 : t[0].clientY,
    });
    const dist = (t: TouchList) =>
      t.length >= 2 ? Math.hypot(t[1].clientX - t[0].clientX, t[1].clientY - t[0].clientY) : 0;

    const onStart = (e: TouchEvent) => {
      const { mx, my } = mid(e.touches);
      prevRef.current = { mx, my, dist: dist(e.touches) };
    };

    const onMove = (e: TouchEvent) => {
      e.preventDefault();
      const prev = prevRef.current;
      if (!prev) return;

      const { mx, my }    = mid(e.touches);
      const d             = dist(e.touches);
      const { s, tx, ty } = tfRef.current;

      /* — Scale (only when 2 fingers) — */
      const rawRatio  = e.touches.length >= 2 && prev.dist > 0 ? d / prev.dist : 1;
      const newS      = Math.max(1, Math.min(5, s * rawRatio));
      const realRatio = newS / s;   // clamped ratio

      /* Keep the pinch midpoint visually fixed while scaling.
         With transformOrigin:0 0, rect.left = original_left + tx  */
      const rect = el.getBoundingClientRect();
      const newTx = tx + (mx - rect.left)  * (1 - realRatio) + (mx - prev.mx);
      const newTy = ty + (my - rect.top)   * (1 - realRatio) + (my - prev.my);

      prevRef.current = { mx, my, dist: d };
      setTf(newS, newTx, newTy);
    };

    const onEnd = (e: TouchEvent) => {
      if (e.touches.length === 0) {
        /* All fingers lifted → spring back */
        setTf(1, 0, 0, true);
        prevRef.current = null;
      } else {
        /* One finger left after pinch → re-anchor for smooth pan */
        const { mx, my } = mid(e.touches);
        prevRef.current  = { mx, my, dist: 0 };
      }
    };

    el.addEventListener("touchstart", onStart, { passive: true  });
    el.addEventListener("touchmove",  onMove,  { passive: false });
    el.addEventListener("touchend",   onEnd,   { passive: true  });

    return () => {
      el.removeEventListener("touchstart", onStart);
      el.removeEventListener("touchmove",  onMove);
      el.removeEventListener("touchend",   onEnd);
    };
  }, []);

  const base: React.CSSProperties = {
    position:       "absolute",
    inset:          0,
    width:          "100%",
    height:         "100%",
    objectFit:      "contain",
    objectPosition: "top center",
  };

  return (
    <div className="fixed inset-0 z-[900]" style={{ background: "#000" }}>
      <div className="absolute left-0 right-0 bottom-0" style={{ top: HEADER_H }}>

        {/* Main image — shows for 5 s then fades out */}
        <img
          src="/images/service/main-image.png"
          alt=""
          style={{
            ...base,
            opacity:    phase === "main" ? 1 : 0,
            transition: "opacity 1.5s ease-in-out",
          }}
        />

        {/* Second image — pinch-to-zoom + pan, springs back on release */}
        <img
          ref={imgRef}
          src="/images/service/second-image.png"
          alt=""
          style={{
            ...base,
            opacity:         phase === "second" ? 1 : 0,
            transition:      "opacity 1.5s ease-in-out",
            transformOrigin: "0px 0px",
            touchAction:     "none",
            userSelect:      "none",
            willChange:      "transform",
          }}
        />
      </div>
    </div>
  );
};

export default IntroSplash;
