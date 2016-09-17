
var Entg = new BLLEntregas();


var admEntregas= (function () {

   
    var cliente = null;
    var bandera = 0;

    var _addHandlers = function () {
        $(document).on('click', '.Info', function () {
            proyecto = $(this).attr("id");
          
            setTimeout(function () { Entg.ListInmueblesProyecto(proyecto); $("#datos").show(); }, 1000);

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




