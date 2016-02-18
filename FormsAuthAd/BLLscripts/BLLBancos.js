﻿function BLLBancos() {

    var bloquesCRM = null;
    

    
    //Retorna una lista de bancos de MultiFox
    BLLBancos.prototype.ListBancos = function (Wsurl) {
        alert("lista banco");
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
            alert(item.ID_BANCO);
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