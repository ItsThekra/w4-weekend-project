window.addEventListener('DOMContentLoaded', function () {
    const eventTitle = localStorage.getItem('eventTitle');
    const eventDescription = localStorage.getItem('eventDescription');
    const eventImageSrc = localStorage.getItem('eventImageSrc');

    if (eventTitle && eventDescription && eventImageSrc) {
        // عرض التفاصيل في الصفحة
        document.getElementById('eventTitle1').textContent = eventTitle;
        document.getElementById('eventDescription1').textContent = eventDescription;
        document.getElementById('eventImage1').src = eventImageSrc;
    }
});

const comments = JSON.parse(localStorage.getItem('comments')) || [];
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
    const comments = JSON.parse(localStorage.getItem('comments')) || [];
    
    comments.push(commentText);

    localStorage.setItem('comments', JSON.stringify(comments));

    const commentsContainer = document.getElementById('comments-container');
    const commentDiv = document.createElement('div');
    commentDiv.classList.add('comment');
    commentDiv.textContent = commentText;
    commentsContainer.appendChild(commentDiv);

    document.getElementById('comment-text').value = "";
}
});