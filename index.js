const http = require("http");

const person = require("./person");

const server = http.createServer((req, resp) => {
  console.log("Incoming request:", req.url);
  resp.writeHead(200, { "Content-Type": "application/json" });
  resp.end(JSON.stringify({ name: "Shivani Lonare", email: "shivanilonare98@gmail.com" }));
});

server.listen(8080, '0.0.0.0', () => {
  console.log('Server listening on port 8080');
});

