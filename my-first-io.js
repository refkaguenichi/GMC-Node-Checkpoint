const fs = require("fs");
const lin_nb =
  fs.readFileSync(process.argv[2]).toString().split("\n").length - 1;

console.log(lin_nb);
