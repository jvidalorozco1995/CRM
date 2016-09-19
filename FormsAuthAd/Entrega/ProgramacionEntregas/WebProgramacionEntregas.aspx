<%@ Page Title="" Language="C#" MasterPageFile="~/Site.Master" AutoEventWireup="true" CodeBehind="WebProgramacionEntregas.aspx.cs" Inherits="FormsAuthAd.Entrega.ProgramacionEntregas.WebProgramacionEntregas" %>

<asp:Content ID="Content1" ContentPlaceHolderID="HeadContent" runat="server">
</asp:Content>
<asp:Content ID="Content2" ContentPlaceHolderID="FeaturedContent" runat="server">
</asp:Content>

<asp:Content ID="Content3" ContentPlaceHolderID="MainContent" runat="server">
    <div id="wrapper">

        <div class="content animate-panel" style="animation-delay: 0.2s; -webkit-animation-delay: 0.2s;">
            <div class="row">
                <div class="row">
                    <div class="col-sm-4 text-center">
                        <div class="pull-right">
                            <div class="dt-buttons btn-group">

                                <a class="btn btn-default buttons-copy buttons-html5 btn-sm" tabindex="0" aria-controls="example1">
                                    <span>Enviado</span>
                                    <img src='<%= ResolveUrl("../../images_crm/completa.png") %>' style="width: 20px; height: 18px" />
                                </a>
                                <a class="btn btn-default buttons-csv buttons-html5 btn-sm" tabindex="0" aria-controls="example1">
                                    <span>Suspendido</span>
                                    <img src='<%= ResolveUrl("../../images_crm/suspendido.png") %>' style="width: 15px; height: 15px" />
                                </a>


                            </div>
                        </div>
                    </div>
                </div>

                <!---Panel Informacion General--->
                <div class="col-lg-7" id="Principal">
                    <div class="hpanel">
                        <div class="panel-tools">
                            <a class="showhide" style="background: #E50000"><i class="fa fa-chevron-up"></i></a>
                            <a class="Pcreartarea" style="background: #E50000"><i class="fa fa-times"></i></a>
                        </div>
                        <ul class="nav nav-tabs">
                            <div class="pull-right">

                                <button class="btn btn-danger btn-btn-circle" type="button" id="BtnNueva">Nuevo</button>
                                <!---<button class="btn btn-primary " type="button" id="BtnCancelar"><i class="fa fa-check"></i>Nuevo</button>--->
                            </div>
                            <li class="active"><a data-toggle="tab" href="#tab-1">Programacion Entregas</a></li>


                        </ul>
                        <div class="tab-content">
                            <div id="tab-1" class="tab-pane active">
                                <div class="panel-body" id="TablaProgramacion">
                                </div>

                            </div>


                        </div>
                    </div>
                </div>

                <div class="col-lg-5 scroll " style="animation-delay: 0.2s; -webkit-animation-delay: 0.2s;">
                    <div class="panel panel-success">
                        <div class="panel-body" id="datos">
                            <!--DATOS DE SOLICITUDES--->
                            <div class="hpanel" id="Informacion">
                                <div class="panel-heading hbuilt">
                                    <div class="panel-tools">
                                        <a class="showhide"><i class="fa fa-chevron-up"></i></a>
                                        <a class="Pcreartarea"><i class="fa fa-times"></i></a>
                                    </div>
                                    Datos solicitud
                                </div>
                                <div class="Border no-padding">
                                    <div class="tab-content">
                                        <div id="tablainmuebles" class="p-m tab-pane active">
                                        </div>

                                        <div class="row">
                                            <div class="col-lg-12">
                                                <div class="form-group col-lg-4">

                                                    <label>F. Enviado</label>
                                                    <input type="text" value="" id="TxtFechaEnviado" class="form-control" name="" placeholder="" readonly="" />

                                                </div>
                                                <div class="form-group col-lg-4">

                                                    <label>Enviado A:</label>
                                                    <input type="text" value="" id="TxtEnviadoA" class="form-control" name="" placeholder="" readonly="" />

                                                </div>
                                                <div class="form-group col-lg-4">

                                                    <label>Enviado por:</label>
                                                    <input type="text" value="" id="TxtEnviadoPor" class="form-control" name="" placeholder="" readonly="" />

                                                </div>
                                            </div>




                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


            </div>




            <!--Informacion detallada cliente---->
            <%--   <div class="modal fade hmodal-danger" id="infoCLiente" tabindex="-1" role="dialog" aria-hidden="true">
        <div class="modal-dialog">
            <div class="modal-content">
                <div class="color-line"></div>
                <div class="modal-body">
                    <div class="row">
                        <div class="col-lg-12">
                            <div class="form-group col-lg-12">

                                <label>Tipo de documento:</label>
                                <select id="ComTipoDocumento1" title="Filtar tipo de documento" class="form-control" readonly="">
                                    <option></option>
                                </select>

                            </div>
                            <div class="form-group col-lg-12">
                                <label>Tipo de persona:</label>
                                <select id="ComTipoPersona1" title="Filtar tipo de persona" class="form-control  " readonly="">
                                    <option></option>
                                </select>
                            </div>
                            <div class="form-group col-lg-12">
                                <label>Documento de Identidad</label>
                                <input type="text" value="" id="Text1" class="form-control" maxlength="10" autofocus="" readonly="" />
                            </div>
                            <div class="form-group col-lg-6">
                                <label>Nombre</label>
                                <input type="text" value="" id="Text2" class="form-control" name="" placeholder="" readonly="" />
                            </div>
                            <div class="form-group col-lg-6">
                                <label>Primer Apelido</label>
                                <input type="text" value="" id="Text3" class="form-control" placeholder="" readonly="" />
                            </div>
                            <div class="form-group col-lg-6">
                                <label id="label2">Segundo Apellido</label>
                                <input type="text" value="" id="Text4" class="form-control" placeholder="" readonly="" />
                            </div>
                            <div class="form-group col-lg-6">
                                <label id="label4">Estado Civil</label>
                                <select id="Text5" class="form-control" readonly="">
                                    <option>CASADO</option>
                                    <option>SOLTERO</option>
                                    <option>UNION LIBRE</option>
                                    <option>DIVORCIADO</option>
                                </select>
                            </div>
                            <div class="form-group col-lg-6">
                                <label>Direccion de correspondencia</label>
                                <input type="text" value="" id="TxtDireccionCorrespondenicia1" class="form-control" name="" placeholder="" readonly />
                            </div>
                            <div class="form-group col-lg-6">
                                <label>Celular</label>
                                <input type="text" value="" id="TxtCelular1" class="form-control" name="" placeholder="" readonly />
                            </div>
                            <div class="form-group col-lg-6">
                                <label>Direccion de residencia</label>
                                <input type="text" value="" id="Text6" class="form-control" placeholder="" readonly="" />
                            </div>
                            <div class="form-group col-lg-6">
                                <label>Barrio</label>
                                <input type="text" value="" id="Text16" class="form-control" placeholder="" readonly="" />
                            </div>
                            <div class="form-group col-lg-6">
                                <label>Proyecto interes</label>
                                <select id="Txt15" class="form-control" readonly="">
                                </select>
                            </div>
                            <div class="form-group col-lg-6">
                                <label>Telefono </label>
                                <input type="text" value="" id="Text7" class="form-control" name="" placeholder="" readonly="" />
                            </div>
                            <div class="form-group col-lg-6">
                                <label>Correo Elecrtonico</label>
                                <input type="text" value="" id="Text8" class="form-control" name="" placeholder="" readonly="" />
                            </div>
                            <div class="form-group col-lg-6">
                                <label>Empresa donde labora</label>
                                <select id="Text9" class="form-control" readonly="">
                                </select>
                            </div>
                            <div class="form-group col-lg-6">
                                <label>Sueldo</label>
                                <select id="Text10" class="form-control" readonly="">
                                    <option>Seleccionar..</option>
                                    <option>MENOS DE 3'000.000</option>
                                    <option>3'000.000 - 5'999.999</option>
                                    <option>6'000.000 - 9'999.999</option>
                                    <option>10'000.000 EN ADELANTE.</option>
                                </select>
                            </div>
                            <div class="form-group col-lg-6">
                                <label>Presupuesto de Compra</label>
                                <select id="Text11" class="form-control" readonly="">
                                    <option>Seleccionar..</option>
                                    <option>ENTRE 50Y 100 MILLONES</option>
                                    <option>ENTRE 100 A 150 MILLONES</option>
                                    <option>ENTRE 150 A 200 MILLONES</option>
                                    <option>> 200 MILLONES</option>
                                </select>
                            </div>
                            <div class="form-group col-lg-6">
                                <label>Que esta buscando</label>
                                <select id="Text12" class="form-control" readonly="">
                                    <option>Seleccionar..</option>
                                    <option>CASA</option>
                                    <option>APARTAMENTO</option>
                                </select>
                            </div>
                            <div class="form-group col-lg-6">
                                <label id="label3">Le gustaria vivir en</label>
                                <select id="Text17" class="form-control" readonly="">
                                    <option>SELECCIONAR..</option>
                                    <option>Conjunto cerrado</option>
                                    <option>Urabnizacion abierta</option>
                                </select>
                            </div>
                            <div class="form-group col-lg-6">
                                <label id="label5">Motivo de compra</label>
                                <select id="Text18" class="form-control" readonly="">
                                    <option>SELECCIONAR..</option>
                                    <option>Vivienda</option>
                                    <option>Inversion</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="panel-body" style="display: none;" id="Tabla">
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
                    <button type="button" class="btn btn-default" id="BtnEditarC">Editar</button>
                    <button type="button" class="btn btn-warning" id="BtnAdsocioado">Asociado</button>
                    <button type="button" class="btn btn-success" id="BtnGuardarC">Guardar</button>
                </div>
            </div>
        </div>
    </div>--%>

            <!--Modal nueva solicitud--->
            <div class="modal fade hmodal-danger" id="ModalAsignar" tabindex="-1" role="dialog" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="color-line"></div>
                        <div class="modal-header">
                            <h5 class="modal-title">Persona Asociada</h5>

                        </div>
                        <div class="modal-body">
                            <div class="row">
                                <div class="col-lg-12">
                                    <div class="row">
                                        <div class="form-group col-lg-6">
                                            <label>Proyecto:</label>
                                            <select id="ComTipoDocumento1" title="Filtar tipo de documento" class="form-control">
                                                <option></option>
                                            </select>
                                        </div>
                                        <div class="form-group col-lg-6">
                                            <label>Dir Obra:</label>
                                            <select id="ComTipoDocumento1" title="Filtar tipo de documento" class="form-control">
                                                <option></option>
                                            </select>
                                        </div>

                                        <div class="form-group col-lg-12">
                                            <h1>Inmuebles</h1>
                                        </div>

                                        <div class="form-group col-lg-5">
                                            <label id="label10">Manzana</label>
                                            <select id="ComTipoDocumento1" title="Filtar tipo de documento" class="form-control">
                                                <option></option>
                                            </select>
                                        </div>
                                        <div class="form-group col-lg-5">
                                            <label id="label10">Inmueble</label>
                                            <select id="ComTipoDocumento1" title="Filtar tipo de documento" class="form-control">
                                                <option></option>
                                            </select>
                                        </div>
                                        <label id="label10">Inmueble</label>
                                        <div class="form-group col-lg-1">
                                            <button class="btn btn-success " type="button" id="Btnregis_asc">+</button>
                                        </div>


                                    </div>
                                </div>

                            </div>
                        </div>
                        <div class="modal-footer">
                            <button class="btn btn-success " type="button" id="Btnregis_asc">Crear asociado</button>
                            <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>

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
        <script src="../../vendor/jquery/dist/jquery.min.js"></script>
        <script src="../../vendor/jquery-ui/jquery-ui.min.js"></script>
        <script src="https://maps.googleapis.com/maps/api/js?v=3.exp"></script>
        <link rel="stylesheet" href="../vendor/sweetalert/lib/sweet-alert.css" />
        <link rel="stylesheet" href="../vendor/toastr/build/toastr.min.css" />
        <link rel="stylesheet" href="../styles_crm/static_custom.css">
        <script src="../../gmaps/gmap3.js"></script>

        <script src="../../vendor/sweetalert/lib/sweet-alert.min.js"></script>
        <script src="../../vendor/toastr/build/toastr.min.js"></script>
        <script src="../../vendor/moment/moment.js"></script>
        <script src="../../vendor/select2-3.5.2/select2.min.js"></script>
        <script src="../../vendor/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.min.js"></script>
        <script src="../../vendor/bootstrap-datepicker-master/dist/js/bootstrap-datepicker.min.js"></script>

        <script src="../../BLLscripts/BLLUtilidades.js"></script>
        <script src="../../BLLscripts/BLLEntregas.js"></script>
        <script src="js/ProgramacionEntregas.js"></script>
        <script src="../../scripts_crm/bootstrap-datepicker.js"></script>
        <script src="../../scripts_crm/accounting.js"></script>
</asp:Content>
