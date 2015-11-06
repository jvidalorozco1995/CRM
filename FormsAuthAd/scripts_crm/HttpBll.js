var Data;
var HttpBll = function () {
    
};

HttpBll.prototype = {

    _Ajax: function (uri, type, data, op) {
        switch (op) {
            case 0:
                alert('0')
                $.ajax({
                    type: type, url: uri, data: data,
                    contentType: "application/json; charset=utf-8",
                    dataType: 'json',
                    async: true,
                    success: function (result) { Data = result.d; alert(JSON.stringify(Data.d)) },
                    error: function (msg) { alert(msg.responseText); }
                });
                break
            case 1:
                alert('1')
                $.ajax({
                    type: type, url: uri,
                    contentType: "application/json; charset=utf-8",
                    dataType: 'json',
                    async: true,
                    success: function (result) { Data = result.d; alert(JSON.stringify(Data.d)) },
                    error: function (msg) { alert(msg.responseText); }
                });
                break

        }
   

        return Data;
   },

};
