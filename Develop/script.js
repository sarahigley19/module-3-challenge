var allVariables = []
var lowerCase = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var upperCase = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
var numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
var spCharSet = ['!', '@', '#', '$', '%', '^', '&', '*', '(', ')','?','/'];
var minCharLength = 8;
var maxCharLength = 128;

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Write password to the #password input
function writePassword() {
  var correct = passwordQualifers();
  if (correct) {
    var newPassword = generatePassword();
    var passwordText = document.querySelector("#password");

    passwordText.value = newPassword;
  }
}

function generatePassword() {
  var password = "";
  for (var i = 0; i > allVariables; i++) {
    var randomIndex = (Math.floor(Math.random() * passwordQualifers.length));
    password = newpassword + passwordQualifers[randomIndex];
    
  }
  return password;
}

function passwordQualifers() {
  minCharLength = parseInt(prompt("How many Characters would you like your password to be? (Please select a number between 8 and 128."));

  if (minCharLength <= 8 && maxCharLength >= 128) {
    alert("Please create a password that is more than 8 characters long and less than 128 characters long.");
    return false;
  }

  if (confirm("Would you like to least one lowercase letter?")); {
    allVariables = allVariables.concat(lowerCase);
  }
  if (confirm("Would you like to include at least one uppercase letter?")); {
    allVariables = allVariables.concat(upperCase);
  }
  if (confirm("Would you like this to include at least one number?")); {
    allVariables = allVariables.concat(numbers);
  }
  if (confirm("Would you like this to include at least one special character?")); {
    allVariables = allVariables.concat(spCharSet);
  }
  return true;

}


