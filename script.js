document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission

    // Clear previous errors
    clearErrors();

    // Get input values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    let isValid = true;

    // Validate name
    if (name.length < 5) {
        showError('nameError', 'Name must be at least 5 characters long.');
        isValid = false;
    }

    // Validate email
    if (!email.includes('@')) {
        showError('emailError', 'Enter a valid email address.');
        isValid = false;
    }

    // Validate phone number
    if (phone.length !== 10 || phone === '1234567890' || isNaN(phone)) {
        showError('phoneError', 'Phone number must be a 10-digit number and cannot be 1234567890.');
        isValid = false;
    }

    // Validate password
    if (password.length < 8 || password.toLowerCase() === 'password' || password.toLowerCase() === name.toLowerCase()) {
        showError('passwordError', 'Password must be at least 8 characters long and cannot be "password" or your name.');
        isValid = false;
    }

    // Validate confirm password
    if (password !== confirmPassword) {
        showError('confirmPasswordError', 'Passwords do not match.');
        isValid = false;
    }

    if (isValid) {
        alert('Form submitted successfully!');
        // You can submit the form here if needed
        // this.submit();
    }
});

function clearErrors() {
    document.querySelectorAll('.error-message').forEach(el => el.textContent = '');
}

function showError(id, message) {
    document.getElementById(id).textContent = message;
}
