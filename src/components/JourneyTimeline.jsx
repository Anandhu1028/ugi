import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./journey-timeline.css";

gsap.registerPlugin(ScrollTrigger);

const milestones = [
  { year: "2017", text: "Founded UGI in Dubai", x: 120, y: 120 },
  { year: "2017", text: "Established Moto Factory in Kerala", x: 350, y: 80 },
  { year: "2018", text: "Established Focuz Academy in Kerala", x: 520, y: 200 },
  { year: "2019", text: " Established Le Orenda, Wishtree Infosolutions in Dubai & Cyberwoodz Technologies in Kerala", x: 720, y: 110 },
  { year: "2020", text: "Inception of Tecswam in Dubai & Kerala", x: 900, y: 80 },
  { year: "2022", text: "Established RiverWoodz in Kerala", x: 1080, y: 200 },
  { year: "Upcoming Projects", text: "Dreamzone projects in pipeline Scholium in Dubai, Cafe 33 in Kerala", x: 1300, y: 120 },
];

const JourneyTimeline = () => {
  const sectionRef = useRef(null);
  const pathRef = useRef(null);

  useEffect(() => {
    const path = pathRef.current;
    const length = path.getTotalLength();

    gsap.set(path, {
      strokeDasharray: length,
      strokeDashoffset: length,
    });

    gsap.to(path, {
      strokeDashoffset: 0,
      ease: "none",
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center",
        end: "bottom center",
        scrub: 1,
      },
    });

    gsap.from(".milestone", {
      opacity: 0,
      y: 40,
      stagger: 0.2,
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center",
      },
    });
  }, []);

  return (
    <section ref={sectionRef} className="journey-section">
      <svg
        viewBox="0 0 1400 360"
        className="journey-svg"
        preserveAspectRatio="none"
      >
        <defs>
          <filter id="goldGlow">
            <feGaussianBlur stdDeviation="8" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* GOLD BASE */}
        <path
          d="M0 180 C200 40 400 320 600 180 C800 40 1000 320 1400 180"
          fill="none"
          stroke="#f5a400"
          strokeWidth="52"
          strokeLinecap="round"
        />

        {/* GLOW */}
        <path
          d="M0 180 C200 40 400 320 600 180 C800 40 1000 320 1400 180"
          fill="none"
          stroke="#ffb733"
          strokeWidth="52"
          strokeLinecap="round"
          opacity="0.25"
          filter="url(#goldGlow)"
        />

        {/* WHITE ROAD */}
        <path
          ref={pathRef}
          d="M0 180 C200 40 400 320 600 180 C800 40 1000 320 1400 180"
          fill="none"
          stroke="#ffffff"
          strokeWidth="36"
          strokeLinecap="round"
        />

        {/* MILESTONES */}
        {milestones.map((m, i) => (
          <g key={i} className="milestone">
            <circle cx={m.x} cy={m.y} r="14" fill="#fff" stroke="#ddd" />
            <circle cx={m.x} cy={m.y} r="6" fill="#f5a400" />

            <line
              x1={m.x}
              y1={m.y + 14}
              x2={m.x}
              y2={m.y + 44}
              stroke="#f5a400"
              strokeWidth="2"
            />

            <text
              x={m.x}
              y={m.y - 22}
              textAnchor="middle"
              className="year"
            >
              {m.year}
            </text>

            <foreignObject
              x={m.x - 90}
              y={m.y + 48}
              width="180"
              height="90"
            >
              <div className="label-card">
                <p>{m.text}</p>
              </div>
            </foreignObject>
          </g>
        ))}
      </svg>
    </section>
  );
};

export default JourneyTimeline;
