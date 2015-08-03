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
   console.log("esta en el for");
var row = table.insertRow(contador);
        var name = row.insertCell(0);
        var userName = row.insertCell(1);
        var action = row.insertCell(2);
        name.innerHTML = datoUser[i].User;
        userName.innerHTML = datoUser[i].Nombre_Usuario;
        action.innerHTML = '<a href=""><img src="https://cdn3.iconfinder.com/data/icons/streamline-icon-set-free-pack/48/Streamline-70-32.png"></img></a><a href=""><img src="https://cdn2.iconfinder.com/data/icons/windows-8-metro-style/32/edit_user.png"></img></a>';
}

})();

