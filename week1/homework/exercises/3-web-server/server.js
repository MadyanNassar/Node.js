/**
 * Exercise 3: Create an HTTP web server
 */

var http = require('http');
const fs = require('fs');

//create a server
let server = http.createServer(function (req, res) {
    // YOUR CODE GOES IN HERE
    if (req.url === '/') {
      const data = fs.readFileSync('./index.html');
      res.writeHead(200, { 'Content-Type': 'text/html' });
      res.end(data);
    }
   else if (req.url === '/index.js') {
      const data = fs.readFileSync('./index.js');
      res.writeHead(200, { 'Content-Type': 'text/javascript' });
      res.end(data);
    }
    else if (req.url === '/style.css') {
      const data = fs.readFileSync('./style.css');
      res.writeHead(200, { 'Content-Type': 'text/css' });
      res.end(data);
    }
  });

server.listen(3000) // The server starts to listen on port 3000