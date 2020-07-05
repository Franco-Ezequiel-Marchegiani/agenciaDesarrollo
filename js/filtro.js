$(function () {
     $('.filter').click(function () {
          $(this).addClass('active').siblings().removeClass('active');
          let valor = $(this).attr('data-nombre');
          if (valor === 'todos') {
               $('.cont-work').show('1000');
          } else {
               $('.cont-work').not('.' + valor).hide('1000');
               $('.cont-work').filter('.' + valor).show('1000');
          }
     });

     // Envia al usuario a sectores de la página utilizando los links del header

     let equipo = $('#equipo').offset().top,
          servicio = $('#servicio').offset().top,
          trabajo = $('#trabajo').offset().top,
          contacto = $('#contacto').offset().top;

     window.addEventListener('resize', function(){
          let equipo = $('#equipo').offset().top,
          servicio = $('#servicio').offset().top,
          trabajo = $('#trabajo').offset().top,
          contacto = $('#contacto').offset().top;         
     }); 
     //Envia al usuario al Inicio
     $('#enlace-inicio').on('click', function(e){
          e.preventDefault();
          $('html, body').animate({
               scrollTop: 0
          },600);
     });

     //Envia al usuario al Equipo
     $('#enlace-equipo').on('click', function(e){
          e.preventDefault();
          $('html, body').animate({
               scrollTop: equipo -100
          },600);
     });

     //Envia al usuario al Servicio
     $('#enlace-servicio').on('click', function(e){
          e.preventDefault();
          $('html, body').animate({
               scrollTop: servicio -100
          },600);
     });

     //Envia al usuario al Trabajo
     $('#enlace-trabajo').on('click', function(e){
          e.preventDefault();
          $('html, body').animate({
               scrollTop: trabajo -100
          },600);
     });

     //Envia al usuario al Contacto
     $('#enlace-contacto').on('click', function(e){
          e.preventDefault();
          $('html, body').animate({
               scrollTop: contacto -100
          },600);
     });
});