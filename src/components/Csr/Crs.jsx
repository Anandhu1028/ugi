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
      { threshold: 0.15 }
    );

    elements.forEach(el => observer.observe(el));

    // Cleanup
    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);

  const initiatives = [
    {
      icon: "🦠",
      title: "Corona Relief",
      description: [
        "In this modern world, Covid-19 has been the worst crisis for health and economy. People being unemployed and unable to meet basic necessities became a serious concern.",
        "Our team launched a campaign to distribute food and drink packages, ensuring access to basic meals during the most challenging days of the pandemic."
      ]
    },
    {
      icon: "🍽️",
      title: "Feeding The Fasting",
      description: [
        "Food is a prime requirement for a healthy body and mind, yet poverty often keeps people away from even basic nourishment.",
        "Our socially active team initiated a campaign to distribute food, easing hunger and helping people rest with hope for a better tomorrow."
      ]
    },
    {
      icon: "🌱",
      title: "Green Cell Activity",
      description: [
        "Trees have supported humanity with oxygen, food, shelter, medicine, and countless resources, yet we often forget our duty to nurture them.",
        "Through our Green Cell initiative, we raise awareness and plant trees to protect our planet and contribute to a sustainable future."
      ]
    }
  ];

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
              A society where prosperity and peace coexist is something we're all
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
      <div className="csr-initiatives">
        <div className="container">

          <div className="csr-grid">
            {initiatives.map((item, index) => (
              <div 
                className="csr-card reveal" 
                key={index}
                style={{ transitionDelay: `${index * 0.1}s` }}
              >
                <div className="csr-icon-wrap">
                  <span className="csr-icon">{item.icon}</span>
                </div>

                <div className="csr-content">
                  <h3>{item.title}</h3>
                  {item.description.map((para, pIndex) => (
                    <p key={pIndex}>{para}</p>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* ================= SEE ALL ACTIVITIES ================= */}
      <div className="csr-activities">
        <div className="csr-activities-inner container reveal zoom">

          <div className="csr-activities-content">
            <span className="csr-tag">UGI</span>
            <h2>See Our Activities</h2>
            <p>
              Our responsibility doesn't stop at individual initiatives. From health
              drives to sustainability programs, UGI actively works toward long-term
              social impact.
            </p>

            <a href="/csr-activities" className="csr-btn">
              <span>Explore Activities</span>
            </a>
          </div>

          <div className="csr-activities-images">
            <img
              src="/assets/img/csr/img-1.webp"
              alt="CSR Activity 1"
              className="img img-left"
            />
            <img
              src="/assets/img/csr/img-2.webp"
              alt="CSR Activity 2"
              className="img img-right"
            />
          </div>

        </div>
      </div>

    </section>
  );
};

export default CSR;