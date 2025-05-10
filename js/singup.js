document.querySelector('.sign-up-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirm-password').value;

    if (password !== confirmPassword) {
        alert('كلمة المرور وتأكيد كلمة المرور لا تتطابق!');
        return;
    }

    if (username.length <= 4 && password.length <= 3) {
        alert('اسم المستخدم يجب أن يكون أكثر من 4 أحرف وكلمة المرور يجب أن تكون أكثر من 3 أحرف');
        return;
    }

    localStorage.setItem('username', username);
    localStorage.setItem('password', password);

    window.location.href = 'index.html';
});

