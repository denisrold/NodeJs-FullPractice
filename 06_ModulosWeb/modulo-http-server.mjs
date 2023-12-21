import { createServer } from "http";

const server = createServer((req, res) => {
  //header   header/status   Object-Json
  //   res.writeHead(200, { "Content-Type": "text/plain" });
  res.writeHead(200, { "Content-Type": "text/html; charset=utf-8" });
  //end response;
  res.end("<h1>¡Hola Mundo :) !<h1>");
});
//            Port , hostname    CallBack
server.listen(3000, "127.0.0.1", () => {
  console.log("Listening server in port: 3000");
});
