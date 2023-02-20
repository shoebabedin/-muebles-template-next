$('#menu-toggle').click(function(){
  $('.navigation').addClass('show');
  $('.overlay').addClass('show');
});

$('.overlay').click(function(){
  $('.navigation').removeClass('show');
  $('.overlay').removeClass('show');
})