
var DELETE = DELETE ||
{
	//Elimina la chamba
	delete:function()
	{

		datosTemporales=localStorage.getItem("Temporal");
		datosTemporales=JSON.parse(localStorage.getItem("Temporal"));

		chamba=localStorage.getItem("chambas");
		chamba=JSON.parse(localStorage.getItem("chambas"));

		var dateClient=localStorage.getItem("Client");
		dateClient=JSON.parse(localStorage.getItem("Client"));



		for (var j = 0; j <dateClient.length; j++) {

			if(dateClient[j].Firts_name==datosTemporales[0].client)
			{
				for (var i = 0; i <chamba.length; i++) {
					if(datosTemporales[0].job_Description==chamba[i].Job_Description
						&& datosTemporales[0].date==chamba[i].Date
						&& datosTemporales[0].note==chamba[i].Note)
					{


						chamba.splice(i,1);
						localStorage.setItem("chambas",JSON.stringify(chamba));
						window.open("http://localhost/Dise-os-de-aplicaciones-web/Dise-os-de-aplicaciones-web/Proyecto2/chamba.html","_self").value;

					}
				}

			}else if(dateClient[j].Identification==datosTemporales[0].client)
			{
				chamba.splice(i,1);
				localStorage.setItem("chambas",JSON.stringify(chamba));
				window.open("http://localhost/Dise-os-de-aplicaciones-web/Dise-os-de-aplicaciones-web/Proyecto2/chamba.html","_self").value;


			}

		}

	},
};
//obtiene el nombre para mostrarlo en el mensaje
$( document ).ready(function() {

	$(".confirmar_yes").click(function(){

		DELETE.delete();
	});


	$(".confirmar_no").click(function(){
		window.open("http://localhost/Dise-os-de-aplicaciones-web/Dise-os-de-aplicaciones-web/Proyecto2/chamba.html","_self").value;		
	});


	$("#deleteChambaAccept").click(function(){
		window.open("http://localhost/Dise-os-de-aplicaciones-web/Dise-os-de-aplicaciones-web/Proyecto2/chamba.html","_self").value;
	});
	
});

$(document).ready(function(){
	datosTemporales=localStorage.getItem("Temporal");
	datosTemporales=JSON.parse(localStorage.getItem("Temporal"));

	var dateClient=localStorage.getItem("Client");
	dateClient=JSON.parse(localStorage.getItem("Client"));


	for (var i = 0; i < dateClient.length; i++) {
		
		if(dateClient[i].Identification==datosTemporales[0].client)
		{

			document.getElementById('name').innerHTML = dateClient[0].Firts_name;

		}
	};

	
	
	/*Oculta la opcion de user si no es el administrador*/
	adm=localStorage.getItem("Login");
	adm = JSON.parse(localStorage.getItem("Login"));
	if(adm[0].Sesion!=1)
	{
		$(".menu_user").hide();
	}
});



