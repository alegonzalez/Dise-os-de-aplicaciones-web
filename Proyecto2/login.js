var LOGIN=LOGIN||{

  /*Valida los usuarios que sean correctos*/
  validateUser:function()
  {
    /*se crea un arrglo llamado datosLogin que lo que hace es guardar el admin*/
    var datosLogin=new Array();
    admin="admin";
    pass="1";
    sesion=0;
    var date={'User':admin,'Password':pass,"Sesion":0};
    datosLogin.push(date);

    localStorage.setItem("Login",JSON.stringify(datosLogin));

    /*Se obtiene los valores de los input*/
    var user=document.getElementById('usuario').value;
    var contrasena=document.getElementById('password').value;
    
    var dato=new Array();
    if(user=="admin" && contrasena=="1")
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
        /*validacion del admin*/

        if(dato[i].User==user&&dato[i].Password==contrasena){
          dato[i].Sesion=1;
          localStorage.setItem("LoginUser", JSON.stringify(dato));
          window.open("http://localhost/Dise-os-de-aplicaciones-web/Dise-os-de-aplicaciones-web/proyecto2/menu_sin_usuarios.html","_self").value;
        }
      }

    }

  },




};

