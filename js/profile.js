window.addEventListener('DOMContentLoaded', function () {
    const username = localStorage.getItem('username');
    const email = localStorage.getItem('email');  
    const comments = JSON.parse(localStorage.getItem('comments')) || [];

    if (username) {
        document.getElementById('user-name').textContent = username;
    } else {
        document.getElementById('user-name').textContent = 'غير مسجل';
    }

    if (email) {
        document.getElementById('user-email').textContent = email;
    } else {
        document.getElementById('user-email').textContent = 'غير مسجل';
    }

    const commentsContainer = document.getElementById('comments-container');
    comments.forEach(comment => {
        const commentDiv = document.createElement('div');
        commentDiv.classList.add('comment');
        commentDiv.textContent = comment;
        commentsContainer.appendChild(commentDiv);
    });

    document.getElementById('submit-comment').addEventListener('click', function () {
        const commentText = document.getElementById('comment-text').value;

        if (commentText.trim() !== "") {
            comments.push(commentText);
            localStorage.setItem('comments', JSON.stringify(comments));  

            const commentDiv = document.createElement('div');
            commentDiv.classList.add('comment');
            commentDiv.textContent = commentText;
            commentsContainer.appendChild(commentDiv);

            document.getElementById('comment-text').value = "";
        }
    });
});
