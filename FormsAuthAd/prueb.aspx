<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="prueb.aspx.cs" Inherits="FormsAuthAd.prueb" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
    <title></title>

<script type="text/javascript" src="scripts/jquery-1.8.2.min.js"></script>
<script type="text/javascript" src="scripts/jquery.uploadify.js"></script>
    
    <script type = "text/javascript">
        $(function () {
            $('#btnUpload').click(function () {
                var fileUpload = $("#FileUpload1").get(0);
                var files = fileUpload.files;
                var test = new FormData();
                for (var i = 0; i < files.length; i++) {
                    test.append(files[i].name, files[i]);
                }
                $.ajax({
                    url: "../../handler/SubirArchivoHandler.ashx",
                    type: "POST",
                    contentType: false,
                    processData: false,
                    data: test,
                    // dataType: "json",
                    success: function (result) {
                        alert(result);
                    },
                    error: function (err) {
                        alert(err.statusText);
                    }
                });
            });
    }
);
    </script>
</head>
<body>
<form id="form1" runat="server">
<div>
<input type="file" id="FileUpload1" />
<input type="button" id="btnUpload" value="Upload Files"/>
</div>
</form>
</body>
</html>
