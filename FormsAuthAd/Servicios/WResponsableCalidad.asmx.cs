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
    /// Summary description for WResponsableCalidad
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    [System.Web.Script.Services.ScriptService]
    public class WResponsableCalidad : System.Web.Services.WebService
    {
        BLLResponsableCalidad cl = new BLLResponsableCalidad();
        [WebMethod]
        public string HelloWorld()
        {
            return "Hello World";
        }
        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public int InsertResponsable(ResponsableCalidad b )
        {
            return cl.InserResponsableCalidad(b);
        }
        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public int UpdateResponsable(ResponsableCalidad b)
        {
            return cl.UpdateResponsableCalidad(b);
        }
    }
}
