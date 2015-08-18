var CHAMBA=CHAMBA||{

 capturarPosicion: function () {

  var table = document.getElementById("table_chamba");
  var rows = table.getElementsByTagName("tr");
  
  for (i = 1; i < rows.length; i++) {
    row = table.rows[i];
    row.onclick = function(){
      var cell0 =this.getElementsByTagName("td")[0];
      var cell1= this.getElementsByTagName("td")[1];
      var cell2= this.getElementsByTagName("td")[2];
      var cell3= this.getElementsByTagName("td")[3];
      
      var client=cell0.innerHTML;
      var job_Description=cell1.innerHTML;
      var date = cell2.innerHTML;
      var note=cell3.innerHTML;
      

      var obtener_Datos=new CHAMBA.localStorageTemporal(client,job_Description,date,note);

      
      
    }
  }


},

localStorageTemporal:function(client,job_Description,date,note)
{

  var datosTemporales=new Array();

  this.client=client

  this.job_Description=job_Description;
  this.date=date;
  this.note=note;
  var id=0;

  var date={'client':this.client,'job_Description':this.job_Description,'date':this.date , 'note':this.note,'id':id};

  datosTemporales.push(date);


  localStorage.setItem("Temporal",JSON.stringify(datosTemporales));


},

};


function obtenerInformacion(option)
{

  var datosChamba = localStorage.getItem("chambas");
  datosChamba = JSON.parse(localStorage.getItem("chambas"));

  var id=document.getElementById('chambaList').value;

  $("#date_chamba").html("");

// Find a <table> element with id="myTable":
var table = document.getElementById("date_chamba");

// Create an empty <thead> element and add it to the table:
var header = table.createTHead();
var cont="N";


for (var i = 0; i < datosChamba.length; i++) {

  if(datosChamba[i].Client == option.value)
  {
    cont="E";
    

    var row = header.insertRow(0);
    var cell = row.insertCell(0);
    var action = row.insertCell(1);

    var cell1 = row.insertCell(0);
    var element1 = document.createElement("input");
    element1.type = "radio";
    element1.name="chkbox[]";
    element1.id=datosChamba[i].Id;
    element1.setAttribute('onclick','radio(this);');
    cell1.appendChild(element1);

    action.innerHTML ='<a href="delete_chamba.html" onClick="CHAMBA.capturarPosicion();" ><img src="https://cdn3.iconfinder.com/data/icons/streamline-icon-set-free-pack/48/Streamline-70-32.png"style="margin-left:10%;"></img></a><a href="edit_chamba.html" onClick="CHAMBA.capturarPosicion();"><img src="https://cdn2.iconfinder.com/data/icons/windows-8-metro-style/32/edit_user.png" style="margin-left:10%;"></img></a>';

    cell.innerHTML = "Client=" + datosChamba[i].Client + "<br> Job Description ="  + datosChamba[i].Job_Description +  "<br> Date =" + datosChamba[i].Date +  "<br> Note =" + datosChamba[i].Note ;

  }
}

if(cont=="N")
{

  $("#mensajeChamba").text("The client don't have Chambas").show();
}


};

function radio(t) {

 var datosChamba = localStorage.getItem("chambas");
 datosChamba = JSON.parse(localStorage.getItem("chambas"));

 for (var i = 0; i < datosChamba.length; ++i) {

  debugger;

   if(t.id==datosChamba[i].Id)
   {  
    CHAMBA.localStorageTemporal(datosChamba[i].Client,datosChamba[i].Job_Description , datosChamba[i].Date , datosChamba[i].Note , datosChamba[i].Id);
  }
}

};





(function() {

 var mq = window.matchMedia( "(max-width:320px)" ); 

 if (mq.matches) {

//Oculta la tabla de la pantalla grande
var table = document.getElementById('table_chamba'); 
  // suponiendo que la tabla contiene ID='t1' 
  table.removeChild(table.tBodies[0]); 

//////////////////////////////////////////////////////////////////////////
var datosClient = localStorage.getItem("Client");
datosClient = JSON.parse(localStorage.getItem("Client"));

var form = document.body.appendChild(document.createElement('form')),
input = form.appendChild(document.createElement('input')),
datalist = form.appendChild(document.createElement('datalist'));

datalist.id = 'chambaList';
input.id="listChamba";
input.type="text";

input.setAttribute('list','chambaList');
input.setAttribute('onblur','obtenerInformacion(this);');

var option = "";
for (var i = 0; i < datosClient.length; ++i) {
  option += "<option  label= '" + datosClient[i].Firts_name + "' value= '" + datosClient[i].Identification + "'>";
};

datalist.innerHTML =option;

}else
{
  document.getElementById("table_chamba").style.visibility = 'visible' ;
  $("#mostrarDatos").hide();


  /*Lo obtiene en un string*/
  var datoChamba = localStorage.getItem("chambas");
  /*Lo convierte en Objeto*/
  datoChamba = JSON.parse(localStorage.getItem("chambas"));
  var dateClient=localStorage.getItem("Client");
  dateClient=JSON.parse(localStorage.getItem("Client"));

  /*Obtiene la cantidad de filas existentes*/
  var fila = document.getElementById('table_chamba').rows.length;
  var table = document.getElementById('table_chamba');
  var contador = 0;
  contador = fila;
   /*Recorre todo el arrego y con esto nos va a permitir 
   cargar los datos del client
   */
   for (var i = 0; i <=datoChamba.length-1; i++)
   {

     var row = table.insertRow(contador);

     var client = row.insertCell(0);
     var job_Description = row.insertCell(1);
     var date = row.insertCell(2);
     var note=row.insertCell(3);
     var action = row.insertCell(4);
     
     for (var x = 0; x <dateClient.length; x++) {

       if(dateClient[x].Identification==datoChamba[i].Client){

        client.innerHTML=dateClient[x].Firts_name;
      }

    }

    job_Description.innerHTML =datoChamba[i].Job_Description;
    date.innerHTML =datoChamba[i].Date;
    note.innerHTML=datoChamba[i].Note;
    action.innerHTML ='<a href="delete_chamba.html" onClick="CHAMBA.capturarPosicion(); "><img src="https://cdn3.iconfinder.com/data/icons/streamline-icon-set-free-pack/48/Streamline-70-32.png"style="margin-left:10%;"></img></a><a href="edit_chamba.html" onClick="CHAMBA.capturarPosicion();"><img src="https://cdn2.iconfinder.com/data/icons/windows-8-metro-style/32/edit_user.png" style="margin-left:10%;"></img></a>';
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

$(document).ready(function(){
  $("#mensajeChamba").hide();
  $("#listChamba").click(function(){
    $("#mensajeChamba").hide();
  });
});

