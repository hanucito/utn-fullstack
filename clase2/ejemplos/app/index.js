// Load the http module to create an http server.
const http = require('http');

// Configure our HTTP server to respond with Hello World to all requests.
const server = http.createServer((request, response) => {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello node!!\n");
});

// Listen on port 8000, IP defaults to 127.0.0.1
server.listen(3000, () => {
  console.log("Server running at http://127.0.0.1:3000/");
});
