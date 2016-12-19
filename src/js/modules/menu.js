(function($) {
  var menu    = $('.nav');
  var menuBtn = $('.header__menu-btn');

  menuBtn.on('click', function() {
    menu.toggleClass('is-visible');
  });

  menu.on('click', function(e) {
    $(this).removeClass('is-visible');
  });

})(jQuery);
