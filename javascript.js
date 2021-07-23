// this is the variables for the password generator //
var specialChar = ["!", "@", "#", "$", "%", "^", "&", "*", "(", ")"];
var upperCase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Z", "Y"];
var lowerCase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "z", "y"];
var numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

// defining empty object for user selection options //
var passwordOptions = {}


// Write password to the #password input//
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}


//function that will determine the length of the users password, user will choose the amount of paramaters of the password//
function getParameters() {
  //var length is the input for the password length //
  var length =
    parseInt(prompt("How many characters would you like your password to be?"))
  
  //this validates that user needs to input a numeric number only in the first alert prompt box //
  if (Number.isNaN(length)) {
    alert("Lenght must be numeric character")
  }
//if the user chooses any number less than 8 it will alert the string message //
  if (length < 8) {
    alert("Lenght of password must be greater than 8")
  }
//if the user chooses any number more than 128 it will alert the string message //
  if (length > 128) {
    alert("Lenght of password must be less than 128")
  }
//These variables will confirm if the users wants special characters, upper case letters, lower case letters, and numbers //
  var hasspecialChar =
    confirm("Would you like special characters included?")

  var hasupperCase =
    confirm("Would you like to have upper case letters?")
  
  var haslowerCase =
    confirm("Would you like to lower case letters?")
  
  var hasnumbers =
    confirm("Would you like to have numbers?")
  
  if (hasspecialChar === false && hasupperCase === false && haslowerCase === false && hasnumbers === false) {
    alert("Password must have at least of the required options")
  }

// reassigning the values of the empty object with our characters //
  passwordOptions = {
    lengths: length,
    hasnumbers: hasnumbers,
    hasupperCase: hasupperCase,
    haslowerCase: haslowerCase,
    hasspecialChar: hasspecialChar,
  }
}

// function will get the arrays length and randomize the index and return random element //
function getrandom(results) {
  var newArray = []
  for (let i = 0; i < passwordOptions.lengths; i++) {
    var newCode = results[Math.floor(Math.random() * results.length)]
    newArray.push(newCode)
  }
  console.log(newArray)
  return(newArray)
}

//this function will generate the password by calling the getParameters and the "if" statements will concat the the arrays//
function generatePassword() {
  getParameters();
  //empty variable named results with empty [] that will be create arrays once the if statements are ran through with each of the selected variables //
  var results = [];

  if (passwordOptions.hasupperCase) {
    results = results.concat(upperCase)
    console.log(results)
  }

  if (passwordOptions.hasnumbers) {
    results = results.concat(numbers)
    console.log(results)
  }

  if (passwordOptions.hasspecialChar) {
    results = results.concat(specialChar)
    console.log(results)
  }

  if (passwordOptions.haslowerCase) {
    results = results.concat(lowerCase)
    console.log(results)
  }

  var randomNew = getrandom(results);
  console.log("Random arrays")
  return (randomNew.join)("")
}


//this will get the id element from the html (document) //
var generateBtn = document.querySelector("#generate");


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
