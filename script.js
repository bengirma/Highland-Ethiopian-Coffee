// Ensure dropdown menus stay open on hover
document.querySelectorAll('nav ul li').forEach(function(li) {
    li.addEventListener('mouseover', function() {
        this.querySelector('.dropdown').style.display = 'block';
    });
    li.addEventListener('mouseout', function() {
        this.querySelector('.dropdown').style.display = 'none';
    });
});// Add JavaScript functionality here if needed
