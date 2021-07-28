// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];
  var userTally = 0;
  var charAmount;
  var randomArray = [];
  var randomPass;
  // Get references to the #generate element
  var generate = document.getElementById("generate");
  var passwordPlace = document.getElementById("password");
// Function to prompt user for password options
function getPasswordOptions() {
  
  var userSpec = confirm("Would you like to have special characters in your password?");
  if (userSpec){
    for (var i = 0; i < specialCharacters.length; i++) {
      randomArray.push(specialCharacters[i]);
    }
    console.log(randomArray);    
  }
  else {
    userTally++;
  }
  var userNum = confirm("Would you like to have numerical characters in your password?");
  if (userNum){
    for (var j = 0; j < numericCharacters.length; j++) {
    randomArray.push(numericCharacters[j]);
    }
    console.log(randomArray);
  }
  else {
    userTally++;
  }
  var userLow = confirm("Would you like to have lower case letters in your password?");
  if (userLow){
    for (var k = 0; k < lowerCasedCharacters.length; k++) {
    randomArray.push(lowerCasedCharacters[k]); 
    }
    console.log(randomArray);
  }
  else {
    userTally++;
  }
  var userUpp = confirm("Would you like to have upper case letters in your password?");
  if (userUpp){
    for (var l = 0; l < upperCasedCharacters.length; l++) {
    randomArray.push(upperCasedCharacters[l]);   
    }
    console.log(randomArray);
  }
  else {
    userTally++;
    if (userTally == 4){
      alert("You must pick at least one type of characters.")
      userTally = 0;
      getPasswordOptions();
    }
  } 
  getRandom();
}


// Function for getting a random element from an array
function getRandom() {
      charAmount = prompt("How many letters would you like to have in your password?" + "(MUST BE BETWEEN 10 and 64)");
      charAmount = parseInt(charAmount);
        
      if (charAmount >= 10 && charAmount <= 64) {
        
        generatePassword();
      }
      else {
        alert("You must select a number between 10 and 64.");
        getRandom();
      }
    }

// Function to generate password with user input
function generatePassword() {
      for (var m = 0; m < charAmount; m++) {
        randomPass = randomArray[Math.floor(Math.random(m) * randomArray.length)];
        writePassword();
    }
}

// Write password to the #password input
function writePassword() {
    passwordPlace.append(randomPass);
}

generate.addEventListener("click", getPasswordOptions);