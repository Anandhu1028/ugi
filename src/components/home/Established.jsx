import { useState, useEffect, useRef } from "react";
import "./established-enhanced.css";

const data = [
  {
    label: "IT Industry",
    title: "Wishtree · Cyberwoodz",
    desc: "A collective group of experts focused on Intelligent Business Augmentation.",
    icon: "💻",
    bg: "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=2000&q=80"
  },
  {
    label: "Education",
    title: "Tecswan · Focuz · Scholium · Brillianz · Inspire",
    desc: "Internationally recognized educational institutes.",
    icon: "📚",
    bg: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=2000&q=80"
  },
  {
    label: "Tourism",
    title: "Riverwoodz Waterlines",
    desc: "Serene backwater cruise experiences.",
    icon: "🚢",
    bg: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=2000&q=80"
  },
  {
    label: "Luxury Gifting",
    title: "Le Orenda",
    desc: "Premium gift hampers designed for elegant experiences.",
    icon: "🎁",
    bg: "https://images.unsplash.com/photo-1607083206173-1e9e5a6b1c7f?auto=format&fit=crop&w=2000&q=80"
  },
  {
    label: "Automotive",
    title: "Moto Factory",
    desc: "Freedom and economic growth through mobility.",
    icon: "🏎️",
    bg: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2000&q=80"
  },
  {
    label: "Creative Productions",
    title: "Gaia Creative Productions",
    desc: "Crafting unforgettable experiences.",
    icon: "🎨",
    bg: "https://images.unsplash.com/photo-1492724441997-5dc865305da7?auto=format&fit=crop&w=2000&q=80"
  },
];

const Established = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const sectionRef = useRef(null);

  /* Cinematic parallax */
  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      const activeBg = document.querySelector(".est-bg-img.active");
      if (activeBg) {
        activeBg.style.transform = `scale(1.05) translateY(${y * 0.04}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section className="established-section" ref={sectionRef}>

      {/* Cinematic Background Images */}
      <div className="est-bg-images">
        {data.map((item, i) => (
          <div
            key={i}
            className={`est-bg-img ${i === activeIndex ? "active" : ""}`}
            style={{ backgroundImage: `url(${item.bg})` }}
          />
        ))}
        <div className="est-bg-overlay" />
      </div>

      <div className="container">

        {/* Heading */}
        <div className="est-heading">
          <span className="section-eyebrow">We Are Established As</span>
          <h2 className="section-title">
            Diverse Range of Fields<br />Under One Name
          </h2>
          <div className="est-heading-line" />
        </div>

        <div className="est-layout">

          {/* LEFT LIST */}
          <nav className="est-list">
            {data.map((item, i) => (
              <button
                key={item.label}
                className={`est-list-item ${i === activeIndex ? "active" : ""}`}
                onClick={() => setActiveIndex(i)}
              >
                <span className="eli-icon">{item.icon}</span>
                <span className="eli-label">{item.label}</span>
                <span className="eli-arrow">→</span>
              </button>
            ))}
          </nav>

          {/* RIGHT CARD */}
          <div className="est-content">
            <div className="est-card">
              <div className="est-card-bar" />
              <div className="est-card-header">
                <span className="est-card-icon">
                  {data[activeIndex].icon}
                </span>
              </div>

              <h3 className="est-card-title">
                {data[activeIndex].title}
              </h3>

              <p className="est-card-desc">
                {data[activeIndex].desc}
              </p>

              <div className="est-card-footer">
                <div className="est-card-footer-line" />
                <span className="est-card-tag">
                  {data[activeIndex].label}
                </span>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Established;