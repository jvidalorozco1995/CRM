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
    /// Summary description for WActividades
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    // [System.Web.Script.Services.ScriptService]
    public class WActividades : System.Web.Services.WebService
    {

        BLLActividades cl = new BLLActividades();

        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public int InsertActividades(Actividades b)
        {
            return cl.InserActividades(b);
        }
        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public string UpdateActividades(List<Actividades> i)
        {
            return cl.UpdateActividades(i);
        }

        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public List<Actividades> ListActividades(int id)
        {
            return cl.ListActividades(id);
        }
        [WebMethod]
        public string HelloWorld()
        {
            return "Hello World";
        }
    }
}
