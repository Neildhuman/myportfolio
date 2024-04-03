// document.addEventListener("DOMContentLoaded", function() {
//         const listToggle = document.querySelector('.list-toggle');
//         const listItems = document.querySelectorAll('.list li');

//         listToggle.addEventListener('click', function() {
//             listItems.forEach(function(item) {
//                 item.style.display = (item.style.display === 'none' || item.style.display === '') ? 'block' : 'none';
//             });
//         });
//     });

document.addEventListener('DOMContentLoaded', function () {
    const listToggle = document.querySelector('.list-toggle');
    const list = document.querySelector('.list ol');

    listToggle.addEventListener('click', function () {
        list.classList.toggle('active');
    });
});