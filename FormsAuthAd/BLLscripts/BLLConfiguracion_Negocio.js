function BLLConfiguracion_Negocio() {

    var WAddConfiguracionNegocio = "/Servicios/WConfiguracionNegocios.asmx/InsertConfiguracion";
    


    BLLConfiguracion_Negocio.prototype.AddConfiguracion_Negocio = function (ConfiguracionNegocio) {
      
        JsonData = "{'c':" + JSON.stringify(ConfiguracionNegocio) + "}";
        $.ajax({
            
            type: "POST", url: WAddConfiguracionNegocio,
            data: JsonData,
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


    //Listado de Proyectos MultiFox
    BLLConfiguracion_Negocio.prototype.ListNotasAclaratorias = function (Proyecto, Wsurl) {

        JsonData = "{'p':" + JSON.stringify(Proyecto) + "}";

        $.ajax({
            type: "POST", url: Wsurl,
            data: JsonData,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                if (result.d === null) {
                    BLLConfiguracion_Negocio.TablaNotasAclaratorias(result.d);
                }
                else {
                    BLLConfiguracion_Negocio.TablaNotasAclaratorias(result.d);
                }

            },
            error: function (obj, error, objError) { alert(obj.responseText); }
        });
    }

    BLLConfiguracion_Negocio.TablaNotasAclaratorias = function (notas) {
        document.getElementById('HistorialNotas').innerHTML = "";
        var tabla = '<table id="notas" class="table table-striped table-bordered table-hover">';
        tabla += "<thead>";
        tabla += "<tr>";
        tabla += "<th>ID</th>";;
        tabla += "<th>Descripción</th>";
        tabla += "</tr>";
        tabla += "</thead>";
        tabla += "<tbody>";
        $.each(notas, function (i, item) {

            tabla += " <tr class='CargarPagos' id=" + item.ID + ">";
            tabla += "<td>" + item.ID + "</td>";
            tabla += "<td>" + item.Nombre + "</td>";
            tabla += "</tr>";

        });
        tabla += "</tbody>";
        tabla += '</table>';
        $('#HistorialNotas').append("<label><strong>Notas</strong></label>");
        $('#HistorialNotas').append(tabla);
        $('#notas').dataTable();

    }



}