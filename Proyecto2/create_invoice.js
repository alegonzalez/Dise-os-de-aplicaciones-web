var INVOICE = INVOICE ||
{
	/*Donde  se va hacerse el array*/
	client: function (datoInvoice) {
		this.datoInvoice = datoInvoice;

		/*Guarda los datos en el localstorage*/
		this.saveDate = function () {
			/*Como se va a llamar el key de las facturas*/
			localStorage.setItem("Invoice", JSON.stringify(datoInvoice));

		};
	},
	/*Save es el boton de yes donde guarda la factura*/
	save: function ()
	{

		datoInvoice = new Array();

		/*La cantidad de key que hay en el local storage*/
		for (x = 0; x < localStorage.length - 1; x++) {

			/*Lo obtiene en un string*/
			datoInvoice = localStorage.getItem(datoInvoice);
			/*Lo convierte en Objeto*/
			datoInvoice = JSON.parse(localStorage.getItem("Invoice"));
		}

		/*Obtiene la informacion de los input*/
		var client = document.getElementById('createselectclient').value;
		var jobDescription = document.getElementById('createjobdescriptioninvoice').value;
		var date = document.getElementById('createdateinvoice').value;
		var amont = document.getElementById('createamontinvoice').value;




		/*Arreglo  de los objetos*/
		var information = {'Client': client, 'Job Description': jobDescription, 'Date': date, 'Amont': amont};

		/*Se hizo un if por que el arreglo esta null*/
		if (datoInvoice == null)
		{
			datoInvoice = [];
		}
		/*Push lo que hace es mandar los datos a lo ultimo*/
		datoInvoice.push(information);


		/*Instancia donde se le envia los datos de las facturas*/
		var datos = new INVOICE.client(datoInvoice);

		/*donde se van a guardar los datos ya en el loca storage en su propio key*/
		datos.saveDate();
	},
};
/*Trae los nombres de los clientes*/
(function () {

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

})();
