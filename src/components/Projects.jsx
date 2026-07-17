import { useState, useEffect } from 'react';
import { Nav, Row, Col, Container, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard.jsx";
import { ScrollTransition } from '../util.js/ScrollTransition.jsx';
import { ProjectTheme } from '../util.js/ProjectTheme.jsx';

export const Projects = () => {
    const [animate, setAnimate] = useState(false);
    const [ref, inView] = ScrollTransition({ threshhold: 0.3 });

    const { atwork, liquidware, seo, sleep, srr } = ProjectTheme();
    
    useEffect(() => {
        if (inView) setAnimate(true); // trigger once when visible
    }, [inView]);

    return (
        <section ref={ref} className={`project ${animate ? "fade-in" : "" }` } id="projects">
            <Container>
                <Row>
                    <Col>
                        <h2>Projects</h2>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                            <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab" defaultActiveKey="/home">
                                <Nav.Item>
                                    <Nav.Link eventKey="first">AtWork Group</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="second">Liquidware</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="third">SEOLevelUp</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fourth">Sleep Science Academy</Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="fifth">Southern Rock Restaurants</Nav.Link>
                                </Nav.Item>
                            </Nav>
                            <Tab.Content>
                                <Tab.Pane eventKey="first">
                                    <Row>
                                        {
                                            atwork.map((client, index) => {
                                                return (
                                                    <ProjectCard key={index}{...client} />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="second">
                                    <Row>
                                        {
                                            liquidware.map((client, index) => {
                                                return (
                                                    <ProjectCard key={index}{...client} />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="third">
                                    <Row>
                                        {
                                            seo.map((client, index) => {
                                                return (
                                                    <ProjectCard key={index}{...client} />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fourth">
                                    <Row>
                                        {
                                            sleep.map((client, index) => {
                                                return (
                                                    <ProjectCard key={index}{...client} />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                                <Tab.Pane eventKey="fifth">
                                    <Row>
                                        {
                                            srr.map((client, index) => {
                                                return (
                                                    <ProjectCard key={index}{...client} />
                                                )
                                            })
                                        }
                                    </Row>
                                </Tab.Pane>
                            </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
} 

export default Projects;