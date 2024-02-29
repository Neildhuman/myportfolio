document.addEventListener("DOMContentLoaded", function() {
        const listToggle = document.querySelector('.list-toggle');
        const listItems = document.querySelectorAll('.list li');

        listToggle.addEventListener('click', function() {
            listItems.forEach(function(item) {
                item.style.display = (item.style.display === 'none' || item.style.display === '') ? 'block' : 'none';
            });
        });
    });