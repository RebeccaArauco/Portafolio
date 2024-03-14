
console.log('Document:', window.document)


console.log(document) 

console.log(document.body.className)

// obtener un arreglo con las clases del elemento.
console.log(document.body.classList[2])
console.log(document.body.classList.value)
document.body.classList.add('bg-red')
document.body.classList.remove('one')

console.log(document.body.classList)


// querySelector
const btnOpen = document.querySelector('.btn--open')
const btnClose = document.querySelector('.btn--close')
const navMenu = document.querySelector('.nav__menu')
console.log(btnOpen)

// Agregar evento por propiedad
btnOpen.onclick = function () {
  // navMenu.classList.add('show--menu')
  navMenu.classList.toggle('show--menu')
}

btnClose.onclick = function () {
  navMenu.classList.remove('show--menu')
}

// Método para manejar eventos

const links = document.querySelectorAll('.nav__link')

for (const link of links) {
  link.addEventListener('click', function () {
    navMenu.classList.remove('show--menu')
  })
}


/* Typing */
var typed = new Typed('#typing', {
  strings: ['Future Web Developer', 'QA Tester', 'Front End/Backe End'], 
  typeSpeed: 40, 
  backSpeed: 20, 
  loop: true,
});

/*Projects*/

$(document).ready(function() {
  $('.works__carousel').slick({
    slidesToShow: 1, 
    slidesToScroll: 1,
    loop: true,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [{
      breakpoint: 768,
      settings: {
        slidesToShow: 1,
      }
    }]
  });
});











