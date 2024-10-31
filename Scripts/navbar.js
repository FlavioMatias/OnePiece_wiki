window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 400 && window.scrollY <= 1300) {
        navbar.classList.add('sobre');
    } else
    {
        navbar.classList.remove('sobre');
    }
    if (window.scrollY >= 1300) {
        navbar.classList.add('mapa');
    } else{
        navbar.classList.remove('mapa');
    }
});
