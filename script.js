// Ensure dropdown menus stay open on hover
document.addEventListener('DOMContentLoaded', function () {
    const navItems = document.querySelectorAll('nav ul li');

    navItems.forEach(function (item) {
        item.addEventListener('mouseover', function () {
            const dropdown = this.querySelector('.dropdown');
            if (dropdown) {
                dropdown.style.display = 'block';
            }
        });

        item.addEventListener('mouseout', function () {
            const dropdown = this.querySelector('.dropdown');
            if (dropdown) {
                dropdown.style.display = 'none';
            }
        });

        item.addEventListener('focusin', function () {
            const dropdown = this.querySelector('.dropdown');
            if (dropdown) {
                dropdown.style.display = 'block';
            }
        });

        item.addEventListener('focusout', function () {
            const dropdown = this.querySelector('.dropdown');
            if (dropdown) {
                dropdown.style.display = 'none';
            }
        });
    });
});
});// Add JavaScript functionality here if needed
