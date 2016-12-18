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
