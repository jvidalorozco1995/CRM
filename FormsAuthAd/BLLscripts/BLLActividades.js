function BLLActividades() {



 //   InserActividades
    BLLActividades.prototype.CrearActividad = function (actividad, WsUrl) {
        jsonData = "{ 'b':" + JSON.stringify(actividad) + "}";

        $.ajax({
            type: "POST", url: WsUrl,
            data: jsonData,
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
    BLLActividades.prototype.ListActividades = function (tramite, Wsurl) {

        jsonData = "{ 'tramite':" + JSON.stringify(tramite) + "}";
        $.ajax({
            type: "POST", url: Wsurl,
            data: jsonData,
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
   /* BLLActividades.prototype.TablaActividades = function (actividades) {



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
    };*/

    
    //Tabla de Bancos Traidos de MultiFox
    BLLActividades.prototype.TablaActividades = function (actividades) {
        document.getElementById('datos').innerHTML = "";
        var tabla;
       
        $.each(actividades, function (i, item) {

            tabla += '<div class="v-timeline vertical-container animate-panel"  data-child="vertical-timeline-block" data-delay="1">'
            tabla += '<div class="vertical-timeline-block">';
            tabla += '<div class="vertical-timeline-icon navy-bg" style="padding-top:8px">';
            tabla += '   <span>' + item.Posicion + '</span>';
            tabla += '</div>';
            tabla += '<div class="vertical-timeline-content">';
            tabla += '  <div class="p-sm">';
            tabla += '<span class="vertical-date pull-right"> Saturday <br/> <small>12:17:43 PM</small> </span>';
            tabla += '<h2>' + item.Nombre+'</h2>';
            tabla += '<p>'+item.Descripcion+'</p>';
            tabla += '</div>';
            tabla += ' <div class="panel-footer">';
            tabla += '   It is a long established fact that';
            tabla += '</div>';
            tabla += '</div>';
            tabla += '</div>';
            tabla += '</div>';
        });
        $("#datos").append(tabla);
       
        /*document.getElementById('TblListaActividades').innerHTML = "";
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
        $('#actividades').dataTable();*/
    };

}