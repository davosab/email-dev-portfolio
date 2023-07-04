/*** Mobile Menu *************************************************************/

const
  mobileMenu = document.querySelector("[data-mobile-menu]"),
  burger = document.querySelector("[data-burger]"),
  body = document.querySelector("body");

burger.addEventListener("click", () => openOrCloseMenu());

openOrCloseMenu = () => {
  body.classList.toggle("no-scroll");
  burger.classList.toggle("x");
  mobileMenu.classList.toggle("open");
}


/*** Skills Blob - mouse follower ********************************************/

const
  skillsContainer = document.querySelector("[data-skills-container]"),
  blobContainer = document.querySelector("[data-blob-container]");
    
skillsContainer.addEventListener("mousemove", e => {
  const
    skillsContainerRect = skillsContainer.getBoundingClientRect(),
    mouseX = e.clientX - skillsContainerRect.left,
    mouseY = e.clientY - skillsContainerRect.top;

  updateBlobPosition = () => {
    blobContainer.style.setProperty("--mouse-x", mouseX + "px");
    blobContainer.style.setProperty("--mouse-y", mouseY + "px");
  }
  requestAnimationFrame(updateBlobPosition);  
});


/***  ***/

