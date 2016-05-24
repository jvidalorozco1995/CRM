function BLLActividades() {



 

    BLLActividades.Actividades = function (actividades) {
        $.each(actividades, function (i, item) {
            var empr = '<option value=' + item.Id_Actividad + '>';
            empr += item.Nombre;
            empr += '</option>';
            $('#Text9').append(empr);
        });
    }


    //   InserActividades
    BLLActividades.prototype.DeleteActividadxTramite = function (actividad, WsUrl) {
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
                     '</br></br>Se elimino esta actividad de manera exitosa en el sistema');


                } else {
                    toastr.error(' CRM - Notificacion' +
                        '</br>No se pudo eliminar esta actividad');
                }

            },
            error: function (obj, error, objError) { alert(objError); }
        });
    }

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

    //   InserActividades
    BLLActividades.prototype.InsertActividadxTramite = function (actividad, WsUrl) {
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



    BLLActividades.prototype.UpdateActividadxTramite = function (actividad, WsUrl) {

        alert(JSON.stringify(actividad));
        jsonData = "{ 'b':" + JSON.stringify(actividad) + "}";
        alert(JSON.stringify(jsonData));
        $.ajax({
            type: "POST", url: WsUrl,
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                if (result.d == 1) {
                    toastr.success(' CRM - Mayales notificacion' +
                     '</br></br>Se actualizo esta actividad de manera exitosa en el sistema');


                } else {
                    toastr.error(' CRM - Notificacion' +
                        '</br>No se pudo actualizar esta actividad');
                }

            },
            error: function (obj, error, objError) { alert(objError); }
        });
    }

    BLLActividades.prototype.ListActividades = function (Wsurl) {

     
        $.ajax({
            type: "POST", url: Wsurl,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                if (result.d == null) {

                    BLLActividades.prototype.TablaActividades(result.d);
                    BLLActividades.Actividades(result.d);
                }
                else {
                    BLLActividades.prototype.TablaActividades(result.d);
                    BLLActividades.Actividades(result.d);
                }

            },
            error: function (obj, error, objError) { alert(objError.responseText); }
        });
    }

    //Retorna una lista de tramites
    BLLActividades.prototype.ListActividadesxTramite = function (tramite, Wsurl) {

        jsonData = "{ 'tramite':" + JSON.stringify(tramite) + "}";
        $.ajax({
            type: "POST", url: Wsurl,
            data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                if (result.d == null) {

                    BLLActividades.prototype.TablaActividadesxTramite(result.d);
                }
                else {
                    BLLActividades.prototype.TablaActividadesxTramite(result.d);
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
        tabla += "<th>Nombre</th>";
        tabla += "<th>Descripcion</th>";
        tabla += "<th></th>"
        tabla += "</tr>";
        tabla += "</thead>";
        tabla += "<tbody>";
        $.each(actividades, function (i, item) {
           
           
            
            tabla += " <tr>";
            tabla += "<td class='EditarActi' type='button' id='" + item.Id_Actividad +"'>" + item.Nombre + "</td>";
            tabla += "<td>" + item.Descripcion + "</td>";
            tabla += "<td style='width:20px;height: 20px'>";
            if (item.Id_tramite == null)
            {

                tabla += "<img src='" + funcionUrlGlobal('/images_crm/checked_user.png') + "'class='AgregarActi' type='button' id='" + item.Id_Actividad + "' title='Agregar'></img>";
            }
            else
            {
            
               // tabla += "<img src='" + funcionUrlGlobal('/images_crm/user_error.png') + "'class='' type='button' id='" + item.Id + "' title='Quitar'></img>";
            }
            tabla += "</td>";
            tabla += "</tr>";
            ///images/cancel.png
        });
        tabla += "</tbody>";
        tabla += "</table>";
        $('#TblListaActividades').append(tabla);
        $('#actividades').dataTable();
    };

    
    //Tabla de Bancos Traidos de MultiFox
    BLLActividades.prototype.TablaActividadesxTramite = function (actividades) {
        document.getElementById('datos').innerHTML = "";
        var tabla = "";
       
        $.each(actividades, function (i, item) {
           
            tabla += '<div class="v-timeline vertical-container animate-panel"  data-child="vertical-timeline-block" data-delay="1">'
            tabla += '<div class="vertical-timeline-block">';
            tabla += '<div class="vertical-timeline-icon navy-bg" style="padding-top:8px">';
            tabla += '   <span>' + item.Posicion + '</span>';
            tabla += '</div>';
            tabla += '<div class="vertical-timeline-content">';
            tabla += '  <div class="p-sm">';
            tabla += '<button type="button" id="'+item.Id+'"class="btn btn-danger btn-btn-circle vertical-date pull-right RemoverActi">Quitar</button>'
            tabla += '<button type="button" id="' + item.Id + '" class="btn btn-success vertical-date pull-right Posicion">Posicion</button>'
           // tabla += '<span class="vertical-date pull-right"> Saturday <br/> <small>12:17:43 PM</small> </span>';
            tabla += '<h2>' + item.Nombre+'</h2>';
            tabla += '<p>'+item.Descripcion+'</p>';
            tabla += '</div>';
            tabla += ' <div class="panel-footer">';
          //  tabla += '   It is a long established fact that';
            tabla += '</div>';
            tabla += '</div>';
            tabla += '</div>';
            tabla += '</div>';
        });
        $("#datos").append(tabla);
       
     
    };

}