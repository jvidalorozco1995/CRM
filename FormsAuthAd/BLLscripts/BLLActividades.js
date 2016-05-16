function BLLActividades() {



 //   InserActividades
    BLLActividades.prototype.CrearActividad = function (actividad, WsUrl) {
        jsonData = "{ 'b':" + JSON.stringify(actividad) + "}";

        $.ajax({
            type: "POST", url: WsUrl, data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                if (result.d == 1) {
                    toastr.success(' CRM - Mayales notificacion' +
                     '</br></br>Se registro esta actividad de manera exitosa en el sistema');
                   

                } else {
                    toastr.error(' CRM - Notificacion' +
                        '</br>No se pudo registrar esta actividad');
                }

            },
            error: function (obj, error, objError) { alert(objError); }
        });
    }

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
        document.getElementById('TblListaActividades').innerHTML = "";
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
            tabla += "<td>" + item.Descripcion + "</td>";
            tabla += "<td style='width:20px;height: 20px'>";
            tabla += "<img src='" + funcionUrlGlobal('/images_crm/Crear.png') + "'class='BtnTarea' type='button' id='" + item.CEDULA + "/" + item.EMAIL + "' title='Agregar'></img>";
            tabla += "</td>";
            tabla += "</tr>";
            ///images/cancel.png
        });
        tabla += "</tbody>";
        tabla += "</table>";
        $('#TblListaActividades').append(tabla);
        $('#actividades').dataTable();
    };

}