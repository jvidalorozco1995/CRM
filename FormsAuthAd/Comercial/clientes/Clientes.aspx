<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="Clientes.aspx.cs" Inherits="FormsAuthAd.Comercial.clientes.Clientes" %>
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
            <div class="col-lg-7" id="Principal">
                <div class="panel panel-danger">
                    <div class="panel-heading hbuilt">
                        General de clientes
                        <div class="pull-right">

                            <div class="form-group">
                                <div class="col-sm-12">
                                    <input id="Txtinico" style="height: 22px;width:90px" type="text" placeholder="Fecha inicio" title="Filtar proyectos">
                                    <input id="Txtfin" style="height: 22px;width:90px" type="text" placeholder="Fecha fin" title="Filtar proyectos">
                                    <select id="ComProyect" style="height: 22px;width:100px"  title="Filtar proyectos">
                                       <option>
                                            Seleccione proyecto...
                                       </option>
                                    </select>
                                    <select id="CombAsesores" style="height: 22px;width:100px" title="Filtar asesores">
                                       
                                    </select>
                                    <button type="button" id="BtnFiltar" class="btn btn-success btn-xs">Filtar</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="pull-righ">
                        <div class="col-lg-6 animated-panel zoomIn" style="animation-delay: 0.5s; -webkit-animation-delay: 0.5s; padding-top: 10px">
                            <div data-toggle="buttons" class="btn-group">
                             <button class="btn btn-danger btn-xs" type="button" id="Btnvencido">Vencido</button>
                             <button class="btn btn-success btn-xs" type="button" id="Btnterminada">Atendidas</button>
                             <button class="btn btn-warning btn-xs" type="button" id="Btnespera">No atendidas</button>
                             <button class="btn btn-warning btn-xs" type="button" id="Btnpospuesta" style="background:#E67E22">Pospuesta</button>
                            </div>
                        </div>
                    </div>
                
                    <div class="panel-body" id="clientesData">
                  
                    </div>
                    <div class="panel-footer">
                        <img src='<%= ResolveUrl("../../images_crm/excel.png") %>' / class="excel">
                        
                    </div>
                 </div>
            </div>
            <div class="col-lg-5" id="historial">
                <div class="panel panel-danger">
                    <div class="panel-heading hbuilt">
                        Historial detallado de tarea
                    </div>
                    <div class="panel-body" id="Historial">
                    </div>
                </div>

            </div>
        </div>
        </div>
         <div class="modal fade hmodal-danger" id="infoTareas" tabindex="-1" role="dialog" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="color-line"></div>
                    <div class="modal-header">
                        <h5 class="modal-title">Detalles de Tarea</h5>

                    </div>
                    <div class="modal-body">
                        <div class="row">
                            <div class="form-group col-lg-12">
                                <label>Id de tarea</label>
                                <input type="text" value="" id="TxtIdTarea" class="form-control" readonly="">
                            </div>
                            <div class="col-lg-12">
                                <div class="row">
                                    <div class="form-group col-lg-6">
                                        <label>Descricpion de Tarea</label>
                                        <textarea id="Txtdetalle" class="form-control" rows="2" cols="3" readonly=""></textarea>
                                    </div>
                                    <div class="form-group col-lg-6">
                                        <label>Fecha de inicio tarea</label>
                                        <input id="fechainfo" type="text" value="" class="form-control" readonly="">
                                    </div>
                                     <div class="form-group col-lg-12">
                                        <label id="labelfin">Fecha de Finalazacion</label>
                                        <input id="Fechafin" type="text" value="" class="form-control" readonly="">
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div style="border-top:solid;color:#E50000"><h4>Historial de tarea</h4></div>
                        <div id="TablaBitacoras">
                        </div>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-default" data-dismiss="modal">Cancelar</button>

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
                                        <input type="text" value="" id="Text1" class="form-control" maxlength="10" autofocus="" readonly/>
                                    </div>
                                    <div class="form-group col-lg-6">
                                        <label>Nombre</label>
                                        <input type="text" value="" id="Text2" class="form-control" name="" placeholder="" readonly/>
                                    </div>
                                    <div class="form-group col-lg-6">
                                        <label>Primer Apelido</label>
                                        <input type="text" value="" id="Text3" class="form-control" placeholder="" readonly/>
                                    </div>
                                    <div class="form-group col-lg-6">
                                        <label id="label2">Segundo Apellido</label>
                                        <input type="text" value="" id="Text4" class="form-control" placeholder="" readonly/>
                                    </div>
                                    <div class="form-group col-lg-6">
                                        <label id="label3">Estado Civil</label>
                                        <input type="text" value="" id="Text5" class="form-control" placeholder="" readonly/>
                                    </div>
                                    <div class="form-group col-lg-6">
                                        <label>Direccion de resicencia</label>
                                        <input type="text" value="" id="Text6" class="form-control" placeholder="" readonly/>
                                    </div>
                                    <div class="form-group col-lg-6">
                                        <label>Telefono Celular</label>
                                        <input type="text" value="" id="Text7" class="form-control" name="" placeholder="" readonly/>
                                    </div>
                                    <div class="form-group col-lg-6">
                                        <label>Correo Electronico</label>
                                        <input type="text" value="" id="Text8" class="form-control" name="" placeholder="" readonly>
                                    </div>
                                  <div class="form-group col-lg-6">
                                        <label>Empresa donde labora</label>
                                        <input type="text" value="" id="Text9" class="form-control" name="" placeholder="" readonly/>
                                    </div>
                                    <div class="form-group col-lg-6">
                                        <label>Sueldo</label>
                                       <input type="text" value="" id="Text10" class="form-control" placeholder="" readonly/>
                                    </div>
                                    <div class="form-group col-lg-6">
                                        <label>Presupuesto de Compra</label>
                                     <input type="text" value="" id="Text11" class="form-control" placeholder="" readonly/>
                                    </div>
                                    <div class="form-group col-lg-6">
                                        <label>Que esta buscando</label>
                                       <input type="text" value="" id="Text12" class="form-control" placeholder="" readonly/>
                                    </div>
                                    <div class="form-group col-lg-6">
                                        <label>Le gustaria vivir:</label>
                                     <input type="text" value="" id="Text13" class="form-control" placeholder="" readonly/>
                                    </div>
                                     <div class="form-group col-lg-6">
                                        <label>Motivo de compra:</label>
                                       <input type="text" value="" id="Text14" class="form-control" placeholder="" readonly/>
                                    </div>
                                     <div class="form-group col-lg-6">
                                        <label>Asesor:</label>
                                    <select id="CombAsesores2" title="Filtar asesores" class="form-control">
                                       <option>
                                            Seleccione asesor...
                                       </option>
                                    </select>
                                    </div>
                                     <div class="form-group col-lg-12">
                                        <label>Proyecto de interes:</label>
                                    <select id="ComProyect2" title="Filtar proyectos" class="form-control">
                                       <option>
                                            Seleccione proyecto...
                                       </option>
                                    </select>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div class="modal-footer">
                             <button type="button" id="BtnActualizarCliente" class="btn btn-primary">Actualizar</button>
                            <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script src="../../vendor/jquery/dist/jquery.min.js"></script>
    <script src="../../vendor/jquery-ui/jquery-ui.min.js"></script>
     <script src="../../vendor/select2-3.5.2/select2.min.js"></script>
    <script src="../../vendor/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.min.js"></script>
    <script src="../../vendor/bootstrap-datepicker-master/dist/js/bootstrap-datepicker.min.js"></script>
    <script src="../../BLLscripts/BLLUtilidades.js"></script>
    <script src="../../BLLscripts/BLLTrabajadores.js"></script>
    <script src="../../BLLscripts/BLLProyectos.js"></script>
    <script src="../../BLLscripts/BLLTareas.js"></script>
    <script src="../../BLLscripts/BLLClientes.js"></script>
    
    <script src="js/clientes.js"></script>
</asp:Content>

