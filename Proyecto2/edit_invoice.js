var EDIT_INVOICE=EDIT_INVOICE||{
	/*Esta funcion sirve para rrecorrer los datos para modificarlos
	*/
	datosEdit:function(){

		var date = localStorage.getItem("Temporal");
		var date = JSON.parse(localStorage.getItem("Temporal"));

		var factura=localStorage.getItem("Invoice");
		var factura = JSON.parse(localStorage.getItem("Invoice"));



		/*Sirve para recorrer los datos de temporal*/
		for (var i = 0; i <date.length; i++) {
			/*Sirve para recorrer la lista de clientes*/
			for (var j = 0; j <factura.length; j++) {
				/*El if sirve para ver si la cedula coinciden*/
				if(date[i].NumberInvoice==factura[j].invoice)
				{
					
					factura[j].invoice=date[i].NumberInvoice;
					factura[j].Client= document.getElementById('editselectclientinvoice').value;	    
					factura[j].Job_Description=document.getElementById('editjobdescriptioninvoice').value;
					factura[j].Date=document.getElementById('editdateinvoice').value;
					factura[j].Amont=document.getElementById('editamontinvoice').value;
					localStorage.setItem("Invoice",JSON.stringify(factura));
					window.open("http://localhost/Dise-os-de-aplicaciones-web/Dise-os-de-aplicaciones-web/proyecto2/invoice.html","_self").value;
				}
			}
		}

	}

	

};
/*Asigna los datos a los input*/
(function(){
	var date = localStorage.getItem("Temporal");
	var date = JSON.parse(localStorage.getItem("Temporal"));
	document.getElementById('editNumberFactura').value=date[0].NumberInvoice;
	document.getElementById('listaCliente').value=date[0].Client;
	document.getElementById('editjobdescriptioninvoice').value=date[0].JobDescription;
	document.getElementById('editdateinvoice').value=date[0].Date;
	document.getElementById('editamontinvoice').value=date[0].Amount;
	
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
$("#newInvoiceEdit").click(function(){
	window.open("http://localhost/Dise-os-de-aplicaciones-web/Dise-os-de-aplicaciones-web/proyecto2/create_invoice.html","_self").value;

});