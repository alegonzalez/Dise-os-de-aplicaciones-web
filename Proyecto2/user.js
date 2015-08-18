var USER=USER||{

 capturarPosicion: function () {

  var table = document.getElementById("table_user");
  var rows = table.getElementsByTagName("tr");

  for (i = 1; i < rows.length; i++) {
    row = table.rows[i];
    row.onclick = function(){
      var cell0 = this.getElementsByTagName("td")[0];
      var cell1= this.getElementsByTagName("td")[1];


      var name=cell0.innerHTML;
      var user_name = cell1.innerHTML;

      var obtener_Datos=new USER.localStorageTemporal(name,user_name);


    }
  }


},

localStorageTemporal :function(name,user_name)
{
  var datosTemporales=new Array();
  

  this.name=name;
  this.user_name=user_name;

  var date={'Name':this.name,'UserName':this.user_name};

  datosTemporales.push(date);

  localStorage.setItem("Temporal",JSON.stringify(datosTemporales));

},

};

var nombreUsuario;
function obtenerInformacion(option)
{
  alert("Etsa dentro el ratilla");
 this.valor=option.value;
 
 
 var datosUser = localStorage.getItem("LoginUser");
 datosUser = JSON.parse(localStorage.getItem("LoginUser"));

 var id=document.getElementById('userList').value;

 $("#date_user").html("");

// Find a <table> element with id="myTable":
var table = document.getElementById("date_user");

// Create an empty <thead> element and add it to the table:
var header = table.createTHead();


for (var i = 0; i < datosUser.length; i++) {

  if(datosUser[i].Nombre_Usuario == this.valor)
  {
   var row = header.insertRow(0);
   var cell = row.insertCell(0);
   var action = row.insertCell(1);
   nombreUsuario=this.valor;

   action.innerHTML ='<a href="delete_user.html" id="delete" onclick="radio('+nombreUsuario+'); "><img src="https://cdn3.iconfinder.com/data/icons/streamline-icon-set-free-pack/48/Streamline-70-32.png"style="margin-left:10%;"></img></a><a href="edit_user.html" onClick="radio('+datosUser[i].Nombre_Usuario+'); "><img src="https://cdn2.iconfinder.com/data/icons/windows-8-metro-style/32/edit_user.png" style="margin-left:10%;"></img></a>';

   cell.innerHTML = "Nombre Completo=" + datosUser[i].User + "<br> Nombre de Usuario ="  + datosUser[i].Nombre_Usuario +  "<br> Password =" + datosUser[i].Password ;

   $("#delete").click(function(){

    radio(nombreUsuario);
  });
 }
};

};



function radio(t) {

  debugger;
  
  this.nameUser=t;
  alert(this.nameUser);


  var datosUser = localStorage.getItem("LoginUser");
  datosUser = JSON.parse(localStorage.getItem("LoginUser"));

  for (var i = 0; i < datosUser.length; ++i) {

   if(this.nameUser==datosUser[i].Nombre_Usuario)
   {  
    USER.localStorageTemporal(datosUser[i].User,datosUser[i].Nombre_Usuario);
  }
}

};



(function() {

 var mq = window.matchMedia( "(max-width:320px)" ); 

 if (mq.matches) {
//Oculta la tabla de la pantalla grande
var table = document.getElementById('table_user'); 
  // suponiendo que la tabla contiene ID='t1' 
  table.removeChild(table.tBodies[0]); 

//////////////////////////////////////////////////////////////////////////
var datosUser = localStorage.getItem("LoginUser");
datosUser = JSON.parse(localStorage.getItem("LoginUser"));

var form = document.body.appendChild(document.createElement('form')),
input = form.appendChild(document.createElement('input')),
datalist = form.appendChild(document.createElement('datalist'));

datalist.id = 'userList';
input.id="listUser";
input.type="text";

input.setAttribute('list','userList');
input.setAttribute('onblur','obtenerInformacion(this);');

var option = "";
for (var i = 0; i < datosUser.length; ++i) {
  option += "<option  label= '" + datosUser[i].User + "' value= '" + datosUser[i].Nombre_Usuario + "'>";
};

datalist.innerHTML =option;

}else
{
  document.getElementById("table_user").style.visibility = 'visible' ;
  $("#mostrarDatos").hide();


  /*Lo obtiene en un string*/
  var datoUser = localStorage.getItem("LoginUser");
  /*Lo convierte en Objeto*/
  datoUser = JSON.parse(localStorage.getItem("LoginUser"));

  /*Obtiene la cantidad de filas existentes*/
  var fila = document.getElementById('table_user').rows.length;
  var table = document.getElementById('table_user');
  var contador = 0;
  contador = fila;
   /*Recorre todo el arrego y con esto nos va a permitir 
   cargar los datos del client
   */
   for (var i = 0; i <=datoUser.length-1; i++)
   {

     var row = table.insertRow(contador);
     var name = row.insertCell(0);
     var user_name = row.insertCell(1);
     var action = row.insertCell(2);
     name.innerHTML = datoUser[i].User;
     user_name.innerHTML =datoUser[i].Nombre_Usuario;
     action.innerHTML ='<a href="delete_user.html" onClick="USER.capturarPosicion(); "><img src="https://cdn3.iconfinder.com/data/icons/streamline-icon-set-free-pack/48/Streamline-70-32.png"style="margin-left:10%;"></img></a><a href="edit_user.html" onClick="USER.capturarPosicion();"><img src="https://cdn2.iconfinder.com/data/icons/windows-8-metro-style/32/edit_user.png" style="margin-left:10%;"></img></a>';
   }
 }

})();