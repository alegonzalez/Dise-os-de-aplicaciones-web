
var DELETE = DELETE ||
{
	delete:function()
	{

		datosTemporales=localStorage.getItem("Temporal");
		datosTemporales=JSON.parse(localStorage.getItem("Temporal"));

		chamba=localStorage.getItem("chambas");
		chamba=JSON.parse(localStorage.getItem("chambas"));

		for (var i = 0; i <=chamba.length; i++)
		{
			if(chamba[i].Client==datosTemporales[0].client)
			{	
				chamba.splice(i,1);
				localStorage.setItem("chambas",JSON.stringify(chamba));

			}

		}

	},

	evento:function(){
		$(".confirmar_yes").click(DELETE.delete());
	}
};

$( document ).ready(function() {
	DELETE.evento();
});

(function()
{
	datosTemporales=localStorage.getItem("Temporal");
	datosTemporales=JSON.parse(localStorage.getItem("Temporal"));
	document.getElementById('name').innerHTML = datosTemporales[0].client;
/*Oculta la opcion de user si no es el administrador*/
	adm=localStorage.getItem("Login");
	adm = JSON.parse(localStorage.getItem("Login"));
	if(adm[0].Sesion!=1)
	{
		$(".menu_user").hide();
	}

})();


