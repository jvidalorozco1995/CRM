var utl = new BLLUtilidades();
var ac = new BLLActInmuebles();
function BLLInmuebles() {

    var WsGetInmuebles = funcionUrlGlobal("/ServiciosFox/WInmuebles.asmx/GetInmuebles");
    var Wseparacion = funcionUrlGlobal("/ServiciosFox/WInmuebles.asmx/SepararInmueble");
    var WDetalleseparacion = funcionUrlGlobal("/ServiciosFox/WInmuebles.asmx/Detalleseparacion");
    var WUpdateinmuebles = funcionUrlGlobal("/ServiciosFox/WInmuebles.asmx/UpdateInmuCrm");
    var WLisepracion = funcionUrlGlobal("/ServiciosFox/WInmuebles.asmx/Listadosepracion");
    var Wdesistir = funcionUrlGlobal("/ServiciosFox/WInmuebles.asmx/DesistirInmueble");
    var Winmsepaciones = funcionUrlGlobal("/ServiciosFox/WInmuebles.asmx/ClientesInmuebles");

    var WsepAsesor = funcionUrlGlobal("/Servicios/WSeparaciones.asmx/_sepracionesAsesor");
    var Wseproyecto = funcionUrlGlobal("/Servicios/WSeparaciones.asmx/_sepracionesproyecto");
    var WseproyectoAsesor = funcionUrlGlobal("/Servicios/WSeparaciones.asmx/_sepracionesproyectoAsesor");

    var WseparacionAP = funcionUrlGlobal("/Servicios/WSeparaciones.asmx/_sepracionesAP");
    var WseparacionFechas = funcionUrlGlobal("/Servicios/WSeparaciones.asmx/_sepracionesFechas");
    var Wseparacionde = funcionUrlGlobal("/Servicios/WSeparaciones.asmx/_sepracionesDetalle");
    var Wseparaciones = funcionUrlGlobal("/Servicios/WSeparaciones.asmx/_SeparacionLis");
    var Wconfirmarsepracion = funcionUrlGlobal("/Servicios/WSeparaciones.asmx/_Confirmarseparacion");

    var WAcuerdosNegocio = funcionUrlGlobal("/Servicios/WAcInmuebles.asmx/InsertActualizacion");

    var accounting = [];
    var inmueblesCRM = {};

    var dtoJson = null;
    var JSONData = []


    BLLInmuebles.prototype.Confirmarseparacion = function (id,separacion) {
       var datos = "{ 'id':" + JSON.stringify(id) + ",'i':" + JSON.stringify(separacion) + " }";
        $.ajax({
            type: "POST", url: Wconfirmarsepracion, data: datos,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                if (result.d==0)
                {
                    toastr.error('CRM Mayales - Notificacion' +
                   '<br/>No se pudo completar el proceso de confirmacion de separacion del inmueble');
                }
                else
                {
                    toastr.success('CRM Mayales - Notificacion' +
                  '<br/> el cliente ha iniciado el proceso de compra del inmueble' + separacion.INMUEBLE);
                }
            },
            error: function (msg) { alert(msg.responseText); }
        });
    }

    BLLInmuebles.prototype._lisnegociosepracion = function (p) {
        var datos = "{ 'p':" + JSON.stringify(p) + " }";
        $.ajax({
            type: "POST", url: Wseparaciones, data: datos,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                if (result.d == null) { BLLInmuebles.TablasepracionNegocio(result.d) }
                else { BLLInmuebles.TablasepracionNegocio(result.d)}
            },
            error: function (msg) { alert(msg.responseText); }
        });
    }
    BLLInmuebles.prototype._lisnegociosepracionUpdate = function (p) {
        var datos = "{ 'p':" + JSON.stringify(p) + " }";
        $.ajax({
            type: "POST", url: Wseparaciones, data: datos,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                if (result.d == null) { BLLInmuebles.TablasepracionNegocioUpdate(result.d) }
                else { BLLInmuebles.TablasepracionNegocioUpdate(result.d) }
            },
            error: function (msg) { alert(msg.responseText); }
        });
    }

    BLLInmuebles.prototype._Separaciondetalles= function (c) {
        data = "{'c':" + JSON.stringify(c) + "}";
        $.ajax({
            type: "POST", url: Wseparacionde,data: data,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
              
                BLLInmuebles.DetalleSepracionC(result.d)
            },
            error: function (obj, error, objError) { alert(obj.responseText); }
        });
    }

    BLLInmuebles.prototype._Asesorseparacion = function (asesor) {
        data = "{'asesor':" + JSON.stringify(asesor) + "}";
        $.ajax({
            type: "POST", url: WsepAsesor, data: data,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                if (result.d == null)
                {
                    BLLInmuebles.Tablasepracion(result.d);
                }
                else
                {
                    BLLInmuebles.Tablasepracion(result.d);
                }
            },
            error: function (obj, error, objError) { alert(obj.responseText); }
        });
    }

    BLLInmuebles.prototype._Proyectoseparacion = function (p) {
        data = "{'p':" + JSON.stringify(p) + "}";
        $.ajax({
            type: "POST", url: Wseproyecto, data: data,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                if (result.d == null) {
                    BLLInmuebles.Tablasepracion(result.d);
                }
                else {
                    BLLInmuebles.Tablasepracion(result.d);
                }
            },
            error: function (obj, error, objError) { alert(obj.responseText); }
        });
    }

    BLLInmuebles.prototype._ProyectoseparacionAsesor = function (p) {
        data = "{'p':" + JSON.stringify(p) + "}";
        $.ajax({
            type: "POST", url: WseproyectoAsesor, data: data,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                if (result.d == null) {
                    BLLInmuebles.Tablasepracion(result.d);
                }
                else {
                    BLLInmuebles.Tablasepracion(result.d);
                }
            },
            error: function (obj, error, objError) { alert(obj.responseText); }
        });
    }


    BLLInmuebles.prototype._SeparacionAP = function (p,asesor) {
        data = "{'p':" + JSON.stringify(p) + ",'asesor':" + JSON.stringify(asesor) + "}";
        $.ajax({
            type: "POST", url: WseparacionAP, data: data,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                if (result.d == null)
                {
                    BLLInmuebles.Tablasepracion(result.d);
                }
                else
                {
                    BLLInmuebles.Tablasepracion(result.d);
                }
            },
            error: function (obj, error, objError) { alert(obj.responseText); }
        });
    }

    BLLInmuebles.prototype._SeparacionFechas = function (inicio,fin) {
        data = "{'inicio':" + JSON.stringify(inicio) + ",'fin':" + JSON.stringify(fin) + "}";
        $.ajax({
            type: "POST", url: WseparacionFechas, data: data,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                if (result.d == null) {
                    BLLInmuebles.Tablasepracion(result.d);
                }
                else {
                    BLLInmuebles.Tablasepracion(result.d);
                }
            },
            error: function (obj, error, objError) { alert(obj.responseText); }
        });
    }

    BLLInmuebles.prototype.exportJsonToCSV = function () {
        var ShowLabel = "Campo1;campo2,Campo3;campo4;Campo5;campo6;Campo7";
        $.each(dtoJson, function (i, item) {
            JSONData.push(new
                Object({

                    "NOMBRE": item.NOMBRES,
                    "PRIMER APELLIDO": item.P_APELLIDO,
                    "SEGUNDO APELLIDO": item.S_APELLIDO,
                    "DIRECCION": item.DIRECCION,
                    "BARRIO": item.BARRIO,
                    "TELEFONO": item.TELEFONO2,
                    "PROYECTO DE INTERES": $.trim(item.NOMBRE_PROYEC),
                    "FECHA DE SEPARACION": moment(item.FECHASEPARACION).format("YYYY/MM/DD"),

                }));
        })

        var arrData = typeof JSONData != 'object' ? JSON.parse(JSONData) : JSONData;
        var CSV = '';
        if (ShowLabel) {
            var row = "";

            for (var index in arrData[0]) {
                row += index + ',';
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
        var filename = 'Separaciones.csv';
        $("#lnkDwnldLnk")
        .attr({
            'download': filename,
            'href': csvUrl
        });

        $('#lnkDwnldLnk')[0].click();
        document.body.removeChild(link);
    }


   // _SepracionInmuebles
    BLLInmuebles.prototype._Sepracioninmuebles = function () {
     
        $.ajax({
            type: "POST", url: Winmsepaciones,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                dtoJson = result.d;
                BLLInmuebles._SepracionInmuebles(result.d)

            },
            error: function (obj, error, objError) { alert(obj.responseText); }
        });
    }


    BLLInmuebles.prototype._Linmuebles = function (p) {
        data = "{'p':"+JSON.stringify(p)+"}";
        $.ajax({
            type: "POST", url: WLisepracion,data:data,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                if (result.d == null)
                {
                    BLLInmuebles.Tablasepracion(result.d);
                }
                else
                {
                    BLLInmuebles.Tablasepracion(result.d);
                }
            },
            error: function (obj, error, objError) { alert(obj.responseText); }
        });
    }

    BLLInmuebles.prototype.SepararInmueble = function (inm_separacion,email,proyecto) {
        jsonData = "{ 's':" + JSON.stringify(inm_separacion) + " ,'email':" + JSON.stringify(email) + " }";
        
        $.ajax({
            type: "POST", url: Wseparacion, data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                if (result.d == 0)
                {
                    $('#loadig').hide();
                    toastr.error('CRM Mayales - Notificacion' +
                    '<br/>El cliente actualmente ya tiene un proceso de separacion en curso');
                }
                else
                {
                    toastr.success('CRM Mayales - Notificacion' +
                    '<br/>el inmueble fue separado de manera exitosa');
                    $('#Inmueble').val("");
                    $('#Cliente').val("");
                    $('#EmailCliente').val("");
                    $('#Fechafinal').val("");
                    $('#SepararInmueble').hide(); $('#loadig').hide();
                    setTimeout(function () { inm.LisInmuebles(proyecto) },1000)
                   

                }
            },
            error: function (obj, error, objError) { alert(obj.responseText); }
        });
    }

    BLLInmuebles.prototype._Detallesepracion = function (inmueble) {
     
        jsonData = "{ 'inmueble':" + JSON.stringify(inmueble)+" }";
        $.ajax({
            type: "POST", url: WDetalleseparacion, data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                if (result.d == null)
                {
                    $('#Error').show();
                }
                else
                {
                    BLLInmuebles._Detallesepracion(result.d);
                }
            },
            error: function (obj, error, objError) { alert(obj.responseText); }
        });
    }

    BLLInmuebles.prototype.desistirinmueble = function (i) {
        jsonData = "{ 'i':" + JSON.stringify(i) + "}";

        $.ajax({
            type: "POST", url: Wdesistir, data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {

                toastr.success('CRM Mayales - Notificacion' +
                '<br/>' + result.d);


            },
            error: function (obj, error, objError) { alert(obj.responseText); }
        });
    }

    //Inmuebles Traidos de Multifox
    BLLInmuebles.prototype.InmuenlesFox = function (bloque, Wsurl) {
        jsonData = "{ 'b':" + JSON.stringify(bloque) + " }";
        $.ajax({
            type: "POST", url: Wsurl, data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                if (result.d == null) {
                    document.getElementById('TablaB').innerHTML = "";
                    $('#BtnInmueble').hide();
                } else {
                    resulIm = result.d;
                    BLLInmuebles.TablaInmueble(result.d);
                }

            },
            error: function (obj, error, objError) { alert(obj.responseText); }
        });
    }

    //Inmuebles Traidos de CRM
    BLLInmuebles.prototype.InmueblesCRM = function (bloque, Wsurl) {
        jsonData = "{ 'b':" + JSON.stringify(bloque) + " }";
        $.ajax({
            type: "POST", url: Wsurl, data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                if (result.d == null) {
                    document.getElementById('TablaIm').innerHTML = "";

                } else {
                    BLLInmuebles.TablaInmuebleCRM(result.d);
                }

            },
            error: function (obj, error, objError) { alert(obj.responseText); }
        });
    }

    //Tabla Inmuebles Traidos de Miltifox
    BLLInmuebles.TablaInmueble = function (inmuebles) {
        document.getElementById('Tabla').innerHTML = "";
        var tabla = '<table id="example4" class="table table-striped table-bordered table-hover">';
        tabla += "<thead>";
        tabla += "<tr>";
        tabla += "<th>Obra</th>";
        tabla += "<th>Descripcion</th>";
        tabla += "<th style='width:50px;'>Manz</th>";
        tabla += "<th>Inmueble</th>";
        tabla += "<th>Area</th>";
        tabla += "<th>Valor Inmueble</th>";
        tabla += "</tr>";
        tabla += "</thead>";
        tabla += "<tbody>";
        $.each(inmuebles, function (i, item) {
            tabla += " <tr>";
            tabla += "<td>" + item.INMUOBRA + "</td>";
            tabla += "<td>" + item.INMUDECS + "</td>";
            tabla += "<td>" + item.MZA + "</td>";
            tabla += "<td>" + item.INMUEBLE + "</td>";
            tabla += "<td>" + item.AREA + "</td>";
            tabla += "<td>" + utl.FormatNumero(item.VAL_INMUEBLE) + "</td>";
            tabla += "</tr>";
        });
        tabla += "</tbody>";
        tabla += "</table>";
        $('#Tabla').append(tabla);
        $('#example4').dataTable();
        $('#BtnInmueble').show();
        $('#BtnActualizar').show();
    }

    //listado de inmuebles separados
    BLLInmuebles.Tablasepracion = function (inmuebles) {
        document.getElementById('sepraciones').innerHTML = "";
        var tabla = '<table id="sepracion" class="table table-striped table-bordered table-hover">';
        tabla += "<thead>";
        tabla += "<tr>";
        tabla += "<th>Cliente</th>";
        tabla += "<th>Telefono</th>";
        tabla += "<th>Inmueble</th>";
        tabla += "<th>Proyecto</th>";
        tabla += "<th>Fecha de sepracion</th>";
        tabla += "<th>Estado</th>";
        tabla += "</tr>";
        tabla += "</thead>";
        tabla += "<tbody>";
        $.each(inmuebles, function (i, item) {
           
            if (item.ESTADO != "C") {
                tabla += " <tr>";
                tabla += "<td id=" + item.CLIENTE + " class='Infocl'>" + item.NOMBRES + " " + item.P_APELLIDO + " " + item.S_APELLIDO + "</td>";
                tabla += "<td>" + item.TELEFONO2 + "</td>";
                tabla += "<td>" + item.INMUEBLE + "</td>";
                tabla += "<td>" + $.trim(item.NOMBRE_PROYEC) + "</td>";
                if (item.FECHASEPARACION == null) {
                    tabla += "<td></td>";
                } else {
                    tabla += "<td>" + moment(item.FECHASEPARACION).format("YYYY/MM/DD") + "</td>";
                }
                if (item.ESTADO == "P") {
                    tabla += "<td class='desistir'id=" + item.CLIENTE + "/" + item.INMUEBLE + "/" + item.DIAS + "/" + item.ID_S + "><img src='"+funcionUrlGlobal( '/images_crm/libre.png')+"'> Dias " + item.DIAS + "</td>";
                }
                else {

                    
                    if (item.ESTADO == "D") {
                        tabla += "<td class='desistir'id=" + item.CLIENTE + "/" + item.INMUEBLE + "/" + item.DIAS + "><img src='" + funcionUrlGlobal('/images_crm/Suspendido.png') + "'></td>";
                    }
                    else {
                        if (item.ESTADO == "L") {
                            tabla += "<td class='Info'id=" + item.CLIENTE + "/" + item.INMUEBLE + "/" + item.DIAS + "><img src='" + funcionUrlGlobal('/images_crm/Completa.png') + "'></td>";
                        }
                        else {
                            if (item.ESTADO == null) {
                                tabla += "<td>Sin separaciones</td>";
                            }
                        }
                    }
                }
            }
            tabla += "</tr>";
        });
        tabla += "</tbody>";
        tabla += "</table>";
        $('#sepraciones').append(tabla);
        $('#sepracion').dataTable();
    }
    
    //listado de inmuebles separados
    BLLInmuebles.TablasepracionNegocio = function (inmuebles) {
        document.getElementById('sepraciones').innerHTML = "";
        var tabla = '<table id="sepracion" class="table table-striped table-bordered table-hover">';
        tabla += "<thead>";
        tabla += "<tr>";
        tabla += "<th>Codigo CRM</th>"
        tabla += "<th>Cliente</th>";
        tabla += "<th>Telefono</th>";
        tabla += "<th>Inmueble</th>";
        tabla += "<th>Proyecto</th>";
        tabla += "<th></th>";
        tabla += "</tr>";
        tabla += "</thead>";
        tabla += "<tbody>";
        $.each(inmuebles, function (i, item) {
          
            tabla += " <tr>";
            if (item.CODIGO_F != null)
            {
                tabla += "<td>" + item.CODIGO_F + "</td>";

            } else
            {

                tabla += "<td>" + "No tiene negocio" + "</td>";
            }
           
            tabla += "<td id=" + item.CLIENTE + " class='Infocl'>" + item.NOMBRES + " " + item.P_APELLIDO + " " + item.S_APELLIDO + "</td>";
            tabla += "<td>" + item.TELEFONO2 + "</td>";
            tabla += "<td>" + $.trim(item.CASA) + "</td>";
            tabla += "<td>" + $.trim(item.NOMBRE_PROYEC) + "</td>";
            if (item.ESTADO == 'C')
            {
                
                tabla += "<td class='Btimprimir'id=" + item.ID_NEGOCIO + "  style='width:22px'><button class='btn btn-primary btn-xs' type='button'>Imprimir</button></td>";
            }
            else if (item.ESTADO == 'L')
            {

               // tabla += "<td class='CargarN'id=" + item.CLIENTE + "/" + item.ID_S + "/" + item.INMUEBLE + "  style='width:22px'><button class='btn btn-success btn-xs' type='button'>Crear Hoja de negocio</button></td>";

                //id=" + item.CLIENTE + "/" + item.ID_S + "/" + item.INMUEBLE + "
                tabla += "<td class='CargarN' id=" + item.CLIENTE + "/" + item.ID_S + "/" + item.INMUEBLE + " href=Crearnegocio.aspx?proyec="+item.CLIENTE + " style='width:22px'><button class='btn btn-success btn-xs' type='button'>Crear Hoja de negocio</button></td>";


            }
              tabla += "</tr>";
        });
        tabla += "</tbody>";
        tabla += "</table>";
        $('#sepraciones').append(tabla);
        $('#sepracion').dataTable();
    }
    //listado de inmuebles separados por actualizar
    BLLInmuebles.TablasepracionNegocioUpdate = function (inmuebles) {
        document.getElementById('sepraciones').innerHTML = "";
        var tabla = '<table id="sepracion" class="table table-striped table-bordered table-hover">';
        tabla += "<thead>";
        tabla += "<tr>";
        tabla += "<th>Codigo CRM</th>"
        tabla += "<th>Cliente</th>";
        tabla += "<th>Telefono</th>";
        tabla += "<th>Inmueble</th>";
        tabla += "<th>Proyecto</th>";
        tabla += "<th></th>";
        tabla += "</tr>";
        tabla += "</thead>";
        tabla += "<tbody>";
        $.each(inmuebles, function (i, item) {

            tabla += " <tr>";
            if (item.CODIGO_F != null) {
                tabla += "<td>" + item.CODIGO_F + "</td>";

            } else {

                tabla += "<td>" + "No tiene negocio" + "</td>";
            }
            if (item.ESTADO == 'C') {
                tabla += "<td id=" + item.CLIENTE + " class='Infocl'>" + item.NOMBRES + " " + item.P_APELLIDO + " " + item.S_APELLIDO + "</td>";
               
                tabla += "<td>" + item.TELEFONO2 + "</td>";
                tabla += "<td>" + $.trim(item.CASA) + "</td>";
                tabla += "<td>" + $.trim(item.NOMBRE_PROYEC) + "</td>";
                tabla += "<td class='CargarN' id=" + item.CLIENTE + "/" + item.ID_S + "/" + item.INMUEBLE + "/" + item.ID_NEGOCIO + " href=Actualizarnegocio.aspx?proyec=" + item.CLIENTE + " style='width:22px'><button class='btn btn-primary btn-xs' type='button'>Actualizar Hoja de negocio</button></td>";
                tabla += "<td class='Btimprimir'id=" + item.ID_NEGOCIO + "  style='width:22px'><button class='btn btn-primary btn-xs' type='button'>Imprimir</button></td>";
                    //<td class='CargarN'id=" + item.CLIENTE + "/" + item.ID_S + "/" + item.INMUEBLE + "/" + item.ID_NEGOCIO + " style='width:22px'><button class='btn btn-primary btn-xs' type='button'>Actualizar</button></td>";
            }          
           
            tabla += "</tr>";
        });
        tabla += "</tbody>";
        tabla += "</table>";
        $('#sepraciones').append(tabla);
        $('#sepracion').dataTable();
    }

    //Tabla Inmuebles Traidos de CRM
    BLLInmuebles.TablaInmuebleCRM = function (inmuebles) {
        document.getElementById('TablaIm').innerHTML = "";
        var tabla = '<table id="example5" class="table table-striped table-bordered table-hover">';
        tabla += "<thead>";
        tabla += "<tr>";
        tabla += "<th>Obra</th>";
        tabla += "<th>Descripcion</th>";
        tabla += "<th>Inmueble</th>";
        tabla += "<th>Area</th>";
        tabla += "<th>Valor Inmueble</th>";
        tabla += "</tr>";
        tabla += "</thead>";
        tabla += "<tbody>";
        $.each(inmuebles, function (i, item) {
            tabla += " <tr>";
            tabla += "<td>" + item.INMUOBRA + "</td>";
            tabla += "<td>" + item.INMUDECS + "</td>";
            tabla += "<td>" + item.INMUEBLE + "</td>";
            tabla += "<td>" + item.AREA + "</td>";
            tabla += "<td>" + utl.FormatNumero(item.VAL_INMUEBLE) + "</td>";
            tabla += "</tr>";
        });
        tabla += "</tbody>";
        tabla += "</table>";
        $('#TablaIm').append(tabla);
        $('#example5').dataTable();
    }

    ///Crear Objeto Para Transferir a la Insercion de los Inmuebles
    BLLInmuebles.DtoImnuebles = function (inmueble) {
        for (var i in inmueble) {
            var item = inmueble[i];
            accounting.push({
                "referencia": item.REFERENCIA,
                "inmuobra": item.INMUOBRA.trim(),
                "inmudecs": item.INMUDECS.trim(),
                "suc": item.SUC.trim(),
                "ppto": item.PPTO.trim(),
                "mza": item.MZA.trim(),
                "inmueble": item.INMUEBLE.trim(),
                "area": item.AREA.trim(),
                "val_inmueble": item.VAL_INMUEBLE,
                "inmuestado": item.INMUESTADO.trim()
            });
        }

    }

    ///Realizo Insercion de los inmuebles
    BLLInmuebles.prototype.InsertInmuebles = function (b, Wsurl) {
        BLLInmuebles.DtoImnuebles(resulIm);
        jsonData = "{ 'i':" + JSON.stringify(inmueblesCRM.accounting = accounting) + ",'b':" + JSON.stringify(b) + "}";
        $.ajax({
            type: "POST", url: Wsurl, data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            cache: false,
            success: function (result) {
                if (result.d === 1) {
                    setTimeout(function () { $('#Cargando').hide(); }, 1000);
                    toastr.success(' CRM - Mayales' + '</br> Se han cargados los inmuebles de manera exitosa en el sistema');
                    accounting = [];
                    inmueblesCRM = {};
                    console.log('acon' + accounting)
                    console.log('inmuebles' + inmueblesCRM)
                } else {
                    $('#Cargando').hide();
                    toastr.error(' CRM - Mayales' +
                     '</br>Los inmuebles que intenta cargar ya han sido anexados al sistema');
                    accounting = [];
                    inmueblesCRM = {};
                    console.log('acon' + accounting)
                    console.log('inmuebles' + inmueblesCRM)
                }
            },
            error: function (obj, error, objError) { console.log('Error' + obj.responseText); }
        });
    }

    BLLInmuebles.prototype.UdateInmuebles = function (bloque) {
        BLLInmuebles.DtoImnuebles(resulIm);
        jsonData = "{ 'i':" + JSON.stringify(inmueblesCRM.accounting = accounting) + ",'b':" + JSON.stringify(bloque) + "}";
        $.ajax({
            type: "POST", url: WUpdateinmuebles,data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            cache: false,
            success: function (result) {
                    
                    setTimeout(function () { $('#Cargando').hide(); }, 1000);
                    toastr.success(' CRM - Mayales Notificacion' +
                    '</br>' + result.d);
                    accounting = [];
                    inmueblesCRM = {};
                    console.log('acon' + accounting)
                    console.log('inmuebles' + inmueblesCRM)
                    
                    ac.InsertActInmueble(bloque, WAcuerdosNegocio);
               
            },
            error: function (obj, error, objError) { console.log('Error' + obj.responseText); }
        });
    }

    //retorna lista de Inmuebles Por proyecto
    BLLInmuebles.prototype.LisInmuebles = function (proyecto) {
        jsonData = "{ 'p':" + JSON.stringify(proyecto) + " }";
        $.ajax({
            type: "POST", url: WsGetInmuebles, data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                if (result.d == null)
                {

                }
                else {
                    BLLInmuebles.CompenenteInmueble(result.d);
                }
            },
            error: function (obj, error, objError) { alert(error.responseText); }
        });
    }


    BLLInmuebles.prototype.EstadosInmuebles = function (Wsurl, op, p) {
        jsonData = "{ 'op':" + parseInt(op) + ",'p':" + JSON.stringify(p) + "}";
        $.ajax({
            type: "POST", url: Wsurl, data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                if (result.d == null) {
                    document.getElementById('tables').innerHTML = "";
                    document.getElementById('Inmueble').innerHTML = "";
                }
                else {
                    BLLInmuebles.CompenenteInmueble(result.d)
                    BLLInmuebles.CompenenteP(result.d)

                }

            },
            error: function (obj, error, objError) { alert(error.responseText); }
        });
    }
    BLLInmuebles.prototype.EstadosInmuebles2 = function (Wsurl, op, p) {
        jsonData = "{ 'op':" + parseInt(op) + ",'p':" + JSON.stringify(p) + "}";
        $.ajax({
            type: "POST", url: Wsurl, data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
              
                if (result.d == null) {
                  
                    document.getElementById('Inmueble').innerHTML = "";
                }
                else {
                  
                    BLLInmuebles.CompenenteP(result.d)
                    
                }

            },
            error: function (obj, error, objError) { alert(error.responseText); }
        });
    }
    BLLInmuebles.CompenenteP = function (bloque) {

        for (var i = 0; i < bloque.length; i++) {
            var lista = '<option value=' + bloque[i]["REFERENCIA"] + '>';
            lista += bloque[i]["INMUEBLE"];
            lista += '</option>'
            $("#Inmueble").append(lista);
        }

    }

    BLLInmuebles.CompenenteInmueble = function (inmuebles) {
        document.getElementById('tables').innerHTML = "";
        var tabla = '<table id="example6" class="table table-striped table-bordered table-hover">';
        tabla += "<thead>";
        tabla += "<tr>";
        tabla += "<th>Inmueble</th>";;
        tabla += "<th>Area</th>";
        tabla += "<th>Precio</th>";
        tabla += "<th>Estado</th>";
        tabla += "<th>accion</th>";
        tabla += "</tr>";
        tabla += "</thead>";
        tabla += "<tbody>";
        $.each(inmuebles, function (i, item) {
            tabla += " <tr>";
            tabla += "<td>" + item.INMUEBLE + "</td>";
            tabla += "<td>" + item.AREA + "</td>";
            tabla += "<td>" + utl.FormatNumero(item.VAL_INMUEBLE) + "</td>";
            
            
            if (item.INMUESTADO == '0')
            {
               tabla += "<td>Disponible</td>";
               tabla += "<td style='width:22px'><button id='" + item.REFERENCIA + "'class='btn btn-success btn-xs separar' type='button'>Separar</button></td>";
            }
            else
            {
                if (item.INMUESTADO == '5') {
                    tabla += "<td>Ocupado</td>";
                    tabla += "<td style='width:22px'></td>";
                }

                else
                    if (item.INMUESTADO == '1')
                {
                    tabla += "<td>Ocupado</td>";
                    tabla += "<td style='width:22px'></td>";
                }
                else
                {
                    if (item.INMUESTADO == '2')
                    {
                        tabla += "<td>Disponible</td>";
                        tabla += "<td style='width:22px'><button id='" + item.REFERENCIA + "'class='btn btn-success btn-xs separar' type='button'>Separar</button></td>";
                    }
                    else
                    {
                        if (item.INMUESTADO == '3') {
                            tabla += "<td>Separado</td>";
                            tabla += "<td style='width:22px'><button id='" + item.REFERENCIA + "' class='btn btn-primary btn-xs detalleSepa' type='button'>Detalle sepracion</button></td>";
                        }
                    }
                }
            }
            tabla += "</tr>";

        });
        tabla += "</tbody>";
        tabla += '</table>';
        $('#tables').append(tabla);
        $('#example6').dataTable();
    }

    BLLInmuebles._Detallesepracion = function (inmuebles) {
        $.each(inmuebles, function (i, item) {
            $('#detalleCliente').val(item.NOMBRES + " " + item.P_APELLIDO + " " + item.S_APELLIDO);
            $('#detalleresidencia').val(item.DIRECCION);
            $('#detalleinmueble').val(item.NOMBRE_BLO.trim() + " - " + item.INMUEBLE.trim());
            $('#descripcionInm').val(item.INMUDECS);
            $('#detalleFechasep').val(moment(item.FECHASEPARACION).format("YYYY/MM/DD"));
            $('#detallefechafin').val(moment(item.FECHAFINAL).format("YYYY/MM/DD"));
            
        })
    }

    //listado de inmuebles separados
    BLLInmuebles._SepracionInmuebles = function (inmuebles) {
        document.getElementById('sepraciones').innerHTML = "";
        var tabla = '<table id="sepracion" class="table table-striped table-bordered table-hover">';
        tabla += "<thead>";
        tabla += "<tr>";
        tabla += "<th>Cliente</th>";
        tabla += "<th>Telefono</th>";
        tabla += "<th>Inmueble</th>";
        tabla += "<th>Proyecto</th>";
        tabla += "<th>Fec. de sepracion</th>";
        tabla += "<th></th>";
        tabla += "</tr>";
        tabla += "</thead>";
        tabla += "<tbody>";
        $.each(inmuebles, function (i, item) {
            if (item.ESTADO != "C") {

                tabla += " <tr>";
                tabla += "<td id=" + item.CLIENTE + " class='Infocl'>" + item.NOMBRES + " " + item.P_APELLIDO + " " + item.S_APELLIDO + "</td>";
                tabla += "<td>" + item.TELEFONO2 + "</td>";
                tabla += "<td>" + $.trim(item.CASA) + "</td>";
                tabla += "<td>" + $.trim(item.NOMBRE_PROYEC) + "</td>";
                if (item.FECHASEPARACION == null)
                {
                    tabla += "<td></td>";

                } else {
                    tabla += "<td>" + moment(item.FECHASEPARACION).format("YYYY/MM/DD") + "</td>";
                }
                if (item.ESTADO == "P") {
                    tabla += "<td class='desistir'id=" + item.CLIENTE + "/" + item.INMUEBLE + "/" + item.DIAS + "/" + item.ID_S + "><img src='" + funcionUrlGlobal('/images_crm/libre.png') + "'> Dias " + item.DIAS + "</td>";

                }
                else {
                    if (item.ESTADO == "D") {
                        tabla += "<td class='desistir'id=" + item.CLIENTE + "/" + item.INMUEBLE + "/" + item.DIAS + "><img src='" + funcionUrlGlobal('/images_crm/Suspendido.png') + "'></td>";
                    }
                    else {

                        if (item.ESTADO == "L") {
                            tabla += "<td class='desistir'id=" + item.CLIENTE + "/" + item.INMUEBLE + "/" + item.DIAS + "/" + item.ID_S + "> <img src='" + funcionUrlGlobal('/images_crm/Completa.png') + "'></td>";
                        }
                        else {
                            if (item.ESTADO ==null) {
                                tabla += "<td>Sin separaciones</td>";
                            }
                        }
                    }
                }
            }
            tabla += "</tr>";
        });
        tabla += "</tbody>";
        tabla += "</table>";
        $('#sepraciones').append(tabla);
        $('#sepracion').dataTable();
    }

    BLLInmuebles.Mensaje = function () {
        $('#mensaje').show();
    }

    BLLInmuebles.DetalleSepracionC = function (separacion) {
        $.each(separacion, function (i, item) {
            $('#TxtclienteS').val(item.NOMBRES + " " + item.P_APELLIDO + " " + item.S_APELLIDO)
            $('#TxtintereS').val(item.NOMBRE_PROYEC)
            $('#TxtinmuebleS').val(item.INMUEBLE)
            $('#Txtnegocio').val(moment(item.FECHASEPARACION).format("YYYY/MM/DD"));
            switch (item.ESTADO) {
                case "P":
                    $('#TxtEstado').val("Proceso de separacion en curso");
                    break
                case "D":
                    $('#TxtEstado').val("Inmueble ha sido desistido");
                    break
                case "L":
                    $('#TxtEstado').val("Proceso de compra del inmueble");
                    break

            }
           
        });
    }
}