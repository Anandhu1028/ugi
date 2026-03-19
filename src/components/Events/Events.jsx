import { useEffect, useRef, useState, useCallback } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CinematicBanner from "../CinematicBanner";
import "./Events.css";

gsap.registerPlugin(ScrollTrigger);

/* ── Data ────────────────────────────────────────────────── */
export const PREVIOUS_EVENTS = [
  {
    slug: "Onam-2024",
    title: "Celibrating - Onam 2024",
    date: "21 September 2024",
    thumbnail: "/assets/img/events/Onam1.jpeg",
    shortDesc:
      "Onam celebration honouring Keralite culture with music, dance, and joy.",
    longDescription: [
      "Onam was celebrated jointly by UGI, connecting everyone to their cultural roots.",
    ],
    details: {
      eventName: "Ponnona Aghosham 2024",
      eventDate: "21 September 2024",
      eventPlace:
        "Shabab Al Ahli Club Indoor, Sheikh Maktoum Bin Mohamed Sports Hall",
      eventBy: "UGI",
      chiefGuests: [],
    },
    gallery: [
      "/assets/img/events/Onam1.jpeg",
      "/assets/img/events/Onam2.jpeg",
      "/assets/img/events/Onam3.jpeg",
      "/assets/img/events/Onam4.jpeg",
      "/assets/img/events/Onam5.jpeg",
      "/assets/img/events/Onam6.jpeg",
      "/assets/img/events/Onam7.jpeg",
      "/assets/img/events/Onam8.jpeg",
      "/assets/img/events/Onam9.jpeg",
      "/assets/img/events/Onam10.jpeg",
      "/assets/img/events/Onam11.jpeg",
      "/assets/img/events/Onam12.jpeg",
      "/assets/img/events/Onam13.jpeg",
      "/assets/img/events/Onam14.jpeg",
      "/assets/img/events/Onam15.jpeg",
    ],
  },
  {
    slug: "brillianz-10th-anniversary",
    title: "Brillianz 10th Anniversary",
    date: "7 May 2022",
    thumbnail: "/assets/img/events/ugi-website-events-10th-anniversary-02.webp",
    shortDesc:
      "A decade of shaping leaders through distance learning, celebrated with grandeur.",
    longDescription: [
      "For ten years, Brillianz Education has been creating outstanding leaders, and they continue to educate and motivate everyone who wants to pursue distance learning.",
      "This prestigious institution's ten-year anniversary was celebrated in opulent style, along with well-known figures who served as role models for contemporary society.",
    ],
    details: {
      eventName: "Brillianz 10th Anniversary",
      eventDate: "7 May 2022",
      eventPlace: "Crowne Plaza, Deira, Dubai",
      eventBy: "Brillianz",
      chiefGuests: [
        "Mr. Kannur Sharif",
        "Ms. Sarayu",
        "Ms. Lakshmi Jayan",
        "Mr. Yousuf Karakkad",
        "Rijiya Riyas",
        "Fasila Banu",
        "Sagar",
      ],
    },
    gallery: [
      "/assets/img/events/ugi-website-events-10th-anniversary-02.webp",
      "/assets/img/events/ugi-website-events-10th-anniversary-05.webp",
      "/assets/img/events/ugi-website-events-10th-anniversary-15-scaled.webp",
      "/assets/img/events/ugi-website-events-10th-anniversary-09-scaled.webp",
    ],
  },
  {
    slug: "brillianz-10th-convocation",
    title: "Brillianz 10th Convocation",
    date: "14 September 2022",
    thumbnail: "/assets/img/events/ugi-website-event-convocation.webp",
    shortDesc:
      "The 10th Convocation reflected the bright futures of students who excelled through hard work.",
    longDescription: [
      "The 10th Convocation celebrated the success of students who achieved excellence through dedication and hard work.",
    ],
    details: {
      eventName: "10th Convocation Ceremony",
      eventDate: "14 September 2022",
      eventPlace: "Atlantis, The Palm, Dubai",
      eventBy: "Brillianz",
      chiefGuests: [
        "MJ5",
        "Ranjini Haridas",
        "Anwar Sadath",
        "Sumi Aravind",
        "Yousuf Karakkad",
        "Harsha Chandran",
      ],
    },
    gallery: [
      "/assets/img/events/ugi-website-event-convocation-01.webp",
      "/assets/img/events/ugi-website-event-convocation-15-scaled-1000x667.webp",
      "/assets/img/events/ugi-website-event-convocation-07.webp",
      "/assets/img/events/ugi-website-event-convocation-14-scaled-1000x667.webp",
    ],
  },
  {
    slug: "ponnona-aghosham-2022",
    title: "Ponnona Aghosham 2022",
    date: "3 September 2022",
    thumbnail: "/assets/img/events/ugi-website-brillianz-onam-01.webp",
    shortDesc:
      "Onam celebration honouring Keralite culture with music, dance, and joy.",
    longDescription: [
      "Onam was celebrated jointly by Brillianz Education and Inspire University, connecting everyone to their cultural roots.",
    ],
    details: {
      eventName: "Ponnona Aghosham 2022",
      eventDate: "3 September 2022",
      eventPlace:
        "Shabab Al Ahli Club Indoor, Sheikh Maktoum Bin Mohamed Sports Hall",
      eventBy: "Brillianz & Inspire",
      chiefGuests: [],
    },
    gallery: [
      "/assets/img/events/ugi-website-brillianz-onam-01.webp",
      "/assets/img/events/ugi-website-brillianz-onam-02-1000x667.webp",
      "/assets/img/events/ugi-website-brillianz-onam-08-1000x667.webp",
      "/assets/img/events/ugi-website-brillianz-onam-07-1000x667.webp",
      "/assets/img/events/ugi-website-brillianz-onam-04-1000x667.webp",
      "/assets/img/events/ugi-website-brillianz-onam-05-1000x667.webp",
    ],
  },
  {
    slug: "aarpo-irro",
    title: "Aarpo Irro",
    date: "10 September 2022",
    thumbnail: "/assets/img/events/ugi-website-onam-celebration-06.webp",
    shortDesc:
      "A vibrant Onam celebration in Alleppey with flowers, music, and tradition.",
    longDescription: [
      "To commemorate Onam in Alleppey, the UGI team celebrated with flowers, dance, and traditional joy.",
    ],
    details: {
      eventName: "Aarpo Irro",
      eventDate: "10 September 2022",
      eventPlace: "Alleppey",
      eventBy: "UGI",
      chiefGuests: ["Chairman", "HR Director"],
    },
    gallery: [
      "/assets/img/events/ugi-website-onam-celebration-06.webp",
      "/assets/img/events/ugi-website-onam-celebration-14-1000x667.webp",
      "/assets/img/events/ugi-website-onam-celebration-05-1000x667.webp",
      "/assets/img/events/ugi-website-onam-celebration-11-1000x667.webp",
      "/assets/img/events/ugi-website-onam-celebration-07-1000x667.webp",
      "/assets/img/events/ugi-website-onam-celebration-10.webp",
    ],
  },
  {
    slug: "ugi-staff-get-together",
    title: "UGI Staff Get Together",
    date: "1 August 2022",
    thumbnail: "/assets/img/events/ugi-website-staff-together-08.webp",
    shortDesc:
      "A relaxing staff gathering filled with bonding, laughter, and energy.",
    longDescription: [
      "The UGI staff gathering allowed the team to unwind and reconnect in an elegant environment.",
    ],
    details: {
      eventName: "UGI Staff Get Together",
      eventDate: "1 August 2022",
      eventPlace: "Hotel Dunes, Cochin",
      eventBy: "UGI",
      chiefGuests: ["Chairman"],
    },
    gallery: [
      "/assets/img/events/ugi-website-staff-together-01-1000x667.webp",
      "/assets/img/events/ugi-website-staff-together-03-1000x667.webp",
      "/assets/img/events/ugi-website-staff-together-04-1000x667.webp",
      "/assets/img/events/ugi-website-staff-together-09-1000x667.webp",
      "/assets/img/events/ugi-website-staff-together-08.webp",
      "/assets/img/events/ugi-website-staff-together-07-1000x667.webp",
    ],
  },
  {
    slug: "tecswan-convocation",
    title: "Tecswan Convocation",
    date: "6 March 2021",
    thumbnail: "/assets/img/events/Untitled-3-02.webp",
    shortDesc: "Celebrating student success and excellence in IT education.",
    longDescription: [
      "The Tecswan Convocation honoured students with certifications and awards.",
    ],
    details: {
      eventName: "Tecswan Convocation",
      eventDate: "6 March 2021",
      eventPlace: "Hotel Sidra Pristine, Kaloor, India",
      eventBy: "Tecswan",
      chiefGuests: ["Chairman", "HR Director"],
    },
    gallery: [
      "/assets/img/events/Untitled-3-01.webp",
      "/assets/img/events/Untitled-3-02.webp",
    ],
  },
];

const GALLERY_IMAGES = [
  "/assets/img/gallery/IMG_2385.JPG.jpeg",
  "/assets/img/gallery/01_Group Photo Edited_1.jpg",
  "/assets/img/events/Onam1.jpeg",
  "/assets/img/events/Onam2.jpeg",
  "/assets/img/events/Onam7.jpeg",
  "/assets/img/events/Onam11.jpeg",
  "/assets/img/events/ugi-website-events-10th-anniversary-02.webp",
  "/assets/img/events/ugi-website-events-10th-anniversary-05.webp",
  "/assets/img/events/ugi-website-events-10th-anniversary-15-scaled.webp",
  "/assets/img/events/ugi-website-events-10th-anniversary-09-scaled.webp",
  "/assets/img/events/ugi-website-events-10th-anniversary-14-scaled.webp",
  "/assets/img/events/ugi-website-event-convocation-07.webp",
  "/assets/img/events/ugi-website-onam-celebration-06.webp",
];

/* ── Lightbox Component ──────────────────────────────────── */
const Lightbox = ({ images, activeIndex, onClose, onPrev, onNext }) => {
  useEffect(() => {
    const handleKey = (e) => {
      if (e.key === "Escape") onClose();
      if (e.key === "ArrowLeft") onPrev();
      if (e.key === "ArrowRight") onNext();
    };
    document.addEventListener("keydown", handleKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", handleKey);
      document.body.style.overflow = "";
    };
  }, [onClose, onPrev, onNext]);

  useEffect(() => {
    gsap.fromTo(
      ".lightbox-img",
      { scale: 0.88, opacity: 0 },
      { scale: 1, opacity: 1, duration: 0.45, ease: "power3.out" },
    );
  }, [activeIndex]);

  return (
    <div className="lightbox-backdrop" onClick={onClose}>
      <div className="lightbox-inner" onClick={(e) => e.stopPropagation()}>
        <button className="lightbox-close" onClick={onClose} aria-label="Close">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
            <path
              d="M3 3l14 14M17 3L3 17"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>

        <button
          className="lightbox-nav lightbox-prev"
          onClick={onPrev}
          aria-label="Previous"
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path
              d="M14 4l-7 7 7 7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <img
          className="lightbox-img"
          src={images[activeIndex]}
          alt={`Gallery ${activeIndex + 1}`}
        />

        <button
          className="lightbox-nav lightbox-next"
          onClick={onNext}
          aria-label="Next"
        >
          <svg width="22" height="22" viewBox="0 0 22 22" fill="none">
            <path
              d="M8 4l7 7-7 7"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>

        <div className="lightbox-counter">
          {activeIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  );
};

/* ── Component ───────────────────────────────────────────── */
const Events = () => {
  const containerRef = useRef(null);
  const galleryRef = useRef(null);
  const [lightboxIndex, setLightboxIndex] = useState(null);

  const openLightbox = useCallback((i) => setLightboxIndex(i), []);
  const closeLightbox = useCallback(() => setLightboxIndex(null), []);
  const prevImage = useCallback(
    () =>
      setLightboxIndex(
        (i) => (i - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length,
      ),
    [],
  );
  const nextImage = useCallback(
    () => setLightboxIndex((i) => (i + 1) % GALLERY_IMAGES.length),
    [],
  );

  /* ── Magnetic tilt on gallery items ── */
  useEffect(() => {
    const items = galleryRef.current?.querySelectorAll(".gallery-item");
    if (!items) return;

    const handlers = [];
    items.forEach((item) => {
      const onMove = (e) => {
        const rect = item.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / rect.width - 0.5) * 16;
        const y = ((e.clientY - rect.top) / rect.height - 0.5) * -16;
        gsap.to(item, {
          rotateY: x,
          rotateX: y,
          scale: 1.05,
          duration: 0.35,
          ease: "power2.out",
          transformPerspective: 700,
        });
      };
      const onLeave = () => {
        gsap.to(item, {
          rotateY: 0,
          rotateX: 0,
          scale: 1,
          duration: 0.55,
          ease: "elastic.out(1, 0.5)",
        });
      };
      item.addEventListener("mousemove", onMove);
      item.addEventListener("mouseleave", onLeave);
      handlers.push({ item, onMove, onLeave });
    });
    return () =>
      handlers.forEach(({ item, onMove, onLeave }) => {
        item.removeEventListener("mousemove", onMove);
        item.removeEventListener("mouseleave", onLeave);
      });
  }, []);

  useEffect(() => {
    let ctx = gsap.context(() => {
      /* Event cards entrance */
      gsap.from(".event-card", {
        y: 60,
        opacity: 0,
        duration: 0.8,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: { trigger: ".events-grid", start: "top 80%" },
      });

      /* Gallery section header — split word reveal */
      gsap.from(".gallery-eyebrow-text", {
        y: 30,
        opacity: 0,
        duration: 0.7,
        ease: "power3.out",
        scrollTrigger: { trigger: ".events-gallery-section", start: "top 80%" },
      });
      gsap.from(".gallery-title-word", {
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: "power3.out",
        scrollTrigger: { trigger: ".events-gallery-section", start: "top 80%" },
        delay: 0.2,
      });
      gsap.from(".gallery-header-line", {
        scaleX: 0,
        duration: 0.8,
        ease: "power3.out",
        transformOrigin: "left center",
        scrollTrigger: { trigger: ".events-gallery-section", start: "top 75%" },
        delay: 0.4,
      });

      /* Floating orb parallax */
      gsap.to(".gallery-orb-1", {
        y: -80,
        ease: "none",
        scrollTrigger: {
          trigger: ".events-gallery-section",
          start: "top bottom",
          end: "bottom top",
          scrub: 1.5,
        },
      });
      gsap.to(".gallery-orb-2", {
        y: 60,
        ease: "none",
        scrollTrigger: {
          trigger: ".events-gallery-section",
          start: "top bottom",
          end: "bottom top",
          scrub: 2,
        },
      });

      /* Gallery items — clip-path curtain reveal */
      gsap.from(".gallery-item", {
        clipPath: "inset(100% 0% 0% 0%)",
        opacity: 0,
        duration: 0.85,
        stagger: { amount: 0.9, from: "start" },
        ease: "power4.out",
        scrollTrigger: { trigger: ".events-gallery-grid", start: "top 78%" },
      });

      /* Count-up shimmer on section label */
      gsap.fromTo(
        ".gallery-count-badge",
        { opacity: 0, scale: 0.6 },
        {
          opacity: 1,
          scale: 1,
          duration: 0.6,
          ease: "back.out(1.7)",
          scrollTrigger: {
            trigger: ".events-gallery-section",
            start: "top 75%",
          },
          delay: 0.6,
        },
      );
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef}>
      {/* ── Banner ─────────────────────────────────────────── */}
      <CinematicBanner
        image="/assets/img/ugi-banner-events.jpg"
        eyebrow="UGI — Events"
        title={
          <>
            Laughter's to
            <br />
            Reminisce
          </>
        }
        sub="Moments that shaped us, memories that stay forever."
        height="88vh"
      />

      {/* ── Previous Events ──────────────────────────────── */}
      <section className="events-list-section">
        <div className="container">
          <div className="events-section-header gsap-reveal">
            <span className="section-eyebrow">Memories That Matter</span>
            <h2 className="section-title">Our Previous Events</h2>
            <div className="events-header-line" />
          </div>

          <div className="events-grid">
            {PREVIOUS_EVENTS.map((event) => (
              <article key={event.slug} className="event-card">
                <div
                  className="event-thumb"
                  style={{ backgroundImage: `url(${event.thumbnail})` }}
                >
                  <div className="event-thumb-overlay">
                    <p>{event.shortDesc}</p>
                    <Link
                      to={`/events/${event.slug}`}
                      className="event-view-btn"
                    >
                      <span>View Details</span>
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                      >
                        <path
                          d="M2 7h10M8 3l4 4-4 4"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>
                <div className="event-info">
                  <h3>{event.title}</h3>
                  <span className="event-date">
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                      <rect
                        x="1"
                        y="2"
                        width="11"
                        height="10"
                        rx="2"
                        stroke="currentColor"
                        strokeWidth="1.2"
                      />
                      <path
                        d="M4 1v2M9 1v2M1 6h11"
                        stroke="currentColor"
                        strokeWidth="1.2"
                        strokeLinecap="round"
                      />
                    </svg>
                    {event.date}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* ── Event Gallery ─────────────────────────────────── */}
      <section className="events-gallery-section" ref={galleryRef}>
        {/* Decorative ambient orbs */}
        <div className="gallery-orb gallery-orb-1" />
        <div className="gallery-orb gallery-orb-2" />

        <div className="container">
          {/* Animated Header */}
          <div className="events-section-header gallery-section-header gsap-reveal">
            <div className="gallery-eyebrow-wrap">
              <span className="section-eyebrow gallery-eyebrow-text">
                Captured Moments
              </span>
            </div>

            <h2 className="section-title gallery-title">
              <span className="gallery-title-word">Event</span>
              <span className="gallery-title-word gallery-title-accent">
                {" "}
                Gallery
              </span>
            </h2>

            <div className="events-header-line gallery-header-line" />
          </div>

          {/* Gallery Grid */}
          <div className="events-gallery-grid">
            {GALLERY_IMAGES.map((img, i) => (
              <div
                className="gallery-item"
                key={i}
                onClick={() => openLightbox(i)}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => e.key === "Enter" && openLightbox(i)}
                aria-label={`Open image ${i + 1}`}
              >
                <img src={img} alt={`Event moment ${i + 1}`} loading="lazy" />
                <div className="gallery-item-overlay" />
                {/* Expand icon */}
                <div className="gallery-item-zoom">
                  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path
                      d="M8 3H3v5M12 3h5v5M8 17H3v-5M12 17h5v-5"
                      stroke="currentColor"
                      strokeWidth="1.8"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </div>
                {/* Shine sweep */}
                <div className="gallery-item-shine" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Lightbox ──────────────────────────────────────── */}
      {lightboxIndex !== null && (
        <Lightbox
          images={GALLERY_IMAGES}
          activeIndex={lightboxIndex}
          onClose={closeLightbox}
          onPrev={prevImage}
          onNext={nextImage}
        />
      )}
    </div>
  );
};

export default Events;
