import React, { useState, useEffect } from "react";
import "./Gallery.css";




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

  // ESC key closes modal
  useEffect(() => {
    const escHandler = (e) => {
      if (e.key === "Escape") setActiveImg(null);
    };
    window.addEventListener("keydown", escHandler);
    return () => window.removeEventListener("keydown", escHandler);
  }, []);

  return (
    <>

 {/* ================= GALLERY BANNER ================= */}
      <section className="career-banner">
        <div
          className="career-banner-bg"
          style={{
            backgroundImage: `
             
              url(/assets/img/ugi-banner-Gallery.jpg)
            `,
          }}
        />

        <div className="career-banner-inner reveal active">
          <span className="career-badge">UGI - GALLERY</span>

          <h3 className="career-title">
           Our Journey In Moments    
          </h3>

          <div className="career-banner-line" />
        </div>
      </section>
      {/* ================= GALLERY GRID  ================= */}
      <section className="gallery-section">
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

      {/* ================= MODAL ================= */}
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
    </>
  );
};

export default Gallery;
