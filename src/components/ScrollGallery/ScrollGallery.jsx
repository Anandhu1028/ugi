import { useEffect, useRef, useState } from "react";
import "./ScrollGallery.css";

const images = [
  "/assets/img/project_1.jpeg",
  "/assets/img/project_2.jpeg",
  "/assets/img/project_3.jpeg",
  "/assets/img/project_4.jpeg",
  "/assets/img/project_5.jpeg",
  "/assets/img/project_6.jpeg",
  "/assets/img/project_7.jpeg",
];

const ScrollGallery = () => {
  const sectionRef = useRef(null);
  const [active, setActive] = useState(0);
  const [locked, setLocked] = useState(false);
  const scrollAcc = useRef(0);

  useEffect(() => {
    const section = sectionRef.current;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          document.body.classList.add("scroll-lock");
          setLocked(true);
        }
      },
      { threshold: 0.6 }
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!locked) return;

    const onWheel = (e) => {
      e.preventDefault();
      scrollAcc.current += e.deltaY;

      if (scrollAcc.current > 120 && active < images.length - 1) {
        setActive((prev) => prev + 1);
        scrollAcc.current = 0;
      }

      if (scrollAcc.current < -120 && active > 0) {
        setActive((prev) => prev - 1);
        scrollAcc.current = 0;
      }

      if (active === images.length - 1 && scrollAcc.current > 80) {
        document.body.classList.remove("scroll-lock");
        setLocked(false);
      }
    };

    window.addEventListener("wheel", onWheel, { passive: false });
    return () => window.removeEventListener("wheel", onWheel);
  }, [locked, active]);

  return (
    <section ref={sectionRef} className="scroll-gallery">
      <div className="gallery-bg" />

      <div className="gallery-stage">
        {images.map((src, i) => {
          const offset = i - active;
          const isActive = i === active;

          return (
            <img
              key={i}
              src={src}
              alt={`Project ${i + 1}`}
              className={`gallery-img ${isActive ? "active" : ""}`}
              style={{
                transform: `
                  translateX(${offset * 140}px)
                  scale(${isActive ? 1 : 0.72})
                  rotateY(${offset * 18}deg)
                `,
                opacity: Math.abs(offset) > 2 ? 0 : 1,
                zIndex: 10 - Math.abs(offset),
              }}
            />
          );
        })}
      </div>
    </section>
  );
};

export default ScrollGallery;
