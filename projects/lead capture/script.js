const
  input = document.getElementById("email-input"),
  button = document.getElementById("button"),
  form = document.getElementById("form"),
  error = document.getElementById("error-message"),

  // Error messages
  invalid = "Invalid email address",
  empty = "Field required";    

// Functions
validateEmail = () => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(input.value.trim());
}

welcome = () => {
  form.classList.remove("error");
  form.classList.remove("shake");
  form.classList.add("welcome");
}

showError = () => {
  error.innerHTML = invalid;
  
  if (input.value == "")
    error.innerHTML = empty;
  
  // if error bounced => shake error
  if (form.classList.contains("error")) {
    form.classList.remove("shake");
    form.offsetHeight;
    form.classList.add("shake");
    return;
  }

  form.classList.add("error");
}

// Events
button.onclick = () => validateEmail() ? welcome() : showError();
