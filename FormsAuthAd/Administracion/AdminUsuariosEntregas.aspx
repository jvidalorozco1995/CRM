<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="AdminUsuariosEntregas.aspx.cs" Inherits="FormsAuthAd.Administracion.AdminUsuariosEntregas" %>
<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="FeaturedContent" runat="server">
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="MainContent" runat="server">
     <div id="wrapper">
        <!---Contenedor-->
        <div class="content animate-panel">
            <div class="row">
                <div class="col-lg-12" id="Principal">
                    <div class="hpanel">
                        <ul class="nav nav-tabs">
                            <li class="active"><a data-toggle="tab" href="#tab-1" id="usuarioms">usuarios</a></li>
                          
                        </ul>
                        <div class="tab-content">
                            <!--tab1-->
                            <div id="tab-1" class="tab-pane active">
                                
                                <div class="panel-body" id="Tablauser">
                                    
                                </div>
                            </div>
                          
                           </div>
                        </div>
                    </div>
                </div>
            </div>
         </div>
    
    <script src="../vendor/jquery/dist/jquery.min.js"></script>
    <script src="../vendor/jquery-ui/jquery-ui.min.js"></script>
    <link rel="stylesheet" href="../vendor/sweetalert/lib/sweet-alert.css" />
    <link rel="stylesheet" href="../vendor/toastr/build/toastr.min.css" />
    <link rel="stylesheet" href="../styles_crm/static_custom.css">
     <script src="../BLLscripts/BLLUtilidades.js"></script>
    <script src="../BLLscripts/BLLUsuariosEntregas.js"></script>
    <script src="js/Entregas.js"></script>
</asp:Content>
