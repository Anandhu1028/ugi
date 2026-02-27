/**
 * CinematicBanner.jsx
 * -------------------
 * Shared hero banner used by Career, Events, Gallery, and any other
 * page that needs the same About-style parallax hero.
 *
 * Props:
 *   image   {string}  – background image path
 *   eyebrow {string}  – small gold badge text
 *   title   {string|ReactNode} – main headline (can contain <br/>)
 *   sub     {string}  – optional subtitle line
 *   height  {string}  – CSS height (default "88vh")
 */

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./CinematicBanner.css";

gsap.registerPlugin(ScrollTrigger);

const CinematicBanner = ({
  image,
  eyebrow,
  title,
  sub,
  height = "88vh",
}) => {
  const bannerRef = useRef(null);
  const uid = useRef(`cb-${Math.random().toString(36).slice(2, 7)}`).current;

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Parallax scroll on bg
      gsap.to(".cb-bg", {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: bannerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Stagger content entry
      gsap.from(".cb-content > *", {
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.16,
        ease: "power3.out",
        delay: 0.2,
      });

      // Corner brackets
      gsap.from(".cb-corner", {
        scale: 0,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: "power2.out",
        delay: 0.8,
      });
    }, bannerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className="cb-hero"
      ref={bannerRef}
      style={{ "--cb-height": height }}
    >
      {/* Parallax bg image */}
      <img
        className="cb-bg"
        src={image}
        alt=""
        aria-hidden="true"
      />

      {/* Overlay layers */}
      <div className="cb-overlay" />
      <div className="cb-vignette" />

      {/* Corner brackets */}
      <div className="cb-corner cb-corner--tl" />
      <div className="cb-corner cb-corner--br" />

      {/* Content */}
      <div className="container cb-container">
        <div className="cb-content">
          <span className="cb-badge">{eyebrow}</span>
          <h1 className="cb-title">{title}</h1>
          {sub && <p className="cb-sub">{sub}</p>}

          {/* Ornamental gold divider */}
          <div className="cb-ornament">
            <span className="cb-orn-line" />
            <span className="cb-orn-diamond">◆</span>
            <span className="cb-orn-line cb-orn-line--r" />
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="cb-scroll-hint">
        <span className="cb-scroll-line" />
        <span className="cb-scroll-label">Scroll</span>
      </div>
    </section>
  );
};

export default CinematicBanner;