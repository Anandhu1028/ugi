import { useEffect, useRef, useState } from "react";
import "./initiatives-enhanced.css";

const initiatives = [
  {
    title: "Focuz Academy",
    description:
      "An educational venture in Kochi, Kerala — aiming to provide distance education from Secondary to Ph.D.",
    logo: "/assets/img/logos/focuz.png",
    color: "#7c6fe0",
  },
  {
    title: "Wishtree Infosolution",
    description:
      "A group of experts focused on Digital Marketing, Website Design & Development, E-commerce, and Mobile Applications.",
    logo: "/assets/img/logos/wishtree-01.webp",
    color: "#e0507a",
  },
  {
    title: "Cyberwoodz",
    description:
      "Experts that take care of all your businesses going digital — digital marketing, web & app design, and development.",
    logo: "/assets/img/logos/cyberwoodz.png",
    color: "#4facfe",
  },
  {
    title: "Riverwoodz Water Lines",
    description:
      "Luxury houseboats delivering delightful experiences in the natural charm of Alappuzha.",
    logo: "/assets/img/logos/river.png",
    color: "#3abf7a",
  },
  {
    title: "Le Orenda",
    description:
      "Redesigning and reinventing luxury gifting with innovative and premium product ranges.",
    logo: "/assets/img/logos/leornda.png",
    color: "#d4af37",
  },
  {
    title: "Moto Factory",
    description:
      "A car dealing business exploring automobile accessorising and performance-enhancing possibilities.",
    logo: "/assets/img/logos/moto.png",
    color: "#30cfd0",
  },
  {
    title: "Gaia Creative Productions",
    description:
      "An event management company operating across the UAE and India, crafting memorable experiences.",
    logo: "/assets/img/initiatives/img-2.webp",
    color: "#ff8c42",
  },
];

const InitiativesSection = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState([]);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return;
      const rect = sectionRef.current.getBoundingClientRect();
      const p = Math.max(
        0,
        Math.min(
          1,
          (window.innerHeight - rect.top) / (window.innerHeight + rect.height),
        ),
      );
      setProgress(p);
      const count = Math.floor(p * (initiatives.length + 3));
      setVisible(Array.from({ length: count }, (_, i) => i));
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section ref={sectionRef} className="initiatives-section">
      {/* Parallax orbs */}
      <div className="init-bg" aria-hidden="true">
        <div
          className="init-orb init-orb--1"
          style={{
            transform: `translateY(${progress * 130}px) scale(${1 + progress * 0.15})`,
          }}
        />
        <div
          className="init-orb init-orb--2"
          style={{
            transform: `translateY(${-progress * 110}px) scale(${1 + progress * 0.1})`,
          }}
        />
        <div
          className="init-orb init-orb--3"
          style={{ transform: `translateY(${progress * 90}px)` }}
        />
      </div>

      <div className="container">
        {/* Heading */}
        <div className="init-heading">
          <div className="init-badge">
            <span className="init-badge-dot" />
            Strong Pillars of Exceptional &amp; Prosperous Industries
          </div>
          <h2 className="section-title">
            <span className="init-star">✦</span> Our Initiatives
          </h2>
          <p className="init-subtitle">
            Empowering businesses and communities through innovation and
            excellence
          </p>
        </div>

        {/* Grid */}
        <div className="init-grid">
          {initiatives.map((item, i) => (
            <article
              key={i}
              className={`init-card${visible.includes(i) ? " is-visible" : ""}`}
              style={{
                "--card-color": item.color,
                "--anim-delay": `${i * 0.08}s`,
              }}
            >
              <div className="init-card-glow" />

              <div className="init-card-inner">
                <div className="init-logo-wrap">
                  <div className="init-logo-bg" />
                  <img
                    src={item.logo}
                    alt={item.title}
                    className="init-logo"
                    loading="lazy"
                  />
                </div>

                <div className="init-card-body">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>

                <div className="init-card-accent" />
              </div>

              {/* Hover corner */}
              <div className="init-corner" aria-hidden="true" />
            </article>
          ))}
        </div>

        {/* Bottom decoration */}
        <div
          className="init-deco-line"
          style={{ transform: `scaleX(${progress})` }}
        />
      </div>
    </section>
  );
};

export default InitiativesSection;
