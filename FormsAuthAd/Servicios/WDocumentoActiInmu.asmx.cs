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
    /// Summary description for WDocumentoActiInmu
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    [System.Web.Script.Services.ScriptService]
    public class WDocumentoActiInmu : System.Web.Services.WebService
    {

        BLLDocumentoActiInmu cl = new BLLDocumentoActiInmu();

        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public int InsertDocumento_ActInmueble(Documento_ActInmueble b)
        {
            return cl.InsertDocumento_ActInmueble(b);
        }
        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public string UpdateDocumento_ActInmueble(List<Documento_ActInmueble> i)
        {
            return cl.UpdateDocumento_ActInmueble(i);
        }
        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public List<Documento_ActInmueble> ListDocumento_ActInmuebleid(int id)
        {
            return cl.ListDocumento_ActInmuebleID(id);
        }
        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public List<Documento_ActInmueble> ListDocumentoTramite(int b)
        {
            return cl.ListDocumentoTramite(b);
        }
        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public List<Documento_ActInmueble> ListDocumento_ActInmueble()
        {
            return cl.ListDocumento_ActInmueble();
        }

            [WebMethod]
        public string HelloWorld()
        {
            return "Hello World";
        }
        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public int DeleteDocumento_ActInmueble( int id)
        {
            return cl.DeleteDocumento_ActInmueble(id);
        }
    }
}
