var CREATE_CHAMBAS = CREATE_CHAMBAS || 
{
	/*Donde  se va hacerse el array*/
	client: function (datechambas) {
		this.datechambas = datechambas ;

		/*Guarda los datos en el localstorage*/
		this.saveDate = function () {
			/*Como se va a llamar el key de las facturas*/
			localStorage.setItem("chambas",JSON.stringify(datechambas));

		};
	},

	/*Save es el boton de yes donde guarda la creacion de chambas*/
	save:function()
	{

		datechambas = new Array();

		/*La cantidad de key que hay en el local storage*/
		for (x = 0; x < localStorage.length-1; x++) {

			/*Lo obtiene en un string*/
			datechambas=localStorage.getItem(datechambas);
			/*Lo convierte en Objeto*/
			datechambas=JSON.parse(localStorage.getItem("chambas"));
		}

		/*Obtiene la informacion de los input*/
		var client = document.getElementById('createselectclientchamba').value;
		var jobDescription = document.getElementById('createjobdescriptionchamba').value;
		var date = document.getElementById('createdatechamba').value;
		var note = document.getElementById('createnotechamba').value;
		/*Arreglo  de los objetos*/
		var information = {'Client':client , 'Job Description': jobDescription, 'Date': date, 'Note':note};
		
		/*Se hizo un if por que el arreglo esta null*/
		if(datechambas==null)
		{
			datechambas=[];
		}
		/*Push lo que hace es mandar los datos a lo ultimo*/
		datechambas.push(information);

		
		/*Instancia donde se le envia los datos de las facturas*/
		var datos = new INVOICE.client(datechambas);

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