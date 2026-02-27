import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./ChairmanMessage.css";

gsap.registerPlugin(ScrollTrigger);

const ChairmanMessage = () => {
  const sectionRef = useRef(null);
  const imgRef     = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      // Image parallax entry
      gsap.fromTo(
        imgRef.current,
        { y: 80, scale: 1.08 },
        {
          y: 0,
          scale: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "center center",
            scrub: 1,
          },
        }
      );

      // Text stagger
      gsap.from(".chairman-reveal", {
        y: 55,
        opacity: 0,
        duration: 1.2,
        stagger: 0.2,
        ease: "power3.out",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 65%",
          toggleActions: "play none none reverse",
        },
      });

      // Floating quote marks
      gsap.from(".chairman-quote-mark", {
        scale: 0,
        opacity: 0,
        duration: 0.8,
        ease: "back.out(1.7)",
        scrollTrigger: {
          trigger: sectionRef.current,
          start: "top 60%",
        },
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="chairman-section">
      {/* Ambient orbs */}
      <div className="chairman-orb chairman-orb--1" />
      <div className="chairman-orb chairman-orb--2" />

      <div className="container">
        <div className="chairman-grid">

          {/* ── Image Column ─────────────────────────────────── */}
          <div className="chairman-img-col">
            <div className="img-frame">
              <div className="img-glow" />
              <div className="img-mask">
                <img
                  ref={imgRef}
                  src="/assets/img/ajith-ns-3-scaled.webp"
                  alt="Ajith NS — Chairman, UGI"
                  className="chairman-img"
                />
              </div>
              {/* Badge */}
              <div className="chairman-badge">
                <span className="badge-name">Ajith NS</span>
                <span className="badge-role">Chairman, UGI</span>
              </div>
            </div>

            {/* Stats strip */}
            <div className="chairman-stats">
              <div className="cstat">
                <strong>8+</strong>
                <span>Years of Leadership</span>
              </div>
              <div className="cstat-divider" />
              <div className="cstat">
                <strong>5</strong>
                <span>Industry Verticals</span>
              </div>
              <div className="cstat-divider" />
              <div className="cstat">
                <strong>3</strong>
                <span>Countries</span>
              </div>
            </div>
          </div>

          {/* ── Text Column ──────────────────────────────────── */}
          <div className="chairman-text-col">
            <span className="chairman-reveal section-eyebrow">Word from the Chairman</span>

            <div className="chairman-reveal chairman-quote-block">
              <span className="chairman-quote-mark">&ldquo;</span>
              <h2 className="chairman-heading">
               ONE FOR ALL —<br />WE UPHOLD
              </h2>
            </div>

            <div className="chairman-reveal text-body">
              <p>
                As the Chairman of UGI, I welcome you to our website and appreciate
                you taking the time out and reading this. I believe that great things
                in business are achieved through hard work as well as teamwork — there
                are no shortcuts to success, and everything we do daily is what defines us.
              </p>
              <p>
                We work together as a team having the sole aim to satisfy our customers
                as well as employees' needs, to seek opportunities for the good of the
                economy and society.
              </p>
              <p>
                The challenges we have faced have strengthened us as a team, and we look
                forward to continuing the same.
              </p>
            </div>

            <div className="chairman-reveal sign-off">
              <div className="sign-line" />
              <div className="sign-text">
                <span className="sign-name">Ajith NS</span>
                <span className="sign-title">Chairman, United Group of Initiatives</span>
              </div>
            </div>

            {/* Feature pills */}
            <div className="chairman-reveal chairman-pills">
              {["Serial Entrepreneur","Angel Investor","Technology Evangelist","Millennial Mentor"].map((t) => (
                <span className="chairman-pill" key={t}>{t}</span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ChairmanMessage;