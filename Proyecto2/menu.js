var MENU=MENU||{
	
	cerrarSesion:function() {
		log=localStorage.getItem("LoginUser");
		log = JSON.parse(localStorage.getItem("LoginUser"));
		adm=localStorage.getItem("Login");
		adm = JSON.parse(localStorage.getItem("Login"));
		if(adm[0].Sesion==1){

			adm[0].Sesion=0;
			localStorage.setItem("Login", JSON.stringify(adm));
			window.open("http://localhost/Dise-os-de-aplicaciones-web/Dise-os-de-aplicaciones-web/proyecto2/login.html","_self").value;
		}else{

			for (var i = 0; i <log.length; i++) {

				if(log[i].Sesion==1){

					log[i].Sesion=0;
					localStorage.setItem("LoginUser", JSON.stringify(log));
					window.open("http://localhost/Dise-os-de-aplicaciones-web/Dise-os-de-aplicaciones-web/proyecto2/login.html","_self").value;
				}

			}
		}

	},


};
/*Funcion se ejecuta de inmediato y sirve para mostrar quien es el que esta
logeado*/
(function(){
	var log=new Array();
	log=localStorage.getItem("LoginUser");
	log=JSON.parse(localStorage.getItem("LoginUser"));
	adm=localStorage.getItem("Login");
	adm = JSON.parse(localStorage.getItem("Login"));

	if(adm[0].Sesion==1)
	{
		
		document.getElementById('session').innerHTML=adm[0].User;	
	}
	else
	{

		for (var j = 0; j <log.length; j++) {

			if(log[j].Sesion==1){

				document.getElementById('session').innerHTML=log[j].User;
			}

		}
	}

})();

