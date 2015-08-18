var DELETE = DELETE ||
{
//Elimina el datos seleccionado por la persona
	delete:function()
	{
		
		datosTemporales=localStorage.getItem("Temporal");
		datosTemporales=JSON.parse(localStorage.getItem("Temporal"));

		user=localStorage.getItem("LoginUser");
		user=JSON.parse(localStorage.getItem("LoginUser"));

		for (var i = 0; i <=user.length; i++)
		{
			if(user[i].Nombre_Usuario==datosTemporales[0].UserName)
			{		 

				user.splice(i,1);
				localStorage.setItem("LoginUser",JSON.stringify(user));
				

			}


		}




	},


};
//obtiene el nombre para mostrarlo en el mensaje
(function()
{
	datosTemporales=localStorage.getItem("Temporal");
	datosTemporales=JSON.parse(localStorage.getItem("Temporal"));
	document.getElementById('name').innerHTML = datosTemporales[0].Name;

	localStorage.removeItem(datosTemporales);


})();

$( document ).ready(function() {
	$(".confirmar_yes").click(function(){

		DELETE.delete();	
	});
	$(".confirmar_no").click(function(){

		window.open("http://localhost/Dise-os-de-aplicaciones-web/Dise-os-de-aplicaciones-web/Proyecto2/user.html","_self").value;
	});
});

