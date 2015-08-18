var CREATE_CHAMBAS = CREATE_CHAMBAS || 
{
	/*Donde  se va hacerse el array*/
	Client: function (datechambas) {
		this.datechambas = datechambas ;
		
		/*Guarda los datos en el localstorage*/
		this.saveDate = function () {
			/*Como se va a llamar el key de las facturas*/
			localStorage.setItem("chambas",JSON.stringify(datechambas));

			
			
			$('.modal').attr('id','VentanaCreateChamba');

		
			
		};
	},

	/*Save es el boton de yes donde guarda la creacion de chambas*/
	save:function(client,jobDescription,date,note)
	{
		
		this.client=client;
	
		this.jobDescription=jobDescription;
		this.date=date;
		this.note=note;
		datechambas = new Array();

		/*La cantidad de key que hay en el local storage*/
		for (x = 0; x < localStorage.length; x++) {

			/*Lo obtiene en un string*/
			datechambas=localStorage.getItem(datechambas);
			/*Lo convierte en Objeto*/
			datechambas=JSON.parse(localStorage.getItem("chambas"));
		}
		if(datechambas==null)
		{
			datechambas=[];
		}

		var id=datechambas.length+1;
		/*Arreglo  de los objetos*/
		
		var information = {'Client':this.client , 'Job_Description': this.jobDescription, 'Date': this.date, 'Note':this.note,'Id':id};

		/*Se hizo un if por que el arreglo esta null*/
		
		/*Push lo que hace es mandar los datos a lo ultimo*/
		datechambas.push(information);

		
		/*Instancia donde se le envia los datos de las facturas*/
		var datos = new CREATE_CHAMBAS.Client(datechambas);

		/*donde se van a guardar los datos ya en el loca storage en su propio key*/
		datos.saveDate();
	},
	validarCampos:function(){
		/*Obtiene la informacion de los input*/
		var client=$("#createselectclientchamba").val();
		var jobDescription=$("#createjobdescriptionchamba").val();
		var date=$("#createdatechamba").val();
		var note=$("#createnotechamba").val();
		
		if(client.length==0||jobDescription==""||date==""||note==""){

			if(client.length==0){
				$(".alert-danger").text("Debes de elegir un cliente").show();

			}
			if(jobDescription==""){
				$(".alert-danger").text("El campo de Job description no puede quedar vacio").show();
				incorrectJobDescription();
			}
			else{
				correctJobDescription();
			}
			if(date==""){
				$(".alert-danger").text("Debes de elegir una fecha").show();

			}
			if(note==""){
				$(".alert-danger").text("El campo de Note no puede quedar vacio").show();
				incorrectNote();
			}
			else{
				correctNote();

			}
		}else{

			CREATE_CHAMBAS.save(client,jobDescription,date,note);
		}

	}


};
/*metodo que contiene el icono de correcto  para agregarlo en el input de JobDescription*/
function correctJobDescription(){

	$("#iconoTrabajo").remove();
	$("#createselectinvoice").parent().parent().attr("class","form-group has-success has-feedback");
	$("#createselectinvoice").parent().append("<span id='iconoTrabajo' class='glyphicon glyphicon-ok form-control-feedback'></span>");   

}
/*metodo que contiene el icono de incorrecto  para agregarlo en el input de JobDescription*/
function incorrectJobDescription(){

	$("#iconoTrabajo").remove();
	$("#createjobdescriptionchamba").parent().parent().attr("class","form-group has-error has-feedback");
	$("#createjobdescriptionchamba").parent().append("<span id='iconoTrabajo' class='glyphicon glyphicon-remove form-control-feedback'></span>");

}

/*metodo que contiene el icono de correcto  para agregarlo en el input de Note*/

function correctNote(){

	$("#iconoNote").remove();
	$("#createnotechamba").parent().parent().attr("class","form-group has-success has-feedback");
	$("#createnotechamba").parent().append("<span id='iconoNote' class='glyphicon glyphicon-ok form-control-feedback'></span>");


}
/*metodo que contiene el icono de incorrecto  para agregarlo en el input de Note*/
function incorrectNote(){
	$("#iconoNote").remove();
	$("#createnotechamba").parent().parent().attr("class","form-group has-error has-feedback");
	$("#createnotechamba").parent().append("<span id='iconoNote' class='glyphicon glyphicon-remove form-control-feedback'></span>");

}
/*Trae los nombres de los clientes*/
(function () {

	var str = ''; 

	var datosClient = localStorage.getItem("Client");

	datosClient = JSON.parse(localStorage.getItem("Client"));

	/*For acomula en el str las identificaciones de cada cliente para el datalist*/
	for (var i = 0; i < datosClient.length; ++i) {

   str += "<option  label= '" + datosClient[i].Firts_name + "' value= '" + datosClient[i].Identification + "'>";


	}

	/*Guarda en my_list una lista*/
	var my_list = document.getElementById("listaCliente");
	/*se muestra en el datalist*/
	my_list.innerHTML = str;

})();
$(document).ready(function(){


		$("#createChamba").click(function(){
			$('#myModal').modal('hide');
			CREATE_CHAMBAS.validarCampos();
		});


		$("#createChambaYes").click(function(){
		alert("entro");
			$('#myModal').modal('show');

			window.open("http://localhost/Dise-os-de-aplicaciones-web/Dise-os-de-aplicaciones-web/Proyecto2/chamba.html","_self").value;

		});



	$(".alert-danger").hide();

	
	$("#createChambasNo").click(function(){
		window.open("http://localhost/Dise-os-de-aplicaciones-web/Dise-os-de-aplicaciones-web/Proyecto2/chamba.html","_self").value;
	});
	$("#createjobdescriptionchamba").keyup(function(){
		$(".alert-danger").hide();	
		$("#createjobdescriptionchamba").parent().parent().attr("class","form-group");
		$("#iconoTrabajo").hide();

	});
	$("#createnotechamba").keyup(function(){
		$(".alert-danger").hide();	
		$("#createnotechamba").parent().parent().attr("class","form-group");
		$("#iconoNote").hide();

	});

	$("#newChamba").click(function(){
		window.open("http://localhost/Dise-os-de-aplicaciones-web/Dise-os-de-aplicaciones-web/proyecto2/create_chambas.html","_self").value;
	});
	/*Oculta la opcion de user si no es el administrador*/
	adm=localStorage.getItem("Login");
	adm = JSON.parse(localStorage.getItem("Login"));
	if(adm[0].Sesion!=1)
	{
		$(".menu_user").hide();
	}
});