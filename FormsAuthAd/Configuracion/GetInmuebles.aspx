<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="GetInmuebles.aspx.cs" Inherits="FormsAuthAd.Configuracion.GetInmuebles" %>
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
                            <select id="CombProyectos" style="height: 22px;">
                                <option></option>
                            </select>
                            <select id="CombBloques" style="height: 22px;">
                                <option></option>
                            </select>
                        </div>
                        Inmuebles MultiFox
                    </div>
                    <div class="panel-body" id="Tabla">
                   
                    </div>
                    <div class="panel-footer">
                      <button class="btn btn-danger btn-btn-circle" type="button" id="BtnInmueble">Cargar Inmuebles a CRM</button>
                      <button class="btn btn-success btn-btn-circle" type="button" id="BtnActualizar">Actualizar Inmuebles CRM</button>
                      <img src="../Images/loading.gif" style="height:40px;width:40px;" id="Cargando"/>
                    </div>
                </div>
                </div>
            <div class="col-lg-6" id="inmuebles">
                <div class="panel panel-danger">
                    <div class="panel-heading">
                        <div class="panel-tools">
                        </div>
                        Inmuebles CRM
                    </div>
                    <div class="panel-body" id="TablaIm">
                    </div>
                    <div class="panel-footer">
                      
                    </div>
                </div>
            </div>
            </div>
        </div>
      </div>
    <script src="../vendor/jquery/dist/jquery.min.js"></script>
    <script src="../vendor/jquery-ui/jquery-ui.min.js"></script>
    <script src="../scripts_crm/accounting.js"></script>
    <script src="../BLLscripts/BLLUtilidades.js"></script>
    <script src="../BLLscripts/BLLActInmuebles.js"></script>
    <script src="../BLLscripts/BLLInmuebles.js"></script>
    <script src="../BLLscripts/BLLBloques.js"></script>
    <script src="js/inmuebles.js"></script>
 </asp:Content>
