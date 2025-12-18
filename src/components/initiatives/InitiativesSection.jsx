import { useEffect, useRef, useState } from "react";

const initiatives = [
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

const InitiativesSection = () => {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(-1);

  useEffect(() => {
    const onScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const triggerPoint = window.innerHeight * 0.65;

      if (rect.top > triggerPoint) return;

      const progress =
        Math.min(
          Math.max((triggerPoint - rect.top) / rect.height, 0),
          1
        );

      const index = Math.floor(progress * initiatives.length);
      setActiveIndex(index);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section ref={sectionRef} className="initiatives-section">
      <div className="container">

        {/* Heading */}
        <div className="initiatives-heading">
          <h4>Strong Pillars of Exceptional & Prosperous Industries</h4>
          <h2>
            <span className="initiatives-icon">✦</span> Our Initiatives
          </h2>
        </div>

        {/* Grid */}
        <div className="initiatives-grid">
          {initiatives.map((item, index) => {
            const isActive = index <= activeIndex;

            return (
              <div
                key={index}
                className={`initiative-card ${
                  isActive ? "is-active" : ""
                }`}
                style={{
                  "--delay": `${index * 0.15}s`,
                  "--direction":
                    index % 3 === 0
                      ? "-40px"
                      : index % 3 === 1
                      ? "40px"
                      : "0px",
                }}
              >
                <div className="initiative-logo">
                  <img src={item.logo} alt={item.title} />
                </div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default InitiativesSection;
