var BLLActInmuebles = function () {

};
var utl = new BLLUtilidades();

var WAcuerdosNegocio = "/Servicios/WAcInmuebles.asmx/InsertActualizacion"
var WAcActualizado = "/Servicios/WAcInmuebles.asmx/UltimaVezAct"

BLLActInmuebles.prototype.InsertActInmueble = function (proyecto) {
    jsonData = "{'p':" + JSON.stringify(proyecto) + "}";
    $.ajax({
        type: "POST", url: WAcuerdosNegocio, data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        async: true,
        success: function (result) {
          
        },
        error: function (error) { alert(error.responseText); }
    })
}

BLLActInmuebles.prototype.ListActInmueble = function (proyecto) {
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