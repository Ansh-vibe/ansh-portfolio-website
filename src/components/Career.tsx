import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container" id="career">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Founder & Lead Engineer</h4>
                <h5>OREN Website Development Services</h5>
              </div>
              <h3>2026</h3>
            </div>
            <p>
              Founded & scaled digital service agency serving domestic and international clients. Acquired 5+ clients, engineered full-stack React/Next.js applications, managed SDLC, UI/UX, CRM integrations, and SEO strategies.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Digital Marketing Intern</h4>
                <h5>IIDE – The Digital School</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Mastered SEO and SEM strategies, conducted in-depth consumer behavior analysis, created targeted audience segmentation, and executed data-driven growth campaigns.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Campus Ambassador</h4>
                <h5>Kin-G Technology Pvt. Ltd.</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Organized technical webinars connecting 100+ students with industry leaders, promoted skill-building programs, and expanded student developer communities.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Cybersecurity Intern</h4>
                <h5>Codec Technologies India</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Performed vulnerability assessments, cyber threat detection, learned secure coding practices, and gained hands-on exposure to cybersecurity frameworks.
            </p>
          </div>

          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Class Rep & Cricket Captain</h4>
                <h5>Axis Colleges</h5>
              </div>
              <h3>2024</h3>
            </div>
            <p>
              Represented 65+ BCA students for academic coordination while captaining the college cricket team in CSJMU University tournaments.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Career;
