import { useState } from "react";
import "/src/css/skill.css";

export const Services = () => {
    const [activePanel, setActivePanel] = useState(0);

    const panels = [
        {
            name: "Web Development",
            color: "var(--color-green)",
            description: {
                list: [
                    "Responsive and accessible websites and web applications.",
                    "Modern web technologies and frameworks.",
                    "Custom content management systems, themes, and integrations."
                ]
            }
        },
        {
            name: "UI/UX Design",
            color: "var(--color-gold)",
            description: {
                list: [
                    "User-focused interfaces designed for usability and performance.",
                    "Wireframing, prototyping, and user testing to ensure optimal user experience.",
                    "Visual design and branding to create a cohesive and engaging experience."
                ]
            }
        },
        {
            name: "Website Maintenance and Support",
            color: "var(--color-purple)",
            description: {
                list: [
                    "Regular updates, backups, and security monitoring to keep websites running smoothly.",
                    "Ongoing support and troubleshooting for website issues.",
                    "Performance monitoring and optimization to ensure websites are fast and reliable."
                ]
            }
        },
        {
            name: "SEO Performance Optimization",
            color: "var(--color-red)",
            description: {
                list: [
                    "Search optimization and technical improvements to help websites perform better.",
                    "Website performance optimization for faster load times and better user experience.",
                    "Analytics and reporting to track website performance and user behavior."
                ]
            }
        },
    ];

    return (
        <section className="services">
            <nav className="service-bar-navigation">
                <ul className={`service-nav-list ${ activePanel !== null ? "panel-active" : ""}`}>
                    {panels.map((panel, index) => (
                        <li
                            className={`service-nav-item ${
                                activePanel === index ? "active" : ""
                            }`}
                            style={{
                                "--i": index,
                                "--color": panel.color,
                            }}
                            onClick={() => setActivePanel(index)}
                        >
                            <div className="service-title">
                                {panel.name}
                            </div>
                            <div className="service-content">
                                <h2>{panel.name}</h2>
                                <ul>
                                    {panel.description.list.map((item, itemIndex) => (
                                        <li key={itemIndex}>{item}</li>
                                    ))}
                                </ul>
                            </div>
                        </li>
                    ))}
                </ul>
            </nav>
        </section>
    );
};

export default Services;