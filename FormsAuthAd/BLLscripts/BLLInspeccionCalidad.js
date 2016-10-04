//sdsd

function BLLInspeccionCalidad() {

    var WsAmbientes = funcionUrlGlobal("/Servicios/WAmbiente.asmx/ListaAmbientes");///Listado de clientes
    var WsItems = funcionUrlGlobal("/Servicios/WAmbiente.asmx/ListaItems");///Listado de clientes
    var WsInsertAmbiente = funcionUrlGlobal("/Servicios/WAmbiente.asmx/InsertAmbiente");///Listado de clientes
    var WsInsertItem = funcionUrlGlobal("/Servicios/WAmbiente.asmx/InsertItem");///Listado de clientes


    BLLInspeccionCalidad.prototype.ListAmbiente = function () {

       
        $.ajax({

            type: "POST", url: WsAmbientes,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                if (result.d == null) {

                }
                else {
               
                    BLLInspeccionCalidad.CrearTabla(result.d);
                }

            },
            error: function (error) { alert(error.responseText); }
        });

    }


    BLLInspeccionCalidad.prototype.ListItem = function () {


        $.ajax({

            type: "POST", url: WsItems,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                if (result.d == null) {

                }
                else {

                    BLLInspeccionCalidad.CrearTablaItems(result.d);
                }

            },
            error: function (error) { alert(error.responseText); }
        });

    }

  
    BLLInspeccionCalidad.prototype.InsertarAmbiente = function (ambiente) {


        jsonData = "{'b':" + JSON.stringify(ambiente) + "}";

        $.ajax({
            type: "POST",
            data: jsonData,
            url: WsInsertAmbiente,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                if (result.d != null) {

                    toastr.success(' CRM - Mayales notificacion' +
                      '</br></br>Guardado satisfactoriamente');

                }
                else {
                    toastr.error(' CRM - Mayales notificacion' +
                      '</br></br>No se pudo agregar en el sistema');
                }

            },
            error: function (obj, error, objError) { alert(objError.responseText); }
        });
    }



    BLLInspeccionCalidad.prototype.InsertarItem = function (item) {


        jsonData = "{'b':" + JSON.stringify(item) + "}";

        $.ajax({
            type: "POST",
            data: jsonData,
            url: WsInsertItem,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                if (result.d != null) {

                    toastr.success(' CRM - Mayales notificacion' +
                      '</br></br>Guardado satisfactoriamente');

                }
                else {
                    toastr.error(' CRM - Mayales notificacion' +
                      '</br></br>No se pudo agregar en el sistema');
                }

            },
            error: function (obj, error, objError) { alert(objError.responseText); }
        });
    }



    BLLInspeccionCalidad.CrearTabla = function (ambientes) {
        document.getElementById('TablaAmbientes').innerHTML = "";
        var tabla = '<table id="example2" class="table table-striped table-bordered table-hover">';
        tabla += "<thead>";
        tabla += "<tr>";
        tabla += "<th>No</th>";
        tabla += "<th>Ambiente</th>";
        tabla += "<th></th>";
        tabla += "</tr>";
        tabla += "</thead>";
        tabla += "<tbody>";
        $.each(ambientes, function (i, item) {

            tabla += "<tr>";
            tabla += "<td>" + item.Id + "</td>";
            tabla += "<td>" + item.Ambiente1 + "</td>";
            tabla += "<td style='width:22px'><button id='" + item.Id + "/" + item.Ambiente1 + "'class='btn btn-success btn-xs ver' type='button'>Ver</button></td>";


        });
        tabla += "</tbody>";
        tabla += '</table>';
        $('#TablaAmbientes').append(tabla);
        $('#example2').dataTable();

    }


    BLLInspeccionCalidad.CrearTablaItems = function (items) {
        var posicion = 0;
        document.getElementById('tablaitems').innerHTML = "";
        var tabla = '<table id="example2" class="table table-striped table-bordered table-hover">';
        tabla += "<thead>";
        tabla += "<tr>";
        tabla += "<th>No</th>";
        tabla += "<th>Ambiente</th>";
        tabla += "<th></th>";
        tabla += "</tr>";
        tabla += "</thead>";
        tabla += "<tbody>";
        $.each(items, function (i, item) {

            tabla += "<tr>";
            tabla += "<td>" + item.Id + "</td>";
            tabla += "<td>" + item.Item1 + "</td>";
            tabla += "<td style='width:22px'><button id='" + item.Id + "/" + item.Item1 + "'class='btn btn-primary btn-xs ver' type='button'>+</button></td>";


        });
        tabla += "</tbody>";
        tabla += '</table>';
        $('#tablaitems').append(tabla);
        $('#example2').dataTable();

    }


}

