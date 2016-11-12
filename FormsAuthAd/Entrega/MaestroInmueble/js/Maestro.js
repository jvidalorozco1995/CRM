


//Maestro
var Proy = new BLLProyectos();
var Ent = new BLLEntregas();
var WsListProyec = funcionUrlGlobal("/ServiciosFox/WProyectos.asmx/LisProyectos");//Consulto Proyectos CRM

var IDFECHA;

var admMaestro= (function () {


    var _addHandlers = function () {
        //me
        $(document).on('click', '.VER', function () {
            var referencia = $(this).attr("id");
            var idAval = $(this).attr("tag");

            window.location.href = "./../Aval/WebAval.aspx?referencia=" + referencia + "&accion=3&idaval=" + idAval;

        });

        $(document).on('click', '.modalfechas', function () {
            $("#TxtFecha").val('');
             IDFECHA = $(this).attr("tag");
            $("#modalactfechas").modal('show');

        });


        $(document).on('click', '.modalEditarfechas', function () {
            $("#TxtFecha").val('');
            IDFECHA = $(this).attr("tag");
            var result = IDFECHA.split("-");
            $("#TxtFecha").val(result[2])
            $("#modalactfechas").modal('show');

        });

        

        $(document).on('click', '#BtnActualizar', function () {
            var result = IDFECHA.split("-");
            if ($("#TxtFecha").val().length == 0) {
                 
                toastr.error('CRM Mayales - Notificacion' +
                              '</br></br>Digite la fecha');

            } else {

                var Dto;
                if (result[0] == 1) {

                    
                    Dto = {

                        "id": result[0],
                        "ID_INMUEBLES_ENTREGAS": result[1],
                        "RADICADOVENTA": $("#TxtFecha").val()
                    }
                   
                } else if (result[0] == 2) {

                    Dto = {
                        "id": result[0],
                        "ID_INMUEBLES_ENTREGAS": result[1],
                        "ENTREGAOBRA": $("#TxtFecha").val()
                    }

                } else if (result[0] == 3) {
                    Dto = {

                        "id": result[0],
                        "ID_INMUEBLES_ENTREGAS": result[1],
                        "FECHACLIENTE": $("#TxtFecha").val()
                    }

                }
                Ent.UpdateFechas(result[0], Dto);
                setTimeout(function () { Ent.ListMaestro($("#ComProyect").val()); }, 1000);
                $("#modalactfechas").modal('hide');
                $("#TxtFecha").val('');
            }
          
        });

        $(document).on('change', '#ComProyect', function () {

            var proyecto = $("#ComProyect").val();

            Ent.ListMaestro($("#ComProyect").val());

        });


        $(document).on('click', '.IMPRIMIRACTA', function () {

            var datos = $(this).attr("id");

            //el tag de la implementacion
            var tag = $(this).attr("tag");

            //el resultado de la consulta
            var result = datos.split("/")

            //El id del aval lo escogemos aca
            idAval = result[0];

            //Aca va el proyecto
            proyecto = result[10];

            //Aca selecccionamos la manzana
            manzana = result[2];

            //Aca el inmueble
            inmueble = result[3];

            //aca enviamos la solicitud
            solicitud = result[4];

            //Aca seleccionamos la confrmacion
            confirmacion = result[5];

            //Aca buscamos el enviado a
            enviadoa = result[6];

            //Aca seleccionamos el enviado por
            enviadopor = result[7];

            propietario = result[8];

            cedula = result[9];

            direccion = result[11];

            Ent.ActaEntrega(propietario, cedula, direccion, manzana, propietario, proyecto);


            

        });
      
        $(document).on('click', '.VERFECHAS', function () {

            var datos = $(this).attr("id");

            //el tag de la implementacion
            var tag = $(this).attr("tag");

            //el resultado de la consulta
            var result = datos.split("/")

           //El id del aval lo escogemos aca
            idAval = result[0];

            //Aca va el proyecto
            proyecto = result[1];

            //Aca selecccionamos la manzana
            manzana = result[2];

            //Aca el inmueble
            inmueble = result[3];

            //aca enviamos la solicitud
            solicitud = result[4];

            //Aca seleccionamos la confrmacion
            confirmacion = result[5];

            //Aca buscamos el enviado a
            enviadoa = result[6];

            //Aca seleccionamos el enviado por
            enviadopor = result[7];

            //el proyecto
            $("#TxtProyecto").val(proyecto);

            $("#TxtManzana").val(manzana);
            //la manzana
            $("#TxtInmueble").val(inmueble);

            //fecha de solicitud
            $("#TxtFSolicitud").val(solicitud);
            $("#TxtFConfirmacion").val(confirmacion);

            //enviado a
            $("#TxtEnviadoA").val(enviadoa);
            $("#TxtEnviadoPor").val(enviadopor);
           //el numero de registro
            $("#Nregistro").empty();
            $("#Nregistro").append(tag);
            $("#datos").show();

            //Revi.ListadoFechasInspeccion(idAval);

        });
    }

    var _Inicio = function () {
      
        $("#datos").hide();
        Proy.ListProyec(2, WsListProyec);
        Ent.ListMaestro($("#ComProyect").val());
        $("#TxtFecha").datepicker();
    }
    return {
        init: function () {
            _Inicio();
            _addHandlers();
        },
    }
}());

$(document).ready(function () {

    admMaestro.init();
});




