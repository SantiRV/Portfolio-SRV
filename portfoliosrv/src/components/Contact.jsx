import React from 'react';
import {
  Container,
  Row,
  Col,
  Image,
} from 'react-bootstrap';
import github from '../assets/icons/github.png';
import linkedinlogo from '../assets/icons/linkedinlogo.png';
import logogmail from '../assets/icons/logogmail.png';
import '../styles/contact.css';


const Contact = () => (
  <Container className="my-5">
    <h2 className="text-center">Contact:</h2>
    <Row className="d-flex justify-content-center contact-row">
      <Col xs={12} md={4} className="text-center my-3">
        <a href="mailto:santirambeaudvazquez@gmail.com">
        <Image src={logogmail} alt="gmail" width="65" height="40" />
          {/* <span>santirambeaudvazquez@gmail.com</span> */}
        </a>
      </Col>
      <Col xs={12} md={4} className="text-center my-3">
        <a href="https://www.linkedin.com/in/santiago-rambeaud-v%C3%A1zquez-a25646231/" target="_blank" rel="noopener noreferrer">
        <Image src={linkedinlogo} alt="linkedin" width="40" height="40" />
          {/* <span>LinkedIn</span> */}
        </a>
      </Col>
      <Col xs={12} md={4} className="text-center my-3">
        <a href="https://github.com/SantiRV" target="_blank" rel="noopener noreferrer"> 
        <Image src={github} alt="github" width="40" height="40" />
          {/* <span>GitHub</span> */}
        </a>
      </Col> 
    </Row>
  </Container>
);

export default Contact;


