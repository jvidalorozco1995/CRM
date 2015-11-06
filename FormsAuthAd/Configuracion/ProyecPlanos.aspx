<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="ProyecPlanos.aspx.cs" Inherits="FormsAuthAd.Configuracion.ProyesPlanos" %>
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
            <div class="col-lg-2" ></div>
            <div class="col-lg-8" id="Principal">
                <div class="panel panel-success">
                    <div class="panel-heading hbuilt">
                        <div class="pull-right">
                        </div>
                        Cargar imagenes
                    </div>
                    <div class="panel-body">

                        <div class="form-group col-lg-6">
                            <label>Proyecto</label>
                            <input type="text" value="" id="TxtProyecto" class="form-control" name="" readonly="">
                        </div>
                        <div class="form-group col-lg-6">
                               <label></label>
                            <input type="file" value="" id="FileUpload" class="form-control" name="">
                        </div>
                        <div class="form-group">
                            <div class="col-sm-8">
                                
                            </div>
                        </div>
                         <div class="form-group">
                            <div class="col-sm-8">
                              <button class="btn btn-danger" type="button" id="BtnGuardar"><i class="fa fa-check"></i>CargarImagen</button> 
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
    <script src="../BLLscripts/BLLUtilidades.js"></script>
    <script src="js/Planos.js"></script>
</asp:Content>
