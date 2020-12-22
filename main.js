const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');
const links = document.querySelectorAll('.nav-links li');

mobileMenu.addEventListener('click', () => {
    navLinks.classList.toggle('clicked');

    links.forEach(link => {
        link.classList.toggle('fade');
    });
   
})