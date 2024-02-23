const server = require('./app');
const router = require('./routes');

const PORT = 3001;

server.listen(PORT, () => {
  console.log('Server raised in port: ' + PORT);
});


server.use('./rickandmorty',router);

