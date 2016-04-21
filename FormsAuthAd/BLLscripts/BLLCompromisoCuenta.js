var BLLCompromisoCuenta = function () {
};

var WCompromisosInsertar = funcionUrlGlobal("/Servicios/WCompromisoCuota.asmx/InsertCompromisoCuota");
var WCompromisosListar = funcionUrlGlobal("/Servicios/WCompromisoCuota.asmx/LisCompromisoCuota");

BLLCompromisoCuenta.prototype.InserCompromisoCuota = function (compromiso) {
    jsonData = "{'b':" + JSON.stringify(compromiso) + "}";
    $.ajax({
        type: "POST", url: WCompromisosInsertar, data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        async: true,
        success: function (result) {
            if (result.d === null) {

            }
            else {
                      
            }

        },
        error: function (error) { alert(error.responseText); }
    })
}

BLLCompromisoCuenta.prototype.InfoCompromisoCuota = function (tarea) {
   
    jsonData = "{ 'tarea':" + JSON.stringify(tarea) + " }";
    $.ajax({
        type: "POST", url: WCompromisosListar, data: jsonData,
        contentType: "application/json; charset=utf-8",
        dataType: 'json',
        async: true,
        success: function (result) {

            if (result.d == null) {
                toastr.error('CRM Mayales' +
                    '</br>No fue posible cargar la información detallada de la tarea');
            }
            else {
                BLLCompromisoCuenta.ComponenteInfo(result.d);
            }
        },
        error: function (error) { alert(error.responseText); }
    });
}

BLLCompromisoCuenta.ComponenteInfo = function (tareasinf) {
    var cuotas= "";
    
    for (var i = 0; i < tareasinf.length; i++) {
        cuotas = cuotas + (tareasinf[i]["CODIGO"]) + ", ";
    }
    $('#TxtCuotas').val(cuotas);
}


  


   

