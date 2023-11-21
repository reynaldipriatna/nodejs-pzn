import path from "path";

const file =
  "d:/Learning/Udemy/NodeJS/belajar-nodejs-dasar/standar-library.mjs";

console.info(path.sep);
console.info(path.dirname(file));
console.info(path.basename(file));
console.info(path.extname(file));
console.info(path.parse(file));
