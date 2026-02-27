import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CinematicBanner from "../CinematicBanner";
import "./Events.css";

gsap.registerPlugin(ScrollTrigger);

/* ── Data ────────────────────────────────────────────────── */
export const PREVIOUS_EVENTS = [
  {
    slug: "brillianz-10th-anniversary",
    title: "Brillianz 10th Anniversary",
    date: "7 May 2022",
    thumbnail: "/assets/img/events/ugi-website-events-10th-anniversary-02.webp",
    shortDesc: "A decade of shaping leaders through distance learning, celebrated with grandeur.",
    longDescription: [
      "For ten years, Brillianz Education has been creating outstanding leaders, and they continue to educate and motivate everyone who wants to pursue distance learning.",
      "This prestigious institution's ten-year anniversary was celebrated in opulent style, along with well-known figures who served as role models for contemporary society.",
    ],
    details: {
      eventName: "Brillianz 10th Anniversary",
      eventDate: "7 May 2022",
      eventPlace: "Crowne Plaza, Deira, Dubai",
      eventBy: "Brillianz",
      chiefGuests: ["Mr. Kannur Sharif","Ms. Sarayu","Ms. Lakshmi Jayan","Mr. Yousuf Karakkad","Rijiya Riyas","Fasila Banu","Sagar"],
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
    shortDesc: "The 10th Convocation reflected the bright futures of students who excelled through hard work.",
    longDescription: ["The 10th Convocation celebrated the success of students who achieved excellence through dedication and hard work."],
    details: {
      eventName: "10th Convocation Ceremony",
      eventDate: "14 September 2022",
      eventPlace: "Atlantis, The Palm, Dubai",
      eventBy: "Brillianz",
      chiefGuests: ["MJ5","Ranjini Haridas","Anwar Sadath","Sumi Aravind","Yousuf Karakkad","Harsha Chandran"],
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
    shortDesc: "Onam celebration honouring Keralite culture with music, dance, and joy.",
    longDescription: ["Onam was celebrated jointly by Brillianz Education and Inspire University, connecting everyone to their cultural roots."],
    details: {
      eventName: "Ponnona Aghosham 2022",
      eventDate: "3 September 2022",
      eventPlace: "Shabab Al Ahli Club Indoor, Sheikh Maktoum Bin Mohamed Sports Hall",
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
    shortDesc: "A vibrant Onam celebration in Alleppey with flowers, music, and tradition.",
    longDescription: ["To commemorate Onam in Alleppey, the UGI team celebrated with flowers, dance, and traditional joy."],
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
    shortDesc: "A relaxing staff gathering filled with bonding, laughter, and energy.",
    longDescription: ["The UGI staff gathering allowed the team to unwind and reconnect in an elegant environment."],
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
    longDescription: ["The Tecswan Convocation honoured students with certifications and awards."],
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
  "/assets/img/events/ugi-website-events-10th-anniversary-02.webp",
  "/assets/img/events/ugi-website-events-10th-anniversary-05.webp",
  "/assets/img/events/ugi-website-events-10th-anniversary-15-scaled.webp",
  "/assets/img/events/ugi-website-events-10th-anniversary-09-scaled.webp",
  "/assets/img/events/ugi-website-events-10th-anniversary-14-scaled.webp",
  "/assets/img/events/ugi-website-event-convocation-07.webp",
  "/assets/img/events/ugi-website-onam-celebration-06.webp",
];

/* ── Component ───────────────────────────────────────────── */
const Events = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.from(".event-card", {
        y: 60, opacity: 0, duration: 0.8, stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: { trigger: ".events-grid", start: "top 80%" },
      });
      gsap.from(".gallery-item", {
        scale: 0.9, opacity: 0, duration: 0.7, stagger: 0.08,
        ease: "power2.out",
        scrollTrigger: { trigger: ".events-gallery-grid", start: "top 80%" },
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef}>
      {/* ── Banner ─────────────────────────────────────────── */}
      <CinematicBanner
        image="/assets/img/ugi-banner-events.jpg"
        eyebrow="UGI — Events"
        title={<>Laughter's to<br />Reminisce</>}
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
                {/* Thumbnail */}
                <div
                  className="event-thumb"
                  style={{ backgroundImage: `url(${event.thumbnail})` }}
                >
                  <div className="event-thumb-overlay">
                    <p>{event.shortDesc}</p>
                    <Link to={`/events/${event.slug}`} className="event-view-btn">
                      <span>View Details</span>
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </Link>
                  </div>
                </div>

                {/* Info */}
                <div className="event-info">
                  <h3>{event.title}</h3>
                  <span className="event-date">
                    <svg width="13" height="13" viewBox="0 0 13 13" fill="none">
                      <rect x="1" y="2" width="11" height="10" rx="2" stroke="currentColor" strokeWidth="1.2"/>
                      <path d="M4 1v2M9 1v2M1 6h11" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
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
      <section className="events-gallery-section">
        <div className="container">
          <div className="events-section-header gsap-reveal">
            <span className="section-eyebrow">Captured Moments</span>
            <h2 className="section-title">Event Gallery</h2>
            <div className="events-header-line" />
          </div>

          <div className="events-gallery-grid">
            {GALLERY_IMAGES.map((img, i) => (
              <div className="gallery-item" key={i}>
                <img src={img} alt={`Event moment ${i + 1}`} loading="lazy" />
                <div className="gallery-item-overlay" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Events;