const server = require('./app');
const router = require('./routes');
const {conn} = require('./DB_connection')

const PORT = 3001;

server.use('./rickandmorty',router);

conn.sync({force: true}).then(() => {
  console.log("Database connected");
  server.listen(PORT, () => {
    console.log('Server raised in port: ' + PORT);
  });
  
})

