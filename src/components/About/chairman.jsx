import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import CinematicBanner from "../CinematicBanner";
import "./About-enhanced.css";
import TimelineSection from "./Timelinesection";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const containerRef = useRef(null);
  const growRef = useRef(null);
  const founderRef = useRef(null);
  const timelineRef = useRef(null);
  const bannerRef = useRef(null);
  const visionRef = useRef(null);

  useEffect(() => {
    const frameId = requestAnimationFrame(() => {
      const ctx = gsap.context(() => {
        /* ═══════════════════════════════════
           BANNER ENTRANCE ANIMATION
        ═══════════════════════════════════ */
        gsap.from(
          [
            ".about-banner .about-hero-badge",
            ".about-banner-title",
            ".about-banner-desc",
            ".banner-divider",
          ],
          {
            y: 32,
            opacity: 0,
            duration: 0.85,
            stagger: 0.11,
            scrollTrigger: {
              trigger: bannerRef.current,
              start: "top 70%",
              toggleActions: "play none none reverse",
            },
          },
        );

        /* ═══════════════════════════════════
           SPLIT TRANSITION — Banner → Vision
        ═══════════════════════════════════ */
        const splitTl = gsap.timeline({
          scrollTrigger: {
            trigger: bannerRef.current,
            start: "bottom 80%",
            end: "bottom 10%",
            scrub: 1.5,
          },
        });

        splitTl.to(".about-banner-left",  { xPercent: -100, ease: "power3.inOut" }, 0);
        splitTl.to(".about-banner-right", { xPercent: 100,  ease: "power3.inOut" }, 0);
        splitTl.to(".about-banner-content", { opacity: 0, scale: 0.95 }, 0);
        splitTl.to(visionRef.current, { scale: 1, opacity: 1, ease: "power3.out" }, 0.15);

        /* ═══════════════════════════════════
           VISION & MISSION
        ═══════════════════════════════════ */
        gsap.from(".section-header-vm", {
          y: 38,
          opacity: 0,
          duration: 1,
          scrollTrigger: {
            trigger: visionRef.current,
            start: "top 76%",
            toggleActions: "play none none reverse",
          },
        });

        gsap.from(".vm-modern-card", {
          y: 55,
          opacity: 0,
          duration: 0.9,
          stagger: 0.18,
          scrollTrigger: {
            trigger: ".history-grid",
            start: "top 78%",
            toggleActions: "play none none reverse",
          },
        });

        /* ═══════════════════════════════════
           STATS
        ═══════════════════════════════════ */
        gsap.from(".stat-box", {
          y: 35,
          opacity: 0,
          stagger: 0.1,
          scrollTrigger: {
            trigger: ".grow-stats",
            start: "top 85%",
            toggleActions: "play none none reverse",
          },
        });

        /* ═══════════════════════════════════
           FOUNDER + TIMELINE
        ═══════════════════════════════════ */
        gsap.fromTo(
          founderRef.current,
          { y: 130, opacity: 0, scale: 0.96 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            scrollTrigger: {
              trigger: founderRef.current,
              start: "top 92%",
              end: "top 28%",
              scrub: 1.3,
            },
          },
        );

        gsap.fromTo(
          timelineRef.current,
          { y: 160, opacity: 0, scale: 0.95 },
          {
            y: 0,
            opacity: 1,
            scale: 1,
            scrollTrigger: {
              trigger: timelineRef.current,
              start: "top 95%",
              end: "top 18%",
              scrub: 1.4,
            },
          },
        );
      }, containerRef);

      return () => ctx.revert();
    });

    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <div className="about-modern-section" ref={containerRef}>

      {/* ══════════════════════════
          CINEMATIC BANNER
      ══════════════════════════ */}
      <CinematicBanner
        image="/assets/img/ugi-banner-History-1.jpg"
        eyebrow="Our Legacy"
        title={
          <>
            A Brief History
            <br />
            of Us
          </>
        }
        sub="One vision. Multiple industries. A unified purpose."
        height="100vh"
      />

    
    
      {/* ══════════════════════════
          FOUNDER'S NOTE
      ══════════════════════════ */}
      <div ref={founderRef} className="founder-parallax-wrapper">
        <section className="story-modern">
          <div className="container">
            <div className="section-header">
              <span className="section-eyebrow">Founder's Note</span>
              <h2 className="section-title">Ajith N.S, Chairman</h2>
            </div>

            <div className="founder-intro-grid">
              <div className="founder-image">
                <div className="founder-glow" />
                <div className="founder-image-inner">
                  <img
                    src="/assets/img/about/ajith-ns-01-01-scaled.webp"
                    alt="Ajith N.S – Chairman"
                  />
                </div>
              </div>

              <div className="founder-content">
                <blockquote className="founder-quote">
                  "Every one of us is striving and working arduously to reach a
                  goal that we all share. If we both want the same thing, why
                  work alone to get it when we can work together? UGI is the
                  solution where we adhere to the principle of{" "}
                  <em>'One for all.'</em>"
                </blockquote>

                <div className="story-grid" style={{ marginTop: "36px" }}>
                  <div className="story-card">
                    <h3>Where I Started</h3>
                    <p>
                      I was born and raised in Alleppey, a coastal region known
                      as the "Venice of the East". Initially, I began my career
                      as a Chef, but inspired by the stories of my forefathers,
                      I started my pursuit of becoming a businessman.
                    </p>
                    <p>
                      The wise say, offer blood, sweat, and tears and in return,
                      you shall receive your blessing. This collaboration of
                      smart thinking and hard work has helped us grow into the
                      successful company we are now.
                    </p>
                  </div>
                  <div className="story-card">
                    <h3>Where I Am Now</h3>
                    <p>
                      You can refer to me as an angel investor, serial
                      entrepreneur, millennial mentor, or technology evangelist.
                      I encourage, inspire, and instruct companies on how to use
                      developing technology to grow their operations.
                    </p>
                    <p>
                      Being the Chairman of UGI, I've assisted in the launch of
                      digital strategies with some of the most recognizable
                      brands in the world, expanding operations across the UAE,
                      India, and Georgia.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      

    </div>
  );
};

export default About;