import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./ServicesSection.css";

gsap.registerPlugin(ScrollTrigger);

const services = [
  {
    title: "Focuz Academy",
    description:
      " Focuz Academy is an educational venture in Kochi, Kerala. Aiming to provide distance education from Secondary to Ph.D. ",
    logo: "/assets/img/logos/focuz.png",
    url: "#",
  },
  {
    title: "Wishtree Infosolution",
    description:
      "A  group of experts focused on Digital Marketing, Website Design & Development, E-commerce, Web & Mobile Applications ",
    logo: "/assets/img/logos/wishtree-01.webp",
    url: "#",
  },
  {
    title: "Cyberwoodz",
    description:
      "Experts that take care of all your businesses to go digital with digital marketing, web & app design, and development.",
    logo: "/assets/img/logos/cyberwoodz.png",
    url: "#",
  },
  {
    title: "Riverwoodz Water Lines",
    description:
      "Luxury houseboats delivering delightful experiences in the natural charm of Alappuzha.",
    logo: "/assets/img/logos/river.png",
    url: "#",
  },
  {
    title: "Le'Orenda",
    description:
      "Redesigning and reinventing luxury gifting with innovative and premium product ranges.",
    logo: "/assets/img/logos/leornda.png",
    url: "#",
  },
  {
    title: "Moto Factory",
    description:
      "A car dealing business exploring automobile accessorizing and performance-enhancing possibilities.",
    logo: "/assets/img/logos/moto.png",
    url: "#",
  },
  {
    title: "Gaia",
    description:
      "Gaia Creative Productions is an event management company operating across the UAE and India.",
    logo: "/assets/img/logos/GAIA LOGO FINAL-01.png",
    url: "#",
  },
  {
    title: "Brillianz",
    description:
      "An eminent name in UAE’s prestigious education sector and an authorized representative of top Asian and European universities",
    logo: "/assets/img/logos/brillance.png",
    url: "#",
  },
  {
    title: "Inspire",
    description:
      "An online educational institution delivering innovative academic procedures and world-class learning experiences",
    logo: "/assets/img/logos/inspire.webp",
    url: "https://inspireuniversitycollege.com/",
  },
];

const ServicesSection = () => {
  const containerRef = useRef(null);
  const scrollRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      const cards = gsap.utils.toArray(".service-modern-card");

      gsap.to(cards, {
        xPercent: -100 * (cards.length - 1),
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,
          snap: 1 / (cards.length - 1),
          start: "top top",
          end: () => "+=" + scrollRef.current.offsetWidth,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={containerRef} className="services-modern-section">
      <div className="services-modern-header">
        <h3 className="subtitle-gold">Our Excellence</h3>
        <h2 className="section-title"> OUR INITIATIVES</h2>
      </div>

      <div className="services-scroll-container">
        <div ref={scrollRef} className="services-scroll-track">
          {services.map((item, index) => (
            <div key={index} className="service-modern-card">
              <div className="service-card-inner">
                <div className="service-logo-wrap">
                  <img src={item.logo} alt={item.title} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <a
                  href={item.url}
                  className="premium-btn-small"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Explore
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
