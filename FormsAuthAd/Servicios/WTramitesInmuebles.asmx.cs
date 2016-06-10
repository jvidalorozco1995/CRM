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
    /// Summary description for WTramitesInmuebles
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
     [System.Web.Script.Services.ScriptService]
    public class WTramitesInmuebles : System.Web.Services.WebService
    {

        BLLTramitesInmueble cl = new BLLTramitesInmueble();

        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public int InsertTramitesinmueble(Tramites_Inmueble b)
        {
            return cl.InsertTramitesinmueble(b);
        }
        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public string UpdateTramitesinmueble(List<Tramites_Inmueble> i)
        {
            return cl.UpdateTramitesinmueble(i);
        }
        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public List<Tramites_Inmueble> ListTramitesinmuebleID(int id)
        {
            return cl.ListTramitesinmuebleID(id);
        }
        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public List<Tramites_Inmueble> ListTramitesinmueble()
        {
            return cl.ListTramitesinmueble();
        }

        [WebMethod]
        public string HelloWorld()
        {
            return "Hello World";
        }
    }
}
