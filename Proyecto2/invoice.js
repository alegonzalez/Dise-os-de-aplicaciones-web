var INVOICE=INVOICE||{

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





(function() {

  /*Lo obtiene en un string*/
  var datoInvoice = localStorage.getItem("Invoice");
  /*Lo convierte en Objeto*/
  datoInvoice = JSON.parse(localStorage.getItem("Invoice"));

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
     client.innerHTML =datoInvoice[i].Client;
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
 })();
 
    



