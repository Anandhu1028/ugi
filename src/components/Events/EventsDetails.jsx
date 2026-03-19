import { useEffect, useRef } from "react";
import { useParams, Link, Navigate } from "react-router-dom";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PREVIOUS_EVENTS } from "./Events";
import "./EventDetails.css";

gsap.registerPlugin(ScrollTrigger);

const EventDetails = () => {
  const { slug } = useParams();
  const containerRef = useRef(null);
  const event = PREVIOUS_EVENTS.find((e) => e.slug === slug);

  useEffect(() => {
    if (!event) return;

    let ctx = gsap.context(() => {
      gsap.from(".evd-header-content > *", {
        y: 55,
        opacity: 0,
        duration: 1.1,
        stagger: 0.16,
        ease: "power3.out",
        delay: 0.2,
      });

      gsap.from(".evd-main > *", {
        y: 40,
        opacity: 0,
        duration: 0.9,
        stagger: 0.15,
        ease: "power2.out",
        scrollTrigger: { trigger: ".evd-layout", start: "top 80%" },
      });

      gsap.from(".evd-gallery-img", {
        scale: 0.93,
        opacity: 0,
        duration: 0.7,
        stagger: 0.1,
        ease: "power2.out",
        scrollTrigger: { trigger: ".evd-gallery", start: "top 80%" },
      });

      gsap.from(".evd-sidebar-card", {
        x: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.12,
        ease: "power2.out",
        scrollTrigger: { trigger: ".evd-sidebar", start: "top 78%" },
      });
    }, containerRef);

    return () => ctx.revert();
  }, [slug, event]);

  if (!event) {
    return <Navigate to="/events" replace />;
  }

  return (
    <div ref={containerRef} className="evd-page">
      {/* ── Cinematic Header ─────────────────────────────── */}
      <section
        className="evd-header"
        style={{ backgroundImage: `url(${event.thumbnail})` }}
      >
        <div className="evd-header-overlay" />
        <div className="evd-header-vignette" />

        <div className="container">
          <div className="evd-header-content">
            {/* Breadcrumb */}
            <nav className="evd-breadcrumb">
              <Link to="/">Home</Link>
              <span>›</span>
              <Link to="/events">Events</Link>
              <span>›</span>
              <span className="evd-breadcrumb-current">{event.title}</span>
            </nav>

            {/* Badge */}
            <span className="evd-header-badge">UGI — Events</span>

            {/* Title */}
            <h1 className="evd-header-title">{event.title}</h1>

            {/* Meta strip */}
            <div className="evd-meta">
              <div className="evd-meta-item">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <rect
                    x="1"
                    y="2"
                    width="14"
                    height="13"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="1.4"
                  />
                  <path
                    d="M5 1v2M11 1v2M1 7h14"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                  />
                </svg>
                <span>{event.details.eventDate}</span>
              </div>
              <div className="evd-meta-item">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle
                    cx="8"
                    cy="6.5"
                    r="2.5"
                    stroke="currentColor"
                    strokeWidth="1.4"
                  />
                  <path
                    d="M8 1C5.2 1 2 3.3 2 7c0 5 6 9 6 9s6-4 6-9c0-3.7-3.2-6-6-6z"
                    stroke="currentColor"
                    strokeWidth="1.4"
                  />
                </svg>
                <span>{event.details.eventPlace}</span>
              </div>
              <div className="evd-meta-item">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <circle
                    cx="8"
                    cy="8"
                    r="7"
                    stroke="currentColor"
                    strokeWidth="1.4"
                  />
                  <path
                    d="M8 4v4l2.5 2.5"
                    stroke="currentColor"
                    strokeWidth="1.4"
                    strokeLinecap="round"
                  />
                </svg>
                <span>By {event.details.eventBy}</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Content ──────────────────────────────────────── */}
      <section className="evd-content-section">
        <div className="container">
          <div className="evd-layout">
            {/* ── Main ───────────────────────────────────── */}
            <main className="evd-main">
              {/* About */}
              <div className="evd-section">
                <h2 className="evd-section-title">About The Event</h2>
                {event.longDescription.map((para, i) => (
                  <p key={i} className="evd-paragraph">
                    {para}
                  </p>
                ))}
              </div>

              {/* Gallery */}
              <div className="evd-section">
                <h2 className="evd-section-title">Event Gallery</h2>
                <div className="evd-gallery">
                  {event.gallery.map((img, i) => (
                    <div
                      key={i}
                      className="evd-gallery-img"
                      style={{ backgroundImage: `url(${img})` }}
                    >
                      <div className="evd-gallery-hover">
                        <div className="evd-zoom-btn">
                          <svg
                            width="28"
                            height="28"
                            viewBox="0 0 24 24"
                            fill="none"
                          >
                            <circle
                              cx="11"
                              cy="11"
                              r="8"
                              stroke="white"
                              strokeWidth="1.8"
                            />
                            <path
                              d="M21 21l-4.35-4.35M11 8v6M8 11h6"
                              stroke="white"
                              strokeWidth="1.8"
                              strokeLinecap="round"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </main>

            {/* ── Sidebar ────────────────────────────────── */}
            <aside className="evd-sidebar">
              {/* Event Info */}
              <div className="evd-sidebar-card">
                <h3 className="evd-card-title">Event Information</h3>
                <div className="evd-info-list">
                  {[
                    {
                      icon: "📅",
                      label: "Date",
                      value: event.details.eventDate,
                    },
                    {
                      icon: "📍",
                      label: "Location",
                      value: event.details.eventPlace,
                    },
                    {
                      icon: "🏢",
                      label: "Organised By",
                      value: event.details.eventBy,
                    },
                  ].map((item) => (
                    <div className="evd-info-row" key={item.label}>
                      <span className="evd-info-icon">{item.icon}</span>
                      <div className="evd-info-text">
                        <span className="evd-info-label">{item.label}</span>
                        <span className="evd-info-value">{item.value}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Chief Guests */}
              {event.details.chiefGuests.length > 0 && (
                <div className="evd-sidebar-card">
                  <h3 className="evd-card-title">Chief Guests</h3>
                  <ul className="evd-guests">
                    {event.details.chiefGuests.map((g, i) => (
                      <li key={i} className="evd-guest-item">
                        <span className="evd-guest-star">✦</span>
                        <span>{g}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Share */}
              <div className="evd-sidebar-card">
                <h3 className="evd-card-title">Share Event</h3>
                <div className="evd-share">
                  {[
                    {
                      name: "facebook",
                      color: "#1877f2",
                      path: "M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z",
                    },
                    {
                      name: "twitter",
                      color: "#1da1f2",
                      path: "M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z",
                    },
                    {
                      name: "whatsapp",
                      color: "#25d366",
                      path: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.304-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z",
                    },
                  ].map((s) => (
                    <a
                      key={s.name}
                      href="#"
                      className="evd-share-btn"
                      style={{ background: s.color }}
                      aria-label={s.name}
                    >
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d={s.path} />
                      </svg>
                    </a>
                  ))}
                </div>
              </div>

              {/* Back */}
              <Link to="/events" className="evd-back-btn">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path
                    d="M11 4L6 9l5 5"
                    stroke="currentColor"
                    strokeWidth="1.8"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                Back to Events
              </Link>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
};

export default EventDetails;
