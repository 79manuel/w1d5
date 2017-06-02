var chalk = require("chalk");

var message = chalk.blue("Manuel ") +
chalk.red.underline("can not speak ") + chalk.bgRed.bold("French");
console.log(message);