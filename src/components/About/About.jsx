import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./About-enhanced.css";
import TimelineSection from "./Timelinesection";

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const heroRef       = useRef(null);
  const containerRef  = useRef(null);
  const growRef       = useRef(null);
  const founderRef    = useRef(null);
  const timelineRef   = useRef(null);

  useEffect(() => {
    /* Give DOM one frame to settle */
    const frameId = requestAnimationFrame(() => {

      let ctx = gsap.context(() => {

        /* ════════════════════════════════════════════════════
           HERO
        ════════════════════════════════════════════════════ */
        gsap.to(".about-hero-bg", {
          yPercent: 32,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });

        const heroTl = gsap.timeline({ delay: 0.25 });
        heroTl
          .from(".about-hero-badge",    { y: 28, opacity: 0, duration: 0.8, ease: "power3.out" })
          .from(".about-hero-title",    { y: 55, opacity: 0, duration: 1.1, ease: "power3.out" }, "-=0.5")
          .from(".about-hero-sub",      { y: 28, opacity: 0, duration: 0.9, ease: "power3.out" }, "-=0.65")
          .from(".about-hero-ornament", { scaleX: 0, opacity: 0, duration: 0.7, ease: "power2.out" }, "-=0.5")
          .from(".about-hero-corner",   { scale: 0, opacity: 0, duration: 0.8, stagger: 0.15, ease: "back.out(2)" }, "-=0.5")
          .from(".hero-scroll-hint",    { opacity: 0, y: 10, duration: 0.7, ease: "power2.out" }, "-=0.3");

        /* ════════════════════════════════════════════════════
           BANNER
        ════════════════════════════════════════════════════ */
        gsap.to(".about-banner-bg", {
          yPercent: 24,
          ease: "none",
          scrollTrigger: {
            trigger: ".about-banner",
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });

        gsap.from([".about-banner .about-hero-badge", ".about-banner-title", ".about-banner-desc", ".banner-divider"], {
          y: 32,
          opacity: 0,
          duration: 0.85,
          stagger: 0.11,
          ease: "power3.out",
          scrollTrigger: { trigger: ".about-banner", start: "top 70%", toggleActions: "play none none reverse" },
        });

        /* ════════════════════════════════════════════════════
           VISION & MISSION
        ════════════════════════════════════════════════════ */
        gsap.from(".section-header-vm", {
          y: 38, opacity: 0, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: ".history-modern", start: "top 76%", toggleActions: "play none none reverse" },
        });

        gsap.from(".vm-modern-card", {
          y: 55, opacity: 0, duration: 0.9, stagger: 0.18, ease: "power3.out",
          scrollTrigger: { trigger: ".history-grid", start: "top 78%", toggleActions: "play none none reverse" },
        });

        /* ════════════════════════════════════════════════════
           ███  GROW FASTER — CINEMATIC PARALLAX  ███
           
           1. Grow section is PINNED while we scroll through it
           2. Image subtly scales/reveals as pinned
           3. Stats counter triggers during pin
           4. Content drifts on unpin
           5. Entire section scales BACK & fades as Founder rises
        ════════════════════════════════════════════════════ */

        /* 1. Grow image — scale reveal from 1.12 → 1 while pinned */
        gsap.fromTo(".grow-main-img", 
          { scale: 1.14, filter: "brightness(0.7) grayscale(80%)" },
          {
            scale: 1, filter: "brightness(1) grayscale(55%)",
            ease: "none",
            scrollTrigger: {
              trigger: growRef.current,
              start: "top top",
              end: "+=600",
              scrub: 1.2,
              pin: true,
              pinSpacing: true,
            },
          }
        );

        /* 2. Grow content text — stagger drift in from right */
        gsap.from(".grow-content-inner > *", {
          x: 50, opacity: 0, duration: 1.1, stagger: 0.13, ease: "power3.out",
          scrollTrigger: { trigger: ".grow-content-inner", start: "top 78%", toggleActions: "play none none reverse" },
        });

        /* 3. Grow stats float up */
        gsap.from(".stat-box", {
          y: 35, opacity: 0, duration: 0.85, stagger: 0.1, ease: "power3.out",
          scrollTrigger: { trigger: ".grow-stats", start: "top 85%", toggleActions: "play none none reverse" },
        });

        /* Stat counters */
        gsap.utils.toArray(".stat-box h4[data-count]").forEach((el) => {
          const target = parseInt(el.getAttribute("data-count"), 10);
          const suffix = el.getAttribute("data-suffix") || "";
          const obj = { val: 0 };
          gsap.to(obj, {
            val: target,
            duration: 2.4,
            ease: "power2.out",
            scrollTrigger: { trigger: el, start: "top 88%" },
            onUpdate() { el.textContent = Math.round(obj.val) + suffix; },
          });
        });

        /* 4. Feature rows slide in from right with stagger */
        gsap.from(".feat-row", {
          x: 44, opacity: 0, duration: 0.85, stagger: 0.12, ease: "power3.out",
          scrollTrigger: { trigger: ".grow-features", start: "top 80%", toggleActions: "play none none reverse" },
        });

        /* 5. Grow section RECEDES → Founder section rises OVER it */
        gsap.to(growRef.current, {
          scale: 0.88,
          opacity: 0,
          filter: "blur(8px)",
          y: -70,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: growRef.current,
            start: "bottom 62%",
            end: "bottom -8%",
            scrub: 1.5,
          },
        });

        /* ════════════════════════════════════════════════════
           ███  FOUNDER SECTION  ███

           1. Founder section rises in as Grow recedes
           2. Image floats at its own parallax rate
           3. Quote drifts faster than image → depth illusion
           4. Story cards stagger in on scroll
           5. Founder section itself scales BACK as Timeline rises
        ════════════════════════════════════════════════════ */

        /* 1. Founder RISES IN from below as grow recedes */
        gsap.fromTo(founderRef.current,
          { y: 130, opacity: 0, scale: 0.96 },
          {
            y: 0, opacity: 1, scale: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: founderRef.current,
              start: "top 92%",
              end: "top 28%",
              scrub: 1.3,
            },
          }
        );

        /* 2. Founder image — slow float upward as section scrolls */
        gsap.to(".founder-image-inner", {
          yPercent: -12,
          ease: "none",
          scrollTrigger: {
            trigger: founderRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.8,
          },
        });

        /* Founder image entrance */
        gsap.from(".founder-image", {
          x: -65, opacity: 0, duration: 1.2, ease: "power3.out",
          scrollTrigger: { trigger: ".founder-intro-grid", start: "top 78%", toggleActions: "play none none reverse" },
        });

        /* 3. Quote — drifts FASTER than image (different scrub rate) */
        gsap.to(".founder-quote", {
          yPercent: -7,
          ease: "none",
          scrollTrigger: {
            trigger: founderRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });

        gsap.from(".founder-quote", {
          x: 50, opacity: 0, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: ".founder-content", start: "top 78%", toggleActions: "play none none reverse" },
        });

        /* 4. Story cards stagger + slight Y parallax */
        gsap.from(".story-card", {
          y: 60, opacity: 0, duration: 1, stagger: 0.16, ease: "power3.out",
          scrollTrigger: { trigger: ".story-grid", start: "top 80%", toggleActions: "play none none reverse" },
        });

        /* Subtle horizontal split on story cards */
        gsap.utils.toArray(".story-card").forEach((card, i) => {
          gsap.to(card, {
            yPercent: i % 2 === 0 ? -4 : -6,
            ease: "none",
            scrollTrigger: {
              trigger: founderRef.current,
              start: "top bottom",
              end: "bottom top",
              scrub: i % 2 === 0 ? 1.2 : 0.9,
            },
          });
        });

        /* 5. Founder section RECEDES → Timeline rises OVER it */
        gsap.to(founderRef.current, {
          scale: 0.87,
          opacity: 0,
          filter: "blur(10px)",
          y: -90,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: founderRef.current,
            start: "bottom 60%",
            end: "bottom -10%",
            scrub: 1.6,
          },
        });

        /* ════════════════════════════════════════════════════
           ███  TIMELINE SECTION  ███

           1. Timeline RISES UP from bottom over the founder
           2. Canvas bg moves slower (depth layer)
           3. Individual rows slide in from alternating sides
        ════════════════════════════════════════════════════ */

        /* 1. Timeline rises in */
        gsap.fromTo(timelineRef.current,
          { y: 160, opacity: 0, scale: 0.95 },
          {
            y: 0, opacity: 1, scale: 1,
            ease: "power3.out",
            scrollTrigger: {
              trigger: timelineRef.current,
              start: "top 95%",
              end: "top 18%",
              scrub: 1.4,
            },
          }
        );

        /* 2. Canvas parallax depth */
        gsap.to(".tl-canvas-parallax", {
          yPercent: -22,
          ease: "none",
          scrollTrigger: {
            trigger: timelineRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: true,
          },
        });

      }, containerRef);

      return () => ctx.revert();

    }); // end rAF

    return () => cancelAnimationFrame(frameId);
  }, []);

  return (
    <div className="about-modern-section" ref={containerRef}>

      {/* ══════════════════════════
          HERO
      ══════════════════════════ */}
      <section className="about-hero" ref={heroRef}>
        <img className="about-hero-bg" src="/assets/img/ugi-banner-History-1.jpg" alt="" />
        <div className="about-hero-overlay" />
        <div className="about-hero-corner about-hero-corner--tl" />
        <div className="about-hero-corner about-hero-corner--br" />
        <div className="about-hero-content">
          <span className="about-hero-badge">Our Legacy</span>
          <h1 className="about-hero-title">A Brief History<br />of Us</h1>
          <p className="about-hero-sub">One vision. Multiple industries. A unified purpose.</p>
          <div className="about-hero-ornament">
            <span className="about-orn-line" />
            <span className="about-orn-diamond">◆</span>
            <span className="about-orn-line about-orn-line--r" />
          </div>
        </div>
        <div className="hero-scroll-hint"><span /></div>
      </section>

      {/* ══════════════════════════
          BANNER
      ══════════════════════════ */}
      <section className="about-banner">
        <div className="about-banner-bg-wrap">
          <img className="about-banner-bg" src="/assets/img/ugi-banner4.jpg" alt="" />
          <div className="about-banner-overlay" />
        </div>
        <div className="about-banner-content container">
          <span className="about-hero-badge">We Are UGI</span>
          <h2 className="about-banner-title">Defining the Future</h2>
          <p className="about-banner-desc">
            United Group of Initiatives — bringing IT, Luxury Gifting, Education,
            Automotive, and Tourism into one connected ecosystem.
          </p>
          <div className="banner-divider" />
        </div>
      </section>

      {/* ══════════════════════════
          VISION & MISSION
      ══════════════════════════ */}
      <section className="history-modern">
        <div className="container">
          <div className="section-header section-header-vm">
            <span className="section-eyebrow">Who We Are</span>
            <h2 className="section-title">Vision &amp; Mission</h2>
          </div>
          <div className="history-grid">
            <div className="vm-modern-card">
              <span className="vm-modern-badge">01</span>
              <h3 className="vm-modern-title">Our Vision</h3>
              <p className="vm-modern-text">
                As a group of initiatives, we aim to develop, advance, and redefine how business
                operates across our fields — creating outcomes that benefit both society and the economy.
              </p>
            </div>
            <div className="vm-modern-card">
              <span className="vm-modern-badge">02</span>
              <h3 className="vm-modern-title">Our Mission</h3>
              <p className="vm-modern-text">
                To grow together with a single purpose by integrating IT, Luxury Gifting, Education,
                Automotive, and Tourism — building a strong, connected business ecosystem worldwide.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          GROW FASTER
          ref={growRef} → pinned scroll + recede-back effect
      ══════════════════════════════════════════════════════ */}
      <section className="grow-modern" ref={growRef}>
        <div className="container">
          <div className="grow-grid">

            {/* Image + Stats */}
            <div className="grow-images">
              <img
                className="grow-main-img"
                src="/assets/img/about/ugi-website-banners-e1672753477412.webp"
                alt="UGI Operations"
              />
              <div className="grow-stats">
                <div className="stat-box">
                  <h4 data-count="32" data-suffix="K+">32K+</h4>
                  <p>Projects</p>
                </div>
                <div className="stat-box">
                  <h4 data-count="1170" data-suffix="+">1170+</h4>
                  <p>Employees</p>
                </div>
                <div className="stat-box">
                  <h4 data-count="64" data-suffix="+">64+</h4>
                  <p>Events</p>
                </div>
                <div className="stat-box">
                  <h4 data-count="23" data-suffix="+">23+</h4>
                  <p>Locations</p>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="grow-content">
              <div className="grow-content-inner">
                <span className="section-eyebrow">Operations</span>
                <h2>Grow Faster.<br />Think Bigger.</h2>
                <p className="grow-desc">
                  United Group of Initiatives is headquartered in Dubai and was initiated as a way to
                  bring different business sectors into one unified ecosystem.
                </p>
                <div className="grow-features">
                  <div className="feat-row">
                    <div className="feat-icon">⚖️</div>
                    <div className="feat-text">
                      <h4>Law Abiding</h4>
                      <p>Committed to achieving our objectives while strictly adhering to international and local laws.</p>
                    </div>
                  </div>
                  <div className="feat-row">
                    <div className="feat-icon">🎯</div>
                    <div className="feat-text">
                      <h4>Disciplined</h4>
                      <p>We meet objectives with precision and punctuality thanks to our unshakeable ideals of teamwork.</p>
                    </div>
                  </div>
                  <div className="feat-row">
                    <div className="feat-icon">💎</div>
                    <div className="feat-text">
                      <h4>Transparent</h4>
                      <p>Operating as an open book, we follow the path of being honest and delivering pristine results.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════
          FOUNDER'S NOTE
          ref={founderRef} → rises over Grow, then recedes for Timeline
          willChange + transformOrigin needed for smooth scale-back
      ══════════════════════════════════════════════════════ */}
      <div
        ref={founderRef}
        className="founder-parallax-wrapper"
      >
        <section className="story-modern">
          <div className="container">
            <div className="section-header">
              <span className="section-eyebrow">Founder's Note</span>
              <h2 className="section-title">Ajith N.S, Chairman</h2>
            </div>

            <div className="founder-intro-grid">
              {/* Image */}
              <div className="founder-image">
                <div className="founder-glow" />
                <div className="founder-image-inner">
                  <img
                    src="/assets/img/about/ajith-ns-01-01-scaled.webp"
                    alt="Ajith N.S – Chairman"
                  />
                </div>
              </div>

              {/* Quote + Cards */}
              <div className="founder-content">
                <blockquote className="founder-quote">
                  "Every one of us is striving and working arduously to reach a goal that we all share.
                  If we both want the same thing, why work alone to get it when we can work together?
                  UGI is the solution where we adhere to the principle of{" "}
                  <em>'One for all.'</em>"
                </blockquote>



                <div className="story-grid" style={{ marginTop: "36px" }}>
                  <div className="story-card">
                    <h3>Where I Started</h3>
                    <p>
                      I was born and raised in Alleppey, a coastal region known as the "Venice of
                      the East". Initially, I began my career as a Chef, but inspired by the stories
                      of my forefathers, I started my pursuit of becoming a businessman.
                    </p>
                    <p>
                      The wise say, offer blood, sweat, and tears and in return, you shall receive
                      your blessing. This collaboration of smart thinking and hard work has helped us
                      grow into the successful company we are now.
                    </p>
                  </div>
                  <div className="story-card">
                    <h3>Where I Am Now</h3>
                    <p>
                      You can refer to me as an angel investor, serial entrepreneur, millennial
                      mentor, or technology evangelist. I encourage, inspire, and instruct companies
                      on how to use developing technology to grow their operations.
                    </p>
                    <p>
                      Being the Chairman of UGI, I've assisted in the launch of digital strategies
                      with some of the most recognizable brands in the world, expanding operations
                      across the UAE, India, and Georgia.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* ══════════════════════════════════════════════════════
          TIMELINE
          ref={timelineRef} → rises over Founder with depth effect
      ══════════════════════════════════════════════════════ */}
      <div
        ref={timelineRef}
        className="timeline-parallax-wrapper"
      >
        <TimelineSection />
      </div>

    </div>
  );
};

export default About;