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
    /// Summary description for WActividadesInmueble
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    [System.Web.Script.Services.ScriptService]
    public class WActividadesInmueble : System.Web.Services.WebService
    {

        BLLActividadesInmueble cl = new BLLActividadesInmueble();

        [WebMethod]
        public string HelloWorld()
        {
            return "Hello World";
        }
        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public List<Actividades_Inmueble> ListActiInmuebles(int id)
        {
            return cl.ListActInmueble(id);
        }
        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public List<Actividades_Inmueble> ListActiInmueblesId(int id, int idtramite)
        {
            return cl.ListActInmuebleId(id, idtramite);
        }

        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public string UpdateActiInmuebles(int i ,int id, int idtramite)
        {
            return cl.UpdateActInmueble(i,id,idtramite);

        }
    }
}
