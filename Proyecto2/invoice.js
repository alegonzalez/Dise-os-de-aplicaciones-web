
var INVOICE=INVOICE||{
//Captura los datos del row  al dar click en un action
 capturarPosicion: function () {

  var table = document.getElementById("table_invoice");
  var rows = table.getElementsByTagName("tr");

  for (i = 1; i < rows.length; i++) {
    row = table.rows[i];
    row.onclick = function(){
      var cell0 = this.getElementsByTagName("td")[0];
      var cell1= this.getElementsByTagName("td")[1];
      var cell2= this.getElementsByTagName("td")[2];
      var cell3= this.getElementsByTagName("td")[3];
      var cell4= this.getElementsByTagName("td")[4];

      var invoice=cell0.innerHTML;
      var client=cell1.innerHTML;
      var job_Description = cell2.innerHTML;
      var date=cell3.innerHTML;
      var amount=cell4.innerHTML;

      var obtener_Datos=new INVOICE.localStorageTemporal(invoice,client,job_Description,date,amount);



    }
  }


},
//Guarda los datos de la tabla en temporal
localStorageTemporal :function(invoice,client,job_Description,date,amount)
{
  var datosTemporales=new Array();
  this.invoice=invoice;
  this.client=client;
  this.job_Description=job_Description;
  this.date=date;
  this.amount=amount;

  var date={'NumberInvoice':this.invoice,'Client':this.client,
  'JobDescription':this.job_Description ,'Date':this.date,'Amount':this.amount};

  datosTemporales.push(date)


  localStorage.setItem("Temporal",JSON.stringify(datosTemporales));

}

};



//Obtiene la informacion en resolucion de 320px de la tabla
function obtenerInformacion(option)
{

  var datosInvoice = localStorage.getItem("Invoice");
  datosInvoice = JSON.parse(localStorage.getItem("Invoice"));

  var id=document.getElementById('invoiceList').value;

  $("#date_invoice").html("");

// Find a <table> element with id="myTable":
var table = document.getElementById("date_invoice");

// Create an empty <thead> element and add it to the table:
var header = table.createTHead();
var cont="N";

for (var i = 0; i < datosInvoice.length; i++) {

  if(datosInvoice[i].Client == option.value)
  {
    cont="E";
    
    var row = header.insertRow(0);
    var cell = row.insertCell(0);
    var action = row.insertCell(1);

    var cell1 = row.insertCell(0);
    var element1 = document.createElement("input");
    element1.type = "radio";
    element1.name="chkbox[]";
    element1.id=datosInvoice[i].invoice;
    element1.setAttribute('onclick','radio(this);');
    cell1.appendChild(element1);


  

    action.innerHTML ='<a href="delete_invoice.html" onClick="INVOICE.capturarPosicion();" ><img src="https://cdn3.iconfinder.com/data/icons/streamline-icon-set-free-pack/48/Streamline-70-32.png"style="margin-left:10%;"></img></a><a href="edit_invoice.html" onClick="INVOICE.capturarPosicion();"><img src="https://cdn2.iconfinder.com/data/icons/windows-8-metro-style/32/edit_user.png" style="margin-left:10%;"></img></a>';

    cell.innerHTML = "Client=" + datosInvoice[i].Client + "<br> Job Description ="  + datosInvoice[i].Job_Description +  "<br> Date =" + datosInvoice[i].Date +  "<br> Amont =" + datosInvoice[i].Amont ;

  }
};

if(cont=="N")
{

$("#mensajeInvoice").text("The client don't have Invoice").show();
}


};
//Guarda los datosde la resolucion de 320px

function radio(t) {
 var datosInvoice = localStorage.getItem("Invoice");
 datosInvoice = JSON.parse(localStorage.getItem("Invoice"));

 for (var i = 0; i < datosInvoice.length; ++i) {

   if(t.id==datosInvoice[i].invoice)
   {  
    INVOICE.localStorageTemporal(datosInvoice[i].invoice,datosInvoice[i].Client , datosInvoice[i].Job_Description , datosInvoice[i].Date , datosInvoice[i].Amont);
  }
}

};


//Es la que carga los datos de la tabla tanto para 320px como para las demas resoluciones
(function() {

 

 var mq = window.matchMedia( "(max-width:320px)" ); 

 if (mq.matches) {
//Oculta la tabla de la pantalla grande
var table = document.getElementById('table_invoice'); 
  // suponiendo que la tabla contiene ID='t1' 
  table.removeChild(table.tBodies[0]); 

//////////////////////////////////////////////////////////////////////////
var datosClient = localStorage.getItem("Client");
datosClient = JSON.parse(localStorage.getItem("Client"));

var form = document.body.appendChild(document.createElement('form')),
input = form.appendChild(document.createElement('input')),
datalist = form.appendChild(document.createElement('datalist'));

datalist.id = 'invoiceList';
input.id="listInvoice";
input.type="text";

input.setAttribute('list','invoiceList');
input.setAttribute('onblur','obtenerInformacion(this);');

var option = "";
for (var i = 0; i < datosClient.length; ++i) {
  option += "<option  label= '" + datosClient[i].Firts_name + "' value= '" + datosClient[i].Identification + "'>";
};

datalist.innerHTML =option;

}else
{

  document.getElementById("table_invoice").style.visibility = 'visible' ;
  $("#mostrarDatos").hide();

  /*Lo obtiene en un string*/
  var datoInvoice = localStorage.getItem("Invoice");
  /*Lo convierte en Objeto*/
  datoInvoice = JSON.parse(localStorage.getItem("Invoice"));
  /*Lo obtiene en un string*/
  var datoClient = localStorage.getItem("Client");
  /*Lo convierte en Objeto*/
  datoClient = JSON.parse(localStorage.getItem("Client"));
  /*Obtiene la cantidad de filas existentes*/
  
  var fila = document.getElementById('table_invoice').rows.length;
  var table = document.getElementById('table_invoice');

  var contador = 0;
  contador = fila;
   /*Recorre todo el arrego y con esto nos va a permitir 
   cargar los datos del client
   */
   for (var i = 0; i <=datoInvoice.length-1; i++)
   {

     var row = table.insertRow(contador);
     var invoice = row.insertCell(0);
     var client = row.insertCell(1);
     var job_Description = row.insertCell(2);
     var date = row.insertCell(3);
     var amount=row.insertCell(4);
     var action = row.insertCell(5);
     invoice.innerHTML = datoInvoice[i].invoice;
     for (var j = 0; j < datoClient.length; j++) {
      if(datoClient[j].Identification==datoInvoice[i].Client){
       client.innerHTML =datoClient[j].Firts_name;   
     }
   }

   job_Description.innerHTML =datoInvoice[i].Job_Description;
   date.innerHTML =datoInvoice[i].Date;
   amount.innerHTML=datoInvoice[i].Amont;
   action.innerHTML ='<a href="delete_invoice.html" onClick="INVOICE.capturarPosicion(); "><img src="https://cdn3.iconfinder.com/data/icons/streamline-icon-set-free-pack/48/Streamline-70-32.png"style="margin-left:10%;"></img></a><a href="edit_invoice.html" onClick="INVOICE.capturarPosicion();"><img src="https://cdn2.iconfinder.com/data/icons/windows-8-metro-style/32/edit_user.png" style="margin-left:10%;"></img></a>';
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
  $("#mensajeInvoice").hide();
  $("#listInvoice").click(function(){
$("#mensajeInvoice").hide();
  });
});
