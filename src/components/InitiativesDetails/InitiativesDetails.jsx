import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./initiativesdetails.css";

gsap.registerPlugin(ScrollTrigger);

const INITIATIVES = {
  it: {
    label: "IT Industry",
    title: "IT Industry",
    brands: "Wishtree · Cyberwoodz",
    desc: "A collective group of experts focused on Intelligent Business Augmentation along with creative and results-driven solutions for your brand or business — through Digital Marketing, Website Development, and more.",
    img: "/assets/img/initiatives/img-2.webp",
    icon: "💻",
    color: "#7c6fe0",
    gradient: "linear-gradient(135deg,#667eea 0%,#764ba2 100%)",
  },
  education: {
    label: "Education",
    title: "Education",
    brands: "Focuz · Scholium · Brillianz · Inspire",
    desc: "Our internationally recognized educational institutes aim to share knowledge with society and provide its members with knowledge, including basic facts, job skills, and cultural norms and values.",
    img: "/assets/img/initiatives/img-2.webp",
    icon: "📚",
    color: "#e0507a",
    gradient: "linear-gradient(135deg,#f093fb 0%,#f5576c 100%)",
  },
  tourism: {
    label: "Tourism",
    title: "Tourism",
    brands: "Riverwoodz Waterlines",
    desc: "Our houseboat tourism is highly known for overnight tours and fast trips through backwaters — offering an amazing stay and cruise experience in Kerala.",
    img: "/assets/img/initiatives/img-2.webp",
    icon: "🚢",
    color: "#4facfe",
    gradient: "linear-gradient(135deg,#4facfe 0%,#00f2fe 100%)",
  },
  gifting: {
    label: "Luxury Gifting",
    title: "Luxury Gifting",
    brands: "Le Orenda",
    desc: "We have highly elegant, classy and good-quality gift hampers to create a unique experience for every occasion and build bonds with people who matter most.",
    img: "/assets/img/initiatives/img-2.webp",
    icon: "🎁",
    color: "#d4af37",
    gradient: "linear-gradient(135deg,#fa709a 0%,#fee140 100%)",
  },
  automotive: {
    label: "Automotive",
    title: "Automotive",
    brands: "Moto Factory",
    desc: "Our automobile industry represents freedom and economic growth. We aim to offer comfort and convenience for a better travel experience.",
    img: "/assets/img/initiatives/img-2.webp",
    icon: "🏎️",
    color: "#30cfd0",
    gradient: "linear-gradient(135deg,#30cfd0 0%,#330867 100%)",
  },
  creative: {
    label: "Creative Productions",
    title: "Creative Productions",
    brands: "Gaia Creative Productions",
    desc: "An event management company operating across the UAE and India. Our team combines creative thinking with careful planning to deliver well-executed event solutions for corporate and professional settings.",
    img: "/assets/img/initiatives/img-2.webp",
    icon: "🎨",
    color: "#ff8c42",
    gradient: "linear-gradient(135deg,#ff8c42 0%,#ff3cac 100%)",
  },
};

/* ─────────────────────────────────────────────────────────────
   Cinematic Banner — matches About hero style exactly
───────────────────────────────────────────────────────────── */
const InitiativesBanner = () => {
  const bannerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Parallax scroll on bg image (same as About hero)
      gsap.to(".init-hero-bg", {
        yPercent: 30,
        ease: "none",
        scrollTrigger: {
          trigger: bannerRef.current,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      // Content stagger entry
      gsap.from(".init-hero-content > *", {
        y: 60,
        opacity: 0,
        duration: 1.2,
        stagger: 0.18,
        ease: "power3.out",
        delay: 0.3,
      });

      // Corner accents fade in
      gsap.from(".init-hero-corner", {
        scale: 0,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power2.out",
        delay: 0.9,
      });
    }, bannerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="init-hero" ref={bannerRef}>
      {/* Parallax bg */}
      <img
        className="init-hero-bg"
        src="/assets/img/ugi-banner-initiatives-1.jpg"
        alt=""
        aria-hidden="true"
      />

      {/* Layered overlays — bottom vignette fades into page bg */}
      <div className="init-hero-overlay" />
      <div className="init-hero-vignette" />

      {/* Decorative corner brackets */}
      <div className="init-hero-corner init-hero-corner--tl" />
      <div className="init-hero-corner init-hero-corner--br" />

      {/* Centered content */}
      <div className="container">
        <div className="init-hero-content">
          <span className="init-hero-badge">UGI — Initiatives</span>

          <h1 className="init-hero-title">
            Our Roots That
            <br />
            Connect Us
          </h1>

          <p className="init-hero-sub">
            A diverse family of industries united under one vision.
          </p>

          {/* Gold ornamental divider */}
          <div className="init-hero-ornament">
            <span className="init-ornament-line" />
            <span className="init-ornament-diamond">◆</span>
            <span className="init-ornament-line" />
          </div>
        </div>
      </div>

      {/* Scroll hint */}
      <div className="init-hero-scroll-hint">
        <span className="init-scroll-line" />
        <span className="init-scroll-label">Scroll</span>
      </div>
    </section>
  );
};

/* ─────────────────────────────────────────────────────────────
   Main Page
───────────────────────────────────────────────────────────── */
const InitiativesDetails = () => {
  const [activeKey, setActiveKey] = useState("it");
  const [animating, setAnimating] = useState(false);

  const handleChange = (key) => {
    if (key === activeKey || animating) return;
    setAnimating(true);
    setTimeout(() => {
      setActiveKey(key);
      setAnimating(false);
    }, 280);
  };

  const data = INITIATIVES[activeKey];

  return (
    <>
      <InitiativesBanner />

      <section className="initiatives-details-section">
        <div className="container">
          {/* Heading */}
          <div className="idd-heading">
            <span className="section-eyebrow">Diverse Industries</span>
            <h2 className="section-title">
              Diverse Range of Fields
              <br />
              Under One Name
            </h2>
            <div className="idd-heading-line" />
          </div>

          <div className="idd-layout">
            {/* Sidebar */}
            <aside className="idd-sidebar">
              <div className="idd-sidebar-header">
                <h3>All Initiatives</h3>
                <div className="idd-sidebar-divider" />
              </div>
              <nav className="idd-nav" aria-label="Initiative categories">
                {Object.keys(INITIATIVES).map((key) => {
                  const item = INITIATIVES[key];
                  const isActive = key === activeKey;
                  return (
                    <button
                      key={key}
                      className={`idd-nav-item${isActive ? " active" : ""}`}
                      onClick={() => handleChange(key)}
                      style={{
                        "--item-gradient": item.gradient,
                        "--item-color": item.color,
                      }}
                      aria-selected={isActive}
                    >
                      <span className="idd-nav-icon">{item.icon}</span>
                      <span className="idd-nav-label">{item.label}</span>
                      <svg
                        className="idd-nav-arrow"
                        width="18"
                        height="18"
                        viewBox="0 0 18 18"
                        fill="none"
                      >
                        <path
                          d="M6 4l5 5-5 5"
                          stroke="currentColor"
                          strokeWidth="1.8"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  );
                })}
              </nav>
            </aside>

            {/* Content Panel */}
            <div
              className={`idd-panel${animating ? " is-out" : " is-in"}`}
              style={{
                "--panel-gradient": data.gradient,
                "--panel-color": data.color,
              }}
            >
              <div className="idd-panel-bar" />

              <div className="idd-icon-wrap">
                <div className="idd-icon-glow" />
                <span className="idd-icon">{data.icon}</span>
              </div>

              <div className="idd-text">
                <h3 className="idd-title">{data.title}</h3>
                <h4 className="idd-brands">{data.brands}</h4>
                <p className="idd-desc">{data.desc}</p>
                <div className="idd-divider" />
              </div>

              <div className="idd-image">
                <img src={data.img} alt={data.title} />
                <div className="idd-image-overlay" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default InitiativesDetails;
