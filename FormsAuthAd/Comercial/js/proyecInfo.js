var Cli = new BLLClientes();
var sala = new BLLSala_Ventas();
var Tr = new BLLTareas();
var listc = new BLLComercial();
var utl = new BLLUtilidades();
var inm = new BLLInmuebles();
var emp = new BLLEmpresa();
var act = new BLLActInmuebles();
var admComercial = (function () {
    var map;
    var proyec = utl.getUrl('proyec');
    var emailreg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
    var Numeros = /[0-9]/;
    var letras = /[a-zA-Z]/;
    var cedula = null;
    var estado = 0;
    var empresa = null;
    var vivir = null;
    var motivo = null;
    var opt = 0;
    var persona = {};
    var t = 0;
    var ce_asociado;
    var tel_asoc;
    //var user = "YeinerM";
    var diasr = 0;
    var inmuebleS = null;
    var clienteS = null;
    var Emailcl = null;
    var cod_pro = 0;
    var id_sp;
    var date = new Date();
    var dia = date.getDate();
    var año = date.getFullYear();
    var mes = date.getMonth() + 1;
    if (dia < 10) { dia = '0' + dia }
    if (mes < 10) { mes = '0' + mes }
    fecha = año + "/" + mes + "/" + dia;
    var confirmar ={};
    var cl ="";
    var inmu ="";
    var separacion = {};


    var WsCrearCliente = funcionUrlGlobal("/Servicios/WClientes.asmx/InsertCliente");//Inserta Cliente en bd
    var WsLisala = funcionUrlGlobal("/Servicios/WSala_Ventas.asmx/ListSala");//Listado de salas de ventas
    var WAsociado = funcionUrlGlobal("/Servicios/WClientes.asmx/_InsertClienteAs");
    var WsLisClientes = funcionUrlGlobal("/Servicios/WClientes.asmx/LisClientes");///Listado de clientes
    var WsGetClientes = funcionUrlGlobal("/Servicios/WClientes.asmx/GetClientesT");//trae Inoformacion de cliente
    var WsInmueblesFox = funcionUrlGlobal("/ServiciosFox/WFox.asmx/InmueblesFox");//LIstado de Inmuebles Multifox por Proyectos
    var WSCrearTarea = funcionUrlGlobal("/Servicios/WTareas.asmx/InsertTarea");//Crear Treas
    var WsLisImnuE = funcionUrlGlobal("/ServiciosFox/WInmuebles.asmx/InmuEstados");//Listar Tareas
    var WAcActualizado = funcionUrlGlobal("/Servicios/WAcInmuebles.asmx/UltimaVezAct"); //Ultima vez actualizado
 

    var _addHandlers = function () {

        $('#BtnAdsocioado').click(function () {
            $("#asociado").modal('show'); $("#infoCLiente").hide();
            empresa = $("#Text9").val();
            ce_asociado = $('#Text1').val();
            tel_asoc = $('#Text7').val();
           
        })

        $('#Btnsocio').click(function () {
            $("#asociado").modal('show');
            tel_asoc = $('#TxtTel1').val();
            ce_asociado = $('#TxtIdentidad').val();
        })

        $(document).on('click', '#ButnCerrarG', function () { $('#Cancelargestion').modal("show"); $('#ButnCerrarG').hide(); })

        $(document).on('change', '#gestcancelar', function () {
            var tipo = $('#gestcancelar').val();
           
            switch (tipo) {
                case "N":
                    //gestion terminada porq el cliente decice comprar
                    listc._Cancelargestion(_BitacorasDTO(), cedula, "N");
                    Tr.Etareas(_DtoTareas(), _BitacorasDTO());
                    setTimeout(function () { Tr.LisTareas(cedula, 0); }, 1000);
                    setTimeout(function () { Cli.ClienteHistorial(cedula); }, 2000);
                    setTimeout(function () { Tr.ListadoTareasUser(); }, 2000);
                    setTimeout(function () { listc.ListClientes(proyec, WsLisClientes) }, 1000);
                    break;
                case "C":
                    listc._Cancelargestion(_BitacorasDTO(), cedula, "C");
                    Tr.Etareas(_DtoTareas(), _BitacorasDTO());
                    setTimeout(function () { Tr.LisTareas(cedula, 0); }, 1000);
                    setTimeout(function () { Cli.ClienteHistorial(cedula); }, 2000);
                    setTimeout(function () { Tr.ListadoTareasUser(); }, 2000);
                    setTimeout(function () { listc.ListClientes(proyec, WsLisClientes) }, 1000);
                    break;
            }
        });


        
       
        $(document).on('click', '#BtnActInmuebles', function () {

            inm.UdateInmuebles(proyec);
            setTimeout(function () {
                act.ListActInmueble(proyec, WAcActualizado);
                inm.InmuenlesFox(proyec, WsInmueblesFox);
               // inm._Linmuebles(proyec);
                inm.LisInmuebles(proyec);
                
            }, 2000);
          
          
        })

        $(document).on('click', '#Btnactivos', function () { listc._Lgescancelar(proyec, "A"); })

        $(document).on('click', '#Btncompra', function () { listc._Lgescancelar(proyec, "C"); })

        $(document).on('click', '#Btnocompra', function () { listc._Lgescancelar(proyec, "N"); })

        $(document).on('click', '#BtnTodos', function () { listc.ListClientes(proyec, WsLisClientes); })

        $(document).on('click', '#BtnDisponibilidad', function () {
            var busqueda=$('#TxtIdentidad').val();
            Cli.ValidarCliente(busqueda);
        });

        $('#BtnGuardarC').click(function () {
            Cli.UpdateClientes(_DatosUpdate());
            setTimeout(function () { listc.ListClientes(proyec, WsLisClientes) }, 3000);
        });

        $(document).on('click', '#BtnEditarC', function () {
            
            $('#Text2').attr('readonly', false); $('#Text3').attr('readonly', false);
            $('#Text4').attr('readonly', false); $('#Text5').attr('readonly', false);
            $('#Text6').attr('readonly', false); $('#Text7').attr('readonly', false);
            $('#Text8').attr('readonly', false); $('#Text9').attr('readonly', false);
            $('#Text9').attr('readonly', false); $('#Text10').attr('readonly', false);
            $('#Text11').attr('readonly', false); $('#Text12').attr('readonly', false);
            $('#Text16').attr('readonly', false); $('#Text17').attr('readonly', false);
            $('#Text18').attr('readonly', false); $('#Txt15').attr('readonly', false);
        });

        $(document).on('click', '#Btnvencido', function (event) {
            Tr.EstadoTareas("V")
        });

        $(document).on('click', '#Btnatendida', function (event) {
            Tr.EstadoTareas("T")
        });

        $(document).on('click', '#Btnespera', function (event) {
            Tr.EstadoTareas("E")
        });

        $(document).on('click', '#Btnpospuesta', function (event) {
            Tr.EstadoTareas("P")
        });

        $(document).on('click', '.desistir', function () {
            var datos = $(this).attr("id");
            var result = datos.split("/")
            cl = result[0];
            inmu = result[1];
            var diasC = result[2];
            id_sp = result[3];
            separacion = { 'CLIENTE': cl, 'INMUEBLE': inmu };
            $('#Desistirseparacion').modal('show');
            $('#TxtclienteD').val(cl); $('#TxtclienteD').attr('readonly', true);
            $('#TxtInmueD').val(inmu); $('#TxtInmueD').attr('readonly', true);
            $('#Txtdias').val(diasC); $('#Txtdias').attr('readonly', true);
        });

        $(document).on('click', "#Btnconfitse", function () {
            separacion = { 'CLIENTE': cl, 'INMUEBLE': inmu, };
            inm.Confirmarseparacion(id_sp, separacion);
            setTimeout(function () { inm._Linmuebles(proyec); }, 2000)
            setTimeout(function () { inm.LisInmuebles(proyec); }, 2000)
            setTimeout(function () { listc.ListClientes(proyec, WsLisClientes); }, 2000)
        });

        $('#BtnLiberar').click(function () {
            inm.desistirinmueble(separacion);
            setTimeout(function () { inm._Linmuebles(proyec); }, 2000)
            setTimeout(function () { inm.LisInmuebles(proyec); }, 2000)
            setTimeout(function () { listc.ListClientes(proyec, WsLisClientes); }, 2000)
        });

        $(document).on('change', '#CombEmpresa', function () {
            var selec = $('#CombEmpresa').val();
            if (selec == "Otro")
            {
                $('#Empresar').modal('show');       
            }
            else
            {
                empresa = $('#CombEmpresa').val();
               
            }
        });

        $('#Btnempresa').click(function () {
            var e = $('#Empresa').val();
            var tel = $('#teltrabajo').val();
            $('#Empresar').modal('hide');
            emp.Addempresa(_DtoEmpresa(e, tel));
            setTimeout(function () { emp.GetEmpresa() }, 1000);
            });

        $('#BtncDetalle').click(function () { $('#detallesepracion').hide(); $('#SepararInmueble').hide(); $('#Informacion').hide();})

        $('#BtnsepararC').click(function () {$('#SepararInmueble').hide(); })

        $(document).on('click', '.ClienteS', function () {
            var datos = $(this).attr("id");
            var resul = datos.split("/");
            clienteS = resul[0];
            Emailcl = resul[1];
            if ($('#Inmueble').val().length < 1) {
                toastr.error('CRM Mayales - Notificacion' +
                   '</br></br>No se a seleccionado un inmueble aun para realizar la separacion');
            }
            else
            {
                $('#Cliente').val(clienteS)
                $('#EmailCliente').val(Emailcl)
            }
        });

        $('#Btnseparar').click(function () {
            var fechafin = $('#Fechafinal').val();

            if (fechafin < fecha)
            {
                toastr.error('CRM Mayales - Notificación'+
                '<br/>La fecha de final no puede ser menor a la actual.');
            }
            else
            {
                var result = fechafin.split("/");
                var year = result[0];
                var month = result[1];
                var day = result[2];
                diasr = day - dia;

                if (diasr > 5)
                {
                    toastr.error('CRM Mayales - Notificacion' +
                    '<br/>los dias para la separacion no pueden ser mayores a 5.!');
                }
                else
                {
                    if ($('#Cliente').val().length < 1)
                    {
                        toastr.error('CRM Mayales - Notificacion' +
                    '<br/>Debe selccionar un cliente para continuar con el proceso de separación');
                    }
                    else
                    {
                        inm.SepararInmueble(_Dtoseparacion(inmuebleS, clienteS, fechafin), Emailcl,proyec);
                        setTimeout(function () { listc.ListClientes(proyec, WsLisClientes) }, 4000);
                        setTimeout(function () { inm._Linmuebles(proyec); }, 4000)
                        $('#loadig').show();

                    }
                        
                }
            }
                
            
        });

        $(document).on('click', '.Detallett', function () {
            var dato = $(this).attr("id");
            var result = dato.split("/");
            t = result[0];
            cedula = result[1];;
            $('#infoTareas').modal('show');
            $('#BtnEditar').show();
            $('#BtnTerminada').show();
            $('#BtnPost').hide();
            Tr.InfoTareas(t);
            $('#Txtdetalle').attr('readonly', true);
            $('#fechainfo').attr('readonly', true);
            Tr.lisbitacoras(t);
        });

        $(document).on('click', '.separar', function () {
            $('#SepararInmueble').show();
            $('#Clientes').hide();
            $('#Tareas').hide();
            $('#Bitatareas').hide();
            $('#detallesepracion').hide();
            inmuebleS = $(this).attr("id")
            $('#Inmueble').val(inmuebleS)

        });

        $(document).on('click', '.detalleSepa', function () {
            $('#Clientes').hide();
            $('#Tareas').hide();
            $('#Bitatareas').hide();
            $('#SepararInmueble').hide();
            var inmureferencia = $(this).attr("id")
            $('#detallesepracion').show();
            inm._Detallesepracion(inmureferencia);
        });


        $(document).on('click', '.inmsdetalles', function () {
            $('#Clientes').hide();
            $('#Tareas').hide();
            $('#Bitatareas').hide();
            $('#hisorialcliente').hide();
            $('#SepararInmueble').hide();
            var inmureferencia = $(this).attr("id")
            $('#detallesepracion').show();
            inm._Detallesepracion(inmureferencia);
        });

        $(document).on('click', '.infDetalle', function () {
            var datos = $(this).attr("id");
            var resul = datos.split("/");
            cedula = resul[0];
            $('#infoCLiente').modal('show');
            Cli.getClientes(cedula);
        
        });
        
        $('#BtnTerminada').click(function () {
            t = $('#TxtIdTarea').val();
            if ($('#TxtMotivo').val() === "")
            {
                toastr.error('CRM Mayales - Notificacion' +
                '</br> El campo descripcion se encuentra vacio');
            }
            else
            {
                Tr.Etareas(_DtoTareas(), _BitacorasDTO());
                setTimeout(function () { Tr.LisTareas(cedula, 0); }, 1000);
                setTimeout(function () { Cli.ClienteHistorial(cedula); }, 2000);
                setTimeout(function () { Tr.ListadoTareasUser(); }, 2000);
             }
        })

        $('#BtnEditar').click(function () {
            $('#BtnEditar').hide();
            $('#BtnPost').show();
            $('#BtnTerminada').hide();
            $('#Txtdetalle').attr('readonly', false);
            $('#fechainfo').attr('readonly', false);
        })

        $('#BtnPost').click(function () {
           if ($('#Txtdetalle').val().length < 1)
           {
               toastr.error('CRM Mayales - Notificacion' +
                   '</br> El campo descricpion de Tarea se encuentra vacio');
            }
            else
            {
                if ($('#fechainfo').val().length < 1)
                {
                   toastr.error('CRM Mayales - Notificacion' +
                   '</br> El campo Fecha de Tarera se encuentra vacio');
                }
                else
                {
                    if ($('#TxtMotivo').val().length < 1)
                    {
                        toastr.error('CRM Mayales - Notificacion' +
                        '</br> El campo descripcion se encuentra vacio');
                    }
                    else
                    {
                        var fechaEs = $('#fechainfo').val()
                        if (fechaEs < fecha)
                        {
                            dia = null;
                            mes = null;
                            toastr.error('CRM Mayales - Notificacion' +
                           '</br> La fecha selcccionada no puede ser menor a la del dia actual');
                        }
                        else
                        {   dia = null;
                            mes = null;

                            Tr.PosponerTarea(_PosTareas(), _BitacorasDTO());
                            setTimeout(function () { Tr.lisbitacoras(t); }, 1000)
                            setTimeout(function () { Tr.LisTareas(cedula, 0); }, 1000); 
                            setTimeout(function () { Cli.ClienteHistorial(cedula); }, 2000);
                            setTimeout(function () { Tr.ListadoTareasUser(); }, 2000);
                        }

                    }
                }
             }


        });

        $(document).on('click', '#BtnSCliente', function (event) {
            $('#Clientes').show();
            $('#BtnRegCliente').show();
            $('#SepararInmueble').hide();
            $('#detallesepracion').hide();
            admComercial.CrearCliente();
            $('#ComProyect').val(proyec);
            $('#hisorialcliente').hide();
        });

        $(document).on('click', '.BtnTarea', function (event) {
            var datos = $(this).attr("id");
            var resul = datos.split("/");
            $('#detallesepracion').hide();
            cedula = resul[0];
            $('#TxtCedula').attr('readonly', true);
            $('#TxtClientes').val(cedula);
            $('#TxtIdentificacion').val(cedula);
            $('#BtnRegCliente').hide();
            $('#Clientes').hide();
            $('#TxtDescripcion').val("");
            listc.GetClientes(cedula, WsGetClientes);
            Tr.LisTareas(cedula,0);
            admComercial.HabilitarP();
            $('#Btntareas').show();
            $('#Tareas').hide();
            $('#hisorialcliente').show();
            Cli.ClienteHistorial(cedula);
        });
      
        $(document).on('click', '#Btntareas', function () {
            $('#Tareas').show();
            $('#Btntareas').hide();
        });

        $(document).on('click', '.BtnHistorial', function (event) {
            $('#PanelRegCliente').hide();
            $('#PanelRegTarea').hide();
            $('#InfTareas').show();
            document.getElementById('Principal').className = "col-lg-7";
        });

        $(document).on('click', '#BtnCreaTarea', function (event) {
            if ($('#TxtDescripcion').val().length < 1)
            {
                toastr.error('CRM Mayales - Notificacion' +
                '<br/> no ha digitado nada en el campo descripcion de tarea');
            }
            else
            {
                if ($('#TxtFecha').val().length < 1) {
                    toastr.error('CRM Mayales- Notificacion' +
                        '<br/> No a seleccionado ninguna Fecha para realizar la tarea');
                }
                else
                {      
                    var fechata = $('#TxtFecha').val()
                    if (fechata < fecha) {
                        toastr.error('CRM  Mayales Notificacion' +
                            '</br> la fecha seleccionada para la tarea no puede ser menor que la actual');
                    }
                    else
                    {
                        Tr.CrearTarea(_DtoTareas(), WSCrearTarea);
                        setTimeout(function () { Tr.LisTareas(cedula, 0); }, 2000);
                        setTimeout(function () { Cli.ClienteHistorial(cedula); }, 2000);
                        setTimeout(function () { Tr.ListadoTareasUser(); }, 2000);

                      }
                   }
               }
        });

        $(document).on('click', '.BitaCerrar', function (event) {
            $('#Bitatareas').hide();
        });

        $(document).on('click', '.ptCerrar', function (event) {
            $('#Tareas').hide();
        });

        $(document).on('click', '.Pcreartarea', function (event) {
            $('#Informacion').hide();
        });

        $(document).on('click', '.PClientes', function (event) {
            $('#Clientes').hide();
        });

        $(document).on('click', '.infotarea', function (event) {
             t = $(this).attr("id");
            $('#infoTareas').modal('show');
            $('#BtnEditar').show();
            $('#BtnTerminada').show();
            $('#BtnPost').hide();
            Tr.InfoTareas(t);
            $('#Txtdetalle').attr('readonly', true);
            $('#fechainfo').attr('readonly', true);
            Tr.lisbitacoras(t);
        });

        $('#BtnRegCliente').click(function (event) {
            var validar = admComercial.Validar();
            if (validar == true)
            {
                Cli.CrearCliente(_Datos(), WsCrearCliente);
                if ($('#teltrabajo').val() != "") { emp.AddPhone($('#teltrabajo').val(), _Datos().Empresa); }
                setTimeout(function () { listc.ListClientes(proyec, WsLisClientes) }, 1000);
                var cedula2 = $('#TxtIdentidad').val()
                $('#TxtClientes').val(cedula2);
                _LimpiarFormulario();
            }
        });

        $('#BtnCancelar').click(function (event) {

        });

        $('#BtnNuevo').click(function (event) { _Nuevo(); })

        $(document).on('click', '#checkDisponible', function () {
            estado = $('#checkDisponible').val();
        })
        
        $(document).on('click', '#checkOcupados', function () {
            estado = $('#checkOcupados').val();
            $('#alertbloques').hide();
        })

        $(document).on('click', '#checkSeparados', function () {
            estado = $('#checkSeparados').val();
            $('#alertbloques').hide();
        })


        $(document).on('change', '#Mazanasb', function () {
            cod_pro = $('#Mazanasb').val()
            switch (estado) {
                case "0":
                    inm.EstadosInmuebles(WsLisImnuE, 0, cod_pro);
                    break
                case "1":
                    inm.EstadosInmuebles(WsLisImnuE, 1, cod_pro);
                    break
                case "2":
                    inm.EstadosInmuebles(WsLisImnuE,2, cod_pro);
                    break
            }

        })

        $(document).on('click', '#BtnUpdate', function () {
            Cli.UpdateClientes(_Datos());
            setTimeout(function () { listc.ListClientes(proyec, WsLisClientes) }, 4000);
        });

        $(document).on('click', '#check1', function () {
            $("#check2").attr('checked', false);
            vivir = $('#check1').val()
        });

        $(document).on('click', '#check2', function () {
            $("#check1").attr('checked', false);
            vivir = $('#check2').val()
        });

        $(document).on('click', '#check3', function () {
           $("#check4").attr('checked', false);
            motivo = $('#check3').val()
        });

        $(document).on('click', '#check4', function () {
             $("#check3").attr('checked', false);
             motivo = $('#check4').val()
        });

        $(document).on('click', '#Btnsocio', function () {
            
            $('#Btncrearasc').show();
        });

        $(document).on('click', '#Btnregis_asc', function () {
            Cli.CrearClienteAs(_DatosAsociado(), WAsociado);

            if ($('#teltrabajo').val() != "") { emp.AddPhone($('#teltrabajo').val(), _Datos().Empresa); }
            setTimeout(function () { listc.ListClientes(proyec, WsLisClientes) }, 1000);
        })

    };

    var _Inic = function () {
        $('#Btnsocio').hide()
       /// $('#tntnsocio').hide();
        $('#Btncrearasc').hide();
        inm._Linmuebles(proyec); 
        Tr.ListadoTareasUser();
        $('#BtnPost').hide();
        $('#Clientes').hide();
        $('#Tareas').hide();
        $('#PanelRegCliente').hide();
        $('#InfTareas').hide();
        $('#PanelRegTarea').hide();
        $('#InfTareas').hide();
        $('#Informacion').hide();
        sala.ListaSala(1,WsLisala);
        listc.ListClientes(proyec,WsLisClientes);
        listc.Proyecto(proyec);
        listc.listaProyectocrm();
        listc.ListbProyec(proyec);
        listc.LisEmpresas();
        inm.LisInmuebles(proyec);
        listc.InfoEntero();
        $('#loadig').hide();
        $('#alertbloques').hide();
        $('#alert').hide();
        $('#mensaje').hide();
        $('#Bitatareas').hide();
        $('#BtnUpdate').hide();
        $('#infoCLiente').hide();
        $('#SepararInmueble').hide();
        $('#detallesepracion').hide();
        $('#Error').hide();
        $('#Btntareas').hide();
        $('#hisorialcliente').hide();
    }

    var _Nuevo = function () {
        $('#FormTareas')[0].reset();
        $('#TxtDireccion').attr('disabled', true);
        $('#TxtDescripcion').attr('disabled', true);
        $('#TxtFecha').attr('disabled', true);
        $('#BtnBuscar').show();
        $('#BtnCancelar').hide();
        $('#BtnNuevo').attr('disabled', true);
    }

    var _Datos = function () {
        persona = {};
        persona.Cedula = $('#TxtIdentidad').val();
        persona.Nombres = $('#TxtNombres').val().toUpperCase();
        persona.P_apellido = $('#TxtP_apellido').val().toUpperCase();
        persona.S_Apellido = $('#TxtS_apellido').val().toUpperCase();
        persona.Telefono2 = $('#TxtTel1').val();
        persona.Direccion = $('#TxtDireccion').val().toUpperCase();
        persona.Barrio = $('#TxtBarrio').val().toUpperCase();
        persona.Estado_civil = $('#Combestadoc').val().toUpperCase();
        persona.proyec_interes = $('#ComProyect').val().toUpperCase();
        persona.Email = $('#TxtEmail').val().toUpperCase();
        persona.Empresa = empresa;
        persona.Sueldo = $('#CombSueldo').val().toUpperCase();
        persona.presu_compra = $('#Combpresuesto').val().toUpperCase();
        persona.Inmu_Interes = $('#ComboBuscando').val().toUpperCase();
        persona.Interes_vi = vivir;
        persona.Mot_Compra = motivo;
        persona.sala_venta = $('#CombSala').val().toUpperCase();
        persona.Asesor = "";
        persona.Informacion = $('#ComboEntero').val();
        return persona;
    }


    var _LimpiarFormulario = function () {
       
        $('#TxtIdentidad').val('');
        $('#TxtNombres').val('');
        $('#TxtP_apellido').val('');
        $('#TxtS_apellido').val('');
        $('#TxtTel1').val('');
        $('#TxtDireccion').val('');
        $('#TxtBarrio').val('');
        $('#Combestadoc').val('');
        $('#ComProyect').val('');
        $('#TxtEmail').val('');
        $('#CombSueldo').val('');
        $('#Combpresuesto').val('');
        $('#ComboBuscando').val('');
        $('#CombSala').val('');
        $('#ComboEntero').val('');
        
    }

    var _DatosAsociado = function () {
      asociado = {};
      asociado.Cedula = ce_asociado;
      asociado.Nombres = $('#nomasocioado').val().toUpperCase();
      asociado.P_apellido = $('#Txtapeasociado').val().toUpperCase();
      asociado.S_Apellido = $('#Txtapeasociado2').val().toUpperCase();
      asociado.Telefono2 = tel_asoc;
      asociado.Direccion = $('#TxtDireccion').val().toUpperCase();
      asociado.Barrio = $('#TxtBarrio').val();
      asociado.Estado_civil = $('#Combestadoc').val();
      asociado.proyec_interes = proyec;
      asociado.Empresa = empresa;
      asociado.Sueldo = $('#CombSueldo').val();
      asociado.presu_compra = $('#Combpresuesto').val();
      asociado.Inmu_Interes = $('#ComboBuscando').val();
      asociado.Interes_vi = vivir;
      asociado.Mot_Compra = motivo;
      asociado.sala_venta = $('#CombSala').val();
      asociado.Asesor = "";
      asociado.Informacion = $('#ComboEntero').val();
      return asociado;
    }

    var _DatosUpdate = function () {
        actualizar = {};
        actualizar.Cedula = $('#Text1').val();
        actualizar.Nombres = $('#Text2').val(); 
        actualizar.P_apellido = $('#Text3').val(); 
        actualizar.S_Apellido = $('#Text4').val();
        actualizar.Estado_civil = $('#Text5').val();
        actualizar.Direccion = $('#Text6').val();
        actualizar.Telefono2 = $('#Text7').val();
        actualizar.Email = $('#Text8').val();
        actualizar.Empresa = $('#Text9').val();
        actualizar.Sueldo = $('#Text10').val();
        actualizar.presu_compra = $('#Text11').val();
        actualizar.Inmu_Interes = $('#Text12').val();
        actualizar.proyec_interes = $('#Txt15').val();
        actualizar.Barrio = $('#Text16').val();
        actualizar.interes_vi = $('#Text17').val();
        actualizar.mot_compra = $('#Text18').val();
        return actualizar;
    }

    var _DtoEmpresa = function (empresas, telefono) {
        var empresa = {};
        empresa.NOMBRE_EMP = empresas;
        empresa.TEL_EMP = telefono;
        return empresa;
    };

    var _DtoTareas = function () {
        var tarea = {};
        tarea.cliente = cedula;
        tarea.trabajador = '';
        tarea.concepto = $('#TxtDescripcion').val();
        tarea.fechainicio = $('#TxtFecha').val();
        tarea.estado = 'E';
        return tarea;
    }

    var _BitacorasDTO = function () {

        var bitacora = {};
        bitacora.tarea = t;
        bitacora.motivo = $('#TxtMotivo').val();
        bitacora.FECHAMOD = $('#fechainfo').val();
        return bitacora;
    }

    var _PosTareas = function () {
        var postarea = {};
        postarea.ID_TAREA = t;
        postarea.CONCEPTO = $('#Txtdetalle').val();
        postarea.CLIENTE = cedula;
        postarea.ESTADO = "P";
        return postarea;
    }

    var _Dtoseparacion = function (inmueble, cliente, fechafin) {
        var separacion = {};
        separacion.inmueble = inmueble;
        separacion.cliente = cliente;
        separacion.fechaseparacion = fecha;
        separacion.fechafinal = fechafin;
        return separacion;
    }
    
    var _initialize = function () {

        act.ListActInmueble(proyec, WAcActualizado);
        inm.InmuenlesFox(proyec, WsInmueblesFox);
        

        var mapOptions = {
            zoom: 10
        };
        map = new google.maps.Map(document.getElementById('gmap'),
            mapOptions);

        // Try HTML5 geolocation
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function (position) {
                var pos = new google.maps.LatLng(position.coords.latitude,
                                                 position.coords.longitude);

                var marker = new google.maps.Marker({
                    position: pos,
                    map: map,
                    animation: google.maps.Animation.DROP,
                    title: 'Proyecto Constructora los mayales.',
                    icon: "../Images/marker_1.png"
                });

                map.setCenter(pos);
            }, function () {
                handleNoGeolocation(true);
            });
        } else {
            // Browser doesn't support Geolocation
            handleNoGeolocation(true);
        }
    }

    function handleNoGeolocation(errorFlag) {
        if (errorFlag) {
            var content = 'Error: The Geolocation service failed.';
        } else {
            var content = 'Error: Your browser doesn\'t support geolocation.';
        }

        var options = {
            map: map,
            position: new google.maps.LatLng(60, 105),
            content: content
        };

        var infowindow = new google.maps.InfoWindow(options);
        map.setCenter(options.position);
    }

    return {
        init: function () {
            _Inic();
            _addHandlers();
            _initialize();;
        },

        Cancelar: function () {
            //$('#FormTareas')[0].reset();
            $('#BtnCancelar').hide();
            $('#BtnBuscar').show();
            $('#TxtCliente').attr('disabled', true);
            $('#TxtDireccion').attr('disabled', true);
            $('#TxtProyecto').attr('disabled', true);
            $('#TxtInmueble').attr('disabled', true);
            $('#TxtDescripcion').attr('disabled', true);
            $('#TxtFecha').attr('disabled', true);
            $('#BtnSave').attr('disabled', true);
            $('#BtnNuevo').attr('disabled', true);
            $('#BtnNuevo').show();
        },

        HabilitarP: function () {
            //$('#Tareas').show();
            $('#Bitatareas').show();
        },

        Validar: function () {
            if ($('#TxtIdentidad').val().length < 1 || !Numeros.test($('#TxtIdentidad').val())) {
                toastr.error('CRM Mayales - Notificacion' +
                    '</br></br>1 - No a digitado nada en el campo documento de identidad' +
                    '</br>2 - Verifique que no haya ingresado letras en el campo');
                //$("#TxtIdentidad").css("background-color", "yellow");
                $('#TxtIdentidad').css("border", "1px solid #3366FF");///,'border-left:',' 4px solid #3366FF'
                return false;
            } else {
                if ($('#TxtNombres').val().length < 1 || !letras.test($('#TxtNombres').val())) {
                    toastr.error('CRM Mayales - Notificacion' +
                            '</br></br>1 - No ha digitado nada en el campo nombres' +
                            '<br/>2 - Verifique que no haya ingresado valores numericos en el campo');
                    $('#TxtNombres').css("border", "1px solid #3366FF");
                    return false;
                } else {
                    if ($('#TxtP_apellido').val().length < 1 || !letras.test($('#TxtP_apellido').val())) {
                        toastr.error('CRM Mayales - Notificacion' +
                            '</br></br>1 - No ha digitado nada en el campo primer apellido' +
                            '<br/>2 - Verifique que no haya ingresado valores numericos en el campo');
                        $('#TxtNombres').css("border", "1px solid #3366FF");
                        return false;
                    } else {
                            if ($('#TxtTel1').val().length < 1 || !Numeros.test($('#TxtTel1').val())) {
                                toastr.error('CRM Mayales-Notificacion' +
                                 '</br></br> 1 - No ha digitado nada en el campo Telefono celular' +
                                 '<br/>2 - Verifique que no haya ingresado letras en el campo telefono celular');
                                $('#TxtTel1').css("border", "1px solid #3366FF");
                                return false;
                            } else {
                                if (!letras.test($('#TxtDireccion').val())) {
                                    toastr.error('CRM Mayales-Notificacion' +
                                     '<br/>1 - Verifique que no haya ingresado valores numericos en el campo direccion'+
                                     '<br/>2 - Verifique no se encuentre vacio en campo direccion');
                                    $('#TxtDireccion').css("border", "1px solid #3366FF");
                                    return false;
                                } else {
                                    if ($('#ComProyect').val().length < 1) {
                                        toastr.error('CRM Mayales - Notificacion' +
                                             '<br/>Debe Seleccionar un proyecto de interes');
                                    } else {
                                        if ($('#TxtEmail').val().length < 1 || !emailreg.test($('#TxtEmail').val())) {
                                            toastr.error('CRM Mayales - Notificacion' +
                                             '<br/>1 - Verifique que no haya ingresado un email valido'+
                                             '<br/>2 - Verifique que no se encuentre vacio el campo direccion');
                                            $('#TxtEmail').css("border", "1px solid #3366FF");
                                            return false;

                                        } else {
                                            if ($('#CombSala').val() == "") {
                                                toastr.error('CRM Mayales - Notificacion' +
                                                 '</br></br> Debe Escoger una Sala de Ventas para continuar con el Proceso');
                                                $('#CombSala').css("border", "1px solid #3366FF");
                                                return false;
                                            } else {
                                                return true;
                                            }
                                        }
                                    }
                                }
                            }
                        }
                    }
                }

        },

        CrearCliente: function () {
            $('#Informacion').hide();
            //$('#Tareas').show();
            $('#Bitatareas').hide();
            $('#TxtClientes').val("");
            $('#TxtDescripcion').val("");
            $('#TxtFecha').val("");
        },
    }

}());

$(document).ready(function () {
    $('#TxtFecha').datepicker({
        format: 'yyyy/mm/dd',
    });
    $('#fechainfo').datepicker({
        format: 'yyyy/mm/dd',
    });


    $('#Fechasepa').datepicker({
        format: 'yyyy/mm/dd',
    });

    $('#Fechafinal').datepicker({
        format: 'yyyy/mm/dd',
    });
    toastr.options = {
        "debug": false,
        "newestOnTop": false,
        "positionClass": "toast-top-center",
        "closeButton": true,
        "debug": false,
        "toastClass": "animated fadeInDown",
        "preventDuplicates": false,
        "onclick": true,
        "showDuration": "2500",
        "hideDuration": "2500",
        "timeOut": "2500",
    };
    admComercial.init();

});