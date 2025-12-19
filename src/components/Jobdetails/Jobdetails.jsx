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
      "Develop and deliver Python training courses that meet the needs of the target audience",
      "Create and maintain training materials such as lesson plans and presentations",
      "Provide demo sessions to potential students",
      "Help students in practical execution of Python learning concepts",
      "Monitor student learning and provide continuous feedback",
      "Work with training team to implement programs",
      "Stay updated on latest Python developments",
    ],
    requirements: [
      "Qualification: Master’s degree in Computer Science or related field",
      "1+ years experience in Python programming",
      "1+ years teaching or training experience preferred",
      "Expertise in Python, Django, Flask, Django Rest",
      "Database experience in MySQL / SQL",
      "Experience in CRM projects",
      "Strong communication and presentation skills",
      "Ability to work independently and in a team",
      "Passion for Python and teaching",
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
    roles: [
      "Handling doubt sessions of students",
      "Delivering demo sessions to students",
      "Helping learners in practical execution of UI/UX and web development concepts",
      "Strong convincing skills and ability to work on multiple assignments",
      "Provide online and offline training on Frontend, Backend and Full Stack Development",
      "Willingness to learn and implement new web development courses",
    ],
    requirements: [
      "Qualification: BTech / MCA or related field",
      "Full Time employment candidate preferred",
      "Experience with Mobile App Development Training is a plus",
      "Preference for candidates with technical course background",
      "Strong convincing skills",
      "Clear knowledge in web development languages",
    ],
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
    roles: [
      "Providing in-class training on Digital Marketing concepts",
      "Handling doubt or query sessions of students",
      "Delivering demo sessions to students",
      "Helping learners in practical execution of digital marketing concepts",
      "Assigning projects for hands-on experience",
      "Planning and preparing digital marketing courses",
      "Improving teaching methodology for better student satisfaction",
      "Staying updated on latest Digital Marketing concepts",
    ],
    requirements: [
      "Qualification: Masters / Bachelors Degree",
      "Certified in Digital Marketing",
      "Expertise in SEO, Google Ads, Social Media Marketing",
      "Full Time employment candidate preferred",
      "Clear knowledge of all digital marketing strategies",
      "Strong convincing skills and multitasking ability",
    ],
  },
};

const Jobdetails = () => {
  const { jobId } = useParams();
  const job = JOBS[jobId];
  const [showShare, setShowShare] = useState(false);
  const [agreed, setAgreed] = useState(false);

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

  return (
    <section className="job-details-page">

      {/* ================= BANNER ================= */}
      <section className="job-banner">
        <h1>{job.title}</h1>
      </section>

      {/* ================= CONTENT ================= */}
      <section className="job-details-container">

        {/* LEFT SIDE */}
        <div className="job-info">

          <h2>{job.title}</h2>

          <ul className="job-meta">
            <li><strong>Job Category:</strong> {job.category}</li>
            <li><strong>Job Type:</strong> {job.type}</li>
            <li><strong>Job Location:</strong> {job.location}</li>
          </ul>

          {/* COMPANY BOX */}
          <div className="company-box">
            <img
              src={COMPANY_LOGO}
              alt="Tecswan Logo"
              className="company-logo"
            />

            <div className="company-info">
              <p><strong>Company name:</strong></p>
              <p>{job.company}</p>

              <p><strong>Website:</strong></p>
              <a href={job.website} target="_blank" rel="noreferrer">
                {job.website}
              </a>

              <p><strong>Posted on:</strong> {job.posted}</p>
              <p><strong>Closing on:</strong> {job.closing}</p>
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

          {/* SHARE */}
          <div className="share-box">
  <button
    type="button"
    onClick={() => setShowShare(!showShare)}
  >
    Share
  </button>

  {showShare && (
    <div className="share-icons">
      <a
        href="https://www.facebook.com/ugigroupofinitiatives"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Facebook"
        className="d-flex align-items-center justify-content-center cs_height_35 cs_width_35 text-white rounded-circle"
      >
        <i className="fa-brands fa-facebook-f" />
      </a>

      <a
        href="https://www.linkedin.com/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
        className="d-flex align-items-center justify-content-center cs_height_35 cs_width_35 text-white rounded-circle"
      >
        <i className="fa-brands fa-linkedin-in" />
      </a>

      <a
        href="https://twitter.com/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Twitter"
        className="d-flex align-items-center justify-content-center cs_height_35 cs_width_35 text-white rounded-circle"
      >
        <i className="fa-brands fa-x-twitter" />
      </a>
    </div>
  )}
</div>

        </div>

        {/* RIGHT SIDE – WHITE FORM */}
        <form className="apply-form">
  <h3>Apply for this position</h3>

  <div className="form-group">
    <label>Full Name *</label>
    <input type="text" placeholder="Enter your full name" required />
  </div>

  <div className="form-group">
    <label>Email *</label>
    <input type="email" placeholder="Enter your email address" required />
  </div>

  <div className="form-group">
    <label>Phone *</label>
    <input type="tel" placeholder="Enter your phone number" required />
  </div>

  <div className="form-group">
    <label>Cover Letter *</label>
    <textarea rows="4" placeholder="Write a short cover letter" required />
  </div>

  <div className="form-group file-group">
    <label>Upload CV / Resume *</label>
    <input type="file" accept=".pdf,.doc,.docx" required />
    <small>Allowed types: .pdf, .doc, .docx</small>
  </div>
<div className="policy-row">
  <input
    type="checkbox"
    checked={agreed}
    onChange={e => setAgreed(e.target.checked)}
  />
  <label>
    By using this form you agree to our policy. <span>*</span>
  </label>
</div>



  <button type="submit" disabled={!agreed}>
    Submit Application
  </button>
</form>


      </section>
    </section>
  );
};

export default Jobdetails;
