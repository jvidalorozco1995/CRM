function BLLConfiguracion_Negocio() {

    var WAddConfiguracionNegocio = "/Servicios/WConfiguracionNegocios.asmx/InsertConfiguracion";
    


    BLLConfiguracion_Negocio.prototype.AddConfiguracion_Negocio = function (ConfiguracionNegocio) {
      
        JsonData = "{'c':" + JSON.stringify(ConfiguracionNegocio) + "}";
        $.ajax({
            
            type: "POST", url: WAddConfiguracionNegocio, data: JsonData,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                if (result.d == 0) {
                    toastr.error(' CRM - Mayales notificacion' +
                     '</br></br>No se ha podido guardar');
                }
                else {
                    toastr.success(' CRM - Mayales notificacion' +
                     '</br></br>Registrado de manera exitosa');
                    $('#TxtDesConfiguracionNegocio').val("");
                }

            },
            error: function (msg) {
                alert(msg.responseText);
            }
        });
    };





}