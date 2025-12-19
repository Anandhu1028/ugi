import { useEffect } from "react";
import "./Events.css";

/* ================= DEMO DATA ================= */
const PREVIOUS_EVENTS = [
  {
    title: "UGI Annual Meetup 2024",
    date: "March 2024",
    img: "/assets/img/events/event1.jpg",
    desc: "An inspiring annual gathering bringing together educators, leaders, and innovators.",
  },
  {
    title: "Education Excellence Summit",
    date: "January 2024",
    img: "/assets/img/events/event2.jpg",
    desc: "A platform discussing the future of education and global learning standards.",
  },
  {
    title: "Digital Innovation Talk",
    date: "November 2023",
    img: "/assets/img/events/event3.jpg",
    desc: "Exploring emerging technologies and digital transformation strategies.",
  },
  {
    title: "Student Guidance Workshop",
    date: "September 2023",
    img: "/assets/img/events/event4.jpg",
    desc: "Focused guidance sessions empowering graduating students.",
  },
  {
    title: "Startup Networking Day",
    date: "July 2023",
    img: "/assets/img/events/event5.jpg",
    desc: "Connecting startups, mentors, and investors under one roof.",
  },
  {
    title: "Creative Minds Conference",
    date: "May 2023",
    img: "/assets/img/events/event6.jpg",
    desc: "Celebrating creativity, innovation, and collaborative thinking.",
  },
];

const EVENT_GALLERY = [
  "/assets/img/events/gallery1.jpg",
  "/assets/img/events/gallery2.jpg",
  "/assets/img/events/gallery3.jpg",
  "/assets/img/events/gallery4.jpg",
  "/assets/img/events/gallery5.jpg",
  "/assets/img/events/gallery6.jpg",
  "/assets/img/events/gallery7.jpg",
  "/assets/img/events/gallery8.jpg",
];

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

  return (
    <>
      {/* ================= PAGE HEADER ================= */}
      <section
        className="cs_page_header"
        style={{ backgroundImage: "url(/assets/img/page_header_1.jpeg)" }}
      >
        <div className="container">
          <nav aria-label="breadcrumb">
            <ol className="breadcrumb">
              <li className="breadcrumb-item">
                <a href="/">Home</a>
              </li>
              <li className="breadcrumb-item active">Events</li>
            </ol>
          </nav>
          <h1>Events</h1>
        </div>
      </section>

      {/* ================= PREVIOUS EVENTS ================= */}
      <section className="events-section">
        <div className="container">
          <div className="section-heading reveal">
            <span>Memories That Matter</span>
            <h2>Our Previous Events</h2>
          </div>

          <div className="row">
            {PREVIOUS_EVENTS.map((event, i) => (
              <div key={i} className="col-lg-4 col-md-6">
                <div className="event-card reveal">
                  <div
                    className="event-thumb"
                    style={{ backgroundImage: `url(${event.img})` }}
                  >
                    <div className="event-overlay">
                      <p>{event.desc}</p>
                      <a href="/event-details" className="event-btn">
                        View Details
                      </a>
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

      {/* ================= EVENT GALLERY ================= */}
      <section className="events-gallery">
        <div className="container">
          <div className="section-heading reveal">
            <span>Captured Moments</span>
            <h2>Event Gallery</h2>
          </div>

          <div className="gallery-grid">
            {EVENT_GALLERY.map((img, i) => (
              <div
                key={i}
                className="gallery-item reveal"
                style={{ backgroundImage: `url(${img})` }}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Events;
