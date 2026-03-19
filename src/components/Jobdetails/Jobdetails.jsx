import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./jobdetails.css";

const COMPANY_LOGO = "/assets/img/logos/tecswan.webp";

const JOBS = {
  "python-faculty": {
    title: "PYTHON FACULTY",
    category: "python faculty",
    type: "Full Time",
    location: "Kochi",
    company: "Tecswan – Center for IT Research & Development",
    website: "https://tecswan.com/",
    posted: "14/10/2023",
    closing: "31/10/2023",
    roles: [
      "Develop and deliver Python training courses",
      "Create training materials",
      "Provide demo sessions",
    ],
    requirements: [
      "1+ years Python experience",
      "Teaching experience preferred",
    ],
  },

  "web-development-faculty": {
    title: "WEB DEVELOPMENT FACULTY",
    category: "web development faculty",
    type: "Full Time",
    location: "Kochi",
    company: "Tecswan – Center for IT Research & Development",
    website: "https://tecswan.com/",
    posted: "14/10/2023",
    closing: "31/10/2023",
    roles: ["Handling doubt sessions", "Delivering demo sessions"],
    requirements: ["Strong web development knowledge"],
  },

  "digital-marketing-faculty": {
    title: "DIGITAL MARKETING FACULTY",
    category: "Digital Marketing Faculty",
    type: "Full Time",
    location: "Calicut",
    company: "Tecswan – Center for IT Research & Development",
    website: "https://tecswan.com/",
    posted: "14/10/2023",
    closing: "31/10/2023",
    roles: ["Providing Digital Marketing training"],
    requirements: ["SEO, Google Ads, SMM"],
  },
};

const Jobdetails = () => {
  const { jobId } = useParams();
  const job = JOBS[jobId];

  const [showShare, setShowShare] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [loading, setLoading] = useState(false);

  const [form, setForm] = useState({
    full_name: "",
    email: "",
    phone: "",
    cover_letter: "",
    resume: null,
  });

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (!job) {
    return (
      <div className="job-not-found">
        <h2>Job not found</h2>
        <p>The job you are looking for does not exist.</p>
      </div>
    );
  }

  // handle input changes
  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  // submit to backend (SendGrid)
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!agreed) {
      alert("Please accept the policy");
      return;
    }

    const formData = new FormData();
    formData.append("job_title", job.title);
    formData.append("full_name", form.full_name);
    formData.append("email", form.email);
    formData.append("phone", form.phone);
    formData.append("cover_letter", form.cover_letter);
    formData.append("resume", form.resume);
  };

  return (
    <section className="job-details-page">
      {/* BANNER */}
      <section className="job-banner">
        <h1>{job.title}</h1>
      </section>

      <section className="job-details-container">
        {/* LEFT */}
        <div className="job-info">
          <h2>{job.title}</h2>

          <ul className="job-meta">
            <li>
              <strong>Category:</strong> {job.category}
            </li>
            <li>
              <strong>Type:</strong> {job.type}
            </li>
            <li>
              <strong>Location:</strong> {job.location}
            </li>
          </ul>

          <div className="company-box">
            <img src={COMPANY_LOGO} alt="Company Logo" />
            <div>
              <p>{job.company}</p>
              <a href={job.website} target="_blank" rel="noreferrer">
                {job.website}
              </a>
            </div>
          </div>

          <h3>Roles And Responsibilities</h3>
          <ul>
            {job.roles.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>

          <h3>Requirements</h3>
          <ul>
            {job.requirements.map((item, i) => (
              <li key={i}>{item}</li>
            ))}
          </ul>
        </div>

        {/* RIGHT – APPLY FORM */}
        <form
          className="apply-form"
          action="https://formsubmit.co/anandhuugi25@gmail.com"
          method="POST"
        >
          {/* REQUIRED CONFIG */}
          <input type="hidden" name="_captcha" value="false" />
          <input
            type="hidden"
            name="_subject"
            value={`New Job Application – ${job.title}`}
          />
          <input type="hidden" name="_template" value="table" />

          {/* JOB INFO */}
          <input type="hidden" name="job_title" value={job.title} />

          <h3>Apply for this position</h3>

          <input
            type="text"
            name="full_name"
            placeholder="Full Name"
            required
          />

          <input type="email" name="email" placeholder="Email" required />

          <input type="tel" name="phone" placeholder="Phone" required />

          <textarea name="cover_letter" placeholder="Cover Letter" required />

          <div className="policy-row">
            <input type="checkbox" required />
            <label>I agree to the policy</label>
          </div>

          <button type="submit">Submit Application</button>
        </form>
      </section>
    </section>
  );
};

export default Jobdetails;
