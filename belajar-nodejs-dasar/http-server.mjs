import http from "http";

const server = http.createServer((request, respone) => {
  console.info(request.method);
  console.info(request.url);

  if (request.method == "POST") {
    request.addListener("data", (data) => {
      respone.setHeader("Content-Type", "application/json");
      respone.write(data);
      respone.end();
    });
  } else {
    if (request.url == "/url1") {
      respone.write("Hello HTTP Server URL 1");
    } else {
      respone.write("Hello HTTP Server Root URL");
    }
    respone.end();
  }
});

server.listen(3000);
