// ============================================ DARK THEME ============================================
const themeButton = document.getElementById('theme-button')
const darkTheme = 'dark-theme'
const iconTheme = 'uil-sun'

//PREVIOUSLY SELECTED TOPIC (check desde el almacenamiento local)
const selectedTheme = localStorage.getItem('selected-theme')
const selectedIcon = localStorage.getItem('selected-icon')

// Obtenemos el tema actual que tiene la interfaz
const getCurrentTheme = () => document.body.classList.contains(darkTheme)?'dark':'light'
const getCurrentIcon = () => document.body.classList.contains(iconTheme)?'uil-moon':'uil-sun'

//Ahora comprobamos que el usuario ha elegido previamente un topic
if(selectedTheme){
    document.body.classList[selectedTheme === 'dark'?'add':'remove'](darkTheme)
    themeButton.classList[selectedIcon === 'uil-moon'?'add':'remove'](iconTheme)
}

// Activar / desactivar el tema manualmente con el botón
themeButton.addEventListener('click', () => {
    //añadir o borrar el tema claro/oscuro (iconos)
    document.body.classList.toggle(darkTheme)
    themeButton.classList.toggle(iconTheme)
    //Tenemos que guardar el tema en el icono actual que el usuario ha elegido
    localStorage.setItem('selected-theme', getCurrentTheme())
    localStorage.setItem('selected-icon', getCurrentIcon())
})
console.log("LA SELECCIÓN DE TEMA FUNCIONA")


// ============================================ MENU SHOW / HIDDEN ============================================
const navMenu = document.getElementById('nav-menu')
const navToggle = document.getElementById('nav-toggle')
const navClose = document.getElementById('nav-close')

// ========== MENU SHOW ==========
/* Validar si la constante existe */
if(navToggle){
    navToggle.addEventListener('click', () => {
        navMenu.classList.add('show-menu')
    })
}

// ========== MENU HIDE ==========
/* Validar si la constante existe */
if(navClose){
    navClose.addEventListener('click', () => {
        navMenu.classList.remove('show-menu')
    })
}

console.log("MENU SETTINGS FUNCIONA")

// ============================================ REMOVE MENU  ============================================
const navLink = document.querySelectorAll('.nav__link')

function linkAction() {
    const navMenu= document.getElementById('nav-menu')
    //cuando hacemos click en nav__links, quitamos el menu
    navMenu.classList.remove('show-menu')
}

navLink.forEach(n => n.addEventListener('click', linkAction))
console.log("Quitar menu FUNCIONA")


// ============================================ Typewriter Effect  ============================================
new Typewriter('#typewriter', {
  strings: ['Juan Manuel Porrero Almansa', 'Estudiante de Ingeniería Informática', 'Cuarto curso'],
  autoStart: true,
  loop: true,
  cursor: "|"
});

console.log("Typewriter FUNCIONA")


// ============================================ Portfolio Swiper  ============================================

var swiper = new Swiper('.blog-slider', {
    spaceBetween: 30,
    effect: 'fade',
    loop: true,
    mousewheel: {
      invert: false,
    },
    // autoHeight: true,
    pagination: {
      el: '.blog-slider__pagination',
      clickable: true,
    }
  });
console.log("El portfolio FUNCIONA")


// ============================================ SCROLL TOP  ============================================
function scrollUp(){
  const scrollup = document.getElementById('scroll-up');
  //Cuando el scroll > 560 /altura, el icono debe aparecer y haciéndole click nos lleva arriba.
  if(this.scrollY >= 560){
    scrollup.classList.add('show-scroll');
  }
  else {
    scrollup.classList.remove('show-scroll')
  }

  console.log("El scroll FUNCIONA")
}

window.addEventListener('scroll', scrollUp)


//===================================== SCROLL SECTION ACTIVE HIGHLIGHT =================================

const sections = document.querySelectorAll('section[id]')

function scrollActive() {
    const scrollY = window.pageYOffset

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight
        const sectionTop = current.offsetTop - 50;
        sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })


    console.log("Marcador de sección FUNCIONA")
}
window.addEventListener('scroll', scrollActive)
