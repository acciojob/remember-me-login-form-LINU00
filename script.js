const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const checkbox = document.getElementById('checkbox');
const submitButton = document.getElementById('submit');
const existingButton = document.getElementById('existing');

window.onload = function() {
    const savedUsername = localStorage.getItem('username');
    if (savedUsername) {
        existingButton.style.display = 'block';
    }
};

document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const username = usernameInput.value;
    const password = passwordInput.value;

    alert(`Logged in as ${username}`);

    if (checkbox.checked) {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        existingButton.style.display = 'block';
    } else {
        localStorage.removeItem('username');
        localStorage.removeItem('password');
        existingButton.style.display = 'none';
    }
});

existingButton.addEventListener('click', function() {
    const savedUsername = localStorage.getItem('username');
    if (savedUsername) {
        alert(`Logged in as ${savedUsername}`);
    }
});
