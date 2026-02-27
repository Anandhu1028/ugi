import { useEffect, useRef, useState } from "react";
import "./Parallaxtransitions.css";

const timelineData = [
  { year: "2017", label: "Founded UGI in Dubai", desc: "Laid the cornerstone of a unified business ecosystem with a bold vision spanning multiple industries and global ambitions." },
  { year: "2017", label: "Established Moto Factory in Kerala", desc: "Launched our automotive vertical, bringing world-class vehicle solutions and services to Southern India." },
  { year: "2018", label: "Established Focuz Academy in Kerala", desc: "Invested in the next generation through professional skill-development and education programs across disciplines." },
  { year: "2019", label: "Le Orenda, Wishtree & Cyberwoodz", desc: "Expanded into luxury gifting, IT consultancy in Dubai, and cutting-edge software development in Kerala." },
  { year: "2020", label: "Inception of Tecswam", desc: "Launched our flagship technology arm across Dubai & Kerala, scaling digital transformation services globally." },
  { year: "2022", label: "Established RiverWoodz in Kerala", desc: "Entered the premium tourism and hospitality space with a celebrated riverside lifestyle destination." },
  { year: "Soon", label: "Dreamzone · Scholium · Cafe 33", desc: "Our next chapter — creative education, academic consulting in Dubai, and a signature café lifestyle experience.", upcoming: true },
];

function useInView(threshold = 0.15) {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setInView(true); }, { threshold });
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  return [ref, inView];
}

function AnimCounter({ target, suffix, inView }) {
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return;
    let start = null;
    const dur = 1800;
    const raf = (ts) => {
      if (!start) start = ts;
      const p = Math.min((ts - start) / dur, 1);
      const e = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(e * target));
      if (p < 1) requestAnimationFrame(raf);
    };
    requestAnimationFrame(raf);
  }, [inView, target]);
  return <>{val}{suffix}</>;
}

export default function TimelineSection() {
  const canvasRef = useRef(null);
  const rafRef = useRef(null);
  const [headRef, headInView] = useInView(0.3);
  const [statRef, statInView] = useInView(0.2);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    let W = 0, H = 0;

    const resize = () => {
      W = canvas.offsetWidth;
      H = canvas.offsetHeight;
      canvas.width = W;
      canvas.height = H;
    };
    resize();
    window.addEventListener("resize", resize);

    const particles = Array.from({ length: 65 }, () => ({
      nx: Math.random(),
      ny: Math.random(),
      vx: (Math.random() - 0.5) * 0.0002,
      vy: (Math.random() - 0.5) * 0.00014,
      r: Math.random() * 1.5 + 0.3,
      a: Math.random() * 0.4 + 0.1,
      ph: Math.random() * Math.PI * 2,
    }));

    let t = 0;
    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      t += 0.007;

      // grid
      ctx.strokeStyle = "rgba(212,175,55,0.025)";
      ctx.lineWidth = 1;
      const g = 76;
      for (let x = 0; x < W; x += g) { ctx.beginPath(); ctx.moveTo(x, 0); ctx.lineTo(x, H); ctx.stroke(); }
      for (let y = 0; y < H; y += g) { ctx.beginPath(); ctx.moveTo(0, y); ctx.lineTo(W, y); ctx.stroke(); }

      // glowing orbs
      [[0.1, 0.2, 280], [0.88, 0.7, 320], [0.5, 0.92, 190]].forEach(([rx, ry, r], i) => {
        const ox = W * rx + Math.sin(t * 0.38 + i * 1.2) * 35;
        const oy = H * ry + Math.cos(t * 0.32 + i * 0.9) * 28;
        const g2 = ctx.createRadialGradient(ox, oy, 0, ox, oy, r);
        g2.addColorStop(0, `rgba(212,175,55,${0.055 - i * 0.01})`);
        g2.addColorStop(1, "transparent");
        ctx.fillStyle = g2;
        ctx.beginPath(); ctx.arc(ox, oy, r, 0, Math.PI * 2); ctx.fill();
      });

      // diagonal streaks
      ctx.strokeStyle = "rgba(212,175,55,0.022)";
      ctx.lineWidth = 1;
      for (let i = 0; i < 5; i++) {
        const off = ((t * 16 + i * 155) % (W + H * 0.7));
        ctx.beginPath(); ctx.moveTo(off - H * 0.6, 0); ctx.lineTo(off, H * 0.6); ctx.stroke();
      }

      // particles
      particles.forEach(p => {
        p.nx = (p.nx + p.vx + 1) % 1;
        p.ny = (p.ny + p.vy + 1) % 1;
        p.ph += 0.017;
        ctx.beginPath();
        ctx.arc(p.nx * W, p.ny * H, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212,175,55,${p.a * (0.6 + 0.4 * Math.sin(p.ph))})`;
        ctx.fill();
      });

      rafRef.current = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(rafRef.current); window.removeEventListener("resize", resize); };
  }, []);

  return (
    <section style={S.section}>
      <canvas ref={canvasRef} style={S.canvas} className="tl-canvas-parallax" />
      <div style={{ ...S.fade, top: 0, background: "linear-gradient(to bottom,#06060f 0%,transparent 100%)" }} />
      <div style={{ ...S.fade, bottom: 0, background: "linear-gradient(to top,#06060f 0%,transparent 100%)" }} />
      <div style={S.vignette} />

      <div style={S.container}>

        {/* ── HEADER ── */}
        <header
          ref={headRef}
          style={{
            ...S.header,
            opacity: headInView ? 1 : 0,
            transform: headInView ? "translateY(0)" : "translateY(30px)",
            transition: "opacity 1s ease, transform 1s cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          <div style={S.badge}>
            <span style={S.badgeDot} />
            <span style={S.badgeText}>Our Journey</span>
            <span style={S.badgeDot} />
          </div>
          <h2 style={S.title}>
            Milestones That{" "}
            <span style={S.titleAccent}>Define Us</span>
          </h2>
          <p style={S.subtitle}>
            From a single idea in Dubai to a global multi-industry ecosystem —<br />every year marks a new chapter of relentless growth.
          </p>
          <div style={S.ornament}>
            <span style={S.ornLine} />
            <span style={S.ornGem}>◆</span>
            <span style={{ ...S.ornLine, background: "linear-gradient(to left, transparent, rgba(212,175,55,0.6))" }} />
          </div>
        </header>

        {/* ── STATS ── */}
        <div ref={statRef} style={S.statsGrid}>
          {[
            { n: 32, s: "K+", l: "Projects Delivered" },
            { n: 1170, s: "+", l: "Team Members" },
            { n: 64, s: "+", l: "Events Hosted" },
            { n: 23, s: "+", l: "Global Locations" },
          ].map(({ n, s, l }, i) => (
            <div
              key={l}
              style={{
                ...S.stat,
                opacity: statInView ? 1 : 0,
                transform: statInView ? "translateY(0)" : "translateY(22px)",
                transition: `opacity 0.7s ease ${i * 0.1}s, transform 0.7s cubic-bezier(0.22,1,0.36,1) ${i * 0.1}s`,
              }}
            >
              <span style={S.statNum}><AnimCounter target={n} suffix={s} inView={statInView} /></span>
              <span style={S.statLabel}>{l}</span>
            </div>
          ))}
        </div>

        {/* ── TIMELINE ── */}
        <div style={S.timeline}>
          {/* spine */}
          <div style={S.spine} />
          <div style={S.spineBloom} />

          {timelineData.map((item, i) => (
            <TimelineRow key={i} item={item} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}

function TimelineRow({ item, index }) {
  const [ref, inView] = useInView(0.18);
  const [hover, setHover] = useState(false);
  const isLeft = index % 2 === 0;

  return (
    <div
      ref={ref}
      style={{
        ...S.row,
        flexDirection: isLeft ? "row" : "row-reverse",
        opacity: inView ? 1 : 0,
        transform: inView ? "none" : `translateX(${isLeft ? -40 : 40}px)`,
        transition: `opacity 0.75s ease ${index * 0.08}s, transform 0.75s cubic-bezier(0.22,1,0.36,1) ${index * 0.08}s`,
      }}
    >
      {/* ── Card ── */}
      <div style={{ ...S.half, alignItems: isLeft ? "flex-end" : "flex-start" }}>
        <div
          onMouseEnter={() => setHover(true)}
          onMouseLeave={() => setHover(false)}
          style={{
            ...S.card,
            ...(item.upcoming && S.cardDim),
            borderColor: hover ? "rgba(212,175,55,0.35)" : "rgba(255,255,255,0.06)",
            boxShadow: hover
              ? "0 24px 56px rgba(0,0,0,0.55), inset 0 0 0 1px rgba(212,175,55,0.22)"
              : "0 8px 28px rgba(0,0,0,0.28)",
            transform: hover ? "translateY(-5px)" : "none",
          }}
        >
          {/* top glow bar */}
          <div style={{ ...S.topBar, width: hover ? "100%" : "42px" }} />

          {/* year chip */}
          <div style={{ ...S.chip, ...(item.upcoming && S.chipDim) }}>{item.year}</div>

          <h3 style={{ ...S.cardTitle, color: item.upcoming ? "rgba(212,175,55,0.5)" : "#fff" }}>
            {item.label}
          </h3>
          <p style={{ ...S.cardDesc, fontStyle: item.upcoming ? "italic" : "normal" }}>
            {item.desc}
          </p>

          {/* corner accent */}
          {!item.upcoming && (
            <span style={{ ...S.corner, opacity: hover ? 1 : 0 }} />
          )}
        </div>
      </div>

      {/* ── Center Node ── */}
      <div style={S.nodeCol}>
        <div style={{ ...S.node, ...(item.upcoming && S.nodeDim) }}>
          {!item.upcoming && <div style={{ ...S.nodePulse, animationDuration: `${1.6 + index * 0.15}s` }} />}
        </div>
      </div>

      {/* ── Spacer ── */}
      <div style={S.half} />
    </div>
  );
}

const GOLD = "#d4af37";

const S = {
  section: {
    position: "relative",
    background: "#06060f",
    padding: "140px 0 170px",
    overflow: "hidden",
    fontFamily: "'Georgia', serif",
  },
  canvas: { position: "absolute", inset: 0, width: "100%", height: "100%", display: "block", pointerEvents: "none", zIndex: 0 },
  fade: { position: "absolute", left: 0, right: 0, height: 220, zIndex: 1, pointerEvents: "none" },
  vignette: {
    position: "absolute", inset: 0, zIndex: 1, pointerEvents: "none",
    background: "radial-gradient(ellipse 80% 55% at 50% 50%, transparent 25%, rgba(6,6,15,0.72) 100%)",
  },
  container: { position: "relative", zIndex: 2, maxWidth: 1080, margin: "0 auto", padding: "0 5%" },

  // Header
  header: { textAlign: "center", marginBottom: 80 },
  badge: { display: "inline-flex", alignItems: "center", gap: 12, marginBottom: 24 },
  badgeDot: { display: "block", width: 5, height: 5, borderRadius: "50%", background: GOLD, boxShadow: `0 0 8px ${GOLD}` },
  badgeText: {
    fontSize: 11, letterSpacing: "5px", textTransform: "uppercase",
    color: GOLD, fontWeight: 700,
  },
  title: {
    fontSize: "clamp(2.8rem,5.5vw,4.4rem)",
    fontFamily: "'Playfair Display', Georgia, serif",
    color: "#fff", margin: "0 0 24px", lineHeight: 1.1, fontWeight: 700,
  },
  titleAccent: {
    fontStyle: "italic", color: GOLD,
    textShadow: `0 0 40px rgba(212,175,55,0.3)`,
  },
  subtitle: { fontSize: 15.5, color: "rgba(240,236,228,0.45)", lineHeight: 1.85, margin: "0 auto 36px", maxWidth: 540 },
  ornament: { display: "flex", alignItems: "center", justifyContent: "center", gap: 16 },
  ornLine: { display: "block", width: 80, height: 1, background: "linear-gradient(to right, transparent, rgba(212,175,55,0.6))" },
  ornGem: { color: GOLD, fontSize: 9, textShadow: `0 0 10px ${GOLD}` },

  // Stats
  statsGrid: { display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 18, marginBottom: 100 },
  stat: {
    textAlign: "center", padding: "32px 16px",
    background: "linear-gradient(160deg, rgba(255,255,255,0.028), rgba(255,255,255,0.008))",
    border: "1px solid rgba(212,175,55,0.1)",
    borderRadius: 16, backdropFilter: "blur(8px)",
  },
  statNum: {
    display: "block", fontSize: 36, fontWeight: 700,
    fontFamily: "'Playfair Display', Georgia, serif",
    color: GOLD, marginBottom: 10,
    textShadow: `0 0 24px rgba(212,175,55,0.4)`,
  },
  statLabel: { fontSize: 11, textTransform: "uppercase", letterSpacing: "2.5px", color: "rgba(240,236,228,0.38)" },

  // Timeline layout
  timeline: { position: "relative" },
  spine: {
    position: "absolute", left: "50%", top: 0, bottom: 0, width: 1,
    transform: "translateX(-50%)",
    background: `linear-gradient(to bottom, transparent 0%, ${GOLD} 5%, rgba(212,175,55,0.45) 50%, rgba(212,175,55,0.08) 95%, transparent 100%)`,
  },
  spineBloom: {
    position: "absolute", left: "50%", top: 0, bottom: 0, width: 3,
    transform: "translateX(-50%)",
    background: `linear-gradient(to bottom, transparent, rgba(212,175,55,0.25) 20%, rgba(212,175,55,0.1) 80%, transparent)`,
    filter: "blur(5px)",
  },
  row: { display: "flex", alignItems: "center", marginBottom: 52 },
  half: { flex: 1, display: "flex", flexDirection: "column", padding: "0 52px" },

  // Card
  card: {
    maxWidth: 400, width: "100%",
    background: "linear-gradient(150deg, rgba(18,18,28,0.92) 0%, rgba(12,12,20,0.96) 100%)",
    border: "1px solid",
    borderRadius: 20, padding: "38px 40px",
    position: "relative", overflow: "hidden",
    cursor: "default",
    transition: "border-color 0.4s ease, box-shadow 0.4s ease, transform 0.4s cubic-bezier(0.22,1,0.36,1)",
  },
  cardDim: { opacity: 0.6 },
  topBar: {
    position: "absolute", top: 0, left: 0, height: 2,
    background: `linear-gradient(to right, ${GOLD}, rgba(212,175,55,0.15))`,
    borderRadius: "2px 0 0 0",
    transition: "width 0.5s cubic-bezier(0.22,1,0.36,1)",
  },
  chip: {
    display: "inline-block", fontSize: 10, letterSpacing: "3.5px",
    textTransform: "uppercase", color: GOLD, fontWeight: 700,
    border: "1px solid rgba(212,175,55,0.3)",
    borderRadius: 30, padding: "5px 14px", marginBottom: 16,
    background: "rgba(212,175,55,0.07)",
  },
  chipDim: { color: "rgba(212,175,55,0.4)", borderColor: "rgba(212,175,55,0.15)" },
  cardTitle: {
    fontSize: 18.5, fontFamily: "'Playfair Display', Georgia, serif",
    fontWeight: 600, margin: "0 0 14px", lineHeight: 1.4,
    transition: "color 0.3s",
  },
  cardDesc: {
    fontSize: 14, color: "rgba(240,236,228,0.45)", lineHeight: 1.8, margin: 0,
  },
  corner: {
    position: "absolute", bottom: 16, right: 16,
    width: 18, height: 18,
    borderBottom: `1px solid rgba(212,175,55,0.4)`,
    borderRight: `1px solid rgba(212,175,55,0.4)`,
    borderRadius: "0 0 4px 0",
    transition: "opacity 0.3s",
  },

  // Node
  nodeCol: {
    position: "relative", display: "flex",
    alignItems: "center", justifyContent: "center",
    width: 26, flexShrink: 0, zIndex: 3,
  },
  node: {
    width: 14, height: 14, borderRadius: "50%",
    background: GOLD,
    boxShadow: `0 0 0 3px rgba(212,175,55,0.18), 0 0 18px rgba(212,175,55,0.7)`,
    position: "relative",
  },
  nodeDim: {
    background: "transparent",
    border: "2px dashed rgba(212,175,55,0.35)",
    boxShadow: "none",
  },
  nodePulse: {
    position: "absolute", inset: -6, borderRadius: "50%",
    border: "1px solid rgba(212,175,55,0.35)",
    animation: "tlPulse 2s ease-in-out infinite",
  },
};

// Inject keyframes
if (typeof document !== "undefined") {
  const id = "tl-kf";
  if (!document.getElementById(id)) {
    const style = document.createElement("style");
    style.id = id;
    style.textContent = `
      @keyframes tlPulse {
        0%   { transform: scale(1); opacity: 0.7; }
        50%  { transform: scale(1.7); opacity: 0; }
        100% { transform: scale(1); opacity: 0; }
      }
      @media (max-width: 768px) {
        .tl-responsive-grid { grid-template-columns: 1fr 1fr !important; }
        .tl-responsive-row  { flex-direction: column !important; }
      }
    `;
    document.head.appendChild(style);
  }
}