import "./styles/Education.css";

const educationData = [
  {
    degree: "Bachelor of Computer Applications (BCA)",
    institution: "Axis Colleges, CSJMU, Kanpur",
    period: "2024 – 2027",
    score: "Percentage: 72.55%",
    details:
      "Relevant Coursework: Data Structures & Algorithms, Full-Stack Web Development, DBMS, Software Engineering, Business Communication, Data Analysis, IT Project Management.",
  },
  {
    degree: "Higher Secondary (Science with Computer Science)",
    institution: "S M L Kheria S D I C, U.P. Board",
    period: "2024",
    score: "Percentage: 86.2%",
    details: "Focus on Physics, Mathematics, Chemistry, and Computer Science.",
  },
  {
    degree: "Senior Secondary",
    institution: "Chandravati S V N I C, U.P. Board",
    period: "2022",
    score: "Percentage: 82.83%",
    details: "Foundational academic excellence and science coursework.",
  },
];

const Education = () => {
  return (
    <div className="edu-section section-container" id="education">
      <div className="edu-container">
        <h2>
          <span>Education</span>
        </h2>
        <div className="edu-grid">
          <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
            {educationData.map((edu, idx) => (
              <div key={idx} className="edu-card">
                <div className="edu-header">
                  <div>
                    <h4 className="edu-title">{edu.degree}</h4>
                    <div className="edu-sub">{edu.institution}</div>
                  </div>
                  <span className="edu-badge">{edu.period}</span>
                </div>
                <div style={{ color: "#aa42ff", fontWeight: 500, fontSize: "14px", marginTop: "6px" }}>
                  {edu.score}
                </div>
                <p className="edu-details">{edu.details}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
