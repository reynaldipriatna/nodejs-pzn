import dns from "dns/promises";

const address = await dns.lookup("www.app.bprsmustaqimaceh.co.id");

console.info(address.address);
console.info(address.family);
