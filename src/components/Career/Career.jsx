import { useEffect, useMemo, useRef, useState } from "react";
import { Link } from "react-router-dom";
import CinematicBanner from "../CinematicBanner";

/* ── Fonts ─────────────────────────────────────────────────── */
if (!document.getElementById("cr-fonts-v3")) {
  const l = document.createElement("link");
  l.id = "cr-fonts-v3"; l.rel = "stylesheet";
  l.href = "https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@300;400;500;600;700;800&family=Lora:ital,wght@0,400;0,600;1,400&display=swap";
  document.head.appendChild(l);
}

/* ── Styles ────────────────────────────────────────────────── */
const CSS = `

/* ─────────────────────────────────────
   RESET
───────────────────────────────────── */
.crp * { box-sizing: border-box; margin: 0; padding: 0; }

.crp {
  font-family: 'Plus Jakarta Sans', sans-serif;
  background: #0f0f0f;
  color: #ffffff;
  overflow-x: hidden;
  position: relative;
}

/* Soft luxury gold background glow */
.crp::before {
  content: '';
  position: fixed;
  inset: 0;
  background:
    radial-gradient(circle at 20% 30%, rgba(212,160,23,.08), transparent 40%),
    radial-gradient(circle at 80% 70%, rgba(212,160,23,.05), transparent 45%);
  pointer-events: none;
  z-index: 0;
}

/* Canvas stays subtle */
.crp-canvas {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 0;
}

/* Container */
.crp-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 40px;
  position: relative;
  z-index: 1;
}

/* ═══════════════════════════════
   INTRO (DARK LUXURY)
═══════════════════════════════ */
.crp-intro {
  background: #111111;
  padding: 110px 0 100px;
  border-bottom: 1px solid rgba(255,255,255,0.06);
}

.crp-intro-layout {
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: 80px;
}

.crp-tag {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(212,160,23,.12);
  border: 1px solid rgba(212,160,23,.35);
  color: #f5cf6a;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 1.5px;
  text-transform: uppercase;
  padding: 6px 14px;
  border-radius: 100px;
  margin-bottom: 24px;
}

.crp-intro-left h2 {
  font-size: clamp(2.5rem, 3.5vw, 3.2rem);
  font-weight: 800;
  line-height: 1.1;
  letter-spacing: -0.03em;
  margin-bottom: 28px;
}

.crp-intro-left h2 span {
  background: linear-gradient(90deg,#c89b2a,#f5cf6a);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

.crp-intro-left p,
.crp-intro-right p {
  font-size: 15.5px;
  color: rgba(255,255,255,.65);
  line-height: 1.9;
  margin-bottom: 18px;
}

.crp-quote {
  background: rgba(255,255,255,.04);
  border-left: 3px solid #c89b2a;
  padding: 24px;
  border-radius: 8px;
  font-family: 'Lora', serif;
  font-style: italic;
  color: rgba(255,255,255,.8);
}

/* ═══════════════════════════════
   PILLARS (GLASS STYLE)
═══════════════════════════════ */
.crp-pillars {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  margin-top: 60px;
}

.crp-pillar {
  background: rgba(255,255,255,.04);
  border: 1px solid rgba(255,255,255,.08);
  border-radius: 18px;
  padding: 36px;
  backdrop-filter: blur(10px);
  transition: all .4s cubic-bezier(.16,1,.3,1);
  position: relative;
  overflow: hidden;
}

.crp-pillar::after {
  content: '';
  position: absolute;
  bottom: 0; left: 0; right: 0;
  height: 2px;
  background: linear-gradient(90deg,#c89b2a,#f5cf6a);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform .4s cubic-bezier(.16,1,.3,1);
}

.crp-pillar:hover {
  transform: translateY(-8px);
  box-shadow:
    0 30px 70px rgba(0,0,0,.6),
    0 0 0 1px rgba(212,160,23,.25);
}

.crp-pillar:hover::after {
  transform: scaleX(1);
}

.crp-pillar-title {
  font-size: 15px;
  font-weight: 700;
  margin-bottom: 8px;
}

.crp-pillar-text {
  font-size: 13px;
  color: rgba(255,255,255,.6);
  line-height: 1.8;
}

/* ═══════════════════════════════
   JOBS (LIGHT CONTRAST)
═══════════════════════════════ */
/* ═══════════════════════════════
   JOBS (CLEAN PREMIUM FIX)
═══════════════════════════════ */
.crp-jobs {
  position: relative;
  background: #f9fafb;
  padding: 140px 0;
  color: #111;
  overflow: hidden;
}

/* Softer grid */
.crp-jobs::before {
  content: '';
  position: absolute;
  inset: 0;
  background-image:
  linear-gradient(rgba(0,0,0,.02) 1px, transparent 1px),
  linear-gradient(90deg, rgba(0,0,0,.02) 1px, transparent 1px);
  background-size: 90px 90px;
  pointer-events: none;
  opacity: .6;
}

/* HEADER */
.crp-section-header {
  margin-bottom: 50px;
}

.crp-section-header h3 {
  font-size: clamp(2.4rem, 3vw, 3rem);
  font-weight: 800;
  letter-spacing: -0.03em;
  color: #111;
  margin-bottom: 10px;
}

.crp-section-header p {
  font-size: 16px;
  color: #666;
}

/* FILTER BAR */
.crp-filter {
  background: #ffffff;
  border-radius: 18px;
  padding: 18px;
  display: grid;
  grid-template-columns: 1.6fr 1fr 1fr 1fr;
  gap: 14px;
  margin-bottom: 60px;
  border: 1px solid rgba(0,0,0,.08);
  box-shadow: 0 25px 70px rgba(0,0,0,.06);
}

.crp-filter input,
.crp-filter select {
  height: 48px;
  border: 1px solid #e2e2e2;
  border-radius: 12px;
  background: #fafafa;
  padding: 0 16px;
  font-size: 14px;
  outline: none;
  transition: all .2s ease;
}

.crp-filter input:focus,
.crp-filter select:focus {
  border-color: #c89b2a;
  background: #fff;
  box-shadow: 0 0 0 3px rgba(212,160,23,.15);
}

/* CARD GRID */
.crp-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));
  gap: 28px;
}

/* CARDS */
.crp-card {
  background: #ffffff;
  border-radius: 22px;
  padding: 40px;
  border: 1px solid rgba(0,0,0,.06);
  transition: all .45s cubic-bezier(.16,1,.3,1);
  position: relative;
}

/* Gold top accent line */
.crp-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0;
  height: 4px;
  width: 100%;
  background: linear-gradient(90deg,#c89b2a,#f5cf6a);
  transform: scaleX(0);
  transform-origin: left;
  transition: transform .4s cubic-bezier(.16,1,.3,1);
}

.crp-card:hover {
  transform: translateY(-14px);
  box-shadow:
    0 60px 140px rgba(0,0,0,.15),
    0 0 0 1px rgba(212,160,23,.3);
}

.crp-card:hover::before {
  transform: scaleX(1);
}

/* TITLE */
.crp-card-title {
  font-size: 18px;
  font-weight: 700;
  margin-bottom: 16px;
  color: #111;
}

/* TAGS */
.crp-card-tags {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 26px;
}

.crp-card-tag {
  font-size: 12px;
  padding: 6px 14px;
  border-radius: 8px;
  font-weight: 500;
}

.crp-card-tag--role {
  background: rgba(212,160,23,.12);
  border: 1px solid rgba(212,160,23,.3);
  color: #8a6000;
}

.crp-card-tag--type,
.crp-card-tag--loc {
  background: #f3f3f3;
  border: 1px solid #e2e2e2;
  color: #555;
}

/* BUTTON */
.crp-btn {
  display: inline-flex;
  align-items: center;
  gap: 10px;
  padding: 14px 30px;
  border-radius: 16px;
  background: #111;
  color: #fff;
  font-weight: 600;
  transition: all .35s cubic-bezier(.16,1,.3,1);
  text-decoration: none;
  position: relative;
  overflow: hidden;
}

.crp-btn::before {
  content: '';
  position: absolute;
  inset: 0;
  background: linear-gradient(90deg,#c89b2a,#f5cf6a);
  transform: translateX(-102%);
  transition: transform .45s cubic-bezier(.16,1,.3,1);
}

.crp-btn:hover::before {
  transform: translateX(0);
}

.crp-btn span {
  position: relative;
  z-index: 1;
}

.crp-btn:hover {
  box-shadow: 0 25px 60px rgba(212,160,23,.35);
}

/* Reveal */
.crp-rv {
  opacity: 0;
  transform: translateY(40px) scale(.98);
  transition:
    opacity .8s cubic-bezier(.16,1,.3,1),
    transform .8s cubic-bezier(.16,1,.3,1);
}

.crp-rv.crp-on {
  opacity: 1;
  transform: none;
}

/* Responsive */
@media (max-width: 1024px) {
  .crp-pillars { grid-template-columns: 1fr 1fr; }
}

@media (max-width: 900px) {
  .crp-intro-layout { grid-template-columns: 1fr; gap: 50px; }
  .crp-filter { grid-template-columns: 1fr; }
  .crp-pillars { grid-template-columns: 1fr; }
  .crp-container { padding: 0 24px; }
}

@media (max-width: 600px) {
  .crp-grid { grid-template-columns: 1fr; }
  .crp-intro, .crp-jobs { padding: 80px 0; }
}

`;

if (!document.getElementById("cr-css-v3")) {
  const s = document.createElement("style");
  s.id = "cr-css-v3"; s.textContent = CSS;
  document.head.appendChild(s);
}

/* ── Data ───────────────────────────────────────────────────── */
const JOBS = [
  { id: "python-faculty",            title: "Python Faculty",            category: "python faculty",            type: "Full Time", location: "Kochi" },
  { id: "web-development-faculty",   title: "Web Development Faculty",   category: "web development faculty",   type: "Full Time", location: "Kochi" },
  { id: "digital-marketing-faculty", title: "Digital Marketing Faculty", category: "digital marketing faculty", type: "Full Time", location: "Calicut" },
];

const PILLARS = [
  { icon: "🌱", title: "Growth Culture",      text: "Clear career paths, mentorship, and an annual learning budget for every team member." },
  { icon: "🤝", title: "Collaborative Team",  text: "Open structure where every voice is heard and good ideas come from anywhere." },
  { icon: "🌍", title: "Global Opportunities", text: "Work across Dubai, Kerala, and Georgia with real cross-border exposure." },
];

const PERKS = [
  { icon: "💰", title: "Competitive Salary",   text: "Market-aligned, reviewed annually." },
  { icon: "🏥", title: "Health Insurance",     text: "Full medical coverage for you and family." },
  { icon: "📚", title: "Learning Budget",      text: "Courses, certifications & conferences." },
  { icon: "🕐", title: "Flexible Hours",       text: "Results-first, not clock-watching." },
  { icon: "✈️", title: "Travel Perks",        text: "Cross-office trips across 3 countries." },
  { icon: "🎯", title: "Real Impact",          text: "Own your work from day one." },
  { icon: "🏆", title: "Recognition",          text: "Quarterly awards & team celebrations." },
  { icon: "☕", title: "Great Workspace",      text: "Modern offices built for deep work." },
];

/* ── Very subtle canvas — just soft gold dots ──────────────── */
function BgCanvas() {
  const ref = useRef(null);
  useEffect(() => {
    const cv = ref.current; if (!cv) return;
    const ctx = cv.getContext("2d");
    let W, H, raf;
    const resize = () => { W = cv.offsetWidth; H = cv.offsetHeight; cv.width = W; cv.height = H; };
    resize(); window.addEventListener("resize", resize);

    const pts = Array.from({ length: 30 }, () => ({
      nx: Math.random(), ny: Math.random(),
      vx: (Math.random()-.5)*.00012, vy: (Math.random()-.5)*.00009,
      r: .6 + Math.random() * 1.4,
      a: .04 + Math.random() * .1,
      ph: Math.random() * Math.PI * 2,
    }));

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      pts.forEach(p => {
        p.nx = (p.nx + p.vx + 1) % 1;
        p.ny = (p.ny + p.vy + 1) % 1;
        p.ph += .01;
        ctx.beginPath();
        ctx.arc(p.nx * W, p.ny * H, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(212,160,23,${p.a * (.5 + .5 * Math.sin(p.ph))})`;
        ctx.fill();
      });
      // faint connection lines
      for (let i = 0; i < pts.length; i++) {
        for (let j = i + 1; j < pts.length; j++) {
          const dx = (pts[i].nx - pts[j].nx) * W;
          const dy = (pts[i].ny - pts[j].ny) * H;
          const d = Math.sqrt(dx * dx + dy * dy);
          if (d < 160) {
            ctx.beginPath();
            ctx.moveTo(pts[i].nx * W, pts[i].ny * H);
            ctx.lineTo(pts[j].nx * W, pts[j].ny * H);
            ctx.strokeStyle = `rgba(212,160,23,${.04 * (1 - d / 160)})`;
            ctx.lineWidth = .5;
            ctx.stroke();
          }
        }
      }
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener("resize", resize); };
  }, []);
  return <canvas ref={ref} className="crp-canvas" />;
}

/* ── Component ──────────────────────────────────────────────── */
const Career = () => {
  const [search,   setSearch]   = useState("");
  const [category, setCategory] = useState("all");
  const [type,     setType]     = useState("all");
  const [location, setLocation] = useState("all");

  useEffect(() => {
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add("crp-on"); }),
      { threshold: 0.1 }
    );
    document.querySelectorAll(".crp-rv").forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const filtered = useMemo(() => JOBS.filter(j =>
    j.title.toLowerCase().includes(search.toLowerCase()) &&
    (category === "all" || j.category === category) &&
    (type     === "all" || j.type     === type) &&
    (location === "all" || j.location === location)
  ), [search, category, type, location]);

  return (
    <div className="crp">
      <BgCanvas />

      {/* Banner — untouched */}
      <CinematicBanner
        image="/assets/img/ugi-banner-career.jpg"
        eyebrow="UGI — CAREERS"
        title={<>Build Your Career<br />With UGI</>}
        sub="Moments that shaped us, memories that stay forever."
        height="88vh"
      />

      {/* ── INTRO ── */}
      <section className="crp-intro">
        <div className="crp-container">
          <div className="crp-intro-layout">
            {/* Left */}
            <div className="crp-intro-left">
              <span className="crp-tag crp-rv">Ethical Employer</span>
              <h2 className="crp-rv">
                Being an <span>ethical</span><br />employer
              </h2>
              <p className="crp-rv">
                UGI, a well-known Middle Eastern firm, has nine subsidiaries in Georgia, India,
                and the GCC countries. We work with clients both locally and internationally,
                providing prompt, cost-effective, and high-quality services worldwide.
              </p>
              <p className="crp-rv">
                UGI is constantly developing innovative ideas to open the door for significant
                industry breakthroughs. As a trustworthy employer, we take a holistic approach
                to our employees' well-being.
              </p>
            </div>

            {/* Right */}
            <div className="crp-intro-right">
              <p className="crp-rv">
                We strive to provide our employees with opportunities for growth and development
                while offering a supportive and comfortable work environment. Our goal is to be
                more than just an employer — we aim to be a partner in your career journey.
              </p>
              <blockquote className="crp-quote crp-rv">
                "We believe that our employees are our most valuable assets, and we are committed
                to treating them with dignity and respect.{" "}
                <strong>We welcome you and wish you luck with your application!</strong>"
              </blockquote>
            </div>
          </div>

          {/* Pillars */}
          <div className="crp-pillars">
            {PILLARS.map((p, i) => (
              <div className="crp-pillar crp-rv" key={p.title} data-d={String(i + 1)}>
                <span className="crp-pillar-icon">{p.icon}</span>
                <div className="crp-pillar-title">{p.title}</div>
                <p className="crp-pillar-text">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── JOBS ── */}
      <section className="crp-jobs">
        <div className="crp-container">
          <div className="crp-section-header crp-rv">
            <h3>Open Positions</h3>
            <p>Find the right role and grow with us.</p>
          </div>

          {/* Filter */}
          <div className="crp-filter crp-rv">
            <input
              type="text"
              placeholder="Search positions…"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />
            <select onChange={e => setCategory(e.target.value)}>
              <option value="all">All Categories</option>
              <option value="python faculty">Python Faculty</option>
              <option value="web development faculty">Web Dev Faculty</option>
              <option value="digital marketing faculty">Digital Marketing</option>
            </select>
            <select onChange={e => setType(e.target.value)}>
              <option value="all">All Types</option>
              <option value="Full Time">Full Time</option>
              <option value="Part Time">Part Time</option>
            </select>
            <select onChange={e => setLocation(e.target.value)}>
              <option value="all">All Locations</option>
              <option value="Kochi">Kochi</option>
              <option value="Calicut">Calicut</option>
            </select>
          </div>

          {/* Cards */}
          <div className="crp-grid">
            {filtered.map((job, i) => (
              <article className="crp-card crp-rv" key={job.id} data-d={String(i + 1)}>
                <div className="crp-card-header">
                  <h4 className="crp-card-title">{job.title}</h4>
                </div>
                <div className="crp-card-tags">
                  <span className="crp-card-tag crp-card-tag--role">{job.category}</span>
                  <span className="crp-card-tag crp-card-tag--type">{job.type}</span>
                  <span className="crp-card-tag crp-card-tag--loc">📍 {job.location}</span>
                </div>
                <Link to="" className="crp-btn">
                  Apply Now <span className="crp-btn-arrow">→</span>
                </Link>
              </article>
            ))}
            {filtered.length === 0 && (
              <p className="crp-empty">No positions match your filters.</p>
            )}
          </div>
        </div>
      </section>

      {/* ── PERKS ── */}
      
    </div>
  );
};

export default Career;