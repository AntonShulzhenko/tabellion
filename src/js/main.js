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

var loader = (function() {
  var ldr = document.getElementById('loader');

  Pace.on('hide', function() {
    setTimeout(function() {
      ldr.classList.add('fadeOut');
      setTimeout(function() {
        ldr.classList.add('hidden');
      }, 500);
    }, 500);
  });
})();

function initMap() {
  var options = {
    center: {lat: 50.449037, lng: 30.530335},
    scrollwheel: false,
    zoom: 14,
    styles: [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]
  }
  var map = new google.maps.Map(document.getElementById('map'), options);

  var image = 'img/map-marker.png';

  var marker = new google.maps.Marker({
    position: {lat: 50.449037, lng: 30.530335},
    map: map,
    icon: image
  });
}

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
