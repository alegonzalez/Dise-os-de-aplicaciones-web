var DELETE = DELETE ||
{

	delete:function()
	{

		datosTemporales=localStorage.getItem("Temporal");
		datosTemporales=JSON.parse(localStorage.getItem("Temporal"));

		client=localStorage.getItem("Client");
		client=JSON.parse(localStorage.getItem("Client"));

		for (var i = 0; i <client.length; i++)
		{
			if(client[i].Identification==datosTemporales[0].Identification)
			{	
				client.splice(i,1);
				localStorage.setItem("Client",JSON.stringify(client));

			}

		}


	},
	
};

$( document ).ready(function() {
	$(".confirmar_yes").click(function(){
		DELETE.delete();
	});
	
});


(function()
{
	datosTemporales=localStorage.getItem("Temporal");
	datosTemporales=JSON.parse(localStorage.getItem("Temporal"));
	document.getElementById('name').innerHTML = datosTemporales[0].Firts_name  + "   " +  datosTemporales[0].Last_name ;
	/*Oculta la opcion de user si no es el administrador*/
	adm=localStorage.getItem("Login");
	adm = JSON.parse(localStorage.getItem("Login"));
	if(adm[0].Sesion!=1)
	{
		$(".menu_user").hide();
	}

})();

$(document).ready(function(){

$("#deleteClientNo").click(function(){

window.open("http://localhost/Dise-os-de-aplicaciones-web/Dise-os-de-aplicaciones-web/proyecto2/client.html","_self").value;
});
$("#aceptarDeleteClient").click(function(){
window.open("http://localhost/Dise-os-de-aplicaciones-web/Dise-os-de-aplicaciones-web/proyecto2/client.html","_self").value;
});
});
