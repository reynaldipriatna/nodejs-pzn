import net from "net";

const client = net.createConnection({
  port: 3000,
  host: "localhost",
});

client.on("data", (data) => {
  console.info(`Receive data from server ${data.toString()}`);
});

setInterval(() => {
  client.write("Reynaldi\r\n");
}, 2000);
