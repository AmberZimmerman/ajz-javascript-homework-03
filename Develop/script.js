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
function test() {
  let lengthAnswer = prompt("How many characters long would you like your password to be?");
  console.log(lengthAnswer);
}

//Prompt to choose confirm whether or not to include lowercases
function test() {
  let lowercaseAnswer = prompt("Would you like your password to include lowercase letters?");
  console.log(lowercaseAnswer);
}

//Prompt to choose confirm whether or not to include uppercase
function test() {
  let uppercaseAnswer = prompt("Would you like your password to include uppercase letters?");
  console.log(uppercaseAnswer);
}

//Prompt to choose confirm whether or not to include numbers
function test() {
  let alphaAnswer = prompt("Would you like your password to include numbers?");

//Prompt to choose confirm whether or not to include special characters
function test() {
  let alphaAnswer = prompt("Would you like your password to include special characters?");


// When a user answsers a prompt - each input type should be validated and at least one character type should be selected

//When prompts are answered, generate a password that matches the criteria

//Generated password displayed in an alert of written to the page

