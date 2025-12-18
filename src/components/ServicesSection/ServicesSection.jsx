import { useEffect, useRef, useState } from "react";

const services = [
  {
    title: "Focuz Academy",
    description:
      "An educational venture in Kochi, Kerala. Aiming to provide distance education from Secondary to Ph.D.",
    logo: "/assets/img/logos/focuz.png",
  },
  {
    title: "Wishtree Infosolution",
    description:
      "A group of experts focused on Digital Marketing, Website Design & Development, E-commerce, Web & Mobile Applications.",
    logo: "/assets/img/logos/wishtree-01.webp",
  },
  {
    title: "Cyberwoodz",
    description:
      "Experts that take care of all your businesses to go digital with digital marketing, web & app design, and development.",
    logo: "/assets/img/logos/cyberwoodz.png",
  },
  {
    title: "Riverwoodz Water Lines",
    description:
      "Luxury houseboats delivering delightful experiences in the natural charm of Alappuzha.",
    logo: "/assets/img/logos/river.png",
  },
  {
    title: "Le'Orenda",
    description:
      "Redesigning and reinventing luxury gifting with innovative and premium product ranges.",
    logo: "/assets/img/logos/leornda.png",
  },
  {
    title: "Moto Factory",
    description:
      "A car dealing business exploring automobile accessorizing and performance-enhancing possibilities.",
    logo: "/assets/img/logos/moto.png",
  },
];

const ServicesSection = () => {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const triggerPoint = window.innerHeight * 0.65;

      if (rect.top > triggerPoint) return;

      const progress = Math.min(
        Math.max((triggerPoint - rect.top) / rect.height, 0),
        1
      );

      const index = Math.floor(progress * services.length);
      setActiveIndex(index);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="background-filled cs_pt_133 cs_pt_lg_75 cs_pb_140 cs_pb_lg_80 cs_gray_bg"
      style={{ backgroundImage: "url(/assets/img/services_bg.png)" }}
    >
      <div className="container">
        {/* Heading */}
        <div className="cs_section_heading cs_style_1 cs_mb_60 text-center">
          <h3 className="cs_fs_20 text-accent fw-normal cs_mb_10">
            Strong Pillars of Exceptional & Prosperous Industries
          </h3>
          <h2 className="cs_fs_48 m-0">Our Initiatives</h2>
        </div>

        {/* Cards */}
        <div className="services-grid">
  {services.map((item, index) => {
    const isActive = index <= activeIndex;

    return (
      <div
        key={index}
        className={`service-card ${isActive ? "is-active" : ""}`}
        style={{
          "--delay": `${index * 0.18}s`,
          "--fromX": index % 2 === 0 ? "-120px" : "120px",
        }}
      >
        {/* TOP CONTENT */}
        <div className="service-card-body">
          <div className="service-logo">
            <img src={item.logo} alt={item.title} />
          </div>

          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </div>

        {/* BOTTOM BUTTON */}
        <div className="service-card-footer">
          <a href="#" className="service-btn">
            Visit Website
          </a>
        </div>
      </div>
    );
  })}


        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
