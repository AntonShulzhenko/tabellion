(function($) {
  var form       = $('body').find('form');
  var inputName  = form.find('input[name=name]');
  var inputEmail = form.find('input[name=email]');
  var textarea   = form.find('textarea[name=textarea]');
  var formLabel  = form.find('.send-form__label');
  var formFields = formLabel.children(':first-child');
  var emailReg   = /.+@.+\..+/i;

  form.on('submit', function(e) {
    if(inputName.val() == "" || inputEmail.val() == "" || textarea.val() == "") {
      inputName.siblings('.send-form__error').fadeIn();
      inputEmail.siblings('.send-form__error').fadeIn();
      textarea.siblings('.send-form__error').fadeIn();
      e.preventDefault();
    } else if(!emailReg.test(inputEmail.val())) {
      inputEmail.siblings('.send-form__error').fadeIn();
      e.preventDefault();
    }
  });

  formFields.each(function(i, el) {
    var self = $(this);

    self.on('focusout', function() {
      if(self.attr('name') == 'email') {
        if(!emailReg.test(self.val())) {
          self.siblings('.send-form__error').fadeIn();
        }
      } else {
        if(self.val() == "") {
          self.siblings('.send-form__error').fadeIn();
        }
      }
    });

    self.on('keypress', function() {
      if(self.val() != "") {
        self.siblings('.send-form__error').fadeOut();
      }
    });
  });
})(jQuery);

(function($) {
  var header = $('.header');
  var goTop = $('.go-top');
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
    if(header.offset().top > 1) {
      header.addClass('is-scroll');
      goTop.addClass('is-visible');
    } else {
      header.removeClass('is-scroll');
      goTop.removeClass('is-visible');
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

(function($) {
  if($(window).width() > 599) {
    $('.scroll-container').jScrollPane({
			autoReinitialise: true
		});
  }
})(jQuery);
