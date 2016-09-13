var ep = new BLLEmpresa();
var pro = new BLLProyectos();

function BLLComercial() {

    var Wsproyectos = funcionUrlGlobal("/ServiciosFox/WProyectos.asmx/LisbloProyec");///Listado de clientes
    var WsListProyec = funcionUrlGlobal("/ServiciosFox/WProyectos.asmx/LisProyectos");//Consulto Proyectos CRM
    var WsListInf = funcionUrlGlobal("/Servicios/WInformacion.asmx/Informacion");//Informacion
    var WsLcgestion = funcionUrlGlobal("/Servicios/WTareas.asmx/_lcgestion"); 
    var WsCancelarg = funcionUrlGlobal("/Servicios/WTareas.asmx/Cancelargestion");

    BLLComercial.prototype._Cancelargestion = function (b, c, e) {
        Jsondata = "{'b':" + JSON.stringify(b) + ",'c':" + JSON.stringify(c) + ",'e':" + JSON.stringify(e) + "}";
        $.ajax({
            type: "POST", url: WsCancelarg,data:Jsondata,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                if (result.d == 0)
                {
                    toastr.error('CRM - Mayales - Error al Terminar la gestion para el cliente');
                    $('#Cancelargestion').modal("hide");
                }
                else
                {
                    toastr.error('CRM - Mayales - ' +
                        '</br>Gestion terminada de manera exitosa');
                    $('#Cancelargestion').modal("hide");
                    $('#infoTareas').modal("hide");
                }

            },
            error: function (error) { alert(error.responseText); }
        });

    }
    
    BLLComercial.prototype.listaProyectocrm = function (proyecto) {
        pro.ListProyec(2, WsListProyec);
    }

    BLLComercial.prototype.BuscarCliente = function (Wsurl) {
        $.ajax({
            type: "POST", url: Wsurl,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                if (result.d == null) {
                    toastr.error('CRM - Mayales - Error al Cargar los datos del Cliente');
                } else {
                    alert(JSON.stringify(result.d))
                }

            },
            error: function (error) { alert(error.responseText); }
        });

    }

    BLLComercial.prototype.InfoEntero = function (Wsurl) {
        $.ajax({
            type: "POST", url: WsListInf,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                if (result.d == null)
                {
                    BLLComercial.infomacionEn(result.d);
                }
                else
                {
                    BLLComercial.infomacionEn(result.d);
                }

            },
            error: function (error) { alert(error.responseText); }
        });

    }

    BLLComercial.infomacionEn = function (datos) {
        $.each(datos, function (i,item) {
            var combo = '<option>';
            combo += item.DETALLE;
            combo += '</option>';
            $('#ComboEntero').append(combo);
        });
    }

    BLLComercial.prototype.GetClientes = function (cedula, Wsurl) {
        jsonData = "{ 'c':" + JSON.stringify(cedula) + " }";
        $.ajax({
            type: "POST", url: Wsurl, data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                if (result.d == null) {
                    toastr.error('CRM - Mayales - Error al Cargar los datos del Cliente');
                } else {
                    BLLComercial.CrearComponente(result.d);
                }

            },
            error: function (error) { alert(error.responseText); }
        });
    }

    BLLComercial.prototype.ListClientes = function (proyecto, Wsurl) {
      jsonData = "{ 'p':" + JSON.stringify(proyecto) + "}";
        $.ajax({
            type: "POST", url: Wsurl, data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                if (result.d == null)
                {
                    BLLComercial.CrearTabla(result.d)
                }
                else
                {
                    BLLComercial.CrearTabla(result.d)
                }

            },
            error: function (error) { alert(error.responseText); }
        });

    }

    BLLComercial.prototype._Lgescancelar = function (proyecto,estado) {
        jsonData = "{ 'p':" + JSON.stringify(proyecto) + ",'e':" + JSON.stringify(estado) + "}";
        $.ajax({
            type: "POST", url: WsLcgestion, data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                if (result.d == null) {

                    BLLComercial.CrearTabla(result.d)
                }
                else {

                    BLLComercial.CrearTabla(result.d)
                }

            },
            error: function (error) { alert(error.responseText); }
        });

    }

    BLLComercial.prototype.Proyecto = function (proyecto) {
        inm.LisInmuebles(proyecto);
    }

    BLLComercial.prototype.ListbProyec = function (proyecto) {
      jsonData = "{ 'b':" + JSON.stringify(proyecto) + " }";
        $.ajax({
            type: "POST", url: Wsproyectos, data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                if (result.d == null) {
                    $('#Mazanasb').html("")
                    $('#Mazanasb').append('<option></option>')
                } else {
                    $('#Mazanasb').html("")
                    $('#Mazanasb').append('<option></option>')
                    BLLComercial.CompenenteP(result.d);
                }

            },
            error: function (error) { alert(error.responseText); }
        });
    }

    BLLComercial.prototype.LisEmpresas = function () {
        ep.GetEmpresa();
    }

    BLLComercial.CompenenteP = function (bloque) {
        for (var i = 0; i < bloque.length; i++) {
            var lista = '<option value=' + bloque[i]["ID_BLOQUE"] + '>';
            lista += bloque[i]["NOMBRE_BLO"];
            lista += '</option>'
            $("#Mazanasb").append(lista);
        }

    }

    //informacion Cliente
    BLLComercial.CrearComponente = function (persona) {
        $.each(persona, function (i, item) {
            $('#TxtNombre').val(item.NOMBRES + '  ' + item.P_APELLIDO + ' ' + item.S_APELLIDO);
            $('#txtResidencia').val(item.DIRECCION);
            $('#TxtTelefono').val(item.TELEFONO2);
            $('#Txtcorreo').val(item.EMAIL);
        })
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
            tabla += "<td><a class='infDetalle' id='" + item.CEDULA + "'>"+item.CEDULA+"</a></td>";
            tabla += "<td>" + item.NOMBRES + '  ' + item.P_APELLIDO + '  ' + item.S_APELLIDO + "</td>";
            tabla += "<td>" + item.DIRECCION + "</td>";
            tabla += "<td>" + item.TELEFONO2 + "</td>";
            tabla += "<td style='width:20px;height: 20px'>";
            tabla += "<img src='"+funcionUrlGlobal('/images_crm/Crear.png')+"'class='BtnTarea' type='button' id='" + item.CEDULA + "/" + item.EMAIL + "' title='Crear Tareas'></img>";
            tabla += "</td>";
          
            if (item.ESTADO_I == null)
            {
                tabla += "<td style='width:20px;height: 20px'><img src='" + funcionUrlGlobal('/images_crm/agregar.png') + "' id='" + item.CEDULA + "/" + item.EMAIL + "' class='ClienteS' title='Agregar a separacion'></img></td>";
                
            }
            else
            {
                if (item.ESTADO_I == "D")
                {

                    tabla += "<td style='width:20px;height: 20px'><img src='" + funcionUrlGlobal('/images_crm/agregar.png') + "'  id='" + item.CEDULA + "/" + item.EMAIL + "' class='ClienteS' title='Agregar a separacion'></img></td>";
                }
                else
                { 
                    if (item.ESTADO_I == "L")
                    {
                        //tabla += "<td style='width:20px;height: 20px'><img src='..images_crm/agregar.png'  id='" + item.CEDULA + "/" + item.EMAIL + "' class='ClienteS' title='Agregar a separacion'></img></td>";
                        tabla += "<td style='width:20px;height: 20px' ><img src= '" + funcionUrlGlobal('/images_crm/Home2.png') + "' id='" + item.REFERENCIA + "' class='inmsdetalles' title='Detalle de separacion'></img></td>";
                    }
                    else
                    {
                        if (item.ESTADO_I == "P")
                        {
                            tabla += "<td style='width:20px;height: 20px' ><img src= '" + funcionUrlGlobal('/images_crm/Home2.png') + "' id='" + item.REFERENCIA + "' class='inmsdetalles' title='Detalle de separacion'></img></td>";
                            
                        }
                        else
                        {
                            tabla += "<td style='width:20px;height: 20px'><img src='" + funcionUrlGlobal('/images_crm/agregar.png') + "' id='" + item.CEDULA + "/" + item.EMAIL + "' class='s'  title='Agregar a separacion'></img></td>";
                        }
                    }
                }
                      
            }
            if (item.ESTADO_C == "A")
            {
                tabla += "<td style='width:20px;height: 20px'><img src='" + funcionUrlGlobal('/images_crm/_Auser.png') + "' id='" + item.CEDULA + "/" + item.EMAIL + "'></img></td>";
            }
            else
            {
                if (item.ESTADO_C == "N")
                {
                    tabla += "<td style='width:20px;height: 20px'><img src='" + funcionUrlGlobal('/images_crm/user_error.png') + "' id='" + item.CEDULA + "/" + item.EMAIL + "' ></img></td>";
                }
                else
                {
                    if (item.ESTADO_C == "C")
                    {
                        tabla += "<td style='width:20px;height: 20px'><img src='" + funcionUrlGlobal('/images_crm/checked_user.png') + "' id='" + item.CEDULA + "/" + item.EMAIL + "'></img></td>";
                    }
                    else
                    {
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

    BLLComercial.Hablitar = function () {
        $('#TxtInmueble').attr('disabled', false);
        $('#TxtDescripcion').attr('disabled', false);
        $('#TxtDireccion').attr('disabled', true);
        $('#TxtFecha').attr('disabled', false);
        $('#BtnNuevo').hide();
        $('#BtnSave').attr('disabled', false);
        $('#BtnCancelar').show();
        $('#BtnBuscar').hide();
    }

    BLLComercial.Limpiar = function () {
        $('#TxtDescripcion').val("");
        $('#TxtFecha').val("");
    }

}

