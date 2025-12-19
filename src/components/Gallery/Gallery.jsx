import React, { useState, useEffect } from "react";
import "./Gallery.css";

const images = [
  { src: "/assets/img/project_1.jpeg" },
  { src: "/assets/img/project_2.jpeg" },
  { src: "/assets/img/project_3.jpeg" },
  { src: "/assets/img/project_4.jpeg" },
  { src: "/assets/img/project_5.jpeg" },
  { src: "/assets/img/project_6.jpeg" },
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
      {/* ================= GALLERY GRID ================= */}
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
