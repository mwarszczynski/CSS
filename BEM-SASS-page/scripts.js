var title = '.js-title';  // odwolanie do h3
var copy   = '.js-copy';  // odwolanie do p

$(document).ready(function() {
  $(title).click(function() {
    $(this).next(copy).slideToggle(); // nastepny element dla h3, odwolanie do copy
    $(this).parent().siblings().children().next().slideUp();         // p odwoluje sie do h3
  });
});
// slider
$('.page__wallpaper > div:gt(0)').hide();
setInterval(function() {
  $('.page__wallpaper > div')
  .fadeOut(2000)
  .next()
  .fadeIn(2000)
  .fadeOut(2000)
  .next()
  .fadeIn()
  .end()
  .appendTo('.page__wallpaper');
}, 1000);
// return to the top
$('.page__top').click(function() {
  $('html, body').animate({scrollTop: 0}, 500);
});
