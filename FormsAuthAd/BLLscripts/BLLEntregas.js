

function BLLEntregas() {

    var WsProgramacionEntregas = funcionUrlGlobal("/Servicios/WEntregas.asmx/ListEntregasPor");///Listado de clientes
    var WsProgramacionProyectos = funcionUrlGlobal("/Servicios/WEntregas.asmx/ListInmueblesEntregasproyecto");///Listado de clientes
    var WsInsertEntregas = funcionUrlGlobal("/Servicios/WEntregas.asmx/InsertEntregas");///Listado de clientes
    var WsUpdateEntregas = funcionUrlGlobal("/Servicios/WEntregas.asmx/UpdateEntregas");///Listado de clientes

    BLLEntregas.prototype.InsertEntregas = function (p, lista) {

        jsonData = "{'b':" + JSON.stringify(p) + ",'lista':" + JSON.stringify(lista) + "}";
        $.ajax({
            
            type: "POST", url: WsInsertEntregas, data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                if (result.d == null) {
                   
                }
                else {
                    toastr.success('CRM Mayales - Notificacion' +
                             '</br></br>Solicitud Guardada');

                    setTimeout(function () { Entg.ListProgramacionEntregas(); }, 1000);
                    favorites = [];
                    $('#ModalAsignar').modal('hide');

                }

            },
            error: function (error) { alert(error.responseText); }
        });

    }

    BLLEntregas.prototype.UpdateEntregas = function (id) {

        jsonData = "{'i':" + JSON.stringify(id) + "}";
        $.ajax({

            type: "POST", url: WsUpdateEntregas, data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                if (result.d == null) {

                }
                else {
                    toastr.success('CRM Mayales - Notificacion' +
                             '</br></br>Solicitud Enviada');
                    setTimeout(function () { Entg.ListProgramacionEntregas(); }, 1000);
                  
                }

            },
            error: function (error) { alert(error.responseText); }
        });

    }
    

    BLLEntregas.prototype.ListProgramacionEntregas = function () {
       
        $.ajax({
            type: "POST", url: WsProgramacionEntregas,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                if (result.d == null) {
                    BLLEntregas.CrearTabla(result.d)
                }
                else {
                    BLLEntregas.CrearTabla(result.d)
             
                    
                    
                }

            },
            error: function (error) { alert(error.responseText); }
        });

    }

    BLLEntregas.prototype.ListInmueblesProyecto = function (p) {

        jsonData = "{ 'p':" + JSON.stringify(p) + " }"
   
        $.ajax({
            type: "POST", url: WsProgramacionProyectos, data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                if (result.d == null) {
                    BLLEntregas.CrearTablaInmuebles(result.d)
                }
                else {
                    BLLEntregas.CrearTablaInmuebles(result.d)
                }

            },
            error: function (error) { alert(error.responseText); }
        });

    }

    

    BLLEntregas.CrearTablaInmuebles = function (clientes) {
        document.getElementById('tablainmuebles').innerHTML = "";
        var tabla = '<table id="esd" class="table table-striped table-bordered table-hover">';
        tabla += "<thead>";
        tabla += "<tr>";
        tabla += "<th>No</th>";
        tabla += "<th>Manzana</th>";
        tabla += "<th>Inmueble</th>";
        tabla += "</tr>";
        tabla += "</thead>";
        tabla += "<tbody>";
        $.each(clientes, function (i, item) {

            tabla += "<tr>";
            tabla += "<td>" + item.ID_INMUEBLES_ENTREGAS + "</td>";
            tabla += "<td>" + item.NOMBRE_BLO + "</td>";
            tabla += "<td>" + item.INMUEBLE + "</td>";
         
        });
        tabla += "</tbody>";
        tabla += '</table>';
        $('#tablainmuebles').append(tabla);
        $('#esd').dataTable();

    }
    

    BLLEntregas.prototype.CrearTablaInmueblesBorrador = function (clientes) {
        document.getElementById('TablaInmueblesEntregas').innerHTML = "";
        var tabla = '<table id="esd2" class="table table-striped table-bordered table-hover">';
        tabla += "<thead>";
        tabla += "<tr>";
        tabla += "<th>No</th>";
        tabla += "<th>Manzana</th>";
        tabla += "<th>Inmueble</th>";
        tabla += "<th></th>";
        tabla += "</tr>";
        tabla += "</thead>";
        tabla += "<tbody>";
        $.each(clientes, function (i, item) {

           // if (item.REFERENCIA_INMUEBLE )
            tabla += "<tr>";
            tabla += "<td>" + item.REFERENCIA_INMUEBLE+ "</td>";
            tabla += "<td>" + item.MANZANA_O_TORRE + "</td>";
            tabla += "<td>" + item.CASA_O_APTO + "</td>";
            tabla += "<td style='width:22px'><button id='" + item.REFERENCIA_INMUEBLE + "'class='btn btn-warning btn-xs quitar' type='button'>-</button></td>";
        });
        tabla += "</tbody>";
        tabla += '</table>';
        $('#TablaInmueblesEntregas').append(tabla);
        $('#esd2').dataTable();

    }
    


    BLLEntregas.CrearTabla = function (clientes) {
        document.getElementById('TablaProgramacion').innerHTML = "";
        var tabla = '<table id="example2" class="table table-striped table-bordered table-hover">';
        tabla += "<thead>";
        tabla += "<tr>";
        tabla += "<th>No</th>";
        tabla += "<th>Proyecto</th>";
        tabla += "<th>Fecha</th>";
        tabla += "<th>Dir Obra</th>";
        tabla += "<th></th>";
        tabla += "<th></th>";
        tabla += "</tr>";
        tabla += "</thead>";
        tabla += "<tbody>";
        $.each(clientes, function (i, item) {
            
            tabla += "<tr>";
            tabla += "<td>" + item.CONSECUTIVO + "</td>";
            tabla += "<td>" + item.ID_PROYECTO + "</td>";
            tabla += "<td>" + moment(item.FECHAREG).format("YYYY/DD/MM"); + "</td>";
            tabla += "<td>" + item.DIROBRA + "</td>";
            
            if (item.ENVIADO == null) {
                tabla += "<td style='width:22px'><button id='" + item.ID_ENTREGAS + "'class='btn btn-success btn-xs enviar' type='button'>Enviar</button></td>";

                tabla += "<td style='width:20px;height: 20px' class='desistir' id=" + item.CLIENTE + "/" + item.INMUEBLE + "/" + item.DIAS + "><img src='" + funcionUrlGlobal('/images_crm/Suspendido.png') + "'></td>";
            } else {
                tabla += "<td></td>"
                tabla += "<td style='width:20px;height: 20px' tag='" + moment(item.ENVIADO).format("YYYY-DD-MM") + "/" + item.ENVIADOA + "/" + item.ENVIADOPOR + "'class='Info'id=" + item.ID_PROYECTO + " ><img src='" + funcionUrlGlobal('/images_crm/Completa.png') + "'></td>";
               
            }
           

          ;
        });
        tabla += "</tbody>";
        tabla += '</table>';
        $('#TablaProgramacion').append(tabla);
        $('#example2').dataTable();

    }

  /*  alert(result.d[0].ENVIADO);
    $("#TxtFechaEnviado").val(moment(result.d[0].ENVIADO).format("YYYY/DD/MM"));
    $("#TxtEnviadoA").val(result.d[0].ENVIADOA);
    $("#TxtEnviadoPor").val(result.d[0].ENVIADOPOR);*/
}

