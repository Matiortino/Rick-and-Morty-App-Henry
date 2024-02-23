const express = require('express');
const router = require('./routes');
const server = express();
const { registerUser, authenticateUser } = require("./utils/auth");

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content-Type, Accept'
  );
  res.header(
    'Access-Control-Allow-Methods',
    'GET, POST, OPTIONS, PUT, DELETE'
  );
  next();
});

server.use(express.json());
server.use('/rickandmorty', router);


  // Ejemplo de registro de usuario
  registerUser("nuevo@usuario.com", "contraseña123");
  
  // Ejemplo de autenticación de usuario
  const isUserAuthenticated = authenticateUser("nuevo@usuario.com", "contraseña123");
  console.log("¿El usuario está autenticado?", isUserAuthenticated);
  
module.exports = server;

module.exports = server;