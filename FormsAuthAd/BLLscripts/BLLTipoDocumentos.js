var BLLTipoDocumentos = function () {

    var WsListaTipoDocumentos = funcionUrlGlobal("/Servicios/WTipoDocumentos.asmx/ListTipoDocumentos");//Informacion de tareas especifica

    var color = null;



    BLLTipoDocumentos.prototype.ListaTipoDocumentos = function () {
        // jsonData = "{'c':" + JSON.stringify(negocio) + "}";
        $.ajax({
            type: "POST", url: WsListaTipoDocumentos,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                if (result.d === null) {

                }
                else {

                    BLLTipoDocumentos.prototype.comboTipodocumentos(result.d);
                }

            },
            error: function (error) { alert(error.responseText); }
        })
    }


    BLLTipoDocumentos.prototype.comboTipodocumentos = function (datos) {
        $.each(datos, function (i, item) {
            var combo = '<option value=' + item.ID + '>';
            combo += item.TIPO;
            combo += '</option>';
            $('#ComTipoDocumento').append(combo);
            $('#ComTipoDocumento1').append(combo);
        });
    }



};





