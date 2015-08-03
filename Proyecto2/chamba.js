(function() {
    
    /*Lo obtiene en un string*/
    var datoChamba = localStorage.getItem("chambas");
    /*Lo convierte en Objeto*/
    datoChamba = JSON.parse(localStorage.getItem("chambas"));



    var fila = document.getElementById('table_chamba').rows.length;
    var table = document.getElementById('table_chamba');
    var contador = 0;
    contador = fila;
    for (var i = 0; i <=datoChamba.length-1; i++)
    {
     console.log("esta en el for");
     var row = table.insertRow(contador);

     var client = row.insertCell(0);
     var job_description = row.insertCell(1);
     var date = row.insertCell(2);
     var note = row.insertCell(3);
     var action = row.insertCell(4);

     client.innerHTML = datoChamba[i].Client;
     job_description.innerHTML = datoChamba[i].Job_Description;
     date.innerHTML = datoChamba[i].Date;
     note.innerHTML = datoChamba[i].Note;
     action.innerHTML = '<a href=""><img src="https://cdn3.iconfinder.com/data/icons/streamline-icon-set-free-pack/48/Streamline-70-32.png"></img></a><a href=""><img src="https://cdn2.iconfinder.com/data/icons/windows-8-metro-style/32/edit_user.png"></img></a>';
 }

})();

