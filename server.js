const http = require("http");
const url = require("url");

const server = http.createServer((req, res) => {
  const queryObject = url.parse(req.url, true).query;

  const name = queryObject.name || "Guest";

  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ message: `Hello ${name}` }));
});

server.listen(4000, () => {
  console.log("Server running on port 4000");
});
