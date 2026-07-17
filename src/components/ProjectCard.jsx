import { useState } from "react";
import { Col, Modal, Button } from "react-bootstrap";

export const ProjectCard = ({ title, client, services, description, imgURL, url }) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const link = () => {
        window.open(url, '__blank')
    }

    return (
        <Col sm={6} md={6}>
            <div className="proj-imgbx" onClick={handleShow}>
                <img src={imgURL} alt="Project Cover" />
                <div className="proj-txtx">
                    <h4>{title}</h4>
                    <span>{description}</span>
                </div>
            </div>
            <Modal dialogClassName="modal-60w" show={show} onHide={handleClose} centered>
                <Modal.Header className="custom-modal-header" closeButton>
                    <Modal.Title>{client}</Modal.Title>
                </Modal.Header>
                <Modal.Body className="custom-modal-body">
                    <h5><strong>Services Provided</strong></h5>
                    <ul className="service-list">
                        <li>{services.first}</li>
                        <li>{services.second}</li>
                        <li>{services.third}</li>
                        <li>{services.fourth}</li>
                    </ul>
                </Modal.Body>
                <Modal.Footer className="custom-modal-footer">
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={link}>
                        Visit Site
                    </Button>
                </Modal.Footer>
            </Modal>
        </Col>
    )
}