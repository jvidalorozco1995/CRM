
var tareas = new BLLTareas();
function BLLIndex() {

    var WtareasUser = funcionUrlGlobal("/Servicios/WTareas.asmx/ListareasTra");//Listado de tareas asignados a un trabajador
    var WsCancelarg = funcionUrlGlobal("/Servicios/WTareas.asmx/Cancelargestion");

    BLLIndex.prototype.getTareas = function () {
       //jsonData = "{'t':" + JSON.stringify(trabajador) + "}";
            $.ajax({
                type: "POST", url: WtareasUser,
                contentType: "application/json; charset=utf-8",
                dataType: 'json',
                async: true,
                success: function (result) {
                    if (result.d === null) {
                        //document.getElementById('listareas').innerHTML = "";
                        BLLIndex.LisTareasTabla(result.d);
                    }
                    else {
                        //document.getElementById('listareas').innerHTML = "";
                        BLLIndex.LisTareasTabla(result.d);

                    }

                },
                error: function (error) { alert(error.responseText); }
            })
    }


    BLLIndex.prototype._Cancelargestion = function (b, c, e) {
        Jsondata = "{'b':" + JSON.stringify(b) + ",'c':" + JSON.stringify(c) + ",'e':" + JSON.stringify(e) + "}";
        $.ajax({
            type: "POST", url: WsCancelarg, data: Jsondata,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                if (result.d == 0) {
                    toastr.error('CRM - Mayales - Error al Terminar la gestion para el cliente');
                    $('#Cancelargestion').modal("hide");
                }
                else {
                    toastr.error('CRM - Mayales - ' +
                        '</br>Gestion terminada de manera exitosa');
                    $('#Cancelargestion').modal("hide");
                    $('#infoTareas').modal("hide");
                }

            },
            error: function (error) { alert(error.responseText); }
        });

    }

    BLLIndex.prototype.Etareas = function (t, bitacora) {
        jsonData = "{ 't':" + JSON.stringify(t) + ",'b':" + JSON.stringify(bitacora) + " }";
        console.log(JSON.stringify(t));
        $.ajax({
            type: "POST", url: WSEsTareas, data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                if (result.d == 0) {
                    toastr.error('CRM Mayales' +
                        '</br>No fue posible llevar a cabo el proceso..');
                } else {
                    toastr.success('CRM Mayales' +
                        '</br>Se ha culminado la tarea programa de manera Exitosa');
                    $('#infoTareas').modal('hide');
                }

            },
            error: function (error) { alert(error.responseText); }
        });
    }

     //Tabla listado de tareas para el asesor
    BLLIndex.LisTareasTabla = function (clientes) {
        document.getElementById('listareas').innerHTML = "";

        var tabla = '<table id="index" class="table table-striped table-bordered table-hover">';
        tabla += "<thead>";
        tabla += "<tr>";
        tabla += "<th>Nombre</th>";
        tabla += "<th>Concepto</th>";
        tabla += "<th>Fecha</th>";
        tabla += "<th>Teléfono</th>";
        tabla += "<th></th>";
        tabla += "</tr>";
        tabla += "</thead>";
        tabla += "<tbody>";
        $.each(clientes, function (i, item) {
            tabla += " <tr>";
            tabla += "<td>" + item.NOMBRES + '  ' + item.P_APELLIDO + '  ' + item.S_APELLIDO + "</td>";
            tabla += "<td>" + item.CONCEPTO + "</td>";
            tabla += "<td>" + moment(item.FECHAINICIO).format("YYYY/DD/MM"); + "</td>";
            tabla += "<td>" + item.TELEFONO2 + "</td>";
            switch (item.ESTADO) {
                case "E":
                    tabla += "<td><img src='" + funcionUrlGlobal('/images_crm/Suspendido.png') + "'' class='historial2' id=" + item.ID_TAREA + "/" + item.CEDULA + " href='' /></td>";
                    break
                case "P":
                    tabla += "<td><img src='"+  funcionUrlGlobal('/images_crm/Pospuesta.png') +"' class='historial2' id=" + item.ID_TAREA + "/" + item.CEDULA + " href=''/></td>";
                    break
                case "V":
                    tabla += "<td><img src='" + funcionUrlGlobal('/images_crm/Espera.png') + "' class='historial2' id=" + item.ID_TAREA + "/" + item.CEDULA + " href=''/></td>";
                    break

            }
           
            tabla += "</tr>";
        });
        tabla += "</tbody>";
        tabla += '</table>';
        $('#listareas').append(tabla);
        $('#index').dataTable();
    }


    BLLIndex.prototype.CumplimientoTareas = function (trabajador) {
        tareas.EstimacionTareas(trabajador);
    }
}