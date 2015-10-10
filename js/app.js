$('a[href^="#"]').on('click', function(event) {
    var target = $(this.getAttribute("href"));
    console.log(target);
    if( target.length ) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: target.offset().top
        }, 500);
    }
});

$(window).scroll(function() {
  var top = $(window).scrollTop();
  if(top > 0){
  	$('.custom-navbar').addClass('custom-navbar-scrolled');
  }
  else{
  	$('.custom-navbar').removeClass('custom-navbar-scrolled');
  }

});