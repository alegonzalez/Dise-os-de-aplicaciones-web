var EDIT_CLIENT=EDIT_CLIENT||{
datosEdit:function(datos){
	this.datos=datos;
alert("hello wod");
	document.getElementById('editcedulaclient').innerHTML="hoal";
	document.getElementById('editfirstnameclient').value=this.datos[1];
	document.getElementById('editlastnameclient').value=this.datos[2];
	document.getElementById('editphoneclient').value=this.datos[3];
	
}


};