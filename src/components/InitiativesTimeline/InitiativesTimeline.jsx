import { useEffect } from "react";
import "./initiativesTimeline.css";

const INITIATIVES = [
  {
    title: "Focuz Academy",
    desc: "Focuz Academy is an educational venture in Kochi, Kerala. Aiming to provide distance education from Secondary to Ph.D",
    logo: "/assets/img/logos/focuz.png",
    link: "#",
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
    desc: "Luxury houseboats offering delightful experiences in the natural charm of Alappuzha",
    logo: "/assets/img/logos/river.png",
    link: "#",
  },
  {
    title: "Le'Orenda",
    desc: "Reinventing luxury gifting with innovative and premium product experiences",
    logo: "/assets/img/logos/leornda.png",
    link: "#",
  },
  {
    title: "Moto Factory",
    desc: "Automobile accessorizing and performance-enhancing solutions",
    logo: "/assets/img/logos/moto.png",
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
        <div className="section-heading reveal">
          <span>Planning Beginnings For Our Blooming Initiatives</span>
          <h2>Upcoming Projects</h2>
        </div>
        <div className="info-grid">
          <div className="info-card reveal">
            <div className="info-logo">
              <img src="/assets/img/logos/scholium.webp" alt="Scholium" />
            </div>
            <h3>Scholium</h3>
            <p>
              Guidance initiated by UGI to provide scholastic assistance to a
              lot of graduating and graduated students
            </p>
          </div>

          <div className="info-card reveal">
            <div className="info-logo">
              <img src="/assets/img/logos/cafe-33.webp" alt="Cafe 33" />
            </div>
            <h3>Cafe 33</h3>
            <p>
              An upcoming initiative of ours that introduces a cafe-restaurant
              addition to the successful initiatives of UGI
            </p>
          </div>
        </div>

        <div className="section-heading reveal">
          <span>Roof of UGI</span>
          <h2>Our Partnering Ventures</h2>
        </div>

        <div className="info-grid">
          <div className="info-card reveal">
            <div className="info-logo">
              <img
                src="/assets/img/logos/brillance.webp"
                alt="Brillanz Educational Group"
              />
            </div>
            <h3>Brillanz Educational Group</h3>
            <p>
              An eminent name in UAE’s prestigious education sector. Brillianz
              is one of the authorized official representatives of many top
              Asian and European Universities
            </p>
          </div>

          <div className="info-card reveal">
            <div className="info-logo">
              <img
                src="/assets/img/logos/inspire.webp"
                alt="Inspire University College"
              />
            </div>
            <h3>Inspire University College</h3>
            <p>
              An Online educational institution aspiring to excel more than any
              conventional classroom, by offering innovative academic procedures
              and world-class learning experiences
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default InitiativesTimeline;
