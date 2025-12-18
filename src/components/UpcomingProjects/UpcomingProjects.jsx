import { useEffect, useRef, useState } from "react";

const upcomingProjects = [
  {
    title: "Scholium",
    description:
      "Guidance initiated by UGI to provide scholastic assistance to a lot of graduating and graduated students.",
    logo: "/assets/img/logos/scholium.webp",
  },
  {
    title: "Cafe 33",
    description:
      "An upcoming initiative of ours that introduces a cafe-restaurant addition to the successful initiatives of UGI.",
    logo: "/assets/img/logos/cafe33.webp",
  },
];

const UpcomingProjects = () => {
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

      const index = Math.floor(progress * upcomingProjects.length);
      setActiveIndex(index);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section ref={sectionRef} className="upcoming-section">
      <div className="container">

        {/* Heading */}
        <div className="cs_section_heading cs_mb_60 text-center">
          <h4 className="cs_fs_20 fw-normal cs_mb_10">
            Planning Beginnings For Our Blooming Initiatives
          </h4>
          <h2 className="cs_fs_48 m-0">
            Upcoming Projects
          </h2>
        </div>

        {/* Cards */}
        <div className="services-grid services-grid--upcoming">
          {upcomingProjects.map((item, index) => {
            const isActive = index <= activeIndex;

            return (
              <div
                key={index}
                className={`service-card ${isActive ? "is-active" : ""}`}
                style={{
                  "--delay": `${index * 0.2}s`,
                  "--fromX": index === 0 ? "-120px" : "120px",
                }}
              >
                <div className="service-logo">
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

export default UpcomingProjects;
