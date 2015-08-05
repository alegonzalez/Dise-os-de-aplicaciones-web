var CLIENT=CLIENT||{

 capturarPosicion: function () {

  var table = document.getElementById("table_client");
  var rows = table.getElementsByTagName("tr");

  for (i = 1; i < rows.length; i++) {
    row = table.rows[i];
    row.onclick = function(){
      var cell0 = this.getElementsByTagName("td")[0];
      var cell1= this.getElementsByTagName("td")[1];
      var cell2= this.getElementsByTagName("td")[2];
      var cell3= this.getElementsByTagName("td")[3];

      var id=cell0.innerHTML;
      var firts_name = cell1.innerHTML;
      var last_Name=cell2.innerHTML;
      var phone=cell3.innerHTML;

      
      var datos=new Array();
      datos[0]=id;
      datos[1]=firts_name;
      datos[2]=last_Name;
      datos[3]=phone;
      
      var edit=new EDIT_CLIENT.datosEdit(datos);
      var send=new DELETE_CLIENT.obtenerDatos(firts_name,last_Name);
      
    };
  }


}

};


(function() {

  /*Lo obtiene en un string*/
  var datoclient = localStorage.getItem("Client");
  /*Lo convierte en Objeto*/
  datoclient = JSON.parse(localStorage.getItem("Client"));

  /*Obtiene la cantidad de filas existentes*/
  var fila = document.getElementById('table_client').rows.length;
  var table = document.getElementById('table_client');
  var contador = 0;
  contador = fila;
   /*Recorre todo el arrego y con esto nos va a permitir 
   cargar los datos del client
   */
   for (var i = 0; i <=datoclient.length-1; i++)
   {

     var row = table.insertRow(contador);
     var identification = row.insertCell(0);
     var firts_name = row.insertCell(1);
     var fullName = row.insertCell(2);
     var phone=row.insertCell(3);
     var action = row.insertCell(4);
     identification.innerHTML = datoclient[i].Identification;
     firts_name.innerHTML =datoclient[i].Firts_name;
     fullName.innerHTML =datoclient[i].Last_name;
     phone.innerHTML=datoclient[i].Phone;
     action.innerHTML ='<a href="delete_client.html" onClick="CLIENT.capturarPosicion(); DELETE_CLIENT.obtenerDatos()"><img src="https://cdn3.iconfinder.com/data/icons/streamline-icon-set-free-pack/48/Streamline-70-32.png"style="margin-left:10%;"></img></a><a href="edit_client.html" onClick="CLIENT.capturarPosicion();"><img src="https://cdn2.iconfinder.com/data/icons/windows-8-metro-style/32/edit_user.png" style="margin-left:10%;"></img></a>';
   }

 })();

