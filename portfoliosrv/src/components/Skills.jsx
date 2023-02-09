import React from 'react';
import { Container, Row, Col, Image, Card } from 'react-bootstrap';

import html from '../assets/icons/html.png';
import css3 from '../assets/icons/css3.png';
import nodejs from '../assets/icons/nodejs.png';
import git from '../assets/icons/git.png';
import javascript from '../assets/icons/javascript.png';
import Typescript from '../assets/icons/Typescript.png';
import express from '../assets/icons/express.png';
import react from '../assets/icons/react.png';
import redux from '../assets/icons/redux.png';
import sequelize from '../assets/icons/sequelize.png';
import postgresql from '../assets/icons/postgresql.png';
import bootstrap from '../assets/icons/bootstrap.png';
import github from '../assets/icons/github.png';
import less from '../assets/icons/less.png';
import sass from '../assets/icons/sass.png';
import tailwindcss from '../assets/icons/tailwindcss.png';
import vsc from '../assets/icons/vsc.png';
import '../styles/skills.css'

function Skills() {
  return (
    <Card className="skills-container">
      <Card.Body>
    <Container>
      <h3 align="left">Languages and Tools:</h3>
      <Row>
        <Col>
          <a href=" https://www.w3.org/html/ " target="_blank" rel="noreferrer">
            <Image src={html} alt="html" width="40" height="40" />
          </a>
        </Col>
        <Col>
          <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer">
            <Image src={css3} alt="css3" width="40" height="40" />
          </a>
        </Col>
        <Col>
          <a href=" https://nodejs.org/en/" target="_blank" rel="noreferrer">
            <Image src={nodejs} alt="nodejs" width="40" height="40" />
          </a>
        </Col>
        <Col>
          <a href="https://git-scm.com/" target="_blank" rel="noreferrer">
            <Image src={git} alt="git" width="40" height="40" />
          </a>
        </Col>
        <Col>
          <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer">
            <Image src={javascript} alt="javascript" width="40" height="40" />
          </a>
        </Col>
        <Col>
          <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">
            <Image src={Typescript} alt="Typescript" width="40" height="40" />
          </a>
        </Col>
        <Col>
          <a href="https://expressjs.com/" target="_blank" rel="noreferrer">
            <Image src={express} alt="express" width="40" height="40" />
          </a>
        </Col>
        <Col>
          <a href=" https://reactjs.org/" target="_blank" rel="noreferrer">
            <Image src={react} alt="react" width="40" height="40" />
          </a>
        </Col>
        <Col>
          <a href=" https://redux.js.org/" target="_blank" rel="noreferrer">
            <Image src={redux} alt="redux" width="40" height="40" />
          </a>
        </Col>
        <Col>
          <a href="https://sequelize.org/" target="_blank" rel="noreferrer">
            <Image src={sequelize} alt="sequelize" width="40" height="40" />
          </a>
        </Col>
        <Col>
          <a href="https://www.postgresql.org/" target="_blank" rel="noreferrer">
            <Image src={postgresql} alt="postgresql" width="40" height="40" />
          </a>
        </Col>
        <Col>
          <a href="https://getbootstrap.com" target="_blank" rel="noreferrer">
            <Image src={bootstrap} alt="bootstrap" width="40" height="40" />
          </a>
        </Col>
        <Col>
          <a href="https://github.com/" target="_blank" rel="noreferrer">
            <Image src={github} alt="github" width="40" height="40" />
          </a>
        </Col>
        <Col>
          <a href=" http://lesscss.org/" target="_blank" rel="noreferrer">
            <Image src={less} alt="less" width="40" height="40" />
          </a>
        </Col>
        <Col>
          <a href="https://sass-lang.com/" target="_blank" rel="noreferrer">
            <Image src={sass} alt="sass" width="40" height="40" />
          </a>
        </Col>
        <Col>
          <a href="https://tailwindcss.com/" target="_blank" rel="noreferrer">
            <Image src={tailwindcss} alt="tailwindcss" width="40" height="40" />
          </a>
        </Col>
        <Col>
          <a href="https://code.visualstudio.com/" target="_blank" rel="noreferrer">
            <Image src={vsc} alt="vsc" width="40" height="40" />
          </a>
        </Col>
      </Row>
    </Container>
    </Card.Body>
    </Card>
  );
}

export default Skills;

