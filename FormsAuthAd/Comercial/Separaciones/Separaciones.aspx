<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Separaciones.aspx.cs" Inherits="FormsAuthAd.Comercial.Separaciones.Sepraciones" %>
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
            
            <div class="col-lg-12" id="Principal" style="padding-left:1%">
                <div class="panel panel-danger">
                    <div class="panel-heading hbuilt">
                       Sepraciones
                        <div class="pull-right">
                            <div class="form-group">
                                <div class="col-sm-12">
                                    <input id="Txtinico" style="height: 22px;width:90px" type="text" title="Filtar proyectos">
                                    <input id="Txtfin" style="height: 22px;width:90px" type="text" title="Filtar proyectos">
                                    <select id="ComProyect" style="height: 22px;width:100px" title="Filtar proyectos"><option></option></select>
                                    <select id="CombAsesores" style="height: 22px;width:100px" title="Filtar asesores"></select>
                                    <button type="button" id="BtnFiltar" class="btn btn-success btn-xs">Filtar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                <%--    <div class="pull-righ">
                        <div class="col-lg-6 animated-panel zoomIn" style="animation-delay: 0.5s; -webkit-animation-delay: 0.5s; padding-top: 10px">
                            <div data-toggle="buttons" class="btn-group">
                             <button class="btn btn-danger btn-xs" type="button" id="Btnvencido">Vencido</button>
                             <button class="btn btn-warning  btn-xs" type="button" id="Btnterminada">Desistido</button>
                              <button class="btn btn-success btn-xs" type="button" id="Btnespera">Compradas</button>
                            </div>
                        </div>
                    </div>
                --%>
                    <div class="panel-body" id="sepraciones">
                  
                    </div>
                    <div class="panel-footer">
                        <img src="../../images_crm/excel.png"/ class="excel">
                   </div>
                 </div>
            </div>
                    
        </div>
        </div>
        <div class="modal fade hmodal-danger" id="detalleseparacion" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="color-line"></div>
                    <div class="modal-header">
                        <h5 class="modal-title">Detalles de sepracion</h5>

                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="row">
                                    <div class="form-group col-lg-6">
                                        <label>Cliente</label>
                                        <input id="TxtclienteS" class="form-control" readonly="" />
                                    </div>
                                    <div class="form-group col-lg-6">
                                        <label>Proyecto interes</label>
                                        <input id="TxtintereS" type="text" value="" class="form-control" readonly="">
                                    </div>
                                     <div class="form-group col-lg-6">
                                        <label id="labelfin">Inmueble</label>
                                        <input id="TxtinmuebleS" type="text" value="" class="form-control" readonly="">
                                    </div>
                                    <div class="form-group col-lg-6">
                                        <label id="label2">Fecha de incio de negocio</label>
                                        <input id="Txtnegocio" type="text" value="" class="form-control" readonly="">
                                    </div>
                                    <div class="form-group col-lg-6">
                                        <label id="label3">Estado de negociacion</label>
                                        <input id="TxtEstado" type="text" value="" class="form-control" readonly="">
                                    </div>
                                </div>
                            </div>

                        </div>
                      </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>

                    </div>
                </div>
            </div>
        </div>

                 <!--Informacion detallada cliente---->
        <div class="modal fade hmodal-danger" id="infoCLiente" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="color-line"></div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="row">
                                    <div class="form-group col-lg-12">
                                        <label>Documento de Identidad</label>
                                        <input type="text" value="" id="Text1" class="form-control" maxlength="10" autofocus=""/>
                                    </div>
                                    <div class="form-group col-lg-6">
                                        <label>Nombre</label>
                                        <input type="text" value="" id="Text2" class="form-control" name="" placeholder=""/>
                                    </div>
                                    <div class="form-group col-lg-6">
                                        <label>Primer Apelido</label>
                                        <input type="text" value="" id="Text3" class="form-control" placeholder=""/>
                                    </div>
                                    <div class="form-group col-lg-6">
                                        <label id="label1">Segundo Apellido</label>
                                        <input type="text" value="" id="Text4" class="form-control" placeholder=""/>
                                    </div>
                                    <div class="form-group col-lg-6">
                                        <label id="label4">Estado Civil</label>
                                        <input type="text" value="" id="Text5" class="form-control" placeholder=""/>
                                    </div>
                                    <div class="form-group col-lg-6">
                                        <label>Direccion de resicencia</label>
                                        <input type="text" value="" id="Text6" class="form-control" placeholder=""/>
                                    </div>
                                    <div class="form-group col-lg-6">
                                        <label>Telefono Celular</label>
                                        <input type="text" value="" id="Text7" class="form-control" name="" placeholder="" />
                                    </div>
                                    <div class="form-group col-lg-6">
                                        <label>Correo Elecrtonico</label>
                                        <input type="text" value="" id="Text8" class="form-control" name="" placeholder="">
                                    </div>
                                  <div class="form-group col-lg-6">
                                        <label>Empresa donde labora</label>
                                        <input type="text" value="" id="Text9" class="form-control" name="" placeholder=""/>
                                    </div>
                                    <div class="form-group col-lg-6">
                                        <label>Sueldo</label>
                                       <input type="text" value="" id="Text10" class="form-control" placeholder=""/>
                                    </div>
                                    <div class="form-group col-lg-6">
                                        <label>Presupuesto de Compra</label>
                                     <input type="text" value="" id="Text11" class="form-control" placeholder=""/>
                                    </div>
                                    <div class="form-group col-lg-6">
                                        <label>Que esta buscando</label>
                                       <input type="text" value="" id="Text12" class="form-control" placeholder=""/>
                                    </div>
                                    <div class="form-group col-lg-6">
                                        <label>Le gustaria vivir:</label>
                                     <input type="text" value="" id="Text13" class="form-control" placeholder=""/>
                                    </div>
                                     <div class="form-group col-lg-6">
                                        <label>Motivo de compra:</label>
                                       <input type="text" value="" id="Text14" class="form-control" placeholder=""/>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script src="../../Scripts/jquery-1.8.2.min.js"></script>
    <script src="../../Scripts/jquery-ui-1.8.24.min.js"></script>
    <script src="../../BLLscripts/BLLTrabajadores.js"></script>
    <script src="../../BLLscripts/BLLProyectos.js"></script>
    <script src="../../BLLscripts/BLLUtilidades.js"></script>
    <script src="../../BLLscripts/BLLClientes.js"></script>
    <script src="../../BLLscripts/BLLInmuebles.js"></script>
    <script src="js/sepracion.js"></script>
</asp:Content>
