// Assignment Code
var generateBtn = document.querySelector("#generate");

var writePassword = {
  lowerCase: randomLowerCase,
  upperCase: randomUpperCase,
  spCharSet: randomSpCharSet,
  numbers: randomNumbers
}
generateBtn.addEventListener("click", writePassword); {

}

function writePassword(lowerCase, upperCase, spCharSet, numbers) {

}

//Password Variables
var lowerCase = confrim("Please have at least one lowercase character.");
var upperCase = confirm("Please have at least one uppercase character.");
var numbers = cofirm("Please have at least one number.");
var spCharSet = confirm("Please have at least one speical character.");
var charLength = prompt("Please create a password between 8 and 128 characters long.");

//Password Qulaifications
function randomLowerCase() {
  var alphabetLow = 'abcdefghijklmnopqrstuvwxyz';
  return alphabetLow[Math.floor(Math.random() * alphabetLow.length)];
}

function randomUpperCase() {
  var alphabetUpper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  return alphabetUpper[Math.floor(Math.random() * alphabetUpper.length)];
}

function randomSpCharSet() {
  var randomSpCharset = '!@#$%^&*()<>?/.';
  return randomSpCharSet[Math.floor(Math.random() * randomSpCharSet.length)];
}

function randomNumbers() {
  var randomNumbers = '0123456789';
  return randomNumbers[Math.floor(Math.random() * randomNumbers.length)];
}

