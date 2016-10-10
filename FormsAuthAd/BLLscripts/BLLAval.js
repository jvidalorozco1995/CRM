function BLLAval() {

   
    var WsAval = funcionUrlGlobal("/Servicios/WAval.asmx/ListAval");

    BLLAval.prototype.Aval = function (referencia) {

        jsonData = "{ 'id':" + JSON.stringify(referencia) + " }";

        $.ajax({
            type: "POST", url: WsAval, data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                if (result.d != null) {
                 
                    $("#TxtRegistro").val(result.d[0].Registro);
                    $("#TxtProyecto").val(result.d[0].NOMBRE_PROYEC);
                    $("#TxtInmueble").val(result.d[0].INMUEBLE);
                    
                    

                } else {
                    toastr.error(' CRM - Notificacion' +
                        '</br>Ha habido un error en el sistema y no se ha podido guardar');

                }

            },
            error: function (obj, error, objError) { alert(objError); }
        });
    }






}