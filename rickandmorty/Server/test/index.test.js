const server = require('../src/app');
const session = require('supertest');
const agent = session(server);

const character = { id: 1, name: 'Rick Sanchez', species: 'Human', status: 'Alive' };
const character2 = { id: 2, name: 'lulu', species: 'Human', status: 'Alive' };
describe('Test de RUTAS', () => { 

  describe('GET /rickandmorty/character/:id', () => { 
    it('Responde con status: 200', async () => { 
      await agent.get('/rickandmorty/character/1').expect(200);
    });

    it('Responde un objeto con las propiedades: "id", "name", "species", "gender", "status", "origin" e "image"', async () => {
      const {body} = await agent.get('/rickandmorty/character/1')

      // forma 1 de testear uno por uno los campos
      expect(body).toHaveProperty('id');
      expect(body).toHaveProperty('name');

      // forma 2 de testear todos los campos en un mismo expect
      expect(body).toHaveProperty(
        'species' &&
        'id'      &&
        'name'    &&
        'status'  &&
        'origin'  &&
        'image'
      );
    });

    it('Si hay un error responde con status: 500', async () => {
      await agent.get('/rickandmorty/character/999999').expect(500);
    });
   })

  describe("GET /rickandmorty/login", () => {
    it('Valida credenciales correctas', async () => {
      const response = await agent.get('/rickandmorty/login?email=hola@hola.co&password=123456').expect(200);
      expect(response.body).toEqual({ access: true });
    });

    it('Valida credenciales incorrectas', async () => {
      const response = await agent.get('/rickandmorty/login?email=hola@hola.co&password=3456').expect(401);
      expect(response.body).toEqual({ access: false });
    });
  })

  describe('POST /rickandmorty/fav', () => {
    it('Lo que envíes por body debe ser devuelto en un arreglo', async () => {

      const response = await agent.post('/rickandmorty/fav').send(character).expect(200);

      expect(Array.isArray(response.body)).toBe(true);
      expect(response.body).toContainEqual(character);
    });

    it('Si vuelves a enviar un nuevo elemento por body, este debe ser devuelto en un arreglo que incluye un elemento enviado previamente.', async () => {

      const response = await agent.post('/rickandmorty/fav').send(character2).expect(200);

      expect(Array.isArray(response.body)).toBe(true);
      expect(response.body).toContainEqual(character2);
      expect(response.body).toEqual([character, character2]);
    });
  });

  describe('DELETE /rickandmorty/fav/:id', () => {
    it('Devuelve un arreglo con los elementos previos sin modificar si el ID no existe', async () => {

      const response = await agent.delete('/rickandmorty/fav/999').expect(200);

      expect(response.body).toEqual([character, character2]);
    });

    
    it('eliminamos el id 1 Luego debes testear que cuando envías un ID válido se elimine correctamente al personaje.', async () => {

      const response = await agent.delete('/rickandmorty/fav/1').expect(200);

      expect(response.body).toEqual([character2]);
    });


    it('eliminamos el id 2 Luego debes testear que cuando envías un ID válido se elimine correctamente al personaje.', async () => {

      const response = await agent.delete('/rickandmorty/fav/2').expect(200);

      expect(response.body).toEqual([]);
    });
  });
});