import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./initiativesTimeline.css";

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
    desc: "Guidance initiated by UGI to provide scholastic assistance to graduating and graduated students",
    logo: "/assets/img/logos/scholium.webp",
    link: "#",
  },
  {
    title: "Cafe 33",
    desc: "An upcoming cafe-restaurant initiative expanding UGI’s hospitality ventures",
    logo: "/assets/img/logos/cafe-33.webp",
    link: "#",
  },
];

const PARTNERS = [
  {
    title: "Brillanz Educational Group",
    desc: "An eminent name in UAE’s prestigious education sector and an authorized representative of top Asian and European universities",
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

      // Stagger Reveals for main initiatives
      gsap.from(".main-timeline-heading > *", {
        y: 50,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: ".main-timeline-heading",
          start: "top 85%",
        }
      });

      gsap.from(".timeline-wrapper", {
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: {
          trigger: ".timeline-grid",
          start: "top 85%",
        }
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
        }
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
        }
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
        }
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
        }
      });

    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="timeline-enhanced-wrapper">
      <div className="timeline-bg-glow"></div>

      <div className="container">
        {/* Main Initiatives */}
        <div className="section-heading main-timeline-heading">
          <span>Our Initiatives</span>
          <h2>STRONG PILLARS OF EXCEPTIONAL INDUSTIRES</h2>
        </div>

        <div className="timeline-grid">
          {INITIATIVES.map((item, index) => (
            <div key={index} className="timeline-wrapper">
              <div className="info-card-modern">
                <div >
                  <img src={item.logo}  />
                </div>
                <div className="timeline-content-modern">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
                 <a href={item.link} className="modern-link-btn" target="_blank" rel="noopener noreferrer">
                  Visit Website <span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Upcoming Projects */}
        <div className="section-heading upcoming-heading mt-10">
          <span>Upcoming Projects</span>
          <h2>PLANNING BEGINNINGS FOR OUR BLOOMING INTITIATIVES</h2>

        </div>

       <div className="timeline-grid">
          {UPCOMING_PROJECTS.map((item, index) => (
            <div key={index} className="timeline-wrapper">
              <div className="info-card-modern">
                <div >
                  <img src={item.logo}  />
                </div>
                <div className="timeline-content-modern">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
                 <a href={item.link} className="modern-link-btn" target="_blank" rel="noopener noreferrer">
                  Visit Website <span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Partners */}
        <div className="section-heading partners-heading mt-10">
          <span>Roof of UGI</span>
                    <h2>OUR  PARTNERING  VENTURES</h2>

        </div>

       <div className="timeline-grid">
          {PARTNERS.map((item, index) => (
            <div key={index} className="timeline-wrapper">
              <div className="info-card-modern">
                <div >
                  <img src={item.logo}  />
                </div>
                <div className="timeline-content-modern">
                  <h3>{item.title}</h3>
                  <p>{item.desc}</p>
                </div>
                 <a href={item.link} className="modern-link-btn" target="_blank" rel="noopener noreferrer">
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
