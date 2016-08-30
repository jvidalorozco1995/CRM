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
    /// Summary description for WListaPersonas
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    [System.Web.Script.Services.ScriptService]
    public class WListaPersonas : System.Web.Services.WebService
    {

        BLLTipoPersonas bt = new BLLTipoPersonas();

        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]

        public List<EntitiTipoPersonas> ListTipoPersonas()
        {
            return bt.LisTipoPersonas();
        }


    }
}
