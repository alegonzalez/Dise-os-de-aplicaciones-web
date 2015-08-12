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


(function() {

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

})();