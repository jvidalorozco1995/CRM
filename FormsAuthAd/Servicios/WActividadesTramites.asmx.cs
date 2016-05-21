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
    /// Summary description for WActividadesTramites
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
     [System.Web.Script.Services.ScriptService]
    public class WActividadesTramites : System.Web.Services.WebService
    {
        BLLActividadTramites cl = new BLLActividadTramites();

        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public int InsertActividadesTramites(ActividadxTramite b)
        {
            return cl.InsertActividadTramite(b);
        }
        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public string UpdateActividadesTramites(List<ActividadxTramite> i)
        {
            return cl.UpdateActividadTramite(i);
        }
        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public List<ActividadxTramite> ListActividadesTramitesID(int id)
        {
            return cl.ListActividadTramite(id);
        }

        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public List<ActividadxTramite> ListActividadesTramites()
        {
            return cl.ListActividadTramite();
        }
       
        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public List<VActxtramite> ListActividadesTramites(int tramite)
        {
            return cl.ListActividadxTramite(tramite);
        }

        [WebMethod]
        public string HelloWorld()
        {
            return "Hello World";
        }
    }
}
