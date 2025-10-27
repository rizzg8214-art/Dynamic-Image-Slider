const images = document.querySelectorAll(".slider img");
const dotsContainer = document.querySelector(".dots");
let index = 0;

// Create indicator dots
images.forEach((_, i) => {
  const dot = document.createElement("span");
  dot.addEventListener("click", () => showSlide(i));
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dots span");

function showSlide(i) {
  images.forEach(img => img.classList.remove("active"));
  dots.forEach(dot => dot.classList.remove("active"));
  images[i].classList.add("active");
  dots[i].classList.add("active");
  index = i;
}

document.querySelector(".next").addEventListener("click", () => {
  index = (index + 1) % images.length;
  showSlide(index);
});

document.querySelector(".prev").addEventListener("click", () => {
  index = (index - 1 + images.length) % images.length;
  showSlide(index);
});

// Auto-slide every 4 seconds
setInterval(() => {
  index = (index + 1) % images.length;
  showSlide(index);
}, 4000);

showSlide(0);

