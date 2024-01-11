import util from "util";

const firstName = "Ksatria";
const lastName = "Nasywaan";

console.info(`Hello ${firstName} ${lastName}`);
console.info(util.format("Hello %s %s", firstName, lastName));

const person = {
    firstName: "Ksatria",
    lastName: "Nasywaan",
};

console.info(`Person : ${JSON.stringify(person)}`);
console.info(util.format("Person : %j ", person));