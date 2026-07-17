import { Container, Col, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import logo1 from "../assets/html-logo-colored.png";
import logo2 from "../assets/css-logo.png";
import logo3 from "../assets/javascript-logo.png";
import logo4 from "../assets/react-logo.png";
import logo5 from "../assets/php.png";
import logo6 from "../assets/node-js.png";
import logo7 from "../assets/mysql.png";
import logo8 from "../assets/python.png";
import logo9 from "../assets/c-sharp-logo.png";
import logo10 from "../assets/WordPress.com-Logo.wine.png";


export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-box fade-in">
                            <h2>Skills</h2>
                            <Carousel responsive={responsive} infinite={true} className="skill-slider">
                                <div className="item">
                                    <img src={logo1} alt="HTML Logo" />
                                    <h5>HTML</h5>
                                </div>
                                <div className="item">
                                <img src={logo2} alt="CSS Logo" />
                                    <h5>CSS</h5>
                                </div>
                                <div className="item">
                                <img src={logo3} alt="JavaScript Logo" />
                                    <h5>JavaScript</h5>
                                </div>
                                <div className="item">
                                <img src={logo4} alt="React Logo" />
                                    <h5>React</h5>
                                </div>
                                <div className="item">
                                <img src={logo5} alt="PHP Logo" />
                                    <h5>PHP</h5>
                                </div>
                                <div className="item">
                                <img src={logo6} alt="Node.js Logo" />
                                    <h5>Node.js</h5>
                                </div>
                                <div className="item">
                                <img src={logo7} alt="MySQL Logo" />
                                    <h5>MySQL</h5>
                                </div>
                                <div className="item">
                                <img src={logo8} alt="Python Logo" />
                                    <h5>Python</h5>
                                </div>
                                <div className="item">
                                <img src={logo9} alt="C# Logo" />
                                    <h5>C#</h5>
                                </div>
                                <div className="item">
                                <img src={logo10} alt="WordPreess Logo" />
                                    <h5>WordPress</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
      )
}

export default Skills;