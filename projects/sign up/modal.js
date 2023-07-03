const
  modal = document.getElementById("modal"),
  openButtons = document.querySelectorAll("[data-open-modal]"),
  closeButton = document.querySelector("[data-close-modal]");
  

/*** Show and close modal ****************************************************/

// Show modal
for (let i = 0; i < openButtons.length; i++) {
  openButtons[i].addEventListener("click", () => {
    modal.showModal();
    modal.classList.add("open");
  });
}

// Close modal (x button)
closeButton.addEventListener("click", closeModal = () => {
  modal.classList.remove("open");
  setTimeout(() => modal.close(), 200);
});

// Close modal when clicks outside modal
modal.addEventListener("click", e => {
  const modalDimensions = modal.getBoundingClientRect();
  if (
    e.clientX < modalDimensions.left ||
    e.clientX > modalDimensions.right ||
    e.clientY < modalDimensions.top ||
    e.clientY > modalDimensions.bottom
  )
    closeModal();
});


/*** Form ********************************************************************/

const
  percent = document.getElementById("percent"),

  form = document.querySelector("form"),
  firstNameInput = document.getElementById("name"),
  emailInput = document.getElementById("email"),

  message = document.getElementById("message"),

  firstNameInvalid = "Please provide a valid name.",
  emailInvalid = "Please provide a valid email address.",
  bothInvalid = "Please provide a valid name and email address.";


/*** Form functions ******************/

fiftyComplete = () => {
  modal.classList.remove("one-hundred");
  modal.classList.remove("seventy-five");
  percent.innerText = "50";
}

seventyFiveComplete = () => {
  modal.classList.remove("one-hundred");
  percent.innerText = "75";
  modal.classList.add("seventy-five");
}

oneHundredComplete = () => {
  percent.innerText = "100";
  modal.classList.add("one-hundred");
}

validateEmail = (email) => {
  if (!email) return 0;
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

showErrors = () => {
  const
    firstName = firstNameInput.value.trim(),
    email = emailInput.value.trim();
  
  message.classList.add("red-italic");

  if (!firstName) {
    if (!validateEmail(email)) {
      message.innerText = bothInvalid;
      return;
    }
    message.innerText = firstNameInvalid;
    return;
  }
  if (!validateEmail(email)) {
    message.innerText = emailInvalid;
    return;
  }
}

thankYou = () => {
  alert("Thank you!");
}

/*** Form events *********************/

firstNameInput.addEventListener("blur", () => {
  const
    firstName = firstNameInput.value.trim(),
    email = emailInput.value.trim();
  
  if (!firstName) {
    if (!validateEmail(email)) {
      fiftyComplete();
      return;
    }
    seventyFiveComplete()
    return;
  }

  if (firstName) {
    if (validateEmail(email)) {
      oneHundredComplete();
      return;
    }
    seventyFiveComplete()
    return;
  }
});

emailInput.addEventListener("blur", () => {
  const
    firstName = firstNameInput.value.trim(),
    email = emailInput.value.trim();
  
  if (!validateEmail(email)) {
    if (!firstName) {
      fiftyComplete();
      return;
    }
    seventyFiveComplete()
    return;
  }

  if (validateEmail(email)) {
    if (firstName) {
      oneHundredComplete();
      return;
    }
    seventyFiveComplete()
    return;
  }
});

form.addEventListener("submit", e => {
  e.preventDefault();
  if (modal.classList.contains("one-hundred")) {
    message.classList.remove("red-italic");
    message.innerText = "Thank you!";
    setTimeout(thankYou, 500);
    return;
  }
  showErrors();
});

/* 

NEEDED

  - Thank you function
  - Error message shake animation

*/