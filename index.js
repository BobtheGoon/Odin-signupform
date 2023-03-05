let passwordField = document.getElementById('password');
let passwordCheckField = document.getElementById('password_check');
let warningShown = false

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

        if (!warningShown) {
            p = document.createElement('p');
            p.setAttribute('id', 'pwdWarning')
            p.innerHTML = '<p>Passwords do not match!</p>';
            p.style.color = 'red';

            document.getElementById('password_row').appendChild(p);
            warningShown = true;
        }
    }

    else {
        passwordField.style.borderColor = '';
        passwordCheckField.style.borderColor = '';
        document.getElementById('pwdWarning').remove();
        warningShown = false;
    }
};