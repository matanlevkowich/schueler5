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

let visible = true;

function button() {
    const headButton = document.querySelector('.header__nav');
    const nav = document.querySelector('.nav');
    const logo = document.querySelector('.logo');

    if (visible) {
        headButton.classList.add('header__nav--active');
        nav.classList.add('nav--active');
        logo.classList.add('logo--white');
        visible = false;
    } else {
        headButton.classList.remove('header__nav--active');
        nav.classList.remove('nav--active');
        logo.classList.remove('logo--white');
        visible = true;
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const headButton = document.querySelector('.header__nav');
    headButton.addEventListener('click', function () {
        button();
    });
});