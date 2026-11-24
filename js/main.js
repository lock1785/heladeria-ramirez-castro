// Año actual en el pie de página
const anio = document.getElementById('anio');
if (anio) {
  anio.textContent = new Date().getFullYear();
}

// Menú responsive
const toggle = document.querySelector('.menu-toggle');
const menu = document.getElementById('menu-principal');

if (toggle && menu) {
  toggle.addEventListener('click', () => {
    const abierto = toggle.getAttribute('aria-expanded') === 'true';
    toggle.setAttribute('aria-expanded', String(!abierto));
    toggle.setAttribute('aria-label', abierto ? 'Abrir menú' : 'Cerrar menú');
    menu.classList.toggle('is-open', !abierto);
  });

  menu.addEventListener('click', (evento) => {
    if (evento.target.tagName === 'A') {
      menu.classList.remove('is-open');
      toggle.setAttribute('aria-expanded', 'false');
      toggle.setAttribute('aria-label', 'Abrir menú');
    }
  });
}

// Animación de entrada al hacer scroll
const elementos = document.querySelectorAll('.reveal');

if ('IntersectionObserver' in window) {
  const observador = new IntersectionObserver((entradas, obs) => {
    entradas.forEach((entrada) => {
      if (entrada.isIntersecting) {
        entrada.target.classList.add('is-visible');
        obs.unobserve(entrada.target);
      }
    });
  }, { threshold: 0.12 });

  elementos.forEach((elemento) => observador.observe(elemento));
} else {
  elementos.forEach((elemento) => elemento.classList.add('is-visible'));
}
