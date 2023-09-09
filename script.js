/* Mobile Menu ***************************************************************/

const
  mobileMenu = document.querySelector("[data-mobile-menu]"),
  links = document.querySelectorAll("[data-mobile-menu-link"),
  burger = document.querySelector("[data-burger]"),
  body = document.querySelector("body"),
  mobileDevicePattern = /android | iphone | ipad | kindle/i;

links.forEach(link => {
  link.addEventListener("click", () => openOrCloseMenu());
});

burger.addEventListener("click", () => openOrCloseMenu());

openOrCloseMenu = () => {
  burger.classList.toggle("x");
  mobileMenu.classList.toggle("open");
  // if mobile device
  if (mobileDevicePattern.test(navigator.userAgent)) {
    body.classList.toggle("no-scroll");
    return;
  }
  // Add margin to body to prevent body expanding when scrollbar disappears
    body.classList.toggle("no-scroll-margin");
}


/* Navigation Links **********************************************************/

const navLinks = document.querySelectorAll("[data-nav-link]");

scrollToSection = (id) => {
  const section = document.getElementById(id);
  section.scrollIntoView();
}

navLinks.forEach(link => {
  link.addEventListener("click", e => {
    e.preventDefault();
    navLinks.forEach(link => link.classList.remove("active-green"));
    link.classList.add("active-green");
  });
});
// Prevent page from smooth-scrolling on refresh
addEventListener("beforeunload", () => 
  document.documentElement.style.scrollBehavior = "auto"
);

addEventListener("load", () => 
  setTimeout(() => document.documentElement.style.scrollBehavior = "smooth", 
  400)
);


/* Skills Blob - mouse follower **********************************************/

const
  gradientBackground = document.querySelector("[data-gradient-background]"),
  blobContainer = document.querySelector("[data-blob-container]"),
  /** distance (pixels) when opacity starts changing */
  d = 100;
let previousClientX, previousClientY;

updateBlobPosition = (x, y, rect) => {
  // Don't update blob position when mouse is viewport height away from section
  if (y < -innerHeight || 
    y > gradientBackground.offsetHeight + innerHeight) return;
    
  blobContainer.style.setProperty("--mouse-x", x + "px");
  blobContainer.style.setProperty("--mouse-y", y + "px");
  blobContainer.style.setProperty("--opacity", 1);

  // Hide blob when mouse has not moved yet
  if (isNaN(y)) blobContainer.style.setProperty("--mouse-y", "-100px");

  // Fade blob away when it's close to the sides
  if (x < d)
    blobContainer.style.setProperty("--opacity", x * 1 / d);
  
  if (x > rect.right - d)
    blobContainer.style.setProperty("--opacity",
      (rect.right - x) * 1 / d);
}

body.addEventListener("mousemove", e => {
  const 
    gradientBackgroundRect = gradientBackground.getBoundingClientRect(),
    mouseX = e.clientX - gradientBackgroundRect.left,
    mouseY = e.clientY - gradientBackgroundRect.top;

  previousClientX = e.clientX,
  previousClientY = e.clientY;

  requestAnimationFrame(() => 
    updateBlobPosition(mouseX, mouseY, gradientBackgroundRect)
  );
});

window.addEventListener("scroll", () => {
  const 
    gradientBackgroundRect = gradientBackground.getBoundingClientRect(),
    previousMouseX = previousClientX - gradientBackgroundRect.left,
    previousMouseY = previousClientY - gradientBackgroundRect.top;

  requestAnimationFrame(() => 
    updateBlobPosition(previousMouseX, previousMouseY, gradientBackgroundRect)
  );  
});


/*** Project Sorting *********************************************************/

const
  sortBtns = document.querySelectorAll("[data-sort-button]"),
  btnAll = document.querySelector("[data-sort-button='all']"),
  btnEmails = document.querySelector("[data-sort-button='emails']"),
  btnLPages = document.querySelector("[data-sort-button='landing-pages']"),
  cards = document.querySelectorAll("[data-project-type]"),
  cardsEmail = document.querySelectorAll("[data-project-type='email']"),
  cardsLPage = document.querySelectorAll("[data-project-type='landing-page']");

hideAndShow = (x, y) => {
  x.forEach(card => card.classList.add("hidden-card"));
  y.forEach(card => card.classList.remove("hidden-card"));
}

sortBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    sortBtns.forEach(btn => btn.classList.remove("active-green"));
    btn.classList.add("active-green");
  });
});

btnAll.addEventListener("click", () => 
  cards.forEach(card => card.classList.remove("hidden-card"))
);

btnEmails.addEventListener("click", () => hideAndShow(cardsLPage, cardsEmail));

btnLPages.addEventListener("click", () => hideAndShow(cardsEmail, cardsLPage));

