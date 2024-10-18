// Function to open the popup form
function openPopup() {
  document.getElementById("popupForm").style.display = "block";
  document.body.style.overflow = "hidden";
  document.body.style.backgroundColor = "rgba(0, 0, 0, 0.5)"; // semi-transparent black background

  // Blur other elements
  var elementsToBlur = document.querySelectorAll("body > *:not(#popupForm)");
  for (var j = 0; j < elementsToBlur.length; j++) {
    elementsToBlur[j].classList.add("blur");
  }
}

// Function to close the popup form when the close button is clicked
document.getElementById("closeBtn").onclick = function () {
  document.getElementById("popupForm").style.display = "none";
  document.body.style.overflow = "auto";
  document.body.style.backgroundColor = ""; // Set back to original background color

  var elementsToBlur = document.querySelectorAll(".blur");
  for (var j = 0; j < elementsToBlur.length; j++) {
    elementsToBlur[j].classList.remove("blur");
  }
};

let currentSlide = 0;

function showSlides() {
  const slides = document.querySelectorAll(".slide");
  slides.forEach((slide, index) => {
    slide.style.display = index === currentSlide ? "block" : "none";
  });
}

function changeSlide(direction) {
  const slides = document.querySelectorAll(".slide");
  currentSlide = (currentSlide + direction + slides.length) % slides.length;
  showSlides();
}

// Initialize the slider
showSlides();
