import { useEffect, useRef, useState } from "react";
import "./initiatives-enhanced.css";

const initiatives = [
  {
    title: "Focuz Academy",
    description: "An educational venture in Kochi, Kerala. Aiming to provide distance education from Secondary to Ph.D.",
    logo: "/assets/img/logos/focuz.png",
    gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    color: "#667eea"
  },
  {
    title: "Wishtree Infosolution",
    description: "A group of experts focused on Digital Marketing, Website Design & Development, E-commerce, Web & Mobile Applications.",
    logo: "/assets/img/logos/wishtree-01.webp",
    gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    color: "#f093fb"
  },
  {
    title: "Cyberwoodz",
    description: "Experts that take care of all your businesses to go digital with digital marketing, web & app design, and development.",
    logo: "/assets/img/logos/cyberwoodz.png",
    gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    color: "#4facfe"
  },
  {
    title: "Riverwoodz Water Lines",
    description: "Luxury houseboats delivering delightful experiences in the natural charm of Alappuzha.",
    logo: "/assets/img/logos/river.png",
    gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    color: "#43e97b"
  },
  {
    title: "Le'Orenda",
    description: "Redesigning and reinventing luxury gifting with innovative and premium product ranges.",
    logo: "/assets/img/logos/leornda.png",
    gradient: "linear-gradient(135deg, #fa709a 0%, #fee140 100%)",
    color: "#fa709a"
  },
  {
    title: "Moto Factory",
    description: "A car dealing business exploring automobile accessorizing and performance-enhancing possibilities.",
    logo: "/assets/img/logos/moto.png",
    gradient: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
    color: "#30cfd0"
  },
   {
    title: "Creative Productions",
    description: "Gaia Creative Productions is an event management company operating across the UAE and India.",
    logo: "/assets/img/initiatives/img-2.webp",
    gradient: "linear-gradient(135deg, #30cfd0 0%, #330867 100%)",
    color: "#30cfd0"
  }

];

const InitiativesSection = () => {
  const sectionRef = useRef(null);
  const [visibleCards, setVisibleCards] = useState([]);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      
      // Calculate scroll progress through section
      const progress = Math.max(0, Math.min(1, (windowHeight - rect.top) / (windowHeight + rect.height)));
      setScrollProgress(progress);

      // Determine visible cards
      const cardsToShow = Math.floor(progress * (initiatives.length + 2));
      setVisibleCards(Array.from({ length: cardsToShow }, (_, i) => i));
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check
    
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section ref={sectionRef} className="initiatives-section-enhanced">
      {/* Parallax Background Elements */}
      <div className="initiatives-bg">
        <div 
          className="bg-gradient-orb orb-purple" 
          style={{ transform: `translateY(${scrollProgress * 150}px) scale(${1 + scrollProgress * 0.2})` }}
        />
        <div 
          className="bg-gradient-orb orb-blue" 
          style={{ transform: `translateY(${-scrollProgress * 120}px) scale(${1 + scrollProgress * 0.15})` }}
        />
        <div 
          className="bg-gradient-orb orb-pink" 
          style={{ transform: `translateY(${scrollProgress * 100}px) scale(${1 + scrollProgress * 0.1})` }}
        />
      </div>

      <div className="container">
        {/* Heading */}
        <div className="initiatives-heading-enhanced">
          <div className="heading-badge">
            <span className="badge-dot"></span>
            Strong Pillars of Exceptional & Prosperous Industries
          </div>
          <h2>
            <span className="heading-icon">✦</span>
            Our Initiatives
          </h2>
          <p className="heading-subtitle">
            Empowering businesses and communities through innovation and excellence
          </p>
        </div>

        {/* Grid */}
        <div className="initiatives-grid-enhanced">
          {initiatives.map((item, index) => {
            const isVisible = visibleCards.includes(index);
            const delay = index * 0.1;

            return (
              <div
                key={index}
                className={`initiative-card-enhanced ${isVisible ? "is-visible" : ""}`}
                style={{
                  "--card-gradient": item.gradient,
                  "--card-color": item.color,
                  "--animation-delay": `${delay}s`,
                }}
              >
                {/* Card Glow Effect */}
                <div className="card-glow" />
                
                {/* Card Content */}
                <div className="card-inner">
                  <div className="card-logo-wrapper">
                    <div className="logo-bg" />
                    <img src={item.logo} alt={item.title} className="card-logo" />
                  </div>

                  <div className="card-content">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>

                  {/* Hover Overlay */}
                  <div className="card-overlay">
                    <div className="overlay-gradient" />
                  </div>
                </div>

                {/* Corner Accent */}
                <div className="card-corner" />
              </div>
            );
          })}
        </div>

        {/* Decorative Element */}
        <div className="initiatives-decoration">
          <div 
            className="deco-line" 
            style={{ transform: `scaleX(${scrollProgress})` }}
          />
        </div>
      </div>
    </section>
  );
};

export default InitiativesSection;