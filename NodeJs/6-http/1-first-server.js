const http = require("http");

const server = http.createServer((request, response) => {
  response.end("response bhej raha hu");
});

server.listen(4001, () => {
  console.log("server listening on port 4001");
});
