import React, { useState, useEffect, useRef } from "react";
import "./Gallery.css";
import CinematicBanner from "../CinematicBanner";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const images = [
  { src:"/assets/img/gallery/ugi-website-brillianz-onam-01.webp" },
  { src: "/assets/img/gallery/ugi-website-brillianz-onam-02.webp" },
  { src: "/assets/img/gallery/ugi-website-onam-celebration-05.webp" },
  { src:"/assets/img/gallery/ugi-website-onam-celebration-06.webp" },
  { src:"/assets/img/gallery/ugi-website-onam-celebration-07.webp" },
  { src:"/assets/img/gallery/ugi-website-brillianz-onam-07.webp" },
  { src: "/assets/img/gallery/ugi-website-brillianz-onam-08.webp" },
  { src: "/assets/img/gallery/ugi-website-onam-celebration-10.webp" },
  { src: "/assets/img/gallery/ugi-website-onam-celebration-11.webp" },
  { src: "/assets/img/gallery/ugi-website-onam-celebration-14-1000x667.webp" },
  { src: "/assets/img/gallery/ugi-website-event-convocation-01.webp" },
  { src: "/assets/img/gallery/ugi-website-convocation-04.webp" },
  { src: "/assets/img/gallery/ugi-website-convocation-08.webp" },
  { src: "/assets/img/gallery/ugi-website-convocation-07.webp" },
  { src: "/assets/img/gallery/ugi-website-event-convocation-07.webp" },
  { src: "/assets/img/gallery/ugi-website-events-10th-anniversary-09-scaled.webp" },
  { src: "/assets/img/gallery/ugi-website-events-10th-anniversary-14-scaled.webp" },
  { src: "/assets/img/gallery/ugi-website-events-10th-anniversary-05.webp" },
  { src: "/assets/img/gallery/ugi-website-events-10th-anniversary-15-scaled.webp" },
  { src: "/assets/img/gallery/ugi-website-staff-together-01.webp" },
  { src: "/assets/img/gallery/ugi-website-staff-together-09.webp" },
  { src: "/assets/img/gallery/ugi-website-staff-together-08.webp" },
  { src: "/assets/img/gallery/ugi-website-staff-together-09.webp" },
];

const Gallery = () => {
  const [activeImg, setActiveImg] = useState(null);

  const bannerRef = useRef(null);
  const galleryRef = useRef(null);

  useEffect(() => {
    const escHandler = (e) => {
      if (e.key === "Escape") setActiveImg(null);
    };
    window.addEventListener("keydown", escHandler);

    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: bannerRef.current,
        start: "top top",
        end: "+=100%",
        scrub: true,
        pin: false,
      },
    });

    tl.to(bannerRef.current, {
      rotateX: -75,
      transformOrigin: "top center",
      ease: "power2.out",
    }).fromTo(
      galleryRef.current,
      { opacity: 0, y: 100 },
      { opacity: 1, y: 0 },
      "<"
    );

    return () => {
      window.removeEventListener("keydown", escHandler);
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className="gallery-page">

      <div className="banner-wrapper" ref={bannerRef}>
        <CinematicBanner
          image="/assets/img/ugi-banner-events.jpg"
          eyebrow="UGI — Gallery"
          title={<> Our Journey <br />In Moments </>}
          sub="Moments that shaped us, memories that stay forever."
          height="100vh"
        />
      </div>

      <section className="gallery-section" ref={galleryRef}>

        {/* Moving Background Wall */}
        <div className="gallery-collage">
          {Array.from({ length: 8 }).map((_, rowIndex) => (
            <div
              key={rowIndex}
              className={`collage-row ${
                rowIndex % 2 === 0 ? "scroll-left" : "scroll-right"
              }`}
            >
              {[...images, ...images].map((item, i) => (
                <img key={rowIndex + "-" + i} src={item.src} alt="" />
              ))}
            </div>
          ))}
        </div>

        {/* Foreground Grid */}
        <div className="gallery-grid">
          {images.map((item, index) => (
            <div
              key={index}
              className="gallery-item"
              onClick={() => setActiveImg(item.src)}
            >
              <img src={item.src} alt={`Project ${index + 1}`} />
            </div>
          ))}
        </div>
      </section>

      {activeImg && (
        <div className="gallery-modal" onClick={() => setActiveImg(null)}>
          <div
            className="modal-img-wrapper"
            onClick={(e) => e.stopPropagation()}
          >
            <img src={activeImg} alt="Preview" />
          </div>
        </div>
      )}

    </div>
  );
};

export default Gallery;