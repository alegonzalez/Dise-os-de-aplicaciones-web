var USER=USER||{
/*Esta funcion sirve para saber los datos que se van a obtener segun 
el la fila seleccionada
*/
   capturarPosicionUser: function () {

      var table = document.getElementById("table_user");

      var rows = table.getElementsByTagName("tr");

      for (i = 1; i < rows.length; i++) {
        row = table.rows[i];
        row.onclick = function(){

          var cell0 = this.getElementsByTagName("td")[0];
          var cell1= this.getElementsByTagName("td")[1];

          var name=cell0.innerHTML;
          var userName = cell1.innerHTML;

          var dato=new Array();
          var elementos_edit={'Name':name,'UserName':userName};
          dato.push(elementos_edit);


          localStorage.setItem("temporal",JSON.stringify(dato));


          var send=new DELETE_CLIENT.obtenerDatos(firts_name,last_Name);

      };
  }


}

};

(function() {

    /*Lo obtiene en un string*/
    var datoUser = localStorage.getItem("LoginUser");
    /*Lo convierte en Objeto*/
    datoUser = JSON.parse(localStorage.getItem("LoginUser"));



    var fila = document.getElementById('table_user').rows.length;
    var table = document.getElementById('table_user');
    var contador = 0;
    contador = fila;
    for (var i = 0; i <=datoUser.length-1; i++)
    {

        var row = table.insertRow(contador);
        var name = row.insertCell(0);
        var userName = row.insertCell(1);
        var action = row.insertCell(2);
        name.innerHTML = datoUser[i].User;
        userName.innerHTML = datoUser[i].Nombre_Usuario;
        action.innerHTML = '<a href=""><img src="https://cdn3.iconfinder.com/data/icons/streamline-icon-set-free-pack/48/Streamline-70-32.png"></img></a><a href="edit_user.html" onclick="USER.capturarPosicionUser();"><img src="https://cdn2.iconfinder.com/data/icons/windows-8-metro-style/32/edit_user.png"></img></a>';
    }

})();

