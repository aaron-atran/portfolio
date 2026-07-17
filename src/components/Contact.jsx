import { useRef, useContext, useState, useEffect } from 'react';
import { ThemeContext } from '../util.js/ThemeContext.jsx';
import { Container, Row, Col } from "react-bootstrap";
import { ScrollTransition } from '../util.js/ScrollTransition';
import emailjs from '@emailjs/browser';

export const Contact = () => {
    const { theme } = useContext(ThemeContext);
    const [ref, inView] = ScrollTransition({ threshhold: 0.3 });
    const [animate, setAnimate] = useState(false);

    useEffect(() => {
    if (inView) setAnimate(true); // trigger once when visible
  }, [inView]);

    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_hwgbpai', 'template_k3rwchf', form.current, 'aPBfgK-yiCrN5wIAl'
          )
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
      };

    return (
        <section ref={ref} className={`contact ${inView ? "animate-bg" : "reverse-bg"}`} data-theme={theme} id="connect">
            <Container className='contact-content'>
                <Row className={`align-items-center-contact ${animate ? "fade-in" : "" } `}>
                    <Col md={6}>
                        <h2>Get In Touch</h2>
                        <div id="contact">
                            <span className="contactDesc">Please fill out the form below to discuss my work opportunities</span>
                            <form className="contactForm" ref={form} onSubmit={sendEmail}>
                                <input type="text" className="name" placeholder="Name" name="your_name"/>
                                <input type="email" className="name" placeholder="Email" name="your_email"/>
                                <textarea className="msg" name="message" row="5" placeholder="Message Here"/>
                                <button type="submit" value="send" className="submitBtn">Submit</button>
                            </form>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}