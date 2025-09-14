// Function with parameter and return value
function calculateOpacity(scrollY) {
  return Math.min(scrollY / 500, 1);
}

// Scope demonstration
let globalColor = "blue";

function changeColor(element) {
  let localColor = "red"; // Local scope
  element.style.backgroundColor = localColor;
}

// Reusable function to toggle class
function toggleClass(element, className) {
  element.classList.toggle(className);
}

// Trigger box animation on button click
const box = document.querySelector('.box');
const animateBtn = document.getElementById('animateBtn');

animateBtn.addEventListener('click', () => {
  triggerAnimation(box, 'slide-in');
});

// Function to trigger animation and remove class after duration
function triggerAnimation(element, animationClass) {
  element.classList.add(animationClass);
  setTimeout(() => {
    element.classList.remove(animationClass);
  }, 1000); // Match CSS animation duration
}

// Modal logic
const modal = document.getElementById('modal');
const openModal = document.getElementById('openModal');
const closeModal = document.getElementById('closeModal');

openModal.addEventListener('click', () => {
  modal.classList.remove('hidden');
});

closeModal.addEventListener('click', () => {
  modal.classList.add('hidden');
});
