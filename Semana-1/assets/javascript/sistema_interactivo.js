function validateAndShowMessage() {
    // Get entered values
    const name = document.getElementById('nombre').value.trim();
    const ageText = document.getElementById('edad').value.trim();
    const resultDiv = document.getElementById('resultado');
    
    // Validate that a name was entered
    if (name === '') {
        showError('Please enter your name.');
        return;
    }
    
    // Validate that an age was entered
    if (ageText === '') {
        showError('Please enter your age.');
        return;
    }
    
    // Validate that the age is a valid number
    const age = parseInt(ageText);
    
    if (isNaN(age) || age < 0 || age > 100) {
        showError('Error: Please enter a valid age.');
        return;
    }
    
    // Show personalized message based on age
    let message = '';
    
    if (age < 18) {
        message = `Hello ${name}!<br><br>
                  You are ${age} years old and you are underage.<br>
                  <strong>Keep learning and enjoying coding!</strong>`;
    } else {
        message = `Hello ${name}!<br><br>
                  You are ${age} years old and you are of legal age.<br>
                  <strong>Get ready for great opportunities in the world of programming!</strong><br>`;
    }
    
    showSuccess(message);
}

function showError(message) {
    const resultDiv = document.getElementById('resultado');
    resultDiv.innerHTML = `<div class="error">${message}</div>`;
    resultDiv.style.display = 'block';
}

function showSuccess(message) {
    const resultDiv = document.getElementById('resultado');
    resultDiv.innerHTML = `<div class="success">${message}</div>`;
    resultDiv.style.display = 'block';
}

// Allow submit with Enter key
document.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        validateAndShowMessage();
    }
});