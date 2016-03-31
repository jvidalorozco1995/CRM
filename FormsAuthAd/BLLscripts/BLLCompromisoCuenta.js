var BLLCompromisoCuenta = function () {
};

var WCompromisosInsertar = funcionUrlGlobal("/Servicios/WCompromisoCuota.asmx/InsertCompromisoCuota");

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
                toastr.success();
               
            }

        },
        error: function (error) { alert(error.responseText); }
    })
}


  


   

