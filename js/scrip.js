// JavaScript Document
 window.setTimeout(function(){
	"use strict";
	var contenedor = document.getElementById('container-carga');
	contenedor.style.visibility = 'hidden';
	contenedor.style.opacity = '0';
},3000);


$(document).ready(function() {
	"use strict";
            $(".menu-icon").on("click", function() {
                  $("nav ul").toggleClass("showing");
            });
      });
// Scrolling Effect

      $(window).on("scroll", function() {
		  "use strict";
            if($(window).scrollTop()) {
                  $('nav').addClass('black');
            }

            else {
                  $('nav').removeClass('black');
            }
      });

$(".hover").mouseleave(
  function () {
	  "use strict";
    $(this).removeClass("hover");
  }
);

$('.miswitch a').click(function(){
    $('.swicht-btn').toggleClass('on');
    $('.pricing-table-cont').toggleClass('rotando-tabla');
});

$(document).ready(function(){
  "use strict";
  $('.ir-arriba').click(function(){
    $('body, html').animate({
      scrollTop:'0px'
    });
  });
  
  $(window).scroll(function(){
    if($(this).scrollTop() > 0 ){
      $('.ir-arriba').slideDown(300);
    } else{
      $('.ir-arriba').slideUp(300);
    }
  });
  
});