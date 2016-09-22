using BLLCRM;
using DAL;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Script.Services;
using System.Web.Services;

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
    }
}
