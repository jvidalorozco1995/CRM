using DAL;
using Entity;
using BLLCRM;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Script.Services;
using System.Web.Services;

namespace FormsAuthAd.Servicios
{
    /// <summary>
    /// Summary description for WConfiguracionNegocios
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // To allow this Web Service to be called from script, using ASP.NET AJAX, uncomment the following line. 
    [System.Web.Script.Services.ScriptService]
    public class WConfiguracionNegocios : System.Web.Services.WebService
    {
        BLLConfiguracionNegocio cl = new BLLConfiguracionNegocio();
        /// <summary>
        /// Metodo para realizar la insercion de la configuracion del cliente
        /// </summary>
        /// <param name="c"></param>
        /// <returns></returns>
        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public int InsertConfiguracion(Configuracion_negocio c)
        {
            return cl.ConfiguracionNegocio(c);
        }

        /// <summary>
        /// Metodo para realizar la insercion de la configuracion del cliente
        /// </summary>
        /// <param name="c"></param>
        /// <returns></returns>
        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public List<Configuracion_Negocio> getAll()
        {
            return cl.getAll();
        }




    }
}
