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


    //Retorna una lista de tramites
    BLLTramites.prototype.ListActividadesInmuebles= function (tramite, Wsurl) {
        jsonData = "{'id':" + JSON.stringify(tramite) + "}";
        $.ajax({
            type: "POST",
            data: jsonData,
            url: Wsurl,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {

                if (result.d == null) {

                    BLLTramites.prototype.TablaActividadesxInmueble(result.d);
                }
                else {
                    BLLTramites.prototype.TablaActividadesxInmueble(result.d);
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
        tabla += "<th></th>"
        tabla += "</tr>";
        tabla += "</thead>";
        tabla += "<tbody>";
        $.each(tramites, function (i, item) {
           
            tabla += " <tr>";
            tabla += "<td style='width:100px'>" + item.CEDULA_P + "</td>";
            tabla += "<td>" + item.PROPIETARIO + "</td>";
            tabla += "<td>" + item.INMUEBLE + "</td>";
            
            if (item.IdTraInmueble == null)
            {
                tabla += "<td style='width:20px;height: 20px'>";
                tabla += "<img src='" + funcionUrlGlobal('/images_crm/Suspendido.png') + "'" + "id=" + item.id + " class='Infocl' title='No tiene tramite'></img>";
                tabla += "</td>";
                tabla += "<td style='width:20px;height: 20px'>";
                tabla += "</td>";
            }
            else
            {
                tabla += "<td style='width:20px;height: 20px'>";
                tabla += "<img src='" + funcionUrlGlobal('/images_crm/Completa.png') + "'" + "id=" + item.id + " class='Infocl' ></img>";
                tabla += "</td>";
             
                tabla += "<td style='width:20px;height: 20px'>";
                tabla += "<img src='" + funcionUrlGlobal('/images_crm/Crear.png') + "'" + "id=" + item.IdTraInmueble + " class='Infocl' ></img>";
                tabla += "</td>";

            }

            tabla += "</tr>";
           
        });
        tabla += "</tbody>";
        tabla += "</table>";
        $('#Tablatramites').append(tabla);
        $('#tramites').dataTable();
    };


    //Tabla de Bancos Traidos de MultiFox
    BLLTramites.prototype.TablaActividadesxInmueble = function (actividades) {
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
            tabla += '<button type="button" id="' + item.Id + '" class="btn-xs btn-success vertical-date pull-right Posicion">Ver</button>'
            // tabla += '<span class="vertical-date pull-right"> Saturday <br/> <small>12:17:43 PM</small> </span>';
            tabla += '<h2>' + item.Nombre + '</h2>';
            tabla += '<p>' + item.Descripcion + '</p>';
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