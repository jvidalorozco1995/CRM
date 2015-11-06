<%@ Page Language="C#" AutoEventWireup="true" CodeBehind="Logon.aspx.cs" Inherits="FormsAuthAd.Logon" %>

<!DOCTYPE html>

<html xmlns="http://www.w3.org/1999/xhtml">
<head runat="server">
<meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
    <title>CRM | Mayales</title>
    <!-- Vendor styles -->
    <link rel="stylesheet" href="vendor/fontawesome/css/font-awesome.css" />
    <link rel="stylesheet" href="vendor/metisMenu/dist/metisMenu.css" />
    <link rel="stylesheet" href="vendor/animate.css/animate.css" />
    <link rel="stylesheet" href="vendor/bootstrap/dist/css/bootstrap.css" />

    <!-- App styles -->
    <link rel="stylesheet" href="fonts/pe-icon-7-stroke/css/pe-icon-7-stroke.css" />
    <link rel="stylesheet" href="fonts/pe-icon-7-stroke/css/helper.css" />
    <link rel="stylesheet" href="styles_crm/style.css"/>
</head>
<body class="blank">

<!-- Simple splash screen-->
<div class="splash"> <div class="color-line"></div><div class="splash-title"><h1>CRM - mayales </h1><p>Espere un momento por favor. </p><img src="images_crm/loading-bars.svg" width="64" height="64" /> </div> </div>

<div class="color-line"></div>
    <div class="login-container">
    <div class="row">
        <div class="col-md-12">
            <div class="text-center m-b-md">
                <h3>CRM- Mayales</h3>
            </div>
            <div class="hpanel">
                <div class="panel-body">
                    <form id="Login" method="post" runat="server">
                        <div class="form-group">
                            <asp:Label ID="Label2" runat="server" CssClass="control-label">Username:</asp:Label>
                            <asp:TextBox ID="txtUsername" runat="server" CssClass="form-control"></asp:TextBox>
                             <asp:RequiredFieldValidator ID="RequiredFieldValidator1" runat="server" ControlToValidate="txtUsername"
                              CssClass="field-validation-error" ErrorMessage="El campo usuario es obligatorio" />
                        </div>
                        <div class="form-group">
                            <asp:Label ID="Label3" runat="server" CssClass="control-label">Password:</asp:Label>
                            <asp:TextBox ID="txtPassword" runat="server" TextMode="Password" CssClass="form-control"></asp:TextBox>
                             <asp:RequiredFieldValidator ID="RequiredFieldValidator2" runat="server" ControlToValidate="txtPassword"
                              CssClass="field-validation-error" ErrorMessage="El campo contraseña es obligatorio" SetFocusOnError="True" />
                        </div>
                        <div class="form-group">
                            <asp:Button ID="Button1" runat="server" Text="Iniciar" OnClick="Login_Click" CssClass="btn btn-danger btn-block"></asp:Button>
                        </div>
                          <asp:Label ID="errorLabel" Runat="server" ForeColor="#ff3300" CssClass="control-label"></asp:Label>
                          
                     </form>	
                </div>
            </div>
        </div>
    </div>
    <div class="row">
    </div>
</div>
 </body>
    <script src="vendor/jquery/dist/jquery.min.js"></script>
<script src="vendor/jquery-ui/jquery-ui.min.js"></script>
<script src="vendor/slimScroll/jquery.slimscroll.min.js"></script>
<script src="vendor/bootstrap/dist/js/bootstrap.min.js"></script>
<script src="vendor/metisMenu/dist/metisMenu.min.js"></script>
<script src="vendor/iCheck/icheck.min.js"></script>
<script src="vendor/sparkline/index.js"></script>

<!-- App scripts -->
<script src="scripts_crm/homer.js"></script>
</html>

