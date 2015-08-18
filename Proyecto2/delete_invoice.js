var DELETE = DELETE ||
{

	delete:function()
	{
		
		datosTemporales=localStorage.getItem("Temporal");
		datosTemporales=JSON.parse(localStorage.getItem("Temporal"));

		datoinvoice=localStorage.getItem("Invoice");
		datoinvoice=JSON.parse(localStorage.getItem("Invoice"));

		for (var i = 0; i < datoinvoice.length; i++)
		{
			if(datoinvoice[i].invoice==datosTemporales[0].NumberInvoice)
			{	

				
				datoinvoice.splice(i,1);
				localStorage.setItem("Invoice",JSON.stringify(datoinvoice));
				

			}

		}



	},

};

$( document ).ready(function() {
	$(".confirmar_yes").click(function(){

		DELETE.delete();
	});
	$("#deleteInvoiceNo").click(function(){
		window.open("http://localhost/Dise-os-de-aplicaciones-web/Dise-os-de-aplicaciones-web/Proyecto2/invoice.html","_self").value;
	});

});

(function()
{

	datosTemporales=localStorage.getItem("Temporal");
	datosTemporales=JSON.parse(localStorage.getItem("Temporal"));

	document.getElementById('name').innerHTML = datosTemporales[0].Client;
	
	/*Oculta la opcion de user si no es el administrador*/
	adm=localStorage.getItem("Login");
	adm = JSON.parse(localStorage.getItem("Login"));
	if(adm[0].Sesion!=1)
	{
		$(".menu_user").hide();
	}

})();

