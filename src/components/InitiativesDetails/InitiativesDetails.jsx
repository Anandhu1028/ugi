import { useState } from "react";
import "./initiativesdetails.css";

const INITIATIVES = {
  it: {
    label: "IT Industry",
    title: "IT INDUSTRY",
    brands: "WISHTREE | CYBERWOODZ",
    desc: `A collective group of experts focused on Intelligent Business Augmentation along with creative and results-driven solutions for your brand or for your business with the help of Digital Marketing, Website Development etc.`,
    img: "/assets/img/initiatives/img-2.webp",
    icon: "💻",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
  },
  education: {
    label: "Education",
    title: "EDUCATION",
    brands: "FOCUZ | SCHOLIUM | BRILLIANZ | INSPIRE",
    desc: `Our internationally recognized educational institutes aim to share knowledge with society and provide its members with knowledge, including basic facts, job skills, and cultural norms and values.`,
    img: "/assets/img/initiatives/img-2.webp",
    icon: "📚",
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)"
  },
  tourism: {
    label: "Tourism",
    title: "TOURISM",
    brands: "RIVERWOODZ WATERLINES",
    desc: `Our houseboat tourisms are highly known for their overnight tours and for making fast trips through backwaters. Offering an amazing stay and cruise experience in Kerala.`,
    img: "/assets/img/initiatives/img-2.webp",
    icon: "🚢",
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)"
  },
  gifting: {
    label: "Luxury Gifting",
    title: "LUXURY GIFTING",
    brands: "LE ORENDA",
    desc: `We have highly elegant, classy and good-quality gift hampers to create a unique experience for every occasion and build bonds with people who matter most.`,
    img: "/assets/img/initiatives/img-2.webp",
    icon: "🎁",
    gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)"
  },
  automotive: {
    label: "Automotive",
    title: "AUTOMOTIVE",
    brands: "MOTO FACTORY",
    desc: `Our automobile industry represents freedom and economic growth. We aim to offer comfort and convenience for a better travel experience.`,
    img: "/assets/img/initiatives/img-2.webp",
    icon: "🏎️",
    gradient: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)"
  },
};

const InitiativesDetails = () => {
  const [activeKey, setActiveKey] = useState("it");
  const [animate, setAnimate] = useState(false);

  const handleChange = key => {
    if (key === activeKey) return;
    setAnimate(true);
    setTimeout(() => {
      setActiveKey(key);
      setAnimate(false);
    }, 300);
  };

  const data = INITIATIVES[activeKey];

  return (
    <section className="initiatives-details-enhanced">
      <div className="container">
        {/* HEADING */}
        <div className="details-heading">
          <span className="details-badge">UGI</span>
          <h2>Diverse Range Of Fields<br />Under One Name</h2>
          <div className="heading-accent" />
        </div>

        <div className="details-layout">
          {/* LEFT SIDEBAR */}
          <aside className="details-sidebar">
            <div className="sidebar-header">
              <h3>All Initiatives</h3>
              <div className="header-line" />
            </div>

            <nav className="sidebar-nav">
              {Object.keys(INITIATIVES).map(key => {
                const item = INITIATIVES[key];
                const isActive = key === activeKey;

                return (
                  <button
                    key={key}
                    className={`nav-item ${isActive ? "active" : ""}`}
                    onClick={() => handleChange(key)}
                    style={{ '--item-gradient': item.gradient }}
                  >
                    <span className="nav-icon">{item.icon}</span>
                    <span className="nav-label">{item.label}</span>
                    <span className="nav-arrow">
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M7 4l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                  </button>
                );
              })}
            </nav>
          </aside>

          {/* RIGHT CONTENT */}
          <div className={`details-content ${animate ? "fade-out" : "fade-in"}`}>
            <div className="content-wrapper" style={{ '--accent-gradient': data.gradient }}>
              {/* Icon Header */}
              <div className="content-icon-wrapper">
                <div className="icon-glow" />
                <span className="content-icon">{data.icon}</span>
              </div>

              {/* Text Content */}
              <div className="content-text">
                <h3>{data.title}</h3>
                <h4>{data.brands}</h4>
                <p>{data.desc}</p>

                {/* Decorative Line */}
                <div className="content-line" />
              </div>

              {/* Image */}
              <div className="content-image">
                <div className="image-border" />
                <img src={data.img} alt={data.title} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InitiativesDetails;