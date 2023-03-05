let passwordField = document.getElementById('password');
let passwordCheckField = document.getElementById('password_check');

passwordField.addEventListener('change', () => {
    comparePasswords()
});

passwordCheckField.addEventListener('change', () => {
    comparePasswords()
});

const comparePasswords = () => {
    if (passwordField.value !== passwordCheckField.value) {
        passwordField.style.borderColor = 'red';
        passwordCheckField.style.borderColor = 'red';
    }

    else {
        passwordField.style.borderColor = '';
        passwordCheckField.style.borderColor = '';
    }
};