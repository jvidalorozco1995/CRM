function BLLConfigTramites() {


    //Retorna una lista de tramites
    BLLConfigTramites.prototype.InsertTramite = function (tramite, Wsurl) {
        jsonData = "{'b':" + JSON.stringify(tramite) + "}";
        $.ajax({
            type: "POST",
            data: jsonData,
            url: Wsurl,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                if (result.d == 1) {

                    toastr.success(' CRM - Mayales notificacion' +
                      '</br></br>Se agrego este tramite de manera exitosa en el sistema');
                }
                else {
                    toastr.success(' CRM - Mayales notificacion' +
                      '</br></br>No se pudo agregar en el sistema');
                }

            },
            error: function (obj, error, objError) { alert(objError.responseText); }
        });
    }

    //Retorna una lista de tramites
    BLLConfigTramites.prototype.ListTramites = function (Wsurl) {

        $.ajax({
            type: "POST",
            url: Wsurl,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {

                if (result.d == null)
                {

                    BLLConfigTramites.prototype.TablaTramites(result.d);
                }
                else
                {
                    BLLConfigTramites.prototype.TablaTramites(result.d);
                }

            },
            error: function (obj, error, objError) { alert(objError.responseText); }
        });
    }

    //Tabla de Bancos Traidos de MultiFox
    BLLConfigTramites.prototype.TablaTramites = function (tramites) {
        document.getElementById('Tablatramites').innerHTML = "";
        var tabla = '<table id="tramites" class="table table-striped table-bordered table-hover">';
        tabla += "<thead>";
        tabla += "<tr>";
        tabla += "<th>ID</th>";
        tabla += "<th>Nombre</th>";
      //  tabla += "<th>Banco</th>";
        tabla += "<th></th>"
        tabla += "</tr>";
        tabla += "</thead>";
        tabla += "<tbody>";
        $.each(tramites, function (i, item) {
            //as
            tabla += " <tr>";
            tabla += "<td style='width:100px'>" + item.id + "</td>";
            tabla += "<td>" + item.Nombre + "</td>";
            //tabla += "<td>" + item.Banco + "</td>";
            tabla += "<td style='width:20px;height: 20px'>";
            tabla += "<img src='" + funcionUrlGlobal('/images_crm/Crear.png')+"'" + "id=" + item.id + " class='Infocl' title='Agregar'></img>";
            tabla += "</td>";
            tabla += "</tr>";
            ///images/cancel.png
        });
        tabla += "</tbody>";
        tabla += "</table>";
        $('#Tablatramites').append(tabla);
        $('#tramites').dataTable();
    };

}