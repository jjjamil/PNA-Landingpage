const sections = document.querySelectorAll(".section");

const options = {
  root: null, // Use the viewport as the root
  threshold: 0.1, // Trigger when 10% of the section is visible
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible"); // Add visible class
      observer.unobserve(entry.target); // Stop observing once visible
    }
  });
}, options);

// Observe each section
sections.forEach((section) => {
  observer.observe(section);
});
