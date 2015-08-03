
var USER = USER || 
{
	/*Donde  se va hacerse el array*/
	user: function (datoUser) {
		this.datoUser = datoUser ;

		/*Guarda los datos en el localstorage*/
		this.saveDate = function () {
			/*Como se va a llamar el key de los usuarios*/
			localStorage.setItem("LoginUser",  JSON.stringify(datoUser));

		};
	},

    /*Save es el boton de yes donde guarda el usuario*/
	save:function()
	{

		datoUser = new Array();

		/*La cantidad de key que hay en el local storage*/
		for (x = 0; x < localStorage.length-1; x++) {

			/*Lo obtiene en un string*/
			datoUser=localStorage.getItem(datoUser);
			/*Lo convierte en Objeto*/
			datoUser=JSON.parse(localStorage.getItem("LoginUser"));
		}

		/*Obtiene la informacion de los input*/
		var name = document.getElementById('name').value;
		var usuario = document.getElementById('nameUser').value;
		var contrasena = document.getElementById('pass').value;
		var rContrasena = document.getElementById('rPass').value;

		/*Arreglo  de los objetos*/
		var information = {'User': name, 'Nombre_Usuario': usuario, 'Password': contrasena, 'rContrasena':rContrasena};
		
		/*Push lo que hace es mandar los datos a lo ultimo*/
		datoUser.push(information);

		/*Instancia donde se le envia los datos del usuarios*/
		var datos = new USER.user(datoUser);

		/*donde se van a guardar los datos ya en el loca storage en su propio key*/
		datos.saveDate();

	},



};