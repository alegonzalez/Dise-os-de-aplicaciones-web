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
       console.log("esta en el for");
       var row = table.insertRow(contador);
       var identification = row.insertCell(0);
       var fullName = row.insertCell(1);
       var phone=row.insertCell(2);
       var action = row.insertCell(3);
       identification.innerHTML = datoclient[i].Identification;
       fullName.innerHTML = datoclient[i].Firts_name+" "+datoclient[i].Last_name;
       phone.innerHTML=datoclient[i].Phone;
       action.innerHTML = '<a href=""><img src="https://cdn3.iconfinder.com/data/icons/streamline-icon-set-free-pack/48/Streamline-70-32.png"></img></a><a href=""><img src="https://cdn2.iconfinder.com/data/icons/windows-8-metro-style/32/edit_user.png"></img></a>';
   }

})();

