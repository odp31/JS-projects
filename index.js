const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World! Welcome to my website, handmade by yours truly" \n')
});

server.listen(port, hostname, () => {
  console.log('Server running at http://${hostname}:${port}/');
});



// save code as .js file; open terminal, type index.js
// open a web browser and enter http://127.0.0.1:3000 in address bar; should sese Hello, World message 
