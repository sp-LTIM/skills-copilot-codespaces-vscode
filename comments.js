// Create web server
// Create a web server that listens for incoming requests on port 3000. When a request comes in, it should respond with the following JSON object: { "message": "Hello, world" }.
// Use the built-in http module to create the server. The server should be created using the createServer method. The createServer method takes a function as an argument, which is called when a request comes in. This function takes two arguments: req and res, which represent the request and response objects, respectively.
// The response object has a method called writeHead that you can use to set the response headers. You can use this method to set the content type of the response to application/json. The response object also has a method called end that you can use to send a response back to the client. You can use this method to send the JSON object back to the client.
// The server should listen on port 3000. You can use the listen method to make the server listen on a specific port. The listen method takes two arguments: the port number and a function that is called when the server starts listening. You can use this function to log a message to the console that indicates that the server is running.
// Here is an example of how you can create a simple web server using the http module:

// const http = require('http');

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { 'Content-Type': 'text/plain' });
//   res.end('Hello, world');
// });

// server.listen(3000, () => {
//   console.log('Server is running on port 3000');
// });

// When you run this code and visit http://localhost:3000 in your browser, you should see the text Hello, world displayed on the page.

// In this exercise, you need to create a web server that responds with the following JSON object: { "message": "Hello, world" }.

// Your server should listen on port 3000.

const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(JSON.stringify({ message: 'Hello, world' }));
});

server.listen(3000, () => {
  console.log('Server is running on port 3000');
});