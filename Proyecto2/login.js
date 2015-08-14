var LOGIN=LOGIN||{

  /*Valida los usuarios que sean correctos*/
  validateUser:function(user,contrasena)
  {
    this.user=user;
    this.contrasena=contrasena;
    /*se crea un arrglo llamado datosLogin que lo que hace es guardar el admin*/
    correctUser();
    var datosLogin=new Array();
    admin="admin";
    pass="1";
    sesion=0;
    var date={'User':admin,'Password':pass,"Sesion":0};
    datosLogin.push(date);

    localStorage.setItem("Login",JSON.stringify(datosLogin));


    var dato=new Array();
    if(this.user=="admin" && this.contrasena=="1")
    {

      dato = localStorage.getItem("Login");
      dato = JSON.parse(localStorage.getItem("Login"));
      dato[0].Sesion=1;

      localStorage.setItem("Login", JSON.stringify(dato));
      window.open("http://localhost/Dise-os-de-aplicaciones-web/Dise-os-de-aplicaciones-web/proyecto2/menu.html","_self").value;
    }else{

      dato = localStorage.getItem("LoginUser");

      dato = JSON.parse(localStorage.getItem("LoginUser"));

      for (var i = 0; i <dato.length; i++) {
        /*validacion de los usuarios*/

        if(dato[i].User==this.user&&dato[i].Password==this.contrasena){
          dato[i].Sesion=1;
          localStorage.setItem("LoginUser", JSON.stringify(dato));
          window.open("http://localhost/Dise-os-de-aplicaciones-web/Dise-os-de-aplicaciones-web/proyecto2/menu.html","_self").value;
        }
      }

      $(".alert-danger").text("Usuario o contraseña incorrecta por favor  intente nuevamente").show();
    }

  },
  /*Valida si hay campos en blanco*/
  validarCamposBlanco:function(){
   /*Se obtiene los valores de los input*/
   var user=$('#usuario').val();
   var contrasena=$('#contraseña').val();
   var pasada=0;
   if(user==""&&contrasena=="") {
    /*attr permite cambiar el atributo de una etuoqueta*/
    
    incorrectUser();
    incorrectPassword();

    pasada=1;
  }else if(user!=""&&contrasena==""){

    correctUser();
    incorrectPassword();
    pasada=1;

  } else if(user==""&&contrasena!=""){

    incorrectUser();
    correctPassword();
    pasada=1;
  }
  if(pasada==0){

    LOGIN.validateUser(user,contrasena);

  }


},
};

/*metodo que contiene el icono de correcto  para agregarlo en el input de User*/
function correctUser(){

  $("#iconotexto").remove();
  $("#usuario").parent().parent().attr("class","form-group has-success has-feedback");
  $("#usuario").parent().children("span").text("Debe completar el campo de user").hide();
  $("#usuario").parent().append("<span id='iconotexto' class='glyphicon glyphicon-ok form-control-feedback'></span>");   

}
/*metodo que contiene el icono de incorrecto  para agregarlo en el input de password*/
function incorrectUser(){

  $("#iconotexto").remove();
  $("#usuario").parent().parent().attr("class","form-group has-error has-feedback");
  $("#usuario").parent().children("span").text("Debe completar el campo de user").show();
  $("#usuario").parent().append("<span id='iconotexto' class='glyphicon glyphicon-remove form-control-feedback'></span>");


}
/*metodo que contiene el icono de correcto  para agregarlo en el input de password*/
function correctPassword(){

  $("#iconopass").remove();
  $("#contraseña").parent().parent().attr("class","form-group has-success has-feedback");
  $("#contraseña").parent().children("span").text("Debe de llenar el campo de password").hide();
  $("#contraseña").parent().append("<span id='iconopass' class='glyphicon glyphicon-ok form-control-feedback'></span>");


}
/*metodo que contiene el icono de incorrecto  para agregarlo en el input de password*/
function incorrectPassword(){
  $("#iconopass").remove();
  $("#contraseña").parent().parent().attr("class","form-group has-error has-feedback");
  $("#contraseña").parent().children("span").text("Debe de llenar el campo de password").show();
  $("#contraseña").parent().append("<span id='iconopass' class='glyphicon glyphicon-remove form-control-feedback'></span>");

}

$(document).ready(function(){
  $("#ingresar").click(LOGIN.validarCamposBlanco);
  $(".alert-danger").hide();
  $("#usuario").keyup(function(){
    $(".alert-danger").hide();
  })
  $("#contraseña").keyup(function(){
    $(".alert-danger").hide();
  });

});
