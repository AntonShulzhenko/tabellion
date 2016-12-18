(function($) {
  var header = $('.header');
  var goTop = $('.go-top');

  $(window).on('scroll', function() {
    if(header.offset().top > 1) {
      header.addClass('is-scroll');
      goTop.addClass('is-visible');
    } else {
      header.removeClass('is-scroll');
      goTop.removeClass('is-visible');
    }
  });
})(jQuery);

(function($) {
  var scrollTo = (function() {
    $('.scrollTo').on('click', function() {
      var clickElement = $(this).attr('href');
      var clickDestination = $(clickElement).offset().top;

      $('html:not(:animated),body:not(:animated)').animate({scrollTop: clickDestination}, 500);
      return false;
    });
  })();
})(jQuery);

(function($) {
  if($(window).width() > 599) {
    $('.scroll-container').jScrollPane({
			autoReinitialise: true
		});
  }
})(jQuery);
