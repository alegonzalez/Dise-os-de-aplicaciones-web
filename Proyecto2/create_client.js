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
	save:function(identification,firstName,lastName,phone)
	{
		this.identification=identification;
		this.firstName=firstName;
		this.lastName=lastName;
		this.phone=phone;
		datoClient = new Array();

		/*La cantidad de key que hay en el local storage*/
		for (x = 0; x < localStorage.length-1; x++) {

			/*Lo obtiene en un string*/
			datoClient=localStorage.getItem(datoClient);
			/*Lo convierte en Objeto*/
			datoClient=JSON.parse(localStorage.getItem("Client"));
		}
		/*Arreglo  de los objetos*/
		var information = {'Identification':this.identification , 'Firts_name': this.firstName, 'Last_name': this.lastName, 'Phone':this.phone};
		
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

	/*Valida los campos de texto*/
	validarCampos:function(){
		/*Obtiene la informacion de los input*/
		this.phone=phone;
		this.identification=identification;
		var firstName=$("#createfistnameclient").val();
		var lastName=$("#createlastnameclient").val();
		var phone=$("#createphoneclient").val();
		var identification=$("#createcedulaclient").val();
		if(identification==""||firstName==""||lastName==""||phone==""){



			if(identification==""){
				incorrectIdentification();
				$(".alert-danger").text("El campo Identification no puede quedar vacio").show();
			}
			else{
				correctIdentification();
			}
			if(firstName==""){
				incorrectFirstName();
				$(".alert-danger").text("El campo Fist Name no puede quedar vacio").show();
			}else{
				correctFirsName();
			}
			if(lastName==""){
				incorrectLastName();
				$(".alert-danger").text("El campo Last Name no puede quedar vacio").show();
			}
			else{
				correctLastName();

			}
			if(phone==""){
				incorrectPhone();
				$(".alert-danger").text("El campo Phone no puede quedar vacio").show();
			}else{
				correctPhone();
			}

		}
		else{
			CLIENT.save(identification,firstName,lastName,phone);
		}
	},
	/*Valida que los campos numericos*/
	validarCamposNumericos:function()
	{
		var phone=$("#createphoneclient").val();
		var identification=$("#createcedulaclient").val();
		if(isNaN(identification)||isNaN(phone)){

			if(isNaN(identification)){
				incorrectIdentification();
				$(".alert-danger").text("El campo Identification solo adminite numero").show();
			}
			
			else if(isNaN(phone)){
				incorrectPhone();
				$(".alert-danger").text("El campo phone solo adminite numero").show();	
			}






		}

	}
};
/*metodo que contiene el icono de correcto  para agregarlo en el input de Identification*/
function correctIdentification(){

	$("#iconoIdentification").remove();
	$("#createcedulaclient").parent().parent().attr("class","form-group has-success has-feedback");
	$("#createcedulaclient").parent().append("<span id='iconoIdentification' class='glyphicon glyphicon-ok form-control-feedback'></span>");   

}
/*metodo que contiene el icono de incorrecto  para agregarlo en el input de Identification*/
function incorrectIdentification(){

	$("#iconoIdentification").remove();
	$("#createcedulaclient").parent().parent().attr("class","form-group has-error has-feedback");
	$("#createcedulaclient").parent().append("<span id='iconoIdentification' class='glyphicon glyphicon-remove form-control-feedback'></span>");

}
/*metodo que contiene el icono de correcto  para agregarlo en el input de Firs name*/
function correctFirsName(){

	$("#iconoFirstName").remove();
	$("#createfistnameclient").parent().parent().attr("class","form-group has-success has-feedback");
	$("#createfistnameclient").parent().append("<span id='iconoFirstName' class='glyphicon glyphicon-ok form-control-feedback'></span>");


}
/*metodo que contiene el icono de incorrecto  para agregarlo en el input de First name*/
function incorrectFirstName(){
	$("#iconoFirstName").remove();
	$("#createfistnameclient").parent().parent().attr("class","form-group has-error has-feedback");
	$("#createfistnameclient").parent().append("<span id='iconoFirstName' class='glyphicon glyphicon-remove form-control-feedback'></span>");

}

/*metodo que contiene el icono de correcto  para agregarlo en el input de Last Name*/
function correctLastName(){

	$("#iconoLastName").remove();
	$("#createlastnameclient").parent().parent().attr("class","form-group has-success has-feedback");
	$("#createlastnameclient").parent().append("<span id='iconoLastName' class='glyphicon glyphicon-ok form-control-feedback'></span>");


}
/*metodo que contiene el icono de incorrecto  para agregarlo en el input de Last Name*/
function incorrectLastName(){
	$("#iconoLastName").remove();
	$("#createlastnameclient").parent().parent().attr("class","form-group has-error has-feedback");
	$("#createlastnameclient").parent().append("<span id='iconoLastName' class='glyphicon glyphicon-remove form-control-feedback'></span>");
}
/*metodo que contiene el icono de correcto  para agregarlo en el input de phone*/
function correctPhone(){

	$("#iconoPhone").remove();
	$("#createphoneclient").parent().parent().attr("class","form-group has-success has-feedback");
	$("#createphoneclient").parent().append("<span id='iconoPhone' class='glyphicon glyphicon-ok form-control-feedback'></span>");


}
/*metodo que contiene el icono de incorrecto  para agregarlo en el input de repit de phone */
function incorrectPhone(){
	$("#iconoPhone").remove();
	$("#createphoneclient").parent().parent().attr("class","form-group has-error has-feedback");
	$("#createphoneclient").parent().append("<span id='iconoPhone' class='glyphicon glyphicon-remove form-control-feedback'></span>");

}

/*document.ready en la cual tiene unos eventos que se van a ejecutar dependiendo su funcion*/
$(document).ready(function(){
	$("#createClientYes").click(CLIENT.validarCampos);
	$("#createClientNo").click(function(){
		window.open("http://localhost/Dise-os-de-aplicaciones-web/Dise-os-de-aplicaciones-web/proyecto2/user.html","_self").value;
	});
	$(".alert-danger").hide();
	$("#createcedulaclient").keyup(function(){
		$(".alert-danger").hide();
		$("#iconoIdentification").hide();
		$("#createcedulaclient").parent().parent().attr("class","form-group");

	});
	$("#createfistnameclient").keyup(function(){
		$(".alert-danger").hide();
		$("#iconoFirstName").hide();
		$("#createfistnameclient").parent().parent().attr("class","form-group");
	});
	$("#createlastnameclient").keyup(function(){
		$(".alert-danger").hide();
		$("#iconoLastName").hide();
		$("#createlastnameclient").parent().parent().attr("class","form-group");
	});
	$("#createphoneclient").keyup(function(){
		$(".alert-danger").hide();
		$("#iconoPhone").hide();
		$("#createphoneclient").parent().parent().attr("class","form-group");

	});
	$("#createphoneclient").keyup(CLIENT.validarCamposNumericos);
	$("#createcedulaclient").keyup(CLIENT.validarCamposNumericos);
});