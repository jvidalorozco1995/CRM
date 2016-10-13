
var utl = new BLLUtilidades();
var Aval = new BLLAval();
var emailreg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
var Numeros = /[0-9]/;
var letras = /[a-zA-Z]/;


var banderaso;


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


        $(document).on('click', '#BtnAprobarEntrega', function () {


            banderaso = 0;
            var result = confirm("Estas seguro(a) de que deseas aprobar esto?");
            if (result) {

                $('.Tablas tbody tr').each(function () {

                    var Cumple = $(this).find(('input[type="radio"]:checked')).val();
                   
                    if (Cumple == 0 || Cumple == undefined) {

                        banderaso++;
                       
                    }

                });
                if (banderaso > 0) {

                    $('input:radio[name=RAprueba][value=0]').attr('checked', true);
                    alert("NO SE PUEDE APROBAR PORQUE");
                } else {

                    //  $('input:radio[class=RAcumple][value=1]').attr('checked', true);
                    $('input:radio[name=RAprueba][value=1]').attr('checked', true);
                }
            }
        
          
        });


       $(document).on('change', 'input:radio[class=RAcumple]', function () {
           var datos = $(this).attr("tag");
           
            if (this.value == '1') {
               
              
                $("#fechas" + datos).prop('disabled', true);
               
            }
            else if (this.value == '0') {
               
                $("#fechas" + datos).prop('disabled', false);
            }
        });
        

        
        $(document).on('click', '#BtnGuardar', function () {

            banderaso = 0;

            $('.Tablas tbody tr').each(function () {
            

                var Consecutivo = $(this).find("td").eq(0).html();
                var Ambiente = $(this).find("td").eq(1).html();
                var Item = $(this).find("td").eq(2).html();
              
                var Cumple = $(this).find(('input[type="radio"]:checked')).val();
                var Observaciones = $(this).find(('input[class="observaciones"]')).val();
                var Fecha = $(this).find(('input[type="date"]')).val();

            
                if (Cumple == 0 || Cumple == undefined) {

                    banderaso++;
                       
                }

          
         

                
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
                }
                else {

                   
                    var DtoItemAval = {
                        "Ambiente": Ambiente,
                        "Numero": Consecutivo,
                        "Item": Item,
                        "Observaciones": Observaciones,
                        "FechaCompromiso": Fecha,
                      
                    }


                    ListadoItemAval.push(DtoItemAval);

                }
            });
            alert(parseInt(banderaso));
            if (banderaso > 0) {

                $('input:radio[name=RAprueba][value=0]').attr('checked', true);
              
            } else {

                //  $('input:radio[class=RAcumple][value=1]').attr('checked', true);
                $('input:radio[name=RAprueba][value=1]').attr('checked', true);
            }

            if ($("input:radio[name ='RAprueba']:checked").val() == undefined) {
                toastr.error('CRM Mayales - Notificacion' +
                   '</br></br>1 - No a digitado nada en el campo de aprobaci�n' 
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
                    "ReferenciaInmueble": referencia,
                }

                Aval.InsertarAval(DtoAval, ListadoItemAval);
            }
          
        });

       

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

    

    $('#TxtFinalAprob').datepicker({
        format: 'yyyy/mm/dd',
    });
 
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


