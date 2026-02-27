import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";
import "./Header.css";

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      if (currentY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`modern-header ${scrolled ? "scrolled" : ""}`}>
      <div className="container header-container">
        {/* LOGO */}
        <Link className="modern-logo" to="/">
          <img src="/assets/img/ugi-light.webp" alt="UGI Logo" />
        </Link>

        {/* NAV */}
        <nav className="modern-nav">
          <ul className="modern-nav-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/initiatives">Initiatives</Link></li>
            <li><Link to="/career">Career</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/events">Events</Link></li>
            <li><Link to="/csr">CSR</Link></li>
          </ul>
        </nav>

        {/* CTA */}
        <div className="modern-header-right">
          <Link to="/contact" className="modern-btn-contact">
            Let's Talk
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
