import { useEffect } from "react";
import { Link } from "react-router-dom";
import "./Events.css";







/* ================= EVENTS DATA ================= */
export const PREVIOUS_EVENTS = [
    {
    slug: "brillianz-10th-anniversary",
    title: "BRILLIANZ 10TH ANNIVERSARY",
    date: "7 May 2022",
    thumbnail: "/assets/img/events/ugi-website-events-10th-anniversary-02.webp",
    shortDesc:
      "A decade of shaping leaders through distance learning, celebrated with grandeur.",

    longDescription: [
      "For ten years, Brillianz Education has been creating outstanding leaders, and they continue to educate and motivate everyone who wants to pursue distance learning.",
      "This prestigious institution’s ten-year anniversary was celebrated in opulent style, along with well-known figures who served as role models for contemporary society."
    ],

    details: {
      eventName: "BRILLIANZ 10TH ANNIVERSARY",
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
        "Sagar"
      ]
    },

    gallery: [
      "/assets/img/events/ugi-website-events-10th-anniversary-02.webp",
      "/assets/img/events/ugi-website-events-10th-anniversary-05.webp",
      "/assets/img/events/ugi-website-events-10th-anniversary-15-scaled.webp",
      "/assets/img/events/ugi-website-events-10th-anniversary-09-scaled.webp",
      
    ]
  },

  {
    slug: "brillianz-10th-convocation",
    title: "BRILLIANZ 10TH CONVOCATION CEREMONY",
    date: "14 September 2022",
    thumbnail: "/assets/img/events/ugi-website-event-convocation.webp",
    shortDesc:
      "The 10th Convocation reflected the bright futures of students who excelled through hard work.",

    longDescription:[
      "The 10th Convocation celebrated the success of students who achieved excellence through dedication and hard work.",
    ],

    details: {
      eventName: "10TH CONVOCATION CEREMONY",
      eventDate: "14 September 2022",
      eventPlace: "Atlantis, The Palm, Dubai",
      eventBy: "Brillianz",
      chiefGuests: [
        "MJ5",
        "Ranjini Haridas",
        "Anwar Sadath",
        "Sumi Aravind",
        "Yousuf Karakkad",
        "Harsha Chandran"
      ]
    },

    gallery: [
      "/assets/img/events/ugi-website-event-convocation-01.webp",
      "/assets/img/events/ugi-website-event-convocation-15-scaled-1000x667.webp",
      "/assets/img/events/ugi-website-event-convocation-07.webp",
      "/assets/img/events/ugi-website-event-convocation-14-scaled-1000x667.webp"
    ]
  },

  {
    slug: "ponnona-aghosham-2022",
    title: "PONNONA AGHOSHAM 2022",
    date: "3 September 2022",
    thumbnail: "/assets/img/events/ugi-website-brillianz-onam-01.webp",
    shortDesc:
      "Onam celebration honoring Keralite culture with music, dance, and joy.",

    longDescription: [
      "Onam was celebrated jointly by Brillianz Education and Inspire University, connecting everyone to their cultural roots."
    ],

    details: {
      eventName: "PONNONA AGHOSHAM 2022",
      eventDate: "3 September 2022",
      eventPlace:
        "Shabab Al Ahli Club Indoor, Sheikh Maktoum Bin Mohamed Sports Hall",
      eventBy: "Brillianz & Inspire",
      chiefGuests: []
    },

    gallery: [
      "/assets/img/events/ugi-website-brillianz-onam-01.webp",
      "/assets/img/events/ugi-website-brillianz-onam-02-1000x667.webp",
      "/assets/img/events/ugi-website-brillianz-onam-08-1000x667.webp",
      "/assets/img/events/ugi-website-brillianz-onam-07-1000x667.webp",
      "/assets/img/events/ugi-website-brillianz-onam-04-1000x667.webp",
      "/assets/img/events/ugi-website-brillianz-onam-05-1000x667.webp"
    ]
  },

  {
    slug: "aarpo-irro",
    title: "AARPO IRRO",
    date: "10 September 2022",
    thumbnail: "/assets/img/events/ugi-website-onam-celebration-06.webp",
    shortDesc:
      "A vibrant Onam celebration in Alleppey with flowers, music, and tradition.",

    longDescription: [
      "To commemorate Onam in Alleppey, the UGI team celebrated with flowers, dance, and traditional joy."
    ],

    details: {
      eventName: "AARPO IRRO",
      eventDate: "10 September 2022",
      eventPlace: "Alleppey",
      eventBy: "UGI",
      chiefGuests: ["Chairman", "HR Director"]
    },

    gallery: [
      "/assets/img/events/ugi-website-onam-celebration-06.webp",
      "/assets/img/events/ugi-website-onam-celebration-14-1000x667.webp",
      "/assets/img/events/ugi-website-onam-celebration-05-1000x667.webp",
      "/assets/img/events/ugi-website-onam-celebration-11-1000x667.webp",
      "/assets/img/events/ugi-website-onam-celebration-07-1000x667.webp",
      "/assets/img/events/ugi-website-onam-celebration-10.webp"
    ]
  },

  {
    slug: "ugi-staff-get-together",
    title: "UGI STAFF GET TOGETHER",
    date: "1 August 2022",
    thumbnail: "/assets/img/events/ugi-website-staff-together-08.webp",
    shortDesc:
      "A relaxing staff gathering filled with bonding, laughter, and energy.",

    longDescription: [
      "The UGI staff gathering allowed the team to unwind and reconnect in an elegant environment."
    ],

    details: {
      eventName: "UGI STAFF GET TOGETHER",
      eventDate: "1 August 2022",
      eventPlace: "Hotel Dunes, Cochin",
      eventBy: "UGI",
      chiefGuests: ["Chairman"]
    },

    gallery: [
      "/assets/img/events/ugi-website-staff-together-01-1000x667.webp",
      "/assets/img/events/ugi-website-staff-together-03-1000x667.webp",
      "/assets/img/events/ugi-website-staff-together-04-1000x667.webp",
      "/assets/img/events/ugi-website-staff-together-09-1000x667.webp",
      "/assets/img/events/ugi-website-staff-together-08.webp",
      "/assets/img/events/ugi-website-staff-together-07-1000x667.webp"
    ]
  },

  {
    slug: "tecswan-convocation",
    title: "TECSWAN CONVOCATION",
    date: "6 March 2021",
    thumbnail: "/assets/img/events/Untitled-3-02.webp",
    shortDesc:
      "Celebrating student success and excellence in IT education.",

    longDescription: [
      "The Tecswan Convocation honored students with certifications and awards."
    ],

    details: {
      eventName: "TECSWAN CONVOCATION",
      eventDate: "6 March 2021",
      eventPlace: "Hotel Sidra Pristine, Kaloor, India",
      eventBy: "Tecswan",
      chiefGuests: ["Chairman", "HR Director"]
    },

    gallery: [
      "/assets/img/events/Untitled-3-01.webp",
      "/assets/img/events/Untitled-3-02.webp",
   
    ]
  }
];

/* ================= GLOBAL EVENT GALLERY ================= */
const EVENT_GALLERY = PREVIOUS_EVENTS.flatMap(event => event.gallery);


const eventgalleryImages = [
   "/assets/img/events/ugi-website-events-10th-anniversary-02.webp",
      "/assets/img/events/ugi-website-events-10th-anniversary-05.webp",
      "/assets/img/events/ugi-website-events-10th-anniversary-15-scaled.webp",
      "/assets/img/events/ugi-website-events-10th-anniversary-09-scaled.webp",
      "/assets/img/events/ugi-website-events-10th-anniversary-14-scaled.webp",
      "/assets/img/events/ugi-website-event-convocation-07.webp",
      "/assets/img/events/ugi-website-onam-celebration-06.webp",
];

/* ================= COMPONENT ================= */
const Events = () => {
  useEffect(() => {
    const items = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.25 }
    );

    items.forEach(el => observer.observe(el));
  }, []);




    /* ================= SCROLL REVEAL ================= */
  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll(".reveal").forEach(el =>
      observer.observe(el)
    );

    return () => observer.disconnect();
  }, []);
  

  return (
    <>
       {/* ================= CAREER BANNER ================= */}
      <section className="career-banner">
        <div
          className="career-banner-bg"
          style={{
            backgroundImage: `
             
              url(/assets/img/ugi-banner-events.jpg)
            `,
          }}
        />

        <div className="career-banner-inner reveal active">
          <span className="career-badge">UGI - EVENTS</span>

          <h3 className="career-title">
           Laughter's to reminisce 
          </h3>

          <div className="career-banner-line" />
        </div>
      </section>

      {/* EVENTS LIST */}
      <section className="events-section">
        <div className="container">
          <div className="section-heading reveal">
            <span>Memories That Matter</span>
            <h2>Our Previous Events</h2>
          </div>

          <div className="row">
            {PREVIOUS_EVENTS.map(event => (
              <div key={event.slug} className="col-lg-4 col-md-6">
                <div className="event-card reveal">
                  <div
                    className="event-thumb"
                    style={{
                      backgroundImage: `url(${event.thumbnail})`
                    }}
                  >
                    <div className="event-overlay">
                      <p>{event.shortDesc}</p>
                      <Link
                        to={`/events/${event.slug}`}
                        className="event-btn"
                      >
                        View Details
                      </Link>
                    </div>
                  </div>

                  <div className="event-info">
                    <h3>{event.title}</h3>
                    <p>{event.date}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EVENT GALLERY (RESTORED) */}
      {/* EVENT GALLERY */}
<section className="events-gallery">
  <div className="container">
    <div className="section-heading reveal">
      <span>Captured Moments</span>
      <h2>Event Gallery</h2>
    </div>

    <div className="gallery-grid">
      {eventgalleryImages.map((img, index) => (
        <div className="gallery-item" key={index}>
          <img src={img} alt={`Event ${index + 1}`} loading="lazy" />
        </div>
      ))}
    </div>
  </div>
</section>

    </>
  );
};

export default Events;
