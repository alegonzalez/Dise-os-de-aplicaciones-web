var EDIT_CHAMBA=EDIT_CHAMBA||{
	/*Esta funcion sirve para rrecorrer los datos para modificarlos
	*/
	datosEdit:function(){

		var date = localStorage.getItem("Temporal");
		var date = JSON.parse(localStorage.getItem("Temporal"));

		var chamba=localStorage.getItem("chambas");
		var chamba = JSON.parse(localStorage.getItem("chambas"));


		for (var i = 0; i <date.length; i++) {
			/*Sirve para recorrer la lista de clientes*/
			for (var j = 0; j <=chamba.length; j++) {
				/*El if sirve para ver si la cedula coinciden*/
				

				if(date[i].id==chamba[j].Id)
				{
					
					chamba[j].Client= document.getElementById('editselectclientchamba').value;	    
					chamba[j].Job_Description=document.getElementById('edirjobdescriptionchamba').value;
					chamba[j].Date=document.getElementById('editdatechamba').value;
					chamba[j].Note=document.getElementById('editnotechamba').value;
					localStorage.setItem("chambas",JSON.stringify(chamba));
					
				}
			}
		}

	}

	

};
/*Asigna los datos a los input*/
(function(){
	var date = localStorage.getItem("Temporal");
	var date = JSON.parse(localStorage.getItem("Temporal"));
	var dateChamba = localStorage.getItem("chambas");
	var dateChamba = JSON.parse(localStorage.getItem("chambas"));
	document.getElementById('listaCliente').value=date[0].client;
	document.getElementById('edirjobdescriptionchamba').value=date[0].job_Description;
	document.getElementById('editdatechamba').value=date[0].date;
	document.getElementById('editnotechamba').value=date[0].note;



	for (var i = 0; i <dateChamba.length; i++) {

		alert(date[0].client);

		if(date[0].client==dateChamba[i].Client && date[0].job_Description==dateChamba[i].Job_Description && date[0].date==dateChamba[i].Date && date[0].note==dateChamba[i].Note){

			date[0].id=dateChamba[i].Id;
			localStorage.setItem("Temporal",JSON.stringify(date));
		}

	}
	var str = ''; 


	var datosClient = localStorage.getItem("Client");

	datosClient = JSON.parse(localStorage.getItem("Client"));

	/*For acomula en el str las identificaciones de cada cliente para el datalist*/
	for (var i = 0; i < datosClient.length; ++i) {
		str += '<option value="' + datosClient[i].Identification + '" />'; 

	}

	/*Guarda en my_list una lista*/
	var my_list = document.getElementById("listaCliente");
	/*se muestra en el datalist*/
	my_list.innerHTML = str;
	/*Oculta la opcion de user si no es el administrador*/
	adm=localStorage.getItem("Login");
	adm = JSON.parse(localStorage.getItem("Login"));
	if(adm[0].Sesion!=1)
	{
		$(".menu_user").hide();
	}
})();

$("#newChambasEdit").click(function(){
	window.open("http://localhost/Dise-os-de-aplicaciones-web/Dise-os-de-aplicaciones-web/proyecto2/create_chambas.html","_self").value;
});