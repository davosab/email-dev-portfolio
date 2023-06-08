const
  input = document.getElementById("email-input"),
  button = document.getElementById("button"),
  form = document.getElementById("form");

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