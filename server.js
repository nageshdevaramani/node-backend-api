const http = require("http");

const server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ message: "Hello from backend" }));
});

server.listen(4000, () => {
  console.log("Server running on port 4000");
});