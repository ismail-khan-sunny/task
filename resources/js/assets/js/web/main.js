
//carousel

$('.carousel').carousel({
  interval: 4000
})

//tooltip

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})

//sticky-head

$(window).scroll(function() {
    if ($(this).scrollTop() >= 40){  
        $('.header').addClass("fixed-show");
    }
    else{
        $('.header').removeClass("fixed-show");
    }
});

//Animation

AOS.init({
	duration:700,
	easing:"ease-out-quad",
	once:!0,
	startEvent:"load"
});


//click on smoth scroll

$(document).on('click', 'a[href^="#"]', function (event) {
  event.preventDefault();

  $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
  }, 500);
});

//Back to top 

$(document).ready(function(){ 
  $(window).scroll(function(){ 
      if ($(this).scrollTop() > 100) { 
          $('#scroll').fadeIn(); 
      } else { 
          $('#scroll').fadeOut(); 
      } 
  }); 
  $('#scroll').click(function(){ 
      $("html, body").animate({ scrollTop: 0 }, 600); 
      return false; 
  }); 
});