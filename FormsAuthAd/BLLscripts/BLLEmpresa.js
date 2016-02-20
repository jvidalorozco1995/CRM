
function BLLEmpresa() {

    Wcrearempresa = "/Servicios/WEmpresas.asmx/InsertEmpresa";
    WSEmpresa = "/Servicios/WEmpresas.asmx/LisEmprsa";
    WSAddphone = "/Servicios/WEmpresas.asmx/AddTelefono";
    var selec = null;

    BLLEmpresa.prototype.Addempresa = function (empres) {
        JsonData = "{'e':" + JSON.stringify(empres) + "}";
        $.ajax({
            type: "POST", url: Wcrearempresa, data: JsonData,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                if (result.d == 0) {
                    document.getElementById('CombEmpresa').innerHTML = "";
                    toastr.error('CRM Mayales - Notificacion' +
                   '</br></br>No fue posible llevar a cabo el registro de la empresa ya existe registrada');
                }
                else {
                    if (result.d == 2) {
                        toastr.error('CRM Mayales - Notificacion' +
                       '</br></br>No fue posible llevar a cabo el registro ya existe una empresa con el mismo nombre registrada.');
                    }
                    else {
                        selec = empres.NOMBRE_EMP;
                        document.getElementById('CombEmpresa').innerHTML = "";
                        toastr.success('CRM Mayales - Notificacion' +
                        '</br></br>Se registro de manera exitosa la empresa en sistema.');
                    }


                }

            },
            error: function (error) { alert(error.responseText); }
        });
    }

    BLLEmpresa.prototype.AddPhone = function (t,empres) {
        JsonData = "{'t':" + JSON.stringify(t) + ",'empresa':" + JSON.stringify(empres) + "}";
        $.ajax({
            type: "POST", url: WSAddphone, data: JsonData,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                
            },
            error: function (error) { alert(error.responseText); }
        });
    }

    BLLEmpresa.prototype.GetEmpresa = function () {

        $.ajax({
            type: "POST", url: WSEmpresa,
            contentType: "application/json; charset=utf-8",
            dataType: 'json',
            async: true,
            success: function (result) {
                if (result.d == null) {

                    document.getElementById('CombEmpresa').innerHTML = "";
                    $('#CombEmpresa').append('<option>Seleccionar..<option>');
                }
                else {
                    BLLEmpresa.comboEmpresa(result.d)
                }

            },
            error: function (error) { alert(error.responseText); }
        });
    }

    BLLEmpresa.comboEmpresa = function (empresa) {
        $.each(empresa, function (i, item) {
            var empr = '<option value='+item.ID_EMP+'>';
            empr += item.NOMBRE_EMP;
            empr += '</option>';
            $('#CombEmpresa').append(empr);
            $('#Text9').append(empr);
        });

        $('#CombEmpresa').val(selec);
        $('#CombEmpresa').append('<option>Otro</option>');

    }


    BLLEmpresa.Ordenar = function (myArr, indexOne, indexTwo) {
        var tmpVal = myArr[indexOne];
        myArr[indexOne] = myArr[indexTwo];
        myArr[indexTwo] = tmpVal;
        return myArr;
    }
}