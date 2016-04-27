BLLTrabajadores = function () {

    var WCrearTrab =  funcionUrlGlobal("/Servicios/WTrabajador.asmx/InsertTrabajador");
    var WListrabajadores = funcionUrlGlobal("/Servicios/WTrabajador.asmx/ListTrabajadores");
    var WTasesor = funcionUrlGlobal("/Servicios/WTrabajador.asmx/LisTAsesor"); 
    var WTasesorClientes = funcionUrlGlobal("/Servicios/WTrabajador.asmx/ListClientesAsesor"); 
    var WTasesorClientesAP =funcionUrlGlobal("/Servicios/WTrabajador.asmx/ListClientesAsesorAP");
    var WTasesorClientesUSU = funcionUrlGlobal("/Servicios/WTrabajador.asmx/ListClientesAsesorUSU");
    

    BLLTrabajadores.prototype.InserTrabajador = function (trabajador) {
        jsonData = "{ 't':" + JSON.stringify(trabajador) + " }";
        $.ajax({
                type: "POST", url: WCrearTrab,data:jsonData,
                contentType: "application/json; charset=utf-8",
                dataType: 'json',
                async: true,
                success: function (result) {
                    if (result.d === 1) {
                        toastr.success(' CRM - Mayales' +
                        '</br>Se a cargado el usuario de manera Manera Exitosa en sistema..');
                        $('#Textusuario').val("");
                        $('#ComTipo').val("");
                    }
                    else
                    {
                        toastr.success(' CRM - Mayales' +
                        '</br>error al intentar registrar los datos del trabajador..');
                    }
                },
                error: function (error) { alert(error.responseText); }
            });
    }

    BLLTrabajadores.prototype.getrabajadores = function () {
        $.ajax({
            type: "POST", url: WListrabajadores,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                if (result.d === null)
                {
                    $('#CombAsesores').append('<option></option>');
                    BLLTrabajadores.ComAsesor(result.d);
                }
                else
                {
                    $('#CombAsesores').append('<option></option>');
                    BLLTrabajadores.ComAsesor(result.d);
                }
             },
            error: function (error) { alert(error.responseText); }
        });
    }

    BLLTrabajadores.prototype.ListAsesor = function (trabajador, op) {
        
        jsonData = "{ 't':" + JSON.stringify(trabajador) + " }";
        $.ajax({
            type: "POST", url: WTasesor, data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                switch (op) {
                    case 1:
                        if (result.d === null) {

                            BLLTrabajadores.InfoTreas(result.d);
                        }
                        else {
                            BLLTrabajadores.InfoTreas(result.d);
                        }
                        break
                }
            },
            error: function (error) { alert(error.responseText); }
        });
    }


    BLLTrabajadores.prototype.CLientesAsesorC = function (trabajador) {

        jsonData = "{ 't':" + JSON.stringify(trabajador) + " }";
        $.ajax({
            type: "POST", url: WTasesorClientes, data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result)
            {
                if (result.d === null)
                {

                    BLLTrabajadores.TablaClientes(result.d);
                }
                else
                {
                    BLLTrabajadores.TablaClientes(result.d);
                }
            },
            error: function (error) { alert(error.responseText); }
        });
    }

    BLLTrabajadores.prototype.CLientesAsesorAP = function (trabajador,proyectos) {

        jsonData = "{ 't':" + JSON.stringify(trabajador) + ",'p':" + JSON.stringify(proyectos) + " }";
        $.ajax({
            type: "POST", url: WTasesorClientesAP, data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                if (result.d === null) {

                    BLLTrabajadores.TablaClientes(result.d);
                }
                else {
                    BLLTrabajadores.TablaClientes(result.d);
                }
            },
            error: function (error) { alert(error.responseText); }
        });
    }

    BLLTrabajadores.prototype.CLientesAsesorUSU = function (proyectos) {

        jsonData = "{'p':" + JSON.stringify(proyectos) + " }";
        $.ajax({
            type: "POST", url: WTasesorClientesUSU, data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                if (result.d === null) {

                    BLLTrabajadores.TablaClientes(result.d);
                }
                else {
                    BLLTrabajadores.TablaClientes(result.d);
                }
            },
            error: function (error) { alert(error.responseText); }
        });
    }

    BLLTrabajadores.TablaClientes = function (clientes) {
        document.getElementById('clientesData').innerHTML = "";
        var tabla = '<table id="clientes" class="table table-striped table-bordered table-hover">';
        tabla += "<thead>";
        tabla += "<tr>";
        tabla += "<th>Nombre</th>";
        tabla += "<th>Proyecto interes</th>";
        tabla += "<th>Tareas</th>";
        tabla += "</tr>";
        tabla += "</thead>";
        tabla += "<tbody>";
        $.each(clientes, function (i, item) {
            tabla += " <tr>";
            tabla += "<td id=" + item.CEDULA + " class='Infocl'>" + item.NOMBRES + "  " + item.P_APELLIDO + " </td>";
            tabla += "<td>" + item.PROYECTO_INT + "</td>";
            switch (item.ESTADO) {
                case "T":
                    tabla += "<td ><img src='" + funcionUrlGlobal('/images_crm/Completa.png') + "'  class='historial' id=" + item.CEDULA + " href=''/></td>";
                    break
                case "E":
                    tabla += "<td ><img src='" + funcionUrlGlobal('/images_crm/Suspendido.png') + "' class='historial' id=" + item.CEDULA + " href='' /></td>";
                    break
                case "P":
                    tabla += "<td ><img src='" + funcionUrlGlobal('/images_crm/Suspendido.png') + "' class='historial' id=" + item.CEDULA + " href=''/></td>";
                    break
                case "V":
                    tabla += "<td ><img src='" + funcionUrlGlobal('/images_crm/Espera.png') + "' class='historial' id=" + item.CEDULA + " href=''/></td>";
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



    BLLTrabajadores.ComAsesor = function (asesores) {
        $.each(asesores, function (i,item) {
            $('#CombAsesores').append('<option value='+item.T_CEDULA+'>'+item.NOMBRES+'</option>')
        });
    }

    ///Informacion estimacion de tareas
    BLLTrabajadores.InfoTreas = function (informacion) {
        document.getElementById("completada").innerHTML = "";
        document.getElementById("total").innerHTML = "";
        document.getElementById("cumplimiento").innerHTML = "";
        document.getElementById("progres").innerHTML = "";
        var espera = 0;
        var completa = 0;
        var pospuesta = 0;
        var vencido = 0;
        var total = 0;
        var porcentaje = 0;;
        $.each(informacion, function (i, item) {

            switch (item.ESTADO) {
                case "E":
                    espera = espera + 1;
                    break
                case "P":
                    pospuesta = pospuesta + 1;

                    break
                case "T":
                    completa = completa + 1;
                    break
                case "V":
                    vencido = vencido + 1;
                    break

            }

        });

        total = espera + pospuesta + completa+vencido;
        porcentaje = (completa * 100) / parseInt(total);

        $('#completada').append(completa);
        $('#asignadas').append(total);
        $('#pospuesta').append(pospuesta);
        $('#completadas').append(completa);
        if (total == 0) {
            porcentaje = 0;
        }

        $('#total').append(total);

        var progres = '<div style="width: ' + porcentaje + '%" aria-valuemax="100" aria-valuemin="0" aria-valuenow="55" role="progressbar" class=" progress-bar progress-bar-success">';
        progres += '<span class="sr-only">' + porcentaje + '% Complete (success)</span>';
        progres += '</div>';
        $('#progres').append(progres);
        $('#cumplimiento').append(porcentaje.toFixed(1) + '%');
    }
}