
var utl = new BLLUtilidades();
var Aval = new BLLAval();
var emailreg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
var Numeros = /[0-9]/;
var letras = /[a-zA-Z]/;
var admAval = (function () {

    var referencia = utl.getUrl('referencia');
    var ListadoItemAval = [];
    var _addHandlers = function () {

        $('.fechas').datepicker({
            format: 'yyyy/mm/dd',
        });

        $(document).on('click', '#BtnSiguiente2g', function () {
            
            var id = $('li.active .a').data('nexttab');
            $('#myTab1  li:eq(' + id + ') a').tab('show');

        });


        
        $(document).on('click', '#BtnGuardar', function () {


            $('.Tablas tbody tr').each(function () {
                /*  public int Id { get; set; }
                  public Nullable<int> IdAval { get; set; }
                  public string Ambiente { get; set; }
                  public Nullable<int> Numero { get; set; }
                  public string Item { get; set; }
                  public Nullable<int> Cumple { get; set; }
                  public string Observaciones { get; set; }
                  public Nullable<System.DateTime> FechaCompromiso { get; set; }
                  public Nullable<System.DateTime> FechaRecibido { get; set; }
                  public string UsuarioAprueba { get; set; }*/

                var Consecutivo = $(this).find("td").eq(0).html();
                var Ambiente = $(this).find("td").eq(1).html();
                var Item = $(this).find("td").eq(2).html();
                alert(Item);
                var Cumple = $(this).find(('input[type="radio"]:checked')).val();
                var Observaciones = $(this).find(('input[class="observaciones"]')).val();
                var Fecha = $(this).find(('input[class="fechas"]')).val();



                if (Observaciones == undefined) {
                    toastr.error('CRM Mayales - Notificacion' +
                    '</br></br>1 - No a digitado nada en el campo observaciones' +
                    '</br>2 - Verifique que no haya ingresado letras en el campo');
                    return false;
                } else if (Cumple == undefined) {
                    toastr.error('CRM Mayales - Notificacion' +
                        '</br></br>1 - No a digitado nada en el campo cumplido' +
                        '</br>2 - Verifique que no haya ingresado letras en el campo');
                    return false;
                } /*else if (fecha == undefined) {
                    toastr.error('CRM Mayales - Notificacion' +
                    '</br></br>1 - No a digitado nada en el campo fecha de compromiso' +
                    '</br>2 - Verifique que no haya ingresado letras en el campo');
                    return false;
                }*/ else {



                    var DtoItemAval = {
                        "Ambiente": Ambiente,
                        "Numero": Consecutivo,
                        "Item": Item,
                        "Observaciones": Observaciones,
                        "Fechas": Fecha,
                    }


                    ListadoItemAval.push(DtoItemAval);

                }
            });

            if ($("input:radio[name ='RAprueba']:checked").val() == undefined) {
                toastr.error('CRM Mayales - Notificacion' +
                   '</br></br>1 - No a digitado nada en el campo de aprobación' 
                   );
                return false;
            } else  if ($('#TxtPropietario').val().length < 1 || !letras.test($('#TxtPropietario').val())) {
                toastr.error('CRM Mayales - Notificacion' +
                    '</br></br>1 - No a digitado nada en el campo propietario' +
                    '</br>2 - Verifique que no haya ingresado letras en el campo');
                $('#TxtPropietario').css("border", "1px solid #3366FF");///,'border-left:',' 4px solid #3366FF'
                return false;

            } else if ($('#TxtResidente').val().length < 1 || !letras.test($('#TxtResidente').val())) {
                toastr.error('CRM Mayales - Notificacion' +
                    '</br></br>1 - No a digitado nada en el campo residente' +
                    '</br>2 - Verifique que no haya ingresado letras en el campo');
                $('#TxtResidente').css("border", "1px solid #3366FF");///,'border-left:',' 4px solid #3366FF'
                return false;

            } else if ($('#TxtInspeccion').val().length < 1 || !letras.test($('#TxtInspeccion').val())) {
                toastr.error('CRM Mayales - Notificacion' +
                    '</br></br>1 - No a digitado nada en el campo residente' +
                    '</br>2 - Verifique que no haya ingresado letras en el campo');
                $('#TxtInspeccion').css("border", "1px solid #3366FF");///,'border-left:',' 4px solid #3366FF'
                return false;

            } else {

                var DtoAval = {

                    "Propietario": $("#TxtPropietario").val(),
                    "Residente": $("#TxtResidente").val(),
                    "Inspeccion": $("#TxtInspeccion").val(),
                    "Aprueba": $("input:radio[name ='RAprueba']:checked").val(),

                }

                Aval.InsertarAval(DtoAval, ListadoItemAval);
            }
          
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


 
    $('.fechas').datepicker({
        format: 'yyyy/mm/dd',
    });

    $('#TxtFeInspeccion1').datepicker({
        format: 'yyyy/mm/dd',
    });

    $('#TxtFeInspeccion2').datepicker({
        format: 'yyyy/mm/dd',
    });


    admAval.init();
});


