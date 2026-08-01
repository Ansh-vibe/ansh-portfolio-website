import "./styles/Certifications.css";

const certificationsData = [
  {
    title: "Data Engineering on AWS - Foundations & AWS Technical Essentials",
    org: "AWS Training & Certification (July 2026)",
  },
  {
    title: "AI and Cybersecurity Awareness & Generative AI Essentials",
    org: "TCS Foundation via TCS iON / MPIT-CoE (May 2026)",
  },
  {
    title: "Rethinking Document Processing in the Age of Agentic AI",
    org: "BVICAM, New Delhi / IEEE Delhi Section (May 2026)",
  },
  {
    title: "Cyber Security Internship Certificate (AICTE & ICAC Approved)",
    org: "Codec Technologies Pvt. Ltd. (Corporate ID: 6759d549ce59e1733940553)",
  },
  {
    title: "30 Days Power BI Micro Course & Power BI Workshop",
    org: "SkillCourse & Office Master (2025 – 2026)",
  },
  {
    title: "Introduction to MongoDB (For Students)",
    org: "MongoDB, Inc. (August 2025)",
  },
  {
    title: "Software Engineering & Data Analytics Job Simulations",
    org: "Accenture & Deloitte via Forage (2025)",
  },
  {
    title: "Digital Marketing Fundamentals Mastercourse & Adobe Certification",
    org: "IIDE – The Digital School & Adobe (2025 – 2026)",
  },
  {
    title: "SkillQuest - Data Science Foundation",
    org: "Simplilearn SkillUP (June 2025)",
  },
  {
    title: "AI Tools and ChatGPT Workshops",
    org: "be10x & Axis Colleges (2025 – 2026)",
  },
  {
    title: "Entrepreneurship Bootcamp & AI/ML Internship",
    org: "Hult Prize IIT Bombay & Corizo / IIT Bombay Mood Indigo",
  },
  {
    title: "Energy Literacy Training",
    org: "Energy Swaraj Foundation / SUNGRO (March 2025)",
  },
];

const Certifications = () => {
  return (
    <div className="cert-section section-container" id="certifications">
      <div className="cert-container">
        <h2>
          <span>Certifications & Training</span>
        </h2>
        <div className="cert-grid">
          <div className="cert-card-box">
            <div className="cert-list">
              {certificationsData.map((cert, idx) => (
                <div key={idx} className="cert-item">
                  <div className="cert-item-title">{cert.title}</div>
                  <div className="cert-item-org">{cert.org}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Certifications;
