var BLLTareas = function () {

};

    var WsInfotarea = "/Servicios/WTareas.asmx/InfoTareas";//Informacion de tareas especifica
    var WSEsTareas = "/Servicios/WTareas.asmx/ETareas";//Servicio para Terminar dar por finalizada la tarea
    var WPosponer = "/Servicios/WTareas.asmx/Postareas";//Servicio que pospone las tareas
    var WBitacora = "/Servicios/WTareas.asmx/Historialtareas";//Historial de tareas
    var WsListareas = "/Servicios/WTareas.asmx/GetTareasC";//Listar Tareas
    var WsListareasE = "/Servicios/WTareas.asmx/estamiacion";//Listar Tareas para estimacion
    var WsListareasAsesor = "/Servicios/WTareas.asmx/ListareasUserA";//Retorna un listado de todas las tareas asignadas a un asesor
    var WEstadoTareas = "/Servicios/WTareas.asmx/ListaEstadoTareas";//Listado de tareas
    var WEstadoTareasclientes = "/Servicios/WTareas.asmx/ListaEstadoTareasclientes";
    var WsInfoTareasNego = "/Servicios/WTareas.asmx/InfoTareasNego";//Informacion de tareas especifica
    var WTareasNegocio = "/Servicios/WTareas.asmx/GetTareasNegocios"
    var color = null;
    //Metodo para Crear cliente
    BLLTareas.prototype.CrearTarea = function (tarea, Wsurl) {
        jsonData = jsonData = "{ 'c':" + JSON.stringify(tarea) + " }";
        $.ajax({
            type: "POST", url: Wsurl, data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                switch (result.d) {
                    case 1:
                        toastr.success('CRM  Mayales Notificacion' +
                            '</br> La tarea se registrado de manera exitosa para el cliente con documento de identidad' +
                            '</br>' + tarea.cliente + 
                            '</br>' + 'Por el Asesor'
                            + tarea.asesor + '');
                        $('#Tareas').hide();
                        $('#TxtClientes').val("");
                        $('#TxtDescripcion').val("");
                        $('#TxtFecha').val("");
                        break

                    case 2:
                        toastr.warning('CRM  Mayales Notificación' +
                            '</br> El cliente actualmente no a culminado la tarea que tiene en curso');
                        break
                    case 3:
                        toastr.error('CRM  Mayales Notificación' +
                            '</br> no fue posbile llevar a cabo el proceso..');
                        break

                }
            },
            error: function (error) { alert(error.responseText); }
        });

    }

    BLLTareas.prototype.TareasNegocio = function (negocio) {
        jsonData = "{'c':" + JSON.stringify(negocio) + "}";
        $.ajax({
            type: "POST", url: WTareasNegocio, data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                if (result.d === null) {
                   
                }
                else {
                    BLLTareas.TablaTareasNegocio(result.d);
                }

            },
            error: function (error) { alert(error.responseText); }
        })
    }

    BLLTareas.prototype.EstadoTareas = function (estado) {
        jsonData = "{'estado':" + JSON.stringify(estado) + "}";
        $.ajax({
            type: "POST", url: EstadoTareas, data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                if (result.d === null)
                {
                    BLLTareas.TablaEstados(result.d);
                }
                else
                {
                    BLLTareas.TablaEstados(result.d);
                }

            },
            error: function (error) { alert(error.responseText); }
        })
    }

    BLLTareas.prototype.EstadoTareasClientes = function (estado) {
        jsonData = "{'estado':" + JSON.stringify(estado) + "}";
        $.ajax({
            type: "POST", url: WEstadoTareasclientes, data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                if (result.d === null) {
                    BLLTareas.TablaEstados(result.d);
                }
                else {
                    BLLTareas.TablaEstados(result.d);
                }

            },
            error: function (error) { alert(error.responseText); }
        })
    }

    BLLTareas.prototype.ListadoTareasUser = function () {
        //jsonData = "{'t':" + JSON.stringify(trabajador) + "}";
        $.ajax({
            type: "POST", url: WsListareasAsesor,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                if (result.d === null) {
                    //document.getElementById('listareas').innerHTML = "";
                    BLLTareas.LisTareasUsuario(result.d);
                }
                else {
                    //document.getElementById('listareas').innerHTML = "";
                    BLLTareas.LisTareasUsuario(result.d);

                }

            },
            error: function (error) { alert(error.responseText); }
        })
    }

    BLLTareas.LisTareasUsuario = function (clientes) {
        document.getElementById('clientesData').innerHTML = "";
        var tabla = '<table id="listadotareaUser" class="table table-striped table-bordered table-hover">';
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
            alert(item.ID_TAREA);
            tabla += " <tr>";
            tabla += "<td>" + item.NOMBRES + '  ' + item.P_APELLIDO + '  ' + item.S_APELLIDO + "</td>";
            tabla += "<td>" + item.CONCEPTO + "</td>";
            tabla += "<td>" + moment(item.FECHAINICIO).format("YYYY/DD/MM"); + "</td>";
            switch (item.ESTADO) {
                case "E":
                    tabla += "<td><img src='../../images_crm/Suspendido.png' class='Detallett' id=" + item.ID_TAREA +'/'+ item.CEDULA +" href='' /></td>";
                    break
                case "P":
                    tabla += "<td><img src='../../images_crm/Pospuesta.png' class='Detallett' id=" + item.ID_TAREA + '/' + item.CEDULA + " href=''/></td>";
                    break
                case "T":
                    tabla += "<td><img src='../../images_crm/Completa.png' class='Detallett' id=" + item.ID_TAREA + '/' + item.CEDULA + " href=''/></td>";
                    break
                case "V":
                    tabla += "<td ><img src='../../images_crm/Espera.png' class='historial' id=" + item.CEDULA + " href=''/></td>";
                    break
                case null:
                    tabla += "<td></td>";
                    break

            }
            tabla += "</tr>";
        });
        tabla += "</tbody>";
        tabla += '</table>';
        $('#clientesData').append(tabla);
        $('#listadotareaUser').dataTable();
    }

    BLLTareas.prototype.EstimacionTareas = function () {
        ///jsonData = "{'t':" + JSON.stringify(trabajador) + "}";
        $.ajax({
            type: "POST", url: WsListareasE,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                if (result.d === null) {
                    BLLTareas.cumpliento(result.d);
                }
                else
                {
                    BLLTareas.cumpliento(result.d);
                }

            },
            error: function (error) { alert(error.responseText); }
        })
    }

    BLLTareas.prototype.lisbitacoras = function (tarea) {
        jsonData = "{'t':" + JSON.stringify(tarea) + "}";
        $.ajax({
            type: "POST", url: WBitacora, data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                if (result.d ==="")
                {
                    BLLTareas.TablaBitacoras(result.d);
                }
                else
                {
                    if (result.d === null)
                    {
                        toastr.error('CRM Mayales' +
                        '</br>No fue posible Cargar el hisrorial de la tarea seleccionada');
                    }
                    else
                    {
                        BLLTareas.TablaBitacoras(result.d);
                    }
                }

            },
            error: function (error) { alert(error.responseText); }
        })
    }
   BLLTareas.prototype.Etareas = function (t,bitacora) {
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

   BLLTareas.prototype.TerminarTareaNego = function (t, b) {
       jsonData = "{ 't':" + JSON.stringify(t) + ",'b':" + JSON.stringify(b) + " }";
       $.ajax({
           type: "POST", url: WPosponer, data: jsonData,
           contentType: "application/json; charset=utf-8",
           dataType: 'json',
           async: true,
           success: function (result) {
               if (result.d == 0) {
                   toastr.error('CRM Mayales' +
                       '</br>No fue posible llevar a cabo el proceso..');
               } else {
                   toastr.success('CRM Mayales' +
                       '</br>Se ha terminado la tarea de manera exitosa');
                   BLLTareas.Deshabilitar();

               }

           },
           error: function (error) { alert(error.responseText); }
       });
   }

    BLLTareas.prototype.PosponerTarea = function (t, b) {
        jsonData = "{ 't':" + JSON.stringify(t) + ",'b':" + JSON.stringify(b) + " }";
        $.ajax({
            type: "POST", url: WPosponer, data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                if (result.d == 0) {
                    toastr.error('CRM Mayales' +
                        '</br>No fue posible llevar a cabo el proceso..');
                } else {
                    toastr.success('CRM Mayales' +
                        '</br>Se ha pospuesta la trea de manera exitosa');
                    BLLTareas.Deshabilitar();
                    
                }

            },
            error: function (error) { alert(error.responseText); }
        });
    }
    BLLTareas.Deshabilitar = function () {
        $('#BtnEditar').show();
        $('#BtnTerminada').show();
        $('#BtnPost').hide(); 
        $('#Txtdetalle').attr('readonly', true);
        $('#fechainfo').attr('readonly', true);
        $('#TxtMotivo').val("");
       
    }

    //Metodo para Listar Tareas del cliente
    BLLTareas.prototype.LisTareas = function (cliente,op) {
        jsonData = jsonData = "{ 'c':" + JSON.stringify(cliente) + " }";
        $.ajax({
            type: "POST", url: WsListareas, data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                if (result.d == null) {
                    document.getElementById('List').innerHTML = "";
                } else {
                    ///listar tatreas del cliente
                    BLLTareas.CearComponente(result.d,op);
                }

            },
            error: function (error) { alert(error.responseText); }
        });
    }
    


    BLLTareas.prototype.InfoTareasNego = function (tarea) {
        jsonData = "{ 'id':" + JSON.stringify(tarea) + " }";
        $.ajax({
            type: "POST", url: WsInfoTareasNego, data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {

                if (result.d == null) {
                    toastr.error('CRM Mayales' +
                        '</br>No fue posible cargar la información detallada de la tarea');
                }
                else {
                    BLLTareas.ComponenteInfo(result.d);
                }
            },
            error: function (error) { alert(error.responseText); }
        });
    }

    BLLTareas.prototype.InfoTareas = function (tarea) {
       jsonData = "{ 'id':" + JSON.stringify(tarea) + " }";
        $.ajax({
            type: "POST", url: WsInfotarea, data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {

                if (result.d == null)
                {
                    toastr.error('CRM Mayales' +
                        '</br>No fue posible cargar la información detallada de la tarea');
                }
                else
                {
                    BLLTareas.ComponenteInfo(result.d);
                }
            },
            error: function (error) { alert(error.responseText); }
        });
    }

    BLLTareas.CearComponente = function (tareas,op) {
        switch (op) {
            case 0:
                document.getElementById('List').innerHTML = "";
                $.each(tareas, function (i, item) {
                    var clorresult = BLLTareas.Colortarea(item.ESTADO);
                    var lis = '<li class="list-group-item infotarea" id=' + item.ID_TAREA + '>';
                    lis += '<span class="badge" style="background:transparent">' + color + '</span>';
                    lis += '' + item.CONCEPTO + '';
                    lis += '</li>';
                    $('#List').append(lis);
                });
                break
            case 1:
                
                document.getElementById('Historial').innerHTML = "";
                var tabla = '<table id="hisclientes" class="table table-striped table-bordered table-hover">';
                tabla += "<thead>";
                tabla += "<tr>";
                tabla += "<th>Motivo</th>";;
                tabla += "<th>Fecha de Inicio</th>";
                tabla += "<th>Fecha Modificacion</th>";
                tabla += "<th></th>";
                tabla += "</tr>";
                tabla += "</thead>";
                tabla += "<tbody>";
                $.each(tareas, function (i, item) {
                    if (item.FECHAFIN === null) {
                        var fechafin = "No se a culminado la tarea";
                    }
                    else
                    {
                        fechafin = moment(fechafin).format("YYYY/MM/DD");
                    }
                    tabla += " <tr class='infotarea' id=" + item.ID_TAREA + ">";
                    tabla += "<td>" + item.CONCEPTO + "</td>";
                    tabla += "<td>" + moment(item.FECHAINICIO).format("YYYY/MM/DD"); + "</td>";
                    tabla += "<td>"+fechafin+"</td>";
                    switch (item.ESTADO) {
                        case "T":
                            tabla += "<td ><img src='../../images_crm/Completa.png' class='historial' id=" + item.CEDULA + " href=''/></td>";
                            break
                        case "E":
                            tabla += "<td ><img src='../../images_crm/Suspendido.png' class='historial' id=" + item.CEDULA + " href='' /></td>";
                            break
                        case "P":
                            tabla += "<td ><img src='../../images_crm/Pospuesta.png' class='historial' id=" + item.CEDULA + " href=''/></td>";
                            break
                        case "V":
                            tabla += "<td ><img src='../../images_crm/Espera.png' class='historial' id=" + item.CEDULA + " href=''/></td>";
                            break
                        case null:
                            tabla += "<td></td>";
                            break
                    }
                    tabla += "</tr>";

                });
                tabla += "</tbody>";
                tabla += '</table>';
                $('#Historial').append(tabla);
                $('#hisclientes').dataTable();
                break

        }

    }
   

    BLLTareas.ComponenteInfo = function (tareasinf) {
        var fechaini = null;
        var fechafin = null;
        for (var i = 0; i < tareasinf.length; i++) {
            if (tareasinf[i]["ESTADO"]=="T") {
                $('#BtnEditar').hide();
                $('#BtnPost').hide();
                $('#BtnTerminada').hide();
                $('#ButnCerrarG').hide();
                $('#Txtdetalle').val(tareasinf[i]["CONCEPTO"]);
                fechaini = moment(tareasinf[i]["FECHAINICIO"]).format("YYYY/MM/DD");
                fechafin = moment(tareasinf[i]["FECHAFIN"]).format("YYYY/MM/DD");
                $('#fechainfo').val(fechaini);
                $('#Fechafin').val(fechafin);
                $('#TxtIdTarea').val(tareasinf[i]["ID_TAREA"]);
                $('#Fechafin').show();
                $('#labelfin').show(); 
                $('#TxtMotivo').hide();
                $('#labelmotivo').hide();
             }
            else
            {
                $('#Txtdetalle').val(tareasinf[i]["CONCEPTO"]);
                var fecha = moment(tareasinf[i]["FECHAINICIO"]).format("YYYY/MM/DD");
                $('#fechainfo').val(fecha);
                $('#TxtIdTarea').val(tareasinf[i]["ID_TAREA"]);
                $('#Fechafin').hide();
                $('#labelfin').hide();
                $('#TxtMotivo').show();
                $('#labelmotivo').show();
            }
           
        }
    }

    BLLTareas.cumpliento = function (tareas) {
        var total = 0;
        var programadas = 0;
        var cumplidos = 0.0;
        var vencidas = 0.0;
        var contt = 0;
        var pos = 0;
        $.each(tareas, function (i, item) {
            switch (item.ESTADO) {
                case "E":
                    programadas = programadas + 1;
                    break
                case "V":
                    vencidas =vencidas + 1;
                    break
                case "T":
                    cumplidos = cumplidos + 1;
                    break
                case "P":
                    pos = pos + 1;
                    break

            }
        })

        //alert('programadas'+programadas);
        //alert("Cumplidas"+cumplidos)
        contt = programadas + cumplidos + pos+vencidas;
        total = (cumplidos * 100) / parseInt(contt);
        if (contt == 0 )
        {
            total = 0;
        }
        //document.getElementById('Completadas').innerHTML = "";
        //document.getElementById('cumplidos').innerHTML = "";
       // document.getElementById('Asignadas').innerHTML = "";
        //document.getElementById('porcentaje').innerHTML = "";
        $('#Asignadas').append(contt);
        $('#Completadas').append(cumplidos);
        $('#cumplidos').append(total.toFixed(1)+ '%');
        var progres = "<div style='width: " + total + "%' aria-valuemax='100' aria-valuemin='0' aria-valuenow='0' role='progressbar' class=' progress-bar progress-bar-success'>";
        progres += '</div>';
        $('.progres').append(progres);
    }

    BLLTareas.TablaBitacoras = function (bitacora) {
        document.getElementById('TablaBitacoras').innerHTML = "";
        var tabla = '<table id="bitacoras" class="table table-striped table-bordered table-hover">';
        tabla += "<thead>";
        tabla += "<tr>";
        tabla += "<th>Motivo</th>";;
        tabla += "<th>Fecha de Modificacion</th>";
        tabla += "</tr>";
        tabla += "</thead>";
        tabla += "<tbody>";
        $.each(bitacora, function (i, item) {
            tabla += " <tr>";
            tabla += "<td>" + item.MOTIVO + "</td>";
            tabla += "<td>" + moment(item.FECHAMOD).format("YYYY/MM/DD"); + "</td>";
            tabla += "</tr>";

        });
        tabla += "</tbody>";
        tabla += '</table>';
        $('#TablaBitacoras').append(tabla);
        $('#bitacoras').dataTable();
    }

    BLLTareas.Colortarea = function (op) {

        switch (op) {
            case "T":
                return color = "<img src='../../images_crm/Completa.png' href=''/>";
                break
            case "E":
                return color = "<img src='../../images_crm/Suspendido.png' href=''/>";
                break
            case "P":
                return color = "<img src='../../images_crm/Pospuesta.png' href=''/>";
                break
            case "V":
                return color = "<img src='../../images_crm/Espera.png' href=''/>";
                break
            case null:
                return color = "";
                break
        }
    }

    BLLTareas.TablaEstados = function (clientes) {
        document.getElementById('clientesData').innerHTML = "";
        var tabla = '<table id="estados" class="table table-striped table-bordered table-hover">';
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
                    tabla += "<td ><img src='../../images_crm/Completa.png' class='historial' id=" + item.CEDULA + " href=''/></td>";
                    break
                case "E":
                    tabla += "<td ><img src='../../images_crm/Suspendido.png' class='historial' id=" + item.CEDULA + " href='' /></td>";
                    break
                case "P":
                    tabla += "<td ><img src='../../images_crm/Pospuesta.png' class='historial' id=" + item.CEDULA + " href=''/></td>";
                    break
                case "V":
                    tabla += "<td ><img src='../../images_crm/Espera.png' class='historial' id=" + item.CEDULA + " href=''/></td>";
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
        $('#estados').dataTable();
    };

    BLLTareas.TablaTareasNegocio = function (clientes) {
        document.getElementById('clientesData').innerHTML = "";
        var tabla = '<table id="estados" class="table table-striped table-bordered table-hover">';
        tabla += "<thead>";
        tabla += "<tr>";
        tabla += "<th>CLIENTE</th>";
        tabla += "<th>FECHA INICIO</th>";
        tabla += "<th>FECHA FIN</th>";
        tabla += "<th>Tareas</th>";
        tabla += "</tr>";
        tabla += "</thead>";
        tabla += "<tbody>";
        $.each(clientes, function (i, item) {
            tabla += " <tr>";
            tabla += "<td id=" + item.ID_TAREA + " class='Infocl'>" + item.NOMBRES + "</td>";
            tabla += "<td>" + moment(item.FECHAINICIO).format("YYYY/MM/DD"); + "</td>";
            tabla += "<td>" + moment(item.FECHAFIN).format("YYYY/MM/DD"); + "</td>";
            switch (item.ESTADO) {
                case "T":
                    tabla += "<td ><img src='../../images_crm/Completa.png' class='historial1' id=" + item.ID_TAREA + " href=''/></td>";
                    break
                case "E":
                    tabla += "<td ><img src='../../images_crm/Suspendido.png' class='historial1' id=" + item.ID_TAREA + " href='' /></td>";
                    break
                case "P":
                    tabla += "<td ><img src='../../images_crm/Pospuesta.png' class='historial1' id=" + item.ID_TAREA + " href=''/></td>";
                    break
                case "V":
                    tabla += "<td ><img src='../../images_crm/Espera.png' class='historial1' id=" + item.ID_TAREA + " href=''/></td>";
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
        $('#estados').dataTable();
    };