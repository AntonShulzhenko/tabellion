(function($) {
  var menu    = $('.nav');
  var menuBtn = $('.header__menu-btn');

  menuBtn.on('click', function() {
    menu.toggleClass('is-active');
  });

  menu.on('click', function(e) {
    $(this).removeClass('is-active');
  });

})(jQuery);
