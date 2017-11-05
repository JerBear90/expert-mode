$('.home .title h1, .hero--small p').hide(0);

$(document).ready(function(){
  $('.home .title h1').animate({
    opacity: 1,
    left: "+=50",
    height: "toggle"
  }, 750);

  $('.hero--small p').animate({
    opacity: 1,
    left: "-=50",
    height: "toggle"
  }, 900);
})