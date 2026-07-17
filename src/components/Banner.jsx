import { useEffect, useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from '../assets/Cute Avatar.png'
import cloudImg from '../assets/cloud3.png';
import { randomWidth } from '../util.js/randomWith';

export const Banner = () => {
    const [num, setNum] = useState(0);
    const [del, setDelete] = useState(false);
    const toRotate = [ "Frontend", "Backend", "Full-Stack", "Web Developer"];
    const [text, setText ] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let timer = setInterval(() => {
            time();
        }, delta)

        return () => { clearInterval(timer)};
    }, [text])

    const time = () => {
        let i = num % toRotate.length;
        let allText = toRotate[i];
        let newText = del ? allText.substring(0, text.length - 1) : allText.substring(0, text.length + 1);

        setText(newText);

        if (del) {
            setDelta(oldDelta => oldDelta / 2)
        }
        if (!del && newText === allText) {
            setDelete(true);
            setDelta(period)
        }
        else if (del && newText === '') {
            setDelete(false);
            setNum(num + 1);
            setDelta(500);
        }
    }

    // useEffect(() => {
    //     randomWidth(160, 500);
    // }, []);

    return (
        <section className="banner" id="home">
            <Container className="banner-container">
                <Row className="cloud-row" id="cloud1">
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
                </Row>
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