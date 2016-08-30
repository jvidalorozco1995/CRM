var BLLTipoPersonas = function () {


    var WsListaTipoPersonas = funcionUrlGlobal("/Servicios/WListaPersonas.asmx/ListTipoPersonas");//Informacion de tareas especifica

    var color = null;



    BLLTipoPersonas.prototype.ListaTipoPersonas = function () {
        // jsonData = "{'c':" + JSON.stringify(negocio) + "}";
        $.ajax({
            type: "POST", url: WsListaTipoPersonas,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {

                if (result.d === null) {

                }
                else {

                    BLLTipoPersonas.prototype.comboTipoPersonas(result.d);
                }

            },
            error: function (error) { alert(error.responseText); }
        })
    }


    BLLTipoPersonas.prototype.comboTipoPersonas = function (datos) {
        $.each(datos, function (i, item) {
            var combo = '<option value=' + item.ID + '>';
            combo += item.TIPO;
            combo += '</option>';
            $('#ComTipoPersona').append(combo);
            $('#ComTipoPersona1').append(combo);
        });
    }

};







