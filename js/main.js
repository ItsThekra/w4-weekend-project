window.addEventListener('DOMContentLoaded', function() {
    const username = localStorage.getItem('username');  
    const navbarUsername = document.getElementById('navbar-username');
    const loginBtn = document.querySelector('.log-in');
    const signUpBtn = document.querySelector('.sign-up');
    const logoutBtn = document.getElementById('logout-btn');

    if (username) {
        navbarUsername.textContent = `مرحبًا، ${username}`;  
        loginBtn.style.display = 'none';  
        signUpBtn.style.display = 'none';  
        logoutBtn.style.display = 'block';  
    } else {
        navbarUsername.textContent = '';  
        logoutBtn.style.display = 'none';  
    }
});
// Logout: 
document.getElementById('logout-btn').addEventListener('click', function() {
    localStorage.removeItem('username');
    localStorage.removeItem('password');

    const navbarUsername = document.getElementById('navbar-username');
    navbarUsername.textContent = '';

    window.location.href = 'login.html'; 
});

window.addEventListener('scroll', function() {
    const timelineItems = document.querySelectorAll('.timeline-item');

    timelineItems.forEach((item) => {
        const itemPosition = item.getBoundingClientRect().top;

        if (itemPosition < window.innerHeight - 100) {
            item.classList.add('show');  
        } else {
            item.classList.remove('show');  
        }
    });
});




// send it to event page:
document.querySelectorAll('.details-link').forEach((link) => {
    link.addEventListener('click', (event) => {
        const timelineItem = event.target.closest('.timeline-item');
        
        const eventTitle = timelineItem.querySelector('h3').textContent;
        const eventDescription = timelineItem.querySelector('p').textContent;
        const eventImageSrc = timelineItem.querySelector('.timeline-image').src;

        localStorage.setItem('eventTitle', eventTitle);
        localStorage.setItem('eventDescription', eventDescription);
        localStorage.setItem('eventImageSrc', eventImageSrc);

        window.location.href = 'event-details.html';
    });
});
