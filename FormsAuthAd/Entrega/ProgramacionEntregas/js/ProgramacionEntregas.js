
var Entg = new BLLEntregas();


var admEntregas= (function () {

   
    var cliente = null;
    var bandera = 0;

    var _addHandlers = function () {
        $(document).on('click', '.Info', function () {
            proyecto = $(this).attr("id");
            
            var datos = $(this).attr("tag");
            var result = datos.split("/")
            Enviado = result[0];
            EnviadoPor = result[1];
            EnviadoA = result[2];

            $("#TxtFechaEnviado").val(moment(Enviado).format("YYYY/DD/MM"));
            $("#TxtEnviadoA").val(EnviadoA);
            $("#TxtEnviadoPor").val(EnviadoPor);

            setTimeout(function () { Entg.ListInmueblesProyecto(proyecto); $("#datos").show(); }, 1000);

        });

        $("#BtnNueva").click(function () {

            $('#ModalAsignar').modal('show');
        });
       
    }
    var _Inicio = function () {
        $("#datos").hide();
        Entg.ListProgramacionEntregas();
    }
    return {
        init: function () {
            _Inicio();
            _addHandlers();
        },
    }
}());

$(document).ready(function () {
   
    admEntregas.init();
});




