import { useState } from "react";
import emailjs from "@emailjs/browser";
import CinematicBanner from "../CinematicBanner";


const Contact = () => {
  const [status, setStatus] = useState("");
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus("");

    const form = e.target;

    emailjs
      .send(
        "service_1ynplud", // replace
        "template_h2dtnel", // replace
        {
          from_name: form.name.value,
          from_email: form.email.value,
          phone: form.phone.value,
          company: form.company.value,
          message: form.message.value,
        },
        "cR-PfpkkMVlN2udLc" // replace
      )
      .then(() => {
        setStatus("success");
        setLoading(false);
        form.reset();
      })
      .catch((error) => {
        console.error(error);
        setStatus("error");
        setLoading(false);
      });
  };

  return (
    <section className="contact-section">
      {/* ================= CONTACT BANNER ================= */}
      

      
      <CinematicBanner
        image="/assets/img/ugi-banner-History-1.jpg"
        eyebrow="UGI - CONTACT US"
        title={<> Get in touch  <br />with us </>}
        sub="Moments that shaped us, memories that stay forever."
        height="88vh"
      />

      {/* ================= MAIN CARD ================= */}
      <div className="contact-container">
        <div className="contact-card">
          {/* LEFT */}
          <div className="contact-form-area">
            <h2>Let’s talk</h2>
            <p className="sub">
              Share your requirements and our team will reach out shortly.
            </p>

            <form onSubmit={sendEmail}>
              <div className="field-row">
                <input
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email Address"
                  required
                />
              </div>

              <div className="field-row">
                <input
                  type="text"
                  name="phone"
                  placeholder="Mobile Number"
                />
                <input
                  type="text"
                  name="company"
                  placeholder="Company"
                />
              </div>

              <textarea
                rows="4"
                name="message"
                placeholder="Tell us about your requirement"
                required
              />

              <button type="submit" className="btn-shine" disabled={loading}>
                <span className="btn-content">
                  {loading ? "Sending..." : "SEND MESSAGE"}
                  <i className="fas fa-paper-plane btn-icon" />
                </span>
                <span className="shine" />
              </button>

              {status === "success" && (
                <p style={{ color: "green", marginTop: "15px" }}>
                  Message sent successfully!
                </p>
              )}

              {status === "error" && (
                <p style={{ color: "red", marginTop: "15px" }}>
                  Failed to send message. Please try again.
                </p>
              )}
            </form>
          </div>

          {/* RIGHT */}
          <div className="contact-info-area">
            <div className="contact-visual center-visual">
              <img
                src="/assets/img/contact  (2).png"
                alt="Send us a message"
                className="float-anim"
              />
            </div>

            <div className="contact-info-grid">
              <div className="office-card">
                <h4 className="office-title">India Office</h4>
                <p>
                  <strong>Address</strong>
                  <br />
                  No:57, 5th Cross Road, Giri Nagar Housing Society,
                  <br />
                  Kadavanthra, Kochi, Kerala 682020, India
                </p>
                <p>
                  <strong>Phone</strong>
                  <br />
                  +91 95390 14658
                </p>
                <p>
                  <strong>Email</strong>
                  <br />
                  info@uginitiative.com
                  <br />
                  career.dxb@uginitiative.com
                </p>
              </div>

              <div className="office-card">
                <h4 className="office-title">Dubai Office</h4>
                <p>
                  <strong>Address</strong>
                  <br />
                  Karama, Dubai, United Arab Emirates
                </p>
                <p>
                  <strong>Phone</strong>
                  <br />
                  +971 4342 8008
                </p>
                <p>
                  <strong>Email</strong>
                  <br />
                  info@uginitiative.com
                  <br />
                  career.dxb@uginitiative.com
                </p>
              </div>
            </div>

            <div className="socials center-socials">
              <i className="fab fa-linkedin-in" />
              <i className="fab fa-instagram" />
              <i className="fab fa-facebook-f" />
            </div>
          </div>

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