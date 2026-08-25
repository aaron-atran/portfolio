import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from '../assets/Cute Avatar.png'
import cloudImg from '../assets/cloud3.png';
import '../css/banner.css';

export const Banner = () => {
    const [num, setNum] = useState(0);
    const [del, setDelete] = useState(false);
    const toRotate = ["Full-Stack", "Web Developer"];
    const [text, setText ] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 800;
    const [finished, setFinished] = useState(false);

    useEffect(() => {
        if (finished) return;

        const timer = setTimeout(() => {
            type();
        }, delta);

        return () => clearTimeout(timer);
    }, [text, delta, finished]);

    const type = () => {
        const i = num % toRotate.length;
        const allText = toRotate[i];

        const newText = del
            ? allText.substring(0, text.length - 1)
            : allText.substring(0, text.length + 1);

        setText(newText);

        // Typing
        if (!del && newText === allText) {

            // Stop on the last item
            if (num === toRotate.length - 1) {
                setFinished(true);
                return;
            }

            // Start deleting before moving to next word
            setDelete(true);
            setDelta(period);
            return;
        }

        // Deleting
        if (del && newText === "") {
            setDelete(false);
            setNum((prev) => prev + 1);
            setDelta(500);
            return;
        }

        // Faster deleting speed
        if (del) {
             setDelta(50);
        }
    };

    return (
        <section className="banner" id="home">
            <Container className="banner-container">
                {/* <Row className="cloud-row" id="cloud1">
                    <Col className="cloud-col">
                        <img className="cloud" src={cloudImg} alt="Cloud"  />
                        <img className="cloud" src={cloudImg} alt="Cloud"  />
                        <img className="cloud" src={cloudImg} alt="Cloud"  />
                        <img className="cloud" src={cloudImg} alt="Cloud"  />
                    </Col>
                </Row>
                <Row className="cloud-row" id="cloud2">
                    <Col className="cloud-col">
                        <img className="cloud" src={cloudImg} alt="Cloud"  />
                        <img className="cloud" src={cloudImg} alt="Cloud"  />
                        <img className="cloud" src={cloudImg} alt="Cloud"  />
                        <img className="cloud" src={cloudImg} alt="Cloud"  />
                    </Col>
                </Row> */}
                <Row className="align-items-center fade-in">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{`Hi I'm Aaron, a `}</h1>
                        <h1><span className="wrap">{text}</span></h1>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img className="avatar" src={headerImg} alt="Avatar" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Banner;