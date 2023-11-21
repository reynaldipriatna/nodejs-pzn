import { URL } from "url";

const url = new URL("https://example.org/?foo=bar&baz=qux");

url.host = "www.example.org";
url.searchParams.append("status", "premium");

console.info(url.toString());
console.info(url.href);
console.info(url.protocol);
console.info(url.host);
console.info(url.pathname);
console.info(url.searchParams);
