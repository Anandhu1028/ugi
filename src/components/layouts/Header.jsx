import { Link } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const Header = () => {
  const [hideHeader, setHideHeader] = useState(false);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;

      // scroll down → hide
      if (currentY > lastScrollY.current && currentY > 120) {
        setHideHeader(true);
      }
      // scroll up → show
      else {
        setHideHeader(false);
      }

      lastScrollY.current = currentY;
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`cs_site_header cs_style_1 cs_type_1 cs_sticky_header cs_site_header_full_width ${
        hideHeader ? "cs_header_hide" : ""
      }`}
    >
      {/* Top Header */}
      <div className="cs_top_header">
        <div className="container">
          <div className="cs_top_header_in">
            <div className="cs_top_header_left">
              <ul className="cs_top_nav d-flex flex-wrap align-items-center cs_fs_12 text-white m-0 p-0">
                <li>
                  <b className="fw-medium text-white">Address:</b> No:57, 5th
                  Cross Road, Giri Nagar, Kochi, Kerala.
                </li>
                <li>
                  <a href="mailto:info@company.com">info@uginitiative.com</a>
                </li>
              </ul>
            </div>

            <div className="cs_top_header_right">
              <ul className="cs_top_nav d-flex flex-wrap align-items-center cs_fs_12 text-white m-0 p-0">
                <li>
                  <a href="#">Help</a>
                </li>
                <li>
                  <a href="#">Support</a>
                </li>
                <li>
                  <Link to="/contact">Contact</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="cs_main_header">
        <div className="container">
          <div className="cs_main_header_in">
            <div className="cs_main_header_left">
              <Link className="cs_site_branding" to="/">
                <img src="/assets/img/ugi-light.webp" alt="Logo" />
              </Link>

              <div className="cs_nav cs_primary_font fw-medium">
                <ul className="cs_nav_list fw-medium text-uppercase">
                  <li className="">
                    <Link to="/">Home</Link>
                  </li>

                  <li className="menu-item-has-children">
                    <Link to="/about">About</Link>
                    <ul>
                      <li>
                        <Link to="/blog-grid">History</Link>
                      </li>
                      <li>
                        <Link to="/blog-list-with-sidebar">Journey</Link>
                      </li>
                      <li>
                        <Link to="/blog-details"> Chairman</Link>
                      </li>
                      <li>
                        <Link to="/blog-details"> Member</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/initiatives">Initiatives</Link>
                  </li>
                  <li>
                    <Link to="/career">Career</Link>
                  </li>
                  <li>
                    <Link to="/gallery">Gallery</Link>
                  </li>
                  <li>
                    <Link to="/events">Events</Link>
                  </li>
                  <li>
                    <Link to="/csr">CSR</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                </ul>
              </div>
            </div>

            {/* Right Section */}
            <div className="cs_main_header_right">
              <div className="cs_toolbox">
                {/* Search */}
                <div className="cs_header_search_wrap position-relative">
                  <span className="cs_header_search_btn d-flex">
                    <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
                      <path
                        d="M24.7628 23.6399L18.3082 17.2884C19.9984 15.452 21.037 13.0234 21.037 10.3509C21.0362 4.63387 16.3273 0 10.5181 0C4.70891 0 0 4.63387 0 10.3509C0 16.0678 4.70891 20.7017 10.5181 20.7017C13.0281 20.7017 15.3301 19.8335 17.1384 18.3902L23.618 24.7667C23.9338 25.0777 24.4463 25.0777 24.7621 24.7667C25.0785 24.4557 25.0785 23.9509 24.7628 23.6399Z"
                        fill="currentColor"
                      />
                    </svg>
                  </span>
                </div>

                {/* Contact */}
                <div className="cs_header_contact">
                  <div className="cs_header_contact_icon text-accent">
                    {/* keep original SVG here */}
                  </div>
                  <div className="cs_header_contact_right">
                    <h3 className="text-white fw-normal cs_mb_6 cs_fs_13">
                      Need help? Call us:
                    </h3>
                    <h3 className="text-white m-0 cs_fs_13">+971 4342 8008</h3>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
