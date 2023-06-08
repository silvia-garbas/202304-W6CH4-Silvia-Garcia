import http from 'http';
import url from 'url';
import { program } from 'commander';
import * as dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 4000;
const version = '1.0.0';

program.option('-v, --version');
program.parse();
const options = program.opts();

if (options.version) {
  console.log('Version ' + version);
  process.exit(0);
}

const addition = (a: number, b: number) => a + b;
const substraction = (a: number, b: number) => a - b;
const division = (a: number, b: number) => a / b;
const multiplication = (a: number, b: number) => a * b;

const server = http.createServer((req, res) => {
  console.log('Server ok');
  const { pathname, query} = url.parse(req.url!);


  if (req.method !== 'GET') {
    server.emit('error', new Error('Invalid method'));
    return;
  }

  res.write(`<h1>Resultados ${pathname!.toUpperCase()}</h1>`);
  res.write(req.method);
  res.write(req.url);
  res.write(`${addition(6, 3)}`);
  res.write(`${substraction(6, 3)}`);
  res.write(`${division(6, 3)}`);
  res.write(`${multiplication(6, 3)}`);
  res.end();
});

server.listen(PORT);

server.on('listening', () => {
  console.log('Listening on port ' + PORT);
});

server.on('error', (error) => {
  console.log(error.message);
});
