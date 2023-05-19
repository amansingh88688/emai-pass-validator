const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const validateButton = document.getElementById("validate-button");
let errorDiv = null;

validateButton.addEventListener("click", function () {
  const email = emailInput.value;
  const password = passwordInput.value;

  const isValidEmail = validateEmail(email);
  const isValidPassword = validatePassword(password);

  if (!isValidEmail || !isValidPassword) {
    displayErrorMessage();
  } else {
    successMessage();
  }
});

function validateEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

function validatePassword(password) {
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  return passwordRegex.test(password);
}

function displayErrorMessage() {
  if (!errorDiv) {
    alert("Invalid password or Email");
  }
}

function successMessage() {
  alert("Email and Password are Valid");
}


// toggle password

function myFunction() {
    var x = document.getElementById("password");
    if (x.type === "password") {
      x.type = "text";
    } else {
      x.type = "password";
    }
  }
