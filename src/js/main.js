(function($) {
  if($(window).width() > 768) {
    $('.scroll-container').jScrollPane({
			autoReinitialise: true
		});
  }
})(jQuery);
