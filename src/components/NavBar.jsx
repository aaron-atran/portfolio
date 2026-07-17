import { useEffect, useState, useContext } from "react";
import {Navbar, Container, Nav} from "react-bootstrap";
import navIcon1 from '../assets/linkedin.png';
import navIcon2 from '../assets/upwork.png';
import navIcon3 from '../assets/github-mark-white.png';
import lightIcon from '../assets/icon-sun.png';
import darkIcon from '../assets/icons-moon.png';

import { HashLink } from 'react-router-hash-link';
import { BrowserRouter as Router } from "react-router-dom";
import ReactSwitch from "react-switch";
import { ThemeContext } from '../util.js/ThemeContext.jsx'

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);

    const { theme, toggleTheme } = useContext(ThemeContext);

    useEffect(() => {
        const onScroll = () => {
            if(window.scrollY > 50) {
                setScrolled(true);
            }
            else {
                setScrolled(false);
             }
        }

        window.addEventListener("scroll", onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }

    return (
        <Router>
        <Navbar expand="lg" className={scrolled ? "scrolled": ""}>
            <Container>
                <Navbar.Toggle aria-controls="basic-navbar-nav" > 
                    <span className="navbar-toggler-icon"></span>
                </Navbar.Toggle>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' :
                         'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
                        <Nav.Link href="#about" className={activeLink === 'about' ? 'active navbar-link' :
                         'navbar-link'} onClick={() => onUpdateActiveLink('home')}>About</Nav.Link>
                        <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' :
                         'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
                        <Nav.Link href="#projects" className={activeLink === 'projects' ? 'active navbar-link' :
                         'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/aaron-tran-2a3ab01a3/"><img src={navIcon1} alt="" /></a>
                            <a href="https://www.upwork.com/freelancers/~011862acb2c18045eb"><img src={navIcon2} alt="" /></a>
                            <a href="https://github.com/aaron-atran"><img src={navIcon3} alt="" /></a>
                        </div>
                        <HashLink to='#connect'>
                            <button><span>Let’s Connect</span></button>
                        </HashLink>
                    </span>
                    <div className="switch">
                        <label>{theme === "light" ? "Light Mode": "Dark Mode"}</label>
                        <ReactSwitch uncheckedIcon={
                            <div 
                                style={{ display: "flex", 
                                    alignItems: "center", 
                                    justifyContent: "center", 
                                    height: "100%",
                                    fontSize: 18, 
                                    color: "#111", 
                                    paddingRight: 2, 
                                    }} 
                                >
                                <img src={lightIcon} alt="Day Icon"></img>
                            </div> } 
                            checkedIcon={
                                <div
                                    style={{
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    height: "100%",
                                    fontSize: 18,
                                    color: "#fff",
                                    paddingRight: 2,
                                    }}
                                >
                                    <img src={darkIcon} alt="Night Icon"></img>
                                </div>
                            } 
                            onChange={toggleTheme}
                            onColor="#4169E1"
                            checked={theme === "dark"}
                        />
                    </div>
                </Navbar.Collapse>
            </Container>
        </Navbar>
        </Router>
    )
}

export default NavBar;