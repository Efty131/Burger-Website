let hamburger = document.getElementById('hamburger');
let navMenu = document.getElementById('nav-menu');
let navClose = document.getElementById('nav-close');
let navLink = document.querySelectorAll('.nav__link')

navLink.forEach(link =>{
    link.addEventListener("click", () =>{
        navMenu.classList.add('hidden');
    });
});

hamburger.addEventListener('click', function(){
    navMenu.classList.remove('hidden');
});

navClose.addEventListener('click', () => {
    navMenu.classList.add('hidden');
});