//var c = new BLLTrabajadores();

function BLLProyectos() {


    var WEstaAsesor = funcionUrlGlobal("/ServiciosFox/WProyectos.asmx/Lisasesortarea");
    var WEstaAsesorUSU = funcionUrlGlobal("/ServiciosFox/WProyectos.asmx/LisasesortareaUSU");
    
    
    BLLProyectos.prototype.listadotareasP = function (p) {
        jsondata = "{'p':"+JSON.stringify(p)+"}"
        $.ajax({
           type: "POST", url: WEstaAsesor,data:jsondata,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
               
                if (result.d == null)
                {
                    BLLProyectos.Detalletareas(result.d);
                }
                else
                {
                    BLLProyectos.Detalletareas(result.d);
                }
            },
            error: function (obj, error, objError) { alert(obj.responseText); }
        });
    }

    BLLProyectos.prototype.listadotareasUSU = function (p) {
        jsondata = "{'p':" + JSON.stringify(p) + "}"
        $.ajax({
            type: "POST", url: WEstaAsesorUSU, data: jsondata,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {

                if (result.d == null) {
                    BLLProyectos.Detalletareas(result.d);
                }
                else {
                    BLLProyectos.Detalletareas(result.d);
                }
            },
            error: function (obj, error, objError) { alert(obj.responseText); }
        });
    }


    //Metodo para retornar Lista de Proyectos CMR
    BLLProyectos.prototype.ListProyec = function (op, Wsurl) {
        $.ajax({
            type: "POST", url: Wsurl,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                if (result.d == null) {
                    switch (op) {
                        case 1:
                            BLLProyectos.AlertCrm();
                            break
                        case 2:
                            document.getElementById('ComProyect').innerHTML = "";
                            document.getElementById('ComProyect2').innerHTML = "";
                            break
                    }
                }
                else
                {

                    switch (op) {
                        case 1:
                            BLLProyectos.CrearTabla(result.d);
                         break
                        case 2:
                            BLLProyectos.ComboPryectos(result.d);
                            break
                        case 3:
                            BLLProyectos.CrearTablaPro(result.d)
                            break

                    }

                }

            },
            error: function (obj, error, objError) { alert(obj.responseText); }
        });
    }
    BLLProyectos.ComboPryectos = function (proyec) {
        document.getElementById('ComProyect').innerHTML = "";
       
        for (var i = 0; i < proyec.length; i++) {
            var comb = '<option value=' + proyec[i]["ID_PROYEC"] + '>';
            comb += proyec[i]["NOMBRE_PROYEC"];
            comb += '</option>';
            $('#ComProyect').append(comb);
            $('#ComProyect2').append(comb);
            $('#Txt15').append(comb);
        }
    }

    //Metodo para retornar Lista de Proyectos Multi-Fox
    BLLProyectos.prototype.ListProyecFox = function (Wsurl) {
        $.ajax({
            type: "POST", url: Wsurl,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                if (result.d == null)
                {
                    BLLProyectos.AlertFox();
                } else
                {
                    BLLProyectos.CrearTablaFox(result.d);

                }

            },
            error: function (obj, error, objError) { alert(obj.responseText); }
        });
    }

    //Listado de Trabajadores por Proyectos
    BLLProyectos.prototype.LisTraProyecto = function (p, Wsurl) {
        jsonData = "{ 'p':" + JSON.stringify(p) + " }";
        $.ajax({
            type: "POST", url: Wsurl, data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                if (result.d == null) {
                    BLLProyectos.TablaTrabajadoresP(result.d)

                } else {
                    BLLProyectos.TablaTrabajadoresP(result.d)
                }

            },
            error: function (obj, error, objError) { alert(obj.responseText); }
        });
    }

    //Metodo para retornar Lista Trabajadores
    BLLProyectos.prototype.ListTrabajadores = function (Wsurl) {
        $.ajax({
            type: "POST", url: Wsurl,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                if (result.d == null) {
                    toastr.error(' CRM - Mayales ' +
                        '</br>No existen Trabajadores cargados en el sistema..!');
                }
                else {
                    BLLProyectos.TablaTrabajadores(result.d);
                }

            },
            error: function (obj, error, objError) { alert(obj.responseText); }
        });
    }

    //Metodo Asignacion de Proyecto CRM
    BLLProyectos.prototype.AsignarProyecto = function (p, WsUrl) {
        jsonData = "{ 't':" + JSON.stringify(p) + " }";
        $.ajax({
            type: "POST", url: WsUrl, data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                if (result.d == 1) {
                    toastr.success(' CRM - Mayales'+
                        '</br>Se a asignado de Manera Exitosa el acceso al asesor al proyecto');
                     
                } else {
                    toastr.error(' CRM - Mayales'+
                        '</br>No se pudo llevar acabo el proceso el asesor tiene asigando el proyecto actualamente');
                }

            },
            error: function (obj, error, objError) { alert(obj.responseText); }
        });

    }

    //Metodo Insertar Proyectos Traidos de Multifox.
    BLLProyectos.prototype.InsertProyectoFox = function (p, WsUrl) {
        jsonData = "{ 'p':" + JSON.stringify(p) + " }";
        $.ajax({
            type: "POST", url: WsUrl, data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                if (result.d == 1) {
                    toastr.success(' CRM - Mayales' +
                        '</br> El proyecto ha sido cargado de manera exitosa en el sistema');
                } else {
                    toastr.error(' CRM - Mayales' +
                    '</br> El Proyecto que intenta agregar ya ha sido cargado al sistema');
                }

            },
            error: function (obj, error, objError) { alert(obj.responseText); }
        });

    }

    //Remover acceso a los proyectos.
    BLLProyectos.prototype.RemoverAcceso = function (p, WsUrl) {
        jsonData = "{ 'p':" + p + " }";
        $.ajax({
            type: "POST", url: WsUrl, data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                if (result.d == 1) {
                    toastr.success(' CRM - Mayales se ha Removido el acceso al proyecto al Asesor de Manera Exitosa..');
                } else {
                    toastr.error(' CRM - Mayales no se pudo llevar acabo el proceso..');
                }

            },
            error: function (obj, error, objError) { alert(obj.responseText); }
        });
    }

    //Remover Proyectos del sistema.
    BLLProyectos.prototype.EliminarProyecto = function (inmu, WsUrl) {
        jsonData = "{ 'p':" + JSON.stringify(inmu) + " }";
        $.ajax({
            type: "POST", url: WsUrl, data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                switch (result.d) {
                    case 1:
                        toastr.success(' CRM - Mayales' +
                       '</br> El proyecto fue eliminado de manera exitosa del sistema');
                        break
                    case 2:
                        toastr.error(' CRM - Mayales' +
                      '</br> No es posible remover el proyevcto porque actualmente algunos de sus inmuebles esta en proceso de venta');
                        break

                }

            },
            error: function (obj, error, objError) { alert(obj.responseText); }
        });
    }

    //Creacion de componentes
   //tabla Proyectos CRM Remover Y Asignacion de Planos
    BLLProyectos.CrearTabla = function (proyectos) {
        proyecCRM = proyectos;
        document.getElementById('Tabla').innerHTML = "";
        var tabla = '<table id="example3" class="table table-striped table-bordered table-hover">';
        tabla += "<thead>";
        tabla += "<tr>";
        tabla += "<th>Cod_Proyecto</th>";
        tabla += "<th>Nombre</th>";
        tabla += "<th>Ubicacion</th>";
        tabla += "<th>Accion</th>"
        tabla += "<th></th>"
        tabla += "</thead>";
        tabla += "<tbody>";
        $.each(proyectos, function (i, item) {
            tabla += " <tr>";
            tabla += "<td style='width:100px'>" + item.ID_PROYEC + "</td>";
            tabla += "<td>" + item.NOMBRE_PROYEC + "</td>";
            tabla += "<td>Valledupar - Cesar</td>";
            tabla += "<td style='width:20px;' >";
            tabla += "<button id='" + item.ID_PROYEC + "' class='btn btn-danger btn-xs RemoverP' type='button'>Eliminar</button>";
            tabla += "</td>";
            tabla += "<td style='width:20px;'>";
            tabla += "<a class='Planos' id=" + item.ID_PROYEC + "><img src='"+funcionUrlGlobal('/images_crm/Drawing.png')+"'/></a<";
            tabla += "</td>";
            tabla += "</tr>";
        });
        tabla += "</tbody>";
        tabla += "</table>";
        $('#Tabla').append(tabla);
        $('#example3').dataTable();
    }

    //tabla Proyectos CRM Asignar  Usuarios
    BLLProyectos.CrearTablaPro = function (proyectos) {
        document.getElementById('Tabla2').innerHTML = "";
        var tabla = '<table id="exampleP" class="table table-striped table-bordered table-hover">';
        tabla += "<thead>";
        tabla += "<tr>";
        tabla += "<th>Cod_Proyecto</th>";
        tabla += "<th>Nombre</th>";
        tabla += "<th>Ubicacion</th>";
        tabla += "</tr>";
        tabla += "</thead>";
        tabla += "<tbody>";
        $.each(proyectos, function (i, item) {
            tabla += " <tr class='CargarPT' id=" + item.ID_PROYEC + ">";
            tabla += "<td style='width:100px'>" + item.ID_PROYEC + "</td>";
            tabla += "<td>" + item.NOMBRE_PROYEC + "</td>";
            tabla += "<td>Valledupar - Cesar</td>";
            tabla += "</td>";
            tabla += "</tr>";
        });
        tabla += "</tbody>";
        tabla += "</table>";
        $('#Tabla2').append(tabla);
        $('#exampleP').dataTable();
    }

    //tabla Proyectos FOX
    BLLProyectos.CrearTablaFox = function (proyectos) {
        ///alert(JSON.stringify(proyecCRM))
        var tabla = '<table id="example4" class="table table-striped table-bordered table-hover">';
        tabla += "<thead>";
        tabla += "<tr>";
        tabla += "<th>Cod_Proyecto</th>";
        tabla += "<th>Nombre</th>";
        tabla += "<th>Ubicacion</th>";
        tabla += "<th></th>";
        tabla += "</tr>";
        tabla += "</thead>";
        tabla += "<tbody>";
        for (var i in proyectos) {
            tabla += " <tr>";
            tabla += "<td style='width:100px;font-weight:bold'>" + proyectos[i]["ID_PROYEC"] + "</td>";
            tabla += "<td>" + proyectos[i]["NOMBRE_PROYEC"] + "</td>";
            tabla += "<td>Valledupar - Cesar</td>";
            tabla += "<td style='width:22px'>";
            tabla += "<button id='" + proyectos[i]["ID_PROYEC"] + '-' + proyectos[i]["NOMBRE_PROYEC"] + "'class='btn btn-success btn-xs Cargar' type='button'>Cargar</button></td>";
            tabla += "</tr>";
        };
        tabla += "</tbody>";
        $('#TablaFox').append(tabla);
        $('#example4').dataTable();
    }





    ///Tabla Trabajadores para asignar Acceso al Proyecto
    BLLProyectos.TablaTrabajadores = function (trabajadores) {
        document.getElementById('tabla').innerHTML = "";
        var tabla = '<table id="example5" class="table table-striped table-bordered table-hover">';
        tabla += "<thead>";
        tabla += "<tr>";
        tabla += "<th>Usuario</th>";
        tabla += "<th>Nombre</th>";
        tabla += "<th></th>";
        tabla += "</tr>";
        tabla += "</thead>";
        tabla += "<tbody>";
        $.each(trabajadores, function (i, item) {
            tabla += " <tr>";
            tabla += "<td>" + item.T_CEDULA + "</td>";
            tabla += "<td>" + item.NOMBRES + "</td>";
            tabla += "<td>";
            tabla += "<button id='" + item.T_CEDULA + '-' + item.NOMBRES + "'class='btn btn-success btn-xs Asignar' type='button'>Asignar</button>";
            tabla += "<button id='" + item.T_CEDULA + '-' + item.NOMBRES + "'class='btn btn-danger btn-xs Remover' type='button'>Remover</button>";
            tabla += "</td>";
            tabla += "</tr>";
        });
        tabla += "</tbody>";
        $("#tabla").empty();
        $('#tabla').append(tabla);
        $('#example5').dataTable();

    }

    ///Tabla TrabajadoresXProyectos
    BLLProyectos.TablaTrabajadoresP = function (trabajadores) {
        document.getElementById('TablaT').innerHTML = "";
        var tabla = '<table id="example6" class="table table-striped table-bordered table-hover">';
        tabla += "<thead>";
        tabla += "<tr>";
        tabla += "<th>Proyecto</th>";
        tabla += "</tr>";
        tabla += "</thead>";
        tabla += "<tbody>";
        $.each(trabajadores, function (i, item) {
            tabla += " <tr class='Delete' id='" + item.ID_PY + "'>";
            tabla += "<td>" + item.NOMBRE_PROYEC + "</td>";
            tabla += "</td>";
            tabla += "</tr>";
        });
        tabla += "</tbody>";
        $('#TablaT').append(tabla);
        $('#example6').dataTable();

    }

    //Mensaje Si no Existen Proyectos cargados en CRM
    BLLProyectos.AlertCrm = function () {
        $('#MensajeCRM').show();
    }

    //Mensaje Si se an cargado Proyectos FOX
    BLLProyectos.AlertFox = function () {
        $('#MensajeFox').show();
    }

    



    //Listado de Proyectos asignados al Trabajador
    BLLProyectos.prototype.LisProyecNegocios = function (Wsurl) {
        ///jsonData = "{ 'c':" + JSON.stringify(persona) + " }";
        $.ajax({
            type: "POST", url: Wsurl,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                if (result.d == null) {

                    BLLProyectos.ComProyecNegocios(result.d);
                }
                else {
                    BLLProyectos.ComProyecNegocios(result.d);
                }
            },
            error: function (obj, error, objError) { alert(error.responseText); }
        });
    }



    


    //Listado de Proyectos asignados al Trabajador por notas
    BLLProyectos.prototype.LisProyectrabajdoresNota = function (Wsurl) {
        ///jsonData = "{ 'c':" + JSON.stringify(persona) + " }";
        $.ajax({
            type: "POST", url: Wsurl,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                if (result.d == null) {

                    BLLProyectos.ComProyecAsignadosNota(result.d);
                }
                else {
                    BLLProyectos.ComProyecAsignadosNota(result.d);
                }
            },
            error: function (obj, error, objError) { alert(error.responseText); }
        });
    }


    //Listado de Proyectos asignados al Trabajador
    BLLProyectos.prototype.LisProyectrabajdores = function (Wsurl) {
        ///jsonData = "{ 'c':" + JSON.stringify(persona) + " }";
        $.ajax({
            type: "POST", url: Wsurl,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                if (result.d == null)
                {
                   
                    BLLProyectos.ComProyecAsignados(result.d);
                }
                else
                {
                    BLLProyectos.ComProyecAsignados(result.d);
                }
            },
            error: function (obj, error, objError) { alert(error.responseText); }
        });
    }


    //Listado de Proyectos asignados al Trabajador
    BLLProyectos.prototype.LisProyectrabajdoresClientes = function (Wsurl) {
        ///jsonData = "{ 'c':" + JSON.stringify(persona) + " }";
        $.ajax({
            type: "POST", url: Wsurl,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                if (result.d == null) {

                    BLLProyectos.ComProyecAsignadoClientes(result.d);
                }
                else {
                    BLLProyectos.ComProyecAsignadoClientes(result.d);
                }
            },
            error: function (obj, error, objError) { alert(error.responseText); }
        });
    }


    

    //Listado de Proyectos asignados al Trabajador
    BLLProyectos.prototype.LisProyecSeparacion= function (Wsurl) {
        ///jsonData = "{ 'c':" + JSON.stringify(persona) + " }";
        $.ajax({
            type: "POST", url: Wsurl,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                if (result.d == null) {

                    BLLProyectos.ComProyecAsigSepa(result.d);
                }
                else {
                    BLLProyectos.ComProyecAsigSepa(result.d);
                }
            },
            error: function (obj, error, objError) { alert(error.responseText); }
        });
    }
    //Listado de Proyectos asignados al Trabajador
    BLLProyectos.prototype.LisProyecSeparacion2 = function (Wsurl) {
        ///jsonData = "{ 'c':" + JSON.stringify(persona) + " }";
        $.ajax({
            type: "POST", url: Wsurl,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                if (result.d == null) {

                    BLLProyectos.ComProyecAsigSepa2(result.d);
                }
                else {
                    BLLProyectos.ComProyecAsigSepa2(result.d);
                }
            },
            error: function (obj, error, objError) { alert(error.responseText); }
        });
    }

    //Listado de Proyectos asignados al Trabajador
    BLLProyectos.prototype.ProyectosTramites = function (Wsurl) {
        ///jsonData = "{ 'c':" + JSON.stringify(persona) + " }";
        $.ajax({
            type: "POST", url: Wsurl,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                if (result.d == null) {

                    BLLProyectos.ListaProyectosTramites(result.d);
                }
                else {
                    BLLProyectos.ListaProyectosTramites(result.d);
                }
            },
            error: function (obj, error, objError) { alert(error.responseText); }
        });
    }

    //Crearmos componentes de Proyectos
    BLLProyectos.ListaProyectosTramites= function (Lista, op) {

        var respuesta = null;
        var cont = Lista.length;
        var comp = "";
        respuesta = BLLProyectos.CLass(cont);
        $.each(Lista, function (i, item) {

            comp = '<div class="' + respuesta + '">';
            comp += '<div class="hpanel hred contact-panel">';
            comp += '<div class="panel-body">';
            comp += '<h3 class="Inmueble"><a href="Tramites.aspx?proyec=' + item.NOMBRE_PROYEC.trim() + item.ID_PROYEC + '">' + item.NOMBRE_PROYEC + '</a></h3>';
            comp += '<div class="text-muted font-bold m-b-xs">Valledupar - Cesar</div>';
            comp += '</div>';
            comp += '<div class="panel-footer contact-footer">';
            comp += '<div class="row">';
            comp += '<div class="col-md-12 border-right"> <div class="contact-stat"><span>Inmuebles </span> <strong></strong></div> </div>';
            comp += '</div>';
            comp += '</div';
            comp += '</div>';
            comp += '</div>';
            $('#result').append(comp);
        });

    }


    //Mensaje de Alrta cuando no Tienen Proyectos Asignados aun
    BLLProyectos.AlertProyec = function () {
        var comp = '<divclass="col-lg-12">';
        comp += '<div class="hpanel hred contact-panel">';
        comp += '<div class="panel-body">';
        comp += '<h3 class=""> EL asesor actualemte no tiene acceso a ningun proyecto</h3>';
        comp += '</div>';
        comp += '</div>';
        comp += '</div>';
        $('#result').append(comp);
    }

    //Crearmos componentes de Proyectos
    BLLProyectos.ComProyecAsigSepa = function (Lista,op) {
        
        var respuesta = null;
        var cont = Lista.length;
        var comp = "";
        respuesta = BLLProyectos.CLass(cont);
        $.each(Lista, function (i, item) {
            
            comp = '<div class="' + respuesta + '">';
            comp += '<div class="hpanel hred contact-panel">';
            comp += '<div class="panel-body">';
            comp += '<h3 class="Inmueble"><a href="ListadoSeparaciones.aspx?proyec=' + item.ID_PROYEC + '">' + item.NOMBRE_PROYEC + '</a></h3>';
            comp += '<div class="text-muted font-bold m-b-xs">Valledupar - Cesar</div>';
            comp += '</div>';
            comp += '<div class="panel-footer contact-footer">';
            comp += '<div class="row">';
            comp += '<div class="col-md-12 border-right"> <div class="contact-stat"><span>Inmuebles </span> <strong></strong></div> </div>';
            comp += '</div>';
            comp += '</div';
            comp += '</div>';
            comp += '</div>';
            $('#result').append(comp);
        });
        
    }

    //Crearmos componentes de Proyectos
    BLLProyectos.ComProyecAsigSepa2 = function (Lista, op) {

        var respuesta = null;
        var cont = Lista.length;
        var comp = "";
        respuesta = BLLProyectos.CLass(cont);
        $.each(Lista, function (i, item) {

            comp = '<div class="' + respuesta + '">';
            comp += '<div class="hpanel hred contact-panel">';
            comp += '<div class="panel-body">';
            comp += '<h3 class="Inmueble"><a href="Updatenegocio.aspx?proyec=' + item.ID_PROYEC + '">' + item.NOMBRE_PROYEC + '</a></h3>';
            comp += '<div class="text-muted font-bold m-b-xs">Valledupar - Cesar</div>';
            comp += '</div>';
            comp += '<div class="panel-footer contact-footer">';
            comp += '<div class="row">';
            comp += '<div class="col-md-12 border-right"> <div class="contact-stat"><span>Inmuebles </span> <strong></strong></div> </div>';
            comp += '</div>';
            comp += '</div';
            comp += '</div>';
            comp += '</div>';
            $('#result').append(comp);
        });

    }

    //Creamos los proyectos asignados a cada usuario
    BLLProyectos.ComProyecAsignadosNota = function (Lista, op) {

        var respuesta = null;
        var cont = Lista.length;
        var comp = "";
        respuesta = BLLProyectos.CLass(cont);
        $.each(Lista, function (i, item) {

            comp = '<div class="' + respuesta + '">';
            comp += '<div class="hpanel hred contact-panel">';
            comp += '<div class="panel-body">';
            comp += '<h3 class="Inmueble"><a href="ConfiguracionNegocio.aspx?proyec=' + item.ID_PROYEC + '">' + item.NOMBRE_PROYEC + '</a></h3>';
            comp += '<div class="text-muted font-bold m-b-xs">Valledupar - Cesar</div>';
            comp += '</div>';
            comp += '<div class="panel-footer contact-footer">';
            comp += '<div class="row">';
            comp += '<div class="col-md-12 border-right"> <div class="contact-stat"><span>Inmuebles </span> <strong></strong></div> </div>';
            comp += '</div>';
            comp += '</div';
            comp += '</div>';
            comp += '</div>';
            $('#result').append(comp);
        });

    }


    //Creamos los proyectos asignados a cada usuario
    BLLProyectos.ComProyecAsignadoClientes = function (Lista, op) {

        var respuesta = null;
        var cont = Lista.length;
        var comp = "";
        respuesta = BLLProyectos.CLass(cont);
        $.each(Lista, function (i, item) {

            comp = '<div class="' + respuesta + '">';
            comp += '<div class="hpanel hred contact-panel">';
            comp += '<div class="panel-body">';
            comp += '<h3 class="Inmueble"><a href="CrearNegocioOtroAsesor.aspx?proyec=' + item.ID_PROYEC + '">' + item.NOMBRE_PROYEC + '</a></h3>';
            comp += '<div class="text-muted font-bold m-b-xs">Valledupar - Cesar</div>';
            comp += '</div>';
            comp += '<div class="panel-footer contact-footer">';
            comp += '<div class="row">';
            comp += '<div class="col-md-12 border-right"> <div class="contact-stat"><span>Inmuebles </span> <strong></strong></div> </div>';
            comp += '</div>';
            comp += '</div';
            comp += '</div>';
            comp += '</div>';
            $('#result').append(comp);
        });

    }

    //Creamos los proyectos asignados a cada usuario
    BLLProyectos.ComProyecAsignados = function (Lista, op) {

        var respuesta = null;
        var cont = Lista.length;
        var comp = "";
        respuesta = BLLProyectos.CLass(cont);
        $.each(Lista, function (i, item) {

            comp = '<div class="' + respuesta + '">';
            comp += '<div class="hpanel hred contact-panel">';
            comp += '<div class="panel-body">';
            comp += '<h3 class="Inmueble"><a href="ProyectoInf.aspx?proyec=' + item.ID_PROYEC + '">' + item.NOMBRE_PROYEC + '</a></h3>';
            comp += '<div class="text-muted font-bold m-b-xs">Valledupar - Cesar</div>';
            comp += '</div>';
            comp += '<div class="panel-footer contact-footer">';
            comp += '<div class="row">';
            comp += '<div class="col-md-12 border-right"> <div class="contact-stat"><span>Inmuebles </span> <strong></strong></div> </div>';
            comp += '</div>';
            comp += '</div';
            comp += '</div>';
            comp += '</div>';
            $('#result').append(comp);
        });

    }
    //Creamos los proyectos por negocios
    BLLProyectos.ComProyecNegocios = function (Lista, op) {

        var respuesta = null;
        var cont = Lista.length;
        var comp = "";
        respuesta = BLLProyectos.CLass(cont);
        $.each(Lista, function (i, item) {
        
            comp = '<div class="' + respuesta + '">';
            comp += '<div class="hpanel hred contact-panel">';
            comp += '<div class="panel-body">';
            comp += '<h3 class="Inmueble"><a href="SeguiNegocios.aspx?proyec=' + item.NOMBRE_PROYEC.trim() + item.ID_PROYEC + '">' + item.NOMBRE_PROYEC + '</a></h3>';
            comp += '<div class="text-muted font-bold m-b-xs">Valledupar - Cesar</div>';
            comp += '</div>';
            comp += '<div class="panel-footer contact-footer">';
            comp += '<div class="row">';
            comp += '<div class="col-md-12 border-right"> <div class="contact-stat"><span>Inmuebles </span> <strong></strong></div> </div>';
            comp += '</div>';
            comp += '</div';
            comp += '</div>';
            comp += '</div>';
            $('#result').append(comp);
        });
    }

    //Asignamos la clases al componente Proyecto
    BLLProyectos.CLass = function (cont) {
        var clase = null;
        if (cont == 1) {
            return clase = "col-lg-12";
        } else {
            if (cont == 2) {
                return clase = "col-lg-6";
            } else {
                if (cont == 3) {
                    return clase = "col-lg-4";
                } else {
                    if (cont >= 4) {
                        return clase = "col-lg-3";
                    }
                }
            }
        }
    }

    BLLProyectos.Detalletareas = function (detalle) {
        document.getElementById('clientesData').innerHTML = "";
        var tabla = '<table id="clientesP" class="table table-striped table-bordered table-hover">';
        tabla += "<thead>";
        tabla += "<tr>";
        tabla += "<th>Nombre</th>";
        tabla += "<th>Asesor</th>";
        tabla += "<th>Tareas</th>";
        tabla += "</tr>";
        tabla += "</thead>";
        tabla += "<tbody>";
        $.each(detalle, function (i, item) {
            tabla += " <tr>";
            tabla += "<td id=" + item.CEDULA + " class='Infocl'>" + item.NOMBRES + "  " + item.P_APELLIDO + " </td>";
            tabla += "<td>" + item.ASESOR + "</td>";
            switch (item.ESTADO) {
                case "T":
                    tabla += "<td ><img src='" + funcionUrlGlobal("/images_crm/Completa.png") + "'     class='historial' id=" + item.CEDULA + " href=''/></td>";
                    break
                case "E":
                    tabla += "<td ><img src='" + funcionUrlGlobal("/images_crm/Suspendido.png") + "'  class='historial' id=" + item.CEDULA + " href='' /></td>";
                    break
                case "P":
                    tabla += "<td ><img src='" + funcionUrlGlobal("/images_crm/Suspendido.png") + "' class='historial' id=" + item.CEDULA + " href=''/></td>";
                    break
                case "V":
                    tabla += "<td ><img src='" + funcionUrlGlobal("/images_crm/Espera.png") + "' class='historial' id=" + item.CEDULA + " href=''/></td>";
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
        $('#clientesP').dataTable();
    }

 
}