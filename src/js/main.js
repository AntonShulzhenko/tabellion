(function($) {
  var form     = $('body').find('form');
  var emailReg = /.+@.+\..+/i;

  form.each(function(i) {
    var inputName  = $(this).find('input[name=name]');
    var inputEmail = $(this).find('input[name=email]');
    var textarea   = $(this).find('textarea[name=textarea]');
    var formLabel  = $(this).find('.send-form__label');
    var formFields = formLabel.children(':first-child');

    $(this).on('submit', function(e) {
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
  });
})(jQuery);

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

var loader = (function() {
  var ldr = document.getElementById('loader');

  Pace.on('hide', function() {
    ldr.classList.add('fadeOut');
      setTimeout(function() {
        ldr.classList.add('hidden');
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
    menu.toggleClass('is-active');
  });

  menu.on('click', function(e) {
    $(this).removeClass('is-active');
  });

})(jQuery);

(function() {
  var mo            = document.querySelector('.mobile-overlay');
  var header        = document.querySelector('.header');
  var closeBtn      = document.querySelector('.mobile-overlay__close');
  var mobilePones   = document.querySelector('.mobile-overlay__phones');
  var mobileAddress = document.querySelector('.mobile-overlay__address');
  var phoneNumber   = document.querySelector('.header .contacts__item_phone').textContent;
  var location      = document.querySelector('.header .contacts__item_location').textContent;

  if(window.innerWidth < 900) {
    mobilePones.setAttribute('href', 'tel:' + phoneNumber);
    mobilePones.innerHTML = phoneNumber;
    mobileAddress.innerHTML = location;

    header.addEventListener('click', function(e) {
      if(e.target.classList.contains('contacts__item_phone')) {
        mo.classList.add('is-active');
        mobileAddress.style.display = 'none';
        mobilePones.style.display = 'block';
        mobilePones.style.opacity = 1;
      } else if(e.target.classList.contains('contacts__item_location')) {
        mo.classList.add('is-active');
        mobilePones.style.display = 'none';
        mobileAddress.style.display = 'block';
        mobileAddress.style.opacity = 1;
      }
    });

    closeBtn.addEventListener('click', function(e) {
      mo.classList.remove('is-active');
    });
  }
})();

(function($) {
  var scrollTo = (function() {
    $('.scrollTo').on('click', function(e) {
      var clickElement = $(this).attr('href');
      var clickDestination = $(clickElement).offset().top;

      $('html:not(:animated),body:not(:animated)').animate({scrollTop: clickDestination},1000);
      e.preventDefault();
    });
  })();

  var goTop = $('.go-top');

  $(window).on('scroll', function() {
    if($(window).scrollTop() > 500) {
      goTop.addClass('is-visible');
    } else {
      goTop.removeClass('is-visible');
    }
  });
})(jQuery);

(function($) {
  if($(window).width() > 599) {
    $('.scroll-container').jScrollPane({
			autoReinitialise: true
		});
  }
})(jQuery);

var header         = document.querySelector('.header');
var logo           = document.querySelector('.header__logo');
var logoOverlay    = document.querySelector('.header__logo-overlay');

var headerContacts = header.querySelectorAll('.contacts__item');

var navItems       = document.querySelectorAll('.nav__item');

var h1             = document.querySelector('.first__h1');
var firstServices  = document.querySelector('.first__services');
var firstLead      = document.querySelector('.first__lead');
var firstAmount    = document.querySelector('.first__services-amount');

var winWidth = window.innerWidth;

var tlNav      = new TimelineMax({ease: Power4.easeOut});
var tlHeader   = new TimelineMax({ease: Power4.easeOut});
var tlContacts = new TimelineMax({ease: Power4.easeOut});
var tlContent  = new TimelineMax({ease: Power4.easeOut});

if(winWidth > 899) {
  Pace.on('hide', function() {
    tlHeader.from(logo, 1, {x: -50});
    tlHeader
    .fromTo(logoOverlay, 0.5, {width: '100%'}, {width: '0px'});
    tlHeader.to(logo, 1.5, {x: 0});

    tlNav.staggerFrom(navItems, 1.5, {x: -50, opacity: 0, delay: 0.25}, 0.25);

    tlContacts.staggerFrom(headerContacts, 0.75, {x: -50, opacity: 0, delay: 1.5}, 0.25);
    tlContacts.staggerFrom($('.header .contacts__item .line'), 1, {width: 0}, 0.25);

    tlContent
    .fromTo(h1, 1, {x: -50, opacity: 0}, {x: 0, opacity: 1, delay: 1})
    .fromTo(firstServices, 1, {y: 30, opacity: 0}, {y: 0, opacity: 1})
    .staggerFrom([firstLead, firstAmount], 1, {x: -30, opacity: 0}, 0.25);
  });

  var controller = new ScrollMagic.Controller();

  //fade
  $(".faded").each(function(){
    $(this).addClass('out');
    new ScrollMagic.Scene({
      triggerElement: this,
      triggerHook: 0.8
    })
    .on("enter", function(ev){$(ev.target.triggerElement()).removeClass('out');})
    .on("leave", function(ev){$(ev.target.triggerElement()).addClass('out');})
    .addTo(controller);
  });
}
