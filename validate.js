var password = document.getElementById('password');
var password_confirm = document.getElementById('password_confirm');
var errorMsg = document.getElementById("password_error");

function PasswordInput() {
  if (password.value == password_confirm.value)
  {
    password.classList.remove('error');
    password_confirm.classList.remove('error');
    errorMsg.innerText = "";
  }
  else 
  {
    console.log("Error!");
    password.classList.add('error');
    password_confirm.classList.add('error');
    errorMsg.innerText = "*Passwords do not match";
  }
}
password.addEventListener('input',PasswordInput);
password_confirm.addEventListener('input',PasswordInput);