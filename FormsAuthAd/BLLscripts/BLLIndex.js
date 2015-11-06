
var tareas = new BLLTareas();
function BLLIndex() {

    var WtareasUser = "/Servicios/WTareas.asmx/ListareasTra";//Listado de tareas asignados a un trabajador

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

     //Tabla listado de tareas para el asesor
    BLLIndex.LisTareasTabla = function (clientes) {
        //document.getElementById('listareas').innerHTML = "";
        var tabla = '<table id="index" class="table table-striped table-bordered table-hover">';
        tabla += "<thead>";
        tabla += "<tr>";
        tabla += "<th>Nombre</th>";
        tabla += "<th>Concepto</th>";
        tabla += "<th>Fecha</th>";
        tabla += "<th></th>";
        tabla += "</tr>";
        tabla += "</thead>";
        tabla += "<tbody>";
        $.each(clientes, function (i, item) {
            tabla += " <tr>";
            tabla += "<td>" + item.NOMBRES + '  ' + item.P_APELLIDO + '  ' + item.S_APELLIDO + "</td>";
            tabla += "<td>" + item.CONCEPTO + "</td>";
            tabla += "<td>" + moment(item.FECHAINICIO).format("YYYY/DD/MM"); + "</td>";
            switch (item.ESTADO) {
                case "E":
                    tabla += "<td><img src='../../images_crm/Suspendido.png' class='historial2' id=" + item.ID_TAREA + "/" + item.CEDULA + " href='' /></td>";
                    break
                case "P":
                    tabla += "<td><img src='../../images_crm/Pospuesta.png' class='historial2' id=" + item.ID_TAREA + "/" + item.CEDULA + " href=''/></td>";
                    break
                case "V":
                    tabla += "<td><img src='../../images_crm/Espera.png' class='historial2' id=" + item.ID_TAREA + "/" + item.CEDULA + " href=''/></td>";
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