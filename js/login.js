document.querySelector('.login-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const usernameError = document.getElementById('username-error');
    const passwordError = document.getElementById('password-error');
    let valid = true;

    // التحقق من اسم المستخدم
    if (username.length <= 4) {
        usernameError.textContent = 'اسم المستخدم يجب أن يكون أكثر من 4 أحرف';
        valid = false;
    } else {
        usernameError.textContent = '';
    }

    // التحقق من كلمة المرور
    if (password.length <= 3) {
        passwordError.textContent = 'كلمة المرور يجب أن تكون أكثر من 3 أحرف';
        valid = false;
    } else {
        passwordError.textContent = '';
    }

    if (valid) {
        localStorage.setItem('username', username);
        localStorage.setItem('password', password);
        window.location.href = 'index.html';  
    }
});



