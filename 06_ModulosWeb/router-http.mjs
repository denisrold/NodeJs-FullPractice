import { createServer } from "http";

const server = createServer((req, res) => {
  if (req.url === "/") {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    //end response;
    res.end("<h1>¡Home!<h1>");
  } else if (req.url === "/hola") {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    //end response;
    res.end("<h1>¡Hola!s<h1>");
  } else if (req.url === "/kenai") {
    res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
    //end response;
    res.end("<h1>Un Kenai<h1>");
  } else {
    res.writeHead(404, { "Content-Type": "text/html; charset=utf-8" });
    //end response;
    res.end("<h1>404 NOT FOUND :(<h1>");
  }
});
//            Port , hostname    CallBack
server.listen(3000, "127.0.0.1", () => {
  console.log("Listening server in port: 3000");
});
