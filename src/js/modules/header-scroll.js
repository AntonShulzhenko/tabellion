(function($) {
  var header = $('.header');
  var bodyHeight = $('body').height();
  var contactsSection = $('.contacts-section');
  var footer = $('.footer');
  var mainMenu = $('.nav');
  var faqSection = $('.faq');
  var navToggle = $('.nav__toggle');

  navToggle.on('click', function() {
    mainMenu.toggleClass('small');
  });

  $(window).on('scroll', function() {
    if(header.offset().top > 100) {
      header.addClass('is-scroll');
    } else {
      header.removeClass('is-scroll');
    }

    if($(window).width() > 899) {
      if($(window).scrollTop() + 400 > (bodyHeight - (contactsSection.height() + footer.height() + 500))) {
        mainMenu.addClass('small bg');
      } else {
        mainMenu.removeClass('small bg');
      }
    }
  });
})(jQuery);
