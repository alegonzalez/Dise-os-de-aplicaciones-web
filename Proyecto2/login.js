var LOGIN=LOGIN||{

  /*Valida los usuarios que sean correctos*/
  validateUser:function()
  {
    /*se crea un arrglo llamado datosLogin que lo que hace es guardar el admin*/
    var datosLogin=new Array();
    admin="admin";
    pass="$uper4dmin";
    var date={'User':admin,'Password':pass};
    datosLogin.push(date);

    localStorage.setItem("Login",JSON.stringify(datosLogin));

    /*Se obtiene los valores de los input*/
    var user=document.getElementById('usuario').value;
    var contrasena=document.getElementById('password').value;

    /*validacion del admin*/
    if(user=='admin'&&contrasena==1){

      window.open("http://localhost/Dise-os-de-aplicaciones-web/Dise-os-de-aplicaciones-web/proyecto2/menu.html");

    }else{

      /*validacion de los usuarios existentes*/

      datosLogin=localStorage.getItem("LoginUser");

      datosLogin=JSON.parse(localStorage.getItem("LoginUser"));

/*La cantidad de objetos que tiene un key en este caso se llama LoginUser*/
      for (var i = 0; i <= localStorage.length-1; i++) {
        
        if(datosLogin[i].User==user && datosLogin[i].Password==contrasena){
         
         window.open("http://localhost/Dise-os-de-aplicaciones-web/Dise-os-de-aplicaciones-web/proyecto2/menu.html");
         
         /*PARAMETROS NO SIRVE ARREGLAR*/
         var logeado=new USER.nombreUsuario(user);

       }





     }

   }



 },


};

