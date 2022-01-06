  function senha(text) {
  return text.trim() !== "";
}

$(function() {
  $("#cpf").validador();

  $("#senha").validador({function: senha});
});

;(function($) {

  var validaCpf = function(text) {
    text = text.replace(/\D/g, "");

    if(text.length === 11) {
      var digitos = [];

      for(var pos = 0; pos < text.length; pos++) {
        digitos[pos] = text.charCodeAt(pos) - 48;
      }

      // calcular o primeiro digito
      var primeiroPasso = [];

      var soma = 0;

      for(var pos = 0; pos < 9; pos++) {
        soma += digitos[pos] * (10 - pos);
      }

      var primeiroDigito = 11 - (soma % 11);

      if(primeiroDigito > 9) {
        primeiroDigito = 0;
      }

      if(digitos[9] !== primeiroDigito) {
        return false;
      }

      // calcular o segundo digito

      soma = 0;

      for(var pos = 0; pos < 10; pos++) {
        soma += digitos[pos] * (11 - pos);
      }

      var segundoDigito = 11 - (soma % 11);

      if(segundoDigito > 9) {
        segundoDigito = 0;
      }

      return digitos[10] === segundoDigito;
    }

    return false;
  }
function versenha(y) {
y.classList.toggle("fa-eye-slash");
  var x = document.getElementById("senha");
  if (x.type === "password") {
    x.type = "text";
  } else {
    x.type = "password";
  }
}
  $.fn.validador = function(options) {
    var init = function() {
      
      var element = $(this);
      var settings = $.extend({
        "function" :  validaCpf
      }, options);
        
      var isValid = function(text) {
        return settings["function"](text);
      };

      var onElementBlur = function() {
        var texto = element.val();

        if(isValid(texto)) {
          element.removeClass("erro");
          element.addClass("valido");
        } else {
          element.removeClass("valido");
          element.addClass("erro");
        }
      }

      element.bind("blur.validador", onElementBlur);
    }

var myInput = document.getElementById("senha");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");



		       

// When the user clicks on the password field, show the message box
myInput.onfocus = function() {
  document.getElementById("message").style.display = "block";
}

// When the user clicks outside of the password field, hide the message box
myInput.onblur = function() {
  document.getElementById("message").style.display = "none";
}

// When the user starts to type something inside the password field
myInput.onkeyup = function() {
  // Validate lowercase letters
  var lowerCaseLetters = /[a-z]/g;
  if(myInput.value.match(lowerCaseLetters)) {  
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }
  
  // Validate capital letters
  var upperCaseLetters = /[A-Z]/g;
  if(myInput.value.match(upperCaseLetters)) {  
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  var numbers = /[0-9]/g;
  if(myInput.value.match(numbers)) {  
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }
  
  // Validate length
  if(myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
}
    return this.each(init);
  };
    
})(jQuery);

