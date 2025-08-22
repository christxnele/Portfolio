function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}


const titles = [
  "Aspiring software engineer",
  "First-generation student",
  "Tech Enthusiast!"
];

let titleIndex = 0;
let charIndex = 0;
let isDeleting = false;
const typingElement = document.getElementById("typing");

function typeLoop() {
  const currentTitle = titles[titleIndex];
  
  if (!isDeleting) {
    typingElement.textContent = currentTitle.substring(0, charIndex + 1);
    charIndex++;
    if (charIndex === currentTitle.length) {
      isDeleting = true;
      setTimeout(typeLoop, 1500); // pause at full text
      return;
    }
  } else {
    typingElement.textContent = currentTitle.substring(0, charIndex - 1);
    charIndex--;
    if (charIndex === 0) {
      isDeleting = false;
      titleIndex = (titleIndex + 1) % titles.length;
    }
  }

  const typingSpeed = isDeleting ? 60 : 100; // typing/backspace speed
  setTimeout(typeLoop, typingSpeed);
}

document.addEventListener("DOMContentLoaded", typeLoop);
