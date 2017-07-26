// fading divs after scrolling down
$(document).scroll(function() {
  var q = $(this).scrollTop();

  if(q > 150) {
    $('.bottomFade').fadeIn("5000");
  }
  else {
    $('.bottomFade').fadeOut("6000");
  }
});
