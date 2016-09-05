var _negocio = new BLLnegocio();
var utl = new BLLUtilidades();
var emailreg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
var Numeros = /[0-9]/;
var letras = /[a-zA-Z]/;
var _admnegocio = (function () {
    var cedula = "";
    var bandera = 0;
    var ced = utl.getUrl('cedula');
    var inmu = utl.getUrl('inmueble');
    var separaciones = utl.getUrl('separacion');
    var cactual = "";
    var dataSet = [];
    var acuerdoP = [];
    var acuerdoPG = [];
    var tipoint;
    var separacion;
    var inmueble;
    var fechaEscr;
    var _addHandlers = function () {


        $(document).on('click', '#BtnSiguiente', function () {
            //  $('.nav-tabs a:last').tab('show');
            $('#myTab li:eq(1) a').tab('show');
        });
        $(document).on('click', '#BtnSiguiente2g', function () {
            //  $('.nav-tabs a:last').tab('show');
            $('#myTab li:eq(2) a').tab('show');
        });
       

        

        $("#checkmanzada").click(function () {
            tipoint = "Manzana";
            $("#checktorre").attr('checked', false);
            $("#checkcasa").attr('checked', false);
            $("#chekcapartamento").attr('checked', false);
        });

        $("#checktorre").click(function () {
            tipoint = "Torre";
            $("#checkmanzada").attr('checked', false);
            $("#checkcasa").attr('checked', false);
            $("#chekcapartamento").attr('checked', false);
        });

        $("#checkcasa").click(function () {
            tipoint = "Casa";
            $("#checkmanzada").attr('checked', false);
            $("#checktorre").attr('checked', false);
            $("#chekcapartamento").attr('checked', false);
        });

        $("#chekcapartamento").click(function () {
            tipoint = "Apartamento";
            $("#checkmanzada").attr('checked', false);
            $("#checktorre").attr('checked', false);
            $("#checkcasa").attr('checked', false);
        });


        $(document).on('click', '#BtnCrearH', function () {
            console.log(Dtohoja())
            console.log(acuerdoP)
            console.log(acuerdoPG)
            Validar();

        });

   

        $(document).on('click', '#BtnDisponibilidad', function () {
            switch (bandera) {
                case 0:
                    document.getElementById("Lvalor").innerHTML = "";
                    $("#TxtIdentidad").val(ced)
                    cedula = ced;
                    _negocio._Getcliente(cedula);
                    cactual = cedula;
                    break;
                case 1:
                    document.getElementById("Lvalor").innerHTML = "";
                    cedula = $("#TxtIdentidad").val();
                    utl._DtoAsociado(cedula);
                    cactual = localStorage.getItem("CedulaAct");
                    _negocio._Getcliente(cactual);
                    break;

            }

        });
        
        $(document).on('click', '#BtnAsociadoc', function () {
            cedula = $('#TxtIdentidad').val();
            var val = localStorage.getItem("CedulaAct");
            localStorage["CedulaAct"] = $('#TxtIdentidad').val();
            if (val == cedula) {
                utl._GetclienteAsociado(cedula);
                $("#asociadoModal").modal("show");
            }
        });

    
        /*$("#Btnfecha").click(function () {
            _negocio.Modificarfecha(item, $("#nuevafc").val(), valor)
        });

        $(document).on('click', '.BtFecha', function () {
            var result = $(this).attr("id");
            var dato = result.split("-");
            $("#fechAc").val(dato[0]);
            item = dato[1];
            valor = dato[2];
            $("#FechasPagos").modal("show")
        });
        */
     
        $("#Textseparacion").change(function () {
            var separacion = $('#Textseparacion').val();
            var sep = +separacion.replace(/[^\d\.-]/g, '');
            $('#Textseparacion').val((utl.FormatNumero(sep)))
        });

        $("#TextIngresos").change(function () {
            var ingresos = $('#TextIngresos').val();
            var ingres = +ingresos.replace(/[^\d\.-]/g, '');
            $('#TextIngresos').val((utl.FormatNumero(ingres)))
        });

        $("#Textsubsidio").change(function () {
            var Subsidio = $('#Textsubsidio').val();
            var Subs = +Subsidio.replace(/[^\d\.-]/g, '');
            $('#Textsubsidio').val((utl.FormatNumero(Subs)))
        });
        

        $("#Textinicial").change(function () {
            var c_inicial = $('#Textinicial').val()
            _negocio._RecalcularCredito();
            $('#Textinicial').val(utl.FormatNumero(c_inicial))

            //var c_inicial = $('#Textinicial').val()
            //_negocio._RecalcularCredito();
            //$('#Textinicial').val(utl.FormatNumero(c_inicial))

            //dataSet = [];
            //var date = new Date();
            //var dia1 = date.getDate();
            //var año1 = date.getFullYear();
            //var mes1 = date.getMonth() + 1;
            //if (mes1 < 10) { mes1 = '0' + mes1 }
            //var fecha2 = año1 + "/" + mes1 + "/" + dia1;
            //ms = Date.parse($('#TextFecinicial2').val());
            //var fecha = new Date(ms);
            //var dia = fecha.getDate();
            //var año = fecha.getFullYear();
            //var mes = fecha.getMonth() + 1;
            //ms2 = Date.parse($('#TextFecinicial').val());
            //var fechas = new Date(ms2);
            //var dias = fechas.getDate();
            //var años = fechas.getFullYear();
            //var mess = fechas.getMonth() + 1;
            //if (mess < 10) { mess = '0' + mess };
            //if (mess > 12) { años = parseInt(años) + 1; mess = '0' + 1; }
            //if (mess == 02 && dias > 28) {
            //    dia2 = 28;
            //    fechas = años + "/" + mess + "/" + dia2;
            //}
            //else {
            //    if ((mess == 04 || mess == 06 || mess == 09 || mess == 11) && dias == 31) {
            //        dia2 = 30
            //        fechas = años + "/" + mess + "/" + dia2;
            //    } else {
            //        fechas = años + "/" + mess + "/" + dias;
            //    }
            //}
            //var cuotas = $('#Textcuota').val();
            //var cred = $('#Textcredito').val();
            //var cre = +cred.replace(/[^\d\.-]/g, '');
            //cred = cre;
            //var inicial = $('#Textinicial').val();
            //var ini = +inicial.replace(/[^\d\.-]/g, '');
            //var separacion = $('#Textseparacion').val();
            //var sep = +separacion.replace(/[^\d\.-]/g, '');
            //var valorC = $("#Lvalor").val();
            //var valor = +valorC.replace(/[^\d\.-]/g, '');
            //var val_casa = valor;
            //var amorizar = 0.0;
            //separacion = sep;
            //inicial = ini;
            //var credito = parseFloat(inicial - separacion);
            //$("#valcredito").val(credito);
            //var nomc;
            //amorizar = parseFloat(credito) / cuotas;
            //for (var i = 0; i <= cuotas; i++) {
            //    if (mes < 10) { mes = '0' + mes };
            //    if (mes > 12) { año = parseInt(año) + 1; mes = '0' + 1; }
            //    if (mes == 02 && dia > 28) {
            //        dia2 = 28;
            //        fecha = año + "/" + mes + "/" + dia2;
            //    }
            //    else {
            //        if ((mes == 04 || mes == 06 || mes == 09 || mes == 11) && dia == 31) {
            //            dia2 = 30
            //            fecha = año + "/" + mes + "/" + dia2;
            //        } else {
            //            fecha = año + "/" + mes + "/" + dia;
            //        }
            //    }
            //    if (i === 0) {
            //        nomc = "Separación";
            //        dataSet.push({ 'CUOTA': nomc, 'FECHA_PAGO': fecha2, 'VALOR_CUOTA': parseFloat(separacion) });
            //        mes = parseInt(mes);
            //    } else {
            //        nomc = "Cuota No." + i;
            //        dataSet.push({ 'CUOTA': nomc, 'FECHA_PAGO': fecha, 'VALOR_CUOTA': amorizar.toFixed(0) });
            //        mes = parseInt(mes) + 1;
            //    }



            //}
            //nomc = "Subrogación";
            //if (mes < 10) { mes = '0' + mes };
            //if (mes > 12) { año = parseInt(año) + 1; mes = '0' + 1; }
            //if (mes == 02 && dia > 28) {
            //    dia2 = 28;
            //    fecha = año + "/" + mes + "/" + dia2;
            //    fechaf = año + "-" + mes + "-" + dia2;
            //}
            //else {
            //    if ((mes == 04 || mes == 06 || mes == 09 || mes == 11) && dia == 31) {
            //        dia2 = 30
            //        fecha = año + "/" + mes + "/" + dia2;
            //        fechaf = año + "-" + mes + "-" + dia2;
            //    } else {
            //        fecha = año + "/" + mes + "/" + dia;
            //        fechaf = año + "-" + mes + "-" + dia;
            //    }
            //}

            //dataSet.push({ 'CUOTA': nomc, 'FECHA_PAGO': fecha, 'VALOR_CUOTA': parseFloat(cred) });
            //$("#Textsubrogracion").val(fechaf)
            ////_FechaEscitura(fecha)
            //tabla(dataSet);
            //$('#dataTable').jqxGrid('refresh');
            //$('#dataTable').jqxGrid('refreshdata');
            funcalculos();
        });

        $('#Textcuota').change(function () {
            var c_inicial = $('#Textinicial').val()
            _negocio._RecalcularCredito();
            $('#Textinicial').val(utl.FormatNumero(c_inicial))

            //var c_inicial = $('#Textinicial').val()
            //_negocio._RecalcularCredito();
            //$('#Textinicial').val(utl.FormatNumero(c_inicial))

            //dataSet = [];
            //var date = new Date();
            //var dia1 = date.getDate();
            //var año1 = date.getFullYear();
            //var mes1 = date.getMonth() + 1;
            //if (mes1 < 10) { mes1 = '0' + mes1 }
            //var fecha2 = año1 + "/" + mes1 + "/" + dia1;
            //ms = Date.parse($('#TextFecinicial2').val());
            //var fecha = new Date(ms);
            //var dia = fecha.getDate();
            //var año = fecha.getFullYear();
            //var mes = fecha.getMonth() + 1;
            //ms2 = Date.parse($('#TextFecinicial').val());
            //var fechas = new Date(ms2);
            //var dias = fechas.getDate();
            //var años = fechas.getFullYear();
            //var mess = fechas.getMonth() + 1;
            //if (mess < 10) { mess = '0' + mess };
            //if (mess > 12) { años = parseInt(años) + 1; mess = '0' + 1; }
            //if (mess == 02 && dias > 28) {
            //    dia2 = 28;
            //    fechas = años + "/" + mess + "/" + dia2;
            //}
            //else {
            //    if ((mess == 04 || mess == 06 || mess == 09 || mess == 11) && dias == 31) {
            //        dia2 = 30
            //        fechas = años + "/" + mess + "/" + dia2;
            //    } else {
            //        fechas = años + "/" + mess + "/" + dias;
            //    }
            //}
            //var cuotas = $('#Textcuota').val();
            //var cred = $('#Textcredito').val();
            //var cre = +cred.replace(/[^\d\.-]/g, '');
            //cred = cre;
            
            //var adiciones = $('#Textadiciones').val();
            //var adi = +adiciones.replace(/[^\d\.-]/g, '');
            //$('#Textadiciones').val(utl.FormatNumero(adi))
            //var garaje = $('#TextGaraje').val();
            //var gara = +garaje.replace(/[^\d\.-]/g, '');
            //$('#TextGaraje').val(utl.FormatNumero(gara))
            //var descuen = $('#TextDescuento').val();
            //var descu = +descuen.replace(/[^\d\.-]/g, '');
            //$('#TextDescuento').val(utl.FormatNumero(descu))
            //var inicial = $('#Textinicial').val();
            //var ini = +inicial.replace(/[^\d\.-]/g, '');
            //var separacion = $('#Textseparacion').val();
            //var sep = +separacion.replace(/[^\d\.-]/g, '');
            //var valorC = $("#Lvalor2").val();
            //var valor = +valorC.replace(/[^\d\.-]/g, '');
            //var val_casa = valor;
            
            //var valorfinal = (valor + gara + adi) - descu;
            //$('#TextValorventa').val(utl.FormatNumero(valorfinal))
            //$("#Lvalor").val(valorfinal);
            //_negocio._RecalcularCredito();
            //var amorizar = 0.0;
            //separacion = sep;
            //inicial = ini;
            //adiciones = adi;
            //garaje = gara;
            //descuen = descu;
            //var credito = parseFloat(inicial - separacion);
           
            //$("#valcredito").val(credito);
            //var nomc;
            //amorizar = parseFloat(credito) / cuotas;
            //for (var i = 0; i <= cuotas; i++) {
            //    if (mes < 10) { mes = '0' + mes };
            //    if (mes > 12) { año = parseInt(año) + 1; mes = '0' + 1; }
            //    if ((mes == 02) && dia > 28) {
            //        dia2 = 28;
            //        fecha = año + "/" + mes + "/" + dia2;
            //    }
            //    else {
            //        if ((mes == 04 || mes == 06 || mes == 09 || mes == 11) && dia == 31) {
            //            dia2 = 30
            //            fecha = año + "/" + mes + "/" + dia2;
            //        } else {
            //            fecha = año + "/" + mes + "/" + dia;
            //        }
            //    }
            //    if (i === 0) {
            //        nomc = "Separación";
            //        dataSet.push({ 'CUOTA': nomc, 'FECHA_PAGO': fechas, 'VALOR_CUOTA': parseFloat(separacion) });
            //        mes = parseInt(mes);
            //    } else {
            //        nomc = "Cuota No." + i;
            //        dataSet.push({ 'CUOTA': nomc, 'FECHA_PAGO': fecha, 'VALOR_CUOTA': amorizar.toFixed(0) });
            //        mes = parseInt(mes) + 1;
            //    }



            //}
            //nomc = "Subrogación";
            //if (mes < 10) { mes = '0' + mes };
            //if (mes > 12) { año = parseInt(año) + 1; mes = '0' + 1; }
            //if ((mes == 02) && dia > 28) {
            //    dia2 = 28;
            //    fecha = año + "/" + mes + "/" + dia2;
            //    fechaf = año + "-" + mes + "-" + dia2;
            //}
            //else {
            //    if ((mes == 04 || mes == 06 || mes == 09 || mes == 11) && dia == 31) {
            //        dia2 = 30
            //        fecha = año + "/" + mes + "/" + dia2;
            //        fechaf = año + "-" + mes + "-" + dia2;
            //    } else {
            //        fecha = año + "/" + mes + "/" + dia;
            //        fechaf = año + "-" + mes + "-" + dia;
            //    }
            //}
            //dataSet.push({ 'CUOTA': nomc, 'FECHA_PAGO': fecha, 'VALOR_CUOTA': parseFloat(cred) });
            //$("#Textsubrogracion").val(fechaf)
            ////_FechaEscitura(fecha)
            //tabla(dataSet);
            //$('#dataTable').jqxGrid('refresh');
            //$('#dataTable').jqxGrid('refreshdata');
            funcalculos();
        });
        $('#TextFecinicial').change(function () {
            //dataSet = [];
            //var date = new Date();
            //var dia1 = date.getDate();
            //var año1 = date.getFullYear();
            //var mes1 = date.getMonth() + 1;
            //if (mes1 < 10) { mes1 = '0' + mes1 }
            //var fecha2 = año1 + "/" + mes1 + "/" + dia1;
            //ms = Date.parse($('#TextFecinicial2').val());
            //var fecha = new Date(ms);
            //var dia = fecha.getDate();
            //var año = fecha.getFullYear();
            //var mes = fecha.getMonth() + 1;
            //ms2 = Date.parse($('#TextFecinicial').val());
            //var fechas = new Date(ms2);
            //var dias = fechas.getDate();
            //var años = fechas.getFullYear();
            //var mess = fechas.getMonth() + 1;
            //if (mess < 10) { mess = '0' + mess };
            //if (mess > 12) { años = parseInt(años) + 1; mess = '0' + 1; }
            //if (mess == 02 && dias > 28) {
            //    dia2 = 28;
            //    fechas = años + "/" + mess + "/" + dia2;
            //}
            //else {
            //    if ((mess == 04 || mess == 06 || mess == 09 || mess == 11) && dias == 31) {
            //        dia2 = 30
            //        fechas = años + "/" + mess + "/" + dia2;
            //    } else {
            //        fechas = años + "/" + mess + "/" + dias;
            //    }
            //}
            //var cuotas = $('#Textcuota').val();
            //var cred = $('#Textcredito').val();
            //var cre = +cred.replace(/[^\d\.-]/g, '');
            //cred = cre;
            //var inicial = $('#Textinicial').val();
            //var ini = +inicial.replace(/[^\d\.-]/g, '');
            //var separacion = $('#Textseparacion').val();
            //var sep = +separacion.replace(/[^\d\.-]/g, '');
            //var valorC = $("#Lvalor").val();
            //var valor = +valorC.replace(/[^\d\.-]/g, '');
            //var val_casa = valor;
            //var amorizar = 0.0;
            //separacion = sep;
            //inicial = ini;
            //var credito = parseFloat(inicial - separacion);
            //$("#valcredito").val(credito);
            //var nomc;
            //amorizar = parseFloat(credito) / cuotas;

            //for (var i = 0; i <= cuotas; i++) {
            //    if (mes < 10) { mes = '0' + mes };
            //    if (mes > 12) { año = parseInt(año) + 1; mes = '0' + 1; }
            //    if (mes == 02 && dia > 28) {
            //        dia2 = 28;
            //        fecha = año + "/" + mes + "/" + dia2;
            //    }
            //    else {
            //        if (mes == 04 || mes == 06 || mes == 09 || mes == 11 && dia == 31) {
            //            dia2 = 30
            //            fecha = año + "/" + mes + "/" + dia2;
            //        } else {
            //            fecha = año + "/" + mes + "/" + dia;
            //        }
            //    }
            //    if (i === 0) {
            //        nomc = "Separación";
            //        dataSet.push({ 'CUOTA': nomc, 'FECHA_PAGO': fechas, 'VALOR_CUOTA': parseFloat(separacion) });
            //        mes = parseInt(mes);
            //    } else {
            //        nomc = "Cuota No." + i;
            //        dataSet.push({ 'CUOTA': nomc, 'FECHA_PAGO': fecha, 'VALOR_CUOTA': amorizar.toFixed(0) });
            //        mes = parseInt(mes) + 1;
            //    }



            //}
            //nomc = "Subrogación";
            //if (mes < 10) { mes = '0' + mes };
            //if (mes > 12) { año = parseInt(año) + 1; mes = '0' + 1; }
            //if (mes == 02 && dia > 28) {
            //    dia2 = 28;
            //    fecha = año + "/" + mes + "/" + dia2;
            //    fechaf = año + "-" + mes + "-" + dia2;
            //}
            //else {
            //    if (mes == 04 || mes == 06 || mes == 09 || mes == 11 && dia == 31) {
            //        dia2 = 30
            //        fecha = año + "/" + mes + "/" + dia2;
            //        fechaf = año + "-" + mes + "-" + dia2;
            //    } else {
            //        fecha = año + "/" + mes + "/" + dia;
            //        fechaf = año + "-" + mes + "-" + dia;
            //    }
            //}
            //dataSet.push({ 'CUOTA': nomc, 'FECHA_PAGO': fecha, 'VALOR_CUOTA': parseFloat(cred) });
            //$("#Textsubrogracion").val(fechaf)
            ////_FechaEscitura(fecha)
            //tabla(dataSet);
            //$('#dataTable').jqxGrid('refresh');
            //$('#dataTable').jqxGrid('refreshdata');
            funcalculos();
        });
        $('#Textseparacion').change(function () {
            //dataSet = [];
            //var date = new Date();
            //var dia1 = date.getDate();
            //var año1 = date.getFullYear();
            //var mes1 = date.getMonth();
            //if (mes1 < 10) { mes1 = '0' + mes1 }
            //var fecha2 = año1 + "/" + mes1 + "/" + dia1;
            //ms = Date.parse($('#TextFecinicial2').val());
            //var fecha = new Date(ms);
            //var dia = fecha.getDate();
            //var año = fecha.getFullYear();
            //var mes = fecha.getMonth() + 1;
            //ms2 = Date.parse($('#TextFecinicial').val());
            //var fechas = new Date(ms2);
            //var dias = fechas.getDate();
            //var años = fechas.getFullYear();
            //var mess = fechas.getMonth() + 1;
            //if (mess < 10) { mess = '0' + mess };
            //if (mess > 12) { años = parseInt(años) + 1; mess = '0' + 1; }
            //if (mess == 02 && dias > 28) {
            //    dia2 = 28;
            //    fechas = años + "/" + mess + "/" + dia2;
            //}
            //else {
            //    if ((mess == 04 || mess == 06 || mess == 09 || mess == 11) && dias == 31) {
            //        dia2 = 30
            //        fechas = años + "/" + mess + "/" + dia2;
            //    } else {
            //        fechas = años + "/" + mess + "/" + dias;
            //    }
            //}
            //var cuotas = $('#Textcuota').val();
            //var cred = $('#Textcredito').val();
            //var cre = +cred.replace(/[^\d\.-]/g, '');
            //cred = cre;
            //var inicial = $('#Textinicial').val();
            //var ini = +inicial.replace(/[^\d\.-]/g, '');
            //var separacion = $('#Textseparacion').val();
            //var sep = +separacion.replace(/[^\d\.-]/g, '');
            //var valorC = $("#Lvalor").val();
            //var valor = +valorC.replace(/[^\d\.-]/g, '');
            //var val_casa = valor;
            //var amorizar = 0.0;
            //separacion = sep;
            //inicial = ini;
            //var credito = parseFloat(inicial - separacion);
            //$("#valcredito").val(credito);
            //var nomc;
            //amorizar = parseFloat(credito) / cuotas;
            //for (var i = 0; i <= cuotas; i++) {
            //    if (mes < 10) { mes = '0' + mes };
            //    if (mes > 12) { año = parseInt(año) + 1; mes = '0' + 1; }
            //    if (mes == 02 && dia > 28) {
            //        dia2 = 28;
            //        fecha = año + "/" + mes + "/" + dia2;
            //    }
            //    else {
            //        if (mes == 04 || mes == 06 || mes == 09 || mes == 11 && dia == 31) {
            //            dia2 = 30
            //            fecha = año + "/" + mes + "/" + dia2;
            //        } else {
            //            fecha = año + "/" + mes + "/" + dia;
            //        }
            //    }
            //    if (i === 0) {
            //        nomc = "Separación";
            //        dataSet.push({ 'CUOTA': nomc, 'FECHA_PAGO': fechas, 'VALOR_CUOTA': parseFloat(separacion) });
            //        mes = parseInt(mes);
            //    } else {
            //        nomc = "Cuota No." + i;
            //        dataSet.push({ 'CUOTA': nomc, 'FECHA_PAGO': fecha, 'VALOR_CUOTA': amorizar.toFixed(0) });
            //        mes = parseInt(mes) + 1;
            //    }


            //}
            //nomc = "Subrogación";
            //if (mes < 10) { mes = '0' + mes };
            //if (mes > 12) { año = parseInt(año) + 1; mes = '0' + 1; }
            //if (mes == 02 && dia > 28) {
            //    dia2 = 28;
            //    fecha = año + "/" + mes + "/" + dia2;
            //    fechaf = año + "-" + mes + "-" + dia2;
            //}
            //else {
            //    if (mes == 04 || mes == 06 || mes == 09 || mes == 11 && dia == 31) {
            //        dia2 = 30
            //        fecha = año + "/" + mes + "/" + dia2;
            //        fechaf = año + "-" + mes + "-" + dia2;
            //    } else {
            //        fecha = año + "/" + mes + "/" + dia;
            //        fechaf = año + "-" + mes + "-" + dia;
            //    }
            //}
            //dataSet.push({ 'CUOTA': nomc, 'FECHA_PAGO': fecha, 'VALOR_CUOTA': parseFloat(cred) });
            //$("#Textsubrogracion").val(fechaf)
            ////_FechaEscitura(fecha)
            //tabla(dataSet);
            //$('#dataTable').jqxGrid('refresh');
            //$('#dataTable').jqxGrid('refreshdata');
            funcalculos();
        });
        $('#Textsubrogracion').change(function () {
            var c_inicial = $('#Textinicial').val()
            _negocio._RecalcularCredito();
            $('#Textinicial').val(utl.FormatNumero(c_inicial))

            dataSet = [];
            var date = new Date();
            var dia1 = date.getDate();
            var año1 = date.getFullYear();
            var mes1 = date.getMonth() + 1;
            if (mes1 < 10) { mes1 = '0' + mes1 }
            var fecha2 = año1 + "/" + mes1 + "/" + dia1;
            ms = Date.parse($('#TextFecinicial2').val());
            var fecha = new Date(ms);
            var dia = fecha.getDate();
            var año = fecha.getFullYear();
            var mes = fecha.getMonth() + 1;
            ms2 = Date.parse($('#TextFecinicial').val());
            var fechas = new Date(ms2);
            var dias = fechas.getDate();
            var años = fechas.getFullYear();
            var mess = fechas.getMonth() + 1;
            if (mess < 10) { mess = '0' + mess };
            if (mess > 12) { años = parseInt(años) + 1; mess = '0' + 1; }
            if (mess == 02 && dias > 28) {
                dia2 = 28;
                fechas = años + "/" + mess + "/" + dia2;
            }
            else {
                if ((mess == 04 || mess == 06 || mess == 09 || mess == 11) && dias == 31) {
                    dia2 = 30
                    fechas = años + "/" + mess + "/" + dia2;
                } else {
                    fechas = años + "/" + mess + "/" + dias;
                }
            }
            var cuotas = $('#Textcuota').val();
            var cred = $('#Textcredito').val();
            var cre = +cred.replace(/[^\d\.-]/g, '');
            cred = cre;

            var adiciones = $('#Textadiciones').val();
            var adi = +adiciones.replace(/[^\d\.-]/g, '');
            $('#Textadiciones').val(utl.FormatNumero(adi))
            var garaje = $('#TextGaraje').val();
            var gara = +garaje.replace(/[^\d\.-]/g, '');
            $('#TextGaraje').val(utl.FormatNumero(gara))
            var descuen = $('#TextDescuento').val();
            var descu = +descuen.replace(/[^\d\.-]/g, '');
            $('#TextDescuento').val(utl.FormatNumero(descu))
            var inicial = $('#Textinicial').val();
            var ini = +inicial.replace(/[^\d\.-]/g, '');
            var separacion = $('#Textseparacion').val();
            var sep = +separacion.replace(/[^\d\.-]/g, '');
            var valorC = $("#Lvalor2").val();
            var valor = +valorC.replace(/[^\d\.-]/g, '');
            var val_casa = valor;

            var valorfinal = (valor + gara + adi) - descu;
            $('#TextValorventa').val(utl.FormatNumero(valorfinal))
            $("#Lvalor").val(valorfinal);
            _negocio._RecalcularCredito();
            var amorizar = 0.0;
            separacion = sep;
            inicial = ini;
            adiciones = adi;
            garaje = gara;
            descuen = descu;
            var credito = parseFloat(inicial - separacion);

            $("#valcredito").val(credito);
            var nomc;
            amorizar = parseFloat(credito) / cuotas;
            for (var i = 0; i <= cuotas; i++) {
                if (mes < 10) { mes = '0' + mes };
                if (mes > 12) { año = parseInt(año) + 1; mes = '0' + 1; }
                if ((mes == 02) && dia > 28) {
                    dia2 = 28;
                    fecha = año + "/" + mes + "/" + dia2;
                }
                else {
                    if ((mes == 04 || mes == 06 || mes == 09 || mes == 11) && dia == 31) {
                        dia2 = 30
                        fecha = año + "/" + mes + "/" + dia2;
                    } else {
                        fecha = año + "/" + mes + "/" + dia;
                    }
                }
                if (i === 0) {
                    nomc = "Separación";
                    dataSet.push({ 'CUOTA': nomc, 'FECHA_PAGO': fechas, 'VALOR_CUOTA': parseFloat(separacion) });
                    mes = parseInt(mes);
                } else {
                    nomc = "Cuota No." + i;
                    dataSet.push({ 'CUOTA': nomc, 'FECHA_PAGO': fecha, 'VALOR_CUOTA': amorizar.toFixed(0) });
                    mes = parseInt(mes) + 1;
                }



            }
            nomc = "Subrogación";
            ms = Date.parse($('#Textsubrogracion').val());
            var fecha = new Date(ms);
            var dia = fecha.getDate();
            var año = fecha.getFullYear();
            var mes = fecha.getMonth() + 1;
            if (mes < 10) { mes = '0' + mes }
            if (mes == 02 && dia > 28) {
                dia2 = 28;
                fecha = año + "/" + mes + "/" + dia2;
                fechaf = año + "-" + mes + "-" + dia2;
            }
            else {
                if (mes == 04 || mes == 06 || mes == 09 || mes == 11 && dia == 31) {
                    dia2 = 30
                    fecha = año + "/" + mes + "/" + dia2;
                    fechaf = año + "-" + mes + "-" + dia2;
                } else {
                    fecha = año + "/" + mes + "/" + dia;
                    fechaf = año + "-" + mes + "-" + dia;
                }
            }
            dataSet.push({ 'CUOTA': nomc, 'FECHA_PAGO': fecha, 'VALOR_CUOTA': parseFloat(cred) });

            //_FechaEscitura(fecha)
            tabla(dataSet);
            $('#dataTable').jqxGrid('refresh');
            $('#dataTable').jqxGrid('refreshdata');

        });
        $("#Textcuotag").change(function () {
            var c_inicial = $('#Textcreditog').val()
            _negocio._RecalcularCredito();
            $('#Textcreditog').val(utl.FormatNumero(c_inicial))

            dataSet = [];
            var date = new Date();
            var dia1 = date.getDate();
            var año1 = date.getFullYear();
            var mes1 = date.getMonth() + 1;
            if (mes1 < 10) { mes1 = '0' + mes1 }
            var fecha2 = año1 + "/" + mes1 + "/" + dia1;
            ms = Date.parse($('#Textinicialg').val());
            var fecha = new Date(ms);
            var dia = fecha.getDate();
            var año = fecha.getFullYear();
            var mes = fecha.getMonth() + 1;
            ms2 = Date.parse($('#Textinicialg').val());
            var fechas = new Date(ms2);
            var dias = fechas.getDate();
            var años = fechas.getFullYear();
            var mess = fechas.getMonth() + 1;
            if (mess < 10) { mess = '0' + mess };
            if (mess > 12) { años = parseInt(años) + 1; mess = '0' + 1; }
            if (mess == 02 && dias > 28) {
                dia2 = 28;
                fechas = años + "/" + mess + "/" + dia2;
            }
            else {
                if ((mess == 04 || mess == 06 || mess == 09 || mess == 11) && dias == 31) {
                    dia2 = 30
                    fechas = años + "/" + mess + "/" + dia2;
                } else {
                    fechas = años + "/" + mess + "/" + dias;
                }
            }
            var cuotas = $('#Textcuotag').val();
            //var cred = $('#Textcreditog').val();
            //var cre = +cred.replace(/[^\d\.-]/g, '');
            //cred = cre;
            var inicial = $('#Textcreditog').val();
            var ini = +inicial.replace(/[^\d\.-]/g, '');
            //var separacion = $('#Textseparacion').val();
            //var sep = +separacion.replace(/[^\d\.-]/g, '');
            //var valorC = $("#Textcreditog").val();
            //var valor = +valorC.replace(/[^\d\.-]/g, '');
            //var val_casa = valor;
            var amorizar = 0.0;
            //separacion = sep;
            //inicial = ini;
            var credito = parseFloat(ini);
            //$("#Textcreditog").val(credito);
            var nomc;
            amorizar = parseFloat(credito) / cuotas;
            for (var i = 0; i < cuotas; i++) {
                if (mes < 10) { mes = '0' + mes };
                if (mes > 12) { año = parseInt(año) + 1; mes = '0' + 1; }
                if (mes == 02 && dia > 28) {
                    dia2 = 28;
                    fecha = año + "/" + mes + "/" + dia2;
                }
                else {
                    if ((mes == 04 || mes == 06 || mes == 09 || mes == 11) && dia == 31) {
                        dia2 = 30
                        fecha = año + "/" + mes + "/" + dia2;
                    } else {
                        fecha = año + "/" + mes + "/" + dia;
                    }
                }
                nomc = "Cuota No." + (i + 1);
                dataSet.push({ 'CUOTA': nomc, 'FECHA_PAGO': fecha, 'VALOR_CUOTA': amorizar.toFixed(0) });
                mes = parseInt(mes) + 1;

            }
            //_FechaEscitura(fecha)
            tabla2(dataSet);
            $('#dataTable2').jqxGrid('refresh');
            $('#dataTable2').jqxGrid('refreshdata');

        });
        $("#TextGaraje").change(function () { funcalculos(); });
        $("#Textadiciones").change(function () { funcalculos(); });
        $("#TextDescuento").change(function () { funcalculos(); });
        var funcalculos = function () {
           
            dataSet = [];
            var date = new Date();
            var dia1 = date.getDate();
            var año1 = date.getFullYear();
            var mes1 = date.getMonth() + 1;
            if (mes1 < 10) { mes1 = '0' + mes1 }
            var fecha2 = año1 + "/" + mes1 + "/" + dia1;
            ms = Date.parse($('#TextFecinicial2').val());
            var fecha = new Date(ms);
            var dia = fecha.getDate();
            var año = fecha.getFullYear();
            var mes = fecha.getMonth() + 1;
            ms2 = Date.parse($('#TextFecinicial').val());
            var fechas = new Date(ms2);
            var dias = fechas.getDate();
            var años = fechas.getFullYear();
            var mess = fechas.getMonth() + 1;
            if (mess < 10) { mess = '0' + mess };
            if (mess > 12) { años = parseInt(años) + 1; mess = '0' + 1; }
            if (mess == 02 && dias > 28) {
                dia2 = 28;
                fechas = años + "/" + mess + "/" + dia2;
            }
            else {
                if ((mess == 04 || mess == 06 || mess == 09 || mess == 11) && dias == 31) {
                    dia2 = 30
                    fechas = años + "/" + mess + "/" + dia2;
                } else {
                    fechas = años + "/" + mess + "/" + dias;
                }
            }
            var cuotas = $('#Textcuota').val();
            var cred = $('#Textcredito').val();
            var cre = +cred.replace(/[^\d\.-]/g, '');
            cred = cre;

            var adiciones = $('#Textadiciones').val();
            var adi = +adiciones.replace(/[^\d\.-]/g, '');
            $('#Textadiciones').val(utl.FormatNumero(adi))
            var garaje = $('#TextGaraje').val();
            var gara = +garaje.replace(/[^\d\.-]/g, '');
            $('#TextGaraje').val(utl.FormatNumero(gara))
            var descuen = $('#TextDescuento').val();
            var descu = +descuen.replace(/[^\d\.-]/g, '');
            $('#TextDescuento').val(utl.FormatNumero(descu))
            var inicial = $('#Textinicial').val();
            var ini = +inicial.replace(/[^\d\.-]/g, '');
            var separacion = $('#Textseparacion').val();
            var sep = +separacion.replace(/[^\d\.-]/g, '');
            var valorC = $("#Lvalor2").val();
            var valor = +valorC.replace(/[^\d\.-]/g, '');
            var val_casa = valor;

            var valorfinal = (valor + gara + adi) - descu;
            $('#TextValorventa').val(utl.FormatNumero(valorfinal))
            $("#Lvalor").val(valorfinal);
            var amorizar = 0.0;
            separacion = sep;
            inicial = ini;
            adiciones = adi;
            garaje = gara;
            descuen = descu;
            var credito = parseFloat(inicial - separacion);

            $("#valcredito").val(credito);
            var nomc;
            amorizar = parseFloat(credito) / cuotas;
            for (var i = 0; i <= cuotas; i++) {
                if (mes < 10) { mes = '0' + mes };
                if (mes > 12) { año = parseInt(año) + 1; mes = '0' + 1; }
                if ((mes == 02) && dia > 28) {
                    dia2 = 28;
                    fecha = año + "/" + mes + "/" + dia2;
                }
                else {
                    if ((mes == 04 || mes == 06 || mes == 09 || mes == 11) && dia == 31) {
                        dia2 = 30
                        fecha = año + "/" + mes + "/" + dia2;
                    } else {
                        fecha = año + "/" + mes + "/" + dia;
                    }
                }
                if (i === 0) {
                    nomc = "Separación";
                    dataSet.push({ 'CUOTA': nomc, 'FECHA_PAGO': fechas, 'VALOR_CUOTA': parseFloat(separacion) });
                    mes = parseInt(mes);
                } else {
                    nomc = "Cuota No." + i;
                    dataSet.push({ 'CUOTA': nomc, 'FECHA_PAGO': fecha, 'VALOR_CUOTA': amorizar.toFixed(0) });
                    mes = parseInt(mes) + 1;
                }



            }
            nomc = "Subrogación";
            if (mes < 10) { mes = '0' + mes };
            if (mes > 12) { año = parseInt(año) + 1; mes = '0' + 1; }
            if ((mes == 02) && dia > 28) {
                dia2 = 28;
                fecha = año + "/" + mes + "/" + dia2;
                fechaf = año + "-" + mes + "-" + dia2;
            }
            else {
                if ((mes == 04 || mes == 06 || mes == 09 || mes == 11) && dia == 31) {
                    dia2 = 30
                    fecha = año + "/" + mes + "/" + dia2;
                    fechaf = año + "-" + mes + "-" + dia2;
                } else {
                    fecha = año + "/" + mes + "/" + dia;
                    fechaf = año + "-" + mes + "-" + dia;
                }
            }
            dataSet.push({ 'CUOTA': nomc, 'FECHA_PAGO': fecha, 'VALOR_CUOTA': parseFloat(cred) });
            $("#Textsubrogracion").val(fechaf)
            //_FechaEscitura(fecha)
            tabla(dataSet);
            $('#dataTable').jqxGrid('refresh');
            $('#dataTable').jqxGrid('refreshdata');
        }

        $(document).on('click', '.Btimprimir', function () {
           // var idhoja = $(this).attr("id");
           // window.open("Hoja_Negocio2.html?idhoja=" + idhoja + '&proyec=' + proyec, 'Graph', 'height=900px,width=650px;resizable=false');

        });

    }

    var tabla = function (setdata) {

        var source =
                 {
                     localData: setdata,
                     datatype: "array",
                     destroy: true,
                     dataFields:
                      [
                          { name: 'CUOTA', type: 'string' },
                          { name: 'FECHA_PAGO', type: 'string' },
                          { name: 'VALOR_CUOTA', type: 'int' }
                      ]
                 };

        var dataAdapter = new $.jqx.dataAdapter(source);


        // initialize jqxDataTable
        $("#dataTable").jqxGrid(
         {
             width: "100%",
             source: dataAdapter,
             pageable: true,
             editable: true,
             //   autoheight: true,
             //  columnsresize: true,
             //   autoRowHeight: true,
             columns: [
               {
                   text: 'CUOTA',
                   columntype: 'CUOTA',
                   datafield: 'CUOTA',
                   editable: false,
               },
               {

                   text: 'FECHA PAGO',
                   datafield: 'FECHA_PAGO',
                   columntype: 'string',
                   columntype: 'datetimeinput',
                   cellsformat: 'd',
                   editable: true,

               },

              {
                  text: 'VALOR CUOTA',
                  editable: true,
                  // columntype: 'decimal',
                  datafield: 'VALOR_CUOTA',
                  cellsFormat: 'c2',
                  editable: true,

              }
             ]
         });
        $(".jqx-disableselect").removeClass("jqx-disableselect");

        console.log(dataAdapter)
        acuerdoP = dataAdapter.cachedrecords;
        console.log(acuerdoP)
        ///setdata = null;
    };
    var tabla2 = function (setdata) {

        var source =
                 {
                     localData: setdata,
                     datatype: "array",
                     destroy: true,
                     dataFields:
                      [
                          { name: 'CUOTA', type: 'string' },
                          { name: 'FECHA_PAGO', type: 'string' },
                          { name: 'VALOR_CUOTA', type: 'int' }
                      ]
                 };

        var dataAdapter = new $.jqx.dataAdapter(source);


        // initialize jqxDataTable
        $("#dataTable2").jqxGrid(
        {
            width: "100%",
            source: dataAdapter,
            pageable: true,
            editable: true,
            //   autoheight: true,
            //  columnsresize: true,
            //   autoRowHeight: true,
            columns: [
              {
                  text: 'CUOTA',
                  columntype: 'CUOTA',
                  datafield: 'CUOTA',
                  editable: false,
              },
              {

                  text: 'FECHA PAGO',
                  datafield: 'FECHA_PAGO',
                  columntype: 'string',
                  columntype: 'datetimeinput',
                  cellsformat: 'd',
                  editable : true,

              },

             {
                 text: 'VALOR CUOTA',
                 editable: true,
                 // columntype: 'decimal',
                 datafield: 'VALOR_CUOTA',
                 cellsFormat: 'c2',
                 editable: true,

             }
            ]
        });
        $(".jqx-disableselect").removeClass("jqx-disableselect");

        console.log(dataAdapter)
        acuerdoPG = dataAdapter.cachedrecords;
        console.log(acuerdoPG)
        ///setdata = null;
    };

    var _FechaEscitura = function (fechaesc) {
        var fechescr = fechaesc.split("/");
        var ent = fechescr[0];
        var mesent = parseInt(fechescr[1]) + 1;
        var diasent = fechescr[2];
        if (mesent > 12) { ent = parseInt(ent) + 1; mesentsb = 1; }
        if (diasent < 10) { diasent = '0' + diasent };
        if (mesent < 10) { mesent = '0' + mesent }
        var fechescri = ent + "/" + mesent + "/" + diasent;
        //$("#Textescritura").val(fechescri)
        _Fechaentrega(fechescri);
    }

    var _Fechaentrega = function (fechaentr) {
        var fechent = fechaentr.split("/");
        var ent = fechent[0];
        var mesent = parseInt(fechent[1]) + 1;
        var diasent = fechent[2];
        if (mesent > 12) { ent = parseInt(ent) + 1; mesentsb = 1; }
        if (mesent < 10) { mesent = '0' + mesent }
        var fechasent = ent + "/" + mesent + "/" + diasent;
        //$("#Textentrega").val(fechasent)
        _Fechasubrogracion(fechasent);
    }

    var _Fechasubrogracion = function (fechasub) {
        var fechasubr = fechasub.split("/");
        var entsb = fechasubr[0];
        var mesentsb = parseInt(fechasubr[1]) + 1;
        var diasentsb = fechasubr[2];
        if (mesentsb > 12) { entsb = parseInt(entsb) + 1; mesentsb = 1; }
        if (mesentsb < 10) { mesentsb = '0' + mesentsb }
        var fechasubro = entsb + "/" + mesentsb + "/" + diasentsb;
        //$("#Textsubrogracion").val(fechasubro)
    }

    var Dtohoja = function () {

        var negocio = {};

        /*Datos del inmueble*/
        negocio.CLASE_INMU = tipoint;
        negocio.AREA_PRIVADA = $("#TxtAreaprivada").val();
        negocio.AREA_CONSTRUIDA = $("#TxtAreaConstruida").val();
        negocio.PARQUEADERO = $("#TxtParqueadero").val();
        negocio.AREAS_COMUNES = $("#TxtAreasComunes").val();


        /*Datos del cliente*/
        negocio.PROPIETARIO = $("#TxtNombres").val();
        negocio.ESTADO_C = $("#Textcivil").val();
        negocio.CEDULA_P = cedula;
        negocio.LUGAR_EXPE = $("#TextLugarExp").val();
        negocio.EXPEDICION = $("#TextExpedicion").val();
        negocio.FECHA_NACI = $("#Textnacimiento").val();
        negocio.LUGAR = $("#Textlugar").val();
        negocio.N_HIJO = $("#TextNh").val(); 
        negocio.DOMICILIO = $("Textdomicilio").val();
        negocio.DIRECCION_R = $("#Textdireccion").val();
        negocio.TELEFONO_P = $("#Textphone").val();
        negocio.CORREO = $("#Textcorreo").val();


        /*Datos de la empresa*/
        negocio.EMPRESA = $("#TextEmp").val();
        negocio.CARGO = $("#Textcargo").val();
        negocio.PROFESION = $("#Textprofesion").val();
        negocio.DIRECCION_EMPR = $("#TextdireccionE").val();
        negocio.TELFONO_EMP = $("#TexttelC").val();
        var ingresos = $('#TextIngresos').val();
        var ingres = +ingresos.replace(/[^\d\.-]/g, '');
        negocio.INGRESO = ingres;
        negocio.ANTIGUEDAD = $("#Textantiguedad").val();


        /*Datos de el conyugue*/
        negocio.NOMBRE_CONY = $("#Textconyugue").val();
        negocio.TIPO_DOCUMENTO_CONY = $("#TxtTipoIdentificacionConyu").val();
        negocio.CEDULA_CUY = $("#TextidentificacionC").val();
        negocio.LUGAR_EXPEDICION = $("#TxtLugarExpConyu").val();
        negocio.FECHA_EXPEDICION_CUY = $("#TxtFechaExpConyu").val();
        negocio.TELE_CONY = $("#TexttelC").val();
        negocio.INTERES_COM = $("#TextInt").val();
        negocio.PROYECTO_INT = $("#TextPinteres").val();


        /*Costo del inmueble*/
        var ad = $("#Textadiciones").val();
        var adi = +ad.replace(/[^\d\.-]/g, '');
        negocio.ADICIONES_EXCLUSIONES = adi;
        var subsi = $("#Textsubsidio").val(); 
        var subsido = +subsi.replace(/[^\d\.-]/g, '');
        negocio.SUBSIDIO = subsido;
        var gara = $("#TextGaraje").val();
        var garej = +gara.replace(/[^\d\.-]/g, '');
        negocio.GARAJE = garej;
        var de = $("#TextDescuento").val();
        var desc = +de.replace(/[^\d\.-]/g, '');
        negocio.DESCUENTO = desc;
        var gas = $('#Textcreditog').val();
        var gasito = +gas.replace(/[^\d\.-]/g, '');
        negocio.VALOR_SERVICIOGAS = gasito;
        negocio.INTERESES_SUBROGACION = 
        
        
        
        negocio.AUT_MENSAJE = $("#CmbAutoElectro").val();
        negocio.AUT_CORREO = $("#CmbAuto").val();
        negocio.OBSERVACIONES = $("#TextObservaciones").val();
      //  negocio.

        var Vcasa = $('#Lvalor').val();
        var Vcasas = +Vcasa.replace(/[^\d\.-]/g, '');
        negocio.VALOR_CASA = Vcasas;
        var inicial = $('#Textinicial').val();
        var ini = +inicial.replace(/[^\d\.-]/g, '');
        negocio.INICIAL = ini;
        var credito = $('#Textcredito').val();
        var cre = +credito.replace(/[^\d\.-]/g, '');
        negocio.CREDITO = cre;
        negocio.BANCO = $("#ComBancos").val();
        negocio.NO_CREDITO = $("#Textcuota").val();
        negocio.FECHA_ES = $("#Textescritura").val();
        negocio.FECHA_ENT = $("#Textentrega").val();
        negocio.FECHA_SUBRO = $("#Textsubrogracion").val();
        negocio.ASESOR_INFO = $("#Textasesorinf").val();
        negocio.MEDIO_ENT = $("#TextmedioInf").val();
       
        
        negocio.USER_CARTERA = $("#CmbAsesorCart").val();
        negocio.ASOCIADO = cactual;
        //var separacion1 = $('#Textseparacion').val();
       // var sep1 = +separacion1.replace(/[^\d\.-]/g, '');

        negocio.SEPARACION = separaciones;
        return negocio;

    }

    var Validar = function () {

        if ($('#TxtNombres').val().length < 1 || !letras.test($('#TxtNombres').val())) {
            toastr.error('CRM Mayales - Notificacion' +
                '</br></br>1 - No a digitado nada en el campo nombre' +
                '</br>2 - Verifique que no haya ingresado letras en el campo');
            $('#TxtNombres').css("border", "1px solid #3366FF");///,'border-left:',' 4px solid #3366FF'
            return false;

        } else if ($('#TxtIdentidad').val().length < 1 || !Numeros.test($('#TxtIdentidad').val())) {
            toastr.error('CRM Mayales - Notificacion' +
                   '</br></br>1 - No a digitado nada en el campo identificacion' +
                   '</br>2 - Verifique que no haya ingresado letras en el campo');
            $('#TxtIdentidad').css("border", "1px solid #3366FF");///,'border-left:',' 4px solid #3366FF'
            return false;

        }
        else if ($('#TextExpedicion').val().length < 1) {
            toastr.error('CRM Mayales - Notificacion' +
                   '</br></br>1 - No a digitado nada en el campo fecha de expedición' +
                   '</br>2 - Verifique que no haya ingresado letras en el campo');
            $('#TextExpedicion').css("border", "1px solid #3366FF");///,'border-left:',' 4px solid #3366FF'
            return false;

        }

        else if ($('#Textcivil').val().length < 1 || !letras.test($('#Textcivil').val())) {
            toastr.error('CRM Mayales - Notificacion' +
                   '</br></br>1 - No a digitado nada en el campo estado civil' +
                   '</br>2 - Verifique que no haya ingresado letras en el campo');
            $('#Textcivil').css("border", "1px solid #3366FF");///,'border-left:',' 4px solid #3366FF'
            return false;

        }

        else if ($('#Textnacimiento').val().length < 1) {
            toastr.error('CRM Mayales - Notificacion' +
                   '</br></br>1 - No a digitado nada en el campo fecha de nacimiento' +
                   '</br>2 - Verifique que no haya ingresado letras en el campo');
            $('#Textnacimiento').css("border", "1px solid #3366FF");///,'border-left:',' 4px solid #3366FF'
            return false;

        }

        else if ($('#Textlugar').val().length < 1) {
            toastr.error('CRM Mayales - Notificacion' +
                   '</br></br>1 - No a digitado nada en el campo lugar' +
                   '</br>2 - Verifique que no haya ingresado letras en el campo');
            $('#Textlugar').css("border", "1px solid #3366FF");///,'border-left:',' 4px solid #3366FF'
            return false;

        }

        else if ($('#Textdireccion').val().length < 1) {
            toastr.error('CRM Mayales - Notificacion' +
                   '</br></br>1 - No a digitado nada en el campo dirección' +
                   '</br>2 - Verifique que no haya ingresado letras en el campo');
            $('#Textdireccion').css("border", "1px solid #3366FF");///,'border-left:',' 4px solid #3366FF'
            return false;

        }

        else if ($('#Textphone').val().length < 1 || !Numeros.test($('#Textphone').val())) {
            toastr.error('CRM Mayales - Notificacion' +
                   '</br></br>1 - No a digitado nada en el campo Telefóno' +
                   '</br>2 - Verifique que no haya ingresado letras en el campo');
            $('#Textphone').css("border", "1px solid #3366FF");///,'border-left:',' 4px solid #3366FF'
            return false;

        }

        else if ($('#TextEmp').val().length < 1 || !letras.test($('#TextEmp').val())) {
            toastr.error('CRM Mayales - Notificacion' +
                   '</br></br>1 - No a digitado nada en el campo Empresa' +
                   '</br>2 - Verifique que no haya ingresado letras en el campo');
            $('#TextEmp').css("border", "1px solid #3366FF");///,'border-left:',' 4px solid #3366FF'
            return false;

        }

        else if ($('#Textcargo').val().length < 1 || !letras.test($('#Textcargo').val())) {
            toastr.error('CRM Mayales - Notificacion' +
                   '</br></br>1 - No a digitado nada en el campo Cargo' +
                   '</br>2 - Verifique que no haya ingresado letras en el campo');
            $('#Textcargo').css("border", "1px solid #3366FF");///,'border-left:',' 4px solid #3366FF'
            return false;

        }

        else if ($('#Textprofesion').val().length < 1 || !letras.test($('#Textprofesion').val())) {
            toastr.error('CRM Mayales - Notificacion' +
                   '</br></br>1 - No a digitado nada en el campo Profesión' +
                   '</br>2 - Verifique que no haya ingresado letras en el campo');

            $('#Textprofesion').css("border", "1px solid #3366FF");///,'border-left:',' 4px solid #3366FF'
            return false;

        }

        else if ($('#TextdireccionE').val().length < 1 || !letras.test($('#TextdireccionE').val())) {
            toastr.error('CRM Mayales - Notificacion' +
                   '</br></br>1 - No a digitado nada en el campo Dirección' +
                   '</br>2 - Verifique que no haya ingresado letras en el campo');
            $('#TextdireccionE').css("border", "1px solid #3366FF");///,'border-left:',' 4px solid #3366FF'
            return false;

        }
        else if ($('#Textantiguedad').val().length < 1) {
            toastr.error('CRM Mayales - Notificacion' +
                   '</br></br>1 - No a digitado nada en el campo Antiguedad' +
                   '</br>2 - Verifique que no haya ingresado letras en el campo');
            $('#Textantiguedad').css("border", "1px solid #3366FF");///,'border-left:',' 4px solid #3366FF'
            return false;

        }

        else if ($('#Textcorreo').val().length < 1 || !emailreg.test($('#Textcorreo').val())) {
            toastr.error('CRM Mayales - Notificacion' +
                   '</br></br>1 - No a digitado nada en el campo Correo' +
                   '</br>2 - Verifique que no haya ingresado letras en el campo');
            $('#Textcorreo').css("border", "1px solid #3366FF");///,'border-left:',' 4px solid #3366FF'
            return false;

        }

            /* else if (!letras.test($('#Textconyugue').val())) {
                 toastr.error('CRM Mayales - Notificacion' +
                        '</br></br>1 - digite un nombre valido el campo Conyugue' +
                        '</br>2 - Verifique que no haya ingresado letras en el campo');
                 //$("#TxtIdentidad").css("background-color", "yellow");
                 $('#Textconyugue').css("border", "1px solid #3366FF");///,'border-left:',' 4px solid #3366FF'
                 return false;
     
             }
     
             else if (!Numeros.test($('#TextidentificacionC').val())) {
                 toastr.error('CRM Mayales - Notificacion' +
                        '</br></br>1 - No a digitado nada en el campo Identificación del conyugue' +
                        '</br>2 - Verifique que no haya ingresado letras en el campo');
                 //$("#TxtIdentidad").css("background-color", "yellow");
                 $('#TextidentificacionC').css("border", "1px solid #3366FF");///,'border-left:',' 4px solid #3366FF'
                 return false;
     
             }*
     
             else if (!Numeros.test($('#TexttelC').val())) {
                 toastr.error('CRM Mayales - Notificacion' +
                        '</br></br>1 - digite un numero valido en el campo celular' +
                        '</br>2 - Verifique que no haya ingresado letras en el campo');
                 //$("#TxtIdentidad").css("background-color", "yellow");
                 $('#TexttelC').css("border", "1px solid #3366FF");///,'border-left:',' 4px solid #3366FF'
                 return false;
     
             }
             
              else if (!Numeros.test($('#TextNh').val())) {
                 toastr.error('CRM Mayales - Notificacion' +
                        '</br></br>1 - digite un numero valido en el campo Nro de hijos' +
                        '</br>2 - Verifique que no haya ingresado letras en el campo');
                 //$("#TxtIdentidad").css("background-color", "yellow");
                 $('#TextNh').css("border", "1px solid #3366FF");///,'border-left:',' 4px solid #3366FF'
                 return false;
     
             }
             */
        else if ($('#TextIngresos').val().length < 1 || !Numeros.test($('#TextIngresos').val())) {
            toastr.error('CRM Mayales - Notificacion' +
                   '</br></br>1 - No a digitado nada en el campo ingresos' +
                   '</br>2 - Verifique que no haya ingresado letras en el campo');
            $('#TextIngresos').css("border", "1px solid #3366FF");///,'border-left:',' 4px solid #3366FF'
            return false;

        }



        else if ($('#TextInt').val().length < 1) {
            toastr.error('CRM Mayales - Notificacion' +
                   '</br></br>1 - No a digitado nada en el campo Interes de compra' +
                   '</br>2 - Verifique que no haya ingresado letras en el campo');
            $('#TextInt').css("border", "1px solid #3366FF");///,'border-left:',' 4px solid #3366FF'
            return false;

        }

        else if ($('#TextPinteres').val().length < 1) {
            toastr.error('CRM Mayales - Notificacion' +
                   '</br></br>1 - No a digitado nada en el campo proyecto de interes' +
                   '</br>2 - Verifique que no haya ingresado letras en el campo');
            $('#TextPinteres').css("border", "1px solid #3366FF");///,'border-left:',' 4px solid #3366FF'
            return false;

        }

        else if ($('#Lvalor').val().length < 1 || !Numeros.test($('#Lvalor').val())) {
            toastr.error('CRM Mayales - Notificacion' +
                   '</br></br>1 - No a digitado nada en el campo Valor' +
                   '</br>2 - Verifique que no haya ingresado letras en el campo');
            $('#Lvalor').css("border", "1px solid #3366FF");///,'border-left:',' 4px solid #3366FF'
            return false;

        }

        else if ($('#Textinicial').val().length < 1 || !Numeros.test($('#Textinicial').val())) {
            toastr.error('CRM Mayales - Notificacion' +
                   '</br></br>1 - No a digitado nada en el campo Cuota inicial' +
                   '</br>2 - Verifique que no haya ingresado letras en el campo');
            $('#Textinicial').css("border", "1px solid #3366FF");///,'border-left:',' 4px solid #3366FF'
            return false;

        }

        else if ($('#Textcredito').val().length < 1 || !Numeros.test($('#Textcredito').val())) {
            toastr.error('CRM Mayales - Notificacion' +
                   '</br></br>1 - No a digitado nada en el campo Credito' +
                   '</br>2 - Verifique que no haya ingresado letras en el campo');
            $('#Textcredito').css("border", "1px solid #3366FF");///,'border-left:',' 4px solid #3366FF'
            return false;

        }

        else if ($('#ComBancos').val().length < 1) {
            toastr.error('CRM Mayales - Notificacion' +
                   '</br></br>1 - No a digitado nada en el campo Bancos' +
                   '</br>2 - Verifique que no haya ingresado letras en el campo');
            $('#ComBancos').css("border", "1px solid #3366FF");///,'border-left:',' 4px solid #3366FF'
            return false;

        }

        else if ($('#Textcuota').val().length < 1 || !Numeros.test($('#Textcuota').val())) {
            toastr.error('CRM Mayales - Notificacion' +
                   '</br></br>1 - No a digitado nada en el campo Nro de cuotas' +
                   '</br>2 - Verifique que no haya ingresado letras en el campo');
            $('#Textcuota').css("border", "1px solid #3366FF");///,'border-left:',' 4px solid #3366FF'
            return false;

        }
        else if ($('#Textescritura').val().length < 1) {
            toastr.error('CRM Mayales - Notificacion' +
                   '</br></br>1 - No a digitado nada en el campo Fecha de escritura' +
                   '</br>2 - Verifique que no haya ingresado letras en el campo');
            $('#Textescritura').css("border", "1px solid #3366FF");///,'border-left:',' 4px solid #3366FF'
            return false;

        }
        else if ($('#Textentrega').val().length < 1) {
            toastr.error('CRM Mayales - Notificacion' +
                   '</br></br>1 - No a digitado nada en el campo Fecha de entrega' +
                   '</br>2 - Verifique que no haya ingresado letras en el campo');
            $('#Textentrega').css("border", "1px solid #3366FF");///,'border-left:',' 4px solid #3366FF'
            return false;

        }
        else if ($('#Textsubrogracion').val().length < 1) {
            toastr.error('CRM Mayales - Notificacion' +
                   '</br></br>1 - No a digitado nada en el campo Fecha de sugrogación' +
                   '</br>2 - Verifique que no haya ingresado letras en el campo');
            $('#Textsubrogracion').css("border", "1px solid #3366FF");///,'border-left:',' 4px solid #3366FF'
            return false;

        }

        else if ($('#Textasesorinf').val().length < 1 || !letras.test($('#Textasesorinf').val())) {
            toastr.error('CRM Mayales - Notificacion' +
                   '</br></br>1 - No a digitado nada en el campo asesor' +
                   '</br>2 - Verifique que no haya ingresado letras en el campo');
            $('#Textasesorinf').css("border", "1px solid #3366FF");///,'border-left:',' 4px solid #3366FF'
            return false;

        }
        else if ($('#TextmedioInf').val().length < 1 || !letras.test($('#TextmedioInf').val())) {
            toastr.error('CRM Mayales - Notificacion' +
                   '</br></br>1 - No a digitado nada en el campo medio por el cual se entero' +
                   '</br>2 - Verifique que no haya ingresado letras en el campo');
            $('#TextmedioInf').css("border", "1px solid #3366FF");///,'border-left:',' 4px solid #3366FF'
            return false;

        }

        else if ($('#CmbAsesorCart').val().length < 1 || !letras.test($('#CmbAsesorCart').val())) {
            toastr.error('CRM Mayales - Notificacion' +
                   '</br></br>1 - No a digitado nada en el campo asesor de cartera' +
                   '</br>2 - Verifique que no haya ingresado letras en el campo');
            $('#CmbAsesorCart').css("border", "1px solid #3366FF");///,'border-left:',' 4px solid #3366FF'
            return false;

        } else {

            _negocio._addHoja(Dtohoja(), inmu, acuerdoP, acuerdoPG);
        }

    }
    var _Inicio = function () {
        $("#Lvalor").hide();
        $("#Lvalor2").hide();
        utl.Bancos();
        utl.AsesorCartera();
    }

    return {
        init: function () {
            _Inicio();
            _addHandlers();
            $('#BtnDisponibilidad').click();
        },
    }

}());

$(document).ready(function () {



    $('#TextExpedicion').datepicker({
        format: 'yyyy/mm/dd',
    });
    $('#Textinicialg').datepicker({
        format: 'yyyy/mm/dd',
    });

    $('#Textnacimiento').datepicker({
        format: 'yyyy/mm/dd',
    });

    $('#TextExpedicion').datepicker({
        format: 'yyyy/mm/dd',
    });
    
    $('#Textescritura').datepicker({
        format: 'yyyy/mm/dd',
    });

    $('#Textentrega').datepicker({
        format: 'yyyy/mm/dd',
    });

    $('#Textsubrogracion').datepicker({
        format: 'yyyy/mm/dd',
    });
    $('#TextFecinicial').datepicker({
        format: 'yyyy/mm/dd',
    });
    $('#TextFecinicial2').datepicker({
        format: 'yyyy/mm/dd',
    });
    $('#nuevafc').datepicker({
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
        "showDuration": "1000",
        "hideDuration": "1000",
        "timeOut": "1000",
    };


    _admnegocio.init();
})
