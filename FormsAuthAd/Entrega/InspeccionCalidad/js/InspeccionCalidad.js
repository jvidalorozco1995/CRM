


//DSDasas
var Insp = new BLLInspeccionCalidad();
 

var admRevision = (function () {
    var Ambiente;
    var id;

    var _addHandlers = function () {

        $("#BtnModalCrearAmbiente").click(function () {

            $("#ModalCrearAmbiente").modal('show');
        });
        
        $("#BtnModalCrearItem").click(function () {

            $("#ModalCrearItem").modal('show');
        });

        $(document).on('click', '.Guardar', function () {
            var IdItem = $(this).attr("id");
            

            var DtoItemXambiente = {

                'IdAmbiente': id,
                'IdItem': IdItem
            }
            Insp.AgregarItemXAmbiente(DtoItemXambiente);

            setTimeout(function () {

                Insp.ListItem(id);
                Insp.ListItemXambientes(id);
            }, 1000);
        });

        $(document).on('click', '.Quitar', function () {
            var idQuitar = $(this).attr("id");

            Insp.DeleteItemXambiente(idQuitar);
            setTimeout(function () {

                Insp.ListItem(id);
                Insp.ListItemXambientes(id);
            }, 1000);
        });
        
       
        $(document).on('click', '.ver', function () {

            var datos = $(this).attr("id");
            var result = datos.split("/");
            id = result[0];
            Ambiente = result[1];

            $("#Ambiente").text(Ambiente);
            Insp.ListItem(id);
            Insp.ListItemXambientes(id);
            $("#datos").show();
        });
       
        
        
        $("#BtnregisAmbiente").click(function () {
            
            if ($("#TxtNombreAmbiente").val().length > 0) {

                var DtoAmbiente = {

                    'Ambiente1': $("#TxtNombreAmbiente").val()
                }
                Insp.InsertarAmbiente(DtoAmbiente);
               
                setTimeout(function () {
                    Insp.ListAmbiente();
                }, 1000);
                $("#TxtNombreAmbiente").val('');
                $("#ModalCrearAmbiente").modal('hide');
            } else {
                toastr.error(' CRM - Mayales notificación' +
                                     '</br></br>No ha escrito nada en el cambo nombre');
           }
            
        });


        $("#BtnregisItem").click(function () {

            if ($("#TxtNombreItem").val().length > 0) {

                var DtoItem = {

                    'item1': $("#TxtNombreItem").val()
                }
                Insp.InsertarAmbiente(DtoItem);

                $("#TxtNombreItem").val('');
                $("#ModalCrearItem").modal('hide');
            } else {
                toastr.error(' CRM - Mayales notificación' +
                                     '</br></br>No ha escrito nada en el cambo nombre');
            }

        });

    }

    var _Inicio = function () {
        
        $("#datos").hide();
        Insp.ListAmbiente();
        
    }
    return {
        init: function () {
            _Inicio();
            _addHandlers();
        },
    }
}());

$(document).ready(function () {

    admRevision.init();
});




