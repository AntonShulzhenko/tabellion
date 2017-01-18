(function() {
  var mo            = document.querySelector('.mobile-overlay');
  var closeBtn      = document.querySelector('.mobile-overlay__close');
  var mobileContent = document.querySelector('.mobile-overlay__content');
  var header        = document.querySelector('.header');
  var phoneNumber   = header.querySelector('.contacts__item_phone').textContent;
  var location      = header.querySelector('.contacts__item_location').textContent;
  var email         = header.querySelector('.contacts__item_email').textContent;

  function toggleOverlay() {
    mo.classList.toggle('is-active');
  }

  function showContent(el, attr, text, descr) {
    el.style.opacity = 1;
    el.setAttribute('href', attr);
    el.innerHTML = text + '<small>' + descr + '</small>';
  }

  function hideContent() {
    mobileContent.innerHTML = '';
    mobileContent.style.opacity = 0;
    mobileContent.setAttribute('href', '');
  }

  if(window.innerWidth < 900) {
    header.addEventListener('click', function(e) {
      if(!e.target.classList.contains('contacts__item')) return;

      toggleOverlay();

      if(e.target.classList.contains('contacts__item_email')) {
        showContent(mobileContent, 'mailto:' + email, email, 'надіслати листа');
      } else if(e.target.classList.contains('contacts__item_phone')) {
        showContent(mobileContent, 'tel:' + phoneNumber, phoneNumber, 'зателефонувати');
      } else if(e.target.classList.contains('contacts__item_location')) {
        showContent(mobileContent, 'http://maps.google.com?q=' + location, location, 'побудувати маршрут');
      }
    });

    closeBtn.addEventListener('click', function(e) {
      toggleOverlay();
      hideContent();
    });
  }
})();
