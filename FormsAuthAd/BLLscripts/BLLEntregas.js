﻿//sdsd

function BLLEntregas() {

    var WsProgramacionEntregas = funcionUrlGlobal("/Servicios/WEntregas.asmx/ListEntregasPor");///Listado de clientes
    var WsProgramacionProyectos = funcionUrlGlobal("/Servicios/WEntregas.asmx/ListInmueblesEntregasproyecto");///Listado de clientes
    var WsInsertEntregas = funcionUrlGlobal("/Servicios/WEntregas.asmx/InsertEntregas");///Listado de clientes
    var WsUpdateEntregas = funcionUrlGlobal("/Servicios/WEntregas.asmx/UpdateEntregas");///Listado de clientes
    var WsValidarEntregas = funcionUrlGlobal("/Servicios/WEntregas.asmx/ValidaReferencia");///Listado de clientes
    var WsConfirmarEntregas = funcionUrlGlobal("/Servicios/WEntregas.asmx/ConfirmaObservaciones");///Listado de clientes
    var WsMaestro = funcionUrlGlobal("/Servicios/WEntregas.asmx/LisInmueblesEntregasblackboard");///Listado de clientes

        


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
                    Entg.CrearTablaInmueblesBorrador(favorites);
                    $('#ModalAsignar').modal('hide');
                    favorites = [];

                }

            },
            error: function (error) { alert(error.responseText); }
        });

    }


    BLLEntregas.prototype.ConfirmarEntrega = function (lista) {

        jsonData = "{'a':" + JSON.stringify(lista) + "}";
        $.ajax({

            type: "POST", url: WsConfirmarEntregas, data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                if (result.d == 0) {
                    toastr.error('CRM Mayales - Notificacion' +
                           '</br></br>No se ha podido guardar');
                   
                }
                else {
                    toastr.success('CRM Mayales - Notificacion' +
                             '</br></br>Actualizado satisfactoriamente');
                   

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
    
    BLLEntregas.prototype.ListMaestro = function (proyecto) {
        
        jsonData = "{'proyecto':" + JSON.stringify(proyecto) + "}";
        $.ajax({
            type: "POST", url: WsMaestro,data:jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                if (result.d == null) {
                    BLLEntregas.CrearTablaMaestro(result.d)
                }
                else {
                    BLLEntregas.CrearTablaMaestro(result.d)



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


    BLLEntregas.prototype.ValidarReferencia = function (ref) {
        jsonData = "{'Referencia':" + JSON.stringify(ref) + "}";
        var estado;
        $.ajax({
            type: "POST", url: WsValidarEntregas, data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: false,
            success: function (result) {
               
                estado =  result.d;
            },
            error: function (error) { alert(error.responseText); }
        });
        return estado;
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
        tabla += "<th >Confirmado</th>";
        tabla += "<th>Observaciones</th>";
       
        tabla += "</tr>";
        tabla += "</thead>";
        tabla += "<tbody>";
        $.each(clientes, function (i, item) {

            tabla += "<tr>";
            tabla += "<td>" + item.ID_INMUEBLES_ENTREGAS + "</td>";
            tabla += "<td>" + item.NOMBRE_BLO + "</td>";
            tabla += "<td>" + item.INMUEBLE + "</td>";
          

            if (item.CONFIRMAOBRA == null || item.CONFIRMAOBRA == '0') {

                tabla += "<td><input class='check'  type='checkbox' id='" + item.ID_INMUEBLES_ENTREGAS + "'  disabled> </td>";
            } else if(item.CONFIRMAOBRA == '1') {
                tabla += "<td><input class='check' type='checkbox' id='" + item.ID_INMUEBLES_ENTREGAS + "'  disabled checked> </td>";
            }

            if (item.OBSERVACIONES != null) {
                tabla += "<td><input class='text' value='" + item.OBSERVACIONES + "' style='width:100%' type='text' disabled/></td>";
            } else {
                tabla += "<td><input class='text'  style='width:100%' type='text' disabled/></td>";
            }
            tabla += "</tr>";
        });
        tabla += "</tbody>";
        tabla += '</table>';
        $('#tablainmuebles').append(tabla);
        $('#esd').dataTable({"bProcessing": true,
            "sAutoWidth": false,
            "bDestroy":true,
            "sPaginationType": "bootstrap", // full_numbers
            "iDisplayStart ": 10,
            "iDisplayLength": 10,
            "bPaginate": false, //hide pagination
            "bFilter": false, //hide Search bar
            "bInfo": false, // hide showing entries 
        });

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
    


    BLLEntregas.CrearTablaMaestro = function (clientes) {
        document.getElementById('TablaMaestro').innerHTML = "";
        var tabla = '<table id="example23456565667" class="table table-striped table-bordered table-hover">';
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
            tabla += "<td>" + item.MZA + "</td>";
            tabla += "<td>" + item.INMUEBLE + "</td>";
            
            tabla += "</tr>";

        });
        tabla += "</tbody>";
        tabla += '</table>';
        $('#TablaMaestro').append(tabla);
        $('#example23456565667').dataTable();

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

            var result = item.DIROBRA.split("/")
           
            tabla += "<td>" + result[0]+ "</td>";
            
            if (item.ENVIADO == null) {
                tabla += "<td style='width:22px'><button id='" + item.ID_ENTREGAS + "'class='btn btn-success btn-xs enviar' type='button'>Enviar</button></td>";

                tabla += "<td style='width:20px;height: 20px' class='desistir' id=" + item.CLIENTE + "/" + item.INMUEBLE + "/" + item.DIAS + "><img src='" + funcionUrlGlobal('/images_crm/Suspendido.png') + "'></td>";
            } else {
                tabla += "<td></td>"
                tabla += "<td style='width:20px;height: 20px' tag='" + moment(item.ENVIADO).format("YYYY-DD-MM") + "/" + item.ENVIADOA + "/" + item.ENVIADOPOR +
                       "/" + item.ID_PROYECTO + "/" + moment(item.FECHAREG).format("YYYY-DD-MM") + "/" + item.DIROBRA + "/" + item.CONSECUTIVO + "'class='Info'id=" + item.ID_ENTREGAS + " ><img src='" + funcionUrlGlobal('/images_crm/Completa.png') + "'></td>";
               
            };
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

