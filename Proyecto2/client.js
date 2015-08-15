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

      var obtener_Datos=new CLIENT.localStorageTemporal(id,firts_name,last_Name,phone);

      
      
    }
  }


},

localStorageTemporal :function(id,firts_name,last_Name,phone)
{

  var datosTemporales=new Array();

  this.id=id;
  this.firts_name=firts_name;
  this.last_Name=last_Name;
  this.phone=phone;

  var date={'Identification':this.id,'Firts_name':this.firts_name,'Last_name':this.last_Name,"Phone":this.phone};
  
  datosTemporales.push(date);

  localStorage.setItem("Temporal",JSON.stringify(datosTemporales));

},


};

function obtenerInformacion(option)
{

  var datosClient = localStorage.getItem("Client");
  datosClient = JSON.parse(localStorage.getItem("Client"));

  var id=document.getElementById('clientList').value;

  $("#date_client").html("");

// Find a <table> element with id="myTable":
var table = document.getElementById("date_client");

// Create an empty <thead> element and add it to the table:
var header = table.createTHead();

for (var i = 0; i < datosClient.length; ++i) {

  if(option.value==datosClient[i].Identification)
  {

   var row = header.insertRow(0);
   var cell = row.insertCell(0);
   var action = row.insertCell(1);

   var celda = row.insertCell(0);
   var radio = document.createElement("input");
   radio.type = "radio";
   radio.id=datosClient[i].Identification;
   radio.setAttribute('onclick','radio(this);');
   celda.appendChild(radio);

   action.innerHTML ='<a href="http://localhost/Proyecto2/delete_client.html" onClick="CLIENT.capturarPosicion(); "><img src="https://cdn3.iconfinder.com/data/icons/streamline-icon-set-free-pack/48/Streamline-70-32.png"style="margin-left:4%;"></img></a><a href="edit_client.html" onClick="CLIENT.capturarPosicion();"><img src="https://cdn2.iconfinder.com/data/icons/windows-8-metro-style/32/edit_user.png" style="margin-left:4%;"></img></a>';

   cell.innerHTML = "Name=" + datosClient[i].Firts_name + "<br> Last_name ="  + datosClient[i].Last_name +  "<br> Phone =" + datosClient[i].Phone;


}

}

};

function radio(t) {

 var datosClient = localStorage.getItem("Client");
 datosClient = JSON.parse(localStorage.getItem("Client"));

 for (var i = 0; i < datosClient.length; ++i) {

   if(t.id==datosClient[i].Identification)
   {
    alert(datosClient[i].Firts_name , datosClient[i].Last_name , datosClient[i].Phone);
    CLIENT.localStorageTemporal(datosClient[i].Firts_name , datosClient[i].Last_name , datosClient[i].Phone);
  }
}

};


(function() {

   var mq = window.matchMedia( "(max-width:320px)" ); 

  if (mq.matches) {
//Oculta la tabla de la pantalla grande
var table = document.getElementById('table_client'); 
  // suponiendo que la tabla contiene ID='t1' 
  table.removeChild(table.tBodies[0]); 

//////////////////////////////////////////////////////////////////////////
var datosClient = localStorage.getItem("Client");
datosClient = JSON.parse(localStorage.getItem("Client"));

var form = document.body.appendChild(document.createElement('form')),
input = form.appendChild(document.createElement('input')),
datalist = form.appendChild(document.createElement('datalist'));

datalist.id = 'clientList';
input.id="listClient";
input.type="text";

input.setAttribute('list','clientList');
input.setAttribute('onblur','obtenerInformacion(this);');

var option = "";
for (var i = 0; i < datosClient.length; ++i) {
  option += "<option  label= '" + datosClient[i].Firts_name + "' value= '" + datosClient[i].Identification + "'>";
};

datalist.innerHTML =option;

}else
{
  document.getElementById("table_client").style.visibility = 'visible' ;
    $("#mostrarDatos").hide();


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
     action.innerHTML ='<a href="delete_client.html" onClick="CLIENT.capturarPosicion(); "><img src="https://cdn3.iconfinder.com/data/icons/streamline-icon-set-free-pack/48/Streamline-70-32.png"style="margin-left:10%;"></img></a><a href="edit_client.html" onClick="CLIENT.capturarPosicion();"><img src="https://cdn2.iconfinder.com/data/icons/windows-8-metro-style/32/edit_user.png" style="margin-left:10%;"></img></a>';
   }
/*Oculta la opcion de user si no es el administrador*/
  adm=localStorage.getItem("Login");
  adm = JSON.parse(localStorage.getItem("Login"));
  if(adm[0].Sesion!=1)
  {
    $(".menu_user").hide();
  }
}
 })();




 
 
 

 

