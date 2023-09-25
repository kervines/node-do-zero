/* Criado sem framework

import { createServer } from 'node:http';

const server = createServer((request, response) => {
  response.write('Hello World');
  return response.end();
});

server.listen(3333); //cria servidor localhost na porta 3333
*/

//Criado com fastify
import { fastify } from 'fastify';

const server = fastify();

server.get('/', () => {
  return 'Hello World';
});
server.get('/hello', () => {
  return 'Hello Amigos';
});
server.get('/node', () => {
  return 'Hello Node.js';
});

server.listen({
  port: 3333,
});
