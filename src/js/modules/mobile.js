(function() {
  var mo          = document.querySelector('.mobile-overlay');
  var header      = document.querySelector('.header');
  var closeBtn    = document.querySelector('.mobile-overlay__close');
  var mobileContent = document.querySelector('.mobile-overlay__content');
  var phoneNumber = document.querySelector('.header .contacts__item_phone').textContent;
  var location    = document.querySelector('.header .contacts__item_location').textContent;
  var email       = document.querySelector('.header .contacts__item_email').textContent;

  if(window.innerWidth < 900) {
    header.addEventListener('click', function(e) {
      if (e.target.classList.contains('contacts__item')) {
        mo.classList.add('is-active');
        mobileContent.style.opacity = 1;
        mobileContent.setAttribute('href', 'javascript:void(0);');

        if(e.target.classList.contains('contacts__item_phone')) {
          mobileContent.textContent = '';
          mobileContent.textContent = phoneNumber;
          mobileContent.setAttribute('href', 'tel:' + phoneNumber);
        } else if(e.target.classList.contains('contacts__item_location')) {
          mobileContent.textContent = '';
          mobileContent.textContent = location;
        } else {
          mobileContent.textContent = '';
          mobileContent.textContent = email;
        }
      }
    });

    closeBtn.addEventListener('click', function(e) {
      mo.classList.remove('is-active');
      mobileContent.textContent = '';
      mobileContent.setAttribute('href', '');
    });
  }
})();
