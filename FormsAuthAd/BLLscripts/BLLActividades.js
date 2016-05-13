function BLLActividades() {






    //Retorna una lista de tramites
    BLLActividades.prototype.ListActividades = function (Wsurl) {

        $.ajax({
            type: "POST",
            url: Wsurl,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                if (result.d == null) {

                    BLLActividades.prototype.TablaActividades(result.d);
                }
                else {
                    BLLActividades.prototype.TablaActividades(result.d);
                }

            },
            error: function (obj, error, objError) { alert(objError.responseText); }
        });
    }

    //Tabla de Bancos Traidos de MultiFox
    BLLActividades.prototype.TablaActividades = function (actividades) {
        document.getElementById('TblActividades').innerHTML = "";
        var tabla = '<table id="actividades" class="table table-striped table-bordered table-hover">';
        tabla += "<thead>";
        tabla += "<tr>";
        tabla += "<th>ID</th>";
        tabla += "<th>Nombre</th>";
        tabla += "<th>Descripcion</th>";
        tabla += "<th></th>"
        tabla += "</tr>";
        tabla += "</thead>";
        tabla += "<tbody>";
        $.each(actividades, function (i, item) {

            tabla += " <tr>";
            tabla += "<td style='width:100px'>" + item.id + "</td>";
            tabla += "<td>" + item.Nombre + "</td>";
            tabla += "<td>" + item.Banco + "</td>";
            tabla += "<td style='width:20px;height: 20px'>";
            tabla += "<img src='" + funcionUrlGlobal('/images_crm/Crear.png') + "'class='BtnTarea' type='button' id='" + item.CEDULA + "/" + item.EMAIL + "' title='Agregar'></img>";
            tabla += "</td>";
            tabla += "</tr>";
            ///images/cancel.png
        });
        tabla += "</tbody>";
        tabla += "</table>";
        $('#TblActividades').append(tabla);
        $('#actividades').dataTable();
    };

}