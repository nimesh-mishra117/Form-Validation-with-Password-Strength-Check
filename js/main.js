function formValidations() {
    var i = document.forms["form1"]["name"].value;
    if (i == "") {
        alert("Name is required...");
        console.log("name")
        return false;
    }
    var j = document.forms["form1"]["email"].value;
    if (j == "") {
        alert("Email is required...");
        return false;
    }
    var k = document.forms["form1"]["phone"].value;
    if (k == "") {
        alert("Phone Number is required...");
        return false;
    }
    var l = document.forms["form1"]["password"].value;
    if (l == "") {
        alert("password is required...");
        return false;
    }
}

const passwordInput = document.getElementById('password');
const passwordHint = document.getElementById('passwordHint');

passwordInput.addEventListener('input', validatePassword);

function validatePassword() {
    const password = passwordInput.value;
    const minLength = 8;
    const hasUpperCase = /[A-Z]/.test(password);
    const hasLowerCase = /[a-z]/.test(password);
    const hasNumber = /[0-9]/.test(password);
    const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

    if (password.length < minLength) {
        passwordHint.textContent = 'Password must be at least 8 characters long.';
        passwordHint.className = 'error';
    } else if (!hasUpperCase) {
        passwordHint.textContent = 'Password must include at least one uppercase letter.';
        passwordHint.className = 'error';
    } else if (!hasLowerCase) {
        passwordHint.textContent = 'Password must include at least one lowercase letter.';
        passwordHint.className = 'error';
    } else if (!hasNumber) {
        passwordHint.textContent = 'Password must include at least one number.';
        passwordHint.className = 'error';
    } else if (!hasSpecialChar) {
        passwordHint.textContent = 'Password must include at least one special character.';
        passwordHint.className = 'error';
    } else {
        passwordHint.textContent = 'Password is strong.';
        passwordHint.className = 'valid';
    }
}

document.getElementById('passwordForm').addEventListener('submit', function (event) {
    if (passwordHint.className === 'error') {
        event.preventDefault();
        alert('Please enter a valid password.');
    }
});