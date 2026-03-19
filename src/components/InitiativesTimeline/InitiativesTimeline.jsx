import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./initiativesTimeline.css";
import "../About/About-enhanced.css";

gsap.registerPlugin(ScrollTrigger);

const INITIATIVES = [
  {
    title: "Focuz Academy",
    desc: "Focuz Academy is an educational venture in Kochi, Kerala. Aiming to provide distance education from Secondary to Ph.D",
    logo: "/assets/img/logos/focuz.png",
    link: "https://focuzacademy.com/",
  },
  {
    title: "Wishtree Infosolution",
    desc: "A group of experts focused on Digital Marketing, Website Design & Development, E-commerce, Web & Mobile Applications",
    logo: "/assets/img/logos/wishtree-01.webp",
    link: "#",
  },
  {
    title: "Cyberwoodz",
    desc: "Experts that take care of all your businesses to go digital with digital marketing, web & app design, and development",
    logo: "/assets/img/logos/cyberwoodz.png",
    link: "#",
  },
  {
    title: "Riverwoodz Water Lines",
    desc: "Luxury houseboats give a delightful experience in the natural charm of Alappuzha, with amazing packages for every occasion",
    logo: "/assets/img/logos/river.png",
    link: "#",
  },
  {
    title: "Le'Orenda",
    desc: "An initiative in redesigning and reinventing luxury gifting for you, that is innovative to the core with a premium product range",
    logo: "/assets/img/logos/leornda.png",
    link: "#",
  },
  {
    title: "Moto Factory",
    desc: "Moto Factory is a car dealing business that explores automobile accessorizing and performance-enhancing possibilities.",
    logo: "/assets/img/logos/moto.png",
    link: "#",
  },
  {
    title: "Gaia Creative Productions",
    desc: "Gaia Creative Productions delivers seamless corporate events across the UAE and India with strong creative concepts and flawless execution",
    logo: "/assets/img/logos/GAIA LOGO FINAL-01.png",
    link: "https://gaiacreativeproductions.com/",
  },
];

const UPCOMING_PROJECTS = [
  {
    title: "Scholium",
    desc: "UGI provide scholastic assistance to graduating and graduated students",
    logo: "/assets/img/logos/scholium.webp",
    link: "#",
  },
  {
    title: "Cafe 33",
    desc: "An upcoming cafe-restaurant initiative expanding  UGI’s hospitality ventures",
    logo: "/assets/img/logos/cafe-33.webp",
    link: "#",
  },
];

const PARTNERS = [
  {
    title: "Brillanz Educational Group",
    desc: "An eminent name in UAE’s prestigious education sector &  authorized representative of top Asian and European universities",
    logo: "/assets/img/logos/brillance.png",
    link: "#",
  },
  {
    title: "Inspire University College",
    desc: "An online educational institution delivering innovative academic procedures and world-class learning experiences",
    logo: "/assets/img/logos/inspire.webp",
    link: "#",
  },
];

const InitiativesTimeline = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Banner Animations
      gsap.to(".about-banner-bg", {
        yPercent: 24,
        ease: "none",
        scrollTrigger: {
          trigger: ".about-banner",
          start: "top bottom",
          end: "bottom top",
          scrub: 1,
        },
      });

      gsap.from(
        [
          ".about-banner .about-hero-badge",
          ".about-banner-title",
          ".banner-divider",
        ],
        {
          y: 32,
          opacity: 0,
          duration: 0.85,
          stagger: 0.11,
          ease: "power3.out",
          scrollTrigger: {
            trigger: ".about-banner",
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        },
      );

      gsap.from(".timeline-wrapper", {
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".timeline-grid",
          start: "top 85%",
        },
      });

      // Upcoming Projects Reveal
      gsap.from(".upcoming-heading > *", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".upcoming-heading",
          start: "top 85%",
        },
      });

      gsap.from(".upcoming-grid .info-wrapper", {
        y: 60,
        opacity: 0,
        duration: 0.9,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".upcoming-grid",
          start: "top 85%",
        },
      });

      // Partners Reveal
      gsap.from(".partners-heading > *", {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        scrollTrigger: {
          trigger: ".partners-heading",
          start: "top 85%",
        },
      });

      gsap.from(".partners-grid .info-wrapper", {
        y: 60,
        opacity: 0,
        duration: 0.9,
        stagger: 0.2,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".partners-grid",
          start: "top 85%",
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="timeline-enhanced-wrapper about-modern-section"
      style={{ padding: "0 0 160px 0" }}
    >
      <div className="timeline-bg-glow"></div>

      {/* Main Initiatives Banner */}
      <section
        className="about-banner main-timeline-heading"
        style={{ marginBottom: "80px" }}
      >
        <div className="about-banner-bg-wrap">
          <img
            className="about-banner-bg"
            src="/assets/img/ugi-banner4.jpg"
            alt=""
          />
          <div className="about-banner-overlay" />
        </div>
        <div className="about-banner-content container">
          <span className="about-hero-badge">Our Initiatives</span>
          <h2 className="about-banner-title">
            STRONG PILLARS OF EXCEPTIONAL INDUSTRIES
          </h2>
          <div className="banner-divider" />
        </div>
      </section>

      <div className="container">
        <div className="timeline-grid">
          {INITIATIVES.map((item, index) => (
            <div key={index} className="timeline-wrapper">
              <div className="info-card-modern">
                <div className="logo-container">
                  <img src={item.logo} alt={item.title} />
                </div>
                <div className="timeline-content-modern">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
                <a
                  href={item.link}
                  className="modern-link-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Website <span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Upcoming Projects */}
        <div className="section-header upcoming-heading mt-10">
          <span className="section-eyebrow">Upcoming Projects</span>
          <h2 className="section-title">
            PLANNING BEGINNINGS FOR OUR BLOOMING INITIATIVES
          </h2>
        </div>

        <div className="timeline-grid">
          {UPCOMING_PROJECTS.map((item, index) => (
            <div key={index} className="timeline-wrapper">
              <div className="info-card-modern">
                <div className="logo-container">
                  <img src={item.logo} alt={item.title} />
                </div>
                <div className="timeline-content-modern">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
                <a
                  href={item.link}
                  className="modern-link-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Website <span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Partners */}
        <div className="section-header partners-heading mt-10">
          <span className="section-eyebrow">Roof of UGI</span>
          <h2 className="section-title">OUR PARTNERING VENTURES</h2>
        </div>

        <div className="timeline-grid">
          {PARTNERS.map((item, index) => (
            <div key={index} className="timeline-wrapper">
              <div className="info-card-modern">
                <div className="logo-container">
                  <img src={item.logo} alt={item.title} />
                </div>
                <div className="timeline-content-modern">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
                <a
                  href={item.link}
                  className="modern-link-btn"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Visit Website <span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default InitiativesTimeline;
