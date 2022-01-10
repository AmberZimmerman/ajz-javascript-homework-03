// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
// Create generate password
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

  //Prompt to choose the length of the password that is at least 8 characters and no more than 124 characters
function lengthQuestion() {
  let lengthAnswer = prompt("How many characters long would you like your password to be?");
  console.log(lengthAnswer);
}
lengthQuestion()

//Prompt to choose confirm whether or not to include lowercases
function lowercaseQuestion() {
  let lowercaseAnswer = prompt("Would you like your password to include lowercase letters?");
  console.log(lowercaseAnswer);
}
lowercaseQuestion()


//Prompt to choose confirm whether or not to include uppercase
function uppercaseAnswer() {
  let uppercaseAnswer = prompt("Would you like your password to include uppercase letters?");
  console.log(uppercaseAnswer);
}
uppercaseAnswer()


//Prompt to choose confirm whether or not to include numbers
function numberQuestion() {
  let numberAnswer = prompt("Would you like your password to include numbers?");
  console.log(numberAnswer);
}
numberQuestion()

//Prompt to choose confirm whether or not to include special characters
function characterQuestion() {
  let characterAnswer = prompt("Would you like your password to include special characters?");
  console.log(characterAnswer);
}
characterQuestion()

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//Prompt with Criteria for the password
const lowercase = "abcdefghijklmnopqrstuvwxyz";
const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*_-+=";






// When a user answsers a prompt - each input type should be validated and at least one character type should be selected

//When prompts are answered, generate a password that matches the criteria

//Generated password displayed in an alert of written to the page

