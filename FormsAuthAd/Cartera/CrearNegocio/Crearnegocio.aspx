<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Crearnegocio.aspx.cs" Inherits="FormsAuthAd.Cartera.Crearnegocio" %>
<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">

     <script src='<%= ResolveUrl("../../vendor/jquery/dist/jquery.min.js") %>'></script>
    <script src='<%= ResolveUrl("../../scripts/jquery-1.11.1.min.js") %>'></script>
    <script src='<%= ResolveUrl("../../jqwidgets/jqxcore.js") %>'></script>
    <script src='<%= ResolveUrl("../../jqwidgets/jqxdatatable.js") %>'></script>
    <script src='<%= ResolveUrl("../../jqwidgets/jqxdata.js") %>'></script>
    <script src='<%= ResolveUrl("../../jqwidgets/jqxgrid.js") %>'></script>
    <script src='<%= ResolveUrl("../../jqwidgets/jqxgrid.pager.js") %>'></script>
    <script src='<%= ResolveUrl("../../jqwidgets/jqxscrollbar.js") %>'></script>
    <script src='<%= ResolveUrl("../../jqwidgets/jqxbuttons.js") %>'></script>
    <script src='<%= ResolveUrl("../../jqwidgets/jqxlistbox.js") %>'></script>
    <script src='<%= ResolveUrl("../../jqwidgets/jqxgrid.edit.js") %>'></script>
    <script src='<%= ResolveUrl("../../jqwidgets/jqxinput.js") %>'></script>
    <script src='<%= ResolveUrl("../../jqwidgets/jqxcalendar.js") %>'></script>
    <script src='<%= ResolveUrl("../../jqwidgets/jqxdatetimeinput.js") %>'></script>
    <script src='<%= ResolveUrl("../../jqwidgets/jqxgrid.selection.js") %>'></script>
    <script src='<%= ResolveUrl("../../jqwidgets/jqxdropdownlist.js") %>'></script>

    <link rel="stylesheet" href="../../jqwidgets/styles/jqx.base.css" />
    <script src="../../../vendor/toastr/build/toastr.min.js"></script>
    <script src="../../../vendor/moment/moment.js"></script>
    <script src="../../../vendor/select2-3.5.2/select2.min.js"></script>
    <script src="../../../vendor/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.min.js"></script>
    <script src="../../../vendor/bootstrap-datepicker-master/dist/js/bootstrap-datepicker.min.js"></script>
    <script src="../../../scripts_crm/accounting.js"></script>
    <script src="../../../BLLscripts/BLLUtilidades.js"></script>
    <script src="../../../scripts_crm/HttpBll.js"></script>
    <script src="../../../../BLLscripts/BLLActInmuebles.js"></script>
    <script src="../../../../BLLscripts/BLLInmuebles.js"></script>
    <script src="../../../../BLLscripts/BLLnegocio.js"></script>
    <script src="../js/GestCartera.js"></script>


</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="FeaturedContent" runat="server">
</asp:Content>
<asp:Content ID="Content3" ContentPlaceHolderID="MainContent" runat="server">
    <div id="wrapper">
        CargarN
        <div class="content animate-panel"  style="animation-delay: 0.2s; -webkit-animation-delay: 0.2s;">
            <div class="row">
                <!---Panel Informacion General--->
                <div class="col-lg-7" id="Principal">
                    <div class="hpanel">
                        <div class="panel-tools">
                            <a class="showhide" style="background: #E50000"><i class="fa fa-chevron-up"></i></a>
                            <a class="Pcreartarea" style="background: #E50000"><i class="fa fa-times"></i></a>
                        </div>
                        <ul class="nav nav-tabs">

                            <li class="active"><a data-toggle="tab" href="#tab-1">Clientes</a></li>


                        </ul>
                        <div class="tab-content">
                            <div id="tab-1" class="tab-pane active">
                                <div class="panel-body" id="sepraciones">
                                </div>
                           </div>
                         </div>
                    </div>
                </div>

                
            </div>
           
        </div>
        <!--Modal del los crear negocios-->

    </div>

 
            
<style type="text/css">
    .scroll {
        height:700px;
        overflow: scroll;
    }
    .Border {
  background: #fff;
  border: 1.5px solid #E50000;
  border-radius: 2px;
  padding: 10px;
  position: relative;
}
</style>

</asp:Content>
