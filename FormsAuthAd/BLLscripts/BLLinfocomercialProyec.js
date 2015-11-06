function BLLinfocomercialProyec() {


    var barData = [];
    var fecha = [];
    var info = [];

    var asesor = [];
    var infoas = [];

    var singleBarOptions = {};
    var singleBarData = {};

    var Winfcomercial = "/Servicios/Winfocomercial.asmx/InfoProyectos";
    var WLisproyectosInteres = "/Servicios/WInfocomercialProyec.asmx/LisproyectosInteres";
    var WclietesAsesor = "/Servicios/WInfocomercialProyec.asmx/LisproyectosAsesor";
    var WRangotareasp = "/Servicios/WInfocomercialProyec.asmx/LisRangotareas";
    var WRangoclinetesp = "/Servicios/WInfocomercialProyec.asmx/LisPclientes";
    var WAsesorRango = "/Servicios/WInfocomercialProyec.asmx/LisPAsesores";

    BLLinfocomercialProyec.prototype.Infotarea = function (proyecto) {
        JsData = "{'p':"+JSON.stringify(proyecto)+"}";
        $.ajax({
            type: "POST", url: Winfcomercial,data:JsData,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {

                if (result.d == "") {
                    BLLinfocomercialProyec.Informacion(result.d);
                }
                else {
                    BLLinfocomercialProyec.Informacion(result.d);
                }
            },
            error: function (obj, error, objError) { alert(obj.responseText); }
        });
    };

    BLLinfocomercialProyec.prototype.LisproyectosInteres = function (proyecto) {
        JsData = "{'p':" + JSON.stringify(proyecto) + "}";
        $.ajax({
            type: "POST", url: WLisproyectosInteres,data:JsData,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {

                if (result.d == "") {
                   barData = [];
                   fecha = [];
                   info = [];
                   singleBarOptions = {};
                   singleBarData = {};
                    BLLinfocomercialProyec.proyectosInteres(result.d)
                }
                else {
                    barData = [];
                    fecha = [];
                    info = [];
                    singleBarOptions = {};
                    singleBarData = {};
                    BLLinfocomercialProyec.proyectosInteres(result.d)
                }
            },
            error: function (obj, error, objError) { alert(obj.responseText); }
        });
    }

    //Carga listado de clientes registrados para los asesores
    BLLinfocomercialProyec.prototype.CLientesAsesor = function (proyectos) {
        JsData = "{'p':" + JSON.stringify(proyectos) + "}";
        $.ajax({
            type: "POST", url: WclietesAsesor,data:JsData,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {

                if (result.d == "") {
                    asesor = [];
                    infoas = [];
                    singleBarOptions = {};
                    singleBarData = {};
                    BLLinfocomercialProyec.Asesores(result.d);
                }
                else {
                    asesor = [];
                    infoas = [];
                    singleBarOptions = {};
                    singleBarData = {};
                    BLLinfocomercialProyec.Asesores(result.d);
                }
            },
            error: function (obj, error, objError) { alert(obj.responseText); }
        });
    };
   
    ////Listados por rango de fechas y proyecto 
    BLLinfocomercialProyec.prototype.RangoTareasProyec = function (inicio,fin,proyec) {
        JsonData = "{'fechaini':" + JSON.stringify(inicio) + ",'fechafin':" + JSON.stringify(fin) + ",'proyecto':" + JSON.stringify(proyec) + "}";
        $.ajax({
            type: "POST", url: WRangotareasp,data:JsonData,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {

                if (result.d == "")
                {
                    BLLinfocomercialProyec.Informacion(result.d);
                }
                else
                {
                    BLLinfocomercialProyec.Informacion(result.d);
                }
            },
            error: function (obj, error, objError) { alert(obj.responseText); }
        });
    };

    ////Listados clientes  por rango de fechas y proyecto 
    BLLinfocomercialProyec.prototype.RangoclientesProyec = function (inicio, fin, proyec) {
        JsonData = "{'fechaini':" + JSON.stringify(inicio) + ",'fechafin':" + JSON.stringify(fin) + ",'proyecto':" + JSON.stringify(proyec) + "}";
        $.ajax({
            type: "POST", url: WRangoclinetesp, data: JsonData,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
              
                if (result.d == null)
                {
                    barData = [];
                    fecha = [];
                    info = [];
                    singleBarOptions = {};
                    singleBarData = {};
                    BLLinfocomercialProyec.proyectosInteres(result.d);
                }
                else
                {
                    barData = [];
                    fecha = [];
                    info = [];
                    singleBarOptions = {};
                    singleBarData = {};
                    BLLinfocomercialProyec.proyectosInteres(result.d);
                }
            },
            error: function (obj, error, objError) { alert(obj.responseText); }
        });
    };

    ////Listados clientes para el asesor  por rango de fechas y proyecto 
    BLLinfocomercialProyec.prototype.RangoAsesorProyec = function (inicio, fin, proyec) {
        JsonData = "{'fechaini':" + JSON.stringify(inicio) + ",'fechafin':" + JSON.stringify(fin) + ",'proyecto':" + JSON.stringify(proyec) + "}";
        $.ajax({
            type: "POST", url: WAsesorRango,data: JsonData,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {

                if (result.d == "") {
                    asesor = [];
                    infoas = [];
                    singleBarOptions = {};
                    singleBarData = "";
                    BLLinfocomercialProyec.Asesores(result.d);
                }
                else {
                    asesor = [];
                    infoas = [];
                    singleBarOptions = {};
                    singleBarData = {};
                    BLLinfocomercialProyec.Asesores(result.d);
                }
            },
            error: function (obj, error, objError) { alert(obj.responseText); }
        });
    };

    ///construyendo graficas
    BLLinfocomercialProyec.proyectosInteres = function (datos) {
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
                fecha.push($.trim(item.MES + "-" + item.YEAR));
                info.push(item.CONTADOR)
               

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

    ///construyendo graficas
    BLLinfocomercialProyec.proyectosRango = function (datos) {
        if (datos == "") {
            $("#singleBarOptions").hide();
        }
        else {
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
                fecha.push($.trim(item.MES + "-" + $.trim(item.NOMBRE_PROYEC)));
                info.push(item.CONTADOR)
          

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

    
    BLLinfocomercialProyec.Asesores = function (datos) {
       
        if (datos == "")
        {
            $("#sharpLineOptions").hide();
        }
        else
        {
            $("#sharpLineOptions").show();
            $.each(datos, function (i, item) {
                asesor.push(item.ASESOR);
                infoas.push(item.CONTADOR)
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

    ///Informacion estimacion de tareas
    BLLinfocomercialProyec.Informacion = function (informacion) {
        document.getElementById("completada").innerHTML = "";
        document.getElementById("total").innerHTML = "";
        document.getElementById("cumplimiento").innerHTML = "";
        document.getElementById("progres").innerHTML = "";
        var espera = 0;
        var completa = 0;
        var pospuesta = 0;
        var total = 0;
        var vencida=0;
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
                case "T":
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



};