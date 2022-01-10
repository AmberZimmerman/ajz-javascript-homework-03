// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  
function generatePassword() {
  
//Prompt with Criteria for the password
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*_-+=";

let charSet = "";

//Prompt to choose the length of the password that is at least 8 characters and no more than 124 characters
let lengthAnswer = prompt("How many characters long would you like your password to be? Type a number between 8 and 124", "8");
  console.log(`length of password ${lengthAnswer}`);

//Prompt to choose confirm whether or not to include lowercases
if (confirm("Would you like your password to include lowercase letters?")) {
  console.log(`Include lowercase letters ${lowercaseAnswer}`);
}



//Prompt to choose confirm whether or not to include uppercase
function uppercaseAnswer() {
  let uppercaseAnswer = confirm("Would you like your password to include uppercase letters?");
  console.log(`Include uppercase letters ${uppercaseAnswer}`);
}
uppercaseAnswer()


//Prompt to choose confirm whether or not to include numbers
function numberQuestion() {
  let numberAnswer = confirm("Would you like your password to include numbers?");
  console.log(`include numbers ${numberAnswer}`);
}
numberQuestion()

//Prompt to choose confirm whether or not to include special characters
function characterQuestion() {
  let characterAnswer = confirm("Would you like your password to include special characters?");
  console.log(`Include special characters ${characterAnswer}`);
}
characterQuestion()
  
  

  
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);







// When a user answsers a prompt - each input type should be validated and at least one character type should be selected

//When prompts are answered, generate a password that matches the criteria

//Generated password displayed in an alert of written to the page



// charSet = "";

// if upperCase === true {
//   charSet += const alpha
//   console.log(charset) abdoicj
// }