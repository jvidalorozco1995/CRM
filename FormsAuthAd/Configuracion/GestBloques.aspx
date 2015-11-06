<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="GestBloques.aspx.cs" Inherits="FormsAuthAd.Configuracion.GestBloques" %>
<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="FeaturedContent" runat="server">
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="MainContent" runat="server">
    <!-- Main Wrapper -->
    <div id="wrapper">
    <!---Contenedor-->
    <div class="content animate-panel">
        <div class="row">
            <!---Panel Informacion General--->
            <div class="col-lg-6" id="Principal">
                <div class="panel panel-success">
                    <div class="panel-heading hbuilt">
                        <div class="pull-right">
                            <div class="form-group">
                                <div class="col-sm-8">
                                    <select id="CombProyectos" style="height: 22px;"><option></option></select></div>
                            </div>
                        </div>
                        Proyectos MultiFox
                    </div>
                    <div class="panel-body" id="Tabla">
                   
                    </div>
                </div>
                </div>
            <div class="col-lg-6">
                <div class="panel panel-danger">
                    <div class="panel-heading">
                        Bloques CRM
                    </div>
                        <div class="panel-body" id="TablaB">
                            <div class="alert alert-danger" role="alert" id="MensajeCRM" style="width: 100%; height: 120px; text-align: center">
                                <h1>CRM - Mayales</h1>
                                <h3>Actualemte no Existen Bloques cargados en el sistema</h3>
                            </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
    </div>
     <script src="../vendor/jquery/dist/jquery.min.js"></script>
    <script src="../vendor/jquery-ui/jquery-ui.min.js"></script>
    <script src="../BLLscripts/BLLBloques.js"></script>
    <script src="js/bloques.js"></script>
</asp:Content>
