import { useEffect } from "react";
import "./initiativesTimeline.css";

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
    desc: " Moto Factory is a car dealing business that explores automobile accessorizing and performance-enhancing possibilities.",
    logo: "/assets/img/logos/moto.png",
    link: "#",
  },
  {
    title: "Gaia Creative Productions",
    desc: "Gaia Creative Productions delivers seamless corporate events across the UAE and India with strong creative concepts and flawless execution",
    logo: "/assets/img/logos/GAIA.png",
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
    logo: "/assets/img/logos/brillance.webp",
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
  useEffect(() => {
    const items = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
    );

    items.forEach((el) => observer.observe(el));
  }, []);

  return (
    <>
      {/* ================= OUR INITIATIVES ================= */}
      <section className="timeline-section">
        <div className="timeline-bg">
          <span className="blob blob-1"></span>
          <span className="blob blob-2"></span>
          <span className="blob blob-3"></span>
        </div>

        <div className="container">
          <div className="timeline-heading reveal">
            <span>Strong Pillars of Exceptional & Prosperous Industries</span>
            <h2>Our Initiatives</h2>
          </div>

          <div className="timeline-grid">
            {INITIATIVES.map((item, index) => (
              <div key={index} className="timeline-item reveal">
                <div className="timeline-card">
                  <img src={item.logo} alt={item.title} />
                  <div className="timeline-content">
                    <h3>{item.title}</h3>
                    <p>{item.desc}</p>
                    <a href={item.link}>Visit Website</a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="section-heading reveal mt-10">
          <span>Planning Beginnings For Our Blooming Initiatives</span>
          <h2>Upcoming Projects</h2>
        </div>
       <div className="info-grid">
          {UPCOMING_PROJECTS.map((item, index) => (
            <div key={index} className="info-card reveal">
              <div className="info-logo">
                <img src={item.logo} alt={item.title} />
              </div>

              <h3>{item.title}</h3>
              <p>{item.desc}</p>

              <a
                href={item.link}
                className="visit-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                Visit Website
              </a>
            </div>
          ))}
        </div>


        <div className="section-heading reveal">
          <span>Roof of UGI</span>
          <h2>Our Partnering Ventures</h2>
        </div>

        <div className="info-grid">
  {PARTNERS.map((item, index) => (
    <div key={index} className="info-card reveal">
      <div className="info-logo">
        <img src={item.logo} alt={item.title} />
      </div>

      <h3>{item.title}</h3>
      <p>{item.desc}</p>

      <a
        href={item.link}
        className="visit-link"
        target="_blank"
        rel="noopener noreferrer"
      >
        Visit Website
      </a>
    </div>
  ))}
</div>

      </section>
    </>
  );
};

export default InitiativesTimeline;
