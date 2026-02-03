import { useEffect, useRef, useState } from "react";
import "./ScrollGallery.css";

const images = [
  "/assets/img/gallery/ugi-website-brillianz-onam-01.webp",
  "/assets/img/gallery/ugi-website-events-10th-anniversary-09-scaled.webp",
  "/assets/img/gallery/ugi-website-events-10th-anniversary-14-scaled.webp",
  "/assets/img/gallery/ugi-website-events-10th-anniversary-15-scaled.webp",
  "/assets/img/gallery/ugi-website-events-10th-anniversary-02.webp",
  "/assets/img/gallery/ugi-website-staff-together-08.webp",
  "/assets/img/gallery/ugi-website-onam-celebration-06.webp",
];

const ScrollGallery = () => {
  const sectionRef = useRef(null);
  const [active, setActive] = useState(0);
  const [locked, setLocked] = useState(false);
  const [progress, setProgress] = useState(0);
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

      

      // Update progress for animations
      const newProgress = Math.min(Math.max(active / (images.length - 1), 0), 1);
      setProgress(newProgress);

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
    <section ref={sectionRef} className="scroll-gallery-enhanced">
      {/* Enhanced Background */}
      <div className="gallery-bg-enhanced">
        <div 
          className="bg-gradient gradient-1" 
          style={{ transform: `translate(${progress * 100}px, ${progress * 80}px) scale(${1 + progress * 0.3})` }}
        />
        <div 
          className="bg-gradient gradient-2" 
          style={{ transform: `translate(${-progress * 120}px, ${progress * 60}px) scale(${1 + progress * 0.2})` }}
        />
        <div 
          className="bg-gradient gradient-3" 
          style={{ transform: `translate(${progress * 80}px, ${-progress * 100}px) scale(${1 + progress * 0.25})` }}
        />
        
        {/* Particle Effect */}
        <div className="particles">
          {[...Array(20)].map((_, i) => (
            <div 
              key={i} 
              className="particle" 
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${5 + Math.random() * 10}s`
              }}
            />
          ))}
        </div>
      </div>

      {/* Gallery Info */}
      <div className="gallery-info">
        <div className="info-counter">
          <span className="counter-current">{String(active + 1).padStart(2, '0')}</span>
          <span className="counter-divider">/</span>
          <span className="counter-total">{String(images.length).padStart(2, '0')}</span>
        </div>
        
        <div className="info-progress">
          <div 
            className="progress-bar" 
            style={{ width: `${((active + 1) / images.length) * 100}%` }}
          />
        </div>

        <p className="info-instruction">Scroll to explore</p>
      </div>

      {/* Gallery Stage */}
      <div className="gallery-stage-enhanced">
        {images.map((src, i) => {
          const offset = i - active;
          const isActive = i === active;
          const distance = Math.abs(offset);

          return (
            <div
              key={i}
              className={`gallery-card ${isActive ? "active" : ""}`}
              style={{
                transform: `
                  translateX(${offset * 160}px)
                  translateZ(${isActive ? 0 : -distance * 200}px)
                  scale(${isActive ? 1 : 0.7 - distance * 0.1})
                  rotateY(${offset * 20}deg)
                `,
                opacity: distance > 2 ? 0 : 1 - distance * 0.25,
                zIndex: 10 - distance,
              }}
            >
              <div className="card-shine" />
              <div className="card-border" />
              <img src={src} alt={`Project ${i + 1}`} />
              
              {isActive && (
                <div className="card-label">
                  <span>Project {i + 1}</span>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Navigation Dots */}
      <div className="gallery-dots">
        {images.map((_, i) => (
          <button
            key={i}
            className={`dot ${i === active ? "active" : ""}`}
            onClick={() => setActive(i)}
            aria-label={`Go to image ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default ScrollGallery;