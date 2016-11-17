using BLLCRM;
using DAL;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Web.Script.Services;
using System.Web.Services;
using Word = Microsoft.Office.Interop.Word;

namespace FormsAuthAd.Servicios
{
    /// <summary>
    /// Summary description for WEntregas
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
     [System.Web.Script.Services.ScriptService]

    public class WEntregas : System.Web.Services.WebService
    {
        public Microsoft.Office.Interop.Word.Document wordDocument { get; set; }
        [WebMethod]
        public string HelloWorld()
        {
            return "Hello World";
        }
        BLLEntregas cl = new BLLEntregas();
        BLLInmueblesEntrega ie = new BLLInmueblesEntrega();

        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public string InsertEntregas(Entregas b, List<INMUEBLES_ENTREGAS> lista)
        {
            return cl.InserEntregas(b, lista);
        }
        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public int UpdateEntregas(int i)
        {
            return cl.UpdateEntregas(i);
        }
        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public int UpdateIEestados(int i, INMUEBLES_ENTREGAS idIE)
        {
            return ie.UpdateIEestados(i, idIE);
        }
        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public List<Entregas> ListEntregasID(int id)
        {
            return cl.ListEntregas(id);
        }
        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public List<Entregas> ListEntregas()
        {
            return cl.ListEntregas();
        }
        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public List<Entregas> ListEntregasPor()
        {
            return cl.ListEntregasPor();
        }
        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public int InsertInmuebleEntregas(INMUEBLES_ENTREGAS b)
        {
            return ie.InserInmueblesEntregas(b);
        }
        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public int UpdateInmuebleEntregas(INMUEBLES_ENTREGAS i)
        {
            return ie.UpdateInmueblesEntregas(i);
        }
        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public List<VListadoEntregas> ListInmueblesEntregasID( int id)
        {
            return ie.ListInmueblesEntregas(id);
        }
         [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public List<VListadoEntregas> ListInmueblesEntregasproyecto(int p)
        {
            return ie.ListInmueblesEntregasproyecto(p);
        }
        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public int ValidaReferencia(string Referencia)
        {
            return ie.ValidaReferencia(Referencia);
        }
        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public int ConfirmaObservaciones(List<INMUEBLES_ENTREGAS> a)
        {
            return ie.ConfirmaObservaciones(a);
        }
        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public List<VListadoEntegrasC> ListEntregasC()
        {
            return cl.ListEntregasC();
        }
        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public List<Vistablackboard> LisInmueblesEntregasblackboard(string proyecto)
        {
            return ie.LisInmueblesEntregasblackboard(proyecto);
        }

        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public int documento(string propietarioJ, string cedulaJ,string direccionJ, string manzanaJ,string propietario2J,string conjuntoJ)
        {
            try
            {
                object oMissing = System.Reflection.Missing.Value;
                Word.Application objword = new Word.Application();
                String path = Path.Combine(Server.MapPath("~/Entrega/Actas/"), "documento.docx");
                string ruta = path;
                object parametro = ruta;
                object propietario1 = "propietario";
                object cedula1 = "cedula";
                object direccion1 = "direccion";
                object manzana1 = "manzana";
                object fecha1 = "fecha";
                object propietario2 = "propietario2";
                object conjunto1 = "conjunto";
                Word.Document objdoc = objword.Documents.Open(parametro, oMissing);
                Word.Range pro = objdoc.Bookmarks.get_Item(ref propietario1).Range;
                pro.Text = propietarioJ;
                Word.Range ced = objdoc.Bookmarks.get_Item(ref cedula1).Range;
                ced.Text = cedulaJ;
                Word.Range dir = objdoc.Bookmarks.get_Item(ref direccion1).Range;
                dir.Text = direccionJ;
                Word.Range man = objdoc.Bookmarks.get_Item(ref manzana1).Range;
                man.Text = manzanaJ;
                Word.Range fec = objdoc.Bookmarks.get_Item(ref fecha1).Range;
                fec.Text = DateTime.Now.ToShortDateString();
                Word.Range pro2 = objdoc.Bookmarks.get_Item(ref propietario2).Range;
                pro2.Text = propietario2J;
                Word.Range con = objdoc.Bookmarks.get_Item(ref conjunto1).Range;
                con.Text = conjuntoJ;
                object rango1 = pro;
                object rango2 = ced;
                object rango3 = dir;
                object rango4 = man;
                object rango5 = fec;
                object rango6 = pro2;
                object rango7 = con;
                objdoc.Bookmarks.Add("propietario", rango1);
                objdoc.Bookmarks.Add("cedula", rango2);
                objdoc.Bookmarks.Add("direccion", rango3);
                objdoc.Bookmarks.Add("manzana", rango4);
                objdoc.Bookmarks.Add("fecha", rango5);
                objdoc.Bookmarks.Add("propietario2", rango6);
                objdoc.Bookmarks.Add("conjunto", rango7);
                objword.Visible = true;
                var destino = Path.Combine(Server.MapPath("~/Entrega/Actas/"), direccionJ + ".pdf");
                objdoc.ExportAsFixedFormat(destino, Word.WdExportFormat.wdExportFormatPDF);
                objword.DisplayAlerts = 0;
                objword.ActiveDocument.Close();
                objword.Quit();
                return 1;
            }
            catch
            {
                return 0;
            }
        }
        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public int ActualizarAdj(INMUEBLES_ENTREGAS InmEnt)
        {
          
            return ie.ActualizarDocumentoAdj(InmEnt);
        }
    }
}
