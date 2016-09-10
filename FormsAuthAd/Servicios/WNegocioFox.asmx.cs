using BLLCRM;
using DAL;
using Entity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Script.Services;
using System.Web.Services;

namespace FormsAuthAd.Servicios
{
    /// <summary>
    /// Summary description for WNegocioFox
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    [System.Web.Script.Services.ScriptService]
    public class WNegocioFox : System.Web.Services.WebService
    {

        [WebMethod]
        public string HelloWorld()
        {
            return "Hello World";
        }


        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public List<VnegocioFox> lisHoja()
        {
            BLLNegocioFox hn = new BLLNegocioFox();
            return hn.ListHojas();
        }

        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public List<VnegocioFox> lisNegoID(string c)
        {
            BLLNegocioFox hn = new BLLNegocioFox();
            return hn.ListaNegocioID(c);
        }

        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public int ActualizarAdj(string CodCRM, string Documento)
        {
            BLLNegocioFox hn = new BLLNegocioFox();
            return hn.ActualizarDocumentoAdj(CodCRM, Documento);
        }
        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public int ListaryActualizar()
        {
            BLLNegocioFox hn = new BLLNegocioFox();
            return hn.ListaryActualizar();
        }

      [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public List<EntitiNegociosCompro> ConsultaNegociosCompromisos(string c)
        {
            BLLNegociosCompro hn = new BLLNegociosCompro();
            return hn.ListCompromisos(c);
        }

        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public List<EntitiNegociosCompro> ConsultaNegociosCompromisosVE(string c)
        {
            BLLNegociosCompro hn = new BLLNegociosCompro();
            return hn.ListCompromisosfiltroVE(c);
        }

        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public List<EntitiNegociosCompro> ConsultaNegociosCompromisosES(string c)
        {
            BLLNegociosCompro hn = new BLLNegociosCompro();
            return hn.ListCompromisosfiltroES(c);
        }



    }
}
