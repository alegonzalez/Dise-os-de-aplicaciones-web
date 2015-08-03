var CLIENT = CLIENT || 
{
	/*Donde  se va hacerse el array*/
	client: function (datoClient) {
		this.datoClient = datoClient ;

		/*Guarda los datos en el localstorage*/
		this.saveDate = function () {
			/*Como se va a llamar el key de los clientes*/
			localStorage.setItem("Client",JSON.stringify(datoClient));

		};
	},

    /*Save es el boton de yes donde guarda el cliente*/
	save:function()
	{

		datoClient = new Array();

		/*La cantidad de key que hay en el local storage*/
		for (x = 0; x < localStorage.length-1; x++) {

			/*Lo obtiene en un string*/
			datoClient=localStorage.getItem(datoClient);
			/*Lo convierte en Objeto*/
			datoClient=JSON.parse(localStorage.getItem("Client"));
		}

		/*Obtiene la informacion de los input*/
		var identification = document.getElementById('createcedulaclient').value;
		var firstName = document.getElementById('createfistnameclient').value;
		var lastName = document.getElementById('createlastnameclient').value;
		var phone = document.getElementById('createphoneclient').value;

		
		console.log(identification);

		/*Arreglo  de los objetos*/
		var information = {'Identification':identification , 'Firts_name': firstName, 'Last_name': lastName, 'Phone':phone};
		
		/*Se hizo un if por que el arreglo esta null*/
		if(datoClient==null)
		{
		    datoClient=[];
		}
			/*Push lo que hace es mandar los datos a lo ultimo*/
			datoClient.push(information);

			/*Instancia donde se le envia los datos de los clientes*/
			var datos = new CLIENT.client(datoClient);

			/*donde se van a guardar los datos ya en el loca storage en su propio key*/
			datos.saveDate();
	},



};