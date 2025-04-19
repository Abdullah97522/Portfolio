const cursor = document.querySelector(".custom-cursor");

let mouseX = 0;
let mouseY = 0;
let currentX = 0;
let currentY = 0;

document.addEventListener("mousemove", (e) => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animateCursor() {
  currentX += (mouseX - currentX) * 0.2;
  currentY += (mouseY - currentY) * 0.2;
  cursor.style.left = currentX + "px";
  cursor.style.top = currentY + "px";
  requestAnimationFrame(animateCursor);
}

animateCursor();
// Preloader logic
window.addEventListener("load", () => {
  const preloader = document.getElementById("preloader");
  setTimeout(() => {
    preloader.style.opacity = "0";
    setTimeout(() => {
      preloader.style.display = "none";
    }, 600); // matches transition
  }, 3000); // matches the loading animation (3s)
});
// Smooth scroll logic
const scrollLinks = document.querySelectorAll('a[href^="#"]');  
document.getElementById('darkModeToggle').addEventListener('click', () => {
  document.body.classList.toggle('dark-mode');
});
