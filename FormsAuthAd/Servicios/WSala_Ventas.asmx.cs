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
    /// Descripción breve de WSala_Ventas
    /// </summary>
    [WebService(Namespace = "http://tempuri.org/")]
    [WebServiceBinding(ConformsTo = WsiProfiles.BasicProfile1_1)]
    [System.ComponentModel.ToolboxItem(false)]
    // Para permitir que se llame a este servicio web desde un script, usando ASP.NET AJAX, quite la marca de comentario de la línea siguiente. 
    [System.Web.Script.Services.ScriptService]
    public class WSala_Ventas : System.Web.Services.WebService
    {
        BLLSala_Ventas sv = new BLLSala_Ventas();

        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]

        public int InsertSala(sala_ventas s)
        {
            return sv.Addsala(s);
        }

        [WebMethod]
        [ScriptMethod(ResponseFormat = ResponseFormat.Json)]

        public List<EntiSala_Ventas> ListSala()
        {
            return sv.ListSalaVentas();
        }
    }
}
