
var USER = USER || 
{
	/*Donde  se va hacerse el array*/
	user: function (datoUser) {
		this.datoUser = datoUser ;

		/*Guarda los datos en el localstorage*/
		this.saveDate = function () {
			/*Como se va a llamar el key de los usuarios*/
			localStorage.setItem("LoginUser",  JSON.stringify(datoUser));
			USER.cleanInput();
			window.open("http://localhost/Dise-os-de-aplicaciones-web/Dise-os-de-aplicaciones-web/proyecto2/user.html","_self").value;
		};
	},

	/*Save es el boton de yes donde guarda el usuario*/
	save:function(name,usuario,contrasena,rContrasena)
	{
		this.name=name;
		this.usuario=usuario;
		this.contrasena=contrasena;
		this.rContrasena=rContrasena;

		datoUser = new Array();

		/*La cantidad de key que hay en el local storage*/
		
		for (x = 0; x < localStorage.length-1; x++) {

			/*Lo obtiene en un string*/
			datoUser=localStorage.getItem(datoUser);
			/*Lo convierte en Objeto*/
			datoUser=JSON.parse(localStorage.getItem("LoginUser"));
		}

		
		var sesion=0;
		/*Arreglo  de los objetos*/
		var information = {'User': this.name, 'Nombre_Usuario': this.usuario, 'Password': this.contrasena,'Sesion':sesion};

		if (datoUser == null)
		{
			datoUser = [];
		}
		
		/*Push lo que hace es mandar los datos a lo ultimo*/
		datoUser.push(information);

		/*Instancia donde se le envia los datos del usuarios*/
		var datos = new USER.user(datoUser);

		/*donde se van a guardar los datos ya en el loca storage en su propio key*/
		datos.saveDate();

	},
	/*Metodo valida de que todos los campos no esten vacios y ademas de que la contraseña coincidan en los 
	dos input de password y repit password*/
	validarCamposUser:function(){

		/*Obtiene la informacion de los input*/
		var name = document.getElementById('name').value;
		var usuario = document.getElementById('nameUser').value;
		var contrasena = document.getElementById('pass').value;
		var rContrasena = document.getElementById('rPass').value;
		if(name==""||usuario==""||contrasena==""||rContrasena==""){
			if(name==""){
				incorrectName();
				$(".alert-danger").text("Debes llenar el campo Name").show();
			}else{
				correctName();

			}
			if(usuario==""){
				incorrectNameUser();
				$(".alert-danger").text("Debes llenar el campo Nombre de usuario").show();
			}
			else{
				correctNameUser();

			}
			if(contrasena==""){
				incorrectPassword();
				$(".alert-danger").text("Debes llenar el campo contraseña").show();
			}
			else{
				correctPassword();
			}
			if(rContrasena==""){
				incorrectRepitPassword();
				$(".alert-danger").text("Debes llenar el campo repetir contraseña, con la misma que coloco en el campo anterior").show();
			}else{
				correctRepitPassword();
			}

		}else if(contrasena==rContrasena){
			USER.save(name,usuario,contrasena,rContrasena);

		}
		else{

			incorrectPassword();
			incorrectRepitPassword();
			$(".alert-danger").text("Las contraseñas no coinciden por favor escribir la misma contraseña en ambos campos").show();
		}




	},
	//Valida si ya existe un usuario en el localstorage
	validarUsuario:function(){
		
		var user=new Array();
		var usuario=$("#nameUser").val();
		user=localStorage.getItem("LoginUser");
		user=JSON.parse(localStorage.getItem("LoginUser"));
		contador=0;
		for (var i = 0; i < user.length; i++) {
			if(usuario==user[i].Nombre_Usuario){
				$(".alert-danger").text("El usuario ingresado ya existe por favor ingrese otro").show();	
				incorrectNameUser();
				contador=1;
				break;
			}
		}
		if(contador!=1){
			USER.validarCamposUser();
		}

	},
	/*Limpia los campos de texto*/
	cleanInput:function(){
		$("#name").val("");
		$("#nameUser").val("");
		$("#pass").val("");
		$("#rPass").val("");
	}


};
/*metodo que contiene el icono de correcto  para agregarlo en el input de Name*/
function correctName(){

	$("#iconoName").remove();
	$("#name").parent().parent().attr("class","form-group has-success has-feedback");
	$("#name").parent().append("<span id='iconoName' class='glyphicon glyphicon-ok form-control-feedback'></span>");   

}
/*metodo que contiene el icono de incorrecto  para agregarlo en el input de Name*/
function incorrectName(){

	$("#iconoName").remove();
	$("#name").parent().parent().attr("class","form-group has-error has-feedback");
	$("#name").parent().append("<span id='iconoName' class='glyphicon glyphicon-remove form-control-feedback'></span>");

}
/*metodo que contiene el icono de correcto  para agregarlo en el input de Name user*/
function correctNameUser(){

	$("#iconoNameUser").remove();
	$("#nameUser").parent().parent().attr("class","form-group has-success has-feedback");
	$("#nameUser").parent().append("<span id='iconoNameUser' class='glyphicon glyphicon-ok form-control-feedback'></span>");


}
/*metodo que contiene el icono de incorrecto  para agregarlo en el input de Name user*/
function incorrectNameUser(){
	$("#iconoNameUser").remove();
	$("#nameUser").parent().parent().attr("class","form-group has-error has-feedback");
	$("#nameUser").parent().append("<span id='iconoNameUser' class='glyphicon glyphicon-remove form-control-feedback'></span>");

}

/*metodo que contiene el icono de correcto  para agregarlo en el input de password*/
function correctPassword(){

	$("#iconPass1").remove();
	$("#pass").parent().parent().attr("class","form-group has-success has-feedback");
	$("#pass").parent().append("<span id='iconPass1' class='glyphicon glyphicon-ok form-control-feedback'></span>");


}
/*metodo que contiene el icono de incorrecto  para agregarlo en el input de password*/
function incorrectPassword(){
	$("#iconPass1").remove();
	$("#pass").parent().parent().attr("class","form-group has-error has-feedback");
	$("#pass").parent().append("<span id='iconPass1' class='glyphicon glyphicon-remove form-control-feedback'></span>");
}
/*metodo que contiene el icono de correcto  para agregarlo en el input de repit password*/
function correctRepitPassword(){

	$("#iconoRepPass").remove();
	$("#rPass").parent().parent().attr("class","form-group has-success has-feedback");
	$("#rPass").parent().append("<span id='iconoRepPass' class='glyphicon glyphicon-ok form-control-feedback'></span>");


}
/*metodo que contiene el icono de incorrecto  para agregarlo en el input de repit password*/
function incorrectRepitPassword(){
	$("#iconoRepPass").remove();
	$("#rPass").parent().parent().attr("class","form-group has-error has-feedback");
	$("#rPass").parent().append("<span id='iconoRepPass' class='glyphicon glyphicon-remove form-control-feedback'></span>");

}



/*Carga el documento y adentro va a ver un evento click que va hacer cuando la persona de click al boton de yes*/
$(document).ready(function(){

	$("#createUserYes").click(function(){
		
		USER.validarUsuario();
		
		

	});

	$("#createUserNo").click(function(){

		window.open("http://localhost/Dise-os-de-aplicaciones-web/Dise-os-de-aplicaciones-web/proyecto2/user.html","_self").value;
	});
	$("#nuevoUsuario").click(function(){
		window.open("http://localhost/Dise-os-de-aplicaciones-web/Dise-os-de-aplicaciones-web/Proyecto2/user_create.html","_self").value;
	});
	$(".alert-danger").hide();
	/*Oculta el mensaje al precionar en un input*/
	$("#name").keyup(function(){
		$(".alert-danger").hide();
		$("#iconoName").hide();
		$("#name").parent().parent().attr("class","form-group");
	});
	$("#nameUser").keyup(function(){
		$(".alert-danger").hide();
		$("#iconoNameUser").hide();
		$("#nameUser").parent().parent().attr("class","form-group");
	});
	$("#pass").keyup(function(){
		$(".alert-danger").hide();
		$("#iconPass1").hide();
		$("#pass").parent().parent().attr("class","form-group");
	});
	$("#rPass").keyup(function(){
		$(".alert-danger").hide();
		$("#iconoRepPass").hide();
		$("#rPass").parent().parent().attr("class","form-group");
	});

});
