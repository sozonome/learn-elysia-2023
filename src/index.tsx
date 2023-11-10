import { html } from '@elysiajs/html';
import { Elysia } from 'elysia';
import Templates from './Templates';

const app = new Elysia()
  .use(html())
  .get('/', () => 'Hello Elysia')
  .get('/jsx', () => <Templates />)
  .listen(3000);

console.log(
  `🦊 Elysia is running at ${app.server?.hostname}:${app.server?.port}`
);
