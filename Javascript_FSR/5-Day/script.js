let username = document.getElementById("username");
let usernameError = document.getElementById("username-error");
let email = document.getElementById("email");
let emailError = document.getElementById("email-error");
let password = document.getElementById("password");
let confirmPassword = document.getElementById("confirm-password");
let passwordError = document.getElementById("password-error");
let confirmPassowrdError = document.getElementById("confirmPassowrd-error");

function formValidation() {
  if (username.value.length < 4) {
    // checking username validity
    usernameError.style.visibility = "visible";
    usernameError.innerText = "Username must be at least 4 characters";
    usernameError.style.color = "red";
  } else {
    // checking email validity
    let pattern = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    if (!email.value.match(pattern)) {
      //   emailError.style.visibility = "visible";
      emailError.innerText = "Email Cannot be accepted";
      emailError.style.color = "red";
      alert("Email is not valid, Please try again");
    } else {
      // checking password validity
      if (password.value.length < 3) {
        passwordError.innerText = "Password must be at least 3 characters";
        passwordError.style.visibility = "visible";
        console.log("'line10'");
      } else if (password.value.length > 15) {
        passwordError.innerText = "Password must be at less than 15 characters";
        passwordError.style.visibility = "visible";
        console.log("'line14'");
      } else {
        if (password.value == confirmPassword.value) {
          console.log("password matched");
          confirmPassowrdError.innerText = "Password Matched";
          confirmPassowrdError.style.visibility = "visible";
          confirmPassowrdError.style.color = "blue";
          console.log("'line22'");
        } else {
          console.log("Password does not match");
          confirmPassowrdError.innerText = "Passwordd does not Matched";
          confirmPassowrdError.style.color = "red";
          confirmPassowrdError.style.visibility = "visible";
        }
      }
    }
  }
}
