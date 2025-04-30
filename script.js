// Event Handling
document.getElementById('cta-button').addEventListener('click', () => {
    alert('Thanks for clicking! 🚀');
  });
  
  document.getElementById('keypress-input').addEventListener('keydown', (e) => {
    document.getElementById('keypress-output').textContent = `You pressed: ${e.key}`;
  });
  
  document.getElementById('secret-action').addEventListener('dblclick', () => {
    alert('🎉 You discovered the secret double-click!');
  });
  
  document.getElementById('secret-action').addEventListener('mousedown', () => {
    setTimeout(() => {
      alert('🔥 Long press activated!');
    }, 1000);
  });
  
  // Image Gallery
  const galleryImage = document.getElementById('gallery-image');
  const prevBtn = document.getElementById('prev-btn');
  const nextBtn = document.getElementById('next-btn');
  
  const images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg'
  ];
  
  
  let currentImageIndex = 0;
  
  function updateImage() {
    galleryImage.style.opacity = 0;
    setTimeout(() => {
      galleryImage.src = images[currentImageIndex];
      galleryImage.style.opacity = 1;
    }, 200);
  }
  
  prevBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateImage();
  });
  
  nextBtn.addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateImage();
  });
  
  // Tabs
  const tabButtons = document.querySelectorAll('.tab-btn');
  const tabPanels = document.querySelectorAll('.tab-panel');
  
  tabButtons.forEach(button => {
    button.addEventListener('click', () => {
      tabButtons.forEach(btn => btn.classList.remove('active'));
      tabPanels.forEach(panel => panel.classList.add('hidden'));
      button.classList.add('active');
      document.getElementById(button.getAttribute('data-tab')).classList.remove('hidden');
    });
  });
  
  // Form Validation
  const form = document.getElementById('signup-form');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const passwordInput = document.getElementById('password');
  const successMessage = document.getElementById('form-success');
  
  function showError(input, message) {
    const error = input.nextElementSibling;
    error.textContent = message;
    error.style.display = 'block';
  }
  
  function clearError(input) {
    const error = input.nextElementSibling;
    error.textContent = '';
    error.style.display = 'none';
  }
  
  function validateEmail(email) {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  }
  
  [nameInput, emailInput, passwordInput].forEach(input => {
    input.addEventListener('input', () => {
      clearError(input);
    });
  });
  
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let valid = true;
  
    if (nameInput.value.trim() === '') {
      showError(nameInput, 'Name is required.');
      valid = false;
    }
  
    if (!validateEmail(emailInput.value.trim())) {
      showError(emailInput, 'Please enter a valid email.');
      valid = false;
    }
  
    if (passwordInput.value.length < 8) {
      showError(passwordInput, 'Password must be at least 8 characters.');
      valid = false;
    }
  
    if (valid) {
      successMessage.classList.remove('hidden');
      form.reset();
    }
  });
ss  