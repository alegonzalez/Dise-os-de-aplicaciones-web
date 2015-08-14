var INVOICE = INVOICE ||
{
	/*Donde  se va hacerse el array*/
	Client: function (datoInvoice) {
		this.datoInvoice = datoInvoice;

		/*Guarda los datos en el localstorage*/
		this.saveDate = function () {
			/*Como se va a llamar el key de las facturas*/
			localStorage.setItem("Invoice", JSON.stringify(datoInvoice));
			window.open("http://localhost/Dise-os-de-aplicaciones-web/Dise-os-de-aplicaciones-web/proyecto2/invoice.html","_self").value;
		};
	},
	/*Save es el boton de yes donde guarda la factura*/
	save: function (invoice,amont,client,jobDescription,date)
	{
		this.invoice=invoice;
		this.amont=amont;
		this.jobDescription=jobDescription;
		this.date=date;
		this.client=client;
		datoInvoice = new Array();

		/*La cantidad de key que hay en el local storage*/
		for (x = 0; x < localStorage.length - 1; x++) {

			/*Lo obtiene en un string*/
			datoInvoice = localStorage.getItem(datoInvoice);
			/*Lo convierte en Objeto*/
			datoInvoice = JSON.parse(localStorage.getItem("Invoice"));
		}






		/*Arreglo  de los objetos*/
		var information = {'invoice':this.invoice,'Client': this.client, 'Job_Description': this.jobDescription, 'Date': this.date, 'Amont': this.amont};

		/*Se hizo un if por que el arreglo esta null*/
		if (datoInvoice == null)
		{
			datoInvoice = [];
		}
		/*Push lo que hace es mandar los datos a lo ultimo*/
		datoInvoice.push(information);


		/*Instancia donde se le envia los datos de las facturas*/
		var datos = new INVOICE.Client(datoInvoice);

		/*donde se van a guardar los datos ya en el loca storage en su propio key*/
		datos.saveDate();
	},

	validarCamposVacios:function(invoice){
		/*Obtiene la informacion de los input*/
		this.invoice=invoice;
		var amont=$("#createamontinvoice").val();
		var client=$("#createselectclient").val();
		var jobDescription=$("#createjobdescriptioninvoice").val();
		var date=$("#createdateinvoice").val();
		
		if(this.invoice==""||client.length==0||jobDescription=="" ||date==""||amont==""){
			if(this.invoice==""){
				$(".alert-danger").text("El campo Number Invoice no puede quedar vacio").show();
				incorrectNumbreInvoice();
			}
			else{
				correctNumberInvoice();
			}
			if(client.length==0){
				$(".alert-danger").text("	").show();
				

			}
			
			if(jobDescription==""){
				$(".alert-danger").text("El campo Job Description no puede quedar vacio").show();
				incorrectJobDescription();
			}
			else{
				correctJobDescription();
			}
			if(date==""){
				$(".alert-danger").text("Debes de elegir una fecha").show();
				
			}
			if(amont==""){
				$(".alert-danger").text("El campo Amount no puede quedar vacio y ademas solo numeros debes de colocar").show();
				incorrectAmount();
			}else{
				correctAmount();
			}

		}else{
			
			INVOICE.save(invoice,amont,client,jobDescription,date);
		}

	},
	validarCamposNumericos:function()
	{
		
		var invoice=$("#createselectinvoice").val();
		
		

		if(isNaN(invoice)){
			incorrectNumbreInvoice();
			$(".alert-danger").text("El campo Invoice# solo adminite numero").show();
		}else{
			INVOICE.validarCamposVacios(invoice);
		}
	}

};
/*metodo que contiene el icono de correcto  para agregarlo en el input de Identification*/
function correctNumberInvoice(){

	$("#iconoNumeroFactura").remove();
	$("#createselectinvoice").parent().parent().attr("class","form-group has-success has-feedback");
	$("#createselectinvoice").parent().append("<span id='iconoNumeroFactura' class='glyphicon glyphicon-ok form-control-feedback'></span>");   

}
/*metodo que contiene el icono de incorrecto  para agregarlo en el input de Identification*/
function incorrectNumbreInvoice(){

	$("#iconoNumeroFactura").remove();
	$("#createselectinvoice").parent().parent().attr("class","form-group has-error has-feedback");
	$("#createselectinvoice").parent().append("<span id='iconoNumeroFactura' class='glyphicon glyphicon-remove form-control-feedback'></span>");

}

/*metodo que contiene el icono de correcto  para agregarlo en el input de Firs name*/

function correctJobDescription(){

	$("#iconoDescripcionTrabajo").remove();
	$("#createjobdescriptioninvoice").parent().parent().attr("class","form-group has-success has-feedback");
	$("#createjobdescriptioninvoice").parent().append("<span id='iconoDescripcionTrabajo' class='glyphicon glyphicon-ok form-control-feedback'></span>");


}
/*metodo que contiene el icono de incorrecto  para agregarlo en el input de First name*/
function incorrectJobDescription(){
	$("#iconoDescripcionTrabajo").remove();
	$("#createjobdescriptioninvoice").parent().parent().attr("class","form-group has-error has-feedback");
	$("#createjobdescriptioninvoice").parent().append("<span id='iconoDescripcionTrabajo' class='glyphicon glyphicon-remove form-control-feedback'></span>");

}


/*metodo que contiene el icono de correcto  para agregarlo en el input de Firs name*/

function correctAmount(){

	$("#iconoSaldo").remove();
	$("#createamontinvoice").parent().parent().attr("class","form-group has-success has-feedback");
	$("#createamontinvoice").parent().append("<span id='iconoSaldo' class='glyphicon glyphicon-ok form-control-feedback'></span>");


}
/*metodo que contiene el icono de incorrecto  para agregarlo en el input de First name*/
function incorrectAmount(){
	$("#iconoSaldo").remove();
	$("#createamontinvoice").parent().parent().attr("class","form-group has-error has-feedback");
	$("#createamontinvoice").parent().append("<span id='iconoSaldo' class='glyphicon glyphicon-remove form-control-feedback'></span>");

}
/*Trae los nombres de los clientes*/
(function(){

	var str = ''; 

	var datosClient = localStorage.getItem("Client");

	datosClient = JSON.parse(localStorage.getItem("Client"));

	/*For acomula en el str las identificaciones de cada cliente para el datalist*/
	for (var i = 0; i < datosClient.length; ++i) {
		str += '<option value="' + datosClient[i].Firts_name + '" />'; 

	}

	/*Guarda en my_list una lista*/
	var my_list = document.getElementById("listaCliente");
	/*se muestra en el datalist*/
	my_list.innerHTML = str;

})();
$(document).ready(function(){
	$("#createInvoiceNo").click(function(){
		window.open("http://localhost/Dise-os-de-aplicaciones-web/Dise-os-de-aplicaciones-web/proyecto2/invoice.html","_self").value;
	});
	$(".alert-danger").hide();

	$("#createInvoiceYes").click(function(){
		
		INVOICE.validarCamposNumericos();

	});
	$("#createselectinvoice").keyup(function(){
		$(".alert-danger").hide();	
		$("#createselectinvoice").parent().parent().attr("class","form-group");
		$("#iconoNumeroFactura").hide();

	});
	$("#createjobdescriptioninvoice").keyup(function(){
		$(".alert-danger").hide();	
		$("#createjobdescriptioninvoice").parent().parent().attr("class","form-group");
		$("#iconoDescripcionTrabajo").hide();

	});

	$("#createamontinvoice").keyup(function(){
		$(".alert-danger").hide();	
		$("#createamontinvoice").parent().parent().attr("class","form-group");
		$("#iconoSaldo").hide();

	});
	/*Oculta la opcion de user si no es el administrador*/
	adm=localStorage.getItem("Login");
	adm = JSON.parse(localStorage.getItem("Login"));
	if(adm[0].Sesion!=1)
	{
		$(".menu_user").hide();
	}
});
