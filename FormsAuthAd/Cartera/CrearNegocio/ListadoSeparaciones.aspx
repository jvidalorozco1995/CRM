<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="ListadoSeparaciones.aspx.cs" Inherits="FormsAuthAd.Cartera.CrearNegocio.ListadoSeparaciones" %>




<asp:Content ID="Content4" ContentPlaceHolderID="HeadContent" runat="server">

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
    <script src="../../vendor/toastr/build/toastr.min.js"></script>
    <script src="../../vendor/moment/moment.js"></script>
    <script src="../../vendor/select2-3.5.2/select2.min.js"></script>
    <script src="../../vendor/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.min.js"></script>
    <script src="../../vendor/bootstrap-datepicker-master/dist/js/bootstrap-datepicker.min.js"></script>
    <script src="../../scripts_crm/accounting.js"></script>
    <script src="../../BLLscripts/BLLUtilidades.js"></script>
    <script src="../../scripts_crm/HttpBll.js"></script>
    <script src="../../BLLscripts/BLLActInmuebles.js"></script>
    <script src="../../BLLscripts/BLLInmuebles.js"></script>
    <script src="../../BLLscripts/BLLnegocio.js"></script>
    <script src="js/GestCartera.js"></script>

</asp:Content>
<asp:Content ID="Content5" ContentPlaceHolderID="FeaturedContent" runat="server">
</asp:Content>
<asp:Content ID="Content6" ContentPlaceHolderID="MainContent" runat="server">
    <div id="wrapper">

            <div class="content animate-panel">
            <div class="row">
                <!---Panel Informacion General--->
                <div class="col-lg-7" id="Principal">
                    <div class="hpanel">
                        <div class="panel-tools">
                            <a class="showhide" style="background: #E50000"><i class="fa fa-chevron-up"></i></a>
                            <a class="Pcreartarea" style="background: #E50000"><i class="fa fa-times"></i></a>
                        </div>
                        <ul class="nav nav-tabs">
                            <li class="active"><a data-toggle="tab" href="#tab-100">Separaciónes</a></li>
                        </ul>
                        <div class="tab-content">
                            <div id="tab-100" class="tab-pane active">
                                <div class="panel-body" id="sepraciones">
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

        
            </div>
        </div>

            <div class="modal fade hmodal-danger" id="asociadoModal" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="color-line"></div>
                        <div class="modal-header">
                            <h5 class="modal-title">Persona Asociadas</h5>
                        </div>
                        <div class="modal-body" id="asociados">
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="modal fade hmodal-danger" id="FechasPagos" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="color-line"></div>
                        <div class="modal-header">
                            <h5 class="modal-title"></h5>
                        </div>
                        <div class="modal-body" id="">
                            <div class="form-group">
                                <label class="control-label">Fecha Actual</label>
                                <input type="text" value="" id="fechAc" class="form-control" name="" readonly="">
                            </div>
                            <div class="form-group">
                                <label class="control-label">Nueva fecha</label>
                                <input type="text" value="" id="nuevafc" class="form-control" name="">
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
                            <button type="button" class="btn btn-success" id="Btnfecha">Cambiar fecha</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    



    <style type="text/css">
        .scroll {
            height: 700px;
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
