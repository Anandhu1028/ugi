import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "./career.css";

const JOBS = [
  {
    id: "python-faculty",
    title: "PYTHON FACULTY",
    category: "python faculty",
    type: "Full Time",
    location: "Kochi",
  },
  {
    id: "web-development-faculty",
    title: "WEB DEVELOPMENT FACULTY",
    category: "web development faculty",
    type: "Full Time",
    location: "Kochi",
  },
  {
    id: "digital-marketing-faculty",
    title: "DIGITAL MARKETING FACULTY",
    category: "digital marketing faculty",
    type: "Full Time",
    location: "Calicut",
  },
];

const Career = () => {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
  const [type, setType] = useState("all");
  const [location, setLocation] = useState("all");

  /* ================= SCROLL REVEAL ================= */
  useEffect(() => {
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

    document.querySelectorAll(".reveal").forEach(el =>
      observer.observe(el)
    );

    return () => observer.disconnect();
  }, []);

  /* ================= FILTER LOGIC ================= */
  const filteredJobs = useMemo(() => {
    return JOBS.filter(job => {
      return (
        job.title.toLowerCase().includes(search.toLowerCase()) &&
        (category === "all" || job.category === category) &&
        (type === "all" || job.type === type) &&
        (location === "all" || job.location === location)
      );
    });
  }, [search, category, type, location]);

  return (
    <section className="career-page">

      {/* ================= CAREER BANNER ================= */}
      <section className="career-banner">
        <div
          className="career-banner-bg"
          style={{
            backgroundImage: `
              linear-gradient(
                120deg,
                rgba(0,0,0,0.9),
                rgba(0,0,0,0.6)
              ),
              url(/assets/img/ugi-banner-career.jpg)
            `,
          }}
        />

        <div className="career-banner-inner reveal active">
          <span className="career-badge">UGI - CAREERS</span>

          <h1 className="career-title">
            Build Your Career <br /> With UGI
          </h1>


          <div className="career-banner-line" />
        </div>
      </section>

      {/* ================= ETHICAL EMPLOYER ================= */}
      <section className="career-intro reveal">
        <h2>Being an ethical employer</h2>

        <p>
          UGI, a well-known Middle Eastern firm, has nine subsidiaries in
          Georgia, India, and the GCC countries. We work with clients both
          locally and internationally. Our goal is to provide prompt,
          cost-effective, and high-quality services to our clients all
          over the world.
        </p>

        <p>
          UGI is constantly developing new, innovative ideas to help open
          the door for significant industry breakthroughs. As a
          trustworthy employer, we take a holistic approach to our
          employees’ well-being and strive to provide our employees with
          opportunities for growth and development while also providing a
          supportive and comfortable work environment.
        </p>

        <p>
          We believe that our employees are our most valuable assets, and
          we are committed to treating them with dignity and respect.
        </p>

        <p className="highlight">
          We welcome you, anticipate seeing you, and wish you luck with
          your application!
        </p>
      </section>

      {/* ================= OPEN POSITIONS ================= */}
      <section className="career-jobs">
        <div className="career-jobs-inner">

          <div className="career-header reveal">
            <h3>Open Positions</h3>
            <div className="accent-line" />
          </div>

          {/* FILTER BAR */}
          <div className="career-filters reveal">
            <input
              type="text"
              placeholder="Search"
              value={search}
              onChange={e => setSearch(e.target.value)}
            />

            <select onChange={e => setCategory(e.target.value)}>
              <option value="all">All Job Category</option>
              <option value="python faculty">Python Faculty</option>
              <option value="web development faculty">Web Development Faculty</option>
              <option value="digital marketing faculty">Digital Marketing Faculty</option>
            </select>

            <select onChange={e => setType(e.target.value)}>
              <option value="all">All Job Type</option>
              <option value="Full Time">Full Time</option>
              <option value="Part Time">Part Time</option>
            </select>

            <select onChange={e => setLocation(e.target.value)}>
              <option value="all">All Locations</option>
              <option value="Kochi">Kochi</option>
              <option value="Calicut">Calicut</option>
            </select>
          </div>

          {/* JOB CARDS */}
          <div className="job-grid">
            {filteredJobs.map(job => (
              <article
                key={job.id}
                className="job-card reveal"
              >
                <h4>{job.title}</h4>

                <div className="job-tags">
                  <span>{job.category}</span>
                  <span>{job.type}</span>
                  <span>{job.location}</span>
                </div>

                <Link to={`/careers/${job.id}`} className="details-link">
                  More Details →
                </Link>
              </article>
            ))}

            {filteredJobs.length === 0 && (
              <p className="no-result">No jobs found.</p>
            )}
          </div>

        </div>
      </section>

    </section>
  );
};

export default Career;
