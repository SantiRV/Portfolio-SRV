import React, { useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';


const Hero = () => {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);

   useEffect(() => {
     if(index < "Full Stack Developer".length){
       const timeoutId = setTimeout(() => {
         setText(text + "Full Stack Developer"[index]);
         setIndex(index + 1);
       }, 200);
       return () => clearTimeout(timeoutId);
     }
   }, [index, text]);

  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //       if(index < "Full Stack Developer".length){
  //           setText(text + "Full Stack Developer"[index]);
  //           setIndex(index + 1);
  //       }else{
  //           setText("")
  //           setIndex(0)
  //       }
  //   }, 200);
  //   return () => clearInterval(intervalId);
  // }, [index, text]);


  return (
    <div className="jumbotron">
      <Container>
        <h1 className="display-4 text-center">Welcome to my Portfolio</h1>
        <p className="lead text-center">{text}</p>
      </Container>
    </div>
  );
};

export default Hero;

