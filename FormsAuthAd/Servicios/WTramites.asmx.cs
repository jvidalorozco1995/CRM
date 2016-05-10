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
    /// Summary description for WTramites
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    // [System.Web.Script.Services.ScriptService]
    public class WTramites : System.Web.Services.WebService
    {
        BLLTramites cl = new BLLTramites();

        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public int InsertTramites(Tramites b)
        {
            return cl.InsertTramites(b);
        }
        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public string UpdateTramites(List<Tramites> i)
        {
            return cl.UpdateTramites(i);
        }
        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public List<Tramites> ListTramites(int id)
        {
            return cl.ListTramites(id);
        }

        [WebMethod]
        public string HelloWorld()
        {
            return "Hello World";
        }
    }
}
