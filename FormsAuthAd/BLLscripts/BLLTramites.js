function BLLTramites() {


    ////Retorna una lista de tramites
    BLLTramites.prototype.GenerarTramites = function (proyec, Wsurl) {
        jsonData = "{'b':" + JSON.stringify(proyec) + "}";
        $.ajax({
            type: "POST",
            data: jsonData,
            url: Wsurl,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                if (result.d != null) {

                    toastr.success(' CRM - Mayales notificacion' +
                      '</br></br>'+ JSON.stringify(result.d));
                }
                else {
                    toastr.error(' CRM - Mayales notificacion' +
                      '</br></br>No se pudo agregar en el sistema');
                }

            },
            error: function (obj, error, objError) { alert(objError.responseText); }
        });
    }

    //Retorna una lista de tramites
    BLLTramites.prototype.ListTramites = function (proyec, Wsurl) {
        jsonData = "{'b':" + JSON.stringify(proyec) + "}";
        $.ajax({
            type: "POST",
            data: jsonData,
            url: Wsurl,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {

                if (result.d == null) {

                    BLLTramites.prototype.TablaTramites(result.d);
                }
                else {
                    BLLTramites.prototype.TablaTramites(result.d);
                }

            },
            error: function (obj, error, objError) { alert(objError.responseText); }
        });
    }

    //Tabla de Bancos Traidos de MultiFox
    BLLTramites.prototype.TablaTramites = function (tramites) {
        document.getElementById('Tablatramites').innerHTML = "";
        var tabla = '<table id="tramites" class="table table-striped table-bordered table-hover">';
        tabla += "<thead>";
        tabla += "<tr>";
        tabla += "<th>CEDULA</th>";
        tabla += "<th>PROPIETARIO</th>";
        tabla += "<th>INMUEBLE</th>";
        tabla += "<th></th>"
        tabla += "</tr>";
        tabla += "</thead>";
        tabla += "<tbody>";
        $.each(tramites, function (i, item) {
           
            tabla += " <tr>";
            tabla += "<td style='width:100px'>" + item.CEDULA_P + "</td>";
            tabla += "<td>" + item.PROPIETARIO + "</td>";
            tabla += "<td>" + item.INMUEBLE + "</td>";
           
            if (item.IdTramite == null)
            {
                tabla += "<td style='width:20px;height: 20px'>";
                tabla += "<img src='" + funcionUrlGlobal('/images_crm/Suspendido.png') + "'" + "id=" + item.id + " class='Infocl' title='No tiene tramite'></img>";
                tabla += "</td>";
            }
            else
            {
                tabla += "<td style='width:20px;height: 20px'>";
                tabla += "<img src='" + funcionUrlGlobal('/images_crm/Completa.png') + "'" + "id=" + item.id + " class='Infocl' ></img>";
                tabla += "</td>";

            }
            tabla += "</tr>";
           
        });
        tabla += "</tbody>";
        tabla += "</table>";
        $('#Tablatramites').append(tabla);
        $('#tramites').dataTable();
    };

}