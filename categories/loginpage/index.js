// Get references to the form and the login success popup
const loginForm = document.getElementById('login-form');
const loginSuccessPopup = document.getElementById('login-success-popup');

// Add an event listener to the form submission
loginForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the form from submitting

    // Get form elements
    var usernameInput = document.getElementById('username');
    var passwordInput = document.getElementById('password');

    // Get error elements
    var usernameError = document.getElementById('username-error');
    var passwordError = document.getElementById('password-error');

    // Reset previous error messages
    usernameError.textContent = '';
    passwordError.textContent = '';

    // Validate username
    if (usernameInput.value.trim() === '') {
        usernameError.textContent = 'Username is required.';
    }

    // Validate password
    if (passwordInput.value.trim() === '') {
        passwordError.textContent = 'Password is required.';
    }

    // If no errors, you can submit the form or display a success message
    if (usernameError.textContent === '' && passwordError.textContent === '') {
        // Display success message or submit the form
        loginSuccessPopup.style.display = 'block';

        // Redirect to the main page after a few seconds (adjust the delay as needed)
        setTimeout(function () {
            window.location.href = './justask-main/index.html';
        }, 1500); // Redirect after 1.5 seconds
    }
});
