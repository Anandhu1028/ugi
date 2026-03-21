import { Link, useLocation } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import "./Header.css";

const SOCIALS = [
  {
    label: "Instagram",
    href: "https://www.instagram.com/ugigroupofinitiatives/",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/ugigroupofinitiatives",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
        <rect x="2" y="9" width="4" height="12" />
        <circle cx="4" cy="4" r="2" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/channel/UCOVJgk1yk41TsUpSQjzuNtA",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22.54 6.42a2.78 2.78 0 0 0-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46A2.78 2.78 0 0 0 1.46 6.42 29 29 0 0 0 1 12a29 29 0 0 0 .46 5.58 2.78 2.78 0 0 0 1.95 1.96C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 0 0 1.95-1.96A29 29 0 0 0 23 12a29 29 0 0 0-.46-5.58z" />
        <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
];

const ABOUT_ITEMS = [
  { to: "#",  label: "History",  icon: "◈" },
  { to: "/about/journey",  label: "Journey",  icon: "◈" },
  { to: "/about/chairman", label: "Chairman", icon: "◈" },
];

const Header = () => {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [mobileAboutOpen, setMobileAboutOpen] = useState(false);
  const aboutRef                  = useRef(null);
  const closeTimer                = useRef(null);
  const lastScrollY               = useRef(0);
  const location                  = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      lastScrollY.current = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close everything on route change
  useEffect(() => {
    setMenuOpen(false);
    setAboutOpen(false);
    setMobileAboutOpen(false);
  }, [location]);

  // Close mobile menu on outside click
  useEffect(() => {
    if (!menuOpen) return;
    const close = () => setMenuOpen(false);
    document.addEventListener("click", close);
    return () => document.removeEventListener("click", close);
  }, [menuOpen]);

  // Hover with delay so gap between trigger and panel doesn't close it
  const handleMouseEnter = () => {
    clearTimeout(closeTimer.current);
    setAboutOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimer.current = setTimeout(() => setAboutOpen(false), 120);
  };

  const isAboutActive = location.pathname.startsWith("/about");

  return (
    <header className={`modern-header ${scrolled ? "scrolled" : ""}`}>
      <div className="container header-container">

        {/* LOGO */}
        <Link className="modern-logo" to="/">
          <img src="/assets/img/ugi-light.webp" alt="UGI Logo" />
        </Link>

        {/* NAV */}
        <nav className={`modern-nav ${menuOpen ? "nav-open" : ""}`}>
          <ul className="modern-nav-list">
            <li>
              <Link to="/" onClick={() => setMenuOpen(false)}>Home</Link>
            </li>

            {/* ── About with dropdown ── */}
            <li
              className="nav-has-dropdown"
              ref={aboutRef}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              {/* Desktop trigger */}
              <button
                className={`nav-dropdown-trigger${isAboutActive ? " active" : ""}`}
                onClick={() => setMobileAboutOpen((v) => !v)}
                aria-expanded={aboutOpen || mobileAboutOpen}
                aria-haspopup="true"
              >
                About
                <svg
                  className={`nav-chevron${(aboutOpen || mobileAboutOpen) ? " open" : ""}`}
                  width="11" height="11" viewBox="0 0 12 12"
                  fill="none" stroke="currentColor"
                  strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"
                >
                  <path d="M2 4l4 4 4-4" />
                </svg>
              </button>

              {/* Desktop dropdown — hover controlled */}
              <div
                className={`nav-dropdown nav-dropdown--desktop${aboutOpen ? " is-open" : ""}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                {/* Invisible bridge fills the gap so hover doesn't break */}
                <div className="nav-dropdown-bridge" />
                <div className="nav-dropdown-inner">
                  {ABOUT_ITEMS.map(({ to, label }, i) => (
                    <Link
                      key={to}
                      to={to}
                      className={`nav-dropdown-item${location.pathname === to ? " active" : ""}`}
                      style={{ animationDelay: `${i * 55}ms` }}
                      onClick={() => setAboutOpen(false)}
                    >
                      <span className="nav-dropdown-dot" />
                      <span className="nav-dropdown-label">{label}</span>
                      <svg className="nav-dropdown-arrow" width="10" height="10" viewBox="0 0 10 10" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M2 5h6M5 2l3 3-3 3" />
                      </svg>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Mobile dropdown — click controlled */}
              <div className={`nav-dropdown nav-dropdown--mobile${mobileAboutOpen ? " is-open" : ""}`}>
                <div className="nav-dropdown-inner">
                  {ABOUT_ITEMS.map(({ to, label }) => (
                    <Link
                      key={to}
                      to={to}
                      className={`nav-dropdown-item${location.pathname === to ? " active" : ""}`}
                      onClick={() => { setMobileAboutOpen(false); setMenuOpen(false); }}
                    >
                      <span className="nav-dropdown-dot" />
                      <span className="nav-dropdown-label">{label}</span>
                    </Link>
                  ))}
                </div>
              </div>
            </li>

            <li><Link to="/initiatives" onClick={() => setMenuOpen(false)}>Initiatives</Link></li>
            <li><Link to="/career"      onClick={() => setMenuOpen(false)}>Career</Link></li>
            <li><Link to="/gallery"     onClick={() => setMenuOpen(false)}>Gallery</Link></li>
            <li><Link to="/events"      onClick={() => setMenuOpen(false)}>Events</Link></li>
            <li><Link to="/csr"         onClick={() => setMenuOpen(false)}>CSR</Link></li>
          </ul>
        </nav>

        {/* RIGHT */}
        <div className="modern-header-right">
          <Link to="/contact" className="modern-btn-contact">Let's Talk</Link>
          <span className="header-divider" />
          <div className="header-socials">
            {SOCIALS.map(({ label, href, icon }) => (
              <a key={label} href={href} target="_blank" rel="noopener noreferrer"
                className="header-social-icon" aria-label={label} title={label}>
                {icon}
                <span className="social-tooltip">{label}</span>
              </a>
            ))}
          </div>
          <button
            className={`hamburger ${menuOpen ? "is-open" : ""}`}
            onClick={(e) => { e.stopPropagation(); setMenuOpen((v) => !v); }}
            aria-label="Toggle menu"
          >
            <span /><span /><span />
          </button>
        </div>

      </div>
    </header>
  );
};

export default Header;