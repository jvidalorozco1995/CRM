function BLLAval() {
    
   
    var WsAval = funcionUrlGlobal("/Servicios/WAval.asmx/ListAval");
    var WsAmbiente = funcionUrlGlobal("/Servicios/WAmbiente.asmx/Listambiente");
    var WsItems = funcionUrlGlobal("/Servicios/WAmbiente.asmx/Listitemxambiente");
    var WsAvalAntes = funcionUrlGlobal("/Servicios/WAval.asmx/ListAvalAntes");
    
    var WsInsertarAval = funcionUrlGlobal("/Servicios/WAval.asmx/InsertAval");
    var WsListaItemAval = funcionUrlGlobal("/Servicios/WAval.asmx/ListItemAval");


    BLLAval.prototype.Aval = function (accion,referencia) {
      
        if (accion == 2) {
            jsonData = "{ 'id':" + JSON.stringify(referencia) + " }";

            $.ajax({
                type: "POST", url: WsAval, data: jsonData,
                contentType: "application/json; charset=utf-8",
                dataType: 'json',
                async: true,
                success: function (result) {
                    if (result.d != null) {

                        $("#TxtRegistro").val(result.d[0].Registro);
                        $("#TxtProyecto").val(result.d[0].NOMBRE_PROYEC);
                        $("#TxtInmueble").val(result.d[0].INMUEBLE);
                        $("#TxtFinalAprob").val(result.d[0].FechaFinApro);
                        $("#TxtPropietario").val(result.d[0].Propietario);
                        $("#TxtResidente").val(result.d[0].Residente);
                        $("#TxtInspeccion").val(result.d[0].Inspeccion);

                       
                        if (result.d[0].Aprueba == 1) {
                            $('input:radio[name=RAprueba][value=1]').attr('checked', true);
                            $('input:radio[name=RAprueba][value=0]').attr('checked', false);
                        } else {
                            $('input:radio[name=RAprueba][value=0]').attr('checked', true);
                            $('input:radio[name=RAprueba][value=1]').attr('checked', false);
                        }

                    } else {
                        toastr.error(' CRM - Notificacion' +
                            '</br>Ha habido un error en el sistema y no se ha podido guardar');

                    }

                },
                error: function (obj, error, objError) { alert(objError); }
            });
        } else {
            jsonData = "{ 'id':" + JSON.stringify(referencia) + " }";

            $.ajax({
                type: "POST", url: WsAvalAntes, data: jsonData,
                contentType: "application/json; charset=utf-8",
                dataType: 'json',
                async: true,
                success: function (result) {
                    if (result.d != null) {

                        $("#TxtRegistro").val(result.d[0].Registro);
                        $("#TxtProyecto").val(result.d[0].NOMBRE_PROYEC);
                        $("#TxtInmueble").val(result.d[0].INMUEBLE);
                        $("#TxtFinalAprob").val(result.d[0].FechaFinApro);
                        $("#TxtPropietario").val(result.d[0].NOMBRECLIENTE);
                        $("#TxtResidente").val(result.d[0].Residente);
                        $("#TxtInspeccion").val(result.d[0].Inspeccion);
                        
                    
                    } else {
                        toastr.error(' CRM - Notificacion' +
                            '</br>Ha habido un error en el sistema y no se ha podido guardar');

                    }

                },
                error: function (obj, error, objError) { alert(objError); }
            });
        }
    }


    BLLAval.prototype.InsertarAval = function (aval,itemAval) {


        jsonData = "{'b':" + JSON.stringify(aval) + ",'ItemAval':" + JSON.stringify(itemAval) + "}";
      

        $.ajax({
            type: "POST", url: WsInsertarAval, data: jsonData,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                if (result.d != null) {

                    toastr.success(' CRM - Notificacion' +
                       '</br>Se ha guardado el aval satisfactoriamente');
                    setTimeout(function () {
                        window.location.replace("./../RevisionCalidad/WebRevisionCalidad.aspx");

                    }, 1000);

                } else {
                    toastr.error(' CRM - Notificacion' +
                        '</br>Ha habido un error en el sistema y no se ha podido guardar');

                }

            },
            error: function (obj, error, objError) { alert(objError); }
        });
    }


    BLLAval.prototype.ListadoAmbientes = function (accion,idaval) {

        if (accion == 1)
        {

                $.ajax({
                    type: "POST", url: WsAmbiente,
                    contentType: "application/json; charset=utf-8",
                    dataType: 'json',
                    async: true,
                    success: function (result) {
                        if (result.d != null) {


                   
                                BLLAval.CrearAmbientes(result.d);

                   

                        } else {
                            toastr.error(' CRM - Notificacion' +
                                '</br>Ha habido un error en el sistema y no se ha podido guardar');

                        }

                    },
                    error: function (obj, error, objError) { alert(objError); }
                });

        } else {
            jsonData = "{ 'id':" + JSON.stringify(idaval) + " }";
            $.ajax({
                type: "POST", url: WsListaItemAval, data: jsonData,
                contentType: "application/json; charset=utf-8",
                dataType: 'json',
                async: true,
                success: function (result) {
                    if (result.d != null) {



                        BLLAval.CrearTablaItemsActualizar(result.d);



                    } else {
                        toastr.error(' CRM - Notificacion' +
                            '</br>Ha habido un error en el sistema y no se ha podido guardar');

                    }

                },
                error: function (obj, error, objError) { alert(objError); }
            });

        }
    }

    BLLAval.CrearAmbientes = function (ambientes) {
        var tabla = document.getElementById('myTab1').innerHTML = "";
        var tabla1 = document.getElementById('tabs').innerHTML = "";
      
     //  tabla.innerHTML = "";
       
        $.each(ambientes, function (i, item) {
            if (i == 0) 
            {

                tabla += "<li class='active'><a data-toggle='tab' class='a' data-nexttab='" + (i + 1) + "' href='#" + item.Id + "'>" + 1 + "</a></li>";
               
            } else

            {
                tabla += "<li class=''><a data-toggle='tab' class='a' data-nexttab='" + (i + 1) + "' href='#" + item.Id + "'>" + (i + 1)  + "</a></li>";

            }
           

       });

        $.each(ambientes, function (i, item) {
           
            if (i == 0) {
                tabla1 += "<div id='" + item.Id + "'class='tab-pane active'>"
                tabla1 += "<div class='panel-body'>";
                tabla1 += "<h4>" + item.Ambiente1 + "</h1>"
                tabla1 += "<div class ='Tablas ITEM" + item.Id + "'></div>";
                Crear(item);
                tabla1 += "</div>";
                tabla1 += "</div>";
            } else {

                tabla1 += "<div id='" + item.Id + "'class='tab-pane'>"
                tabla1 += "<div class='panel-body'>";
                tabla1 += "<h4>" + item.Ambiente1 + "</h1>"
                tabla1 += "<div class ='Tablas ITEM" + item.Id + "'></div>";
                Crear(item)
                tabla1 += "</div>";
                tabla1 += "</div>";
            }
           
        });

        $('#myTab1').append(tabla);
        $('#tabs').append(tabla1);
                                  
    }

    function Crear(item) {

        var datos = "{ 'id':" + JSON.stringify(item.Id) + " }";
          $.ajax({
            type: "POST", url: WsItems, data: datos,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',

            success: function (result) {
                if (result.d != null) {

                    BLLAval.CrearTablaItems(item.Ambiente1, result.d);



                } else {
                    toastr.error(' CRM - Notificacion' +
                        '</br>Ha habido un error en el sistema y no se ha podido guardar');

                }

            },
            error: function (obj, error, objError) { alert(objError); }
        });
    }

    BLLAval.CrearTablaItems = function (nombreambiente, items) {

        document.getElementsByClassName("ITEM" + items[0].Idambiente).innerHTML = "";
        var tabla = '<table class="table table-striped table-bordered table-hover">';
        tabla += "<thead>";
        tabla += "<tr>";
        tabla += "<th>Consecutivo</th>";
        tabla += "<th>Ambiente</th>";
        tabla += "<th>Item</th>";
        tabla += "<th>Cumple</th>";
        tabla += "<th>Observaciones</th>";
        tabla += "<th>F.Compromiso</th>";
        //   tabla += "<th>Recibo a satisfaci�n</th>";
        //  tabla += "<th>Aprobaci�n</th>";
        tabla += "</tr>";
        tabla += "</thead>";
        tabla += "<tbody>";
        $.each(items, function (i, item) {

            tabla += " <tr>";
            tabla += "<td style='width:100px'>" + item.Consecutivo + "</td>";
            tabla += "<td style='width:100px'>" + nombreambiente + "</td>";
            tabla += "<td style=''>" + item.Item + "</td>";
            tabla += "<td><input type='radio' class='RAcumple' tag='" + item.Id + "'name='RAcumple" + item.Id + "'value='1'> Si<br><input type='radio' tag='" + item.Id + "' class='RAcumple' name='RAcumple" + item.Id + "' value='0'>No<br></td>"
            tabla += "<td><input type='text' class='observaciones'></input></td>"
            tabla += "<td><input type='date' id='fechas" + item.Id + "' class='fechas form-control' disabled></input></td>"
            //   tabla += "<td></td>"
            // tabla += "<td><input type='radio' class='RAaprobacion" + item.Id + "' value='1'> Si<br><input type='radio' name='RAaprobacion' value='0'>No<br></td>"

            tabla += "</tr>";
            ///images/cancel.png
        });
        tabla += "</tbody>";
        tabla += "</table>";

        $(".ITEM" + items[0].Idambiente).append(tabla);
        //$('#example3').dataTable();


    }



    BLLAval.CrearTablaItemsActualizar = function (items) {
        var tabla = document.getElementById('myTab1').innerHTML = "";
        var tabla1 = document.getElementById('tabs').innerHTML = "";

        var numero = 0;
         for (i = 0; i < items.length; i++) {
     
        

           
             if (i + 1 < items.length) {

                
                 if (items[i].Ambiente != items[i + 1].Ambiente) {

                     numero++;
                     if (numero == 1) {
                         tabla += "<li class='active'><a data-toggle='tab' class='a' data-nexttab='" + numero + "' href='#" + items[i].Id + "'>" + numero + "</a></li>";
                     } else {
                         tabla += "<li class=''><a data-toggle='tab' class='a' data-nexttab='" + numero + "' href='#" + items[i].Id + "'>" + numero + "</a></li>";
                     }
                 }
             } else if (i + 1 == items.length) {

                 numero++;
                 tabla += "<li class=''><a data-toggle='tab' class='a' data-nexttab='" + numero + "' href='#" + items[i].Id + "'>" + numero + "</a></li>";

             
             }
          
        }


         var numero2 = 0;
         for (i = 0; i < items.length; i++) {




             if (i + 1 < items.length) {


                 if (items[i].Ambiente != items[i + 1].Ambiente) {

                     numero2++;
                     if (numero2 == 1) {
                         tabla1 += "<div id='" + items[i].Id + "'class='tab-pane active'>"
                         tabla1 += "<div class='panel-body'>";
                         tabla1 += "<h4>" + items[i].Ambiente + "</h1>"
                         tabla1 += "<div class ='Tablas ITEM" + numero2 + "'>";

                         tabla1 += CrearActualizar(numero, findValor(items, items[i].Ambiente));
                         tabla1 += "</div>";
                         tabla1 += "</div>";
                         tabla1 += "</div>";
                     } else {
                         tabla1 += "<div id='" + items[i].Id + "'class='tab-pane '>"
                         tabla1 += "<div class='panel-body'>";
                         tabla1 += "<h4>" + items[i].Ambiente + "</h1>"
                         tabla1 += "<div class ='Tablas ITEM" + numero2 + "'>";


                         tabla1 += CrearActualizar(numero, findValor(items, items[i].Ambiente));
                         tabla1+="</div>";
                         tabla1 += "</div>";
                         tabla1 += "</div>";
                     }
                 }
             } else if (i + 1 == items.length) {

                 numero2++;
                 tabla1 += "<div id='" + items[i].Id + "'class='tab-pane '>"
                 tabla1 += "<div class='panel-body'>";
                 tabla1 += "<h4>" + items[i].Ambiente + "</h1>"
                 tabla1 += "<div class ='Tablas ITEM" + numero2 + "'>";


                 tabla1 += CrearActualizar(numero, findValor(items, items[i].Ambiente));

                 tabla1 += "</div>";
                 tabla1 += "</div>";
                 tabla1 += "</div>";


             }

         }

       
        $('#myTab1').append(tabla);
        $('#tabs').append(tabla1);

     
     


    }

    function findValor(items, valor) {
        var array=[];
        $.each(items, function (i, item) {
            if (item.Ambiente == valor) {
                array.push(item);
            }
        });
        return array;
       // CrearActualizar(numero,array);
    }

 
    

    function CrearActualizar(numero,items) {
     
        // document.getElementById("ITEM"+ numero).innerHTML = "";
         var tabla = '<table class="table table-striped table-bordered table-hover">';
         tabla += "<thead>";
         tabla += "<tr>";
         tabla += "<th>Consecutivo</th>";
         tabla += "<th>Ambiente</th>";
         tabla += "<th>Item</th>";
         tabla += "<th>Cumple</th>";
         tabla += "<th>Observaciones</th>";
         tabla += "<th>F.Compromiso</th>";
         tabla += "<th>Recibo a satisfacción</th>";
         tabla += "<th>Aprobación</th>";
         tabla += "</tr>";
         tabla += "</thead>";
         tabla += "<tbody>";
         $.each(items, function (i, item) {
            
             tabla += " <tr>";
             tabla += "<td style='width:100px'>" + item.Numero + "</td>";
             tabla += "<td style='width:100px'>" + item.Ambiente + "</td>";
             tabla += "<td style=''>" + item.Item + "</td>";
             if (item.Cumple == 1) {
 
                 tabla += "<td><input type='radio' class='RAcumple' tag='" + item.Id + "'name='RAcumple" + item.Id + "'value='1' checked disabled> Si<br><input type='radio' tag='" + item.Id + "' class='RAcumple' name='RAcumple" + item.Id + "' value='0' disabled>No<br></td>"
             } else {
 
                 tabla += "<td><input type='radio' class='RAcumple' tag='" + item.Id + "'name='RAcumple" + item.Id + "'value='0' disabled> Si<br><input type='radio' tag='" + item.Id + "' class='RAcumple' name='RAcumple" + item.Id + "' value='0' checked disabled>No<br></td>"
 
             } tabla += "<td><input type='text' value='" + item.Observaciones + "' class='observaciones' disabled></input></td>"
             tabla += "<td><input type='date' required pattern='[0-9]{4}-[0-9]{2}-[0-9]{2}' title='Ingresa una fecha valida YYYY-MM-DD' placeholder='YYYY-MM-DD' id='fechas" + item.Id + "' value='" + moment(item.FechaCompromiso).format("YYYY-DD-MM") + "' class='fechas form-control' disabled></input></td>"
             tabla += "<td><input type='date' required pattern='[0-9]{4}-[0-9]{2}-[0-9]{2}' title='Ingresa una fecha valida YYYY-MM-DD' placeholder='YYYY-MM-DD' id='fechasSatisfaccion" + item.Id + "' value='" + moment(item.FechaRecibido).format("YYYY-DD-MM") + "' class='fechas form-control' disabled></input></td>"
             tabla += "<td><input type='text' value='" + item.UsuarioAprueba + "' class='UsuarioAprueba' disabled></input></td>"
             //   tabla += "<td></td>"
             // tabla += "<td><input type='radio' class='RAaprobacion" + item.Id + "' value='1'> Si<br><input type='radio' name='RAaprobacion' value='0'>No<br></td>"
 
             tabla += "</tr>";
             ///images/cancel.png
         });
         tabla += "</tbody>";
         tabla += "</table>";
  
         return tabla;
         //$(".ITEM"+numero).append(tabla);
        //$('#example3').dataTable();*/
    }

    

}