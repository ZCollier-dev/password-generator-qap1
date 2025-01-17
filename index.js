const process = require("process");

const arguments = process.argv.slice(2);

//help message if command not recognized or with --help
//--length flag which allows the user to set password length (default 8 if not set)
//implement lowercase letters first, then numbers with --number flag, then caps with --upper and (most) symbols with --symbol flag
//PERSONAL NOTE: process.argv.slice() lops off the first few unneeded arguments and places the remaining ones into an array, i.e. removes node and index.js

const displayHelp = () => {
  console.log("Help Message Here");
};

const generatePassword = (arguments) => {
  if (arguments.includes("--help") || arguments.length === 0) {
    displayHelp();
    return;
  }

  let passLength = 8;
  let addNums = false;
  let addUppers = false;
  let addSymbols = false;

  if (arguments.includes("--length")) {
    let lengthFlagPos = arguments.indexOf("--length");
    if (Number.isInteger(arguments[lengthFlagPos + 1])) {
      passLength = arguments[lengthFlagPos + 1];
    } else {
      console.log(
        "!-- ERR: Invalid length. Please enter a valid integer after the --length flag, i.e. --length 8 --!"
      );
      console.log("For further assistance, please enter --help.");
      return;
    }
  }
  if (arguments.includes("--number")) {
    addNums = true;
  }
  if (arguments.includes("--upper")) {
    addUppers = true;
  }
  if (arguments.includes("--symbol")) {
    addSymbols = true;
  }
};
