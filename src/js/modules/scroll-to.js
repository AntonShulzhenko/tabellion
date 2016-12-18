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
