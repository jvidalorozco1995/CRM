var BLLActInmuebles= function () {

};
var utl = new BLLUtilidades();

var WAcuerdosNegocio = "/Servicios/WAcInmuebles.asmx/InsertActualizacion"
BLLActInmuebles.prototype.InsertActInmueble = function (proyecto) {
    jsonData = "{'p':" + JSON.stringify(proyecto) + "}";
    $.ajax({
        type: "POST", url: WAcuerdosNegocio, data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        async: true,
        success: function (result) {
            alert(result);
        },
        error: function (error) { alert(error.responseText); }
    })
}