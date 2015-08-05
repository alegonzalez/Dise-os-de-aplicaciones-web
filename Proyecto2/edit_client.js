var EDIT_CLIENT=EDIT_CLIENT||{
	datosEdit:function(){

		var date = localStorage.getItem("temporal");
		var date = JSON.parse(localStorage.getItem("temporal"));

		var clients=localStorage.getItem("Client");
		var clients = JSON.parse(localStorage.getItem("Client"));
		

		for (var i = 0; i <date.length; i++) {
			for (var j = 0; j <clients.length; j++) {

				if(date[i].Identification==clients[j].Identification)
				{
					
					clients[j].Identification=date[i].Identification;
					clients[j].Firts_name=document.getElementById('editfirstnameclient').value;
					clients[j].Last_name=document.getElementById('editlastnameclient').value;
					alert(clients[j].Last_name);
					clients[j].Phone=document.getElementById('editphoneclient').value;
					localStorage.setItem("Client",JSON.stringify(clients));
					window.open("http://localhost/Dise-os-de-aplicaciones-web/Dise-os-de-aplicaciones-web/proyecto2/client.html","_self").value;
				}
			}
		}

	}


};
(function(){
	var date = localStorage.getItem("temporal");
	var date = JSON.parse(localStorage.getItem("temporal"));

	document.getElementById('editcedulaclient').value=date[0].Identification;
	document.getElementById('editfirstnameclient').value=date[0].Firts_name;
	document.getElementById('editlastnameclient').value=date[0].Last_name;
	document.getElementById('editphoneclient').value=date[0].Phone;

})();