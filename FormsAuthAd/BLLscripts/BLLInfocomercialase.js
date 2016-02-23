function BLLInfocomercialase() {

    var WInfoasesor = funcionUrlGlobal("/Servicios/WInfocomercialAsesor.asmx/LisAsesor");
    var WInfoasesorpro = funcionUrlGlobal("/Servicios/WInfocomercialAsesor.asmx/Asesorproyect");
    var WInfoasesorFec = funcionUrlGlobal("/Servicios/WInfocomercialAsesor.asmx/AsesorFechas");
    var WInfoasesorFecPr = funcionUrlGlobal("/Servicios/WInfocomercialAsesor.asmx/AsesorProyectosFechas");

    var barData = [];
    var fecha = [];
    var info = [];

    var asesores = [];
    var infoas = [];

    var singleBarOptions = {};
    var singleBarData = {};

    ////Listados clientes para el asesor
    BLLInfocomercialase.prototype.ListadoAsesor = function (asesor) {
        JsonData = "{'t':" + JSON.stringify(asesor) + "}";
        $.ajax({
            type: "POST", url: WInfoasesor, data: JsonData,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {

                if (result.d == "") {
                       asesores = [];
                       infoas = [];
                       singleBarOptions = {};
                       singleBarData = {};
                    BLLInfocomercialase.Asesores(result.d);
                }
                else {
                        asesores = [];
                        infoas = [];
                        singleBarOptions = {};
                        singleBarData = {};
                    BLLInfocomercialase.Asesores(result.d);
                }
            },
            error: function (obj, error, objError) { alert(obj.responseText); }
        });
    };

    ////Listados clientes para el asesor
    BLLInfocomercialase.prototype.ListadoAsesorp = function (asesor) {
        JsonData = "{'t':" + JSON.stringify(asesor) + "}";
        $.ajax({
            type: "POST", url: WInfoasesorpro, data: JsonData,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {

                if (result.d == "") {
                    barData = [];
                    proyecto = [];
                    info = [];
                    singleBarOptions = {};
                    singleBarData = {};
                    BLLInfocomercialase.Aseproyec(result.d);
                }
                else {
                     barData = [];
                     proyecto = [];
                     info = [];
                     singleBarOptions = {};
                     singleBarData = {};
                    BLLInfocomercialase.Aseproyec(result.d);
                }
            },
            error: function (obj, error, objError) { alert(obj.responseText); }
        });
    };


    ////Listados clientes para el asesor fechas
    BLLInfocomercialase.prototype.AsesorFechas = function (asesor,fechaini,fechafin) {
        JsonData = "{'t':" + JSON.stringify(asesor) + ",'fechaini':" + JSON.stringify(fechaini) + ",'fechafin':" + JSON.stringify(fechafin) + "}";
        $.ajax({
            type: "POST", url: WInfoasesorFec, data: JsonData,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {

                if (result.d == "") {
                    asesores = [];
                    infoas = [];
                    singleBarOptions = {};
                    singleBarData = {};
                    BLLInfocomercialase.AsesoresFec(result.d);
                }
                else {
                    asesores = [];
                    infoas = [];
                    singleBarOptions = {};
                    singleBarData = {};
                    BLLInfocomercialase.AsesoresFec(result.d);
                }
            },
            error: function (obj, error, objError) { alert(obj.responseText); }
        });
    };

    ////Listados clientes para el asesor fechas Proyectos
    BLLInfocomercialase.prototype.AsesorFechasProyectos = function (asesor, fechaini, fechafin) {
        JsonData = "{'t':" + JSON.stringify(asesor) + ",'fechaini':" + JSON.stringify(fechaini) + ",'fechafin':" + JSON.stringify(fechafin) + "}";
        $.ajax({
            type: "POST", url: WInfoasesorFecPr, data: JsonData,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {

                if (result.d == "") {
                    barData = [];
                    proyecto = [];
                    info = [];
                    singleBarOptions = {};
                    singleBarData = {};
                    BLLInfocomercialase.AseproyecFec(result.d);
                }
                else {
                    barData = [];
                    proyecto = [];
                    info = [];
                    singleBarOptions = {};
                    singleBarData = {};
                    BLLInfocomercialase.AseproyecFec(result.d);
                }
            },
            error: function (obj, error, objError) { alert(obj.responseText); }
        });
    };

    
    //Grafica los clientes registrados por asesores
    BLLInfocomercialase.Asesores = function (datosr) {
        
        if (datosr == "") {
            $("#sharpLineOptions").hide();
        }
        else {
            $("#sharpLineOptions").show();
            $.each(datosr, function (i, item) {
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
                asesores.push($.trim(item.MES+"-"+item.YEAR));
                infoas.push(item.CONTADOR)
                              
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
                labels: asesores,
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

    BLLInfocomercialase.Aseproyec = function (datos) {
        if (datos == "") {
            $("#singleBarOptions").hide();
        }
        else {
            $("#singleBarOptions").show();
            $.each(datos, function (i, item) {

                proyecto.push($.trim(item.NOMBRE_PROYEC));
                info.push(item.CONTADOR)
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
                labels: proyecto,
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

    //Grafica los clientes registrados por asesores Fechas
    BLLInfocomercialase.AsesoresFec = function (datosr) {

        if (datosr == "") {
            $("#sharpLineOptions").hide();
        }
        else {
            $("#sharpLineOptions").show();
          
            $.each(datosr, function (i, item) {
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
                asesores.push(item.MES + "-" + item.YEAR);
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
                labels: asesores,
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


    BLLInfocomercialase.AseproyecFec = function (datos) {
        if (datos == "")
        {
            $("#singleBarOptions").hide();
        }
        else
        {
            $("#singleBarOptions").show();
            $.each(datos, function (i, item) {
                proyecto.push($.trim(item.NOMBRE_PROYEC));
                info.push(item.CONTADOR)
             
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
                labels: proyecto,
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
};