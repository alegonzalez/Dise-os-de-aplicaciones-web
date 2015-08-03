(function() {
    
/*Lo obtiene en un string*/
var datoInvoice = localStorage.getItem("Invoice");
        /*Lo convierte en Objeto*/
        datoInvoice = JSON.parse(localStorage.getItem("Invoice"));



var fila = document.getElementById('table_invoice').rows.length;
        var table = document.getElementById('table_invoice');
        var contador = 0;
        contador = fila;
        for (var i = 0; i <=datoInvoice.length-1; i++)
{
   console.log("esta en el for");
       var row = table.insertRow(contador);
        var invoice = row.insertCell(0);
        var client = row.insertCell(1);
        var jobDescription = row.insertCell(2);
        var date = row.insertCell(3);
        var amont = row.insertCell(4);
        var action = row.insertCell(5);

        invoice.innerHTML=datoInvoice[i].invoice;
        client.innerHTML = datoInvoice[i].Client;
        jobDescription.innerHTML = datoInvoice[i].Job_Description;
        date.innerHTML=datoInvoice[i].Date;
        amont=datoInvoice[i].Amont;
        action.innerHTML = '<a href=""><img src="https://cdn3.iconfinder.com/data/icons/streamline-icon-set-free-pack/48/Streamline-70-32.png"></img></a><a href=""><img src="https://cdn2.iconfinder.com/data/icons/windows-8-metro-style/32/edit_user.png"></img></a>';
}


})();
