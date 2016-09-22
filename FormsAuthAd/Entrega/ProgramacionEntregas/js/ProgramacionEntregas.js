
var Entg = new BLLEntregas();
var Com = new BLLComercial();
var inm = new BLLInmuebles();
var Proy = new BLLProyectos();
var WsListProyec = funcionUrlGlobal("/ServiciosFox/WProyectos.asmx/LisProyectos");//Consulto Proyectos CRM
var WsLisImnuE = funcionUrlGlobal("/ServiciosFox/WInmuebles.asmx/InmuEstados");//Listar Tareas
var Tra = new BLLTrabajadores();
var admEntregas= (function () {

   
    var cliente = null;
    var bandera = 0;
    var proyecto;
    var favorites = [];
    var myObj;
    var _addHandlers = function () {

        $(document).on('click', '.Info', function () {
            proyecto = $(this).attr("id");
            
            var datos = $(this).attr("tag");
            var result = datos.split("/")
            Enviado = result[0];
            EnviadoPor = result[1];
            EnviadoA = result[2];

            $("#TxtFechaEnviado").val(Enviado);
            $("#TxtEnviadoA").val(EnviadoA);
            $("#TxtEnviadoPor").val(EnviadoPor);

            setTimeout(function () {
                Entg.ListInmueblesProyecto(proyecto); $("#datos").show();
            }, 1000);

        });

        $("#BtnNueva").click(function () {
            favorites = [];
            $('#ModalAsignar').modal('show');
        });

        $("#BtnCerrar").click(function () {
            favorites = [];
            Entg.CrearTablaInmueblesBorrador(favorites);
        });

       
        $(document).on('change', '#ComProyect', function () {

            Com.ListbProyec($("#ComProyect").val());

        });
        $(document).on('change', '#Mazanasb', function () {
           
            inm.EstadosInmuebles2(WsLisImnuE, 24, $('#Mazanasb').val());

        });
       
        $(document).on('click', '#BtnAdd', function () {

            if (Entg.ValidarReferencia($("#Inmueble").val()) != 1) {



                //create object
                myObj = {
                    "ID_PROYECTO": $("#ComProyect").val(),    //your artist variable
                    "DIROBRA": $("#CombAsesores").val(),   //your title variable
                };

              


                //create object
                var myObj2 = {

                    "REFERENCIA_INMUEBLE": $("#Inmueble").val(),   //your title variable
                    "MANZANA_O_TORRE": $("#Mazanasb option:selected").text(),   //your title variable
                    "CASA_O_APTO": $("#Inmueble option:selected").text(),   //your title variable
                };

                var index = favorites.findIndex(function (item, i) {
                    return item.REFERENCIA_INMUEBLE === $("#Inmueble").val()
                });


                if (index == -1) {
                    favorites.push(myObj2);
                } else {
                    toastr.error('CRM Mayales - Notificacion' +
                          '</br></br>Este inmueble ya se encuentra agregado.');
                }

                Entg.CrearTablaInmueblesBorrador(favorites);
            } else {

                toastr.error('CRM Mayales - Notificacion' +
                         '</br></br>Ya hay una solicitud con este inmueble.');
            }

            
        });
     
        $(document).on('click', '.quitar', function () {


            var referencia = $(this).attr("id");
          

            event.stopPropagation();
            if (confirm("Estas seguro(a) de eliminar esto?")) {
                this.click;

                var index = favorites.findIndex(function (item, i) {
                    return item.REFERENCIA_INMUEBLE === referencia
                });


                favorites.splice(index, 1);



                Entg.CrearTablaInmueblesBorrador(favorites);

            }
            else {

            }
            event.preventDefault();

         
          
        });
        
        
        $("#Btnregis").click(function () {

            Entg.InsertEntregas(myObj, favorites);
           
        });

        $(document).on('click', '.enviar', function () {
            var id = $(this).attr("id");
            Entg.UpdateEntregas(id);
        });

        
        
    }
    var _Inicio = function () {
        $("#datos").hide();
        Entg.ListProgramacionEntregas();
      
        Proy.ListProyec(2, WsListProyec);
        Tra.getrabajadores();
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




