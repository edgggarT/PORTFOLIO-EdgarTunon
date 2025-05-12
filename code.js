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


// CAMBIAR IDIOMA

const traducciones = {
  es: {
    HOME: "INICIO", ABOUT: "ACERCA DE", LANG: "LENGUAJES", PROYECT: "PROYECTOS", CONTACT: "CONTACTAME",
    texto: "DESARROLLADOR WEB, FRONTEND Y BACKEND", texto_lenguajes_tituloSombreado: "Mis Lenguajes & Frameworks", texto_lenguajes_titulo: "Mis Lenguajes & Frameworks", texto_lenguajes_subtitulo: "Estos son algunos de los lenguajes y Frameworks que utilizo:",
    python_info: "Lenguaje donde creo la logica y el enrutado", db_info: "Creacion y gestion de las bases de datos", flask_info: "Framework que se integra en python para facilitar la creacion del Backend", bootstrap_info: "Framework que facilita la creacion del Frontend",
    texto_acerca_tituloSombreado: "ACERCA DE MI", texto_acerca_titulo: "ACERCA DE MI", texto_acerca_subtitulo: "Estudiante de analista de sistemas con mucho interes en el desarrollo web.",
    titulo_info: "UI/UX Diseñador & Desarrollador Web.", 
    info_fdn: "Fecha de nacimiento:" , info_pagina: "Pagina:" , info_telefono: "Telefono:", info_ciudad: "Ciudad:" , info_edad: "Edad:" , info_pais: "Pais:", info_email: "Email:", info_grado: "Grado", info_grado_valor: "Estudiante" ,
    info_general: "Soy un apasionado desarrollador en constante evolución, comprometido con el aprendizaje continuo y la mejora de mis habilidades en el campo de la programación. Actualmente, estoy dedicado a ampliar mis conocimientos en diversas tecnologías y lenguajes de programación, con el objetivo de convertirme en un profesional versátil y eficiente. Mi enfoque principal es el desarrollo de soluciones innovadoras y eficientes, siempre buscando mejorar la experiencia del usuario y optimizar los procesos. Me apasiona la colaboración en equipo y estoy dispuesto a participar en proyectos que me permitan crecer tanto personal como profesionalmente.",
    resume_educacion: "Educacion", resume_titulo: "Analista de sistemas" , resume_texto: "Mi experiencia en institucion me permitió desarrollar una sólida base en programacion y comunicación, lo que ha sido crucial para mi profecionalizacion.", 
    resume_secundaria: "Escuela Secundaria" , resume_texto_secundaria: "durante el transcurso de aprendizaje que me brindo la secundaria pude desarrollar conocimientos claves y habilidades de investigación, lo que ha sido crucial para mi crecimiento académico y personal.", 
    proyecto_tituloSombreado: "Proyectos", proyecto_titulo: "Proyectos", proyecto_subtitulo: "Estos son algunos de los proyectos" , proyecto1: "Desarrollo de aplicaciones" , proyecto2: "Creacion de paginas web", proyecto3: "Creacion de bases de datos", proyecto4: "Automatizacion" , 
    contacto_tituloSombreado: "Contactame", contacto_titulo: "Contactame", contacto_subtitulo: "Ingresa tus datos en el formulario para ponerte en contacto", contacto_direccion: "Direccion", contacto_numero: "Numero de telefono", contacto_email: "Correo Electronico", contacto_enviar: "Enviar",
  },
  en: {
    HOME: "HOME", ABOUT: "ABOUT ME", LANG: "LANGUAGES", PROYECT: "PROYECTS", CONTACT: "CONTACT ME",
    texto: "WEB DEVELOP, FRONTEND & BACKEND",
    texto_lenguajes_tituloSombreado: "MY LANGUAGES & FRAMEWORKS" , texto_lenguajes_titulo: "MY LANGUAGES & FRAMEWORK" , texto_lenguajes_subtitulo: "This is some of the langueages and frameworks of i use",
    python_info: "Where i create the logic and routed", db_info: "Creation and managment of the databases", flask_info: "Framework that is integrated in python to ease the creation of Backend", bootstrap_info: "Framework that ease the creation of Frontend",
    texto_acerca_tituloSombreado: "ABOUT ME", texto_acerca_titulo: "ABOUT ME", texto_acerca_subtitulo: "Systems analyst student with a strong interest in web development.",
    titulo_info: "UI/UX Designer & Web Developer." ,
    info_fdn: "Birthdate:", info_pagina: "Web page:" , info_telefono: "Phone:", info_ciudad: "City:" , info_edad: "Age:" , info_pais: "Country:", info_email: "Email:", info_grado: "Degree", info_grado_valor: "Student",
    info_general: "I am a passionate, constantly evolving developer, committed to continuous learning and improving my programming skills. Currently, I am focused on expanding my knowledge of various technologies and programming languages, with the goal of becoming a versatile and efficient professional. My main focus is developing innovative and efficient solutions, always seeking to improve the user experience and optimize processes. I am passionate about teamwork and am willing to participate in projects that allow me to grow both personally and professionally.",
    resume_educacion: "Education", resume_titulo: "System Analyst" , resume_texto: "My experience at the institution allowed me to develop a solid foundation in programming and communication, which has been crucial to my professional development.",
    resume_secundaria: "High School", resume_texto_secundaria: "During the learning process that high school offered me, I was able to develop key knowledge and research skills, which has been crucial to my academic and personal growth.",
    proyecto_tituloSombreado: "Projects", proyecto_titulo: "Projects", proyecto_subtitulo: "These are some of the projects" , proyecto1: "Aplication Development" , proyecto2: "Web pages creation", proyecto3: "Creation of Data bases", proyecto4: "Automation" ,
    contacto_tituloSombreado: "Contact me", contacto_titulo: "Contact me", contacto_subtitulo: "Complete the formulary to put on contact", contacto_direccion: "Street", contacto_numero: "Phone number", contacto_email: "Email", contacto_enviar: "Submit",
  }
};

let idiomaActual = 'es';

function actualizarIdioma() {
  Object.keys(traducciones[idiomaActual]).forEach(key => {
    const elemento = document.getElementById(key);
    if (elemento) elemento.textContent = traducciones[idiomaActual][key];
  });
}


document.getElementById('idiomaSwitch').addEventListener('change', function() {
  idiomaActual = this.checked ? 'es' : 'en';
  actualizarIdioma();
});

actualizarIdioma();


// ENVIAR MENSAJE POR MAIl DESDE CONTACTAME

document.getElementById('contact-form').addEventListener('submit', function(event) {
  event.preventDefault();

  emailjs.sendForm('service_u27img8','template_rtxeo9s', this)
  .then(function() {
    alert('Mensaje Enviado correctamente');
    document.getElementById('contact-form').reset();
  }, function(error) {
    alert('Error al enviar el mensaje: '+ JSON.stringify(error));
  });
});