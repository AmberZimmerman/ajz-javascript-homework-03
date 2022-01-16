// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

function generatePassword() {

//Prompt with Criteria for the password
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const numbers = "0123456789";
const symbols = "!@#$%^&*_-+=";

// When a user answsers a prompt - each input type should be validated and at least one character type should be selected and will be added to charSet
let charSet = "";

//Prompt to choose the length of the password that is at least 8 characters and no more than 124 characters


// let lengthAnswer = Number(prompt("How many characters long would you like your password to be? Type a number between 8 and 124", "8"));

// const lengthAnswer = range(8,124);

let lengthAnswer = Number(prompt("How many characters long would you like your password to be? Type a number between 8 and 124", "8"));
console.log(lengthAnswer);

function test() {
  let lengthAnswer = Number(prompt("How many characters long would you like your password to be? Type a number between 8 and 124", "8")); {
    if (lengthAnswer >= 8 && lengthAnswer <=124) {
    console.log(lengthAnswer);
    return;
    } else {
      
    }
    
  }
  
}

test();

// if (lengthAnswer >= 8 && lengthAnswer <= 124) {
//   console.log(lengthAnswer);
// } else {

// }

// while (!lengthAnswer); {
//   console.log(`Please enter a number between 8 and 124`);
      // the function for the answer would go above
// }
//   console.log(`length of password ${lengthAnswer}`);







  //  if(lengthAnswer < 8 || lengthAnswer > 128 || isNaN(length)) {
//     lengthAnswer.remove("invalid");
//     lengthAnswer.add("valid");
//   } else {
//     lengthAnswer.remove("valid");
//     lengthAnswer.add("invalid");

// function checkLength() 
// { 
// if ((lengthAnswer < 8) || (lengthAnswer > 128) || (isNaN(length))) {
//   return true;
// } else { 
//   alert('Incorrect entry. Please choose a number between 8 to 128 and click ok to continue')
//   return false;
// }
// }

// checkLength ()


//Prompt to choose confirm whether or not to include lowercases
if (confirm("Would you like your password to include lowercase letters? Click ok to continue with lowercase letters or cancel to continue without lowercase letters")) {
  charSet += lowerCase;
  console.log(charSet);
}

//Prompt to choose confirm whether or not to include uppercase
if (confirm("Would you like your password to include uppercase letters? Click ok to continue with uppercase letters or cancel to continue without uppercase letters")) {
  charSet += upperCase;
  console.log(charSet);
}

//Prompt to choose confirm whether or not to include numbers
if (confirm("Would you like your password to include numbers? Click ok to continue with numbers or cancel to continue without numbers")) {
  charSet += numbers;
  console.log(charSet);
}


//Prompt to choose confirm whether or not to include special characters
if (confirm("Would you like your password to include special characters? Click ok to add special characters and generate password or cancel to generate password without special characters")) {
  charSet += symbols;
  console.log(charSet);
}



let finalPassword = "";

//When prompts are answered, generate a password that matches the criteria
for (i = test.lengthAnswer; i++) {
  finalPassword += charSet.charAt(Math.floor(Math.random() * charSet.length));
}

//Generated password displayed in an alert or written to the page

console.log(finalPassword);
return finalPassword;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// THEN my input should be validated and at least one character type should be selected WHEN all prompts are answered


