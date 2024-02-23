import React from "react";

const About = () => {
const textStyle = {
    fontFamily: "'Lucida Console', Monaco, monospace",
    color: 'white',
    fontSize: "28px"
  };

  const headingStyle = {
    fontFamily: "'Lucida Console', Monaco, monospace",
    fontWeight: 'bold',
    color: '#ffd479'
  };

  return (
    <>
      <h1 style={textStyle}>Bienvenidos a la app Rick and Morty</h1>
      <h2 style={headingStyle}>¿Qué es esto?</h2>
      <p style={textStyle}>
        Esta aplicación fue creada con el fin de brindar una experiencia interactiva y divertida al usuario, permitiéndole conocer mejor los personajes de Rick and Morty. 
        Podras buscar el personaje que desees con su numero de ID correspondiente. Recuerda que puedes utilizar desde el 0 al 826.
      </p>
      <p style={{fontFamily: "'Lucida Console', Monaco, monospace",fontSize: "30px", color: "rgb(14, 148, 2)"}}>
        ¡¡Que lo disfrutes!!
      </p>

    </>
  );
};

export default About;