window.addEventListener("load", function () {
    document.body.style.opacity = "1";
});

document.addEventListener("DOMContentLoaded", () => {
  const divs = document.querySelectorAll(".cover__fade");
  let currentIndex = 0;

  function fadeNext() {
    // Remove 'active' class from the current div
    divs.forEach(div => div.classList.remove("cover__fade--active"));
  

    // Calculate the next index
    currentIndex = (currentIndex + 1) % divs.length;

    // Add 'active' class to the next div
    divs[currentIndex].classList.add("cover__fade--active");
  }

  // Set the interval for the fade effect (e.g., 3 seconds)
  setInterval(fadeNext, 4000); // Adjust duration as needed
});

// Mobile Menu

let visible = true;

function button() {
    const headButton = document.querySelector('.header__nav');
    const nav = document.querySelector('.nav');
    const logo = document.querySelector('.logo');
    const body = document.body;

    if (visible) {
        headButton.classList.add('header__nav--active');
        nav.classList.add('nav--active');
        logo.classList.add('logo--white');
        body.classList.add('no-scroll'); 
        visible = false;
    } else {
        headButton.classList.remove('header__nav--active');
        nav.classList.remove('nav--active');
        logo.classList.remove('logo--white');
        body.classList.remove('no-scroll'); 
        visible = true;
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const headButton = document.querySelector('.header__nav');
    headButton.addEventListener('click', function () {
        button();
    });
});

// Pop Up

function setupPopup(options) {
  // Default settings
  var settings = {
    duration: 7, // Default cookie duration
    delay: 3000, // Default delay before showing
    containerSelector: "",
    buttonSelectors: "",
    cookieName: null // Required for cookie tracking
  };

  // Merge user options with defaults
  if (typeof options === "object") {
    for (var prop in options) {
      if (options.hasOwnProperty(prop)) {
        settings[prop] = options[prop];
      }
    }
  }

  var container = document.querySelector(settings.containerSelector);
  
  if (!container) return;

  var buttons = container.querySelectorAll(settings.buttonSelectors);

  // If cookie exists and is set to 0, do not show the popup
  if (document.cookie.indexOf(settings.cookieName + "=0") !== -1) {
    if (container.parentNode) {
      container.parentNode.removeChild(container);
    }
    return; // Stop execution if the cookie prevents it from showing
  }

  // Show the element after the specified delay
  setTimeout(function () {
    container.classList.add(settings.containerSelector.replace(".", "") + "--show");
  }, settings.delay);

  // Set expiration date for the cookie
  var d1 = new Date();
  d1.setTime(d1.getTime() + settings.duration * 24 * 60 * 60 * 1000);
  var expiredate = "expires=" + d1.toUTCString();

  // Set the initial cookie to track its display
  document.cookie = settings.cookieName + "=1;" + expiredate + ";path=/";

  // Add event listeners to close buttons
  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      if (container.parentNode) {
        container.parentNode.removeChild(container);
      }
      // Set the cookie to prevent it from showing again
      document.cookie = settings.cookieName + "=0;" + expiredate + ";path=/";
    });
  });
}

// Setup for Cookies (tracked via cookies)
setupPopup({
  containerSelector: ".cook",
  buttonSelectors: ".button--cook",
  cookieName: "acceptgrt",
  delay: 2500,
  duration: 1 
});

// Setup for Popup (tracked via cookies)
setupPopup({
  containerSelector: ".pop",
  buttonSelectors: ".button__box, .close",
  cookieName: "popupClosed",
  delay: 4000,
  duration: 1 
});


// Glide 

document.addEventListener('DOMContentLoaded', function () {
  const glideElement = document.querySelector('.glide');
  const slides = glideElement.querySelectorAll('.glide__slide');
  const navigation = document.querySelector('.glide__arrows'); // Adjust selector if needed

  function getDynamicGap() {
    return window.innerWidth * 0.04; // 4vw in pixels
  }

  function getCurrentPerView() {
    const width = window.innerWidth;
    if (width <= 480) return 1;
    if (width <= 576) return 2;
    if (width <= 768) return 2;
    if (width <= 992) return 3;
    return 4; // Default perView
  }

  function updateGlide() {
    const perView = getCurrentPerView();
    const shouldHideNav = slides.length <= perView;

    let glide = new Glide('.glide', {
      type: 'slider', // Always a slider
      gap: getDynamicGap(),
      perView: perView,
      breakpoints: {
        992: { perView: 3, gap: 24 },
        768: { perView: 2, gap: 22 },
        576: { perView: 2, gap: 16 },
        480: { perView: 1, gap: 0 }
      }
    });

    glide.mount();

    // Show/hide navigation
    if (navigation) {
      navigation.style.display = shouldHideNav ? 'none' : 'flex';
    }

    // Update gap on window resize
    window.addEventListener('resize', function () {
      glide.update({ gap: getDynamicGap() });

      // Recalculate perView and hide/show navigation on resize
      const updatedPerView = getCurrentPerView();
      const updatedShouldHideNav = slides.length <= updatedPerView;
      navigation.style.display = updatedShouldHideNav ? 'none' : 'flex';
    });
  }

  updateGlide();
});


// Lightbox

const lightbox = GLightbox({
    touchNavigation: true,
    loop: true,
    zoomable:false,
    closeButton: true,
    autoplayVideos: true
});

