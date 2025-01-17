## Fullstack JS QAP1 - Password Generator

Generates a password of a specified length with a wide variety of characters.

## USAGE

- Enter into your preferred CLI (preferrably bash), change your directory to where index.js is located, and then enter `node ./index.js generate <flags>` into the terminal to generate a password.
- Omit `generate` or type `generate --help` to display the help message in the terminal.
- Set generated password length with the flag `--length <Non-Negative, Non-Zero Integer>`.
- By default, this program generates a password solely in lowercase letters. Here are flags that enable other character types:
  - `--number` enables the generation of numbers within the password.
  - `--upper` enables the generation of uppercase letters within the password.
  - `--symbol` enables the generation of certain symbols within the password. You may view the currently supported symbols in the help message by typing `--help`.
