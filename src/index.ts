import http from 'http';
import url from 'url';
import { calculator } from './calculator.js';

const PORT = process.env.PORT || 8000;

const server = http.createServer((req, resp) => {
  switch (req.method) {
    case 'GET':
      if (!req.url) {
        server.emit('error', new Error('Error 404'));
        resp.write(`<p>Error 404</p>`);
        return;
      }

      // eslint-disable-next-line no-case-declarations
      const { pathname, search } = url.parse(req.url);

      if (pathname !== '/calculator') {
        server.emit('error', new Error('Error - path not found'));
        resp.write(`<p>Error - path not found</p>`);
        return;
      }

      if (pathname === '/calculator') {
        const urlParams = new URLSearchParams(search!);
        const num1 = urlParams.get('a');
        const num2 = urlParams.get('b');

        if (isNaN(Number(num1)) || isNaN(Number(num2))) {
          server.emit(
            'error',
            new Error('Error - el valor introducido no es un número')
          );
          resp.write(`<p> Error - el valor introducido no es un número </p>`);
        } else {
          const answers = calculator('num1', 'num2');
          resp.writeHead(800, { 'Content-Type': 'text/html' });
          resp.write(`<h1>Calculator</h1>
    <h2>Results:</h2>
      <p>${num1} + ${num2} = ${answers.sum}</p>
      <p>${num1} - ${num2} = ${answers.rest}</p>
      <p>${num1} * ${num2} = ${answers.mult}</p>
      <p>${num1} / ${num2} = ${answers.div}</p>
    `);
        }
      }

      break;
    default:
      resp.write('Método desconocido');
      break;
  }

  resp.end();
});

server.on('error', () => {});

server.on('listening', () => {
  console.log('Listening in http://localhost:' + PORT);
});

server.listen(PORT);
