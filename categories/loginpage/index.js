function validateLoginForm() {
    const emailInput = loginForm.querySelector('input[type="email"]');
    const passwordInput = loginForm.querySelector('input[type="password"]');
    const emailError = document.getElementById('email-error');
    const passwordError = document.getElementById('password-error');
    const email = emailInput.value;
    const password = passwordInput.value;

    // Reset previous error messages
    emailError.textContent = '';
    passwordError.textContent = '';

    if (email.trim() === '') {
        emailError.textContent = 'Email is required.';
        return;
    }

    if (password.trim() === '') {
        passwordError.textContent = 'Password is required.';
        return;
    }

    // Simulate a successful login
    alert('Login successful!');
    
    // Redirect to the main index file after a successful login
    window.location.replace('http://example.com/path/to/main/index.html');

    // Uncomment the following line if you want to submit the form
    // loginForm.submit();
}
