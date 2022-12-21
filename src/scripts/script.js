$(document).ready(function(){
    $('.slider').slick({
      arrows: false,
      dots: false,
      speed: 300,
      autoplay: true,
      autoplaySpeed: 2500,
      asNavFor:".sliderSmall",
      appendArrows: $('.nav'),
      crnterMode: true,
      variableWidth: true,
    });
    $('.sliderSmall').slick({
      slidesToShow: 7,
      slidesToScroll: 1,
      arrows: false,
      dots: false,
      speed: 200,
      autoplay: true,
      asNavFor:".slider",
      focusOnSelect: true,
    });
    $('.slider').slick('setPosition');
    $('.sliderSmall').slick('setPosition');
  });
  
  var s_win_w = $(window).width();
  $(window).resize(function(){
    win_w = $(window).width();
    if (win_w >= s_win_w*1.1 || win_w <= s_win_w*0.9) {
      location.reload();
    }
  });


 
