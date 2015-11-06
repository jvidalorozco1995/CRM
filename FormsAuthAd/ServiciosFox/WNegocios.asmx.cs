using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Script.Services;
using System.Web.Services;
using BLLCRM;
using DAL;
using Entity;
namespace FormsAuthAd.ServiciosFox
{
    /// <summary>
    /// Summary description for WNegocios
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    [System.Web.Script.Services.ScriptService]
    public class WNegocios : System.Web.Services.WebService
    {

        ConecFox fx = new ConecFox();
        /// <summary>
        /// Servicio retorna una lista de Los proyectos Alamancenados actualmente
        /// en multifox
        /// </summary>
        /// <returns></returns>
        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public void consultafox()
        {
            ListNegocio();
          
        }

       

        public void ListNegocio()
        {
            //10MGC001A
            InsertNegocio(fx.ConsulNegocio());
        }

        public void InsertNegocio(List<NegociosFox> ac)
        {
            BLLNegocioFox hn = new BLLNegocioFox();
            hn.Hojanegocio(ac);
        }

    }
}
