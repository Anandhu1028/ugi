import { useEffect } from "react";
import "./csr.css";

const CSR = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".reveal");
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add("active");
          }
        });
      },
      { threshold: 0.2 }
    );

    elements.forEach(el => observer.observe(el));
  }, []);

  return (
    <section className="csr-section">

      {/* ================= BANNER ================= */}
      <div
        className="csr-banner"
        style={{ backgroundImage: "url('/assets/img/banner/csr.png')" }}
      >
        <div className="csr-banner-overlay" />
      </div>

      {/* ================= INTRO ================= */}
      <div className="csr-intro container">
        <div className="csr-intro-grid">

          {/* LEFT TEXT */}
          <div className="csr-text reveal left">
            <span className="csr-tag">OUR VALUE FOR THE SOCIETY</span>
            <h2>UGI Community</h2>

            <p>
              A society where prosperity and peace coexist is something we’re all
              working toward. Because of society, UGI is thriving and achieving
              great heights and we take pride in helping the community flourish.
            </p>

            <p>
              It is not only our responsibility but also a part of our teachings
              to give the community what it deserves.
            </p>
          </div>

          {/* RIGHT IMAGE */}
          <div className="csr-image reveal right">
            <img
              src="/assets/img/csr/ugi-website-banner.webp"
              alt="UGI Community"
            />
          </div>

        </div>
      </div>

      {/* ================= INITIATIVES ================= */}
     <div className="csr-initiatives container">

  <div className="csr-grid">

    {/* ITEM 1 */}
    <div className="csr-card reveal">
      <div className="csr-icon-wrap">
        <span className="csr-icon">🦠</span>
      </div>

      <div className="csr-content">
        <h3>Corona Relief</h3>
        <p>
          In this modern world, Covid-19 has been the worst crisis for health and
          economy. People being unemployed and unable to meet basic necessities
          became a serious concern.
        </p>
        <p>
          Our team launched a campaign to distribute food and drink packages,
          ensuring access to basic meals during the most challenging days of the
          pandemic.
        </p>
      </div>
    </div>

    {/* ITEM 2 */}
    <div className="csr-card reveal">
      <div className="csr-icon-wrap">
        <span className="csr-icon">🍽️</span>
      </div>

      <div className="csr-content">
        <h3>Feeding The Fasting</h3>
        <p>
          Food is a prime requirement for a healthy body and mind, yet poverty
          often keeps people away from even basic nourishment.
        </p>
        <p>
          Our socially active team initiated a campaign to distribute food,
          easing hunger and helping people rest with hope for a better tomorrow.
        </p>
      </div>
    </div>

    {/* ITEM 3 */}
    <div className="csr-card reveal">
      <div className="csr-icon-wrap">
        <span className="csr-icon">🌱</span>
      </div>

      <div className="csr-content">
        <h3>Green Cell Activity</h3>
        <p>
          Trees have supported humanity with oxygen, food, shelter, medicine,
          and countless resources, yet we often forget our duty to nurture them.
        </p>
        <p>
          Through our Green Cell initiative, we raise awareness and plant trees
          to protect our planet and contribute to a sustainable future.
        </p>
      </div>
    </div>

  </div>
</div>


    </section>
  );
};

export default CSR;
