
//tooltip

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
})


//sidebar collapse body

$(document).ready(function () {
  $('[data-toggle=offcanvas]').click(function () {
    $('.row-offcanvas, .page-wide').toggleClass('active');
  });
});

//sidebar collapse button
$(document).ready(function () {
  $('#flip-btn').click(function () {
    $('.flip-btn').toggleClass('active');
  });
});

//modal
$(document).ready(function () {
  $('[data-modal="modal-custom"], .close-btn').click(function () {
    $('.modal-custom-view').toggleClass('active');
  });
});


// form-control focus on clear data

$('.form-control').focusin(function(){
      input = $(this);
      input.data('place-holder-text', input.attr('placeholder'))
      input.attr('placeholder', '');
  });
  $('.form-control').focusout(function(){
      input = $(this);
      input.attr('placeholder', input.data('place-holder-text'));
  });

//footer

$(document).ready(function(){
  if($.cookie('pop')>0){
    $('.footer-flip').addClass("show");
  }else{
    $('.footer-flip').removeClass("show");
  }
  $(".btn-flip").click(function(){
    // $(".footer-flip").toggleClass("show");
    cookie_value_change($.cookie('pop'))
  });
});

//cookie



function cookie_value_change(s){
  // alert(s)
  if(s>0){
    $.cookie('pop', '0');
    $('.footer-flip').removeClass("show");
  }else{
    $('.footer-flip').addClass("show");
    $.cookie('pop', '7');
  }
}

