// Form elements
const loginForm = document.getElementById('loginForm');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const usernameError = document.getElementById('usernameError');
const passwordError = document.getElementById('passwordError');
const togglePasswordButton = document.getElementById('togglePassword');

// Toggle password visibility
togglePasswordButton.addEventListener('click', () => {
  const type = passwordInput.type === 'password' ? 'text' : 'password';
  passwordInput.type = type;
  
  // Update the eye icon
  const eyePath = togglePasswordButton.querySelector('path');
  if (type === 'password') {
    eyePath.setAttribute('d', 'M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z');
  } else {
    eyePath.setAttribute('d', 'M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88');
  }
});

// Validate form on submit
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  
  const username = usernameInput.value;
  const password = passwordInput.value;
  let isValid = true;

  // Validate username
  if (username.length < 3) {
    usernameError.classList.remove('hidden');
    usernameInput.classList.add('border-red-500');
    isValid = false;
  } else {
    usernameError.classList.add('hidden');
    usernameInput.classList.remove('border-red-500');
  }

  // Validate password
  if (password.length < 6) {
    passwordError.classList.remove('hidden');
    passwordInput.classList.add('border-red-500');
    isValid = false;
  } else {
    passwordError.classList.add('hidden');
    passwordInput.classList.remove('border-red-500');
  }

  // If valid, simulate login
  if (isValid) {
    const submitButton = loginForm.querySelector('button[type="submit"]');
    const originalText = submitButton.textContent;
    
    // Show loading state
    submitButton.disabled = true;
    submitButton.innerHTML = `
      <svg class="animate-spin h-5 w-5 mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
      </svg>
    `;

    // Simulate API call
    setTimeout(() => {
      submitButton.disabled = false;
      submitButton.textContent = originalText;
      
      // Show success message (you can customize this)
      alert('Login successful!');
    }, 1500);
  }
});

// Real-time validation
usernameInput.addEventListener('input', () => {
  if (usernameInput.value.length >= 3) {
    usernameError.classList.add('hidden');
    usernameInput.classList.remove('border-red-500');
  }
});

passwordInput.addEventListener('input', () => {
  if (passwordInput.value.length >= 6) {
    passwordError.classList.add('hidden');
    passwordInput.classList.remove('border-red-500');
  }
});