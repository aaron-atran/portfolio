import clientImg1 from "../assets/AWFY_Logo.png";
import clientImg2 from "../assets/atwork-example.png";
import clientImg3 from "../assets/Liquidware_FInal_Full_Color_Logo.jpg";
import clientImg4 from "../assets/liquidware-example.png";
import clientImg5 from "../assets/seo-logo.jpg";
import clientImg6 from "../assets/seo-example.png";
import clientImg7 from "../assets/ssa-logo.png";
import clientImg7White from "../assets/ssa-white.png";
import clientImg8 from "../assets/ssa.png";
import clientImg9 from "../assets/srr-logo.png";
import clientImg10 from "../assets/srr.png";

import { useContext } from "react";
import { ThemeContext } from './ThemeContext.jsx'

export function ProjectTheme() {
    const { theme } = useContext(ThemeContext);
    let chosenTheme = theme === "dark" ? clientImg7White : clientImg7;

    const atwork = [
        {
            title: "AtWork Group",
            client: "AtWork Group",
            services: {"first": "Updating Pages And Adding New Content", "second": "SEO", "third": "Quality Assurance", "fourth": "Integrating Third-Party Tools, such as Google Tag Manager"},
            description: "Recruiting Agency",
            imgURL: clientImg1,
            url: "https://www.atwork.com/",
        },
        {
            title: "WordPress Development",
            client: "AtWork Group",
            services: {"first": "Updating Pages And Adding New Content", "second": "SEO", "third": "Quality Assurance", "fourth": "Integrating Third-Party Tools, such as Google Tag Manager"},
            description: "Aaron is a fantastic partner for our team. He is responsive and a creative problem solver. We have completely retooled our brand, website and digital assets. We couldn’t have done it without Aaron’s knowledge and partnership.",
            imgURL: clientImg2,
            url: "https://www.atwork.com/",
        },

    ];
    const liquidware = [
        {
            title: "Liquidware",
            client: "Liquidware",
            services: {"first": "Converting Figma Designs into pixel-perfect HTML Pages", 
                "second": "Implementing Smooth CSS Animations", 
                "third": "Executing Modern Website Functionality and Features", 
                "fourth": "Assisting Senior Developer With Creating Drupal Website"
            },
            description: "Digital Workspace Management",
            imgURL: clientImg3,
            url: "https://www.liquidware.com/",
        },
        {
            title: "Website Redesign",
            client: "Liquidware",
            services: {"first": "Converting Figma Designs into pixel-perfect HTML Pages", 
                "second": "Implementing Smooth CSS Animations", 
                "third": "Executing Modern Website Functionality and Features", 
                "fourth": "Assisting Senior Developer With Creating Drupal Website"
            },
            description: "Digital Workspace Management",
            imgURL: clientImg4,
            url: "https://www.liquidware.com/",
        },
    ];
    const seo = [
        {
            title: "SEOLevelUp",
            client: "SEOLevelUp",
            services: {"first": "Converting Figma Designs Into WordPress Pages", "second": "Migrating Content", 
                "third": "Ensuring Website Is Responsive Across Different Browsers and Devices", "fourth": 
                "Troubleshooting Any Issues That Arise"
            },
            description: "Web Design SEO Company",
            imgURL: clientImg5,
            url: "https://seolevelup.com/",
        },
        {
            title: "Lift and Shifts",
            client: "SEOLevelUp",
            services: {"first": "Converting Figma Designs Into WordPress Pages", "second": "Migrating Content", 
                "third": "Ensuring Website Is Responsive Across Different Browsers and Devices", "fourth": 
                "Troubleshooting Any Issues That Arise"
            },
            description: "Aaron is phenomenal with dialing everything in on time and accurate. We are using him exclusively for our agency now!",
            imgURL: clientImg6,
            url: "https://seolevelup.com/",
        },
    ];
    const sleep = [
        {
            title: "Sleep Science Academy",
            client: "Sleep Science Academy",
            services: {"first": "Implement Requested Features", "second": "Optimize Website Performance", 
                "third": "Quality Assurance", "fourth": 
                "Integrating Third-Party Tools, such as Calendly and Google Analytics"
            },
            description: "Health & Wellness Education",
            imgURL: chosenTheme,
            url: "https://sleepscienceacademy.com/",
        },
        {
            title: "WordPress Development",
            client: "Sleep Science Academy",
            services: {"first": "Implement Requested Features", "second": "Optimize Website Performance", 
                "third": "Quality Assurance", "fourth": 
                "Integrating Third-Party Tools, such as Calendly and Google Analytics"
            },
            description: "Health & Wellness Education",
            imgURL: clientImg8,
            url: "https://sleepscienceacademy.com/",
        },
    ];
    const srr = [
        {
            title: "Southern Rock Restaurants",
            client: "Southern Rock Restaurants",
            services: {"first": "Content Development", "second": "SEO Optimization", "third": "Quality Assurance", "fourth": "Integrating Third-Party Tools, such as Google Tag Manager"},
            description: "Fast Casual Restaurant Franchise",
            imgURL: clientImg9,
            url: "https://southernrockrestaurants.com/",
        },
        {
            title: "Website Relaunch",
            client: "Southern Rock Restaurants",
            services: {"first": "Assisted With Redesign And Relaunch Of Website", "second": "Update Website Content", 
                "third": "Troubleshoot and Maintainenance", 
                "fourth": "Performance Optimization"
            },
            description: "Fast Casual Restaurant Franchise",
            imgURL: clientImg10,
            url: "https://southernrockrestaurants.com/",
        },
    ];
    return { atwork, liquidware, seo, sleep, srr };
}
