import { useState, useEffect, useRef } from "react";
import "./established-enhanced.css";

const data = [
  {
    label: "IT Industry",
    title: "Wishtree · Cyberwoodz",
    desc: "A collective group of experts focused on Intelligent Business Augmentation along with creative and results-driven solutions for your brand or business.",
    icon: "💻",
  },
  {
    label: "Education",
    title: "Tecswan · Focuz · Scholium · Brillianz · Inspire",
    desc: "Our internationally recognized educational institutes aim to share knowledge and provide professional and cultural learning.",
    icon: "📚",
  },
  {
    label: "Tourism",
    title: "Riverwoodz Waterlines",
    desc: "Our houseboat tourism is known for overnight stays and serene backwater cruise experiences in Kerala.",
    icon: "🚢",
  },
  {
    label: "Luxury Gifting",
    title: "Le Orenda",
    desc: "Premium gift hampers designed to create elegant experiences and lasting bonds for every occasion.",
    icon: "🎁",
  },
  {
    label: "Automotive",
    title: "Moto Factory",
    desc: "Our automobile industry represents freedom and economic growth, offering comfort and convenience for better travel.",
    icon: "🏎️",
  },
  {
    label: "Creative Productions",
    title: "Gaia Creative Productions",
    desc: "An event management company operating across the UAE and India — crafting unforgettable experiences.",
    icon: "🎨",
  },
];

const Established = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animKey, setAnimKey]         = useState(0);
  const [scrollY, setScrollY]         = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return;
      const rect   = sectionRef.current.getBoundingClientRect();
      const offset = window.innerHeight - rect.top;
      setScrollY(offset * 0.3);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleClick = (i) => {
    setActiveIndex(i);
    setAnimKey((k) => k + 1);
  };

  return (
    <section className="established-section" ref={sectionRef}>
      {/* Animated background orbs */}
      <div className="est-bg" aria-hidden="true">
        <div className="est-orb est-orb--1" style={{ transform: `translateY(${scrollY * 0.5}px)` }} />
        <div className="est-orb est-orb--2" style={{ transform: `translateY(${-scrollY * 0.3}px)` }} />
        <div className="est-orb est-orb--3" style={{ transform: `translateY(${scrollY * 0.4}px)` }} />
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

        {/* Layout */}
        <div className="est-layout">

          {/* LEFT — clickable list */}
          <nav className="est-list" aria-label="Industry sectors">
            {data.map((item, i) => (
              <button
                key={item.label}
                className={`est-list-item${i === activeIndex ? " active" : ""}`}
                onClick={() => handleClick(i)}
                style={{ animationDelay: `${i * 0.07}s` }}
                aria-selected={i === activeIndex}
              >
                <span className="eli-icon">{item.icon}</span>
                <span className="eli-label">{item.label}</span>
                <span className="eli-arrow" aria-hidden="true">→</span>
              </button>
            ))}
          </nav>

          {/* RIGHT — content card */}
          <div className="est-content" key={animKey}>
            <div className="est-card">
              {/* Top accent bar */}
              <div className="est-card-bar" />

              <div className="est-card-header">
                <span className="est-card-icon">{data[activeIndex].icon}</span>
                <div className="est-card-glow" />
              </div>

              <h3 className="est-card-title">{data[activeIndex].title}</h3>
              <p className="est-card-desc">{data[activeIndex].desc}</p>

              <div className="est-card-footer">
                <div className="est-card-footer-line" />
                <span className="est-card-tag">{data[activeIndex].label}</span>
              </div>
            </div>

            {/* Index indicator dots */}
            <div className="est-dots">
              {data.map((_, i) => (
                <button
                  key={i}
                  className={`est-dot${i === activeIndex ? " active" : ""}`}
                  onClick={() => handleClick(i)}
                  aria-label={`Go to ${data[i].label}`}
                />
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Established;