import { useState, useEffect, useCallback, RefObject } from "react";
import { X, Play } from "lucide-react";
import DropdownMenu from "./DropdownMenu";
import rawLogo from "@/assets/raw-logo.png";
import portrait from "@/assets/raya-ani-portrait.png";
import aiaLogo from "@/assets/aia-logo.png";
import iconFacebook from "@/assets/icon-facebook.png";
import iconInstagram from "@/assets/icon-instagram.png";
import iconLinkedin from "@/assets/icon-linkedin.png";
import iconYoutube from "@/assets/icon-youtube.png";
import iconWhatsapp from "@/assets/icon-whatsapp.png";
import iconEmail from "@/assets/icon-email.png";

const rayaAniVideos = [
  "P1UgHTA8DP8", "EBs2KYQk1Mw", "xkYiWUhd-Qw", "GF6qOeUbyhU",
];

const aiaVideos = [
  "kgIr6sUIglI", "K_Skn9w68wc", "kt9HqoJ7tmU",
];

const videoIds = [...rayaAniVideos, ...aiaVideos];

interface SiteHeaderProps {
  onToggleCarousel?: () => void;
  carouselOpen?: boolean;
  scrollRef?: RefObject<HTMLDivElement>;
}

const SiteHeader = ({ onToggleCarousel, carouselOpen, scrollRef }: SiteHeaderProps) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [hideState, setHideState] = useState<"" | "hide-cta" | "hide-videos" | "hide-all">("");
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  const toggleMenu = useCallback(() => {
    setMenuOpen((prev) => !prev);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const [headerRetracted, setHeaderRetracted] = useState(false);

  useEffect(() => {
    const el = scrollRef?.current;
    if (!el) return;

    const handleScroll = () => {
      const scrollY = el.scrollTop;
      const viewportH = window.innerHeight;
      
      if (scrollY > viewportH * 0.3) {
        setHideState("hide-all");
        setHeaderRetracted(true);
      } else if (scrollY >= 80) {
        setHideState("hide-videos");
        setHeaderRetracted(false);
      } else if (scrollY >= 20) {
        setHideState("hide-cta");
        setHeaderRetracted(false);
      } else {
        setHideState("");
        setHeaderRetracted(false);
      }
    };
    el.addEventListener("scroll", handleScroll, { passive: true });
    return () => el.removeEventListener("scroll", handleScroll);
  }, [scrollRef]);

  useEffect(() => {
    const handleKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", handleKey);
    return () => document.removeEventListener("keydown", handleKey);
  }, []);

  return (
    <>
      <DropdownMenu open={menuOpen} onClose={() => setMenuOpen(false)} />

      <header
        className="fixed top-0 left-0 right-0 z-[1000] flex flex-col overflow-hidden"
        style={{
          borderRadius: "0 0 20px 20px",
          boxShadow: (headerRetracted || menuOpen) ? "none" : "0 8px 32px rgba(0,0,0,0.45)",
          animation: "slideDown 0.5s cubic-bezier(0.22,1,0.36,1) forwards",
          transform: (headerRetracted || menuOpen) ? "translateY(-100%)" : "translateY(0)",
          opacity: (headerRetracted || menuOpen) ? 0 : 1,
          pointerEvents: (headerRetracted || menuOpen) ? "none" : "auto",
          transition: "transform 0.7s cubic-bezier(0.65, 0, 0.35, 1), opacity 0.6s ease, box-shadow 0.4s ease",
        }}
      >
        {/* Red Bar — top layer z-30 */}
        <div
          className="relative z-30 flex flex-col items-center px-4 py-2"
          style={{
            background: "linear-gradient(135deg, hsl(var(--aia-red)), hsl(var(--aia-red-glow)))",
            backdropFilter: "blur(20px) saturate(1.8)",
            WebkitBackdropFilter: "blur(20px) saturate(1.8)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.22), inset 0 -1px 0 rgba(0,0,0,0.12), 0 4px 12px rgba(0,0,0,0.3)",
          }}
        >
          <div className="w-full flex items-center min-h-[58px]">
            {/* Left — Social Links */}
            <div className="flex-1 flex gap-0.5 md:gap-2 items-center justify-start">
              {[
                { src: iconFacebook, label: "Facebook", href: "#" },
                { src: iconInstagram, label: "Instagram", href: "#" },
                { src: iconLinkedin, label: "LinkedIn", href: "#" },
                { src: iconYoutube, label: "YouTube", href: "#" },
              ].map(({ src, label, href }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-7 h-7 md:w-[38px] md:h-[38px] rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
                >
                  <img src={src} alt={label} className="w-5 h-5 md:w-[34px] md:h-[34px] object-contain invert" />
                </a>
              ))}
              <a
                href="https://rayaani.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 md:w-[38px] md:h-[38px] rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
              >
                <img src={rawLogo} alt="RAW" className="h-5 md:h-[26px] w-auto" />
              </a>
            </div>

            {/* Center — Portrait + Hamburger */}
            <div className="flex-none flex flex-col items-center gap-1.5 px-3">
              <img
                src={portrait}
                alt="Raya Ani"
                className="w-[36px] h-[36px] rounded-full object-cover"
                style={{ border: "2px solid rgba(255,255,255,0.5)" }}
              />
              <button
                onClick={toggleMenu}
                className="flex flex-col items-center gap-1 cursor-pointer px-2 py-1 transition-all duration-200"
              >
                {menuOpen ? (
                  <X className="w-5 h-5 text-foreground" />
                ) : (
                  <>
                    <span className="block w-5 h-[1.5px] bg-foreground/90 rounded-sm" />
                    <span className="block w-5 h-[1.5px] bg-foreground/90 rounded-sm" />
                    <span className="block w-5 h-[1.5px] bg-foreground/90 rounded-sm" />
                  </>
                )}
              </button>
            </div>

            {/* Right — Contact Buttons */}
            <div className="flex-1 flex gap-0.5 md:gap-2 items-center justify-end">
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="WhatsApp"
                className="w-7 h-7 md:w-[38px] md:h-[38px] rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
              >
                <img src={iconWhatsapp} alt="WhatsApp" className="w-6 h-6 md:w-[52px] md:h-[52px] object-contain invert" />
              </a>
              <a
                href="mailto:contact@rayaani.com"
                aria-label="Email"
                className="w-7 h-7 md:w-[38px] md:h-[38px] rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
              >
                <img src={iconEmail} alt="Email" className="w-5 h-5 md:w-[34px] md:h-[34px] object-contain invert" />
              </a>
              <a
                href="https://www.aia.org/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-7 h-7 md:w-[38px] md:h-[38px] rounded-full flex items-center justify-center transition-all duration-200 hover:scale-110"
              >
                <img src={aiaLogo} alt="AIA" className="w-5 h-5 md:w-[22px] md:h-[22px] object-contain" />
              </a>
            </div>
          </div>
        </div>

        {/* Black Banner between menu and carousel */}
        <div
          className="relative z-25 overflow-hidden"
          style={{
            background: "hsl(0 0% 5%)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.07)",
          }}
        >
          <div
            className="flex gap-16 whitespace-nowrap w-max py-2.5"
            style={{ animation: "tickerScroll 25s linear infinite" }}
          >
            {[...Array(2)].flatMap((_, r) =>
              [
                "✦ Vote Raya Ani for AIA President Elect",
                "Architects at Public Service",
                "✦ Vote Raya Ani for AIA President Elect",
                "Leadership · Vision · Service",
              ].map((msg, i) => (
                <span
                  key={`${r}-${i}`}
                  className="text-[clamp(11px,2.5vw,14px)] font-semibold tracking-[0.14em] uppercase text-white/80"
                >
                  {msg}
                </span>
              ))
            )}
          </div>
        </div>

        {/* Gray Videos Bar — tucks under black banner */}
        <div
          className="relative z-20 overflow-hidden cursor-pointer"
          style={{
            background: "rgba(90,90,100,0.6)",
            backdropFilter: "blur(20px) saturate(1.4)",
            WebkitBackdropFilter: "blur(20px) saturate(1.4)",
            boxShadow: "inset 0 1px 0 rgba(255,255,255,0.1), 0 4px 8px rgba(0,0,0,0.2)",
            maxHeight:
              hideState === "hide-videos" || hideState === "hide-all"
                ? "0px"
                : "80px",
            opacity:
              hideState === "hide-videos" || hideState === "hide-all"
                ? 0
                : 1,
            transition: "max-height 0.5s cubic-bezier(0.65, 0, 0.35, 1), opacity 0.4s ease",
          }}
          onClick={onToggleCarousel}
        >
          <div
            className="flex gap-0 py-1.5 w-max"
            style={{
              animation: "tickerScroll 40s linear infinite",
            }}
          >
            {[...videoIds, ...videoIds].map((id, i) => (
              <div
                key={`${id}-${i}`}
                className="flex-shrink-0 w-[82px] px-[1px]"
              >
                <div className="rounded-md overflow-hidden" style={{ border: "1px solid rgba(255,255,255,0.15)" }}>
                  <img
                    src={`https://img.youtube.com/vi/${id}/mqdefault.jpg`}
                    alt=""
                    className="w-full aspect-video object-cover block"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </header>

      {/* Expanded video overlay */}
      {carouselOpen && (
        <div
          className="fixed inset-0 z-[1100] flex flex-col items-center justify-center gap-4"
          style={{
            background: "rgba(0,0,0,0.92)",
            backdropFilter: "blur(16px)",
            WebkitBackdropFilter: "blur(16px)",
          }}
        >
          {/* Raya Ani Carousel */}
          <h3 className="font-display text-[clamp(16px,3.5vw,26px)] text-foreground tracking-[0.12em] mb-1">
            Raya Ani
          </h3>
          <div className="w-full overflow-hidden">
            <div
              className="flex gap-0 py-2 w-max"
              style={{ animation: "tickerScroll 35s linear infinite" }}
            >
              {[...rayaAniVideos, ...rayaAniVideos, ...rayaAniVideos].map((id, i) => (
                <div
                  key={`ra-${id}-${i}`}
                  className="flex-shrink-0 w-[240px] md:w-[320px] px-2"
                >
                  <div
                    className="rounded-xl overflow-hidden cursor-pointer relative group transition-all duration-200 hover:scale-[1.03]"
                    style={{
                      border: "1px solid rgba(255,255,255,0.12)",
                      boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
                    }}
                    onClick={(e) => { e.stopPropagation(); setActiveVideoId(id); }}
                  >
                    <img
                      src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
                      alt=""
                      className="w-full aspect-video object-cover block"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/5 transition-all">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center transition-transform group-hover:scale-110"
                        style={{ background: "rgba(192,57,43,0.9)", boxShadow: "0 4px 16px rgba(192,57,43,0.5)" }}
                      >
                        <Play className="w-4 h-4 fill-foreground text-foreground ml-0.5" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* AIA Carousel */}
          <h3 className="font-display text-[clamp(16px,3.5vw,26px)] text-foreground tracking-[0.12em] mt-2 mb-1">
            AIA
          </h3>
          <div className="w-full overflow-hidden">
            <div
              className="flex gap-0 py-2 w-max"
              style={{ animation: "tickerScroll 30s linear infinite reverse" }}
            >
              {[...aiaVideos, ...aiaVideos, ...aiaVideos, ...aiaVideos].map((id, i) => (
                <div
                  key={`aia-${id}-${i}`}
                  className="flex-shrink-0 w-[240px] md:w-[320px] px-2"
                >
                  <div
                    className="rounded-xl overflow-hidden cursor-pointer relative group transition-all duration-200 hover:scale-[1.03]"
                    style={{
                      border: "1px solid rgba(255,255,255,0.12)",
                      boxShadow: "0 4px 20px rgba(0,0,0,0.4)",
                    }}
                    onClick={(e) => { e.stopPropagation(); setActiveVideoId(id); }}
                  >
                    <img
                      src={`https://img.youtube.com/vi/${id}/hqdefault.jpg`}
                      alt=""
                      className="w-full aspect-video object-cover block"
                    />
                    <div className="absolute inset-0 flex items-center justify-center bg-black/20 group-hover:bg-black/5 transition-all">
                      <div
                        className="w-12 h-12 rounded-full flex items-center justify-center transition-transform group-hover:scale-110"
                        style={{ background: "rgba(192,57,43,0.9)", boxShadow: "0 4px 16px rgba(192,57,43,0.5)" }}
                      >
                        <Play className="w-4 h-4 fill-foreground text-foreground ml-0.5" />
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Close button */}
          <button
            onClick={onToggleCarousel}
            className="mt-4 w-12 h-12 rounded-full flex items-center justify-center text-foreground text-xl cursor-pointer transition-all duration-200 hover:scale-110"
            style={{
              background: "rgba(192,57,43,0.85)",
              border: "2px solid rgba(255,255,255,0.25)",
              boxShadow: "0 6px 24px rgba(192,57,43,0.5), inset 0 1px 0 rgba(255,255,255,0.2)",
            }}
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      )}

      {/* Video player modal */}
      {activeVideoId && (
        <div
          className="fixed inset-0 z-[2000] flex items-center justify-center"
          style={{ background: "rgba(0,0,0,0.96)" }}
          onClick={() => setActiveVideoId(null)}
        >
          <div className="relative w-[92vw] max-w-[900px]" onClick={(e) => e.stopPropagation()}>
            <div
              className="absolute -top-10 right-0 text-foreground text-[13px] font-semibold tracking-[0.12em] cursor-pointer opacity-70 hover:opacity-100 flex items-center gap-1"
              onClick={() => setActiveVideoId(null)}
            >
              <X className="w-4 h-4" /> Close
            </div>
            <iframe
              src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1`}
              className="w-full aspect-video border-none rounded-xl"
              allowFullScreen
              allow="autoplay; encrypted-media"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default SiteHeader;
