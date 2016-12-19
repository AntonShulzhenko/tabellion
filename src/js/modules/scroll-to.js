(function($) {
  var scrollTo = (function() {
    $('.scrollTo').on('click', function(e) {
      var clickElement = $(this).attr('href');
      var clickDestination = $(clickElement).offset().top;

      $('html:not(:animated),body:not(:animated)').animate({scrollTop: clickDestination}, 500);
      e.preventDefault();
    });
  })();
})(jQuery);
