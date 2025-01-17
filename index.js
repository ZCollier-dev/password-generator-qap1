const process = require("process");

const arguments = process.argv.slice(2);

//help message if command not recognized or with --help
//--length flag which allows the user to set password length (default 8 if not set)
//implement lowercase letters first, then numbers with --number flag, then caps with --upper and (most) symbols with --symbol flag
//PERSONAL NOTE: process.argv.slice() lops off the first few unneeded arguments and places the remaining ones into an array, i.e. removes node and index.js

const generatePassword = (arguments) => {
  let length = 8;
  if (arguments.includes("--length")) {
    let lengthFlagPos = arguments.indexOf("--length");
    length = arguments[lengthFlagPos + 1];
  }
};
