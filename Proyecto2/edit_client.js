var EDIT_CLIENT=EDIT_CLIENT||{
	/*Esta funcion sirve para rrecorrer los datos para modificarlos
	*/
	datosEdit:function(){

		var date = localStorage.getItem("temporal");
		var date = JSON.parse(localStorage.getItem("temporal"));

		var clients=localStorage.getItem("Client");
		var clients = JSON.parse(localStorage.getItem("Client"));

		/*Sirve para recorrer los datos de temporal*/
		for (var i = 0; i <date.length; i++) {
			/*Sirve para recorrer la lista de clientes*/
			for (var j = 0; j <clients.length; j++) {
				/*El if sirve para ver si la cedula coinciden*/
				if(date[i].Identification==clients[j].Identification)
				{

					clients[j].Identification=date[i].Identification;
					clients[j].Firts_name=document.getElementById('editfirstnameclient').value;
					clients[j].Last_name=document.getElementById('editlastnameclient').value;

					clients[j].Phone=document.getElementById('editphoneclient').value;
					localStorage.setItem("Client",JSON.stringify(clients));
					window.open("http://localhost/Dise-os-de-aplicaciones-web/Dise-os-de-aplicaciones-web/proyecto2/client.html","_self").value;
				}
			}
		}

	}


};
/*Asigna los datos a los input*/
(function(){
	var date = localStorage.getItem("temporal");
	var date = JSON.parse(localStorage.getItem("temporal"));

	document.getElementById('editcedulaclient').value=date[0].Identification;
	document.getElementById('editfirstnameclient').value=date[0].Firts_name;
	document.getElementById('editlastnameclient').value=date[0].Last_name;
	document.getElementById('editphoneclient').value=date[0].Phone;

})();