const menuToggle = document.getElementById("menu-toggle");
const nav = document.getElementById("nav");
const header = document.getElementById("header");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("active");
});

document.querySelectorAll(".nav a").forEach((link) => {
  link.addEventListener("click", () => {
    nav.classList.remove("active");
  });
});

window.addEventListener("scroll", () => {
  if (window.scrollY > 20) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
});
const targets = document.querySelectorAll('.section, .hero-inner');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('active');
    }
  });
}, {
  threshold: 0.3
});

targets.forEach(target => {
  observer.observe(target);
});