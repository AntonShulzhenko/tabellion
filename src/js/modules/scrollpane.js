(function($) {
  if($(window).width() > 768) {
    $('.aside__body').jScrollPane({
			autoReinitialise: true
		});
  }
})(jQuery);
