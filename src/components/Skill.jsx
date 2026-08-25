import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import TechIconCardExperience from "./Models/tech_logos/techIcons.jsx";
import '../css/skill.css';

export const Skills = () => {
    const icons = [
        { name: "HTML", modelPath: "./html5_logo.glb", scale: 0.8, rotation: [0, -Math.PI / 4, 0], },
        { name: "CSS", modelPath: "./modern_3d_css_logo.glb", scale: 35, rotation: [0, 0, 0], },
        { name: "JavaScript", modelPath: "./js-logo.glb", scale: 35, rotation: [0, 0, 0] },
        { name: "React", modelPath: "./react_logo-transformed.glb", scale: 1, rotation: [0, 0, 0] },
        { name: "Node.js", modelPath: "./node-transformed.glb", scale: 5, rotation: [0, -Math.PI / 2, 0] }
    ];

    useGSAP(() => {
        gsap.fromTo(
        ".tech-card",
        {
            y: 50,
            opacity: 0,
        },
        {
            y: 0,
            opacity: 1,
            duration: 1,
            ease: "power2.inOut",
            stagger: 0.2,
            scrollTrigger: {
            trigger: "#skills",
            start: "top center",
            },
        }
        );
    });

      return (
        <section className="flex-center section-padding" id="skills">
            <div className="w-full h-full md:px-10 px-5">
                <div>
                    <h2>My Tech Stack</h2>
                    <p>but not limited to!</p>
                </div>
                <div className="tech-grid">
                    {icons.map((icon) => (
                        <div key={icon.name} className="card-border tech-card overflow-hidden group xl:rounded-full rounded-lg">
                            <div className="tech-card-animated-bg" />
                            <div className="tech-card-content">
                                <div className="tech-icon-wrapper">
                                    <TechIconCardExperience icons={icon} />
                                </div>
                                <div className="padding-x w-full">
                                    <p>{icon.name}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
      )
}