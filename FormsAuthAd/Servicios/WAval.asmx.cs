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
    /// Summary description for WAval
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
     [System.Web.Script.Services.ScriptService]
    public class WAval : System.Web.Services.WebService
    {
        BLLAval cl = new BLLAval();
        BLLFechasAval cel = new BLLFechasAval();
        BBLItemAval ita = new BBLItemAval();
        [WebMethod]
        public string HelloWorld()
        {
            return "Hello World";
        }
        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public int InsertAval(Aval b, List<ItemAval> ItemAval)
        {
            return cl.InsertIAval(b, ItemAval);          
        }
        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public List<VistaAVal> ListAval(string id)
        {
            return cl.ListIAval(id);
            
        }
        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public List<FechasAval> ListFechaAval(int registro)
        {
            return cel.ListFechaAval(registro);

        }
        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public int UpdateItemAval(int idaval)
        {
            return ita.UpdateItemAval(idaval);
        }
        
    }
}
