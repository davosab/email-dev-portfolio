/*** Mobile Menu *************************************************************/

const
  mobileMenu = document.querySelector("[data-mobile-menu]"),
  burger = document.querySelector("[data-burger]"),
  body = document.querySelector("body"),
  mobileDevicePattern = /android | iphone | ipad | kindle/i;

burger.addEventListener("click", () => openOrCloseMenu());

openOrCloseMenu = () => {
  burger.classList.toggle("x");
  mobileMenu.classList.toggle("open");
  // if mobile device
  if (mobileDevicePattern.test(navigator.userAgent)) {
    body.classList.toggle("no-scroll");
  }
  // Add margin to body to prevent body expanding when scrollbar disappears
  else { 
    body.classList.toggle("no-scroll-margin");
  }
}


/*** Skills Blob - mouse follower ********************************************/

const
  gradientBackground = document.querySelector("[data-gradient-background]"),
  blobContainer = document.querySelector("[data-blob-container]");
    
body.addEventListener("mousemove", e => {
  const
    gradientBackgroundRect = gradientBackground.getBoundingClientRect(),
    mouseX = e.clientX - gradientBackgroundRect.left,
    mouseY = e.clientY - gradientBackgroundRect.top;

  updateBlobPosition = () => {
    blobContainer.style.setProperty("--mouse-x", mouseX + "px");
    blobContainer.style.setProperty("--mouse-y", mouseY + "px");
  }
  requestAnimationFrame(updateBlobPosition);
});

/***  ***/

