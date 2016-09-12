var _negocio = new BLLnegocio();
var utl = new BLLUtilidades();
var inmuebles = new BLLInmuebles();
var emailreg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
var Numeros = /[0-9]/;
var letras = /[a-zA-Z]/;
var _admnegocio = (function () {
    var cedula = "";
    var bandera = 0;
    var proyec = utl.getUrl('proyec');
    var cactual = "";
    var dataSet = [];
    var acuerdoP = [];
    var acuerdoPG = [];
    var tipoint;
    var separacion;
    var inmueble;
    var fechaEscr;
    var _addHandlers = function () {
  
        var item;
        var valor = 0;

        $(document).on('click', '.CargarN', function () {
            /* var datos = $(this).attr("id");
             var result = datos.split("/")
             var persona = result[0];
            
             inmueble = result[2];
             $('#TxtIdentidad').val(persona);
             $('#datos').show();
             $('#BtnDisponibilidad').click();
             $('#clientesnegocio').hide();*/
            var datos = $(this).attr("id");
            var result = datos.split("/")
            var persona = result[0];
            separacion = result[1];
            inmueble = result[2];
            window.location.replace("Crearnegocio.aspx?cedula=" + persona + "&inmueble=" + inmueble + "&separacion=" + separacion);
        });
        $(document).on('click', '.Btimprimir', function () {
            var idhoja = $(this).attr("id");
            window.open("Hoja_Negocio2.html?idhoja=" + idhoja + '&proyec=' + proyec, 'Graph', 'height=900px,width=650px;resizable=false');
           
        });

    }

   
    var _Inicio = function () {
       
        inmuebles._lisnegociosepracion(proyec);
      
    }

    return {
        init: function () {
            _Inicio();
            _addHandlers();
        },
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
        "preventDuplicates": false,
        "onclick": true,
        "showDuration": "1000",
        "hideDuration": "1000",
        "timeOut": "1000",
    };


    _admnegocio.init();
})
