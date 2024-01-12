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

// Function to prompt user for password options
 function getPasswordOptions() {
  
  // Collect all of the user's password preferences 

 
  alert("Please choose a password");
  
  var passwordlength = parseInt(prompt("Choose between 8 - 128 characters for your password"));
 
if (passwordlength < 8 || passwordlength > 128)  {
  alert("Your password length must be between 8 to 128 characters. Please try again")
  return;
  // getPasswordOptions()
};

var useNumbers= confirm("Would you like to use numbers in your password?")
var useSymbols= confirm("Would you like to use symbols in your password?")
var useUppercase= confirm("Would you like to use Uppercase in your password?")
var useLowercase= confirm("Would you like to use Lowercase in your password?")

if (useNumbers===false && useSymbols===false && useUppercase===false && useLowercase===false) {
  alert("You have to choose at least one character type")
  getPasswordOptions()
}

let allArrays = []; 
if (useLowercase === true) {
  allArrays = allArrays.concat(lowerCasedCharacters);
}

if (useSymbols === true) {
  allArrays = allArrays.concat(specialCharacters);
}

if (useUppercase === true) {
  allArrays = allArrays.concat(upperCasedCharacters);
}

if (useNumbers === true) {
  allArrays = allArrays.concat(numericCharacters);
}

  let passwordstring= ""
 for (i = 0 ; i<passwordlength; i++) {
  // Get random Index 
  let randomindex=Math.floor( Math.random()* allArrays.length)  
  let randomcharacter= allArrays [randomindex]
  passwordstring= passwordstring + randomcharacter
 }
   
 console.log(passwordstring);
 return passwordstring;
  }
 

// Function to generate password with user input
 function generatePassword() {
  
  let finalPassword = getPasswordOptions();
  
  return finalPassword;
}
 

// Get references to the #generate element
 var generateBtn = document.querySelector('#generate');

// Write password to the #password input
 function writePassword() {
   var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
 }

// Add event listener to generate button
 generateBtn.addEventListener('click', writePassword);