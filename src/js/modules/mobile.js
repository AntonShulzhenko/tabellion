(function() {
  var mo            = document.querySelector('.mobile-overlay');
  var header        = document.querySelector('.header');
  var closeBtn      = document.querySelector('.mobile-overlay__close');
  var mobilePones   = document.querySelector('.mobile-overlay__phones');
  var mobileAddress = document.querySelector('.mobile-overlay__address');
  var phoneNumber   = document.querySelector('.header .contacts__item_phone').textContent;
  var location      = document.querySelector('.header .contacts__item_location').textContent;

  if(window.innerWidth < 600) {
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
