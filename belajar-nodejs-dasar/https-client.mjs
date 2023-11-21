import https from "https";

const data = JSON.stringify({
  test: "event",
});

const options = {
  hostname: "eodkbs6vdsvxnz.m.pipedream.net",
  port: 443,
  path: "/",
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Content-Length": data.length,
  },
};

const req = https.request(options);
req.write(data);
req.end();
