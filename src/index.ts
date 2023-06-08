import http from 'http';
import url from 'url';
import { program } from 'commander';
import * as dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 3000;



const a = 6;
const b = 3;


const addition = (a: number, b: number) => a + b;
const substraction = (a: number, b: number) => a - b;
const division = (a: number, b: number) => a / b;
const multiplication = (a: number, b: number) => a * b;

const server = http.createServer((req, res) => {
  if (!req.url) {
    server.emit('error', new Error('No url in the request'));
    return;
  }

  const { pathname, query} = url.parse(req.url!)

  //  If(pathname !== '/calculator'){
  //   res.statusCode = 404;
  //   res.end('Error. Not found.');
  //   return;
  // }

// if(query  === '/calculator?a=6&b=3')


   res.write(`<p>Calculator. Query es: ${query}</p>`);

  res.write(`<p>${ addition(a, b)}</p>`);
  res.write(`<p>${substraction(a, b)}</p>`);
  res.write(`<p>${division(a, b)}</p>`);
  res.write(`<p>${multiplication(a, b)}</p>`);


  res.end();



});

server.listen(PORT);

server.on('listening', () => {
  console.log('Listening on port ' + PORT);
});

server.on('error', (error) => {
  console.log(error.message);
});
