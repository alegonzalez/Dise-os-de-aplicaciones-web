var DELETE = DELETE ||
{

	delete:function()
	{
		alert("asdasd");
		datosTemporales=localStorage.getItem("Temporal");
		datosTemporales=JSON.parse(localStorage.getItem("Temporal"));

		user=localStorage.getItem("LoginUser");
		user=JSON.parse(localStorage.getItem("LoginUser"));

		for (var i = 0; i <=user.length; i++)
		{
			if(user[i].Nombre_Usuario==datosTemporales[0].UserName)
			{	
				alert("Hola");		 

				user.splice(i,1);
				torage.setItem("LoginUser",JSON.stringify(user));
				

			}


		}

	


	},
	evento:function(){

		$(".confirmar_yes").click(DELETE.delete());
	}

};
(function()
{
	datosTemporales=localStorage.getItem("Temporal");
	datosTemporales=JSON.parse(localStorage.getItem("Temporal"));
	document.getElementById('name').innerHTML = datosTemporales[0].Name;

	localStorage.removeItem(datosTemporales);


})();

$( document ).ready(function() {
  DELETE.evento();
});

