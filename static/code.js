const hamburgerMenu = document.querySelector("#hamburger-menu");
const overlay = document.querySelector("#overlay");
const nav1 = document.querySelector("#nav-1");
const nav2 = document.querySelector("#nav-2");
const nav3 = document.querySelector("#nav-3");
const nav4 = document.querySelector("#nav-4");
const nav5 = document.querySelector("#nav-5");
const navItems = [nav1, nav2, nav3, nav4, nav5];

// Control Nav Animation
function navAnimation(val1, val2) {
  navItems.forEach((nav, i) => {
    nav.classList.replace(`slide-${val1}-${i + 1}`, `slide-${val2}-${i + 1}`);
  });
}

function toggleNav() {
  // Menu Open/Close
  hamburgerMenu.classList.toggle("active");

  //   Menu Active
  overlay.classList.toggle("overlay-active");

  if (overlay.classList.contains("overlay-active")) {
    // in -Overlay
    overlay.classList.replace("overlay-slide-left", "overlay-slide-right");

    // in -Nav Items
    navAnimation("out", "in");
  } else {
    // out -Overlay
    overlay.classList.replace("overlay-slide-right", "overlay-slide-left");

    // out -Nav Items
    navAnimation("in", "out");
  }
}

hamburgerMenu.addEventListener("click", toggleNav);
navItems.forEach((nav) => {
  nav.addEventListener("click", toggleNav);
});

// BTN-SCROLL

document.getElementById('btn-scroll').addEventListener('click', function() {
  window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
  });
});

// CAMBIAR idioma

// Diccionario de traducciones global
const traducciones = {
  es: {
      "subtitulo": "DESARROLLADOR WEB, FRONTEND Y BACKEND"
  },
  en: {
      "subtitle": "WEB DEVELOPER, FRONTEEND AND BACKEND"
  }
};

$(document).ready(function() {
  // Configuración inicial del switch
  const idiomaGuardado = localStorage.getItem('idiomaPreferido');
  if(idiomaGuardado === 'en') {
      $('#idiomaSwitch').prop('checked', true);
      document.body.classList.replace('es', 'en');
      document.documentElement.lang = 'en';
  }

  // Evento para cambio de idioma
  $('#idiomaSwitch').change(function() {
      const nuevoIdioma = $(this).prop('checked') ? 'en' : 'es';
      
      // Actualizar atributos HTML
      document.documentElement.lang = nuevoIdioma;
      document.body.className = nuevoIdioma;
      
      // Actualizar contenido dinámico
      $('[data-translate]').each(function() {
          const key = $(this).data('translate');
          $(this).text(traducciones[nuevoIdioma][key]);
      });

      // Guardar preferencia
      localStorage.setItem('idiomaPreferido', nuevoIdioma);
  });
});
