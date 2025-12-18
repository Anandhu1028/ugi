const Contact = () => {
  return (
    <section className="contact-section">

      {/* ================= BANNER ================= */}
      <div
        className="contact-banner"
        style={{
          backgroundImage: "url('/assets/img/banner/OIP.webp')",
        }}
      >
        <div className="contact-banner-overlay" />

        
      </div>

      {/* ================= MAIN CARD ================= */}
      <div className="contact-container">
        <div className="contact-card">

          {/* LEFT */}
          <div className="contact-form-area">
            <h2>Let’s talk</h2>
            <p className="sub">
              Share your requirements and our team will reach out shortly.
            </p>

            <form>
              <div className="field-row">
                <input type="text" placeholder="Your Name" />
                <input type="email" placeholder="Email Address" />
              </div>

              <div className="field-row">
                <input type="text" placeholder="Mobile Number" />
                <input type="text" placeholder="Company" />
              </div>

              <textarea rows="4" placeholder="Tell us about your requirement" />

              <button type="submit">Send Message</button>
            </form>
          </div>

          {/* RIGHT */}
          <div className="contact-info-area">

            {/* CENTER ANIMATED VISUAL */}
            <div className="contact-visual center-visual">
              <img
                src="/assets/img/contact.png"
                alt="Send us a message"
                className="float-anim"
              />
            </div>

            {/* TWO COLUMN INFO */}
            <div className="contact-info-grid">

              {/* INDIA */}
              <div className="office-card">
                <h4 className="office-title">India Office</h4>

                <p>
                  <strong>Address</strong><br />
                  No:57, 5th Cross Road, Giri Nagar Housing Society,<br />
                  Kadavanthra, Kochi, Kerala 682020, India
                </p>

                <p>
                  <strong>Phone</strong><br />
                  +91 95390 14658
                </p>

                <p>
                  <strong>Email</strong><br />
                  info@uginitiative.com<br />
                  career.dxb@uginitiative.com
                </p>
              </div>

              {/* DUBAI */}
              <div className="office-card">
                <h4 className="office-title">Dubai Office</h4>

                <p>
                  <strong>Address</strong><br />
                  Karama, Dubai, United Arab Emirates
                </p>

                <p>
                  <strong>Phone</strong><br />
                  +971 4342 8008
                </p>

                <p>
                  <strong>Email</strong><br />
                  info@uginitiative.com<br />
                  career.dxb@uginitiative.com
                </p>
              </div>

            </div>

            {/* SOCIALS */}
            <div className="socials center-socials">
              <i className="fab fa-linkedin-in" />
              <i className="fab fa-instagram" />
              <i className="fab fa-facebook-f" />
            </div>

          </div>

          {/* Glow elements */}
          <span className="glow glow-gold" />
          <span className="glow glow-soft" />

        </div>
      </div>

      {/* ================= MAP ================= */}
      <div className="location-map-section">
        <div className="location-map-header">
          <h2>Our India Office</h2>
          <p>Kochi, Kerala, India</p>
        </div>

        <div className="location-map-wrapper">
          <iframe
            title="UGI India Office Location"
            src="https://www.google.com/maps?q=No:57,5th%20Cross%20Road,Giri%20Nagar,Kadavanthra,Kochi,Kerala,India&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>
      </div>

    </section>
  );
};

export default Contact;
