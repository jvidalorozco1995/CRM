
var exportJsonToCSV;
var jsonObj;
function BLLClientes() {

    WSUpdateCliente = funcionUrlGlobal("/Servicios/WClientes.asmx/UpdateCLiente");
    WLisclientes = funcionUrlGlobal("/Servicios/WClientes.asmx/LClientes");
    Wgetcliente = funcionUrlGlobal("/Servicios/WClientes.asmx/GetClientesT");
    WClienteTareas = funcionUrlGlobal("/Servicios/WClientes.asmx/ClienteTareas");

    WClienteTareasxusuario = funcionUrlGlobal("/Servicios/WClientes.asmx/ClienteTareasUsuario");

    
    WClientehistorial = funcionUrlGlobal("/Servicios/WClientes.asmx/Historialcliente");
    WClienteFehas = funcionUrlGlobal("/Servicios/WClientes.asmx/ListClientesfechasAP");
    var WLisepracion = funcionUrlGlobal("/Servicios/WInmuebles.asmx/Listadosepracion");
    WValidarcliente = funcionUrlGlobal("/Servicios/WClientes.asmx/_ValidarClientes");
   

    var color = null;

    var dtoJson = null;
    var JSONData = []

    ///exporta un json a csv
     BLLClientes.prototype.exportJsonToCSV = function () {
         var ShowLabel = "Campo1;campo2,Campo3;campo4;Campo5;campo6;Campo7;campo8;campo9";
         $.each(dtoJson, function (i, item) {
             JSONData.push(new
                 Object({


                     "NOMBRE": item.NOMBRES,
                     "PRIMER APELLIDO": item.P_APELLIDO,
                     "SEGUNDO APELLIDO": item.S_APELLIDO,
                     "DIRECCION": item.DIRECCION,
                     "BARRIO": item.BARRIO,
                     "ESTADO CIVIL": item.ESTADO_CIVIL,
                     "SUELDO": item.SUELDO,
                     "PRESUPUESTO DE COMPRA": item.PRESU_COMPRA,
                     "INMUEBLE DE INTERES": item.INMU_INTERES,
                     "EMPRESA DONDE LABORA": item.NOMBRE_EMP,
                     "TELEFONO DE EMPRESA": item.TEL_EMP,
                     "TELEFONO": item.TELEFONO2,
                     "PROYECTO DE INTERES": $.trim(item.PROYECTO_INT),
                     "FECHA DE REGISTRO": moment(item.FECHAINICIO).format("YYYY/MM/DD"),
                     "ASESOR": item.ASESOR,
                     "SALA DE VENTAS": item.NOMBRE_SALA,

                 }));
         })

         var arrData = typeof JSONData != 'object' ? JSON.parse(JSONData) : JSONData;
         var CSV = '';
         if (ShowLabel) {
             var row = "";

             for (var index in arrData[0]) {
                 row += index+ ',';
             }
             row = row.slice(0, -1);
             CSV += row + '\r\n';
         }

         //1st loop is to extract each row
         for (var i = 0; i < arrData.length; i++) {
             var row = "";
             for (var index in arrData[i]) {
                 row += '"' + arrData[i][index] + '",';
             }
             row.slice(0, row.length - 1);
             CSV += row + '\r\n';
         }

         if (CSV == '') {
             alert("Invalid data");
             return;
         }

         var link = document.createElement("a"); 
         link.id = "lnkDwnldLnk";
         document.body.appendChild(link);

         var csv = CSV;
         blob = new Blob(["\ufeff", csv]);
         var csvUrl = window.webkitURL.createObjectURL(blob);
         var filename = 'Consolidado.csv';
         $("#lnkDwnldLnk")
         .attr({
             'download': filename,
             'href': csvUrl
         });

         $('#lnkDwnldLnk')[0].click();
         document.body.removeChild(link);
       }

    BLLClientes.prototype.CrearCliente = function (cliente, WsUrl) {
        jsonData = "{ 'c':" + JSON.stringify(cliente) + " }";

        $.ajax({
            type: "POST", url: WsUrl, data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                if (result.d === 1) {
                    toastr.success(' CRM - Mayales notificacion' +
                     '</br></br>Cliente Registrado de Manera Exitosa en el Sistema');
                    $('#BtnUpdate').show();
                    $('#BtnRegCliente').hide();
                    $('#Btnsocio').show();
                    $('#TxtIdentidad').attr('readonly',true)
                    jsonData = null;
                    $('#Btnsocio').show()
                } else {
                    toastr.error(' CRM - Notificacion' +
                        '</br>Ya existe un cliente con el mismo numero de indentificacion al que intenta registrar');
                    jsonData = null;
                }

            },
            error: function (obj, error, objError) { alert(objError); }
        });
    }

    BLLClientes.prototype.CrearClienteAs = function (cliente, WsUrl,cl) {
        jsonData = "{ 'c':" + JSON.stringify(cliente) + "}";

        $.ajax({
            type: "POST", url: WsUrl, data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                if (result.d === 1) {
                    toastr.success(' CRM - Mayales notificacion' +
                     '</br></br>Persona registrada de manera exitosa en el sistema');
                    $('#BtnUpdate').show();
                    $('#BtnRegCliente').hide();
                    $('#Btnsocio').show();

                } else {
                    toastr.error(' CRM - Notificacion' +
                        '</br>Ya existe un cliente con el mismo numero de indentificacion al que intenta registrar');
                }

            },
            error: function (obj, error, objError) { alert(objError); }
        });
    }

    BLLClientes.prototype.ClienteHistorial = function (cliente) {
        jsonData = "{ 'c':" + JSON.stringify(cliente) + " }";

        $.ajax({
            type: "POST", url: WClientehistorial, data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
               
                if (result.d === null)
                {
                    BLLClientes.TablaClienteshistorial(result.d);
                }
                else
                {
                    BLLClientes.TablaClienteshistorial(result.d);
                }

            },
            error: function (obj, error, objError) { alert(objError); }
        });
    }

    BLLClientes.prototype.ClienteFechas = function (inicio,fin) {
        jsonData = "{ 'fechaini':" + JSON.stringify(inicio) + ",'fechafin':" + JSON.stringify(fin) + " }";
        $.ajax({
            type: "POST", url: WClienteFehas,data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {

                if (result.d === null)
                {
                    BLLClientes.TablaClientesFechas(result.d);
                }
                else
                {
                   
                    BLLClientes.TablaClientesFechas(result.d);
                }

            },
            error: function (obj, error, objError) { alert(objError); }
        });
    }

    //Meotodo para actualizar Clientes
    BLLClientes.prototype.UpdateClientes = function (cliente) {
      

        jsonData = "{ 'c':" + JSON.stringify(cliente) + " }";
        $.ajax({
            type: "POST", url: WSUpdateCliente,data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                if (result.d===1)
                {
                    toastr.success(' CRM - Mayales notificacion' +
                    '</br>Se han Actualizados los datos del cliente de manera exitosa');
                    $('#infoCLiente').modal('hide');
                }
                else
                {
                    toastr.error(' CRM - Mayales notificacion' +
                    '</br> No fue posible realizar la modificacion del cliente');
                }
              },
            error: function (obj, error, objError) { alert(objError); }
        });
    }
      
    //listado de clientes realcionadas con sus tareas
    BLLClientes.prototype.LisClientesTareas = function () {
        $.ajax({
            type: "POST", url: WClienteTareas,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                if (result.d === null) {
                    BLLClientes.TablaClientes(result.d);
                }
                else
                {
                    dtoJson = result.d;
                    BLLClientes.TablaClientes(result.d);
                }
            },
            error: function (obj, error, objError) { alert(objError); }
        });
    }


    //listado de clientes realcionadas con sus tareas x usuario
    BLLClientes.prototype.LisClientesTareasXusuario = function () {
        $.ajax({
            type: "POST", url: WClienteTareasxusuario,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                if (result.d === null) {
                    BLLClientes.TablaClientes(result.d);
                }
                else {
                    dtoJson = result.d;
                    BLLClientes.TablaClientes(result.d);
                }
            },
            error: function (obj, error, objError) { alert(objError); }
        });
    }

    BLLClientes.prototype.getClientes = function (cedula) {

        jsondata = "{'c':"+JSON.stringify(cedula)+"}";
        $.ajax({
            type: "POST", url: Wgetcliente,data:jsondata,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
             
                if (result.d === null)
                {
                    BLLClientes.infoClientes(result.d);
                }
                else
                {
                    BLLClientes.infoClientes(result.d);
                }
            },
            error: function (obj, error, objError) { alert(objError); }
        });
    }

    BLLClientes.prototype.ValidarCliente = function (cedula) {
       
        jsondata = "{'c':" + JSON.stringify(cedula) + "}";
        $.ajax({
            type: "POST", url: WValidarcliente, data: jsondata,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                if (result.d == "No existe")
                {
                    toastr.success(' CRM - Notificacion' +
                        '</br> El cliente no a sido registrado en el sistema aun continue con el proceso de registro');
                }
                else
                {
                    result
                    toastr.error(' CRM - Notificacion' +
                        '</br>Ya existe un cliente con el mismo numero de indentificacion al que intenta registrar'
                        + '</br>Por el usuario '+'<strong>'+result.d+'</strong>'
                        );
                }
            },
            error: function (obj, error, objError) { alert(objError); }
        });
    }

    BLLClientes.infoClientes = function (cliente) {
        $.each(cliente, function (i, item) {
            
            $('#Text1').val(item.CEDULA);
            $('#Text2').val(item.NOMBRES);
            $('#Text3').val(item.P_APELLIDO);
            $('#Text4').val(item.S_APELLIDO);
            $('#Text5').val(item.ESTADO_CIVIL);
            $('#Text6').val(item.DIRECCION);
            $('#Text7').val(item.TELEFONO2);
            $('#Text8').val(item.EMAIL);
            $('#Text9').val(item.EMPRESA_N);
            $('#Text10').val(item.SUELDO);
            $('#Text11').val(item.PRESU_COMPRA);
            $('#Text12').val(item.INMU_INTERES);
            $('#Text13').val(item.INTERES_VI);
            $('#Text14').val(item.MOT_COMPRA);
            $('#Txt15').val( item.PROYEC_INTERES);
            $('#Text16').val(item.BARRIO);
            $('#Text17').val(item.INTERES_VI);
            $('#Text18').val(item.MOT_COMPRA);


            $('#CombAsesores2').val(item.ASESOR);
            $('#ComProyect2').val(item.PROYEC_INTERES);
        });
    }

    BLLClientes.TablaClienteshistorial = function (clientes) {
        document.getElementById('historiladetalle').innerHTML = "";
        var tabla = '<table id="clienteshisto" class="table table-striped table-bordered table-hover">';
        tabla += "<thead>";
        tabla += "<tr>";
        tabla += "<th>Concepto</th>";
        tabla += "<th>fecha</th>";
        tabla += "</tr>";
        tabla += "</thead>";
        tabla += "<tbody>";
        $.each(clientes, function (i, item) {
            tabla += " <tr>";
            tabla += "<td>" + item.DESCRIPCIONH + "</td>";
            tabla += "<td>" + moment(item.FECHA).format("YYYY/MM/DD"); + "</td>"; 
            tabla += "</tr>";

        });
        tabla += "</tbody>";
        tabla += "</table>";
        $('#historiladetalle').append(tabla);
        $('#clienteshisto').dataTable();
    };

    BLLClientes.TablaClientes = function (clientes) {
        document.getElementById('clientesData').innerHTML = "";
        var tabla = '<table id="clientes" class="table table-striped table-bordered table-hover">';
        tabla += "<thead>";
        tabla += "<tr>";
        tabla += "<th>Nombre</th>";
        tabla += "<th>Proyecto interes</th>";
        tabla += "<th>Asesor</th>";
        tabla += "<th>Tareas</th>";
        tabla += "</tr>";
        tabla += "</thead>";
        tabla += "<tbody>";
        $.each(clientes, function (i, item) {
            tabla += " <tr>";
            tabla += "<td id=" + item.CEDULA + " class='Infocl'>" + item.NOMBRES + "  " + item.P_APELLIDO + "</td>";
            tabla += "<td>" + item.PROYECTO_INT + "</td>";
            tabla += "<td>" + item.ASESOR + "</td>";
            switch (item.ESTADO) {

                case "T":
                    tabla += "<td ><img src='" + funcionUrlGlobal('/images_crm/Completa.png') + "' class='historial' id=" + item.CEDULA + " href=''/></td>";
                    break
                case "E":
                    tabla += "<td ><img src='" + funcionUrlGlobal('/images_crm/Suspendido.png') + "' class='historial' id=" + item.CEDULA + " href='' /></td>";
                    break
                case "P":
                    tabla += "<td ><img src='" + funcionUrlGlobal('/images_crm/Pospuesta.png') + "'  class='historial' id=" + item.CEDULA + " href=''/></td>";
                    break
                case "V":
                    tabla += "<td ><img src='" + funcionUrlGlobal('/images_crm/Espera.png') + "'  class='historial' id=" + item.CEDULA + " href=''/></td>";
                    break
                case null:
                    tabla += "<td></td>";
                    break
            }
            tabla += "</tr>";
            
        });
        tabla += "</tbody>";
        tabla += "</table>";
        $('#clientesData').append(tabla);
        $('#clientes').dataTable();
    };

    BLLClientes.TablaClientesFechas = function (clientes) {
        document.getElementById('clientesData').innerHTML = "";
        var tabla = '<table id="clientesFe" class="table table-striped table-bordered table-hover">';
        tabla += "<thead>";
        tabla += "<tr>";
        tabla += "<th>Nombre</th>";
        tabla += "<th>Proyecto interes</th>";
        tabla += "<th>Asesor</th>";;
        tabla += "</tr>";
        tabla += "</thead>";
        tabla += "<tbody>";
        $.each(clientes, function (i, item) {
            tabla += " <tr>";
            tabla += "<td id=" + item.CEDULA + " class='Infocl'>" + item.NOMBRES + "  " + item.P_APELLIDO + " </td>";
            tabla += "<td>" + item.PROYECTO_INT + "</td>";
            tabla += "<td>" + item.ASESOR + "</td>";
            tabla += "</tr>";

        });
        tabla += "</tbody>";
        tabla += "</table>";
        $('#clientesData').append(tabla);
        $('#clientesFe').dataTable();
    };

}