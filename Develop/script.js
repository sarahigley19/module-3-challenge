//Password Variables
var charVar = {
  lowerCase: 'abcdefghijklmnopqrstuvwxyz',
  upperCase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  numbers: '0123456789',
  spCharSet: '!@#$%^&*()?/',
};

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var correct = passwordQualifers();
  if (correct) {
    var unlockNewPassword = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = unlockNewPassword;
  }
}

// Generate Password Function
function generatePassword() {
  let password = "";
  const charSet = Object.values(charVar).join('');

  for (let i = 0; i < charLength; i++) {
    const randomIndex = Math.floor(Math.random() * charSet.length);
    password += charSet[randomIndex];
  }

  return password;
}

// Password Qualifications
function passwordQualifers() {
  charLength = parseInt(prompt("How many Characters would you like your password to be? (Please select a number between 8 and 128."));

  if (charLength < 8 || charLength > 128) {
    alert("Please create a password that is more than 8 characters long and less than 128 characters long.");
    return false;
  }

  if (confirm("Would you like to include at least one lowercase letter?")) {
    charVar.lowerCase = charVar.lowerCase;
  }
  if (confirm("Would you like to include at least one uppercase letter?")) {
    charVar.upperCase = charVar.upperCase;
  }
  if (confirm("Would you like this to include at least one number?")) {
    charVar.numbers = charVar.numbers;
  }
  if (confirm("Would you like this to include at least one special character?")) {
    charVar.spCharSet = charVar.spCharSet;
  }
  return true;
}



