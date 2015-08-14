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

localStorageTemporal :function(client,job_Description,date,note)
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





(function() {

  /*Lo obtiene en un string*/
  var datoChamba = localStorage.getItem("chambas");
  /*Lo convierte en Objeto*/
  datoChamba = JSON.parse(localStorage.getItem("chambas"));

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
     client.innerHTML = datoChamba[i].Client;
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

})();
