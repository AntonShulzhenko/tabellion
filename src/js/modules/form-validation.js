(function($) {
  var form = $('body').find('form');
  var inputName = form.find('input[name=name]');
  var inputEmail = form.find('input[name=email]');
  var textarea = form.find('textarea[name=textarea]');
  var formLabel = form.find('.send-form__label');

  form.on('submit', function(e) {
    if(inputName.val() == "" || (inputEmail.val() == "" || inputEmail.val().indexOf('@') == -1 && inputEmail.val().indexOf('.') == -1) || textarea.val() == "") {
      
      alert('error');
      e.preventDefault();
    }

    console.log(textarea.val());
  });

})(jQuery);
