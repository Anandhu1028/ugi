import { useEffect, useRef, useState } from "react";
import "./ScrollGallery.css";

const images = [
  "/assets/img/gallery/IMG_2385.JPG.jpeg",
  "/assets/img/gallery/Firefly 20241104105047.png",
  "/assets/img/gallery/01_Group Photo Edited_1.jpg",
  "/assets/img/gallery/WhatsApp Image 2024-11-21 at 1.40.54 PM.jpeg",
  "/assets/img/gallery/WhatsApp Image 2024-11-21 at 3.05.40 PM (1).jpeg",
  "/assets/img/gallery/WhatsApp Image 2024-11-21 at 3.05.42 PM.jpeg",
  "/assets/img/gallery/WhatsApp Image 2024-11-21 at 3.05.48 PM (1).jpeg",
  "/assets/img/gallery/WhatsApp Image 2024-11-21 at 3.05.48 PM.jpeg",
  "/assets/img/gallery/WhatsApp Image 2024-11-21 at 3.05.50 PM.jpeg",
  "/assets/img/gallery/WhatsApp Image 2024-11-21 at 3.05.51 PM (1).jpeg",
];

const ScrollGallery = () => {
  const sectionRef   = useRef(null);
  const [active, setActive]     = useState(0);
  const [progress, setProgress] = useState(0);

  // ── Refs (never stale inside event listeners) ────────────────────────────
  const lockedRef    = useRef(false);
  const activeRef    = useRef(0);
  const scrollAcc    = useRef(0);
  const savedScroll  = useRef(0);

  // Keep activeRef in sync with state
  useEffect(() => {
    activeRef.current = active;
    setProgress(active / (images.length - 1));
  }, [active]);

  // ── Lock / Unlock helpers ────────────────────────────────────────────────
  // position:fixed is the ONLY bulletproof way — overflow:hidden leaks on
  // Chrome & iOS Safari. We save scrollY so the page never jumps on unlock.
  const lockScroll = () => {
    if (lockedRef.current) return;
    savedScroll.current           = window.scrollY;
    document.body.style.position  = "fixed";
    document.body.style.top       = `-${savedScroll.current}px`;
    document.body.style.left      = "0";
    document.body.style.right     = "0";
    document.body.style.overflowY = "scroll"; // prevent layout shift
    lockedRef.current = true;
    scrollAcc.current = 0;
  };

  const unlockScroll = () => {
    if (!lockedRef.current) return;
    document.body.style.position  = "";
    document.body.style.top       = "";
    document.body.style.left      = "";
    document.body.style.right     = "";
    document.body.style.overflowY = "";
    // Restore exact scroll position — no jump
    window.scrollTo({ top: savedScroll.current, behavior: "instant" });
    lockedRef.current = false;
    scrollAcc.current = 0;
  };
  // ────────────────────────────────────────────────────────────────────────

  // ── IntersectionObserver: freeze page when gallery enters view ───────────
  useEffect(() => {
    const section = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) lockScroll();
      },
      { threshold: 0.6 },
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  // ── Wheel listener — ONE time, on document, capture phase ────────────────
  //
  // WHY capture:true?
  //   Browsers process scroll BEFORE bubble-phase listeners run.
  //   capture:true puts our handler FIRST, so e.preventDefault() actually
  //   blocks the page scroll. Without it the page already moved.
  //
  // WHY passive:false?
  //   Required to allow calling e.preventDefault() at all.
  //
  // WHY empty deps []?
  //   We read refs (not state), so the handler is never stale.
  //   Adding/removing the listener every render is what caused the gap.
  // ─────────────────────────────────────────────────────────────────────────
  useEffect(() => {
    const onWheel = (e) => {
      if (!lockedRef.current) return;

      e.preventDefault();          // blocks page scroll ✓
      e.stopPropagation();

      scrollAcc.current += e.deltaY;
      const cur = activeRef.current;

      // ── Go to next image ──────────────────────────────────────────────
      if (scrollAcc.current > 80 && cur < images.length - 1) {
        setActive(cur + 1);
        scrollAcc.current = 0;
        return;
      }

      // ── Go to previous image ──────────────────────────────────────────
      if (scrollAcc.current < -80 && cur > 0) {
        setActive(cur - 1);
        scrollAcc.current = 0;
        return;
      }

      // ── After LAST image: extra intentional scroll → unlock page ──────
      if (cur === images.length - 1 && scrollAcc.current > 150) {
        unlockScroll();
        return;
      }

      // ── Before FIRST image: extra scroll up → unlock page upward ──────
      if (cur === 0 && scrollAcc.current < -150) {
        unlockScroll();
        return;
      }
    };

    document.addEventListener("wheel", onWheel, { capture: true, passive: false });
    return () => document.removeEventListener("wheel", onWheel, { capture: true });
  }, []); // ← empty deps, safe because we only use refs inside

  return (
    <section ref={sectionRef} className="scroll-gallery-enhanced">

      {/* ── Background ── */}
      <div className="gallery-bg-enhanced">
        <div className="bg-gradient gradient-1" style={{ transform: `translate(${progress * 100}px, ${progress * 80}px) scale(${1 + progress * 0.3})` }} />
        <div className="bg-gradient gradient-2" style={{ transform: `translate(${-progress * 120}px, ${progress * 60}px) scale(${1 + progress * 0.2})` }} />
        <div className="bg-gradient gradient-3" style={{ transform: `translate(${progress * 80}px, ${-progress * 100}px) scale(${1 + progress * 0.25})` }} />
        <div className="particles">
          {[...Array(20)].map((_, i) => (
            <div key={i} className="particle" style={{
              left: `${Math.random() * 100}%`,
              top:  `${Math.random() * 100}%`,
              animationDelay:    `${Math.random() * 5}s`,
              animationDuration: `${5 + Math.random() * 10}s`,
            }} />
          ))}
        </div>
      </div>

      {/* ── Info ── */}
      <div className="gallery-info">
        <div className="info-counter">
          <span className="counter-current">{String(active + 1).padStart(2, "0")}</span>
          <span className="counter-divider">/</span>
          <span className="counter-total">{String(images.length).padStart(2, "0")}</span>
        </div>
        <div className="info-progress">
          <div className="progress-bar" style={{ width: `${((active + 1) / images.length) * 100}%` }} />
        </div>
        <p className="info-instruction">
          {active === images.length - 1 ? "Scroll again to continue ↓" : "Scroll to explore"}
        </p>
      </div>

      {/* ── Stage ── */}
      <div className="gallery-stage-enhanced">
        {images.map((src, i) => {
          const offset   = i - active;
          const isActive = i === active;
          const distance = Math.abs(offset);
          return (
            <div
              key={i}
              className={`gallery-card ${isActive ? "active" : ""}`}
              style={{
                transform: `
                  translateX(${offset * 160}px)
                  translateZ(${isActive ? 0 : -distance * 200}px)
                  scale(${isActive ? 1 : 0.7 - distance * 0.1})
                  rotateY(${offset * 20}deg)
                `,
                opacity: distance > 2 ? 0 : 1 - distance * 0.25,
                zIndex:  10 - distance,
              }}
            >
              <div className="card-shine" />
              <div className="card-border" />
              <img src={src} alt={`Project ${i + 1}`} />
              {isActive && (
                <div className="card-label">
                  <span>Project {i + 1}</span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* ── Dots ── */}
      <div className="gallery-dots">
        {images.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === active ? "active" : ""}`}
            onClick={() => setActive(i)}
            aria-label={`Go to image ${i + 1}`}
          />
        ))}
      </div>

    </section>
  );
};

export default ScrollGallery;