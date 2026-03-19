import { useState, useEffect, useRef } from "react";
import emailjs from "@emailjs/browser";
import CinematicBanner from "../CinematicBanner";

/* ─── FONT + CSS INJECTION ──────────────────────────── */
function injectCSS(id, css) {
  if (typeof document === "undefined" || document.getElementById(id)) return;
  const s = document.createElement("style");
  s.id = id;
  s.textContent = css;
  document.head.appendChild(s);
}
function injectFont(id, href) {
  if (typeof document === "undefined" || document.getElementById(id)) return;
  const l = document.createElement("link");
  l.id = id;
  l.rel = "stylesheet";
  l.href = href;
  document.head.appendChild(l);
}

const CSS = `
/* ══════════ TOKENS ══════════ */
:root {
  --ct-ink:   #070707;
  --ct-ink2:  #0e0d0b;
  --ct-ink3:  #161412;
  --ct-ink4:  #1e1b17;
  --ct-ppr:   #f5f0e8;
  --ct-g1:    #c89b2a;
  --ct-g2:    #e8b840;
  --ct-g3:    #f5cf6a;
  --ct-g4:    #a07818;
  --ct-grd:   linear-gradient(115deg,#a07818 0%,#c89b2a 30%,#f5cf6a 55%,#e8b840 75%,#c89b2a 100%);
  --ct-ga:    rgba(200,155,42,.22);
  --ct-gab:   rgba(200,155,42,.07);
  --ct-bdr:   rgba(255,255,255,.065);
  --ct-bdrg:  rgba(200,155,42,.3);
  --ct-fh:    'Bebas Neue', serif;
  --ct-fs:    'Playfair Display', Georgia, serif;
  --ct-fb:    'Syne', sans-serif;
  --ct-ease:  cubic-bezier(.16,1,.3,1);
}
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

/* ══════════ PAGE SHELL ══════════ */
.ct-page {
  background: var(--ct-ink);
  color: #fff;
  font-family: var(--ct-fb);
  overflow-x: hidden;
}

/* ══════════ NOISE ══════════ */
.ct-noise {
  position: fixed; inset: 0; z-index: 9001; pointer-events: none; opacity: .025;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E");
  background-size: 200px;
}

/* ══════════ CONTACT BODY ══════════ */
.ct-body {
  position: relative;
  padding: 0 0 0;
}

/* ── Animated BG stripes ── */
.ct-body::before {
  content: '';
  position: absolute; inset: -5% -5%;
  background: repeating-linear-gradient(
    -55deg,
    transparent, transparent 78px,
    rgba(200,155,42,.012) 78px, rgba(200,155,42,.012) 79px
  );
  animation: ctStripe 40s linear infinite;
  pointer-events: none; z-index: 0;
}
@keyframes ctStripe { to { transform: translateX(158px); } }

/* ══════════ SECTION HEADER ══════════ */
.ct-sec-head {
  text-align: center;
  padding: 100px 5% 64px;
  position: relative; z-index: 2;
}
.ct-orn {
  display: flex; align-items: center; justify-content: center; gap: 14px;
  margin-bottom: 18px;
}
.ct-orn-l { width: 72px; height: 1px; background: linear-gradient(to right, transparent, var(--ct-ga)); }
.ct-orn-gem { color: var(--ct-g1); font-size: 8px; }
.ct-orn-r { width: 72px; height: 1px; background: linear-gradient(to left, transparent, var(--ct-ga)); }

.ct-eyebrow {
  font-size: 9.5px; letter-spacing: 7px; text-transform: uppercase;
  color: var(--ct-g2); font-weight: 600; margin-bottom: 18px;
  display: block;
}
.ct-sec-head h2 {
  font-family: var(--ct-fh);
  font-size: clamp(3.5rem, 6vw, 7rem);
  line-height: .88; letter-spacing: 2px; color: #fff;
  margin-bottom: 18px;
}
.ct-sec-head h2 em {
  font-family: var(--ct-fs); font-style: italic;
  background: var(--ct-grd); -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; background-clip: text;
  font-size: .68em; display: block; letter-spacing: 4px;
}
.ct-sec-head p {
  font-family: var(--ct-fs); font-style: italic;
  font-size: 1rem; color: rgba(255,255,255,.35); line-height: 1.8;
}

/* ══════════ MAIN GRID ══════════ */
.ct-main {
  max-width: 1380px; margin: 0 auto;
  padding: 0 5% 130px;
  display: grid; grid-template-columns: 1.15fr 1fr;
  gap: 28px;
  position: relative; z-index: 2;
  align-items: start;
}

/* ══════════ FORM PANEL ══════════ */
.ct-form-panel {
  background: var(--ct-ink2);
  border: 1px solid var(--ct-bdr);
  position: relative; overflow: hidden;
  padding: 60px 56px 64px;
}
/* gold left strip */
.ct-form-panel::before {
  content: ''; position: absolute; top: 0; left: 0; width: 3px; height: 0;
  background: var(--ct-grd);
  animation: ctFillBar 1.4s var(--ct-ease) .5s forwards;
}
@keyframes ctFillBar { to { height: 100%; } }
/* ghost watermark */
.ct-form-panel::after {
  content: 'MSG';
  position: absolute; bottom: -18px; right: -10px;
  font-family: var(--ct-fh); font-size: 190px;
  color: rgba(200,155,42,.025); line-height: 1; pointer-events: none;
}

.ct-form-panel-head { margin-bottom: 40px; }
.ct-form-panel-head h3 {
  font-family: var(--ct-fh);
  font-size: clamp(2.4rem, 3.5vw, 3.5rem);
  letter-spacing: 1.5px; color: #fff; line-height: .92; margin-bottom: 14px;
}
.ct-form-panel-head h3 em {
  font-family: var(--ct-fs); font-style: italic;
  color: var(--ct-g2); font-size: .62em; display: block;
  font-weight: 400; letter-spacing: 3px; margin-bottom: 4px;
}
.ct-form-panel-head p {
  font-size: 14px; color: rgba(255,255,255,.38);
  font-family: var(--ct-fs); font-style: italic; line-height: 1.8;
  max-width: 380px;
}
.ct-divline {
  width: 48px; height: 2px; background: var(--ct-grd);
  border-radius: 2px; margin-bottom: 24px;
  box-shadow: 0 0 12px rgba(200,155,42,.4);
}

/* ─── Form fields ─── */
.ct-field-row {
  display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;
}
.ct-field-group { display: flex; flex-direction: column; gap: 6px; }
.ct-field-group label {
  font-size: 9.5px; letter-spacing: 4px; text-transform: uppercase;
  color: rgba(255,255,255,.35); font-weight: 600;
  padding-left: 2px;
}
.ct-field-group input,
.ct-field-group textarea,
.ct-field-group select {
  background: rgba(255,255,255,.04);
  border: 1px solid rgba(255,255,255,.08);
  border-bottom: 2px solid rgba(255,255,255,.1);
  color: #fff; font-size: 14px;
  font-family: var(--ct-fb);
  padding: 15px 18px;
  outline: none;
  border-radius: 2px;
  transition: border-color .35s, background .35s, box-shadow .35s;
  width: 100%;
}
.ct-field-group input::placeholder,
.ct-field-group textarea::placeholder { color: rgba(255,255,255,.2); }
.ct-field-group input:focus,
.ct-field-group textarea:focus {
  border-color: rgba(200,155,42,.2);
  border-bottom-color: var(--ct-g2);
  background: rgba(200,155,42,.04);
  box-shadow: 0 0 0 3px rgba(200,155,42,.08), 0 4px 24px rgba(0,0,0,.3);
}
.ct-field-group textarea { resize: vertical; min-height: 130px; }

/* ─── Single fields ─── */
.ct-field-full { margin-bottom: 16px; }

/* ─── Submit ─── */
.ct-submit-row { margin-top: 32px; display: flex; align-items: center; gap: 24px; }
.ct-submit {
  display: inline-flex; align-items: center; gap: 14px;
  padding: 18px 44px;
  background: #fff; color: var(--ct-ink);
  font-size: 10.5px; letter-spacing: 4px; text-transform: uppercase;
  font-weight: 700; font-family: var(--ct-fb);
  border: none; cursor: pointer; border-radius: 2px;
  position: relative; overflow: hidden;
  transition: color .4s, box-shadow .4s, transform .3s;
}
.ct-submit::before {
  content: ''; position: absolute; inset: 0;
  background: var(--ct-grd); transform: translateX(-104%);
  transition: transform .45s var(--ct-ease);
}
.ct-submit:hover { box-shadow: 0 12px 44px rgba(200,155,42,.45); transform: translateY(-2px); }
.ct-submit:hover::before { transform: translateX(0); }
.ct-submit span, .ct-submit svg { position: relative; z-index: 1; }
.ct-submit:disabled { opacity: .55; cursor: not-allowed; transform: none; box-shadow: none; }

/* spinner */
.ct-spinner {
  width: 16px; height: 16px; border-radius: 50%;
  border: 2px solid rgba(0,0,0,.2); border-top-color: var(--ct-ink);
  animation: spin .7s linear infinite; position: relative; z-index: 1;
}
@keyframes spin { to { transform: rotate(360deg); } }

.ct-status {
  font-size: 13px; font-family: var(--ct-fs); font-style: italic;
  padding: 10px 0; margin-top: 18px;
  display: flex; align-items: center; gap: 8px;
}
.ct-status.ok  { color: #6fcf97; }
.ct-status.err { color: #eb5757; }
.ct-status-dot {
  width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0;
}
.ct-status.ok  .ct-status-dot { background: #6fcf97; }
.ct-status.err .ct-status-dot { background: #eb5757; }

/* ══════════ RIGHT COLUMN ══════════ */
.ct-right { display: flex; flex-direction: column; gap: 20px; }

/* ══════════ ADDRESS PANEL ══════════ */
.ct-addr-panel {
  background: var(--ct-ink2);
  border: 1px solid var(--ct-bdr);
  position: relative; overflow: hidden;
  padding: 44px 44px 48px;
}
/* top gold gradient bar */
.ct-addr-panel::before {
  content: '';
  position: absolute; top: 0; left: 0; right: 0; height: 2px;
  background: var(--ct-grd);
}
/* ghost letter */
.ct-addr-panel::after {
  content: 'HQ';
  position: absolute; bottom: -16px; right: -6px;
  font-family: var(--ct-fh); font-size: 160px;
  color: rgba(200,155,42,.025); line-height: 1; pointer-events: none;
}

.ct-addr-head { margin-bottom: 32px; }
.ct-addr-head h4 {
  font-family: var(--ct-fh);
  font-size: 1.7rem; letter-spacing: 1.5px; color: #fff;
  margin-bottom: 6px;
}
.ct-addr-head p {
  font-family: var(--ct-fs); font-style: italic;
  font-size: 13px; color: rgba(255,255,255,.32); line-height: 1.6;
}

/* Office tabs */
.ct-office-tabs {
  display: flex; gap: 0; border-bottom: 1px solid rgba(255,255,255,.07);
  margin-bottom: 28px;
}
.ct-tab {
  font-size: 9.5px; letter-spacing: 4px; text-transform: uppercase;
  color: rgba(255,255,255,.3); padding: 10px 0; margin-right: 28px;
  cursor: pointer; border-bottom: 2px solid transparent;
  transition: color .3s, border-color .3s;
  font-weight: 600; background: none; border-left: none; border-right: none; border-top: none;
}
.ct-tab.active { color: var(--ct-g2); border-bottom-color: var(--ct-g2); }
.ct-tab:hover:not(.active) { color: rgba(255,255,255,.6); }

/* Office detail */
.ct-office { display: none; }
.ct-office.visible { display: block; }

.ct-info-rows { display: flex; flex-direction: column; gap: 20px; }
.ct-info-row {
  display: flex; gap: 16px; align-items: flex-start;
  padding: 18px 20px;
  background: rgba(255,255,255,.025);
  border: 1px solid rgba(255,255,255,.05);
  border-radius: 2px;
  position: relative; overflow: hidden;
  transition: background .35s, border-color .35s;
}
.ct-info-row::before {
  content: ''; position: absolute; left: 0; top: 0; bottom: 0; width: 2px;
  background: var(--ct-grd); transform: scaleY(0); transform-origin: bottom;
  transition: transform .5s var(--ct-ease);
}
.ct-info-row:hover { background: rgba(200,155,42,.04); border-color: rgba(200,155,42,.15); }
.ct-info-row:hover::before { transform: scaleY(1); }
.ct-info-icon {
  width: 38px; height: 38px; flex-shrink: 0;
  border-radius: 2px; background: var(--ct-gab);
  border: 1px solid var(--ct-ga);
  display: flex; align-items: center; justify-content: center;
  font-size: 16px; line-height: 1;
}
.ct-info-content { flex: 1; min-width: 0; }
.ct-info-lbl {
  font-size: 9px; letter-spacing: 4px; text-transform: uppercase;
  color: var(--ct-g2); font-weight: 600; margin-bottom: 5px; display: block;
}
.ct-info-val {
  font-size: 13.5px; color: rgba(255,255,255,.7);
  line-height: 1.65;
}
.ct-info-val a { color: rgba(255,255,255,.7); text-decoration: none; transition: color .3s; }
.ct-info-val a:hover { color: var(--ct-g2); }

/* ══════════ SOCIAL PANEL ══════════ */
.ct-social-panel {
  background: var(--ct-ink3);
  border: 1px solid var(--ct-bdr);
  padding: 32px 44px;
  display: flex; align-items: center; justify-content: space-between; gap: 24px;
  position: relative; overflow: hidden;
}
.ct-social-panel::after {
  content: '';
  position: absolute; inset: 0;
  background: radial-gradient(ellipse 60% 100% at 100% 50%, rgba(200,155,42,.04), transparent 65%);
  pointer-events: none;
}
.ct-social-copy p {
  font-size: 9.5px; letter-spacing: 4px; text-transform: uppercase;
  color: rgba(255,255,255,.3); margin-bottom: 6px;
}
.ct-social-copy strong {
  font-family: var(--ct-fh); font-size: 1.35rem;
  letter-spacing: 1.5px; color: #fff;
}
.ct-socials { display: flex; gap: 10px; position: relative; z-index: 1; }
.ct-social-btn {
  width: 44px; height: 44px; border-radius: 2px;
  background: rgba(255,255,255,.05); border: 1px solid rgba(255,255,255,.08);
  display: flex; align-items: center; justify-content: center;
  color: rgba(255,255,255,.45); font-size: 16px;
  cursor: pointer; transition: all .35s var(--ct-ease);
  position: relative; overflow: hidden;
  text-decoration: none;
}
.ct-social-btn::before {
  content: ''; position: absolute; inset: 0;
  background: var(--ct-grd); transform: translateY(110%);
  transition: transform .38s var(--ct-ease);
}
.ct-social-btn:hover { border-color: rgba(200,155,42,.4); color: var(--ct-ink); box-shadow: 0 8px 28px rgba(200,155,42,.35); }
.ct-social-btn:hover::before { transform: translateY(0); }
.ct-social-btn svg { position: relative; z-index: 1; }

/* ══════════ MAP SECTION ══════════ */
.ct-map-section {
  position: relative; z-index: 2;
  border-top: 1px solid rgba(255,255,255,.05);
}
.ct-map-header {
  max-width: 1380px; margin: 0 auto; padding: 80px 5% 48px;
  display: flex; align-items: flex-end; justify-content: space-between; gap: 40px;
}
.ct-map-header-left h3 {
  font-family: var(--ct-fh);
  font-size: clamp(2.4rem, 4vw, 4.5rem);
  letter-spacing: 2px; color: #fff; line-height: .9; margin-bottom: 10px;
}
.ct-map-header-left h3 span {
  background: var(--ct-grd); -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; background-clip: text;
}
.ct-map-header-left p {
  font-family: var(--ct-fs); font-style: italic;
  font-size: 14px; color: rgba(255,255,255,.3);
}
.ct-map-meta {
  display: flex; gap: 12px; align-items: center;
  font-size: 11px; letter-spacing: 2px; text-transform: uppercase;
  color: rgba(255,255,255,.25);
}
.ct-map-meta span { color: var(--ct-g2); }
.ct-map-rule {
  position: relative;
  margin: 0 5% 0;
  border-top: 1px solid rgba(255,255,255,.05);
}
.ct-map-wrapper {
  position: relative;
  height: 480px;
  overflow: hidden;
}
.ct-map-overlay {
  position: absolute; inset: 0;
  background: linear-gradient(to bottom, var(--ct-ink) 0%, transparent 12%, transparent 88%, var(--ct-ink) 100%),
              linear-gradient(to right,  var(--ct-ink) 0%, transparent 8%,  transparent 92%, var(--ct-ink) 100%);
  pointer-events: none; z-index: 2;
}
.ct-map-wrapper iframe {
  width: 100%; height: 100%; border: none;
  filter: grayscale(1) invert(1) contrast(0.88) brightness(0.6) sepia(0.25) hue-rotate(190deg) saturate(1.3);
  display: block;
}

/* ══════════ REVEAL ANIMATIONS ══════════ */
.ct-rv {
  opacity: 0; transform: translateY(30px) scale(.99);
  transition: opacity .75s var(--ct-ease), transform .75s var(--ct-ease);
}
.ct-rv.ct-on { opacity: 1; transform: none; }
.ct-rv[data-d="1"] { transition-delay: .08s; }
.ct-rv[data-d="2"] { transition-delay: .16s; }
.ct-rv[data-d="3"] { transition-delay: .24s; }
.ct-rv[data-d="4"] { transition-delay: .32s; }

/* ══════════ RESPONSIVE ══════════ */
@media (max-width: 1100px) {
  .ct-main { grid-template-columns: 1fr; gap: 20px; }
  .ct-form-panel { padding: 48px 40px 52px; }
}
@media (max-width: 700px) {
  .ct-field-row { grid-template-columns: 1fr; }
  .ct-form-panel, .ct-addr-panel { padding: 36px 28px 40px; }
  .ct-social-panel { flex-direction: column; align-items: flex-start; }
  .ct-map-header { flex-direction: column; gap: 16px; }
  .ct-map-wrapper { height: 360px; }
  .ct-submit-row { flex-direction: column; align-items: flex-start; }
}
`;

/* ─── SVG icons ──────────────────────────────────── */
const IconPin = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);
const IconPhone = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81 19.79 19.79 0 01.11 1.18 2 2 0 012.11 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.09a16 16 0 006 6l.91-.91a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
  </svg>
);
const IconMail = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
    <polyline points="22,6 12,13 2,6" />
  </svg>
);
const IconSend = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="22" y1="2" x2="11" y2="13" />
    <polygon points="22 2 15 22 11 13 2 9 22 2" />
  </svg>
);
const IconLinkedIn = () => (
  <svg
    width="17"
    height="17"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);
const IconInsta = () => (
  <svg
    width="17"
    height="17"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);
const IconFb = () => (
  <svg
    width="17"
    height="17"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
  </svg>
);

/* ─── OFFICES DATA ───────────────────────────────── */
const OFFICES = {
  india: {
    label: "India",
    rows: [
      {
        icon: <IconPin />,
        label: "Address",
        value: (
          <>
            No:57, 5th Cross Road, Giri Nagar Housing Society,
            <br />
            Kadavanthra, Kochi, Kerala 682020, India
          </>
        ),
      },
      {
        icon: <IconPhone />,
        label: "Phone",
        value: <a href="tel:+919539014658">+91 95390 14658</a>,
      },
      {
        icon: <IconMail />,
        label: "Email",
        value: (
          <>
            <a href="mailto:info@uginitiative.com">info@uginitiative.com</a>
            <br />
            <a href="mailto:career.dxb@uginitiative.com">
              career.dxb@uginitiative.com
            </a>
          </>
        ),
      },
    ],
  },
  dubai: {
    label: "Dubai",
    rows: [
      {
        icon: <IconPin />,
        label: "Address",
        value: <>Karama, Dubai, United Arab Emirates</>,
      },
      {
        icon: <IconPhone />,
        label: "Phone",
        value: <a href="tel:+97143428008">+971 4342 8008</a>,
      },
      {
        icon: <IconMail />,
        label: "Email",
        value: (
          <>
            <a href="mailto:info@uginitiative.com">info@uginitiative.com</a>
            <br />
            <a href="mailto:career.dxb@uginitiative.com">
              career.dxb@uginitiative.com
            </a>
          </>
        ),
      },
    ],
  },
};

/* ─── MAIN COMPONENT ─────────────────────────────── */
const Contact = () => {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);
  const [activeTab, setActiveTab] = useState("india");
  const pageRef = useRef(null);

  /* CSS injection */
  useEffect(() => {
    injectFont(
      "ct-fonts",
      "https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400;1,700&family=Bebas+Neue&family=Syne:wght@300;400;500;600;700;800&display=swap",
    );
    injectCSS("ct-css", CSS);
  }, []);

  /* Scroll reveal */
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add("ct-on");
        }),
      { threshold: 0.07 },
    );
    document.querySelectorAll(".ct-rv").forEach((el) => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");
    const form = e.target;
    emailjs
      .send(
        "service_1ynplud",
        "template_h2dtnel",
        {
          from_name: form.name.value,
          from_email: form.email.value,
          phone: form.phone.value,
          company: form.company.value,
          message: form.message.value,
        },
        "cR-PfpkkMVlN2udLc",
      )
      .then(() => {
        setStatus("success");
        setLoading(false);
        form.reset();
      })
      .catch((err) => {
        console.error(err);
        setStatus("error");
        setLoading(false);
      });
  };

  const office = OFFICES[activeTab];

  return (
    <div className="ct-page" ref={pageRef}>
      <div className="ct-noise" />

      {/* ── BANNER ── */}
      <CinematicBanner
        image="/assets/img/ugi-banner-History-1.jpg"
        eyebrow="UGI — CONTACT US"
        title={
          <>
            Get In Touch
            <br />
            With Us
          </>
        }
        sub="Moments that shaped us, memories that stay forever."
        height="88vh"
      />

      {/* ── SECTION HEADER ── */}
      <div className="ct-body">
        <div className="ct-sec-head ct-rv">
          <div className="ct-orn">
            <span className="ct-orn-l" />
            <span className="ct-orn-gem">◆</span>
            <span className="ct-orn-r" />
          </div>
          <span className="ct-eyebrow">Reach Out</span>
          <h2>
            Let's Start
            <br />
            <em>A Conversation</em>
          </h2>
          <p>
            Share your requirements and our team will respond within 24 hours.
          </p>
        </div>

        {/* ── MAIN GRID ── */}
        <div className="ct-main">
          {/* ══ FORM PANEL ══ */}
          <div className="ct-form-panel ct-rv">
            <div className="ct-form-panel-head">
              <h3>
                <em>Send Us</em>A Message
              </h3>
              <div className="ct-divline" />
              <p>
                Fill in the form below and one of our specialists will be in
                touch shortly.
              </p>
            </div>

            <form onSubmit={sendEmail} autoComplete="off">
              <div className="ct-field-row">
                <div className="ct-field-group">
                  <label>Your Name</label>
                  <input
                    type="text"
                    name="name"
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="ct-field-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="john@company.com"
                    required
                  />
                </div>
              </div>

              <div className="ct-field-row">
                <div className="ct-field-group">
                  <label>Mobile Number</label>
                  <input
                    type="text"
                    name="phone"
                    placeholder="+971 5X XXX XXXX"
                  />
                </div>
                <div className="ct-field-group">
                  <label>Company</label>
                  <input
                    type="text"
                    name="company"
                    placeholder="Your Company Ltd."
                  />
                </div>
              </div>

              <div className="ct-field-full">
                <div className="ct-field-group">
                  <label>Your Message</label>
                  <textarea
                    name="message"
                    placeholder="Tell us about your requirement or project…"
                    required
                  />
                </div>
              </div>

              <div className="ct-submit-row">
                <button className="ct-submit" type="submit" disabled={loading}>
                  {loading ? (
                    <>
                      <div className="ct-spinner" />
                      <span>Sending…</span>
                    </>
                  ) : (
                    <>
                      <span>Send Message</span>
                      <IconSend />
                    </>
                  )}
                </button>
              </div>

              {status === "success" && (
                <div className="ct-status ok">
                  <span className="ct-status-dot" />
                  Message sent successfully! We'll be in touch soon.
                </div>
              )}
              {status === "error" && (
                <div className="ct-status err">
                  <span className="ct-status-dot" />
                  Couldn't send message. Please try again or email us directly.
                </div>
              )}
            </form>
          </div>

          {/* ══ RIGHT COLUMN ══ */}
          <div className="ct-right">
            {/* ── ADDRESS PANEL ── */}
            <div className="ct-addr-panel ct-rv" data-d="1">
              <div className="ct-addr-head">
                <h4>Our Offices</h4>
                <p>Serving clients across UAE, India & Georgia</p>
              </div>

              {/* Tabs */}
              <div className="ct-office-tabs">
                {Object.entries(OFFICES).map(([key, off]) => (
                  <button
                    key={key}
                    className={`ct-tab${activeTab === key ? " active" : ""}`}
                    onClick={() => setActiveTab(key)}
                  >
                    {off.label}
                  </button>
                ))}
              </div>

              {/* Office Detail */}
              <div className={`ct-office visible`}>
                <div className="ct-info-rows">
                  {office.rows.map((row, i) => (
                    <div className="ct-info-row" key={i}>
                      <div className="ct-info-icon">{row.icon}</div>
                      <div className="ct-info-content">
                        <span className="ct-info-lbl">{row.label}</span>
                        <div className="ct-info-val">{row.value}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* ── SOCIAL PANEL ── */}
            <div className="ct-social-panel ct-rv" data-d="2">
              <div className="ct-social-copy">
                <p>Connect with us</p>
                <strong>Follow UGI Initiative</strong>
              </div>
              <div className="ct-socials">
                <a href="#" className="ct-social-btn" aria-label="LinkedIn">
                  <IconLinkedIn />
                </a>
                <a href="#" className="ct-social-btn" aria-label="Instagram">
                  <IconInsta />
                </a>
                <a href="#" className="ct-social-btn" aria-label="Facebook">
                  <IconFb />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* ══ MAP SECTION ══ */}
        <div className="ct-map-section">
          <div className="ct-map-header ct-rv">
            <div className="ct-map-header-left">
              <h3>
                Find <span>Our</span>
                <br />
                India Office
              </h3>
              <p>No:57, 5th Cross Road, Kadavanthra, Kochi, Kerala</p>
            </div>
            <div className="ct-map-meta">
              <span>📍</span> Kochi · Kerala · India
            </div>
          </div>
          <div className="ct-map-rule" />
          <div className="ct-map-wrapper">
            <div className="ct-map-overlay" />
            <iframe
              title="UGI India Office Location"
              src="https://www.google.com/maps?q=No:57,5th%20Cross%20Road,Giri%20Nagar,Kadavanthra,Kochi,Kerala,India&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
