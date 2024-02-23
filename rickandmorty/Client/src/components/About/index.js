import React from "react";

const About = () => {
const textStyle = {
    fontFamily: "'Lucida Console', Monaco, monospace",
    color: 'white',
    fontSize: "25px",
    display: "inline-block",
    padding: "10px",
    margin: "5px",
    border: "1px solid black",
    border: "1px solid black",
    textShadow: "0 0 2px white, 0 0 1px white, 0 0 1px white, 0 0 1px green, 0 0 1px green, 0 0 10px green, 0 0 10px green"
};

  const headingStyle = {
    fontFamily: "'Lucida Console', Monaco, monospace",
    fontWeight: 'bold',
    color: '#ffd479',
    textShadow: "0 0 2px white, 0 0 1px white, 0 0 1px white, 0 0 1px green, 0 0 1px green, 0 0 10px green, 0 0 10px green"
  };

  const paStyle = {fontFamily: "'Lucida Console', Monaco, monospace",
  fontSize: "30px", 
  color: "rgb(14, 148, 2)", 
  textShadow: "0 0 2px white, 0 0 1px white, 0 0 1px white, 0 0 1px green, 0 0 1px white, 0 0 10px white, 0 0 10px white"
};

  return (
    <>
      <h1 style={textStyle}>Bienvenidos a la app Rick and Morty</h1>
      <h2 style={headingStyle}>¿Qué es esto?</h2>
      <p style={textStyle}>
        Esta aplicación fue creada con el fin de brindar una experiencia interactiva y divertida al usuario, permitiéndole conocer mejor los personajes de Rick and Morty. 
        Podras buscar el personaje que desees con su numero de ID correspondiente. Recuerda que debes ubicarte en la opcion "Home" y sobre la barra de busqueda puedes utilizar un numero desde el 0 al 826.
      </p>
      <p style={paStyle}>
        ¡¡Que lo disfrutes!!
      </p>

    </>
  );  
};

export default About;