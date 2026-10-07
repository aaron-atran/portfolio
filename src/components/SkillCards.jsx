import { useState } from 'react';
import { SkillsCarousel } from './Models/skill_component/SkillCarousel.jsx';
import { Facts } from "./Models/facts_component/Facts.jsx";
import { Services } from './Models/skill_component/Services.jsx';

export const SkillCards = () => {
    return (
        <section className="skillCards" id="skillCard">
            <div className="skill-card-container">
                <input type="radio" name="slider" id="item-1" defaultChecked />
                <input type="radio" name="slider" id="item-2" />
                <input type="radio" name="slider" id="item-3" />
                <div className="skill-cards">
                    <label className="skill-card" htmlFor="item-1" id="skill-1">
                        <h3>Skills</h3>
                        <SkillsCarousel />
                    </label>
                    <label className="skill-card" htmlFor="item-2" id="skill-2">
                        <h3>Services</h3>
                        <Services />
                    </label>
                    <label className="skill-card" htmlFor="item-3" id="skill-3">
                        <h3>More About Me!</h3>
                        <Facts />
                    </label>
                </div>
            </div>
        </section>
    );
};

export default SkillCards;