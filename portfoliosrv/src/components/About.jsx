import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import FotoCv from '../assets/FotoCv.jpg';
import FotoCv2 from '../assets/FotoCv2.jpg';

const About = () => {
  return (
    <Container className="about-section">
      <Row className="d-flex justify-content-center align-items-center">
        
            <Col md={6} className="order-last">
                <Image src={FotoCv} alt="My photo" className="img-thumbnail mx-auto" />
            </Col>
            <Col md={6} className="order-first">
                <h2 className="about-title">About Me</h2>
                <p className="about-text">
                    I am a Full Stack Web Developer. In addition to programming, I enjoy reading and researching different topics 
                    related to music, history, and new technologies. I consider myself and others consider me an organized person 
                    who effectively solves problems, independent, with a very good sense of humor and detail oriented. 
                    I like to do outdoor activities with friends or family, play any kind of sports, but especially soccer and gym, 
                    play the guitar, sing, love dogs and cats, since these last ones accompany me in my day to day. I also like to 
                    participate in group projects with positive people who bring value and pleasant experiences.
                </p>
            </Col>
            <Col md={6} className="order-first">
                <Image src={FotoCv2} alt="My photo" className="img-thumbnail mx-auto" />
            </Col>
            <Col md={6} className="order-last">
                <h2 className="about-title">Sobre Mí</h2>
                <p className="about-text">
                    Soy Desarrollador Web Fullstack. Aparte de programar, me gusta mucho leer e investigar de diferentes temas, 
                    relacionados a la musica, la historia y las nuevas tecnologias. Me considero y me consideran una persona organizada, 
                    que resuelve problemas eficazmente, independiente, con un muy buen sentido del humor y detallista. 
                    Me gusta realizar actividades al aire libre con amigos o familia,entrenar todo tipo de deportes, pero sobre todo fútbol y gimnasio, 
                    tocar la guitarra, cantar, amo los perros y los gatos, ya que estos ultimos me acompañan en mi día a día. 
                    Tambien me gusta participar en proyectos grupales con gente positiva y que aporte valor y experiencias agradables.
                </p>
            </Col>
        
      </Row>
    </Container>
  );
};

export default About;
