var wow = new WOW(
  {
    boxClass:        'trigger',
    animateClass:    'anim',
    offset:          100,
    mobile:          false,
    scrollContainer: null
  }
);
wow.init();

var header = document.querySelector('.header');
var headerContacts = header.querySelectorAll('.contacts__item');
var navItems = document.querySelectorAll('.nav__item');
var logoOverlay = document.querySelector('.header__logo-overlay');
var logoLine = document.querySelector('.header__logo-line');
var logoLineWidth = '324px';
var winWidth = window.innerWidth;

if(winWidth > 1199 && winWidth < 1800) {
  logoLineWidth = '220px';
} else if(winWidth > 899 && winWidth < 1200) {
  logoLineWidth = '100px';
}

var tlNav = new TimelineMax({
  ease: Power4.easeOut
});

var tlHeader = new TimelineMax({
  ease: Power4.easeOut
});

Pace.on('hide', function() {
  tlHeader.from($('.header__logo'), 1, {x: -50});

  tlHeader
    .fromTo(logoOverlay, 0.5, {width: '100%'}, {width: '0px'})
    .fromTo(logoLine, 0.5, {width: '0'}, {width: logoLineWidth})
    .staggerFrom(headerContacts, 0.75, {x: -50, opacity: 0}, 0.25);

  tlHeader.to($('.header__logo'), 1.5, {x: 0});

  tlNav.staggerFrom(navItems, 2, {x: -50, opacity: 0, delay: 0.25}, 0.25);
});
