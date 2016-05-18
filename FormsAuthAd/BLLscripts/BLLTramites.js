function BLLTramites() {

    //Retorna una lista de tramites
    BLLTramites.prototype.ListTramites = function (Wsurl) {

        $.ajax({
            type: "POST",
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
        tabla += "<th>ID</th>";
        tabla += "<th>Nombre</th>";
        tabla += "<th>Banco</th>";
        tabla += "<th></th>"
        tabla += "</tr>";
        tabla += "</thead>";
        tabla += "<tbody>";
        $.each(tramites, function (i, item) {

            tabla += " <tr>";
            tabla += "<td style='width:100px'>" + item.id + "</td>";
            tabla += "<td>" + item.Nombre + "</td>";
            tabla += "<td>" + item.Banco + "</td>";
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