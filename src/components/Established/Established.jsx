import React, { useState, useEffect, useRef } from "react";
import "./established-enhanced.css";

const data = [
  {
    label: "IT INDUSTRY",
    title: "WISHTREE | CYBERWOODZ",
    desc: "A collective group of experts focused on Intelligent Business Augmentation along with creative and results-driven solutions for your brand or business.",
    icon: "💻",
    color: "#ffa100"
  },
  {
    label: "EDUCATION",
    title: "TECSWAN | FOCUZ | SCHOLIUM | BRILLIANZ | INSPIRE",
    desc: "Our internationally recognized educational institutes aim to share knowledge and provide professional and cultural learning.",
    icon: "📚",
    color: "#ffa100"
  },
  {
    label: "TOURISM",
    title: "RIVERWOODZ WATERLINES",
    desc: "Our houseboat tourism is known for overnight stays and serene backwater cruise experiences in Kerala.",
    icon: "🚢",
    color: "#ffa100"
  },
  {
    label: "LUXURY GIFTING",
    title: "LE ORENDA",
    desc: "Premium gift hampers designed to create elegant experiences and lasting bonds for every occasion.",
    icon: "🎁",
    color: "#ffa100"
  },
  {
    label: "AUTOMOTIVE",
    title: "MOTO FACTORY",
    desc: "Our automobile industry represents freedom and economic growth, offering comfort and convenience for better travel.",
    icon: "🏎️",
    color: "#ffa100"
  },
   {
    label: "CREATIVE PRODUCTIONS",
    title: "GAIA CREATIVE PRODUCTIONS",
    desc: "Gaia Creative Productions is an event management company operating across the UAE and India. ",
    icon: "🎨",
    color: "#ffa100"
  },

 
  
];

const Established = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const offset = window.innerHeight - rect.top;
        setScrollY(offset * 0.3);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleClick = (index) => {
    setActiveIndex(index);
    setAnimKey((k) => k + 1);
  };

  return (
    <section className="established-section-enhanced" ref={sectionRef}>
      {/* Animated Background */}
      <div className="established-bg">
        <div className="bg-orb orb-1" style={{ transform: `translateY(${scrollY * 0.5}px)` }} />
        <div className="bg-orb orb-2" style={{ transform: `translateY(${-scrollY * 0.3}px)` }} />
        <div className="bg-orb orb-3" style={{ transform: `translateY(${scrollY * 0.4}px)` }} />
      </div>

      <div className="container">
        {/* Heading */}
        <div className="established-heading-enhanced">
          <span className="established-badge">We Are Established As</span>
          <h2>Diverse Range Of Fields<br />Under One Name</h2>
          <div className="heading-underline" />
        </div>

        {/* Layout */}
        <div className="established-layout-enhanced">
          {/* LEFT LIST */}
          <div className="established-list-enhanced">
            {data.map((item, index) => (
              <div
                key={item.label}
                className={`list-item-enhanced ${index === activeIndex ? "active" : ""}`}
                onClick={() => handleClick(index)}
                style={{ 
                  transitionDelay: `${index * 0.05}s`,
                  '--item-color': item.color
                }}
              >
                <span className="item-icon">{item.icon}</span>
                <span className="item-label">{item.label}</span>
                <span className="item-arrow">→</span>
              </div>
            ))}
          </div>

          {/* CONTENT */}
          <div className="established-content-enhanced">
            <div 
              key={animKey} 
              className="content-card"
              style={{ '--accent-color': data[activeIndex].color }}
            >
              <div className="content-header">
                <span className="content-icon">{data[activeIndex].icon}</span>
                <div className="content-glow" />
              </div>
              
              <h3 className="content-title">
                {data[activeIndex].title}
              </h3>
              
              <p className="content-desc">
                {data[activeIndex].desc}
              </p>

              <div className="content-footer">
                <div className="footer-line" />
                <span className="footer-tag">{data[activeIndex].label}</span>
              </div>
            </div>
          </div>

          {/* DECORATIVE ELEMENT */}
          <div className="established-decoration">
            <div className="deco-circle" style={{ transform: `translateY(${scrollY * 0.2}px)` }}>
              <div className="circle-inner" />
            </div>
            <div className="deco-lines">
              <span style={{ transform: `translateX(${scrollY * 0.15}px)` }} />
              <span style={{ transform: `translateX(${-scrollY * 0.1}px)` }} />
              <span style={{ transform: `translateX(${scrollY * 0.12}px)` }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Established;