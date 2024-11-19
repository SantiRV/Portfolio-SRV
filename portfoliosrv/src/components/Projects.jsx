import React, {useState} from 'react';
import { Card, Button, Row, Container, Col, Modal } from 'react-bootstrap'; 
import Henrymusic from '../assets/projects/Henrymusic.png';
import pokeproyecto3 from '../assets/projects/pokeproyecto3.jpg';
import  Contador from '../assets/projects/Contador.png'; 
import TaTeTi from '../assets/projects/TaTeTi.png';  
import Nut from '../assets/projects/Nut.png'; 
import Argitalia from '../assets/projects/ArgItalia.png';
import RainTonic from '../assets/projects/RainTonic.png';
import '../styles/projects.css'

const projects = [
  {
    name: "Henry Instruments",
    description: "En este proyecto realicé un e-commerce en conjunto con 7 compañeros. Está basado en la venta de instrumentos y artículos musicales. En cuanto a mi ról dentro del proyecto, empecé trabajando en el back, realizando modelo y rutas de store así también como en la implementación y rutas de mercadopago. En el front trabajé tanto en el componente del carrito y sus estilos como en el formulario de envío y la implementación de la pasarela de pagos.",
    image: Henrymusic,
    video: "",
    link: "https://henry-instruments-one.vercel.app/",
    code: "https://github.com/SantiRV/henry_instruments",
  },
  {
    name: "Pokemon-App",
    description: "Este fué mi primer proyecto, en el que utilicé todo lo que aprendí en el bootcamp de Henry.Realicé una aplicación web super fácil de comprender y utilizar, que incluye filtros, una searchbar para buscar por nombres y un creador de pokemons con un formulario controlado.",
    image: pokeproyecto3,
    video: "https://www.youtube.com/watch?v=FJBWs9c1RDg&feature=share",
    link: "",
    code: "https://github.com/SantiRV/PI-Pokemon",
  },
  {
    name: "Ta-Te-Ti",
    description:"Una simple web App donde con JavaScript realicé un simple juego muy divertido",
    image: TaTeTi,
    video: "",
    link: "https://ta-te-ti-react-java-script-53ti.vercel.app/",
    code: "https://github.com/SantiRV/TaTeTi-React-JavaScript.git",
  },
  {
    name: "Contador",
    description:"Un simple contador realizado con JavaScript",
    image: Contador,
    video: "",
    link: "https://contador-js-gamma.vercel.app/",
    code: "https://github.com/SantiRV/Contador-js.git",
  },
  {
    name: "Nut HTML & CSS",
    description:"Una Web que realice para un proyrcto de mi hermano con HTML y CSS (Es solo una maqueta del proyecto)",
    image: Nut,
    video: "",
    link: "https://proyrcto-fsd-html-css.vercel.app/",
    code: "https://github.com/SantiRV/ProyrctoFSD-HTML-CSS.git",
  },
  {
    name: "Argitalia Ciudadanias",
    description:"",
    image: Argitalia,
    video: "",
    link: "https://argitaliaciudadanias.vercel.app/",
    code: "https://github.com/SantiRV/ProyectoClaudio",
  },
  {
    name: "RainTonic Weather App",
    description:"",
    image: RainTonic,
    video: "",
    link: "https://rain-tonic.vercel.app/",
    code: "https://github.com/SantiRV/RainTonic",
  }
];

function Projects() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [hoveredProject, setHoveredProject] = useState(null);

  const handleModalClose = () => {
    setSelectedProject(null);
  };

  const openModal = (project) => {
    setSelectedProject(project);
  };

  function handleMouseEnter(project) {
    setHoveredProject(project);
  };

  function handleMouseLeave() {
    setHoveredProject(null);
  };

  return (
    <Container>
      <Row>
        {projects.map((project, index) => ( 
          <Col xs={12} md={6} lg={4} key={index} className="project-col">
            <Card 
            className ={`project-card ${hoveredProject === project ? 'hovered' : ''}`}
            onMouseEnter={() => handleMouseEnter(project)}
            onMouseLeave={handleMouseLeave} >
              <Card.Img
                variant="top"
                src={project.image}
                className="project-image"
                onClick={() => openModal(project)}
              />
              <Card.Body>
                <div className="project-description">
                  <Card.Title>{project.name}</Card.Title>
                  
                </div>
                {/* <div className="card-buttons-container d-flex">
                  <Button href={project.code} target="_blank" variant="primary" className="mx-auto my-2">
                    Code
                  </Button>
                  <Button href={project.link} target="_blank" variant="primary" className="mx-auto my-2">
                    View Project
                  </Button>
                  <Button href={project.video} target="_blank" variant="primary" className="mx-auto my-2">
                    Video
                  </Button>
                </div> */}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>

      {selectedProject && (
        <Modal show={true} onHide={handleModalClose}>
          <Modal.Header closeButton>
            <Modal.Title>{selectedProject.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <p>{selectedProject.description}</p>
            
          </Modal.Body>
          <Modal.Footer>
            <Button href={selectedProject.code} target="_blank" variant="primary">
              Code
            </Button>
            <Button href={selectedProject.link} target="_blank" variant="primary">
              View Project
            </Button>
            <Button href={selectedProject.video} target="_blank" variant="primary">
              Video
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </Container>
  );
}

export default Projects;

// function Projects() {
//   return (
//     <Container>
//     <Row >
      
    
//       {projects.map((project, index) => { 
//         return (
          
//           <Col xs={12} md={6} lg={4} key={index} className="project-col">
//           <Card className="project-card">
//             <Card.Img variant="top" src={project.image} className="project-image" />
//             <Card.Body>
//             <div className="project-description">
//               <Card.Title>{project.name}</Card.Title>
//               <Card.Text>{project.description}</Card.Text>
//             </div>
//             <div className="card-buttons-container d-flex">
//                 <Button href={project.code} target="_blank" variant="primary" className="mx-auto my-2" >code</Button>
//                 <Button href={project.link} target="_blank" variant="primary" className="mx-auto my-2" >View Project</Button>
//                 <Button href={project.video} target="_blank" variant="primary" className="mx-auto my-2" >Video</Button>
//             </div>
//             </Card.Body>
//           </Card>
//           </Col>
//         )
//       })}
    
    
//     </Row>
//     </Container>
//   );
// }

// export default Projects;

