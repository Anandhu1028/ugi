import { useEffect, useRef, useState } from "react";

const ChairmanMessage = () => {
  const sectionRef = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) observer.observe(sectionRef.current);
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`chairman-section ${visible ? "is-visible" : ""}`}
    >
      {/* Background layers */}
      <div className="bg-dots" />
      <div className="bg-float-dots" />

      <div className="container chairman-wrapper">
        {/* Image */}
        <div className="chairman-image">
          <img
            src="/assets/img/ajith-ns-3-scaled.webp"
            alt="Ajith NS - Chairman of UGI"
          />
        </div>

        {/* Content */}
        <div className="chairman-content">
          <h2>
            As the Chairman of <span>UGI</span>, I welcome you to our website and
            appreciate you taking the time out and reading this.
          </h2>

          <p className="chairman-text">
            I believe that great things in business are achieved through hard
            work as well as teamwork, there are no shortcuts to success, and
            everything we do on a daily basis is what defines us, isn’t it?
            <br /><br />
            We work together as a team having the sole aim to satisfy our
            customers as well as employees’ needs, to seek opportunities for the
            good of the economy and society.
            <br /><br />
            Our motto is <strong>“One for all”</strong> — Multiple businesses
            with one goal for every project we take. The challenges we have
            faced have strengthened us as a team, and we look forward to
            continuing the same.
          </p>

          <div className="chairman-sign">
            <span>Ajith NS</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChairmanMessage;
