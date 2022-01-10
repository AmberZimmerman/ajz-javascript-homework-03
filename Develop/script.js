// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//Prompt with Criteria for the password
const alpha = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*_-+=";


//Prompt to choose the length of the password that is at least 8 characters and no more than 124 characters
function tex() {
  let answer = prompt("How many characters long would you like your password to be?");
}

//Prompt to choose confirm whether or not to include lowercase, uppercase, numeric, and/or special characters

// When a user answsers a prompt - each input type should be validated and at least one character type should be selected

//When prompts are answered, generate a password that matches the criteria

//Generated password displayed in an alert of written to the page
