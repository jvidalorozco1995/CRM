<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="GesNegocio.aspx.cs" Inherits="FormsAuthAd.Cartera.GesNegocio" %>
<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="FeaturedContent" runat="server">
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="MainContent" runat="server">
    <!-- Main Wrapper -->
    <div id="wrapper">
        <div class="content animate-panel">

            <div class="row" id="result">
            </div>
        </div>
    </div>

    <script src="../../vendor/jquery/dist/jquery.min.js"></script>
    <script src="../../vendor/jquery-ui/jquery-ui.min.js"></script>
    <script src="../../gmaps/gmap3.min.js"></script>
    <script src="../../BLLscripts/BLLTrabajadores.js"></script>
    <script src="../../BLLscripts/BLLProyectos.js"></script>
    <script src="../../BLLscripts/BLLUtilidades.js"></script>
    <script src="../js/negocioProyecto.js"></script>
</asp:Content>
