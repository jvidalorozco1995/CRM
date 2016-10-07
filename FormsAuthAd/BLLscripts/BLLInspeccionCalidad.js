//sdsd

function BLLInspeccionCalidad() {

    var WsAmbientes = funcionUrlGlobal("/Servicios/WAmbiente.asmx/ListaAmbientes");///Listado de clientes
    var WsItems = funcionUrlGlobal("/Servicios/WAmbiente.asmx/ListItemXambientenoincluido");///Listado de clientes
    var WsInsertAmbiente = funcionUrlGlobal("/Servicios/WAmbiente.asmx/InsertAmbiente");///Listado de clientes
    var WsInsertItem = funcionUrlGlobal("/Servicios/WAmbiente.asmx/InsertItem");///Listado de clientes
    var WsListaItemXambiente = funcionUrlGlobal("/Servicios/WAmbiente.asmx/ListItemXambiente");///Listado de clientes
    var WsInsertItemXambiente = funcionUrlGlobal("/Servicios/WAmbiente.asmx/InsertItemxambiente");///Listado de clientes
    var WsDeleteItemXambiente = funcionUrlGlobal("/Servicios/WAmbiente.asmx/DeleteItemXambiente");///Listado de clientes
    var WsUpdatePosicionItemXambiente = funcionUrlGlobal("/Servicios/WAmbiente.asmx/Updateitemxambiente");///Listado de clientes
    var WsUpdateAmbiente = funcionUrlGlobal("/Servicios/WAmbiente.asmx/UpdateAmbiente");///Listado de clientes
    var WsUpdateItem = funcionUrlGlobal("/Servicios/WAmbiente.asmx/UpdateItem");///Listado de clientes
    
    

    BLLInspeccionCalidad.prototype.DeleteItemXambiente = function (id) {


        jsonData = "{'b':" + JSON.stringify(id) + "}";

        $.ajax({
            type: "POST",
            data: jsonData,
            url: WsDeleteItemXambiente,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            success: function (result) {
                if (result.d != null) {

                  

                }
                else {
                    toastr.error(' CRM - Mayales notificacion' +
                      '</br></br>No se pudo agregar en el sistema');
                }

            },
            error: function (obj, error, objError) { alert(objError.responseText); }
        });
    }

    BLLInspeccionCalidad.prototype.UpdatePosicionItemXambiente = function (item) {


        jsonData = "{'b':" + JSON.stringify(item) + "}";

        $.ajax({
            type: "POST",
            data: jsonData,
            url: WsUpdatePosicionItemXambiente,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                if (result.d != null) {

                }
                else {
                    toastr.error(' CRM - Mayales notificacion' +
                      '</br></br>No se pudo mover en el sistema');
                }

            },
            error: function (obj, error, objError) { alert(objError.responseText); }
        });
    }

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


    BLLInspeccionCalidad.prototype.ListItem = function (id) {

        jsonData = "{'id':" + JSON.stringify(id) + "}";
        $.ajax({

            type: "POST", url: WsItems,data:jsonData,
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

    BLLInspeccionCalidad.prototype.ListItemXambientes = function (id) {

        jsonData = "{'id':" + JSON.stringify(id) + "}";
        $.ajax({

            type: "POST", url: WsListaItemXambiente, data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                if (result.d == null) {

                }
                else {

                    BLLInspeccionCalidad.CrearTablaItemsXambientes(result.d);
                }

            },
            error: function (error) { alert(error.responseText); }
        });

    }

    BLLInspeccionCalidad.prototype.AgregarItemXAmbiente = function (itemxambiente) {


        jsonData = "{'b':" + JSON.stringify(itemxambiente) + "}";

        $.ajax({
            type: "POST",
            data: jsonData,
            url: WsInsertItemXambiente,
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

    BLLInspeccionCalidad.prototype.UpdateItem= function (item) {


        jsonData = "{'b':" + JSON.stringify(item) + "}";

        $.ajax({
            type: "POST",
            data: jsonData,
            url: WsUpdateItem,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                if (result.d != null) {

                    toastr.success(' CRM - Mayales notificacion' +
                      '</br></br>Actualizado satisfactoriamente');

                }
                else {
                    toastr.error(' CRM - Mayales notificacion' +
                      '</br></br>No se pudo agregar en el sistema');
                }

            },
            error: function (obj, error, objError) { alert(objError.responseText); }
        });
    }



    BLLInspeccionCalidad.prototype.UpdateAmbiente = function (ambiente) {


        jsonData = "{'b':" + JSON.stringify(ambiente) + "}";

        $.ajax({
            type: "POST",
            data: jsonData,
            url: WsUpdateAmbiente,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                if (result.d != null) {

                    toastr.success(' CRM - Mayales notificacion' +
                      '</br></br>Actualizado satisfactoriamente');

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
        var tabla = '<table id="exadfdfd" class="table table-striped table-bordered table-hover">';
        tabla += "<thead>";
        tabla += "<tr>";
        tabla += "<th>No</th>";
        tabla += "<th>Ambiente</th>";
        tabla += "<th></th>";
        tabla += "<th></th>";
        tabla += "</tr>";
        tabla += "</thead>";
        tabla += "<tbody>";
        $.each(ambientes, function (i, item) {

            tabla += "<tr>";
            tabla += "<td>" + item.Id + "</td>";
            tabla += "<td>" + item.Ambiente1 + "</td>";
            tabla += "<td style='width:22px'><button id='" + item.Id + "/" + item.Ambiente1 + "'class='btn btn-success btn-xs ver' type='button'>Ver</button></td>";
            tabla += "<td style='width:22px'><button id='" + item.Id + "/" + item.Ambiente1 + "'class='btn btn-success btn-xs EditarAmbiente' type='button'>Editar</button></td>";

        });
        tabla += "</tbody>";
        tabla += '</table>';
        $('#TablaAmbientes').append(tabla);
        $('#exadfdfd').dataTable();

    }


    

    BLLInspeccionCalidad.CrearTablaItemsXambientes = function (itemsxambientes) {
        
        var PosicionAnterior = 0;
        document.getElementById('tablaitemsxambiente').innerHTML = "";
        var tabla = '<table id="exampsdsd" class="table table-striped table-bordered table-hover">';
        tabla += "<thead>";
        tabla += "<tr>";
        tabla += "<th>No</th>";
        tabla += "<th>Item</th>";
        tabla += "<th></th>";
        tabla += "<th></th>";
        tabla += "</tr>";
        tabla += "</thead>";
        tabla += "<tbody>";
        $.each(itemsxambientes, function (i, item) {
            
            tabla += "<tr>";
            tabla += "<td>" + item.Consecutivo + "</td>";
            tabla += "<td>" + item.Item + "</td>";
           
           
            if (item.Consecutivo > 1 && item.Consecutivo != itemsxambientes.length) {

                PosicionAnterior = item.Consecutivo - 1;

                if (PosicionAnterior < item.Consecutivo ) {

                    tabla += "<td style='width:60px'><button id='" + JSON.stringify(item) + "'class='btn btn-primary btn-xs Subir ' type='button'>↑</button><button id='" + JSON.stringify(item) + "'class='btn btn-primary btn-xs Bajar ' type='button'>↓</button></td>";
                      

                } else {

                    tabla += "<td style='width:60px'><button id='" + JSON.stringify(item) + "'class='btn btn-success btn-xs ' type='button'>|ARRIBA</button></td>";
                }

            } else if (item.Consecutivo == itemsxambientes.length) {
                tabla += "<td style='width:60px'><button id='" + JSON.stringify(item) + "'class='btn btn-primary btn-xs Subir' type='button'>↑</button></td>";
            }
            else {

                tabla += "<td style='width:60px'><button id='" + JSON.stringify(item) + "'class='btn btn-primary btn-xs Bajar' type='button'>↓</button></td>";
            }
  
            tabla += "<td style='width:22px'><button id='" + item.Id + "'class='btn btn-danger btn-xs Quitar' type='button'>-</button></td>";

        });
        tabla += "</tbody>";
        tabla += '</table>';
        $('#tablaitemsxambiente').append(tabla);
        $('#exampsdsd').dataTable({
            "bProcessing": true,
            "sAutoWidth": false,
            "bDestroy": true,
            "sPaginationType": "bootstrap", // full_numbers
            "iDisplayStart ": 10,
            "iDisplayLength": 10,
            "bPaginate": false, //hide pagination
            "bFilter": false, //hide Search bar
            "bInfo": false, // hide showing entrie
            "bSort": false
        });
    }

    BLLInspeccionCalidad.CrearTablaItems = function (items) {
        var posicion = 0;
        document.getElementById('tablaitems').innerHTML = "";
        var tabla = '<table id="example2" class="table table-striped table-bordered table-hover">';
        tabla += "<thead>";
        tabla += "<tr>";
        tabla += "<th>No</th>";
        tabla += "<th>Item</th>";
        tabla += "<th></th>";
        tabla += "<th></th>";
        tabla += "</tr>";
        tabla += "</thead>";
        tabla += "<tbody>";
        $.each(items, function (i, item) {

            tabla += "<tr>";
            tabla += "<td>" + item.Id + "</td>";
            tabla += "<td>" + item.Item1 + "</td>";
            tabla += "<td style='width:22px'><button id='" + item.Id + "'class='btn btn-primary btn-xs Guardar' type='button'>+</button></td>";
            tabla += "<td style='width:22px'><button id='" + item.Id + "/" + item.Item1 + "'class='btn btn-success btn-xs EditarItem' type='button'>Editar</button></td>";


        });
        tabla += "</tbody>";
        tabla += '</table>';
        $('#tablaitems').append(tabla);
        $('#example2').dataTable();

    }


}

