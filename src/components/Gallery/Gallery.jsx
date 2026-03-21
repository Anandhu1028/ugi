import React, { useState, useEffect, useRef, useCallback } from "react";
import "./Gallery.css";
import CinematicBanner from "../CinematicBanner";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const images = [
  { src: "/assets/img/gallery/IMG_2385.JPG.jpeg" },
  { src: "/assets/img/gallery/Firefly 20241104105047.png" },
  { src: "/assets/img/gallery/01_Group Photo Edited_1.jpg" },
  { src: "/assets/img/gallery/WhatsApp Image 2024-11-21 at 1.40.54 PM.jpeg" },
  { src: "/assets/img/gallery/WhatsApp Image 2024-11-21 at 3.05.39 PM.jpeg" },
  {
    src: "/assets/img/gallery/WhatsApp Image 2024-11-21 at 3.05.40 PM (1).jpeg",
  },
  { src: "/assets/img/gallery/WhatsApp Image 2024-11-21 at 3.05.40 PM.jpeg" },
  {
    src: "/assets/img/gallery/WhatsApp Image 2024-11-21 at 3.05.42 PM (1).jpeg",
  },
  { src: "/assets/img/gallery/WhatsApp Image 2024-11-21 at 3.05.42 PM.jpeg" },
  {
    src: "/assets/img/gallery/WhatsApp Image 2024-11-21 at 3.05.44 PM (1).jpeg",
  },
  { src: "/assets/img/gallery/WhatsApp Image 2024-11-21 at 3.05.44 PM.jpeg" },
  { src: "/assets/img/gallery/WhatsApp Image 2024-11-21 at 3.05.47 PM.jpeg" },
  {
    src: "/assets/img/gallery/WhatsApp Image 2024-11-21 at 3.05.48 PM (1).jpeg",
  },
  { src: "/assets/img/gallery/WhatsApp Image 2024-11-21 at 3.05.48 PM.jpeg" },
  { src: "/assets/img/gallery/WhatsApp Image 2024-11-21 at 3.05.50 PM.jpeg" },
  {
    src: "/assets/img/gallery/WhatsApp Image 2024-11-21 at 3.05.51 PM (1).jpeg",
  },
  {
    src: "/assets/img/gallery/WhatsApp Image 2024-11-21 at 3.05.51 PM (2).jpeg",
  },
  {
    src: "/assets/img/gallery/WhatsApp Image 2024-11-21 at 3.05.54 PM (1).jpeg",
  },
  { src: "/assets/img/gallery/WhatsApp Image 2024-11-21 at 3.05.54 PM.jpeg" },
  { src: "/assets/img/gallery/WhatsApp Image 2024-11-21 at 3.05.57 PM.jpeg" },
  { src: "/assets/img/gallery/DJI_20240908114832_0109_D.JPG" },
  { src: "/assets/img/gallery/ugi-website-brillianz-onam-01.webp" },
  { src: "/assets/img/gallery/ugi-website-brillianz-onam-02.webp" },
  { src: "/assets/img/gallery/ugi-website-onam-celebration-05.webp" },
  { src: "/assets/img/gallery/ugi-website-onam-celebration-06.webp" },
  { src: "/assets/img/gallery/ugi-website-onam-celebration-07.webp" },
  { src: "/assets/img/gallery/ugi-website-brillianz-onam-07.webp" },
  { src: "/assets/img/gallery/ugi-website-brillianz-onam-08.webp" },
  { src: "/assets/img/gallery/ugi-website-onam-celebration-10.webp" },
  { src: "/assets/img/gallery/ugi-website-onam-celebration-11.webp" },
  { src: "/assets/img/gallery/ugi-website-onam-celebration-14-1000x667.webp" },
  { src: "/assets/img/gallery/ugi-website-event-convocation-01.webp" },
  { src: "/assets/img/gallery/ugi-website-convocation-04.webp" },
  { src: "/assets/img/gallery/ugi-website-convocation-08.webp" },
  { src: "/assets/img/gallery/ugi-website-convocation-07.webp" },
  { src: "/assets/img/gallery/ugi-website-event-convocation-07.webp" },
  {
    src: "/assets/img/gallery/ugi-website-events-10th-anniversary-09-scaled.webp",
  },
  {
    src: "/assets/img/gallery/ugi-website-events-10th-anniversary-14-scaled.webp",
  },
  { src: "/assets/img/gallery/ugi-website-events-10th-anniversary-05.webp" },
  {
    src: "/assets/img/gallery/ugi-website-events-10th-anniversary-15-scaled.webp",
  },
  { src: "/assets/img/gallery/ugi-website-staff-together-01.webp" },
  { src: "/assets/img/gallery/ugi-website-staff-together-09.webp" },
  { src: "/assets/img/gallery/ugi-website-staff-together-08.webp" },
  { src: "/assets/img/gallery/ugi-website-staff-together-09.webp" },
];

/* ── Lightbox ───────────────────────────────────────────── */
const Lightbox = ({ images, activeIndex, onClose, onPrev, onNext }) => {
  const imgRef = useRef(null);

  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  useEffect(() => {
    if (!imgRef.current) return;
    gsap.fromTo(
      imgRef.current,
      { scale: 0.86, opacity: 0, y: 24 },
      { scale: 1, opacity: 1, y: 0, duration: 0.42, ease: "power3.out" },
    );
  }, [activeIndex]);

  return (
    <div className="gl-lightbox-backdrop" onClick={onClose}>
      <div className="gl-lightbox-inner" onClick={(e) => e.stopPropagation()}>
        <button className="gl-lb-close" onClick={onClose} aria-label="Close">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path
              d="M2 2l14 14M16 2L2 16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <button
          className="gl-lb-nav gl-lb-prev"
          onClick={onPrev}
          aria-label="Previous"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M13 3L6 10l7 7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <img
          ref={imgRef}
          className="gl-lb-img"
          src={images[activeIndex].src}
          alt={`Gallery ${activeIndex + 1}`}
        />

        <button
          className="gl-lb-nav gl-lb-next"
          onClick={onNext}
          aria-label="Next"
        >
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M7 3l7 7-7 7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        {/* Thumbnail strip */}
        <div className="gl-lb-strip">
          {images.map((img, i) => (
            <button
              key={i}
              className={`gl-lb-thumb ${i === activeIndex ? "active" : ""}`}
              onClick={() => {
                onClose();
                setTimeout(() => {}, 0);
              }}
              style={{ backgroundImage: `url(${img.src})` }}
              aria-label={`Go to image ${i + 1}`}
            />
          ))}
        </div>

        <div className="gl-lb-counter">
          {activeIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  );
};

/* ── Gallery Component ───────────────────────────────────── */
const Gallery = () => {
  const [lightboxIndex, setLightboxIndex] = useState(null);
  const galleryRef = useRef(null);
  const gridRef = useRef(null);
  const cursorRef = useRef(null);
  const cursorImgRef = useRef(null);

  const openLightbox = useCallback((i) => setLightboxIndex(i), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const prevImage = useCallback(
    () => setLightboxIndex((i) => (i - 1 + images.length) % images.length),
    [],
  );
  const nextImage = useCallback(
    () => setLightboxIndex((i) => (i + 1) % images.length),
    [],
  );

  /* ── Custom cursor that previews hovered image ── */
  useEffect(() => {
    const cursor = cursorRef.current;
    const cursorImg = cursorImgRef.current;
    if (!cursor || !cursorImg) return;

    const onMove = (e) => {
      gsap.to(cursor, {
        x: e.clientX,
        y: e.clientY,
        duration: 0.18,
        ease: "power2.out",
      });
    };

    const items = gridRef.current?.querySelectorAll(".gl-item");
    const enterHandlers = [];
    const leaveHandlers = [];

    items?.forEach((item, i) => {
      const enter = () => {
        cursorImg.src = images[i].src;
        gsap.to(cursor, {
          scale: 1,
          opacity: 1,
          duration: 0.35,
          ease: "back.out(1.4)",
        });
      };
      const leave = () => {
        gsap.to(cursor, {
          scale: 0,
          opacity: 0,
          duration: 0.25,
          ease: "power2.in",
        });
      };
      item.addEventListener("mouseenter", enter);
      item.addEventListener("mouseleave", leave);
      enterHandlers.push(enter);
      leaveHandlers.push(leave);
    });

    window.addEventListener("mousemove", onMove);
    return () => {
      window.removeEventListener("mousemove", onMove);
      items?.forEach((item, i) => {
        item.removeEventListener("mouseenter", enterHandlers[i]);
        item.removeEventListener("mouseleave", leaveHandlers[i]);
      });
    };
  }, []);

  /* ── Magnetic tilt ── */
  useEffect(() => {
    const items = gridRef.current?.querySelectorAll(".gl-item");
    if (!items) return;
    const handlers = [];

    items.forEach((item) => {
      const onMove = (e) => {
        const r = item.getBoundingClientRect();
        const x = ((e.clientX - r.left) / r.width - 0.5) * 14;
        const y = ((e.clientY - r.top) / r.height - 0.5) * -14;
        gsap.to(item, {
          rotateY: x,
          rotateX: y,
          duration: 0.3,
          ease: "power2.out",
          transformPerspective: 800,
        });
      };
      const onLeave = () => {
        gsap.to(item, {
          rotateY: 0,
          rotateX: 0,
          duration: 0.6,
          ease: "elastic.out(1,0.5)",
        });
      };
      item.addEventListener("mousemove", onMove);
      item.addEventListener("mouseleave", onLeave);
      handlers.push({ item, onMove, onLeave });
    });
    return () =>
      handlers.forEach(({ item, onMove, onLeave }) => {
        item.removeEventListener("mousemove", onMove);
        item.removeEventListener("mouseleave", onLeave);
      });
  }, []);

  /* ── GSAP scroll animations ── */
  useEffect(() => {
    /* Section header */
    gsap.from(".gl-eyebrow", {
      y: 28,
      opacity: 0,
      duration: 0.7,
      ease: "power3.out",
      scrollTrigger: { trigger: ".gallery-section", start: "top 82%" },
    });
    gsap.from(".gl-title-word", {
      y: 60,
      opacity: 0,
      duration: 0.9,
      stagger: 0.15,
      ease: "power3.out",
      scrollTrigger: { trigger: ".gallery-section", start: "top 82%" },
      delay: 0.15,
    });
    gsap.from(".gl-divider", {
      scaleX: 0,
      duration: 0.9,
      ease: "power3.out",
      transformOrigin: "center",
      scrollTrigger: { trigger: ".gallery-section", start: "top 78%" },
      delay: 0.45,
    });
    gsap.from(".gl-count-tag", {
      scale: 0.5,
      opacity: 0,
      duration: 0.6,
      ease: "back.out(1.7)",
      scrollTrigger: { trigger: ".gallery-section", start: "top 78%" },
      delay: 0.6,
    });

    /* Grid items — wave curtain reveal */
    gsap.from(".gl-item", {
      clipPath: "inset(100% 0% 0% 0%)",
      opacity: 0,
      duration: 0.9,
      stagger: { amount: 1.4, from: "start", grid: "auto" },
      ease: "expo.out",
      scrollTrigger: { trigger: ".gl-grid", start: "top 80%" },
    });

    return () => ScrollTrigger.getAll().forEach((t) => t.kill());
  }, []);

  return (
    <div className="gallery-page">
      {/* Custom cursor */}
      <div
        className="gl-cursor"
        ref={cursorRef}
        style={{ transform: "translate(-50%,-50%) scale(0)", opacity: 0 }}
      >
        <img ref={cursorImgRef} src="" alt="" className="gl-cursor-img" />
      </div>

      {/* Banner — no fold, renders normally */}
      <CinematicBanner
        image="/assets/img/ugi-banner-events.jpg"
        eyebrow="UGI — Gallery"
        title={
          <>
            Our Journey
            
            In<br /> Moments
          </>
        }
        sub="Moments that shaped us, memories that stay forever."
        height="100vh"
      />

      {/* Gallery Section */}
      <section className="gallery-section" ref={galleryRef}>
        {/* Scrolling background collage */}
        <div className="gallery-collage">
          {Array.from({ length: 8 }).map((_, rowIndex) => (
            <div
              key={rowIndex}
              className={`collage-row ${rowIndex % 2 === 0 ? "scroll-left" : "scroll-right"}`}
            >
              {[...images, ...images].map((item, i) => (
                <img key={rowIndex + "-" + i} src={item.src} alt="" />
              ))}
            </div>
          ))}
        </div>

        {/* Ambient glow orbs */}
        <div className="gl-orb gl-orb-a" />
        <div className="gl-orb gl-orb-b" />

        <div className="gl-inner">
          {/* Animated header */}
          <div className="gl-header">
            <div className="gl-eyebrow-row">
              <span className="gl-eyebrow">Captured Moments</span>
              <span className="gl-count-tag">{images.length} Photos</span>
            </div>

            <div className="gl-divider" />
          </div>

          {/* Masonry-ish grid */}
          <div className="gl-grid" ref={gridRef}>
            {images.map((item, index) => (
              <div
                key={index}
                className="gl-item"
                onClick={() => openLightbox(index)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && openLightbox(index)}
                aria-label={`Open image ${index + 1}`}
              >
                <img
                  src={item.src}
                  alt={`Gallery ${index + 1}`}
                  loading="lazy"
                />
                <div className="gl-item-overlay" />
                <div className="gl-item-shine" />
                <div className="gl-item-zoom">
                  <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                    <path
                      d="M7 2H2v5M11 2h5v5M7 16H2v-5M11 16h5v-5"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                <div className="gl-item-index">
                  #{String(index + 1).padStart(2, "0")}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      {lightboxIndex !== null && (
        <Lightbox
          images={images}
          activeIndex={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </div>
  );
};

export default Gallery;