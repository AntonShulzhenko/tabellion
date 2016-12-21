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
