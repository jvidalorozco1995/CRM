using BLLCRM;
using Entity.VsFox;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Script.Services;
using System.Web.Services;

namespace FormsAuthAd.ServiciosFox
{
    /// <summary>
    /// Descripción breve de WFox
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // Para permitir que se llame a este servicio web desde un script, usando ASP.NET AJAX, quite la marca de comentario de la línea siguiente. 
    [System.Web.Script.Services.ScriptService]
    public class WFox : System.Web.Services.WebService
    {
        BLLFox fx = new BLLFox();
        /// <summary>
        /// Servicio retorna una lista de Los proyectos Alamancenados actualmente
        /// en multifox
        /// </summary>
        /// <returns></returns>
        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public List<ProyecFox> consultafox()
        {
            return fx.ProyecFox();
        }

        /// <summary>
        /// Servicio Retorna un listado de los Bloques Pertecietes
        /// a un pryectos en especifico
        /// </summary>
        /// <param name="p"></param>
        /// <returns></returns>
        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public List<BloquesFox> BloquesFox(string p)
        {

            return fx.BloquesFox(p);

        }

        /// <summary>
        /// Servicio retorna una lista de inmuebles filtrados por un bloque 
        /// seleccinado
        /// </summary>
        /// <param name="b"></param>
        /// <returns></returns>
        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]
        public List<InmueblesFox> InmueblesFox(string b)
        {

            return fx.InmueblesFox(b);

        }
        
        
    }
}
