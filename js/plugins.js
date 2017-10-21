$(function() {
  'use strict';
// button top scroll
var scrollButton = $('.top-button');

$(window).scroll(function (){

  if ($(this).scrollTop() >= 700){scrollButton.show();}

  else{scrollButton.hide();}

});

scrollButton.click(function (){

    $("html,body").animate({scrollTop:0},1000);

});
// plugins mixitup
$('#Container').mixItUp();

// hover links nav
 $('.navbar-nav li').click(function (){
   $(this).addClass('active').siblings().removeClass('active');
 });

// data value id
$('.navbar-nav li a').click(function (){

 $('html, body').animate({

   scrollTop: $('#' + $(this).data('value')).offset().top

 },2000);

});
//nice scroll


});
