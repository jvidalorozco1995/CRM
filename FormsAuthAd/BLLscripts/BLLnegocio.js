var Wcliente = "/Servicios/WSeparaciones.asmx/cliente";
var WclienteAsociado = "/Servicios/WSeparaciones.asmx/_getAsociado";


var _Dto="";
var val_casa = 0.0;
var inicial = 0.0;
var credito = 0.0;
var pagosf=[];
var date = new Date();
var dia = date.getDate();
var año = date.getFullYear();
var mes = date.getMonth() + 1;
if (dia < 10) { dia = '0' + dia }
if (mes < 10) { mes = '0' + mes }
fecha = año + "/" + mes + "/" + dia;
var acierdop = [];
_http = new HttpBll();
var utl = new BLLUtilidades();
var BLLnegocio = function () {

};
var Waddnegocio = "/Servicios/WNegocio.asmx/DatoNegocio";
var _banco;



//tabla para cargar los negocios al modulo de cartera
BLLnegocio.CrearTabl = function (proyectos) {
    document.getElementById('TblNegocios').innerHTML = "";
    var tabla = '<table id="exampleP" class="table table-striped table-bordered table-hover">';
    tabla += "<thead>";
    tabla += "<tr>";
    tabla += "<th>MANZANA/BLOQUE</th>";
    tabla += "<th>CC/NIT</th>";
    tabla += "<th>NOMBRE CLIENTE</th>";
    tabla += "<th>INMUEBLE</th>";

    tabla += "</tr>";
    tabla += "</thead>";
    tabla += "<tbody>";
    $.each(proyectos, function (i, item) {
        console.log(item.NEGOCIO);
        tabla += " <tr class='CargarNego' id=" + item.NEGOCIO + ">";
        tabla += "<td style='width:200px'>" + item.NOMBREBLOQUE + "</td>";
        tabla += "<td>" + item.CEDULA_P + "</td>";
        tabla += "<td>" + item.NOMBRECLIENTE + "</td>";
        tabla += "<td>" + item.CODIGOINMUEBLE + "</td>";
        tabla += "</td>";
        tabla += "</tr>";

    });
    tabla += "</tbody>";
    tabla += "</table>";
    $('#TblNegocios').append(tabla);
    $('#exampleP').dataTable();
}




//tabla Proyectos CRM Asignar  Usuarios
BLLnegocio.CrearTablaPro = function (proyectos) {
    document.getElementById('Tabla2').innerHTML = "";
    var tabla = '<table id="exampleP" class="table table-striped table-bordered table-hover">';
    tabla += "<thead>";
    tabla += "<tr>";
    tabla += "<th>PROPIETARIO</th>";
    tabla += "<th>CODIGO_F</th>";
    tabla += "<th>USUARIO DE CARTERA</th>";
  
    tabla += "</tr>";
    tabla += "</thead>";
    tabla += "<tbody>";
    $.each(proyectos, function (i, item) {


        tabla += " <tr class='CargarNego' id=" + item.ID_HOJA + ">";
        tabla += "<td style='width:200px'>" + item.PROPIETARIO + "</td>";
        tabla += "<td>" + item.CODIGO_F + "</td>";
        tabla += "<td>" + item.USER_CARTERA + "</td>";
        tabla += "</td>";
        tabla += "</tr>";

    });
    tabla += "</tbody>";
    tabla += "</table>";
    $('#Tabla2').append(tabla);
    $('#exampleP').dataTable();
}

BLLnegocio.prototype = {
    
    ListNegocio: function (Wsurl,neg) {
   
        $.ajax({
            type: "POST", url: Wsurl,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                if (result.d == null) {

                }
                else {
                    if (neg == "Admingestusu") {

                        BLLnegocio.CrearTablaPro(result.d)
                    }
                }
           },
            error: function (obj, error, objError) { alert(obj.responseText); }
        });
    },

    ListNegocioFOX: function (Wsurl, neg) {
 
        $.ajax({
            type: "POST", url: Wsurl,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                if (result.d == null) {

                }
                else {
                  
                        BLLnegocio.CrearTabl(result.d)
                    

                }
            },
            error: function (obj, error, objError) { alert(obj.responseText); }
        });
    },


   UpdateCarteraNegocio: function (id, USER_CARTERA, Wsurl) {
        var datos = "{'id':" + JSON.stringify(id) + ",'USER_CARTERA':" + JSON.stringify(USER_CARTERA)+"}";
        $.ajax({
            type: "POST", url: Wsurl, data: datos,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                if (result.d == null) {

                    toastr.error(' CRM - Mayales no se pudo actualizar el usuario');
                }
                else {
                    toastr.success(' CRM - Mayales' +
                       '<br/>Se ha agregado de manera exitosa el usuario en el sistema');
                }

            },
            error: function (obj, error, objError) { alert(obj.responseText); }
        });
     },
   _addHoja: function (dto, inm, ac) {
        var re;
        var datos = "{'n':" + JSON.stringify(dto) + ",'inm':" + JSON.stringify(inm) + ",'ac':" + JSON.stringify(ac) + "}";
      $.ajax({
          type: "POST", url: Waddnegocio, data: datos,
          contentType: "application/json; charset=utf-8",
          dataType: 'json',
          async: true,
          success: function (result) {
              if (result.d == "ER") { alert("No fue posible registrar la hoja") }
              else
              {   document.getElementById("button").innerHTML = "";
                  $("#button").append('<button class="btn btn-default btn-btn-circle Btimprimir" type="button" id=' + result.d + ' >Imprimir hoja de negocio</button>');
              }
          },
           error: function (msg) { alert(msg.responseText); }
      });

    },
    _Getcliente: function (cedula) {
         var datos = "{ 'c':" + JSON.stringify(cedula) + " }";
         $.ajax({
             type:"POST", url: Wcliente, data:datos,
             contentType: "application/json; charset=utf-8",
             dataType: 'json',
             async: true,
             success: function (result){if (result.d == "") { _Dto = result.d } else { _Dto = result.d }},
             error: function (msg) { alert(msg.responseText); }
         });
         this._Dtocliente(_Dto)
        },
     
     _Getclienteseparacion: function (cedula) {
         var datos = "{ 'c':" + JSON.stringify(cedula) + " }";
         $.ajax({
             type: "POST", url: Wcliente, data: datos,
             contentType: "application/json; charset=utf-8",
             dataType: 'json',
             async: true,
             success: function (result) { if (result.d == null) { _Dto = result.d } else { _Dto = result.d } },
             error: function (msg) { alert(msg.responseText); }
         });
         this._DtoclienteAso(_Dto)
     },

     _Dtocliente: function (cliente) {
         document.getElementById("Tvalor").innerHTML = "";
         $.each(cliente, function (i, item) {
             $('#TxtNombres').val(item.NOMBRES + " " + item.P_APELLIDO + " " + item.S_APELLIDO);
             $('#Textcivil').val(item.ESTADO_CIVIL);
             $('#Textdireccion').val(item.DIRECCION + " " + item.BARRIO);
             $('#Textphone').val(item.TELEFONO2);
             $('#TextEmp').val(item.EMPRESA);
             $('#Textcorreo').val(item.EMAIL);
             $('#TextInt').val(item.INMU_INTERES);
             $('#Textasesorinf').val(item.ASESOR);
             $('#TextmedioInf').val(item.INFORMACION);
             $('#TextPinteres').val(item.PROYEC_INTERES);
             $('#Lvalor').val(utl.FormatNumero(item.VALOR_INM));
             $("#Tvalor").append(utl.FormatNumero(item.VALOR_INM));
             val_casa = item.VALOR_INM;
         });
         inicial = parseFloat(val_casa) * (30) / 100;
         credito = parseFloat(val_casa) - (inicial);
         $('#Textinicial').val(inicial)
         $('#Textcredito').val(credito)
         //utl.FormatNumero(inicial)
     },

     _DtoclienteAso: function (cliente) {
         document.getElementById("Lvalor").innerHTML = "";
         $.each(cliente, function (i, item) {
             $('#Textasesorinf').val(item.ASESOR);
             $('#TextmedioInf').val(item.INFORMACION);
             $('#TextPinteres').val(item.PROYEC_INTERES);
         })
     },

     _DtoclienteAsociado: function (cliente) {
      console.log(JSON.stringify(cliente))
     },

     _RecalcularCredito: function () {
         inicial = $('#Textinicial').val();
         credito = val_casa - inicial;
         $('#Textcredito').val(utl.FormatNumero(credito))
     },

     _TablaPagos: function (pagos) {
         var fecha_p;
         var nom_c;
         document.getElementById("acuerdo").innerHTML = "";
         var tabla='<table id="acuerdopago" class="table table-striped table-bordered table-hover dataTable no-footer" role="grid" aria-describedby="example2_info">';
         tabla +='<thead>';
         tabla +='<tr>';
         tabla +='<th>Cuota</th>';
         tabla+='<th>Fecha</th>';
         tabla+='<th>Valor</th>';
         tabla+='</tr>';
         tabla+='</thead>';
         tabla += '<tbody>';
         for (var i = 0; i < pagos.length; i++)
        {
             tabla +='<tr>';
             tabla+='<td>'+i+'</td>';
             tabla += '<td id=' + pagos[i].Fecha + "-" + i + "-" + pagos[i].Valor + ' class="BtFecha">' + pagos[i].Fecha + '</td>';
             tabla += '<td>' + pagos[i].Valor + '</td>';
             tabla += '</tr>';
             fecha_p = pagos[i].Fecha;
        }
         tabla+='</tbody>';
         tabla += '</table>';

         //var dtof = fecha_p.split("-");
         var fechasc = fecha_p.split("/");
       
         añoscr = fechasc[0];
         mescr = parseInt(fechasc[1])+1;
         diascr = fechasc[2];
         if (mescr > 12) { año = parseInt(añoscr) + 1; mescr = 1; }
         if (mescr < 10) { mescr = '0' + mescr }
         var fechascr = año + "/" + mescr + "/" + diascr;
         $('#Textescritura').val(fechascr)
         $('#acuerdo').append(tabla);
         $('#acuerdopago').dataTable();
         this._Fechaentrega(fechascr);   
         
     },
         
     _Fechaentrega: function (fechescri) {
         var fechent = fechescri.split("/");
         var ent = fechent[0];
         var mesent = parseInt(fechent[1]) + 1;
         var diasent = fechent[2];
         if (mesent < 10) { mesent = '0' + mesent }
         var fechasent = ent + "/" + mesent + "/" + diasent;
         $("#Textentrega").val(fechasent)
         this._Fechasubrogracion(fechasent);
     },

    _Fechasubrogracion: function (fechasub) {
        var fechasubr = fechasub.split("/");
        var entsb = fechasubr[0];
        var mesentsb = parseInt(fechasubr[1]) + 1;
        var diasentsb = fechasubr[2];
    if (mesentsb < 10) { mesentsb = '0' + mesentsb }
    var fechasubro = entsb + "/" + mesentsb + "/" + diasentsb;
    $("#Textsubrogracion").val(fechasubro)
},
};
