var EDIT_USER=EDIT_USER||{
	/*Esta funcion sirve para rrecorrer los datos para modificarlos
	*/
	datosEdit:function(){

		var date = localStorage.getItem("temporal");
		var date = JSON.parse(localStorage.getItem("temporal"));
		
		var user=localStorage.getItem("LoginUser");
		var user = JSON.parse(localStorage.getItem("LoginUser"));
		
		/*Sirve para recorrer los datos de temporal*/
		for (var i = 0; i <date.length; i++) {
			/*Sirve para recorrer la lista de clientes*/
			for (var j = 0; j <user.length; j++) {
				/*El if sirve para ver si la cedula coinciden*/
				if(date[i].UserName==user[j].Nombre_Usuario)
				{
					
					user[j].Nombre_Usuario=document.getElementById('edit_user_nameFull').value;
					user[j].User=date[i].Name;
					
					localStorage.setItem("LoginUser",JSON.stringify(user));
					window.open("http://localhost/Dise-os-de-aplicaciones-web/Dise-os-de-aplicaciones-web/proyecto2/user.html","_self").value;
				}
			}
		}

	}


};
/*Asigna los datos a los input*/
(function(){
	var date = localStorage.getItem("temporal");
	var date = JSON.parse(localStorage.getItem("temporal"));

	document.getElementById('edit_user_nameFull').value=date[0].Name;
	document.getElementById('edit_userName').value=date[0].UserName;


})();