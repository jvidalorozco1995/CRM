﻿function BLLBancos() {

    var bloquesCRM = null;
    
  

    //Retorna una lista de bancos de MultiFox
    BLLBancos.prototype.CrearBanco = function (Wsurl,banco) {

        jsonData = "{ 'b':" + JSON.stringify(banco) + " }";

        $.ajax({
            type: "POST", url: Wsurl, data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                if (result.d === 1) {
                    toastr.success(' CRM - Mayales notificacion' +
                     '</br></br>Banco Registrado de Manera Exitosa en el Sistema');
                  
                  
                } else {
                    toastr.error(' CRM - Notificacion' +
                        '</br>Ha habido un error en el sistema y no se ha podido guardar');
                    
                }

            },
            error: function (obj, error, objError) { alert(objError); }
        });
    }

    //Retorna una lista de bancos de MultiFox
    BLLBancos.prototype.ListBancos = function (Wsurl) {
        
        $.ajax({
            type: "POST",
            url: Wsurl,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                if (result.d == null) {

                    BLLBancos.prototype.TablaBancos(result.d);
                }
                else {
                    BLLBancos.prototype.TablaBancos(result.d);
                }

            },
            error: function (obj, error, objError) { alert(objError.responseText); }
        });
    }

    //Tabla de Bancos Traidos de MultiFox
    BLLBancos.prototype.TablaBancos = function (bancos) {
        document.getElementById('TablaBancos').innerHTML = "";
        var tabla = '<table id="bancos_ta" class="table table-striped table-bordered table-hover">';
        tabla += "<thead>";
        tabla += "<tr>";
        tabla += "<th>ID</th>";
        tabla += "<th>Banco</th>";
       
        tabla += "</tr>";
        tabla += "</thead>";
        tabla += "<tbody>";
        $.each(bancos, function (i, item) {
           
            tabla += " <tr>";
            tabla += "<td style='width:100px'>" + item.ID_BANCO + "</td>";
            tabla += "<td>" + item.NOMBRE_BANCO + "</td>";
            tabla += "</tr>";
            ///images/cancel.png
        });
        tabla += "</tbody>";
        tabla += "</table>";
        $('#TablaBancos').append(tabla);
        $('#bancos_ta').dataTable();
    };

}