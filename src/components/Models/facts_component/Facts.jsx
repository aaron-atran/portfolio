import { useState } from "react";
import "./Facts.css";

import avatar from "/src/assets/Cute Avatar.png";

const characters = [
    {
        id: "001",
        name: "The Developer",
        class: "Web Developer",
        rarity: "LEGENDARY",
        level: 5,
        portrait: "💻",
        description:
            "I enjoy turning ideas into interactive digital experiences and experimenting with new ways to make the web more engaging.",
        stats: {
            stat1: { value: 90, name: "Tenacity" },
            stat2: { value: 90, name: "Coding" },
            stat3: { value: 90, name: "Curiosity" },
        },
        skills: ["Hardworking", "Quick-Learner", "Communicative"],
        trait: "Builder",
        profile: {
            favorite: "Interactive Web Experiences",
            specialty: "Frontend Development",
            currentQuest: "Building something new and unique.",
        },
    },

    {
        id: "002",
        name: "The Ranger",
        class: "Animal Tamer",
        rarity: "EPIC",
        level: 2,
        portrait: "🐕",
        description:
            "I have two dogs, one Teddybear and one Mini Pinscher that are turning 12 and 11! I enjoy learning about animals and caring for them.",
        stats: {
            stat1: { value: 70, name: "Stamina" },
            stat2: { value: 70, name: "Speed" },
            stat3: { value: 100, name: "Caring" },
        },
        skills: ["Head Pats", "Belly Rubs", "Observant"],
        trait: "Explorer",
        profile: {
            favorite: "Walking my dogs",
            specialty: "Being Attentive",
            currentQuest: "Ensure the well-being of my pets so they can live long and happy lives.",
        },
    },

    {
        id: "003",
        name: "The Scholar",
        class: "Avid Learner",
        rarity: "RARE",
        level: 4,
        portrait: "📕",
        description:
            "Learning has always been a passion of mine, and I enjoy exploring new topics and expanding my knowledge.",
        stats: {
            stat1: { value: 80, name: "Intelligence" },
            stat2: { value: 85, name: "Knowledge" },
            stat3: { value: 90, name: "Curiosity" },
        },

        skills: ["Critical Thinking", "Studious", "Concentration"],
        trait: "Student",
        profile: {
            favorite: "History and World Cultures",
            specialty: "Research",
            currentQuest: "Continue to learn and improve myself through education and exploration.",
        },
    },

    {
        id: "004",
        name: "The Gamer",
        class: "Digital Explorer",
        rarity: "RARE",
        level: 4,
        portrait: "🎮",
        description:
            "I enjoy games and interactive experiences, especially the way they combine visuals, interaction, storytelling, and technology.",
        stats: {
            stat1: { value: 85, name: "Reflexes" },
            stat2: { value: 95, name: "Tenacity" },
            stat3: { value: 90, name: "Creativity" },
        },
        skills: ["Teamwork", "Problem Solving", "Adaptability"],
        trait: "Adventurer",
        profile: {
            favorite: "Elden Ring, Sekiro, Clair Obscur: Expedition 33, and Hollow Knight",
            specialty: "RPG, Real-Time Strategy, and Metroidvania Games",
            currentQuest: "Finish some of the games I started but never finished, such as the Elder Scrolls Oblivion Remaster.",
        },
    },

    {
        id: "005",
        name: "The Bard",
        class: "Musician",
        rarity: "EPIC",
        level: 3,
        portrait: "🎸",
        description:
            "Music has been with me since I was a child, and while I am not the most skilled musician, it is a fun hobby of mine. I started learning guitar when I was 9, took piano lessons when I became 15, and played trumpet in marching band for all of my high school years!",
        stats: {
            stat1: { value: 75, name: "Dexterity" },
            stat2: { value: 75, name: "Stamina" },
            stat3: { value: 70, name: "Creativity" },
        },
        skills: ["Good Listener", "Pacing", "Rhythm"],
        trait: "",
        profile: {
            favorite: "Guitar",
            specialty: "Playing songs from TV shows and video games",
            currentQuest: "Improve my guitar skills so I can play more songs that I enjoy listening.",
        },
    },
];

export const Facts = () => {
    const [currentCard, setCurrentCard] = useState(0);
    const [isFlipped, setIsFlipped] = useState(false);
    const [direction, setDirection] = useState("next");
    const [isAnimating, setIsAnimating] = useState(false);

    const character = characters[currentCard];

    const changeCard = (newIndex, newDirection) => {
        if (isAnimating) return;

        setDirection(newDirection);
        setIsAnimating(true);
        setIsFlipped(false);

        setTimeout(() => {
            setIsAnimating(false);
            setCurrentCard(newIndex);
        }, 400);
    };

    const nextCard = () => {
        const next = (currentCard + 1) % characters.length;
        changeCard(next, "next");
    };

    const previousCard = () => {
        const previous = (currentCard - 1 + characters.length) % characters.length;
        changeCard(previous, "previous");
    };

    const selectCard = (index) => {
        setIsFlipped(false);
        setCurrentCard(index);
    };

    return (
        <section className="fun-facts">
            <div className="fun-facts-container">
                <div className="character-card-stage">
                     <div className="card-stack card-stack-2" />
                    <div className="card-stack card-stack-1" />
                    <div
                        className={`
                            character-card
                            ${isFlipped ? "is-flipped" : ""}
                            ${isAnimating ? `card-${direction}` : ""}
                        `}
                    >
                        <div className="character-card-inner">
                            <div className="character-card-front">

                                {/* Header */}
                                <div className="character-header">
                                    <span className="character-type">CHARACTER CARD</span>
                                    <span className="character-id">#{character.id}</span>
                                </div>

                                <div className="character-divider" />

                                <div className="character-portrait">
                                    <div className="portrait-frame">
                                        <span>{character.portrait}</span>
                                    </div>
                                </div>

                                <div className="character-name">
                                    <h2>{character.name}</h2>
                                    <span>{character.class}</span>
                                </div>

                                <div
                                    className={`character-rarity rarity-${character.rarity.toLowerCase()}`}
                                >
                                    ★ {character.rarity}
                                </div>

                                <div className="character-level">
                                    <span>LVL</span>
                                    <strong>
                                        {String(character.level).padStart(
                                            2,
                                            "0"
                                        )}
                                    </strong>
                                </div>

                                <div className="character-stats">
                                    <div className="stat">
                                        <div className="stat-header">
                                            <span>{character.stats.stat1.name}</span>
                                            <span>{character.stats.stat1.value}</span>
                                        </div>

                                        <div className="stat-bar">
                                            <div
                                                style={{
                                                    width: `${character.stats.stat1.value}%`,
                                                }}
                                            />
                                        </div>
                                    </div>

                                    <div className="stat">
                                        <div className="stat-header">
                                            <span>{character.stats.stat2.name}</span>
                                            <span>{character.stats.stat2.value}</span>
                                        </div>
                                        <div className="stat-bar">
                                            <div
                                                style={{
                                                    width: `${character.stats.stat2.value}%`,
                                                }}
                                            />
                                        </div>
                                    </div>


                                    <div className="stat">
                                        <div className="stat-header">
                                            <span>{character.stats.stat3.name}</span>
                                            <span>{character.stats.stat3.value}</span>
                                        </div>

                                        <div className="stat-bar">
                                            <div
                                                style={{
                                                    width: `${character.stats.stat3.value}%`,
                                                }}
                                            />
                                        </div>
                                    </div>
                                </div>

                                <div className="character-skills">
                                    {character.skills.map((skill) => (
                                        <span key={skill}>
                                            {skill}
                                        </span>
                                    ))}
                                </div>

                                <div className="character-trait">
                                    <span>TRAIT</span>
                                    <strong>{character.trait}</strong>
                                </div>

                                <button
                                    className="flip-button"
                                    onClick={() =>
                                        setIsFlipped(true)
                                    }
                                >
                                    VIEW PROFILE ↗
                                </button>
                            </div>

                            <div className="character-card-back">
                                <div className="back-header">
                                    <span>PROFILE</span>
                                    <span>#{character.id}</span>
                                </div>
                                <div className="character-divider" />

                                <div className="back-content">
                                    <span className="back-label">ABOUT</span>
                                    <p>{character.description}</p>
                                    <div className="profile-section">
                                        <span className="back-label">
                                            FAVORITE
                                        </span>
                                        <strong>
                                            {character.profile.favorite}
                                        </strong>
                                    </div>

                                    <div className="profile-section">
                                        <span className="back-label">
                                            SPECIALTY
                                        </span>
                                        <strong>
                                            {character.profile.specialty}
                                        </strong>
                                    </div>

                                    <div className="profile-section">
                                        <span className="back-label">
                                            CURRENT QUEST
                                        </span>
                                        <strong>
                                            {character.profile.currentQuest}
                                        </strong>
                                    </div>
                                </div>
                                <button
                                    className="flip-button"
                                    onClick={() =>
                                        setIsFlipped(false)
                                    }
                                >
                                    ↩ BACK TO CARD
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="card-navigation">
                        <button
                            className="card-arrow"
                            onClick={previousCard}
                            aria-label="Previous card"
                        >
                            ←
                        </button>

                        <div className="card-indicators">
                            {characters.map((_, index) => (
                                <button
                                    key={index}
                                    className={`card-indicator ${
                                        index === currentCard
                                            ? "active"
                                            : ""
                                    }`}
                                    onClick={() =>
                                        selectCard(index)
                                    }
                                    aria-label={`Select card ${
                                        index + 1
                                    }`}
                                />
                            ))}

                        </div>

                        <span className="card-counter">
                            {String(currentCard + 1).padStart(2, "0")}
                            {" / "}
                            {String(characters.length).padStart(2, "0")}
                        </span>

                        <button
                            className="card-arrow"
                            onClick={nextCard}
                            aria-label="Next card"
                        >
                            →
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
};