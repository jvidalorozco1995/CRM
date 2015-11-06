var bq = new BLLBloques();

var admBloques = (function () {
    $('#MensajeCRM').hide();

    var proyectos = null;

    var WsListProyecfox = "/ServiciosFox/WProyectos.asmx/LisProyectos";//Consulto Proyectos Cargados  CRM

    var WsListBloquesfox = "/ServiciosFox/WFox.asmx/BloquesFox";//Listar Proyectos de MultiFox;

    var WsInsertBloques = "/ServiciosFox/WBloques.asmx/InsertBloques";//Insertar Bloques a CRM

    var WsLisBloquesCRM = "/ServiciosFox/WBloques.asmx/GetBloques";//Devuelve Listado de Bloques CRM

    var _addHandlers = function () {

        $(document).on('change', '#CombProyectos', function () {
            proyectos = $('#CombProyectos').val()
            bq.ListBloquesFox(WsListBloquesfox, proyectos);
            bq.ListBloquesCRM(proyectos, WsLisBloquesCRM, 1);
        });

        $(document).on('click', '.CargarB', function () {
            var datos = $(this).attr("id");
            var cadena = datos.split('/');

            var idbloque = cadena[0].trim();
            var bloqueobra = idbloque.substr(0, 3);
            var bloquecodi = cadena[1].trim();
            var nombreb = cadena[2];
            bq.InsertBloque(BloquesDto(idbloque, bloqueobra, bloquecodi, nombreb), WsInsertBloques);
            setTimeout(function () { bq.ListBloquesCRM(proyectos, WsLisBloquesCRM, 1); }, 1000);
        });
    };

    var BloquesDto = function (idbloque, bloqueobra, bloquecodi, nombreb) {
        var bloque = {};
        bloque.id_bloque = idbloque;
        bloque.bloque_obra = bloqueobra;
        bloque.bloque_codi = bloquecodi;
        bloque.nombre_blo = nombreb;
        return bloque;

    }

    var _Inicio = function () {
        bq.ListProyectosCRM(WsListProyecfox);
    };

    return {
        init: function () {
            _Inicio();
            _addHandlers();
        }
    }
}());

$(document).ready(function () {
    toastr.options = {
        "debug": false,
        "newestOnTop": false,
        "positionClass": "toast-top-center",
        "closeButton": true,
        "debug": false,
        "toastClass": "animated fadeInDown",
    };
    admBloques.init();
});