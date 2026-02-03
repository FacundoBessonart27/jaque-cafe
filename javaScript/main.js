const headerOpciones = document.querySelector('.header-opciones');
const navMenu = document.querySelector('.nav-menu');

// Abrir/cerrar menú al hacer click en el botón
headerOpciones.addEventListener('click', () => {
    headerOpciones.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Cerrar menú al hacer click en un link
document.querySelectorAll('.nav-menu a').forEach(link => {
    link.addEventListener('click', () => {
        headerOpciones.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Cerrar menú al hacer click fuera del navbar
document.addEventListener('click', (e) => {
    if (!e.target.closest('.navbar')) {
        headerOpciones.classList.remove('active');
        navMenu.classList.remove('active');
    }
});