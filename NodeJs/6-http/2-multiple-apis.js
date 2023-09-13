const http = require("http");

const server = http.createServer((req, res) => {
  //   console.log(req.url);

  if (req.url == "/contact/harshit") {
    res.end("Contact harshit Response");
  } else if (req.url == "/about") {
    res.end("About Response");
  } else if (req.url == "/") {
    res.end("Home Response");
  } else {
    res.end("Bad Request");
  }
});

server.listen(4000, () => {
  console.log("server listening on port 4000");
});
