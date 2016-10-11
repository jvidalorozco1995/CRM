
var utl = new BLLUtilidades();
var Aval = new BLLAval();
var admAval = (function () {

    var referencia = utl.getUrl('referencia');

    var _addHandlers = function () {

        $(document).on('click', '#BtnSiguiente2g', function () {
            
            var id = $('li.active .a').data('nexttab');
            $('#myTab1  li:eq(' + id + ') a').tab('show');

        });



/*$("ul.tabs li").click(function ()     //cada vez que se hace click en un li
        {
            $("ul.tabs li").removeClass("active"); //removemos clase active de todos
            $(this).addClass("active"); //añadimos a la actual la clase active
            $(".tab_content").hide(); //escondemos todo el contenido

            var content = $(this).find("a").attr("href"); //obtenemos atributo href del link
            $(content).fadeIn(); // mostramos el contenido
            return false; //devolvemos false para el evento click
        });*/
    }

    var _Inicio = function () {

       
        Aval.Aval(referencia);
        Aval.ListadoAmbientes();


    }
    return {
        init: function () {
            _Inicio();
            _addHandlers();
        },
    }
}());

$(document).ready(function () {

    admAval.init();
});


