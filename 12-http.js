const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our home");
  }

  if (req.url === "/about") {
    res.end("Here is our short history");
  }

  if (req.url === "/login") {
    res.end("Log in page");
  }

  res.end("<h1>Oops</h1>");

  //   res.write("Welcome Home page");
  //   res.end();
});

server.listen(4000);
