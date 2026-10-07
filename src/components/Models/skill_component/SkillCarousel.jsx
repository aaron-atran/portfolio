import "/src/css/skill.css";
import htmlLogo from "/src/assets/html-logo-colored.png";
import cssLogo from "/src/assets/css-logo.png";
import javascriptLogo from "/src/assets/javascript-logo.png";
import reactLogo from "/src/assets/react-logo.png";
import phpLogo from "/src/assets/php.png";
import nodeLogo from "/src/assets/node-js.png";
import mysqlLogo from "/src/assets/mysql.png";
import pythonLogo from "/src/assets/python.png";
import csharpLogo from "/src/assets/c-sharp-logo.png";
import wordpressLogo from "/src/assets/WordPress.com-Logo.wine.png";
import typescriptLogo from "/src/assets/ts-logo-128.png";
import vsLogo from "/src/assets/vscode.svg";
import gitLogo from "/src/assets/github-mark-white.png";
import viteLogo from "/src/assets/vite.js.png";
import figmaLogo from "/src/assets/figma.png";
import playwrightLogo from "/src/assets/playwrite.png";
import sqlLogo from "/src/assets/sql-logo.png";
import tailwindLogo from "/src/assets/tailwind-logo.png";

const logos = [
  {
    name: "HTML5",
    category: "Frontend",
    url: htmlLogo,
    alt: "HTML5 Logo",
  },
  {
    name: "CSS",
    category: "Frontend",
    url: cssLogo,
    alt: "CSS Logo",
  },
  {
    name: "JavaScript",
    category: "Frontend",
    url: javascriptLogo,
    alt: "JavaScript Logo",
  },
  {
    name: "React",
    category: "Frontend",
    url: reactLogo,
    alt: "React Logo",
  },
  {
    name: "Node.js",
    category: "Backend",
    url: nodeLogo,
    alt: "Node.js Logo",
  },
  {
    name: "PHP",
    category: "Backend",
    url: phpLogo,
    alt: "PHP Logo",
  },
  {
    name: "MySQL",
    category: "Backend",
    url: mysqlLogo,
    alt: "MySQL Logo",
  },
  {
    name: "Python",
    category: "Backend",
    url: pythonLogo,
    alt: "Python Logo",
  },
  {
    name: "C#",
    category: "Backend",
    url: csharpLogo,
    alt: "C# Logo",
  },
  {
    name: "WordPress",
    category: "Tools",
    url: wordpressLogo,
    alt: "WordPress Logo",
  },
  {
    name: "TypeScript",
    category: "Frontend",
    url: typescriptLogo,
    alt: "TypeScript Logo",
  },
  {
    name: "Visual Studio Code",
    category: "Tools",
    url: vsLogo,
    alt: "Visual Studio Code Logo",
  },
  {
    name: "Git",
    category: "Tools",
    url: gitLogo,
    alt: "Git Logo",
  },
  {
    name: "Vite",
    category: "Tools",
    url: viteLogo,
    alt: "Vite Logo",
  },
  {
    name: "Figma",
    category: "Tools",
    url: figmaLogo,
    alt: "Figma Logo",
  },
  {
    name: "SQL",
    category: "Backend",
    url: sqlLogo,
    alt: "SQL Logo",
  },
  {
    name: "Playwright",
    category: "Tools",
    url: playwrightLogo,
    alt: "Playwright Logo",
  },
   {
    name: "Tailwind CSS",
    category: "Frontend",
    url: tailwindLogo,
    alt: "Tailwind CSS Logo",
  },
];

export const SkillsCarousel = () => {
  return (
    <section className="skill-carousel">
      <div className="skill-box fade-in">
        <div className="skills-slider">
          <div className="skills-fade skills-fade-left"></div>
          <div className="skills-fade skills-fade-right"></div>
          <h4>Frontend</h4>
          <div className="skills-track left-traverse">
            {logos.filter(logo => logo.category === "Frontend").map((logo, index) => (
              <div className="skill-item" key={`first-${index}`}>
                <img src={logo.url} alt={logo.alt} />
                <h5>{logo.name}</h5>
              </div>
            ))}

            {logos.filter(logo => logo.category === "Frontend").map((logo, index) => (
              <div className="skill-item" key={`second-${index}`}>
                <img src={logo.url} alt="" aria-hidden="true" />
                <h5>{logo.name}</h5>
              </div>
            ))}
          </div>
        </div>
        <div className="skills-slider">
          <div className="skills-fade skills-fade-left"></div>
          <div className="skills-fade skills-fade-right"></div>
          <h4>Backend</h4>
          <div className="skills-track right-traverse">
            {logos.filter(logo => logo.category === "Backend").map((logo, index) => (
              <div className="skill-item" key={`first-${index}`}>
                <img src={logo.url} alt={logo.alt} />
                <h5>{logo.name}</h5>
              </div>
            ))}

            {logos.filter(logo => logo.category === "Backend").map((logo, index) => (
              <div className="skill-item" key={`second-${index}`}>
                <img src={logo.url} alt="" aria-hidden="true" />
                <h5>{logo.name}</h5>
              </div>
            ))}
          </div>
        </div>
        <div className="skills-slider">
          <div className="skills-fade skills-fade-left"></div>
          <div className="skills-fade skills-fade-right"></div>
          <h4>Development Tools</h4>
          <div className="skills-track left-traverse">
            {logos.filter(logo => logo.category === "Tools").map((logo, index) => (
              <div className="skill-item" key={`first-${index}`}>
                <img src={logo.url} alt={logo.alt} />
                <h5>{logo.name}</h5>
              </div>
            ))}

            {logos.filter(logo => logo.category === "Tools").map((logo, index) => (
              <div className="skill-item" key={`second-${index}`}>
                <img src={logo.url} alt="" aria-hidden="true" />
                <h5>{logo.name}</h5>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsCarousel;
