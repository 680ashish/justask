// Get references to the form and the login success popup
const loginForm = document.getElementById('login-form');
const loginSuccessPopup = document.getElementById('login-success-popup');

// Add an event listener to the form submission
loginForm.addEventListener('submit', function (e) {
    e.preventDefault(); // Prevent the form from submitting and refreshing the page

    // You can add your login logic here
    // For this example, we'll simulate a successful login after a brief delay
    setTimeout(function () {
        // Show the login success popup
        loginSuccessPopup.style.display = 'block';

        // Hide the popup after a few seconds (you can adjust the delay)
        setTimeout(function () {
            loginSuccessPopup.style.display = 'none';
        }, 1500); // Hide after 3 seconds
    }, 100); // Simulate login success after 1 second (adjust as needed)
});
