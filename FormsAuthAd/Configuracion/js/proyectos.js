var gp = new BLLProyectos();

var admProyectos = (function () {
    //$('#Tabla').hide();
    $('#MensajeCRM').hide();
    $('#MensajeFox').hide();

    var proyec = null;
    ///Servicios Proyectos
    var WsListProyec = funcionUrlGlobal("/ServiciosFox/WProyectos.asmx/LisProyectos");//Consulto Proyectos CRM
    var WsInsertProyecFox = funcionUrlGlobal("/ServiciosFox/WProyectos.asmx/InsertProyecFox");//Inserto Proyectos A CRM


    var WsListProyecfox = funcionUrlGlobal("/ServiciosFox/WFox.asmx/consultafox");//Consulto Proyectos Fox

    var WsEliminarP = funcionUrlGlobal("/ServiciosFox/WProyectos.asmx/DeleteProyecto");
    var WAddPlanos = funcionUrlGlobal("/ServiciosFox/WProyectos.asmx/Addplanos");

    var _addHandlers = function () {
        
        $(document).on('click', '.Cargar', function () {
            var datos = $(this).attr("id");
            var result = datos.split('-');
            var Dto = { 'ID_PROYEC': result[0], 'NOMBRE_PROYEC': result[1] };
            gp.InsertProyectoFox(Dto, WsInsertProyecFox);
            setTimeout(function () { gp.ListProyec(1, WsListProyec); }, 2000);

        });

        $(document).on('click', '.RemoverP', function () {
            var dtot = $(this).attr("id");
            gp.EliminarProyecto(dtot, WsEliminarP);
            setTimeout(function () { gp.ListProyec(1, WsListProyec); }, 1000);
        });

        $(document).on('click', '.Planos', function () {
            proyec=$(this).attr("id");
            $('#planos').modal('show');
        });

        $(document).on('click', '#BtnLoadplano', function () {
            _getFoto(proyec);
         });
    };

    var _getFoto = function (pro) {
        var files = $("#inputFile").get(0).files;
        var data = new FormData();
        for (i = 0; i < files.length; i++)
        {
            data.append("file" + i, files[i]);
        }
        console.log(files)
        alert(JSON.stringify(data))
        
        //$.ajax({
        //    type: "POST",
        //    url:WAddPlanos,
        //    contentType: 'application/json; charset=utf-8',
        //    processData: false,
        //    data: "{'p':" + JSON.stringify(pro) + "}",
        //    success: function (result)
        //    {
        //        if (result.Error == false)
        //        {
        //            alert('Archivos subidos correctamente');
        //            location.reload();
        //        }
        //        else alert('Error: El tamaño de la imagen es muy grande...');
        //        $("#inputFile").val('');
        //    }
        //});
    };

    var _Datos = function (cedula, proyecto) {
        var pt = {};
        pt.trabajador = cedula;
        pt.proyecto = proyecto;
        return pt;
    }

    var _Inicio = function () {
        gp.ListProyecFox(WsListProyecfox);
        gp.ListProyec(1, WsListProyec);
    };
    return {
        init: function () {
            _Inicio();
            _addHandlers();
        }
    }
}());

$(document).ready(function () {
    admProyectos.init();
    toastr.options = {
        "debug": false,
        "newestOnTop": false,
        "positionClass": "toast-top-center",
        "closeButton": true,
        "debug": false,
        "toastClass": "animated fadeInDown",
        "preventDuplicates": false,
        "onclick": false,
        "showDuration": "1000",
        "hideDuration": "1000",
        "timeOut": "1000",
    };
})