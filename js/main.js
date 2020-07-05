// *** Variables ***

let nav = document.getElementById('nav');
let menu = document.getElementById('enlaces');
let abrir = document.getElementById('open');
let botones = document.getElementsByClassName('btn-header');
let cerrado = true;


// *** Funciones ***

// Función para el cambio del header al desplazarse "scrolear"
function menus(){
     let Desplazamiento_Actual = window.pageYOffset;

     if(Desplazamiento_Actual <= 300){
          nav.classList.remove('nav2');
          nav.className=('nav1');
          nav.style.transition = '1s';
          menu.style.top = '80px';
          abrir.style.color = '#fff';
     }else{
          nav.classList.remove('nav1');
          nav.className=('nav2');
          menu.style.top = '100px';
          abrir.style.color = '#000';
     }
}

//Función para abrir el menu del header en celular/tablet
function apertura(){
     if(cerrado === true){
          menu.style.width = '70vw';
          cerrado = false;
     }else{
          menu.style.width = '0%';
          menu.style.overflow = 'hidden';
          cerrado = true;
     }
}


// *** Eventos ***

// Permite mostrar la app luego de cargarla
window.addEventListener('load', function(){
     $('#onload').fadeOut();
     $('body').removeClass('hidden');
     menus();
 });

// Al bajar al hacer "scroll" en la pagina el header se modifica, llamando a la función "menus"
window.addEventListener('scroll', function(){
     menus();
});

//Si el usuario está en un celular o tablet y mueve la pantalla evita error con el header
window.addEventListener('resize', function(){
     if(screen.width>= 700){
          cerrado = true;
          menu.style.removeProperty('overflow');
          menu.style.removeProperty('width');
     }
});

//Evento para abrir el menu del header en celular/tablet
abrir.addEventListener('click', function() {
     apertura();
});


// Evento para cerrar menu al hacer click en cualquier lugar del resto de la app
window.addEventListener('click', function(e){
     if(cerrado == false){
          let span = document.querySelector('span');
          if(e.target !== span && e.target !== abrir){
               menu.style.width = '0%';
               menu.style.overflow = 'hidden';
               cerrado = true;
          }
     }
});