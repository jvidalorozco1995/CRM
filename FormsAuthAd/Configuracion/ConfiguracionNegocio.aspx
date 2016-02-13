<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="ConfiguracionNegocio.aspx.cs" Inherits="FormsAuthAd.Configuracion.ConfiguracionNegocio" %>
<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="FeaturedContent" runat="server">
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="MainContent" runat="server">
    <div id="wrapper">
    <!---Contenedor-->
    <div class="content animate-panel">
        <div class="row">
            <!---Panel Informacion General--->
            <div class="col-lg-7" id="Principal">
                <div class="panel panel-danger">
                    <div class="panel-heading hbuilt">
                        Nota Aclaratoria
                    </div>
                    <div class="pull-righ">
                        <div class="col-lg-12 animated-panel zoomIn" style="animation-delay: 0.5s; -webkit-animation-delay: 0.5s; padding-top: 10px">
                          <div class="panel-body">
                        <div class="row">
                            <div class="form-group col-lg-12">
                                <label>Descripción Aclaratoria</label>
                                <textarea id="TxtDesConfiguracionNegocio" style="height:400px;" class="form-control"></textarea>
                            </div>
                        
                        </div>
                        <div class="text-right m-t-xs">
                            <button class="btn btn-danger" type="button" id="BtnGuardar"><i class="fa fa-check"></i>Guardar</button>
                        </div>
                    </div>
                        </div>
                    </div>
                
                    <div class="panel-body">
                  
                    </div>
                 </div>
            </div>
            <div class="col-lg-5" id="historial">
                <div class="panel panel-danger">
                    <div class="panel-heading hbuilt">
                        Lista de notas aclaratorias
                    </div>
                    <div class="panel-body" id="HistorialNotas">
                    </div>
                </div>

            </div>
        </div>
    </div>
   </div>
    <script src="../vendor/jquery/dist/jquery.min.js"></script>
    <script src="../vendor/jquery-ui/jquery-ui.min.js"></script>
    <script src="../BLLscripts/BLLUtilidades.js"></script>
    <script src="../BLLscripts/BLLConfiguracion_Negocio.js"></script>
    <script src="../BLLscripts/BLLProyectos.js"></script>
    <script src="js/ConfiguracionNegocio.js"></script>
</asp:Content>
