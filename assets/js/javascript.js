window.addEventListener('load',function() {
  var button = document.getElementById('button');
  button.addEventListener('click',function() {
    var email= document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var validar_email = document.getElementById('validar_email');
    if(email != ""){
      if (email != /\S+@\S+\.\S+/ && email !=) {

      }

      }else {
        validar_email.innerHTML = "El campo de usuario no puede estar en blanco";
      };
      if (password != "") {

      }else {
        validar_password.innerHTML = "El campo de password no puede estar en blanco";
      }


  });
});
