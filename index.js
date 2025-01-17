const process = require("process");

//initialize character arrays
const alphaLowerArray = "abcdefghijklmnopqrstuvwxyz".split("");
const alphaUpperArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
const numberArray = "1234567890".split("");
const symbolArray = "!@#$%^&*~-_=+,.<>/?;:|".split("");

const arguments = process.argv.slice(2);

//help message if command not recognized or with --help
//--length flag which allows the user to set password length (default 8 if not set)
//implement lowercase letters first, then numbers with --number flag, then caps with --upper and (most) symbols with --symbol flag
//PERSONAL NOTE: process.argv.slice() lops off the first few unneeded arguments and places the remaining ones into an array, i.e. removes node and index.js

const displayHelp = () => {
  //displays a help message
  console.log("Help Message Here");
};

const generatePassword = (arguments) => {
  //generates a password according to arguments
  if (arguments.includes("--help") || arguments.length === 0) {
    displayHelp();
    return;
  }

  let passLength = 8;
  let addNums = false;
  let addUppers = false;
  let addSymbols = false;
  let currentPassword = "";
  let charChoice;

  if (arguments.includes("--length")) {
    //check length flag if any
    let lengthFlagPos = arguments.indexOf("--length");
    if (
      Number.isInteger(arguments[lengthFlagPos + 1]) &&
      arguments[lengthFlagPos + 1] > 0
    ) {
      passLength = arguments[lengthFlagPos + 1];
    } else {
      console.log(
        "!-- ERR: Invalid length. Please enter a valid positive integer after the --length flag, i.e. --length 8 --!"
      );
      displayHelp();
      return;
    }
  }
  if (arguments.includes("--number")) {
    //check for number flag
    addNums = true;
  }
  if (arguments.includes("--upper")) {
    //check for uppercase flag
    addUppers = true;
  }
  if (arguments.includes("--symbol")) {
    //check for symbol flag
    addSymbols = true;
  }

  //check for additional flags
  if (!addNums && !addUppers && !addSymbols) {
    for (let i = 0; i < passLength; ++i) {
      charChoice = Math.floor(Math.random() * alphaLowerArray.length);
      currentPassword += alphaLowerArray[charChoice];
    }
  } else {
    for (let i = 0; i < passLength; ++i) {
      charChoice = Math.floor(Math.random() * 4);
    }
  }
};
