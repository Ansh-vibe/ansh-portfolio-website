import "./styles/Work.css";
import WorkImage from "./WorkImage";


const projectsData = [
  {
    num: "01",
    title: "OREN Agency Platforms",
    category: "Full-Stack Agency & Client Portfolios",
    tools: "React.js, Next.js, Tailwind CSS, CRM, SEO, Vercel",
    image: "/images/project1.jpg",
  },
  {
    num: "02",
    title: "Agentic AI Calling Chatbot",
    category: "AI & Customer Automation",
    tools: "Python, V0 AI, Vercel, REST APIs, GitHub",
    image: "/images/project2.jpg",
  },
  {
    num: "03",
    title: "Pro Bono NGO Web Apps",
    category: "Community & Web Development",
    tools: "React.js, HTML5, CSS3, Responsive Design",
    image: "/images/project3.jpg",
  },
  {
    num: "04",
    title: "Cybersecurity Audit",
    category: "Security Assessment & Threat Detection",
    tools: "Vulnerability Scanners, Secure Coding, Cyber Frameworks",
    image: "/images/project4.jpg",
  },
  {
    num: "05",
    title: "Power BI Dashboards",
    category: "Data Analytics & Visualizations",
    tools: "Power BI, Microsoft Excel, Data Analysis, SQL",
    image: "/images/project5.jpg",
  },
  {
    num: "06",
    title: "Digital Growth Campaigns",
    category: "Digital Marketing & Audience Growth",
    tools: "SEO/SEM, Audience Segmentation, Content AI Tools",
    image: "/images/project6.jpg",
  },
];

const Work = () => {

  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          My <span>Work</span>
        </h2>
        <div className="work-flex">
          {projectsData.map((project, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <div className="work-title">
                  <h3>{project.num}</h3>

                  <div>
                    <h4>{project.title}</h4>
                    <p>{project.category}</p>
                  </div>
                </div>
                <h4>Tools and features</h4>
                <p>{project.tools}</p>
              </div>
              <WorkImage image={project.image} alt={project.title} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
