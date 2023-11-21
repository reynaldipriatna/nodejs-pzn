const buffer = Buffer.from("Reynaldi Priatna", "utf8");

console.info(buffer.toString());
console.info(buffer.toString("hex"));
console.info(buffer.toString("base64"));
console.info(buffer.toString("base64url"));

const bufferBase64 = Buffer.from("UmV5bmFsZGkgUHJpYXRuYQ==", "base64");
console.info(bufferBase64.toString("utf8"));
