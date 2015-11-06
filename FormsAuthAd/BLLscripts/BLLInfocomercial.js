function BLLInfocomercial() {

    var Winfcomercial = "/Servicios/Winfocomercial.asmx/Infotareas";
    var WinfProyectos = "/Servicios/Winfocomercial.asmx/InfoProyectos"; 
    var WinfAsesor = "/Servicios/Winfocomercial.asmx/InfoAsesor";
    var WInfechas = "/Servicios/Winfocomercial.asmx/LisclientesFechas";//por fechas
    var WItrabaja = "/Servicios/Winfocomercial.asmx/LisclientesT";//por fechas
    var WclietesAsesor = "/Servicios/Winfocomercial.asmx/LisclientesAsesores"
    var Wclientesproyectos = "/Servicios/Winfocomercial.asmx/Lisclientesproyectos";
    var WFechasTareas = "/Servicios/Winfocomercial.asmx/FechaTareascliente";

    var WFechasAsesorCliente = "/Servicios/Winfocomercial.asmx/FechacliteAsesor";
    var WFechasRango = "/Servicios/Winfocomercial.asmx/FechaRango";
    var WFechasRangoProyec = "/Servicios/Winfocomercial.asmx/FechaRangoProyectos";

    var barData = [];
    var fecha = [];
    var info = [];

    var asesor = [];
    var infoas = [];

    var singleBarData = {};
    var singleBarOptions = {};

    var doughnutData = {};
    var doughnutOptions = {};

    
    BLLInfocomercial.prototype.Infotarea = function () {

        $.ajax({
            type: "POST", url: Winfcomercial,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
               
                if (result.d=="")
                {
                    BLLInfocomercial.Informacion(result.d);
                }
                else
                {
                    BLLInfocomercial.Informacion(result.d);
                }
            },
            error: function (obj, error, objError) { alert(obj.responseText); }
        });
    };

    BLLInfocomercial.prototype.Infotareaproyectos = function (proyecto) {
        JsonData = "{'p':"+JSON.stringify(proyecto)+"}";
        $.ajax({
            type: "POST", url: WinfProyectos,data:JsonData,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {

                if (result.d == "") {
                    BLLInfocomercial.Informacion(result.d);
                }
                else {
                    BLLInfocomercial.Informacion(result.d);
                }
            },
            error: function (obj, error, objError) { alert(obj.responseText); }
        });
    };

    BLLInfocomercial.prototype.InfotareaTrabajador = function (asesor) {
        JsonData = "{'a':" + JSON.stringify(asesor) + "}";
        $.ajax({
            type: "POST", url: WinfAsesor, data: JsonData,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {

                if (result.d == "") {
                    BLLInfocomercial.Informacion(result.d);
                }
                else {
                    BLLInfocomercial.Informacion(result.d);
                }
            },
            error: function (obj, error, objError) { alert(obj.responseText); }
        });
    };
    
    ///////////////////////
    ////Carga todoas los clientes creados en el sistema y los agrupa por año y mes de creacion
    BLLInfocomercial.prototype.InfTrabajadores = function () {
        $.ajax({
            type: "POST", url: WItrabaja,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {

                if (result.d == "")
                {
                    barData = [];
                    fecha = [];
                    info = [];
                    singleBarData = {};
                    singleBarOptions = {};
                    BLLInfocomercial.CLientes(result.d);
                }
                else
                {
                    barData = [];
                    fecha = [];
                    info = [];
                    singleBarData = {};
                    singleBarOptions = {};
                    BLLInfocomercial.CLientes(result.d);
                }
            },
            error: function (obj, error, objError) { alert(obj.responseText); }
        });
    };


    //Carga listado de clientes registrados para los asesores
    BLLInfocomercial.prototype.CLientesAsesor = function () {
        
        $.ajax({
            type: "POST", url: WclietesAsesor,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {

                if (result.d == "")
                {
                    asesor = [];
                    infoas = [];
                    BLLInfocomercial.Asesores(result.d);
                }
                else
                {
                    asesor = [];
                    infoas = [];
                    BLLInfocomercial.Asesores(result.d);
                }
            },
            error: function (obj, error, objError) { alert(obj.responseText); }
        });
    };

    ///Metodo para consultar el total de clientes registrados para un proyecto
    BLLInfocomercial.prototype.CLientesproyectos = function () {
        $.ajax({
            type: "POST", url: Wclientesproyectos,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {

                if (result.d == "")
                {
                  
                    BLLInfocomercial.Proyectos(result.d);
                }
                else
                {
                    BLLInfocomercial.Proyectos(result.d);
                }
            },
            error: function (obj, error, objError) { alert(obj.responseText); }
        });
    };


    ////////////////////////////
    BLLInfocomercial.prototype.FechasTareas = function (inicio,fin) {
        Jsondata = "{'inicio':" + JSON.stringify(inicio) + ",'fin':" + JSON.stringify(fin) + "}";
        $.ajax({
            type: "POST", url: WFechasTareas,data:Jsondata,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {

                if (result.d == "") {

                    BLLInfocomercial.Informacion(result.d);
                }
                else
                {
                    BLLInfocomercial.Informacion(result.d);
                }
            },
            error: function (obj, error, objError) { alert(obj.responseText); }
        });
    };

    ///Metodo para consultar listado de clientes registrados por los asesores en un rango de tiepo
    BLLInfocomercial.prototype.FechasClietesAsesor = function (inicio, fin) {
        Jsondata = "{'inicio':" + JSON.stringify(inicio) + ",'fin':" + JSON.stringify(fin) + "}";
        $.ajax({
            type: "POST", url: WFechasAsesorCliente, data: Jsondata,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
               
                if (result.d == "")
                {
                    asesor = [];
                    infoas = [];
                    BLLInfocomercial.Asesores(result.d);
                }
                else
                {
                    asesor = [];
                    infoas = [];
                    BLLInfocomercial.Asesores(result.d);
                }
            },
            error: function (obj, error, objError) { alert(obj.responseText); }
        });
    };

    //Metodo de clientes Registrados en un rango de fecha 
    BLLInfocomercial.prototype.ClienteFechas = function (inicio, fin) {
        Jsondata = "{'inicio':" + JSON.stringify(inicio) + ",'fin':" + JSON.stringify(fin) + "}";
        $.ajax({
            type: "POST", url: WFechasRango, data: Jsondata,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
               
                if (result.d == "")
                {  
                    barData = [];
                    fecha = [];
                    info = [];
                    BLLInfocomercial.CLientes(result.d);
                }
                else
                {   barData = [];
                    fecha = [];
                    info = [];
                    BLLInfocomercial.CLientes(result.d);
                }
            },
            error: function (obj, error, objError) { alert(obj.responseText); }
        });
    };

    ///Metodo para consultar el total de clientes registrados para un proyecto en un rango de tiempo
    BLLInfocomercial.prototype.RangofechasProyectos = function (inicio, fin) {
        Jsondata = "{'inicio':" + JSON.stringify(inicio) + ",'fin':" + JSON.stringify(fin) + "}";

        $.ajax({
            type: "POST", url: WFechasRangoProyec,data:Jsondata,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {

                if (result.d == "") {

                    BLLInfocomercial.ProyectosFechas(result.d);
                }
                else {
                    BLLInfocomercial.ProyectosFechas(result.d);
                }
            },
            error: function (obj, error, objError) { alert(obj.responseText); }
        });
    };

    ///Cargar Grafica de Clientes registrados y los agrupa por año y mes
    BLLInfocomercial.CLientes = function (datos) {
        if (datos == "")
        {
            $("#singleBarOptions").hide();
        }
        else
        {
            $("#singleBarOptions").show();
            $.each(datos, function (i, item) {
                switch (item.MES) {
                    case 1:
                        item.MES = "Ene"
                        break
                    case 2:
                        item.MES = "Feb"
                        break
                    case 3:
                        item.MES = "Mzo"
                        break
                    case 4:
                        item.MES = "Abr"
                        break
                    case 5:
                        item.MES = "May"
                        break
                    case 6:
                        item.MES = "Jun"
                        break
                    case 7:
                        item.MES = "Jul"
                        break
                    case 8:
                        item.MES = "Ago"
                        break
                    case 9:
                        item.MES = "Sept"
                        break
                    case 10:
                        item.MES = "Oct"
                        break
                    case 11:
                        item.MES = "Nov"
                        break
                    case 12:
                        item.MES = "Dic"
                        break
                }
                fecha.push(item.MES + "-" + item.YEAR);
                info.push(item.CONTADOR);
            });
            singleBarOptions = {
                scaleBeginAtZero: true,
                scaleShowGridLines: true,
                scaleGridLineColor: "rgba(0,0,0,.05)",
                scaleGridLineWidth: 1,
                barShowStroke: false,
                barStrokeWidth: 1,
                barValueSpacing: 1,
                barDatasetSpacing: 1,
                responsive: true
            };

            singleBarData = {
                labels: fecha,
                datasets: [
                    {
                        label: "My Second dataset",
                        fillColor: "rgba(98,203,49,0.5)",
                        strokeColor: "rgba(98,203,49,0.8)",
                        highlightFill: "rgba(98,203,49,0.75)",
                        highlightStroke: "rgba(98,203,49,1)",
                        data: info,
                    }
                ]
            };
            var ctx = document.getElementById("singleBarOptions").getContext("2d");
            var myNewChart = new Chart(ctx).Bar(singleBarData, singleBarOptions);
        }
        
        
    }
    //Grafica los clientes registrados por asesores
    BLLInfocomercial.Asesores = function (datos) {
       if (datos == "") {
            $("#sharpLineOptions").hide();
        }
       else {
           $("#sharpLineOptions").show();
            $.each(datos, function (i, item) {
                asesor.push(item.ASESOR);
                infoas.push(item.CONTADOR);
            })

            singleBarOptions = {
                scaleBeginAtZero: true,
                scaleShowGridLines: true,
                scaleGridLineColor: "rgba(0,0,0,.05)",
                scaleGridLineWidth: 1,
                barShowStroke: false,
                barStrokeWidth: 1,
                barValueSpacing: 1,
                barDatasetSpacing: 1,
                responsive: true
            };

            singleBarData = {
                labels: asesor,
                datasets: [
                    {
                        label: "My Second dataset",
                        fillColor: "rgba(98,203,49,0.5)",
                        strokeColor: "rgba(98,203,49,0.8)",
                        highlightFill: "rgba(98,203,49,0.75)",
                        highlightStroke: "rgba(98,203,49,1)",
                        data: infoas,
                    }
                ]
            };

           var ctx = document.getElementById("sharpLineOptions").getContext("2d");
           var myNewChart = new Chart(ctx).Bar(singleBarData, singleBarOptions);
        }


    }

    BLLInfocomercial.Proyectos = function (datos) {
        var conta = [];
        var p = [];
        if (datos == "") {

            $('#doughnutChart').hide();
        }
        else {
            $('#doughnutChart').show();
            $.each(datos, function (i, item) {
                p.push(
                    {
                        value: item.CONTADOR,
                        color: "#62cb31",
                        highlight: "#57b32c",
                        label: item.NOMBRE_PROYEC.trim(),
                    }
                    );
                doughnutData = p;

            });

             doughnutOptions = {
                segmentShowStroke: true,
                segmentStrokeColor: "#fff",
                segmentStrokeWidth: 2,
                percentageInnerCutout: 35, // This is 0 for Pie charts
                animationSteps: 100,
                animationEasing: "easeOutBounce",
                animateRotate: true,
                animateScale: false,
                responsive: true,
            };

            var ctx = document.getElementById("doughnutChart").getContext("2d");
            var myNewChart = new Chart(ctx).Doughnut(doughnutData, doughnutOptions);
        }
    }

    BLLInfocomercial.ProyectosFechas = function (datos) {
        var conta = [];
        var p = [];
        if (datos == "") {
            $('#doughnutChart').hide();
        }
        else
        {
            $('#doughnutChart').show();
            $.each(datos, function (i, item) {
                switch (item.MES) {
                    case 1:
                        item.MES = "Ene"
                        break
                    case 2:
                        item.MES = "Feb"
                        break
                    case 3:
                        item.MES = "Mzo"
                        break
                    case 4:
                        item.MES = "Abr"
                        break
                    case 5:
                        item.MES = "May"
                        break
                    case 6:
                        item.MES = "Jun"
                        break
                    case 7:
                        item.MES = "Jul"
                        break
                    case 8:
                        item.MES = "Ago"
                        break
                    case 9:
                        item.MES = "Sept"
                        break
                    case 10:
                        item.MES = "Oct"
                        break
                    case 11:
                        item.MES = "Nov"
                        break
                    case 12:
                        item.MES = "Dic"
                        break
                }
                p.push(
                    {
                        value: item.CONTADOR,
                        color: "#62cb31",
                        highlight: "#57b32c",
                        label: item.PROYEC_INTERES.trim() + "" + item.MES
                    }
                    );
                doughnutData = p;


            });

            doughnutOptions = {
                segmentShowStroke: true,
                segmentStrokeColor: "#fff",
                segmentStrokeWidth: 1,
                percentageInnerCutout: 50, // This is 0 for Pie charts
                animationSteps: 100,
                animationEasing: "easeOutBounce",
                animateRotate: true,
                animateScale: false,
                responsive: true,
            };


            var ctx = document.getElementById("doughnutChart").getContext("2d");
            var myNewChart = new Chart(ctx).Doughnut(doughnutData, doughnutOptions);
        }


    }

    BLLInfocomercial.Informacion = function (informacion) {
        document.getElementById("completada").innerHTML = "";
        document.getElementById("total").innerHTML = "";
        document.getElementById("cumplimiento").innerHTML = "";
        document.getElementById("progres").innerHTML = "";
        var espera = 0;
        var completa = 0;
        var pospuesta = 0;
        var vencida = 0;
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
                    vencida = vencida + 1;
                    break

            }
       
        });   
        
        total = espera + pospuesta + completa+vencida;
        porcentaje = (completa * 100) / parseInt(total);
      
        $('#completada').append(completa);
        $('#asignadas').append(total);
        $('#pospuesta').append(pospuesta);
        $('#completadas').append(completa);
        if (total == 0)
        {
            porcentaje = 0;
        }

        $('#total').append(total);
       
        var progres = '<div style="width: ' + porcentaje + '%" aria-valuemax="100" aria-valuemin="0" aria-valuenow="55" role="progressbar" class=" progress-bar progress-bar-success">';
        progres += '<span class="sr-only">' + porcentaje + '% Complete (success)</span>';
        progres +='</div>';
        $('#progres').append(progres);
        $('#cumplimiento').append(porcentaje.toFixed(1) + '%');
    }

};