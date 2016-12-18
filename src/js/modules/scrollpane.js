(function($) {
  if($(window).width() > 599) {
    $('.scroll-container').jScrollPane({
			autoReinitialise: true
		});
  }
})(jQuery);
