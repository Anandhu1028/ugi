import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./Hero.css";

gsap.registerPlugin(ScrollTrigger);

const slides = [
  {
    img: "/assets/img/ugi-banner-1.jpg",
    title: "  ONE FOR ALL IS A NOITON WE UPHOLD",
    subtitle: "Our Core Philosophy",
  },
  {
    img: "/assets/img/ugi-banner4.jpg",
    title: "EMBEDDING DIGITAL SOLUTION",
    subtitle: "Innovating Businesses",
  },
  {
    img: "/assets/img/ugi-banner-3.jpg",
    title: " QUALITY LEARNING FOR EVERY INDIVIDUAL",
    subtitle: "Empowering Futures",
  },
];

const Hero = () => {
  const compRef    = useRef(null);
  const intervalRef = useRef(null);
  const [current, setCurrent] = useState(0);

  const goTo = (idx) => setCurrent(idx);

  const startAuto = () => {
    clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setCurrent((p) => (p + 1) % slides.length);
    }, 5500);
  };

  useEffect(() => {
    startAuto();
    return () => clearInterval(intervalRef.current);
  }, []);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const tl = gsap.timeline();

      tl.from(".hero-bg-img", {
        scale: 1.18,
        opacity: 0,
        duration: 2.2,
        ease: "power3.inOut",
      })
      .from(".hero-eyebrow", { y: 50, opacity: 0, duration: 1, ease: "power3.out" }, "-=1.3")
      .from(".hero-title",   { y: 70, opacity: 0, duration: 1.2, ease: "power3.out" }, "-=0.9")
      .from(".hero-divider", { scaleX: 0, opacity: 0, duration: 0.8, ease: "power2.out" }, "-=0.7")
      .from(".hero-cta-row", { y: 30, opacity: 0, duration: 0.9, ease: "power2.out" }, "-=0.6")
      .from(".hero-corner",  { scale: 0, opacity: 0, stagger: 0.1, duration: 0.6, ease: "back.out(1.6)" }, "-=0.8")
      .from(".hero-social-item", { x: -20, opacity: 0, stagger: 0.1, duration: 0.7, ease: "power2.out" }, "-=0.6");

      // Parallax scroll
      gsap.to(".hero-bg-img", {
        yPercent: 28,
        ease: "none",
        scrollTrigger: {
          trigger: compRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(".hero-content", {
        yPercent: 35,
        opacity: 0,
        ease: "none",
        scrollTrigger: {
          trigger: compRef.current,
          start: "top top",
          end: "65% top",
          scrub: true,
        },
      });
    }, compRef);

    return () => ctx.revert();
  }, []);

  const slide = slides[current];

  return (
    <section ref={compRef} className="hero-section">
      {/* Background */}
      <div className="hero-bg-img" style={{ backgroundImage: `url(${slide.img})` }} />
      <div className="hero-overlay" />
      <div className="hero-grain" aria-hidden="true" />

      {/* Corners */}
      <div className="hero-corner hero-corner--tl" />
      <div className="hero-corner hero-corner--br" />

      {/* Social Rail */}
      <div className="hero-social">
        <div className="hero-social-line" />
        {[
          { href: "https://x.com/ugi__group", icon: "fa-x-twitter" },
          { href: "https://www.facebook.com/ugigroupofinitiatives", icon: "fa-facebook-f" },
          { href: "https://www.instagram.com/ugigroupofinitiatives/", icon: "fa-instagram" },
        ].map((s) => (
          <a key={s.icon} href={s.href} className="hero-social-item"
            target="_blank" rel="noreferrer">
            <i className={`fa-brands ${s.icon}`} />
          </a>
        ))}
        <div className="hero-social-line" />
      </div>

      {/* Slide counter */}
      <div className="hero-counter">
        <span className="hc-num">{String(current + 1).padStart(2, "0")}</span>
        <div className="hc-track">
          <div className="hc-fill" style={{ width: `${((current + 1) / slides.length) * 100}%` }} />
        </div>
        <span className="hc-total">{String(slides.length).padStart(2, "0")}</span>
      </div>

      {/* Content */}
      <div className="container hero-content-container">
        <div className="hero-content">
          <span className="hero-eyebrow">
            <span className="hero-eyebrow-dot" />
            {slide.subtitle}
          </span>

          <h1 className="hero-title" key={`title-${current}`}>{slide.title}</h1>

         

          
        </div>
      </div>

      {/* Dots */}
      <div className="hero-dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`hero-dot${i === current ? " active" : ""}`}
            onClick={() => { goTo(i); startAuto(); }}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>

      {/* Scroll hint */}
     
    </section>
  );
};

export default Hero;