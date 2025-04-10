// Auto slider functionality
const images = ["chickenPlate.jpg", "chickenRoast.jpg"]; // Add your image paths here
let current = 0;
let sliderInterval;

// Initialize slider with fade effect
function initSlider() {
  const sliderImage = document.getElementById("sliderImage");
  if (!sliderImage) return;

  // Set initial image
  sliderImage.style.opacity = 0;
  setTimeout(() => {
    sliderImage.src = images[current];
    sliderImage.style.opacity = 1;
  }, 100);

  // Clear any existing interval
  if (sliderInterval) clearInterval(sliderInterval);

  // Set new interval with fade transition
  sliderInterval = setInterval(() => {
    current = (current + 1) % images.length;
    sliderImage.style.opacity = 0;
    
    setTimeout(() => {
      sliderImage.src = images[current];
      sliderImage.style.opacity = 1;
    }, 500); // This matches the transition duration
  }, 3000);
}

// Popup functions with smooth transitions
function showPopup(content = '') {
  const popup = document.getElementById("custom-popup");
  const popupContent = document.querySelector(".popup-content p");
  
  if (content && popupContent) {
    popupContent.innerHTML = content;
  }
  
  popup.classList.remove("hidden");
  setTimeout(() => {
    popup.style.opacity = 1;
  }, 10);
}

function closePopup() {
  const popup = document.getElementById("custom-popup");
  popup.style.opacity = 0;
  setTimeout(() => {
    popup.classList.add("hidden");
  }, 300); // Match this with CSS transition duration
}

// Form submission handler with detailed popup
document.querySelector('.order-form')?.addEventListener('submit', function(e) {
  e.preventDefault();
  
  // Collect form data
  const name = this.name.value;
  const tastes = Array.from(this.querySelectorAll('input[name="taste"]:checked'))
                    .map(cb => cb.value).join(', ') || 'No taste selected';
  const size = this.querySelector('input[name="size"]:checked')?.value || 'Not selected';
  const delivery = this.delivery.value;
  
  // Create popup content
  const popupContent = `
    <span style="font-size: 2em;">🍗</span>
    <h3>Thank you, ${name}!</h3>
    <p><strong>Your order details:</strong></p>
    <ul style="text-align: left; padding-left: 20px;">
      <li><strong>Taste:</strong> ${tastes}</li>
      <li><strong>Size:</strong> ${size}</li>
      <li><strong>Delivery:</strong> ${delivery}</li>
    </ul>
    <p style="margin-top: 15px;">Your delicious chicken will be prepared with love! 💕</p>
  `;
  
  // Show popup with order details
  showPopup(popupContent);
});

// Initialize everything when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
  initSlider();
  
  // Close popup when clicking outside content
  document.getElementById("custom-popup")?.addEventListener('click', function(e) {
    if (e.target === this) {
      closePopup();
    }
  });
  
  // Close button for popup
  document.querySelector('.popup-close')?.addEventListener('click', closePopup);
});
