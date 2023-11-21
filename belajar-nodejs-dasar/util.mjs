import util from "util";

const firstName = "Reynaldi";
const lastName = "Priatna";

console.info(`Hello ${firstName} ${lastName}`);

console.info(util.format("Hello %s %s", firstName, lastName));

const person = {
  firstName: "Reynaldi",
  lastName: "Priatna",
};

console.info(`Person : ${JSON.stringify(person)}`);
console.info(util.format("Person : %j", person));
