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
