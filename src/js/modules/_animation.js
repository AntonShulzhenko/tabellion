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
