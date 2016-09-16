var ep = new BLLEmpresa();
var pro = new BLLProyectos();

function BLLComercial() {

    var Wsproyectos = funcionUrlGlobal("/ServiciosFox/WProyectos.asmx/LisbloProyec");///Listado de clientes


    BLLComercial.prototype._Cancelargestion = function (b, c, e) {
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


    //Tabla de Cliente
    BLLComercial.CrearTabla = function (clientes) {
        document.getElementById('TablaClientes').innerHTML = "";
        var tabla = '<table id="example2" class="table table-striped table-bordered table-hover">';
        tabla += "<thead>";
        tabla += "<tr >";
        tabla += "<th>Cedula</th>";
        tabla += "<th>Nombre</th>";
        tabla += "<th>Direccion</th>";
        tabla += "<th>Teléfono</th>";
        tabla += "<th></th>";
        tabla += "<th></th>";
        tabla += "<th></th>";
        tabla += "</tr>";
        tabla += "</thead>";
        tabla += "<tbody>";
        $.each(clientes, function (i, item) {
            tabla += "<tr>";
            tabla += "<td><a class='infDetalle' id='" + item.CEDULA + "'>" + item.CEDULA + "</a></td>";
            tabla += "<td>" + item.NOMBRES + '  ' + item.P_APELLIDO + '  ' + item.S_APELLIDO + "</td>";
            tabla += "<td>" + item.DIRECCION + "</td>";
            tabla += "<td>" + item.TELEFONO2 + "</td>";
            tabla += "<td style='width:20px;height: 20px'>";
            tabla += "<img src='" + funcionUrlGlobal('/images_crm/Crear.png') + "'class='BtnTarea' type='button' id='" + item.CEDULA + "/" + item.EMAIL + "' title='Crear Tareas'></img>";
            tabla += "</td>";

            if (item.ESTADO_I == null) {
                tabla += "<td style='width:20px;height: 20px'><img src='" + funcionUrlGlobal('/images_crm/agregar.png') + "' id='" + item.CEDULA + "/" + item.EMAIL + "' class='ClienteS' title='Agregar a separacion'></img></td>";

            }
            else {
                if (item.ESTADO_I == "D") {

                    tabla += "<td style='width:20px;height: 20px'><img src='" + funcionUrlGlobal('/images_crm/agregar.png') + "'  id='" + item.CEDULA + "/" + item.EMAIL + "' class='ClienteS' title='Agregar a separacion'></img></td>";
                }
                else {
                    if (item.ESTADO_I == "L") {
                        //tabla += "<td style='width:20px;height: 20px'><img src='..images_crm/agregar.png'  id='" + item.CEDULA + "/" + item.EMAIL + "' class='ClienteS' title='Agregar a separacion'></img></td>";
                        tabla += "<td style='width:20px;height: 20px' ><img src= '" + funcionUrlGlobal('/images_crm/Home2.png') + "' id='" + item.REFERENCIA + "' class='inmsdetalles' title='Detalle de separacion'></img></td>";
                    }
                    else {
                        if (item.ESTADO_I == "P") {
                            tabla += "<td style='width:20px;height: 20px' ><img src= '" + funcionUrlGlobal('/images_crm/Home2.png') + "' id='" + item.REFERENCIA + "' class='inmsdetalles' title='Detalle de separacion'></img></td>";

                        }
                        else {
                            tabla += "<td style='width:20px;height: 20px'><img src='" + funcionUrlGlobal('/images_crm/agregar.png') + "' id='" + item.CEDULA + "/" + item.EMAIL + "' class='s'  title='Agregar a separacion'></img></td>";
                        }
                    }
                }

            }
            if (item.ESTADO_C == "A") {
                tabla += "<td style='width:20px;height: 20px'><img src='" + funcionUrlGlobal('/images_crm/_Auser.png') + "' id='" + item.CEDULA + "/" + item.EMAIL + "'></img></td>";
            }
            else {
                if (item.ESTADO_C == "N") {
                    tabla += "<td style='width:20px;height: 20px'><img src='" + funcionUrlGlobal('/images_crm/user_error.png') + "' id='" + item.CEDULA + "/" + item.EMAIL + "' ></img></td>";
                }
                else {
                    if (item.ESTADO_C == "C") {
                        tabla += "<td style='width:20px;height: 20px'><img src='" + funcionUrlGlobal('/images_crm/checked_user.png') + "' id='" + item.CEDULA + "/" + item.EMAIL + "'></img></td>";
                    }
                    else {
                        if (item.ESTADO_C == null) { tabla += "<td style='width:20px;height: 20px'><img src='" + funcionUrlGlobal('/images_crm/_Auser.png') + "' id='" + item.CEDULA + "/" + item.EMAIL + "'></img></td>"; }
                    }
                }
            }
            tabla += "</tr>";
        });
        tabla += "</tbody>";
        tabla += '</table>';
        $('#TablaClientes').append(tabla);
        $('#example2').dataTable();

    }


}

