window.addEventListener('load',function() {
  var button = document.getElementById('button');
  button.addEventListener('click',function() {
    var email= document.getElementById('email').value;
    var password = document.getElementById('password').value;
    var validar_email = document.getElementById('validar_email');
    var validar_password = document.getElementById('validar_password');
    var correo = /\S+@\S+\.\S+/;
    var datos_usuario= ["dagui_22@hotmail.com", "ana_undefined@hotmail.com", "geral_26@hotmail.com"];
    if(email !=""){
    if(correo.test(email) != true){
      validar_email.innerHTML = "Este correo no es valido";
    }
    }else {
      validar_email.innerHTML = "El campo de usuario no puede estar en blanco";
    };
    if(password == ""){
      validar_password.innerHTML = "Complete el campo de password";
    }
    for (var i=0; i < datos_usuario.length; i++){
      if(email == datos_usuario){
      }
    };
 });
});
