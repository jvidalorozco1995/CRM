var BLLActInmuebles = function () {

};
var utl = new BLLUtilidades();


//prueba
BLLActInmuebles.prototype.InsertActInmueble = function (proyecto,wsUrl) {
    jsonData = "{'p':" + JSON.stringify(proyecto) + "}";
    $.ajax({
        type: "POST",
        url: wsUrl,
        data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        async: true,
        success: function (result) {
          
        },
        error: function (error) { alert(error.responseText); }
    })
}

BLLActInmuebles.prototype.ListActInmueble = function (proyecto, WAcActualizado) {
    jsonData = "{'p':" + JSON.stringify(proyecto) + "}";
    $.ajax({
        type: "POST", url: WAcActualizado, data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: 'json', 
        async: true,
        success: function (result) {

            $.each(result.d, function (i, item) {
                var responseDate = moment(item.Fecha).format('DD/MM/YYYY HH:mm');
                $("#lblact").text("");
                $("#lblact").append("Ultima vez Actualizado: " + responseDate);
            });
          

           
        },
        error: function (error) { alert(error.responseText); }
    })
}